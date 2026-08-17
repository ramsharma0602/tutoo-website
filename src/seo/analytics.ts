/**
 * ─────────────────────────────────────────────────────────────────────────
 *  ANALYTICS BOOTSTRAP + CONVERSION EVENTS (Phase 3 — UX plan §12)
 * ─────────────────────────────────────────────────────────────────────────
 *  Loads GA4 and Microsoft Clarity ONLY when real IDs are present in
 *  seo.config.ts (analytics.ga4MeasurementId / microsoftClarityId).
 *  With the IDs empty (the current state) this module is a no-op — nothing
 *  is injected, nothing is tracked. Fill in the IDs and events start flowing
 *  with zero further code changes.
 *
 *  Conversion events wired across the site:
 *    hero_form_submit       — hero mini requirement form → assessment page
 *    requirement_submitted  — assessment form successfully submitted (primary)
 *    whatsapp_click         — any WhatsApp CTA (params.placement)
 *    call_click             — any tel: CTA (params.placement)
 *    book_cta_click         — sticky-bar "Book Free Assessment" tap
 * ─────────────────────────────────────────────────────────────────────────
 */
import { seoConfig } from './seo.config';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;

export function initAnalytics(): void {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  const { ga4MeasurementId, microsoftClarityId } = seoConfig.analytics;

  if (ga4MeasurementId) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', ga4MeasurementId);
  }

  if (microsoftClarityId) {
    const c = document.createElement('script');
    c.text = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${microsoftClarityId}");`;
    document.head.appendChild(c);
  }
}

/** Fire a conversion/interaction event. Safe no-op when GA4 is not loaded. */
export function track(event: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', event, params ?? {});
}
