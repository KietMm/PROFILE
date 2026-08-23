import { SectionHeading } from "@/components/site/SectionHeading";
import { Panel } from "@/components/site/Panel";
import { StatusDot } from "@/components/site/StatusDot";
import { Badge } from "@/components/ui/badge";
import { achievements, education, experience, spokenLanguages } from "@/data/cv";
import { useLang } from "@/i18n";
import { cn } from "@/lib/utils";

export default function Experience() {
  const { t, c } = useLang();

  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow={`${experience.length} ${c("roles")}`}
        title={c("experienceTitle")}
        lede={c("experienceLede")}
      />

      {/* A single spine runs the length of the record; each role hangs off it. */}
      <ol className="relative space-y-10">
        <span
          aria-hidden
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-hairline sm:block"
        />

        {experience.map((role) => (
          <li key={role.id} className="relative sm:pl-9">
            <span
              aria-hidden
              className={cn(
                "absolute left-0 top-1.5 hidden size-[15px] place-items-center rounded-full border-2 border-background sm:grid",
                role.current ? "bg-signal animate-halo" : "bg-elevated ring-1 ring-border",
              )}
            />

            <div className="space-y-4">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                <h2 className="text-lg font-bold tracking-[-0.01em]">{role.company}</h2>
                {role.current ? (
                  <Badge className="gap-1.5 bg-signal/15 font-mono text-[0.625rem] tracking-[0.12em] text-signal hover:bg-signal/15">
                    <StatusDot status="live" />
                    {c("currentRole")}
                  </Badge>
                ) : null}
                <span className="label-mono ml-auto">{t(role.period)}</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="font-mono text-sm text-foreground/85">{t(role.title)}</p>
                <span aria-hidden className="hidden h-3 w-px bg-border sm:block" />
                <p className="label-mono">{t(role.location)}</p>
              </div>

              <ul className="max-w-[78ch] space-y-3 border-l border-hairline pl-4">
                {role.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="relative text-sm leading-[1.7] text-muted-foreground text-pretty"
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -left-4 top-[0.7em] h-px w-2.5",
                        role.current ? "bg-signal/50" : "bg-border",
                      )}
                    />
                    {t(bullet)}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel id={c("educationTitle")} meta={education.period}>
          <div className="space-y-1.5">
            <p className="text-base font-semibold">{t(education.school)}</p>
            <p className="font-mono text-sm text-muted-foreground">{t(education.degree)}</p>
            <p className="label-mono pt-1">{t(education.location)}</p>
          </div>
        </Panel>

        <Panel id={c("languagesTitle")} meta={`${spokenLanguages.length}`}>
          <dl className="space-y-3">
            {spokenLanguages.map((language) => (
              <div key={language.name.en} className="flex flex-wrap items-baseline gap-x-3">
                <dt className="font-mono text-sm text-foreground">{t(language.name)}</dt>
                <dd className="text-sm text-muted-foreground">{t(language.level)}</dd>
              </div>
            ))}
          </dl>
        </Panel>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-[-0.01em]">{c("achievementsTitle")}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <Panel
              key={achievement.id}
              id={t(achievement.title)}
              meta={String(index + 1).padStart(2, "0")}
            >
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {t(achievement.body)}
              </p>
            </Panel>
          ))}
        </div>
      </section>

      <p className="label-mono border-t border-hairline pt-5">{c("references")}</p>
    </div>
  );
}
