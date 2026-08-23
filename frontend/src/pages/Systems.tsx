import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatusDot } from "@/components/site/StatusDot";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { chipClass } from "@/components/site/chip";
import { systems } from "@/data/cv";
import { useLang } from "@/i18n";
import { cn } from "@/lib/utils";

export default function Systems() {
  const { t, c } = useLang();
  const { hash } = useLocation();
  const [open, setOpen] = useState<string[]>([systems[0].id]);

  // Arriving from a fleet node opens that system and scrolls to it.
  useEffect(() => {
    const target = hash.replace("#", "");
    if (!target || !systems.some((system) => system.id === target)) return;
    setOpen((current) => (current.includes(target) ? current : [...current, target]));
    document.getElementById(target)?.scrollIntoView({ block: "center" });
  }, [hash]);

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow={`${systems.length} ${c("platforms")}`}
        title={c("systemsTitle")}
        lede={c("systemsLede")}
      />

      <Accordion
        type="multiple"
        value={open}
        onValueChange={setOpen}
        className="overflow-hidden rounded-lg border border-border bg-card/70 backdrop-blur-[2px]"
      >
        {systems.map((system, index) => {
          const live = system.status === "live";
          return (
            <AccordionItem
              key={system.id}
              id={system.id}
              value={system.id}
              className={cn("scroll-mt-28 border-hairline", index === systems.length - 1 && "border-b-0")}
            >
              <AccordionTrigger className="gap-3 px-4 py-4 hover:no-underline data-[state=open]:bg-rail/40">
                <div className="flex flex-1 flex-wrap items-center gap-x-3 gap-y-1.5 text-left">
                  <StatusDot status={system.status} />
                  <span className="font-mono text-sm text-foreground">{system.name}</span>
                  <span className="label-mono">{t(system.kind)}</span>
                  <span className="ml-auto flex items-center gap-2 pr-2">
                    <span className="font-mono text-base font-semibold tabular-nums text-attention">
                      {system.metric.value}
                    </span>
                    <span className="hidden text-xs text-muted-foreground sm:inline">
                      {t(system.metric.label)}
                    </span>
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="border-t border-hairline bg-rail/20 px-4 pb-5 pt-4">
                <div className="grid gap-6 lg:grid-cols-[1fr_16rem]">
                  <div className="space-y-4">
                    <p className="text-sm leading-relaxed text-foreground/85 text-pretty">
                      {t(system.summary)}
                    </p>

                    <div className="space-y-2.5">
                      <p className="label-mono">{c("whatIBuilt")}</p>
                      <ul className="space-y-2.5">
                        {system.detail.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span
                              aria-hidden
                              className={cn(
                                "mt-2 size-1 shrink-0 rounded-full",
                                live ? "bg-signal/60" : "bg-muted-foreground/50",
                              )}
                            />
                            <span className="text-pretty">{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <aside className="space-y-4 lg:border-l lg:border-hairline lg:pl-6">
                    <div className="space-y-2">
                      <p className="label-mono">{c("stackLabel")}</p>
                      <ul className="flex flex-wrap gap-1.5">
                        {system.stack.map((item) => (
                          <li key={item}>
                            <Badge variant="outline" className={chipClass}>
                              {item}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <p className="label-mono">{system.org}</p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {live ? c("statusLive") : c("statusShipped")}
                      </p>
                    </div>
                  </aside>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
