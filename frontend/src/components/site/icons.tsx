import type { SVGProps } from "react";

/** lucide-react dropped brand marks in v1, so the LinkedIn glyph lives here. */
export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95C21.4 8.69 22 11.02 22 14.05V21h-4v-6.16c0-1.47-.03-3.36-2.06-3.36-2.06 0-2.38 1.6-2.38 3.25V21h-4V9Z" />
    </svg>
  );
}
