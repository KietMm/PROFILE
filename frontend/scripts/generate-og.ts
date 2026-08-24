/**
 * Renders one 1200×630 share card per route into public/og.
 *
 * Run locally with `npm run og` after changing the CV or the card design, then
 * commit the PNGs. It is deliberately NOT part of `npm run build`: it needs a
 * local Chrome, which CI does not have, and the cards only change when the
 * content does.
 */

import { resolve } from "node:path";
import { profile } from "../src/data/cv.ts";
import { escapeHtml, fonts, projectRoot, shoot, surfaceCss } from "./render.ts";
import { routes, type RouteSeo } from "./seo.ts";

const WIDTH = 1200;
const HEIGHT = 630;

function cardHtml(route: RouteSeo) {
  // The home card leads with four numbers, so it reads as a row of gauges.
  // The others carry longer labels and read better stacked.
  const asStats = route.path === "/";

  // mono at 26px is ~15.6px per character; size the key column to fit the
  // longest key rather than guessing one width for every route
  const longestKey = Math.max(...route.card.rows.map((row) => row.key.length));
  const keyWidth = Math.min(300, Math.round(longestKey * 15.6) + 24);

  const heading = route.card.headingAccent
    ? `${escapeHtml(route.card.heading)} <span class="accent">${escapeHtml(route.card.headingAccent)}</span>`
    : escapeHtml(route.card.heading);

  const rows = asStats
    ? `<div class="stats">${route.card.rows
        .map(
          (row) =>
            `<div class="stat"><span class="stat-value">${escapeHtml(row.key)}</span><span class="stat-label">${escapeHtml(row.value)}</span></div>`,
        )
        .join("")}</div>`
    : `<ul class="list">${route.card.rows
        .map(
          (row) =>
            `<li><span class="list-key">${escapeHtml(row.key)}</span><span class="list-value">${escapeHtml(row.value)}</span></li>`,
        )
        .join("")}</ul>`;

  return `<!doctype html>
<html><head><meta charset="utf-8"><style>
${fonts}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${WIDTH}px;height:${HEIGHT}px}
body{
  font-family:"Archivo Card",system-ui,sans-serif;
  ${surfaceCss}
  display:flex;flex-direction:column;
  padding:56px 64px;
  position:relative;
}
.top{display:flex;align-items:center;gap:14px;font-family:"Plex Card",monospace}
.mark{
  width:44px;height:44px;display:grid;place-items:center;border-radius:6px;
  border:1px solid oklch(0.805 0.132 202/0.4);background:oklch(0.805 0.132 202/0.1);
  color:oklch(0.805 0.132 202);font-size:16px;font-weight:600;
}
.handle{font-size:20px;color:oklch(0.955 0.005 254/0.85)}
.where{
  margin-left:auto;display:flex;align-items:center;gap:10px;
  font-size:14px;letter-spacing:.16em;text-transform:uppercase;
  color:oklch(0.685 0.016 254);
}
.dot{width:8px;height:8px;border-radius:99px;background:oklch(0.805 0.132 202)}
.body{margin-top:auto;margin-bottom:auto}
.eyebrow{
  font-family:"Plex Card",monospace;font-size:16px;letter-spacing:.18em;
  text-transform:uppercase;color:oklch(0.805 0.132 202/0.85);
}
h1{
  margin-top:18px;font-size:${(route.card.heading + (route.card.headingAccent ?? "")).length > 14 ? 84 : 104}px;
  font-weight:800;line-height:.92;letter-spacing:-.03em;text-transform:uppercase;
}
.stats{display:flex;gap:56px;margin-top:40px}
.stat{display:flex;flex-direction:column;gap:10px}
.stat-value{
  font-family:"Plex Card",monospace;font-size:52px;font-weight:600;line-height:1;
  color:oklch(0.808 0.142 78);
}
.stat-label{
  font-family:"Plex Card",monospace;font-size:14px;letter-spacing:.14em;
  text-transform:uppercase;color:oklch(0.685 0.016 254);max-width:190px;line-height:1.4;
}
.list{list-style:none;margin-top:36px;display:flex;flex-direction:column;gap:14px}
.list li{display:flex;align-items:baseline;gap:20px}
.list-key{
  font-family:"Plex Card",monospace;font-size:26px;font-weight:600;
  color:oklch(0.808 0.142 78);min-width:${keyWidth}px;
}
.list-value{font-size:26px;color:oklch(0.955 0.005 254/0.88)}
.accent{color:oklch(0.805 0.132 202)}
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
  <div class="body">
    <div class="eyebrow">${escapeHtml(route.card.eyebrow)}</div>
    <h1>${heading}</h1>
    ${rows}
  </div>
  <div class="rule"></div>
</body></html>`;
}

for (const route of routes) {
  const out = resolve(projectRoot, `public/og/${route.image}.png`);
  shoot({ html: cardHtml(route), out, width: WIDTH, height: HEIGHT });
  console.log(`og  ${route.path.padEnd(12)} -> public/og/${route.image}.png`);
}
