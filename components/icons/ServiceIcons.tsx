"use client";

import { LucideProps } from "lucide-react";

// Custom SVG icons with premium styling
export const FractionalCSOIcon = (props: LucideProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const AIAutomationIcon = (props: LucideProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
    <path d="M16 10h2a4 4 0 0 1 0 8h-2" />
    <path d="M8 10H6a4 4 0 0 0 0 8h2" />
    <path d="M12 18v4" />
    <path d="M8 22h8" />
  </svg>
);

export const CoachingIcon = (props: LucideProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-.5-.5-.8-1.2-.8-2 0-1.7 1.3-3 3-3s3 1.3 3 3" />
    <path d="M14 2h-4v6h4V2z" />
    <path d="M12 8v14" />
    <path d="M9 11l3 3 3-3" />
  </svg>
);

export const AnalyticsIcon = (props: LucideProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 21H3V3" />
    <path d="M21 9L13 3L9 9L3 6" />
    <circle cx="13" cy="3" r="1" />
    <circle cx="9" cy="9" r="1" />
    <circle cx="3" cy="6" r="1" />
  </svg>
);