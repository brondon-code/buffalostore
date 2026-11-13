import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

const strokeProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function ArrowDown(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 4v15" />
      <path d="m6.5 13.5 5.5 5.5 5.5-5.5" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function AndroidIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M7 10h10v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7Z" />
      <path d="M8 10a4 4 0 0 1 8 0" />
      <path d="m8.7 5.5-1.1-1.8M15.3 5.5l1.1-1.8" />
      <path d="M6 12H4v4h2M18 12h2v4h-2M10 19v2M14 19v2" />
      <circle cx="9.7" cy="7.8" r=".55" fill="currentColor" stroke="none" />
      <circle cx="14.3" cy="7.8" r=".55" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BluetoothIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m7 7 10 10-5 4V3l5 4L7 17" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 3v12" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 3 5 6v5c0 4.5 2.9 8.1 7 10 4.1-1.9 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m5 12.5 4.5 4.5L19 6.5" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" />
    </svg>
  );
}

export function LinkIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export function FeatherIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M20 4c-6 0-10 4-10 10v5l-4 1" />
      <path d="M20 4c0 6-4 10-10 10" />
      <path d="M10 14h6" />
      <path d="M14 10H8" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10 18.5h4" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.3 2.6 2.6L16 9.5" />
    </svg>
  );
}

export function XCircleIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6M15 9l-6 6" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
