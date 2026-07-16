/**
 * Mounted once near the top of <App/>. Reads the current route via
 * useLocation() and automatically renders the correct <SEOHead> — no need to
 * add SEO tags to individual page components. Falls back gracefully for
 * unknown paths.
 */
import { useLocation } from "react-router-dom";
import SEOHead from "./SEOHead";
import { STATIC_PAGE_META, getBlogPostMeta, getBoardClassMeta, DEFAULT_PAGE_META } from "./pageMeta";
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

  // /:board/:category/:className  (3-segment dynamic route)
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 3) {
    const slug = `${segments[0]}-${segments[2]}`;
    const meta = getBoardClassMeta(slug);
    if (meta) return meta;
  }

  return DEFAULT_PAGE_META;
}

export default function RouteSEO() {
  const location = useLocation();
  const pathname = location.pathname;
  const meta = resolveMeta(pathname);

  // Site-wide schemas render on every page; homepage also gets no extra
  // breadcrumb (it IS the root). Deeper pages get a simple 2-level breadcrumb.
  const schemas: object[] = [getOrganizationSchema(), getWebsiteSchema()];

  if (pathname !== "/") {
    const label =
      meta.title ||
      pathname
        .split("/")
        .filter(Boolean)
        .join(" ")
        .replace(/-/g, " ");
    schemas.push(
      getBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: label, path: pathname },
      ])
    );
  }

  return <SEOHead {...meta} path={pathname} jsonLd={schemas} />;
}
