import React from 'react';

const EHubOfficialLogoSVG = ({ height = 55, className = "" }) => {
  return (
    <svg
      height={height}
      viewBox="0 0 380 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <defs>
        <linearGradient id="maroonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7A003C" />
          <stop offset="100%" stopColor="#520028" />
        </linearGradient>
        <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#C62828" />
        </linearGradient>
        <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEB3B" />
          <stop offset="100%" stopColor="#FDD835" />
        </linearGradient>
        <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* --- ICON GROUP (Left Side) --- */}
      <g transform="translate(10, 5)">
        {/* 1. Red World Globe Background */}
        <circle cx="65" cy="75" r="42" fill="url(#globeGrad)" />
        <path
          d="M35 65 C40 55, 55 50, 60 58 C65 66, 50 80, 42 85 C35 90, 30 75, 35 65 Z"
          fill="#B71C1C"
          opacity="0.6"
        />
        <path
          d="M75 55 C85 50, 98 60, 95 72 C92 84, 80 92, 72 95 C68 85, 70 65, 75 55 Z"
          fill="#B71C1C"
          opacity="0.6"
        />

        {/* 2. Maroon Graduation Cap (Top) */}
        <path
          d="M45 42 C45 35, 85 35, 85 42 C85 49, 45 49, 45 42 Z"
          fill="#520028"
        />
        <path
          d="M10 32 L70 2 L130 32 L70 54 Z"
          fill="url(#maroonGrad)"
          stroke="#42001F"
          strokeWidth="1"
        />
        <path d="M105 32 L105 56 L110 65 L100 65 L105 56 Z" fill="#7A003C" />
        <circle cx="105" cy="32" r="3" fill="#FFD700" />

        {/* 3. Yellow "E-Hub" Badge (Tilted Across Globe) */}
        <g transform="translate(12, 58) rotate(-9)">
          <rect
            x="0"
            y="0"
            width="68"
            height="26"
            rx="6"
            fill="url(#yellowGrad)"
            stroke="#212121"
            strokeWidth="2"
            filter="url(#logoShadow)"
          />
          <text
            x="34"
            y="18"
            fill="#000000"
            fontFamily="'Outfit', 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="15"
            textAnchor="middle"
            letterSpacing="-0.5"
          >
            E-Hub
          </text>
        </g>

        {/* 4. Flying Airplane (Bottom Right Flying Upwards) */}
        <g transform="translate(45, 95) rotate(-12)">
          <path
            d="M5 22 L75 10 C82 9, 85 14, 78 18 L15 28 Z"
            fill="#1565C0"
          />
          <path
            d="M15 20 C30 18, 75 10, 85 12 C92 13, 88 18, 75 22 C55 26, 20 28, 15 27 Z"
            fill="#FFFFFF"
            stroke="#1565C0"
            strokeWidth="1.5"
          />
          <path d="M18 20 L8 5 L25 18 Z" fill="#0D47A1" />
          <circle cx="35" cy="18" r="1.5" fill="#1565C0" />
          <circle cx="43" cy="17" r="1.5" fill="#1565C0" />
          <circle cx="51" cy="16" r="1.5" fill="#1565C0" />
          <circle cx="59" cy="15" r="1.5" fill="#1565C0" />
          <circle cx="67" cy="14" r="1.5" fill="#1565C0" />
        </g>
      </g>

      {/* --- TYPOGRAPHY GROUP (Prominent E-Hub Institute Branding) --- */}
      <g transform="translate(145, 38)">
        <text
          x="0"
          y="28"
          fill="#721C24"
          fontFamily="'Outfit', 'Playfair Display', sans-serif"
          fontWeight="900"
          fontSize="30"
          letterSpacing="-0.5"
        >
          E-Hub Institute
        </text>
        <text
          x="0"
          y="54"
          fill="#B8860B"
          fontFamily="'Outfit', 'Montserrat', sans-serif"
          fontWeight="700"
          fontSize="13"
          letterSpacing="0.8"
        >
          INTERNATIONAL ENGLISH TRAINING HUB
        </text>
        <text
          x="0"
          y="72"
          fill="#666666"
          fontFamily="'Outfit', sans-serif"
          fontWeight="600"
          fontSize="11"
          letterSpacing="0.5"
        >
          Peshawar • Established 2019
        </text>
      </g>
    </svg>
  );
};

export default EHubOfficialLogoSVG;
