import React from 'react';

// Leaf Sprout for Engaon Logo
export const LeafSprout = ({ className = "w-5 h-5", color = "#27ae60" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" fill={color} fillOpacity="0.85" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" stroke="#1b3b2b" strokeWidth="2" />
  </svg>
);

// Green leaf for section headings
export const SectionLeaf = () => (
  <span style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '6px' }}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#2d7a46">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.6 8.4C6.2 19 6 17.5 6 16c0-4.4 3.6-8 8-8 1.5 0 3 .2 4.4.6C16.6 3.8 13.5 2 12 2z" />
      <path d="M21.7 8.3C21.9 9.5 22 10.7 22 12c0 5.5-4.5 10-10 10-1.3 0-2.5-.1-3.7-.3C10.1 19.9 12 17.2 12 14c0-3.3-2.7-6-6-6-1.1 0-2.1.3-3.1.8C3.8 5.6 7.6 3 12 3c4.2 0 7.8 2.5 9.4 6.2.1-.3.2-.6.3-.9z" fill="#38a169"/>
    </svg>
  </span>
);

// WhatsApp Icon
export const WhatsAppIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15M16.56 14.37C16.31 14.25 15.09 13.65 14.86 13.56C14.63 13.48 14.47 13.44 14.3 13.69C14.14 13.93 13.67 14.49 13.53 14.65C13.39 14.82 13.24 14.84 12.99 14.71C12.74 14.59 11.95 14.33 11.01 13.49C10.28 12.84 9.79 12.03 9.64 11.78C9.5 11.54 9.63 11.4 9.75 11.28C9.86 11.17 10 11 10.12 10.86C10.24 10.72 10.28 10.62 10.36 10.45C10.44 10.29 10.4 10.15 10.34 10.02C10.28 9.9 9.8 8.71 9.6 8.22C9.4 7.75 9.2 7.81 9.05 7.81C8.91 7.8 8.75 7.8 8.59 7.8C8.42 7.8 8.16 7.86 7.93 8.11C7.71 8.35 7.08 8.94 7.08 10.15C7.08 11.36 7.96 12.53 8.08 12.69C8.21 12.85 9.81 15.33 12.27 16.39C12.85 16.64 13.31 16.79 13.66 16.91C14.25 17.09 14.79 17.07 15.22 17C15.7 16.93 16.7 16.4 16.91 15.81C17.11 15.22 17.11 14.71 17.05 14.61C16.99 14.5 16.82 14.44 16.56 14.37Z" />
  </svg>
);

// Sugarcane Icon
export const SugarcaneIcon = ({ size = 28, color = "#2d7a46" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" />
    <path d="M8 5v14" />
    <path d="M16 5v14" />
    <path d="M6 9h12" />
    <path d="M6 15h12" />
    <path d="M12 2c2 3 5 4 8 4" />
    <path d="M12 6c-3 2-5 5-8 5" />
    <path d="M12 12c3 2 6 2 8 3" />
  </svg>
);

// Mortar / Traditional Pot Icon
export const TraditionalPotIcon = ({ size = 28, color = "#2d7a46" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 9h16v2a8 8 0 0 1-16 0V9z" fill={color} fillOpacity="0.1" />
    <path d="M3 9h18" />
    <path d="M12 2v5" />
    <path d="M8 4l8 2" />
    <path d="M7 19h10" />
    <path d="M9 19v2" />
    <path d="M15 19v2" />
  </svg>
);

// Family / Heart Care Icon
export const FamilyHeartIcon = ({ size = 28, color = "#2d7a46" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill={color} fillOpacity="0.1" />
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

// Trust / Guarantee Badge Icon
export const TrustBadgeIcon = ({ size = 28, color = "#2d7a46" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" fill={color} fillOpacity="0.1" />
    <path d="m9 12 2 2 4-4" />
    <path d="M12 3v2" />
    <path d="M12 19v2" />
    <path d="M3 12h2" />
    <path d="M19 12h2" />
  </svg>
);

// Tractor / Rural India Icon
export const TractorIcon = ({ size = 28, color = "#2d7a46" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="15" r="4" fill={color} fillOpacity="0.1"/>
    <circle cx="18" cy="16" r="2.5" fill={color} fillOpacity="0.1"/>
    <path d="M11 15h4.5" />
    <path d="M7 11V6h5l2 5h5v2" />
    <path d="M7 15h.01" />
    <path d="M18 16h.01" />
    <path d="M4 6h3" />
  </svg>
);

// Leaf chemical-free icon
export const ChemicalFreeIcon = ({ size = 28, color = "#2d7a46" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" fill={color} fillOpacity="0.15" />
    <path d="m2 2 20 20" stroke="#c9382b" strokeWidth="2" />
  </svg>
);

// Star Icon
export const StarIcon = ({ filled = true, color = "#e59e19" }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill={filled ? color : "none"} stroke={color} strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Social Icons
export const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
  </svg>
);
