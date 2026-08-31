/**
 * Mounted once near the top of <App/>. Reads the current route via
 * useLocation() and automatically renders the correct <SEOHead> — no need to
 * add SEO tags to individual page components. Falls back gracefully for
 * unknown paths.
 */
import { useLocation } from "react-router-dom";
import SEOHead from "./SEOHead";
import { STATIC_PAGE_META, getBlogPostMeta, getBoardClassMeta, DEFAULT_PAGE_META } from "./pageMeta";
import { getTutorBySlug, isDemoTutor } from "../app/data/tutorLookup";
import { getOrganizationSchema, getWebsiteSchema, getBreadcrumbSchema } from "./schema";

function resolveMeta(pathname: string) {
  // Exact static match first
  if (STATIC_PAGE_META[pathname]) {
    return STATIC_PAGE_META[pathname];
  }

  // /blog/:slug
  const blogMatch = pathname.match(/^\/blog\/([^/]+)\/?$/);
  if (blogMatch) {
    const meta = getBlogPostMeta(blogMatch[1]);
    if (meta) return meta;
  }

  // /tutor/:slug — every tutor gets its own title and description, built
  // from that tutor's own data. Never a shared string across profiles.
  const tutorMatch = pathname.match(/^\/tutor\/([^/]+)\/?$/);
  if (tutorMatch) {
    const meta = getTutorMeta(tutorMatch[1]);
    if (meta) return meta;
    // Unknown slug: the page renders Not Found, so the meta must not be
    // indexable either.
    return { ...DEFAULT_PAGE_META, noindex: true };
  }

  // /:board/:category/:className  (3-segment dynamic route)
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 3) {
    const slug = `${segments[0]}-${segments[2]}`;
    const meta = getBoardClassMeta(slug);
    if (meta) return meta;
  }

  /* ── UNMATCHED PATHS ──────────────────────────────────────────────────
     This used to return DEFAULT_PAGE_META and nothing else, which meant a
     garbage URL emitted the HOMEPAGE's title and description under its own
     self-referencing canonical, with robots "index, follow". Any URL anyone
     ever linked to by mistake became an indexable duplicate of the
     homepage. The page itself now renders a real 404; the meta has to agree
     with it. */
  return { ...DEFAULT_PAGE_META, noindex: true };
}

/* ── Per-tutor metadata ────────────────────────────────────────────────
   Assembled per tutor rather than templated once, so two profiles never
   share a description. Demo tutors are marked noindex here — that is the
   single switch that keeps an invented person out of search results, and
   it turns itself off when a real tutor is added to TUTORS. */
function getTutorMeta(slug: string) {
  const tutor = getTutorBySlug(slug);
  if (!tutor) return null;

  const subject = tutor.subjects[0] ?? "Private";
  const where =
    tutor.city && !/^online$/i.test(tutor.city) ? ` in ${tutor.city}` : " Online";

  const modeText =
    tutor.mode === "both"
      ? "home tuition and online classes"
      : tutor.mode === "home"
        ? "home tuition"
        : "online classes";

  return {
    /* rawTitle: the suffix is already written in, so SEOHead must not add
       a second " | Tutoo". */
    title: `${tutor.name} — ${subject} Tutor${where} | ${"Tutoo"}`,
    rawTitle: true,
    description: `${tutor.name}, ${tutor.qualification}, teaches ${tutor.subjects.join(
      ", "
    )} for ${tutor.classes}. ${tutor.experienceYears} years of experience, offering ${modeText}${
      tutor.city && !/^online$/i.test(tutor.city) ? ` in ${tutor.area}` : " across India"
    }.`,
    image: tutor.photo,
    type: "profile" as const,
    noindex: isDemoTutor(tutor),
  };
}

/** Short, human breadcrumb labels for the routes where the slug alone is not
 *  a good label. Anything absent falls back to a prettified segment. */
const CRUMB_LABELS: Record<string, string> = {
  "/home-tuition": "Home Tuition",
  "/home-tuition/kothrud": "Kothrud (Pune)",
  "/home-tuition/kolhapur": "Kolhapur",
  "/online-tuition": "Online Tuition",
  "/for-parents": "For Parents",
  "/safety": "Safety & Verification",
  "/fees": "Fees",
  "/find-a-tutor": "Find a Tutor",
  "/book-free-assessment": "Book a Free Assessment",
  "/apply-tutor": "Become a Tutor",
  "/study-material": "Study Material",
  "/about-tutoo": "About Tutoo",
  "/our-mission": "Our Mission",
  "/how-it-work": "How It Works",
  "/contact-us": "Contact Us",
  "/privacy-policy": "Privacy Policy",
  "/terms-of-service": "Terms of Service",
  "/tutor": "Find a Tutor",
};

/** "cbse-class-9" → "Cbse Class 9". Last-resort label. */
function prettify(segment: string) {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export default function RouteSEO() {
  const location = useLocation();
  const pathname = location.pathname;
  const meta = resolveMeta(pathname);

  // Site-wide schemas render on every page; homepage also gets no extra
  // breadcrumb (it IS the root). Deeper pages get a simple 2-level breadcrumb.
  const schemas: object[] = [getOrganizationSchema(), getWebsiteSchema()];

  if (pathname !== "/") {
    /* A real trail, not a two-item stub.
       /home-tuition/kothrud  →  Home › Home Tuition › Kothrud (Pune)
       Previously this emitted Home › <the entire <title> tag>, which is not a
       breadcrumb label — it is a page title, and Google renders it verbatim.
       It also collapsed every nested route to two levels, so the city pages
       and the board/class pages never showed their parent.

       Pages must NOT emit their own BreadcrumbList on top of this one: two
       BreadcrumbList blocks on a page is a structured-data error. This is the
       single source. */
    const segments = pathname.split("/").filter(Boolean);
    const crumbs = [{ name: "Home", path: "/" }];

    segments.forEach((seg, i) => {
      const path = "/" + segments.slice(0, i + 1).join("/");
      crumbs.push({ name: CRUMB_LABELS[path] ?? prettify(seg), path });
    });

    schemas.push(getBreadcrumbSchema(crumbs));
  }

  return <SEOHead {...meta} path={pathname} jsonLd={schemas} />;
}
