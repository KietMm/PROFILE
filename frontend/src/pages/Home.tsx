import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { FleetBoard } from "@/components/site/FleetBoard";
import { Panel } from "@/components/site/Panel";
import { StatusDot } from "@/components/site/StatusDot";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { chipClass } from "@/components/site/chip";
import { competencies, experience, profile } from "@/data/cv";
import { useLang } from "@/i18n";

export default function Home() {
  const { t, c } = useLang();
  const current = experience[0];

  return (
    <div className="space-y-14">
      <Hero />

      <section className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-xl font-bold uppercase tracking-[-0.01em]">{c("fleetTitle")}</h2>
          <p className="text-sm text-muted-foreground">{c("fleetHint")}</p>
        </div>
        <FleetBoard />
      </section>

      <div className="grid items-start gap-6 lg:grid-cols-[1.35fr_1fr]">
        <Panel id={c("summaryTitle")} meta={t(profile.role)}>
          <p className="text-sm leading-[1.75] text-foreground/85 text-pretty">
            {t(profile.summary)}
          </p>
        </Panel>

        <Panel
          id={current.company}
          lead={<StatusDot status="live" />}
          meta={t(current.period)}
        >
          <div className="space-y-3">
            <p className="font-mono text-sm text-foreground">{t(current.title)}</p>
            <ul className="space-y-2.5">
              {current.bullets.slice(0, 2).map((bullet, index) => (
                <li key={index} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-signal/60" />
                  <span className="text-pretty">{t(bullet)}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="ghost" size="sm" className="font-mono text-xs text-signal hover:text-signal">
              <Link to="/experience">
                {c("experienceTitle")}
                <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </Panel>
      </div>

      <section className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-xl font-bold uppercase tracking-[-0.01em]">{c("stackTitle")}</h2>
          <p className="text-sm text-muted-foreground">{c("stackHint")}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((group, index) => (
            <Panel
              key={group.id}
              id={t(group.label)}
              meta={String(index + 1).padStart(2, "0")}
              bodyClassName="p-3.5"
              // the seventh group closes the section across the full width,
              // so the grid never ends on a half-empty row
              className={index === competencies.length - 1 ? "lg:col-span-3" : undefined}
            >
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge variant="outline" className={chipClass}>
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Panel>
          ))}
        </div>
      </section>
    </div>
  );
}
