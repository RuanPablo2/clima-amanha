/** Ícones em SVG de traço fino — herdam a cor via currentColor. */
const paths = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18M4.5 7.5h15M4.5 16.5h15" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
  arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
  droplet: <path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11z" />,
  leaf: (
    <>
      <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" />
      <path d="M5 19c3-4 6-6.5 9.5-8.5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="2.8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  home: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-9-9.6C2 6.9 4.4 4.5 7.2 4.5c2 0 3.6 1.2 4.8 3 1.2-1.8 2.8-3 4.8-3 2.8 0 5.2 2.4 4.2 5.9-1.5 5-9 9.6-9 9.6z" />,
  pulse: <path d="M2 12h4l2.5-5 4 10 2.5-5H22" />,
  thermometer: (
    <>
      <path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z" />
      <path d="M12 9v7" />
    </>
  ),
  wind: <path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h7" />,
  bug: (
    <>
      <ellipse cx="12" cy="13.5" rx="3.5" ry="5.5" />
      <path d="M12 8V4M9 5l3 3 3-3M8.5 12H4M8.5 16l-3.5 2M15.5 12H20M15.5 16l3.5 2M8.8 9.5L6 7.5M15.2 9.5L18 7.5" />
    </>
  ),
  flame: <path d="M12 3c1 3.5 5 5.5 5 10.5a5 5 0 0 1-10 0c0-2.4 1.2-4 2.5-5 0 2 1 3 2 3.5C11 9 10.5 6 12 3z" />,
  coin: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.8 9.2c-.5-1-1.6-1.7-2.8-1.7-1.6 0-2.8.9-2.8 2.2 0 3 5.8 1.6 5.8 4.6 0 1.3-1.3 2.2-3 2.2-1.3 0-2.5-.7-3-1.8M12 6v1.5M12 16.5V18" />
    </>
  ),
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  boat: (
    <>
      <path d="M3 15l2.5 4h13L21 15H3z" />
      <path d="M12 3v12M12 4l6 8h-6" />
    </>
  ),
  fish: (
    <>
      <path d="M3 12c3-4.5 7-6 11-6 3 0 5.5 2.5 7 6-1.5 3.5-4 6-7 6-4 0-8-1.5-11-6z" />
      <path d="M3 12L1 8.5M3 12l-2 3.5" />
      <circle cx="16.5" cy="11" r=".8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  tree: (
    <>
      <path d="M12 21v-6" />
      <path d="M12 3l6 8h-3l4 5H5l4-5H6l6-8z" />
    </>
  ),
  phone: <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />,
  message: (
    <>
      <path d="M4 5h16v11H9l-5 4V5z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3l10 18H2L12 3z" />
      <path d="M12 10v5M12 18v.01" />
    </>
  ),
  cross: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M12 7.5v9M7.5 12h9" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.5-3.6 3.2-6 6.5-6s6 2.4 6.5 6" />
      <path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.5c2 .8 3.2 2.8 3.5 5.5" />
    </>
  ),
  rain: (
    <>
      <path d="M7 15a4.5 4.5 0 0 1-.5-9 6 6 0 0 1 11.2 1.6A3.8 3.8 0 0 1 17.5 15H7z" />
      <path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10 9.2v5.6l4.8-2.8L10 9.2z" />
    </>
  ),
  x: <path d="M4 4l16 16M20 4l-6.6 7.4M10.6 12.6L4 20" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V17M8 7.3v.01M12 17v-6.5M12 13.5c0-1.8 1-3 2.6-3 1.4 0 2.4 1 2.4 3V17" />
    </>
  ),
  sparkle: <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />,
}

export default function Icon({ name, size = 24, strokeWidth = 1.6, className = '', ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon ${className}`}
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
