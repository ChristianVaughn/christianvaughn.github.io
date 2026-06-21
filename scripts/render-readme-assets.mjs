// Renders each [data-asset] element on /?readme=1 to a PNG file in
// /readme-assets/, at 2× device pixel ratio so the assets stay crisp on
// retina/HiDPI displays.
//
// Usage:  npm run readme:render
//
// The script starts a Vite dev server, screenshots each asset, then
// kills the dev server and exits.

import { spawn } from "node:child_process";
import { mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const outDir = resolve(projectRoot, "readme-assets");

const DEV_PORT = 5173;
const DEV_URL = `http://localhost:${DEV_PORT}/?readme=1`;

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

// ---------- Start Vite dev server ----------
console.log("→ Starting Vite dev server...");
const isWin = process.platform === "win32";
// shell: true is required on Windows to spawn .cmd files reliably
const dev = spawn(isWin ? "npm.cmd" : "npm", ["run", "dev"], {
  cwd: projectRoot,
  stdio: ["ignore", "pipe", "pipe"],
  shell: isWin,
});

let killed = false;
function killDev() {
  if (killed) return;
  killed = true;
  try {
    if (isWin) {
      spawn("taskkill", ["/pid", String(dev.pid), "/F", "/T"]);
    } else {
      dev.kill("SIGTERM");
    }
  } catch (_) {
    /* ignore */
  }
}
process.on("SIGINT", () => {
  killDev();
  process.exit(130);
});
process.on("SIGTERM", () => {
  killDev();
  process.exit(143);
});

// Wait for the dev server to log that it's ready
await new Promise((resolveReady, reject) => {
  const timeout = setTimeout(() => {
    reject(new Error("Dev server did not start within 30s"));
  }, 30_000);
  dev.stdout.on("data", (chunk) => {
    const text = chunk.toString();
    if (text.includes("ready in") || text.includes("Local:")) {
      clearTimeout(timeout);
      resolveReady();
    }
  });
  dev.stderr.on("data", (chunk) => {
    process.stderr.write(chunk);
  });
  dev.on("exit", (code) => {
    clearTimeout(timeout);
    reject(new Error(`Dev server exited prematurely (code ${code})`));
  });
});

// Tiny extra grace period for Vite to finish wiring things
await new Promise((r) => setTimeout(r, 500));

console.log(`→ Dev server up at ${DEV_URL}`);

// ---------- Launch Playwright + screenshot each asset ----------
const browser = await chromium.launch();
try {
  const context = await browser.newContext({
    deviceScaleFactor: 2, // crisp on retina
    viewport: { width: 1280, height: 900 },
  });
  const page = await context.newPage();

  console.log("→ Navigating to readme page...");
  await page.goto(DEV_URL, { waitUntil: "networkidle" });

  // Wait for fonts to be fully loaded so screenshots use the
  // correct typography (Caveat/Quicksand/Poppins)
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  });

  // Longer buffer for many assets to finish loading + painting
  await page.waitForTimeout(1500);

  const assets = await page.$$eval("[data-asset]", (els) =>
    els.map((el) => el.getAttribute("data-asset")),
  );

  if (assets.length === 0) {
    // Diagnostic full-page screenshot so we can see what rendered
    const diag = resolve(outDir, "_diagnostic.png");
    await page.screenshot({ path: diag, fullPage: true });
    const html = await page.content();
    console.error(`  ! Diagnostic screenshot at ${diag}`);
    console.error(`  ! Body innerHTML preview:\n${html.slice(0, 800)}`);
    throw new Error(
      "No [data-asset] elements found on the page. Did the readme route render?",
    );
  }

  console.log(`→ Found ${assets.length} asset(s): ${assets.join(", ")}`);

  for (const name of assets) {
    const el = await page.$(`[data-asset="${name}"]`);
    if (!el) {
      console.warn(`  ! Skipping ${name} — element disappeared`);
      continue;
    }
    const outPath = resolve(outDir, `${name}.png`);
    await el.screenshot({ path: outPath, omitBackground: true });
    console.log(`  ✓ Wrote ${outPath}`);
  }
} finally {
  await browser.close();
  killDev();
}

console.log("✓ Done. Assets in /readme-assets/");
process.exit(0);
