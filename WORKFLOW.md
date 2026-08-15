# E-Hub Institute Landing Page - Developer Workflow

This document explains how the E-Hub landing page is structured and how you can easily make changes to images, text, and styles.

## 📁 Project Structure

```text
ehub-landing/
│
├── index.html            # The main landing page file containing all text and layout.
├── extract_pdf.py        # Python script used to extract images from the booklet.
├── booklet .pdf          # Original booklet PDF provided.
│
└── assets/
    ├── css/
    │   └── style.css     # Contains all colors, fonts, and layout styles.
    ├── js/
    │   └── main.js       # Handles scrolling and mobile menu logic.
    └── images/           # Contains all 118 images extracted from the PDF.
```

---

## 🖼️ How to Change Images

The images used on the website were automatically extracted from your PDF and placed in the `assets/images/` folder. They have names like `img_p2_2.png`.

**To replace an image:**
1. Open the `assets/images/` folder on your computer to preview all the extracted images.
2. Find the image you want to use and copy its filename (e.g., `img_p16_3.png`).
3. Open `index.html` and search for the section you want to change (e.g., `id="hero-img"` or the `success-card`).
4. Replace the `src` attribute with the new image path. 
   - *Example:* `<img src="assets/images/img_p16_3.png" alt="...">`
5. Save `index.html` and refresh your browser.

---

## 📝 How to Change Text

1. Open `index.html`.
2. Look for the HTML tags like `<h1>`, `<h2>`, or `<p>`.
3. Simply replace the text inside those tags.
   - *Example:* Change `<h2>A modern approach to <span class="text-accent">education.</span></h2>` to whatever you prefer.
4. Save the file and refresh your browser.

---

## 🎨 How to Change Colors

If you want to change the primary maroon or gold colors:
1. Open `assets/css/style.css`.
2. At the very top of the file, look for the `:root` section.
3. Change the hex color codes.
   ```css
   :root {
       --color-primary: #721C24; /* Deep Maroon - Change this to alter main color */
       --color-secondary: #D4AF37; /* Subtle Gold - Change this for accents */
   }
   ```
4. Save the file and refresh your browser. The colors will update across the entire site automatically!

---

## 🚀 How to View & Deploy

**To view your changes locally:**
Just double-click the `index.html` file in your File Explorer. It will open in your default browser (Chrome/Edge/Safari). Every time you save a change in the code, simply refresh the browser tab.

**To deploy (publish) to the internet:**
Since this is a lightweight, single-page website without a backend, you can easily host it for free using:
- **Vercel** (Drag and drop the folder)
- **Netlify** (Drag and drop the folder)
- **GitHub Pages**
