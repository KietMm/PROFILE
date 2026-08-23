import { cn } from "@/lib/utils";

/**
 * `live` pulses, `shipped` holds steady. The distinction is the only thing the
 * dot is allowed to mean.
 */
export function StatusDot({
  status = "live",
  className,
}: {
  status?: "live" | "shipped";
  className?: string;
}) {
  const live = status === "live";
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block size-1.5 shrink-0 rounded-full",
        live ? "bg-signal animate-heartbeat" : "bg-muted-foreground/60",
        className,
      )}
    />
  );
}
