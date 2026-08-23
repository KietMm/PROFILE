import type { ReactNode } from "react";

/** A page title with an instrument label above it and an optional lede below. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  action,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-5">
      <div className="max-w-2xl space-y-2.5">
        <span className="label-mono block text-signal/75">{eyebrow}</span>
        <h1 className="text-3xl font-extrabold uppercase tracking-[-0.02em] sm:text-4xl">
          {title}
        </h1>
        {lede ? <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{lede}</p> : null}
      </div>
      {action}
    </div>
  );
}
