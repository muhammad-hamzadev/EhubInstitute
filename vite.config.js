import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, existsSync } from 'fs'

/**
 * Local API Plugin — Simulates Vercel Serverless for /api/chat during `npm run dev`
 * Reads .env file and routes POST /api/chat to api/chat.js handler in-process.
 * No API key is exposed to the browser — all secrets stay in Node.js process.
 */
function localApiPlugin() {
  return {
    name: 'local-api-proxy',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        // Only allow POST
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method not allowed. Use POST.' }));
          return;
        }

        // Load .env into process.env (local dev only)
        if (existsSync('.env')) {
          const envContent = readFileSync('.env', 'utf8');
          envContent.split('\n').forEach(line => {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#')) return;
            const eqIdx = trimmed.indexOf('=');
            if (eqIdx < 0) return;
            const key = trimmed.slice(0, eqIdx).trim();
            const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
            if (key && !process.env[key]) process.env[key] = val;
          });
        }

        // Collect request body
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
          try {
            req.body = JSON.parse(body || '{}');
            // Import chat handler (cache-bust for hot-reload)
            const { default: handler } = await import(`./api/chat.js?t=${Date.now()}`);
            res.setHeader('Content-Type', 'application/json');
            await handler(req, res);
          } catch (err) {
            console.error('[LocalAPI] Error:', err.message);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      });
    }
  }
}

function asyncCssPlugin() {
  return {
    name: 'async-css-plugin',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/index-[^"]+\.css)">/g,
        '<link rel="preload" as="style" href="$1">\n    <link rel="stylesheet" href="$1" media="print" onload="this.media=\'all\'">\n    <noscript><link rel="stylesheet" href="$1"></noscript>'
      );
    }
  };
}

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    asyncCssPlugin(),
    // localApiPlugin only runs in dev mode — not bundled in production build
    ...(command === 'serve' ? [localApiPlugin()] : [])
  ],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-swiper': ['swiper', 'swiper/react'],
        }
      }
    }
  },
  base: '/',
}))
