"use client";

interface EcoMeterLogoProps {
  size?: number;
  className?: string;
}

export function EcoMeterLogo({ size = 32, className = "" }: EcoMeterLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Leaf Shape */}
      <defs>
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#84cc16" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>

      {/* Main Leaf */}
      <path
        d="M 100 20 C 140 40 160 80 160 120 C 160 155 135 185 100 185 C 70 185 50 160 50 130 C 50 85 70 40 100 20 Z"
        fill="url(#leafGradient)"
      />

      {/* Leaf Vein */}
      <path
        d="M 100 20 Q 105 80 100 185"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Globe Group */}
      <g transform="translate(100, 80)">
        {/* Globe circle */}
        <circle cx="0" cy="0" r="35" fill="url(#globeGradient)" opacity="0.9" />

        {/* Globe grid lines */}
        <circle cx="0" cy="0" r="35" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />

        {/* Horizontal lines */}
        <line x1="-35" y1="-12" x2="35" y2="-12" stroke="white" strokeWidth="1.5" opacity="0.5" />
        <line x1="-35" y1="0" x2="35" y2="0" stroke="white" strokeWidth="1.5" opacity="0.5" />
        <line x1="-35" y1="12" x2="35" y2="12" stroke="white" strokeWidth="1.5" opacity="0.5" />

        {/* Vertical lines */}
        <line x1="-15" y1="-35" x2="-15" y2="35" stroke="white" strokeWidth="1.5" opacity="0.5" />
        <line x1="0" y1="-35" x2="0" y2="35" stroke="white" strokeWidth="1.5" opacity="0.5" />
        <line x1="15" y1="-35" x2="15" y2="35" stroke="white" strokeWidth="1.5" opacity="0.5" />

        {/* Arc lines for latitude */}
        <path d="M -30 -8 Q 0 -35 30 -8" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
        <path d="M -30 12 Q 0 35 30 12" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />

        {/* IoT Nodes */}
        {/* Left nodes */}
        <g>
          {/* Top left node */}
          <circle cx="-22" cy="-8" r="3.5" fill="white" />
          <line x1="-25" y1="-8" x2="-35" y2="-8" stroke="white" strokeWidth="2" strokeLinecap="round" />

          {/* Middle left node */}
          <circle cx="-22" cy="6" r="3.5" fill="white" />
          <line x1="-25" y1="6" x2="-35" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />

          {/* Bottom left node */}
          <circle cx="-22" cy="20" r="3.5" fill="white" />
          <line x1="-25" y1="20" x2="-35" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Network connections */}
        <line x1="-22" y1="-8" x2="0" y2="-15" stroke="white" strokeWidth="1.5" opacity="0.6" />
        <line x1="-22" y1="6" x2="5" y2="0" stroke="white" strokeWidth="1.5" opacity="0.6" />
        <line x1="-22" y1="20" x2="0" y2="25" stroke="white" strokeWidth="1.5" opacity="0.6" />
      </g>
    </svg>
  );
}
