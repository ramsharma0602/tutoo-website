/**
 * JSON-LD structured-data builders. Pure functions — pass real page data in,
 * get a schema.org object out. Never call these with fabricated data
 * (fake reviews, fake ratings, fake addresses).
 */
import { seoConfig } from "./seo.config";

const siteUrl = seoConfig.siteUrl;

/** Organization schema — rendered once, site-wide (see RouteSEO). */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.legalBusinessName,
    alternateName: seoConfig.siteName,
    url: siteUrl,
    logo: `${siteUrl}${seoConfig.logo}`,
    ...(seoConfig.business.email && { email: seoConfig.business.email }),
    ...(seoConfig.business.phone && {
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: seoConfig.business.phone,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
      ],
    }),
    ...(seoConfig.socialLinks.length > 0 && { sameAs: seoConfig.socialLinks }),
  };
}

/** WebSite schema with SearchAction (enables sitelinks search box eligibility). */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/blogs?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * LocalBusiness / EducationalOrganization schema modelled as a service-area
 * business (no fabricated street address — areaServed lists the real cities
 * from seo.config.ts instead).
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    name: seoConfig.legalBusinessName,
    alternateName: seoConfig.siteName,
    url: siteUrl,
    image: `${siteUrl}${seoConfig.logo}`,
    ...(seoConfig.business.email && { email: seoConfig.business.email }),
    ...(seoConfig.business.phone && { telephone: seoConfig.business.phone }),
    priceRange: "₹₹",
    areaServed: seoConfig.citiesServed.map((city) => ({
      "@type": city.type === "City" ? "City" : "Place",
      name: city.name,
      ...(city.lat && city.lng
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: city.lat,
              longitude: city.lng,
            },
          }
        : {}),
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: seoConfig.business.addressLocality,
      addressRegion: seoConfig.business.addressRegion,
      addressCountry: seoConfig.business.addressCountry,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** BreadcrumbList schema — pass the crumb trail for the current page. */
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

/** FAQPage schema — pass the exact Q&A pairs visibly rendered on the page. */
export function getFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  path: string;
  image: string;
  author: string;
  publishedTime: string;
  modifiedTime?: string;
}

/** Article/BlogPosting schema for blog detail pages. */
export function getArticleSchema(input: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    image: input.image.startsWith("http") ? input.image : `${siteUrl}${input.image}`,
    author: {
      "@type": "Person",
      name: input.author,
    },
    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}${seoConfig.logo}`,
      },
    },
    datePublished: input.publishedTime,
    dateModified: input.modifiedTime || input.publishedTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${input.path}`,
    },
  };
}

/** Course schema — useful for board/class tuition landing pages. */
export function getCourseSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: input.name,
    description: input.description,
    provider: {
      "@type": "Organization",
      name: seoConfig.siteName,
      sameAs: `${siteUrl}${input.path}`,
    },
  };
}
