import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LangToggle } from "@/components/site/LangToggle";
import { LocalClock } from "@/components/site/LocalClock";
import { StatusDot } from "@/components/site/StatusDot";
import { profile } from "@/data/cv";
import { useLang, ui } from "@/i18n";
import { cn } from "@/lib/utils";

const ROUTES = [
  { to: "/", key: "navHome" as const },
  { to: "/systems", key: "navSystems" as const },
  { to: "/experience", key: "navExperience" as const },
  { to: "/contact", key: "navContact" as const },
];

/**
 * Two bands: a status rail carrying live readings, and the navigation itself.
 * Routes are written as paths because that is what they are.
 */
export function SiteHeader() {
  const { t, c, lang } = useLang();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      {/* status rail */}
      <div className="border-b border-hairline bg-rail/70">
        <div className="mx-auto flex h-8 max-w-6xl items-center gap-3 px-4 sm:px-6">
          <StatusDot status="live" />
          <span className="label-mono truncate text-foreground/70">{c("railStatus")}</span>
          <span className="ml-auto hidden items-center gap-3 sm:flex">
            <span className="label-mono">{t(profile.location)} · UTC+7</span>
            <span aria-hidden className="h-3 w-px bg-border" />
            <span className="label-mono flex items-center gap-1.5">
              <span className="sr-only">{c("railLocalTime")}</span>
              <LocalClock />
            </span>
          </span>
          <span className="ml-auto sm:hidden">
            <span className="label-mono">
              <LocalClock />
            </span>
          </span>
        </div>
      </div>

      {/* navigation */}
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-2.5 rounded-sm">
          <span
            aria-hidden
            className="grid size-7 place-items-center rounded-sm border border-signal/40 bg-signal/10 font-mono text-[0.6875rem] font-semibold text-signal"
          >
            CK
          </span>
          <span className="font-mono text-sm text-foreground/85 transition-colors group-hover:text-signal">
            {profile.handle}
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 md:flex">
          {ROUTES.map((route) => (
            <NavLink
              key={route.to}
              to={route.to}
              end={route.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-sm px-3 py-2 font-mono text-[0.8125rem] transition-colors",
                  isActive
                    ? "text-signal"
                    : "text-muted-foreground hover:text-foreground",
                )
              }
            >
              <span aria-hidden className="text-foreground/25">/</span>
              {ui[route.key][lang].toLowerCase()}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <LangToggle />
          <Button
            asChild
            size="sm"
            className="hidden font-mono text-xs sm:inline-flex"
          >
            <a href={`mailto:${profile.email}`}>{c("emailMe")}</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label={c("openMenu")}>
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-border bg-card p-0">
              <SheetHeader className="panel-strip">
                <SheetTitle className="label-mono text-foreground/80">{c("menu")}</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col p-2">
                {ROUTES.map((route) => (
                  <NavLink
                    key={route.to}
                    to={route.to}
                    end={route.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "rounded-sm px-3 py-3 font-mono text-sm transition-colors",
                        isActive
                          ? "bg-signal/10 text-signal"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground",
                      )
                    }
                  >
                    <span aria-hidden className="text-foreground/25">/</span>
                    {ui[route.key][lang].toLowerCase()}
                  </NavLink>
                ))}
                <Button asChild size="sm" className="mt-3 font-mono text-xs">
                  <a href={`mailto:${profile.email}`}>{c("emailMe")}</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* a hairline that marks the active route's position, purely as feedback */}
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-signal/25 to-transparent">
        <span className="sr-only">{pathname}</span>
      </div>
    </header>
  );
}
