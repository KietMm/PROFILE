/**
 * Shared plumbing for the images generated from this repo: the share cards in
 * public/og and the GitHub profile banner. Both render HTML in a local Chrome,
 * so both need the fonts inlined and the same screenshot invocation.
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
export const projectRoot = resolve(here, "..");

const CHROME =
  process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

/** Inlined so a render never depends on the network or file:// font access. */
function fontFace(family: string, file: string, weight: string) {
  const data = readFileSync(resolve(projectRoot, "node_modules", file)).toString("base64");
  return `@font-face{font-family:"${family}";font-weight:${weight};font-display:block;src:url(data:font/woff2;base64,${data}) format("woff2")}`;
}

/** The site's two faces, under names that cannot collide with a system font. */
export const fonts = [
  fontFace(
    "Archivo Card",
    "@fontsource-variable/archivo/files/archivo-latin-wght-normal.woff2",
    "100 900",
  ),
  fontFace(
    "Plex Card",
    "@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
    "400",
  ),
  fontFace(
    "Plex Card",
    "@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-normal.woff2",
    "600",
  ),
].join("");

export const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** The control-plane ground: graphite, an engineering grid, a cool wash. */
export const surfaceCss = `
  background-color:oklch(0.155 0.012 254);
  color:oklch(0.955 0.005 254);
  background-image:
    linear-gradient(to right,oklch(0.305 0.018 254/0.22) 1px,transparent 1px),
    linear-gradient(to bottom,oklch(0.305 0.018 254/0.22) 1px,transparent 1px),
    radial-gradient(1100px 560px at 6% -18%,oklch(0.805 0.132 202/0.10),transparent 62%);
  background-size:56px 56px,56px 56px,100% 100%;
`;

export type ShotOptions = {
  html: string;
  out: string;
  width: number;
  height: number;
  /** 2 renders at twice the pixel size, for a crisper image when downscaled. */
  scale?: number;
};

export function shoot({ html, out, width, height, scale = 1 }: ShotOptions) {
  const tmpDir = resolve(projectRoot, "node_modules/.cache/render");
  mkdirSync(tmpDir, { recursive: true });
  mkdirSync(dirname(out), { recursive: true });

  const htmlPath = resolve(tmpDir, `${Buffer.from(out).toString("hex").slice(-24)}.html`);
  writeFileSync(htmlPath, html);

  execFileSync(
    CHROME,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      `--force-device-scale-factor=${scale}`,
      `--window-size=${width},${height}`,
      "--virtual-time-budget=4000",
      `--screenshot=${out}`,
      `file://${htmlPath}`,
    ],
    { stdio: "ignore" },
  );

  rmSync(htmlPath, { force: true });
}
