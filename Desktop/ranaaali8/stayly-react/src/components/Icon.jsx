function Icon({
  name,
  size = 20,
  strokeWidth = 1.8,
  className = "",
  filled = false,
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
  };

  const icons = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),

    heart: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
    ),

    user: (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
      </>
    ),

    menu: (
      <>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </>
    ),

    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </>
    ),

    chevronDown: <path d="m6 9 6 6 6-6" />,

    chevronLeft: <path d="m15 18-6-6 6-6" />,

    chevronRight: <path d="m9 18 6-6-6-6" />,

    arrowLeft: (
      <>
        <path d="M19 12H5" />
        <path d="m12 19-7-7 7-7" />
      </>
    ),

    arrowRight: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),

    filter: (
      <>
        <path d="M4 6h16" />
        <path d="M7 12h10" />
        <path d="M10 18h4" />
      </>
    ),

    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
      </>
    ),

    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M16 5a3 3 0 0 1 0 6" />
        <path d="M18 14a5 5 0 0 1 3 4" />
      </>
    ),

    wifi: (
      <>
        <path d="M5 9a11 11 0 0 1 14 0" />
        <path d="M8 12a7 7 0 0 1 8 0" />
        <path d="M11 15a3 3 0 0 1 2 0" />
        <circle cx="12" cy="19" r="1" fill="currentColor" />
      </>
    ),

    tv: (
      <>
        <rect x="3" y="5" width="18" height="13" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 18v3" />
      </>
    ),

    car: (
      <>
        <path d="M5 17h14" />
        <path d="M6 17V9l2-4h8l2 4v8" />
        <path d="M4 13h16" />
        <circle cx="7" cy="17" r="1.5" />
        <circle cx="17" cy="17" r="1.5" />
      </>
    ),

    washer: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <circle cx="12" cy="13" r="4" />
        <path d="M8 7h.01" />
        <path d="M12 7h.01" />
        <path d="M16 7h.01" />
      </>
    ),

    snow: (
      <>
        <path d="M12 2v20" />
        <path d="m4.93 5.93 14.14 12.14" />
        <path d="m19.07 5.93-14.14 12.14" />
        <path d="M2 12h20" />
      </>
    ),

    paw: (
      <path d="M12 18c-3 0-5 2-6 0-1-2 1-4 2-5 1-1 2-2 4-2s3 1 4 2c1 1 3 3 2 5-1 2-3 0-6 0ZM7 8c-1.5 0-2.5-1.5-2-3s2-2 3-1c1 .7 1.5 2.2.8 3.2C8.4 8 7.7 8 7 8Zm10 0c1.5 0 2.5-1.5 2-3s-2-2-3-1c-1 .7-1.5 2.2-.8 3.2.4.8 1.1.8 1.8.8ZM9 6c-1 0-2-1-1.5-2.2C8-7 10-7 11-6c1 .8 1.1 2.4.2 3.2C10.6 6 9.8 6 9 6Zm6 0c1 0 2-1 1.5-2.2C16-7 14-7 13-6c-1 .8-1.1 2.4-.2 3.2.6.8 1.4.8 2.2.8Z" />
    ),

    key: (
      <>
        <circle cx="8" cy="15" r="4" />
        <path d="m11 12 9-9" />
        <path d="m17 6 2 2" />
        <path d="m14 9 2 2" />
      </>
    ),

    bolt: (
      <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />
    ),

    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11h14V9" />
        <path d="M9 20v-6h6v6" />
      </>
    ),

    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    ),

    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),

    minus: <path d="M5 12h14" />,

    x: (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </>
    ),

    sliders: (
      <>
        <path d="M4 6h16" />
        <path d="M7 12h10" />
        <path d="M10 18h4" />
      </>
    ),

    map: (
      <>
        <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path d="M9 3v15" />
        <path d="M15 6v15" />
      </>
    ),

    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5" />
        <path d="M12 8h.01" />
      </>
    ),

    check: <path d="m5 12 4 4L19 6" />,
  };

  return <svg {...common}>{icons[name]}</svg>;
}

export default Icon;