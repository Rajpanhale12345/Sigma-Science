// SEO.jsx (corrected)
import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SEO({
  title,
  description,
  canonicalPath,
  noindex = false,
  ogImage,
  jsonLd,
  lang = "en",
}) {
  const location = useLocation();

  // ✅ no trailing slash
  const SITE_URL = "https://sigmascienceacademyedu.com";

  const canonicalUrl = useMemo(() => {
    const path = canonicalPath ?? location.pathname;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${SITE_URL}${cleanPath}`;
  }, [canonicalPath, location.pathname]);

  const robotsValue = noindex
    ? "noindex,nofollow"
    : "index,follow,max-image-preview:large";

  const jsonLdString = useMemo(() => {
    if (!jsonLd) return null;
    return JSON.stringify(jsonLd);
  }, [jsonLd]);

  return (
    <Helmet htmlAttributes={{ lang }}>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robotsValue} />

      <meta property="og:type" content="website" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {jsonLdString && (
        <script type="application/ld+json">{jsonLdString}</script>
      )}
    </Helmet>
  );
}
