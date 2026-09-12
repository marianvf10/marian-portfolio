import { useEffect } from 'react';

import { siteConfig } from '../../config/site';

interface SeoProps {
  /** Full page title, including the site/brand name — not auto-suffixed. */
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>;
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
  return el;
}

export function Seo({ title, description, path, jsonLd }: SeoProps) {
  useEffect(() => {
    const url = `${siteConfig.domain}${path}`;
    document.title = title;

    const managedTags = [
      setMetaTag('name', 'description', description),
      setMetaTag('property', 'og:title', title),
      setMetaTag('property', 'og:description', description),
      setMetaTag('property', 'og:url', url),
      setMetaTag('property', 'og:type', 'website'),
      setMetaTag('name', 'twitter:card', 'summary_large_image'),
      setMetaTag('name', 'twitter:title', title),
      setMetaTag('name', 'twitter:description', description),
    ];

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    let jsonLdScript: HTMLScriptElement | null = null;
    if (jsonLd) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(jsonLdScript);
    }

    return () => {
      managedTags.forEach((el) => el.remove());
      canonical?.remove();
      jsonLdScript?.remove();
    };
  }, [title, description, path, jsonLd]);

  return null;
}
