/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CENTRAL SEO CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────
 *  Single source of truth for every SEO-related value used across the site:
 *  business identity, default meta tags, social links, analytics IDs, and
 *  local-SEO service areas. Every page reads from this file — change a
 *  value here and it propagates everywhere (SEOHead, JSON-LD schema,
 *  sitemap generator, robots.txt notes).
 *
 *  IMPORTANT: Do not put fabricated/placeholder business data here that
 *  will be published to search engines (fake address, fake reviews, fake
 *  phone numbers). Search engines penalize inaccurate structured data.
 *  Fields marked TODO below are intentionally left for a human to confirm
 *  before this goes live.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const seoConfig = {
  /* ── Site identity ── */
  siteName: "Tutoo",
  legalBusinessName: "Tutoo Learning Pvt. Ltd.",
  siteUrl: "https://tutoolearning.com", // verified live production domain
  defaultTitle: "Tutoo – AI-Powered Learning Platform | Verified Tutors, Real Results",
  titleTemplate: "%s | Tutoo",
  defaultDescription:
    "Tutoo pairs students with AI-matched, verified tutors and gives parents real-time progress tracking. Home & online tuition in Kothrud (Pune) and Kolhapur. Book a free assessment today.",
  defaultKeywords: [
    "home tutor",
    "online tutor",
    "verified tutors",
    "private tuition",
    "AI-powered tutoring",
    "CBSE tutor",
    "ICSE tutor",
    "SSC tutor",
    "JEE NEET coaching",
  ],

  /* ── Branding assets (already in public/) ── */
  logo: "/tutoo_assets/png/logo_full.png",
  logoIcon: "/tutoo_assets/png/logo_icon.png",
  favicon: "/tutoo_assets/png/app_icon_dark.png",
  defaultOgImage: "/tutoo_assets/png/logo_light_1.png",
  themeColor: "#16C47F",

  /* ── Locale ── */
  locale: "en_IN",
  language: "en",

  /* ── Contact / NAP (Name, Address, Phone) ──
   * NOTE: phone/email below are pulled from the site's existing footer and
   * legal pages as instructed. The footer previously showed "hello@Tutoo.com"
   * while legal pages use "@tutoolearning.com" — standardised on the verified
   * live domain (tutoolearning.com) for NAP consistency, a real local-SEO
   * ranking factor. Confirm this phone number is real before publishing —
   * "+91 123 456 7890" reads like a placeholder pattern.
   */
  business: {
    email: "hello@tutoolearning.com",
    phone: "+91 123 456 7890", // TODO: confirm this is the real business number
    whatsapp: "", // TODO: add if available
    // No fixed storefront address provided — modelled as a service-area
    // business (serviceArea in schema) rather than a fake street address.
    hasPhysicalStorefront: false,
    addressLocality: "Kothrud, Pune", // primary service hub
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },

  /* ── Service areas (local SEO) ── */
  citiesServed: [
    {
      name: "Kothrud",
      type: "Locality" as const,
      region: "Pune, Maharashtra",
      lat: 18.5074,
      lng: 73.8077,
    },
    {
      name: "Kolhapur",
      type: "City" as const,
      region: "Maharashtra",
      lat: 16.705,
      lng: 74.2433,
    },
  ],

  /* ── Social profiles (sameAs for Organization schema) ──
   * Empty until the business provides real handles — never fabricate these.
   */
  socialLinks: [] as string[],

  /* ── Analytics / verification (leave blank until provided — never fabricate IDs) ── */
  analytics: {
    ga4MeasurementId: "", // e.g. "G-XXXXXXXXXX"
    googleTagManagerId: "", // e.g. "GTM-XXXXXXX"
    googleSiteVerification: "", // Search Console HTML tag content
    bingSiteVerification: "",
    metaPixelId: "",
    linkedInPartnerId: "",
    microsoftClarityId: "",
  },

  /* ── Keyword sets used to build local + service keyword phrases ── */
  services: [
    "Home Tuition",
    "Online Tuition",
    "CBSE Tutor",
    "ICSE Tutor",
    "SSC Tutor",
    "JEE Coaching",
    "NEET Coaching",
  ],
} as const;

export type SeoConfig = typeof seoConfig;

/**
 * Generates local-SEO long-tail keyword combinations from services x cities.
 * e.g. "Home Tuition in Kothrud", "CBSE Tutor in Kolhapur"
 */
export function generateLocalKeywords(): string[] {
  const keywords: string[] = [];
  for (const service of seoConfig.services) {
    for (const city of seoConfig.citiesServed) {
      keywords.push(`${service} in ${city.name}`);
    }
  }
  return keywords;
}
