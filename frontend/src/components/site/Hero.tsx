import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusDot } from "@/components/site/StatusDot";
import { useTypewriter } from "@/hooks/use-typewriter";
import { profile, vitals } from "@/data/cv";
import { useLang } from "@/i18n";

export function Hero() {
  const { t, c } = useLang();
  const reduceMotion = useReducedMotion();
  const thesis = t(profile.thesis);
  const { shown, done } = useTypewriter(thesis, { enabled: !reduceMotion });

  return (
    <div className="space-y-8">
      <div className="max-w-3xl space-y-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="label-mono">{t(profile.role)}</span>
          <span aria-hidden className="h-3 w-px bg-border" />
          <span className="flex items-center gap-1.5">
            <StatusDot status="live" />
            <span className="label-mono">{t(profile.location)}</span>
          </span>
        </div>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-balance"
        >
          {profile.firstName}{" "}
          <span className="text-signal">{profile.lastName}</span>
        </motion.h1>

        {/* the thesis streams in, the way a task streams over the control plane */}
        <p className="min-h-[3.5rem] font-mono text-sm leading-relaxed text-foreground/85 sm:min-h-[3rem] sm:text-base">
          <span aria-hidden className="mr-2 text-signal">&gt;</span>
          <span aria-live="polite">{shown}</span>
          {done ? null : (
            <span aria-hidden className="ml-0.5 inline-block h-[1em] w-[0.5ch] translate-y-[0.1em] bg-signal animate-caret" />
          )}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button asChild className="font-mono text-xs">
            <a href={`mailto:${profile.email}`}>
              <Mail className="size-4" />
              {c("emailMe")}
            </a>
          </Button>
          <Button asChild variant="outline" className="font-mono text-xs">
            <Link to="/systems">
              {c("viewSystems")}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* headline readings — every value is stated on the CV */}
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-hairline sm:grid-cols-4">
        {vitals.map((vital) => (
          <div key={vital.id} className="bg-card px-4 py-3.5">
            <dt className="label-mono">{t(vital.label)}</dt>
            <dd className="mt-2 font-mono text-2xl font-semibold leading-none tabular-nums text-attention">
              {vital.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
