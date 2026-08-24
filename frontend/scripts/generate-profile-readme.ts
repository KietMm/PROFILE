/**
 * Generates the GitHub profile README for github.com/KietMm — the repo whose
 * name matches the username, which GitHub renders at the top of the profile.
 *
 * The CV work is closed source, so GitHub has no repo that shows it. This
 * README is the only place on the profile where that work can be stated, and
 * it reads from src/data/cv.ts so it cannot drift from the CV.
 *
 *   npm run profile -- /path/to/KietMm
 *
 * Writes README.md and banner.png into the target directory. Needs a local
 * Chrome for the banner.
 */

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  competencies,
  education,
  experience,
  profile,
  systems,
  vitals,
} from "../src/data/cv.ts";
import { escapeHtml, fonts, shoot, surfaceCss } from "./render.ts";

const PORTFOLIO = "https://profile-rouge-mu.vercel.app";

const target = process.argv[2];
if (!target) {
  throw new Error("usage: npm run profile -- <target-directory>");
}

/* ---------------------------------------------------------------- banner */

const WIDTH = 1280;
const HEIGHT = 340;

function bannerHtml() {
  const stats = vitals
    .map(
      (vital) =>
        `<div class="stat"><span class="stat-value">${escapeHtml(vital.value)}</span><span class="stat-label">${escapeHtml(vital.label.en)}</span></div>`,
    )
    .join("");

  return `<!doctype html>
<html><head><meta charset="utf-8"><style>
${fonts}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${WIDTH}px;height:${HEIGHT}px}
body{
  font-family:"Archivo Card",system-ui,sans-serif;
  ${surfaceCss}
  display:flex;flex-direction:column;padding:40px 52px;position:relative;
}
.top{display:flex;align-items:center;gap:12px;font-family:"Plex Card",monospace}
.mark{
  width:36px;height:36px;display:grid;place-items:center;border-radius:5px;
  border:1px solid oklch(0.805 0.132 202/0.4);background:oklch(0.805 0.132 202/0.1);
  color:oklch(0.805 0.132 202);font-size:13px;font-weight:600;
}
.handle{font-size:17px;color:oklch(0.955 0.005 254/0.85)}
.where{
  margin-left:auto;display:flex;align-items:center;gap:9px;font-size:12px;
  letter-spacing:.16em;text-transform:uppercase;color:oklch(0.685 0.016 254);
}
.dot{width:7px;height:7px;border-radius:99px;background:oklch(0.805 0.132 202)}
.main{margin-top:auto;margin-bottom:auto;display:flex;align-items:flex-end;gap:48px}
.eyebrow{
  font-family:"Plex Card",monospace;font-size:13px;letter-spacing:.18em;
  text-transform:uppercase;color:oklch(0.805 0.132 202/0.85);
}
h1{
  margin-top:12px;font-size:68px;font-weight:800;line-height:.92;
  letter-spacing:-.03em;text-transform:uppercase;white-space:nowrap;
}
.accent{color:oklch(0.805 0.132 202)}
.stats{
  margin-left:auto;display:grid;grid-template-columns:repeat(2,auto);
  gap:16px 34px;padding-bottom:4px;
}
.stat{display:flex;align-items:baseline;gap:9px}
.stat-value{
  font-family:"Plex Card",monospace;font-size:27px;font-weight:600;line-height:1;
  color:oklch(0.808 0.142 78);min-width:38px;text-align:right;
}
.stat-label{
  font-family:"Plex Card",monospace;font-size:11px;letter-spacing:.13em;
  text-transform:uppercase;color:oklch(0.685 0.016 254);
}
.rule{
  position:absolute;left:0;right:0;bottom:0;height:3px;
  background:linear-gradient(to right,oklch(0.805 0.132 202),oklch(0.808 0.142 78),transparent);
}
</style></head><body>
  <div class="top">
    <span class="mark">CK</span>
    <span class="handle">${escapeHtml(profile.handle)}</span>
    <span class="where"><span class="dot"></span>${escapeHtml(profile.location.en)} · UTC+7</span>
  </div>
  <div class="main">
    <div>
      <div class="eyebrow">${escapeHtml(profile.role.en)}</div>
      <h1>${escapeHtml(profile.firstName)} <span class="accent">${escapeHtml(profile.lastName)}</span></h1>
    </div>
    <div class="stats">${stats}</div>
  </div>
  <div class="rule"></div>
</body></html>`;
}

/* ---------------------------------------------------------------- readme */

const current = experience[0];
const previous = experience[1];

const systemsTable = [
  "| System | What it is | Built with |",
  "| --- | --- | --- |",
  ...systems.map((system) => {
    // The fleet board shows the number apart from its label, so a label like
    // "backend engineer \u2014 me" reads fine there but not inline in a table cell.
    const unit = system.metric.label.en.replace(/\s*\u2014\s*me$/, "");
    return `| **${system.name}** | ${system.kind.en}, ${system.metric.value} ${unit} | ${system.stack.slice(0, 4).join(", ")} |`;
  }),
].join("\n");

const stackList = competencies
  .map((group) => `- **${group.label.en}** — ${group.items.join(", ")}`)
  .join("\n");

const readme = `![${profile.fullName} — ${profile.role.en}](banner.png)

**${profile.role.en} in ${profile.location.en}.**
${profile.thesis.en}

Currently at **${current.company}** (${current.period.en}), building a Next.js Module
Federation microfrontend platform, a distributed agent runtime in Rust, and the
OAuth2/OIDC identity provider behind both. Before that, the sole backend engineer
on a multi-tenant AI SaaS at **${previous.company}**.

## What I build

These are internal company platforms — closed source, so there is nothing to
clone here. [The portfolio](${PORTFOLIO}/systems) describes each one in detail.

${systemsTable}

## Stack

${stackList}

## Elsewhere

- **Portfolio** — ${PORTFOLIO}
- **LinkedIn** — ${profile.linkedin}
- **Email** — ${profile.email}

${education.degree.en}, ${education.school.en} (${education.period}).

<sub>Banner and content generated from the CV in
[KietMm/PROFILE](https://github.com/KietMm/PROFILE) — \`npm run profile\`.</sub>
`;

shoot({
  html: bannerHtml(),
  out: resolve(target, "banner.png"),
  width: WIDTH,
  height: HEIGHT,
  scale: 2,
});
writeFileSync(resolve(target, "README.md"), readme);

console.log(`profile banner -> ${resolve(target, "banner.png")}`);
console.log(`profile readme -> ${resolve(target, "README.md")}`);
