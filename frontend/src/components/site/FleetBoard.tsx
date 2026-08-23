import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { StatusDot } from "@/components/site/StatusDot";
import { systems } from "@/data/cv";
import { useLang } from "@/i18n";

/**
 * The signature element. Each platform named in the CV is a node on a board:
 * its headline quantity is the reading, the employer sits opposite it, and the
 * dot says whether this is the work happening now or work already shipped.
 * The board's last cell is the key that explains the dots.
 *
 * Every number shown is stated in the CV. Nothing here is synthetic telemetry.
 */
export function FleetBoard() {
  const { t, c } = useLang();
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card/70 backdrop-blur-[2px]">
      <header className="panel-strip">
        <StatusDot status="live" />
        <span className="label-mono text-foreground/80">fleet</span>
        <span className="label-mono ml-auto">
          {systems.length} {c("nodes")}
        </span>
      </header>

      <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {systems.map((node, index) => {
          const live = node.status === "live";
          return (
            <motion.div
              key={node.id}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.06 * index, ease: "easeOut" }}
              className="bg-card"
            >
              <Link
                to={`/systems#${node.id}`}
                className="group flex h-full flex-col gap-3 p-4 transition-colors hover:bg-elevated/50 focus-visible:bg-elevated/50"
              >
                <div className="flex items-center gap-2">
                  <StatusDot status={node.status} />
                  <span className="font-mono text-sm text-foreground transition-colors group-hover:text-signal">
                    {node.name}
                  </span>
                  <span className="label-mono ml-auto truncate">{node.org}</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-3xl font-semibold leading-none tabular-nums text-attention">
                    {node.metric.value}
                  </span>
                  <span className="text-xs leading-tight text-muted-foreground">
                    {t(node.metric.label)}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground">{t(node.kind)}</p>

                <p className="mt-auto truncate font-mono text-[0.6875rem] text-foreground/45">
                  {node.stack.slice(0, 3).join(" · ")}
                </p>

                {/* activity track */}
                <div className="h-0.5 w-full overflow-hidden rounded-full bg-hairline">
                  {live ? (
                    <span className="block h-full w-1/4 rounded-full bg-signal animate-sweep" />
                  ) : (
                    <span className="block h-full w-full rounded-full bg-muted-foreground/25" />
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}

        {/* the key occupies the board's last cell rather than a strip beneath it */}
        <div className="flex flex-col justify-center gap-3 bg-rail/60 p-4">
          <span className="label-mono">{c("legend")}</span>
          <dl className="space-y-2.5">
            <div className="flex items-center gap-2">
              <StatusDot status="live" />
              <dt className="font-mono text-xs text-foreground/80">{c("statusLive")}</dt>
              <dd className="ml-auto label-mono">
                {systems.filter((node) => node.status === "live").length}
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <StatusDot status="shipped" />
              <dt className="font-mono text-xs text-foreground/80">{c("statusShipped")}</dt>
              <dd className="ml-auto label-mono">
                {systems.filter((node) => node.status === "shipped").length}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
