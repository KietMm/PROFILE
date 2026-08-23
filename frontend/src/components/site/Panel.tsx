import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The structural device of the whole site: a bordered instrument panel with a
 * monospace header strip. The strip always carries an identifier on the left
 * and, optionally, a reading on the right — the way a real panel is labelled.
 */
export function Panel({
  id,
  meta,
  lead,
  className,
  bodyClassName,
  children,
}: {
  /** The panel's name, rendered in the header strip. */
  id: string;
  /** A short reading shown at the right edge of the strip. */
  meta?: ReactNode;
  /** Rendered before the id — a status dot, an index, an icon. */
  lead?: ReactNode;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-card/70 backdrop-blur-[2px]",
        className,
      )}
    >
      <header className="panel-strip">
        {lead}
        <span className="label-mono text-foreground/80">{id}</span>
        {meta ? <span className="label-mono ml-auto">{meta}</span> : null}
      </header>
      <div className={cn("p-4 sm:p-5", bodyClassName)}>{children}</div>
    </section>
  );
}
