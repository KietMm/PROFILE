import { experience, profile, systems, vitals } from "../src/data/cv.ts";

/**
 * Per-route metadata for social previews.
 *
 * Crawlers (LinkedIn, Facebook, Slack, X) do not execute JavaScript, so these
 * tags cannot be set from React — they have to be present in the HTML that
 * comes off the wire. `scripts/prerender-meta.ts` writes one static document
 * per route at build time using this table.
 *
 * Descriptions are written for a share card, not copied from the CV: roughly
 * 160 characters, concrete, and readable on its own out of context.
 */

/** Absolute origin, no trailing slash. Override when the domain changes. */
export const SITE_URL = (process.env.SITE_URL ?? "https://profile-rouge-mu.vercel.app").replace(
  /\/+$/,
  "",
);

export const SITE_NAME = `${profile.fullName} — Portfolio`;

export type RouteSeo = {
  /** URL path, and the directory the prerendered document is written to. */
  path: string;
  /** Basename of the card in public/og. */
  image: string;
  title: string;
  description: string;
  ogType: "profile" | "website";
  /** Lines rendered on the share card. */
  card: {
    eyebrow: string;
    heading: string;
    /** Rendered in the signal colour after `heading`, as the site does. */
    headingAccent?: string;
    rows: { key: string; value: string }[];
  };
};

const liveSystems = systems.filter((system) => system.status === "live");

export const routes: RouteSeo[] = [
  {
    path: "/",
    image: "home",
    title: `${profile.fullName} — ${profile.role.en}`,
    description:
      "Full-stack platform engineer in Ho Chi Minh City. I build Module Federation microfrontend platforms, a distributed agent runtime in Rust, and the OAuth2/OIDC identity provider behind both.",
    ogType: "profile",
    card: {
      eyebrow: profile.role.en,
      heading: profile.firstName,
      headingAccent: profile.lastName,
      rows: vitals.map((vital) => ({ key: vital.value, value: vital.label.en })),
    },
  },
  {
    path: "/systems",
    image: "systems",
    title: `Systems — ${profile.fullName}`,
    description: `${systems.length} platforms built across two employers and four languages: a runtime-resolved microfrontend shell, a Rust agent fleet, a company identity provider, an agent scheduler, and a multi-tenant AI SaaS.`,
    ogType: "website",
    card: {
      eyebrow: `${systems.length} platforms · ${liveSystems.length} in progress`,
      heading: "Systems",
      rows: systems.map((system) => ({
        key: system.name,
        value: system.kind.en,
      })),
    },
  },
  {
    path: "/experience",
    image: "experience",
    title: `Experience — ${profile.fullName}`,
    description:
      "Platform engineer at KingFoodMart, previously sole backend engineer on a multi-tenant AI SaaS at Solazu JSC. 2+ years shipping production infrastructure in TypeScript, Python, Go, and Rust.",
    ogType: "website",
    card: {
      eyebrow: `${experience.length} roles · 2020–2026`,
      heading: "Experience",
      rows: experience.map((role) => ({
        key: role.period.en.replace(" — ", "–"),
        // the title's second half names the product, which the card has no room for
        value: `${role.company} · ${role.title.en.split(",")[0]}`,
      })),
    },
  },
  {
    path: "/contact",
    image: "contact",
    title: `Contact — ${profile.fullName}`,
    description: `Get in touch with ${profile.fullName}, full-stack platform engineer in Ho Chi Minh City. Email ${profile.email} or connect on LinkedIn.`,
    ogType: "website",
    card: {
      eyebrow: profile.role.en,
      heading: "Contact",
      rows: [
        { key: "Email", value: profile.email },
        { key: "Phone", value: profile.phone },
        { key: "LinkedIn", value: "chau-vu-kiet" },
        { key: "Location", value: profile.location.en },
      ],
    },
  },
];

export const imageUrl = (route: RouteSeo) => `${SITE_URL}/og/${route.image}.png`;
export const pageUrl = (route: RouteSeo) => `${SITE_URL}${route.path === "/" ? "" : route.path}`;
