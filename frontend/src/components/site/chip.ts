import { cn } from "@/lib/utils";

/**
 * Shared styling for every technology chip on the site. It overrides the
 * Badge default of a fixed height and no wrapping, because several CV entries
 * are full phrases rather than single words.
 */
export const chipClass = cn(
  "h-auto whitespace-normal border-border bg-elevated/50 px-2 py-1 text-left",
  "font-mono text-[0.6875rem] font-normal leading-snug text-foreground/75",
);
