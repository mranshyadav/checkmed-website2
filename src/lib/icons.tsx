import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ShieldHeart(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4 6v6c0 4.5 3.2 7.6 8 9 4.8-1.4 8-4.5 8-9V6l-8-3Z" />
      <path d="M12 16s-3.2-2-3.2-4.1A1.9 1.9 0 0 1 12 10a1.9 1.9 0 0 1 3.2 1.9C15.2 14 12 16 12 16Z" />
    </svg>
  );
}

export function HeartPulse(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20.4 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.3-1.3a5 5 0 1 0-7.1 7.1l1.3 1.3L12 21l7.1-7 1.3-1.3a5 5 0 0 0 0-7.1Z" />
      <path d="M3.5 12.5h4l1.5-2.5 2.5 5 1.8-3 1 .5h3.7" />
    </svg>
  );
}

export function Stethoscope(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 3v6a4 4 0 0 0 8 0V3" />
      <path d="M4.5 3H3.5M12.5 3h-1" />
      <path d="M8 17a5 5 0 0 0 10 0v-2" />
      <circle cx="18" cy="12" r="2.2" />
    </svg>
  );
}

export function Video(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="6" width="12.5" height="12" rx="2.5" />
      <path d="m15 10 6-3.2v10.4L15 14" />
    </svg>
  );
}

export function Flask(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 3h6M10 3v6.2L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.2V3" />
      <path d="M7.3 14h9.4" />
    </svg>
  );
}

export function Pill(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.6" y="8.6" width="18.8" height="6.8" rx="3.4" transform="rotate(-45 12 12)" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  );
}

export function Brain(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9.5 4.5A2.5 2.5 0 0 0 7 7a2.5 2.5 0 0 0-1 4.8V14a3 3 0 0 0 3.5 3v.5a2 2 0 0 0 2 2c.8 0 1-.6 1-1.3V5.8c0-.8-.2-1.3-1-1.3a2 2 0 0 0-2 0Z" />
      <path d="M14.5 4.5A2.5 2.5 0 0 1 17 7a2.5 2.5 0 0 1 1 4.8V14a3 3 0 0 1-3.5 3" />
    </svg>
  );
}

export function Activity(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12h4l2.5-7 4 14 2.5-7H21" />
    </svg>
  );
}

export function Building(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="11" height="18" rx="1.5" />
      <path d="M15 8h4a1.5 1.5 0 0 1 1.5 1.5V21" />
      <path d="M7.5 7h4M7.5 11h4M7.5 15h4M18 12h.01M18 16h.01" />
    </svg>
  );
}

export function Umbrella(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9Z" />
      <path d="M12 12v6.5a2.5 2.5 0 0 0 5 0" />
    </svg>
  );
}

export function Users(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6M17.5 20a5.5 5.5 0 0 0-3-4.9" />
    </svg>
  );
}

export function Hospital(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21h18" />
      <path d="M5 21V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15" />
      <path d="M12 7v4M10 9h4" />
      <path d="M9 21v-3.5A1.5 1.5 0 0 1 10.5 16h3a1.5 1.5 0 0 1 1.5 1.5V21" />
    </svg>
  );
}

export function Spark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function Calendar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path d="m8.5 14 2.2 2.2L15 12.7" />
    </svg>
  );
}

export function Lock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      <path d="M12 14.5v2.5" />
    </svg>
  );
}

export function ChartDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 4v16h18" />
      <path d="M7 9l4 4 3-3 5 5" />
      <path d="M19 11v4h-4" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
      <path d="M9.5 6C6.5 7 5 9.5 5 13v5h6v-6H7.8c0-2 .9-3.4 2.7-4L9.5 6Zm9 0c-3 1-4.5 3.5-4.5 7v5h6v-6h-3.2c0-2 .9-3.4 2.7-4L18.5 6Z" />
    </svg>
  );
}

export function CheckMedLogo(props: IconProps) {
  return (
    <svg {...props} viewBox="0 0 32 32" fill="none">
      <rect x="2" y="2" width="28" height="28" rx="9" fill="url(#cm-grad)" />
      <path
        d="M9 16.5 13.4 21 23 11"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 7.5v3M14.5 9h3" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
      <defs>
        <linearGradient id="cm-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10b886" />
          <stop offset="1" stopColor="#057857" />
        </linearGradient>
      </defs>
    </svg>
  );
}
