/**
 * Mount inside any page/section component to inject ADDITIONAL JSON-LD
 * beyond the global Organization/WebSite/Breadcrumb already rendered by
 * RouteSEO (e.g. FAQPage, BlogPosting/Article, Course, LocalBusiness).
 * react-helmet-async merges multiple <Helmet> instances in the tree, so this
 * can be mounted alongside RouteSEO without conflict — each renders its own
 * <script type="application/ld+json"> tag.
 */
import { Helmet } from "react-helmet-async";

export default function PageSchema({ jsonLd }: { jsonLd: object | object[] }) {
  const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  if (schemas.length === 0) return null;
  return (
    <Helmet>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
