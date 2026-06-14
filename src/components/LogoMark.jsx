export default function LogoMark({ size = 40, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="74" height="74" rx="18" stroke="#1E8FE1" strokeWidth="4" />
      {/* M left leg */}
      <rect x="16" y="38" width="10" height="26" rx="3" fill="#0D2C6E" />
      {/* M right leg */}
      <rect x="54" y="38" width="10" height="26" rx="3" fill="#0D2C6E" />
      {/* V chevron */}
      <path
        d="M16 42 L40 62 L64 42"
        stroke="#0D2C6E"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Two people */}
      <circle cx="26" cy="30" r="7" fill="#0D2C6E" />
      <circle cx="54" cy="30" r="7" fill="#0D2C6E" />
      {/* Plus cross */}
      <rect x="36" y="12" width="8" height="20" rx="3" fill="#1E8FE1" />
      <rect x="30" y="18" width="20" height="8" rx="3" fill="#1E8FE1" />
    </svg>
  );
}
