type LogoProps = {
  size?: number;
  className?: string;
};

export function BuffaloMark({ size = 30, className }: LogoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        fill="#fff"
        d="M16 7.7c-3.52 0-6.2 1.34-7.73 3.73l-2.47-.77 1.98 3.38-1.48 1.88 3.03.61c.57 3.9 3.33 6.77 6.67 6.77s6.1-2.87 6.67-6.77l3.03-.61-1.48-1.88 1.98-3.38-2.47.77C22.2 9.04 19.52 7.7 16 7.7Z"
      />
      <path
        fill="currentColor"
        d="M12.82 14.2a1.38 1.38 0 1 0 0 2.76 1.38 1.38 0 0 0 0-2.76Zm6.36 0a1.38 1.38 0 1 0 0 2.76 1.38 1.38 0 0 0 0-2.76Z"
      />
      <path
        fill="currentColor"
        d="M16 18.35c-1.28 0-2.27.65-2.78 1.67h5.56c-.51-1.02-1.5-1.67-2.78-1.67Z"
      />
    </svg>
  );
}

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-mark">
      <BuffaloMark size={30} />
      {!compact && <span className="brand-name">Buffalo Store</span>}
    </span>
  );
}
