import React from 'react';

const EHubOfficialLogoSVG = ({ height = 55, className = "", textColor = "#721C24" }) => {
  return (
    <svg
      height={height}
      viewBox="0 0 600 140"
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
        <clipPath id="circleClip">
          <circle cx="65" cy="65" r="65" />
        </clipPath>
      </defs>

      {/* --- RASTER ICON (Left Side) --- */}
      <g transform="translate(5, 5)">
        <image href="/ehub-logo.png" x="0" y="0" width="130" height="130" clipPath="url(#circleClip)" />
      </g>

      {/* --- TYPOGRAPHY GROUP (Prominent E-Hub Institute Branding) --- */}
      <g transform="translate(145, 42)">
        <text
          x="0"
          y="34"
          fill={textColor}
          fontFamily="'Outfit', 'Playfair Display', sans-serif"
          fontWeight="900"
          fontSize="48"
          letterSpacing="-0.5"
        >
          E-Hub Institute
        </text>
        <text
          x="0"
          y="66"
          fill="#B8860B"
          fontFamily="'Outfit', 'Montserrat', sans-serif"
          fontWeight="700"
          fontSize="16"
          letterSpacing="0.8"
        >
          INTERNATIONAL ENGLISH TRAINING INSTITUTE
        </text>
        <text
          x="0"
          y="88"
          fill="#94A3B8"
          fontFamily="'Outfit', sans-serif"
          fontWeight="600"
          fontSize="13"
          letterSpacing="0.5"
        >
          Peshawar • Established 2019
        </text>
      </g>
    </svg>
  );
};

export default EHubOfficialLogoSVG;
