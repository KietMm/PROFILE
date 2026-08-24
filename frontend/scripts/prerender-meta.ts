/**
 * Writes one static document per route into dist/, each carrying its own
 * title, description, and share card.
 *
 * Share crawlers (LinkedIn, Facebook, Slack, X) do not execute JavaScript, so
 * a single-page app that serves the same index.html for every path gets one
 * preview for the whole site. Vercel checks the filesystem before applying the
 * SPA rewrite, so dist/systems/index.html wins for /systems and the rewrite
 * only catches paths that were never built.
 *
 * Runs as part of `npm run build`. Pure file manipulation — no browser needed.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { profile } from "../src/data/cv.ts";
import { imageUrl, pageUrl, routes, SITE_NAME, SITE_URL, type RouteSeo } from "./seo.ts";

const here = dirname(fileURLToPath(import.meta.url));
const dist = resolve(here, "../dist");

const START = "<!--seo-->";
const END = "<!--/seo-->";

const attr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function seoBlock(route: RouteSeo) {
  const url = pageUrl(route);
  const image = imageUrl(route);

  const tags: [string, string, string][] = [
    ["name", "description", route.description],
    ["name", "author", profile.fullName],
    ["property", "og:site_name", SITE_NAME],
    ["property", "og:type", route.ogType],
    ["property", "og:url", url],
    ["property", "og:title", route.title],
    ["property", "og:description", route.description],
    ["property", "og:image", image],
    ["property", "og:image:type", "image/png"],
    ["property", "og:image:width", "1200"],
    ["property", "og:image:height", "630"],
    ["property", "og:image:alt", `${route.card.heading} — ${profile.fullName}`],
    ["property", "og:locale", "en_US"],
    ["property", "og:locale:alternate", "vi_VN"],
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:title", route.title],
    ["name", "twitter:description", route.description],
    ["name", "twitter:image", image],
  ];

  if (route.ogType === "profile") {
    tags.push(
      ["property", "profile:first_name", profile.firstName],
      ["property", "profile:last_name", profile.lastName],
      ["property", "profile:username", profile.handle],
    );
  }

  return [
    START,
    `    <title>${attr(route.title)}</title>`,
    `    <link rel="canonical" href="${attr(url)}" />`,
    ...tags.map(([kind, key, value]) => `    <meta ${kind}="${key}" content="${attr(value)}" />`),
    `    ${END}`,
  ].join("\n");
}

const template = readFileSync(resolve(dist, "index.html"), "utf8");
const start = template.indexOf(START);
const end = template.indexOf(END);

if (start === -1 || end === -1) {
  throw new Error(
    `prerender-meta: could not find the ${START} … ${END} markers in dist/index.html. ` +
      "They must survive the Vite build for per-route metadata to work.",
  );
}

const before = template.slice(0, start);
const after = template.slice(end + END.length);

for (const route of routes) {
  const html = `${before}${seoBlock(route)}${after}`;
  const target =
    route.path === "/" ? resolve(dist, "index.html") : resolve(dist, `.${route.path}/index.html`);

  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);

  console.log(`seo ${route.path.padEnd(12)} -> ${target.slice(dist.length + 1)}`);
}

console.log(`seo origin ${SITE_URL}`);
