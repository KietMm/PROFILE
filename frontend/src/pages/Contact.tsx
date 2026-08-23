import { useState } from "react";
import { Check, Copy, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Panel } from "@/components/site/Panel";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/cv";
import { useLang } from "@/i18n";

type Field = {
  id: string;
  labelKey: "fieldEmail" | "fieldPhone" | "fieldLocation" | "fieldLinkedin";
  value: string;
  href?: string;
  external?: boolean;
  copyable: boolean;
  icon: typeof Mail;
};

export default function Contact() {
  const { t, c } = useLang();
  const [copied, setCopied] = useState<string | null>(null);

  const fields: Field[] = [
    {
      id: "email",
      labelKey: "fieldEmail",
      value: profile.email,
      href: `mailto:${profile.email}`,
      copyable: true,
      icon: Mail,
    },
    {
      id: "phone",
      labelKey: "fieldPhone",
      value: profile.phone,
      href: profile.phoneHref,
      copyable: true,
      icon: Phone,
    },
    {
      id: "linkedin",
      labelKey: "fieldLinkedin",
      value: "chau-vu-kiet",
      href: profile.linkedin,
      external: true,
      copyable: false,
      icon: ExternalLink,
    },
    {
      id: "location",
      labelKey: "fieldLocation",
      value: t(profile.location),
      copyable: false,
      icon: MapPin,
    },
  ];

  async function copy(id: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      window.setTimeout(() => setCopied((current) => (current === id ? null : current)), 1800);
    } catch {
      /* clipboard can be blocked; the value stays selectable on screen */
    }
  }

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow={profile.handle}
        title={c("contactTitle")}
        lede={c("contactLede")}
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Panel id="channels" meta={`${fields.length}`} bodyClassName="p-0">
          <ul className="divide-y divide-hairline">
            {fields.map((field) => {
              const Icon = field.icon;
              const isCopied = copied === field.id;
              return (
                <li key={field.id} className="flex items-center gap-3 px-4 py-3.5">
                  <Icon className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <p className="label-mono">{c(field.labelKey)}</p>
                    {field.href ? (
                      <a
                        href={field.href}
                        target={field.external ? "_blank" : undefined}
                        rel={field.external ? "noreferrer noopener" : undefined}
                        className="mt-1 block truncate font-mono text-sm text-foreground transition-colors hover:text-signal"
                      >
                        {field.value}
                      </a>
                    ) : (
                      <p className="mt-1 truncate font-mono text-sm text-foreground">{field.value}</p>
                    )}
                  </div>
                  {field.copyable ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copy(field.id, field.value)}
                      className="shrink-0 font-mono text-[0.6875rem] text-muted-foreground hover:text-signal"
                    >
                      {isCopied ? (
                        <>
                          <Check className="size-3.5" /> {c("copied")}
                        </>
                      ) : (
                        <>
                          <Copy className="size-3.5" /> {c("copy")}
                        </>
                      )}
                    </Button>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </Panel>

        <Panel id={c("summaryTitle")} meta={t(profile.role)}>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              {t(profile.summary)}
            </p>
            <Button asChild className="w-full font-mono text-xs">
              <a href={`mailto:${profile.email}`}>
                <Mail className="size-4" />
                {c("emailMe")}
              </a>
            </Button>
            <p className="label-mono">{c("references")}</p>
          </div>
        </Panel>
      </div>
    </div>
  );
}
