/**
 * ─────────────────────────────────────────────────────────────────────────
 *  POST-BUILD PRERENDER (Phase 3 — UX plan §17)
 * ─────────────────────────────────────────────────────────────────────────
 *  This is a client-rendered SPA: crawlers that don't execute JavaScript see
 *  an empty shell. This script snapshots the marketing routes into static
 *  HTML files inside dist/ so bots get full content, while real visitors
 *  hydrate into the normal SPA.
 *
 *  Usage:
 *    npm run build:seo        (= vite build && node scripts/prerender.mjs)
 *
 *  One-time setup on a new machine/CI:
 *    npm i -D playwright && npx playwright install chromium
 *
 *  Netlify note: static files in dist/ are served before the SPA fallback in
 *  public/_redirects, so prerendered routes "just work" — no config change.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const PORT = 4179;
const ORIGIN = `http://localhost:${PORT}`;
const DIST = path.resolve('dist');

/** Marketing routes worth prerendering (skip form-heavy / dynamic routes). */
const ROUTES = [
  '/',
  '/find-a-tutor',
  '/home-tuition',
  '/home-tuition/kothrud',
  '/home-tuition/kolhapur',
  '/online-tuition',
  '/for-tutors',
  '/about-tutoo',
  '/our-mission',
  '/how-it-work',
  '/contact-us',
];

async function main() {
  if (!existsSync(DIST)) {
    console.error('dist/ not found — run `vite build` first.');
    process.exit(1);
  }

  let chromium;
  try {
    ({ chromium } = await import('playwright'));
  } catch {
    console.error(
      'Prerender skipped: playwright is not installed.\n' +
        'Run: npm i -D playwright && npx playwright install chromium\n' +
        'The plain SPA build in dist/ is still fully usable.'
    );
    process.exit(0); // soft-skip: never fail the build over prerendering
  }

  // Serve the built site
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    stdio: 'ignore',
    shell: process.platform === 'win32',
  });
  await new Promise((r) => setTimeout(r, 2500));

  const executablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined;
  const browser = await chromium.launch(executablePath ? { executablePath } : {});
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });

  let ok = 0;
  for (const route of ROUTES) {
    try {
      await page.goto(`${ORIGIN}${route}`, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(1200); // let helmet + lazy sections settle
      const html = '<!DOCTYPE html>\n' + (await page.evaluate(() => document.documentElement.outerHTML));

      const outDir = route === '/' ? DIST : path.join(DIST, route.slice(1));
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, 'index.html'), html, 'utf-8');
      ok++;
      console.log(`✓ prerendered ${route}`);
    } catch (err) {
      console.warn(`✗ failed ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.kill();
  console.log(`Prerender complete: ${ok}/${ROUTES.length} routes.`);
}

main();
