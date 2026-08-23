import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/site/icons";
import { profile } from "@/data/cv";
import { useLang, ui } from "@/i18n";

const ROUTES = [
  { to: "/", key: "navHome" as const },
  { to: "/systems", key: "navSystems" as const },
  { to: "/experience", key: "navExperience" as const },
  { to: "/contact", key: "navContact" as const },
];

export function SiteFooter() {
  const { t, c, lang } = useLang();

  return (
    <footer className="mt-20 border-t border-border bg-rail/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="font-mono text-sm text-foreground/85">{profile.handle}</p>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {t(profile.role)} · {t(profile.location)}
          </p>
          <div className="flex items-center gap-2 pt-1">
            <a
              href={`mailto:${profile.email}`}
              aria-label={c("fieldEmail")}
              className="grid size-8 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-signal/50 hover:text-signal"
            >
              <Mail className="size-4" />
            </a>
            <a
              href={profile.phoneHref}
              aria-label={c("fieldPhone")}
              className="grid size-8 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-signal/50 hover:text-signal"
            >
              <Phone className="size-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="grid size-8 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-signal/50 hover:text-signal"
            >
              <LinkedInIcon className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="space-y-2.5">
          <p className="label-mono">{c("menu")}</p>
          {ROUTES.map((route) => (
            <Link
              key={route.to}
              to={route.to}
              className="block font-mono text-sm text-muted-foreground transition-colors hover:text-signal"
            >
              <span aria-hidden className="text-foreground/25">/</span>
              {ui[route.key][lang].toLowerCase()}
            </Link>
          ))}
        </nav>

        <div className="space-y-2.5">
          <p className="label-mono">{c("contactTitle")}</p>
          <a
            href={`mailto:${profile.email}`}
            className="block break-all font-mono text-sm text-muted-foreground transition-colors hover:text-signal"
          >
            {profile.email}
          </a>
          <a
            href={profile.phoneHref}
            className="block font-mono text-sm text-muted-foreground transition-colors hover:text-signal"
          >
            {profile.phone}
          </a>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-4 sm:px-6">
          <span className="label-mono">
            © {new Date().getFullYear()} {profile.fullName}
          </span>
          <span className="label-mono">{c("footerNote")}</span>
        </div>
      </div>
    </footer>
  );
}
