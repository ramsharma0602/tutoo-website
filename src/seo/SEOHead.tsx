import { Helmet } from "react-helmet-async";
import { seoConfig } from "./seo.config";

export interface SEOHeadProps {
  /** Page-specific title. Rendered as "{title} | Tutoo" unless raw=true. */
  title?: string;
  /** Use the title exactly as given, without appending the site name. */
  rawTitle?: boolean;
  description?: string;
  keywords?: string[];
  /** Path only, e.g. "/for-parents" — combined with siteUrl for canonical + og:url. */
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  /** Article-specific (blog posts) */
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  /** Arbitrary JSON-LD objects to inject as <script type="application/ld+json"> */
  jsonLd?: object | object[];
}

export default function SEOHead({
  title,
  rawTitle = false,
  description = seoConfig.defaultDescription,
  keywords,
  path = "/",
  image,
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
  author,
  jsonLd,
}: SEOHeadProps) {
  const resolvedTitle = title
    ? rawTitle
      ? title
      : `${title} | ${seoConfig.siteName}`
    : seoConfig.defaultTitle;

  const resolvedKeywords = (keywords && keywords.length > 0 ? keywords : seoConfig.defaultKeywords).join(", ");

  const canonicalUrl = `${seoConfig.siteUrl}${path === "/" ? "" : path}`;
  const resolvedImage = image
    ? image.startsWith("http")
      ? image
      : `${seoConfig.siteUrl}${image}`
    : `${seoConfig.siteUrl}${seoConfig.defaultOgImage}`;

  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{resolvedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={resolvedKeywords} />
      <meta name="author" content={seoConfig.siteName} />
      <meta name="publisher" content={seoConfig.legalBusinessName} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="theme-color" content={seoConfig.themeColor} />
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Open Graph ── */}
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:locale" content={seoConfig.locale} />

      {/* ── Article-specific OG (blog posts) ── */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && <meta property="article:author" content={author} />}

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />

      {/* ── JSON-LD structured data ── */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
