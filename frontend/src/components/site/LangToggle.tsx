import { useLang } from "@/i18n";
import type { Lang } from "@/data/cv";
import { cn } from "@/lib/utils";

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "vi", label: "VI" },
];

/** A two-position switch. Both states are always visible, like a real toggle. */
export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang, c } = useLang();

  return (
    <div
      role="group"
      aria-label={c("languageLabel")}
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-rail p-0.5",
        className,
      )}
    >
      {OPTIONS.map((option) => {
        const active = option.value === lang;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLang(option.value)}
            aria-pressed={active}
            className={cn(
              "rounded-sm px-2 py-1 font-mono text-[0.6875rem] tracking-[0.12em] transition-colors",
              active
                ? "bg-signal/15 text-signal"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
