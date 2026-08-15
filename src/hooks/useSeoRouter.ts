import { useState, useEffect } from 'react';
import { SEO_CONFIG, PageSeoConfig } from '../config/seoConfig';
import { SITE_CONFIG } from '../config/siteConfig';

export function useSeoRouter() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (targetPath: string) => {
    // Normalize targetPath
    let cleanPath = targetPath.startsWith('/') ? targetPath : `/${targetPath}`;
    
    // If navigating to home section anchors like #how-it-works
    if (cleanPath.startsWith('/#')) {
      const sectionId = cleanPath.replace('/#', '');
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (cleanPath !== window.location.pathname) {
      window.history.pushState({}, '', cleanPath);
      setCurrentPath(cleanPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Determine current SEO config
  const pageSeo: PageSeoConfig = SEO_CONFIG.pages[currentPath] || SEO_CONFIG.pages['404'];
  const fullCanonicalUrl = `${SEO_CONFIG.siteUrl}${pageSeo.canonicalPath === '/' ? '' : pageSeo.canonicalPath}`;
  const fullOgImageUrl = pageSeo.ogImage ? `${SEO_CONFIG.siteUrl}${pageSeo.ogImage}` : `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultOgImage}`;

  // Dynamically update document head tags
  useEffect(() => {
    // Title
    document.title = pageSeo.title;

    // Helper function for meta tags
    const setMetaTag = (nameOrProperty: string, value: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${nameOrProperty}"]` : `meta[name="${nameOrProperty}"]`;
      let element = document.head.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', nameOrProperty);
        } else {
          element.setAttribute('name', nameOrProperty);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // Helper for canonical link
    const setCanonicalLink = (url: string) => {
      let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    };

    // Standard Meta
    setMetaTag('description', pageSeo.description);
    setMetaTag('keywords', pageSeo.keywords.join(', '));
    setMetaTag('robots', pageSeo.noindex ? 'noindex, nofollow' : 'index, follow');

    // Verification Meta
    if (SEO_CONFIG.verification.googleSearchConsole) {
      setMetaTag('google-site-verification', SEO_CONFIG.verification.googleSearchConsole);
    }
    if (SEO_CONFIG.verification.bingWebmaster) {
      setMetaTag('msvalidate.01', SEO_CONFIG.verification.bingWebmaster);
    }

    // Canonical
    setCanonicalLink(fullCanonicalUrl);

    // Open Graph
    setMetaTag('og:title', pageSeo.title, true);
    setMetaTag('og:description', pageSeo.description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', fullCanonicalUrl, true);
    setMetaTag('og:image', fullOgImageUrl, true);
    setMetaTag('og:site_name', SEO_CONFIG.siteName, true);

    // Twitter Cards
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', pageSeo.title);
    setMetaTag('twitter:description', pageSeo.description);
    setMetaTag('twitter:image', fullOgImageUrl);
    setMetaTag('twitter:site', '@ZAIFII');

    // JSON-LD Schemas injection
    const injectJsonLd = (id: string, jsonObject: object) => {
      let script = document.head.querySelector(`#${id}`) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(jsonObject);
    };

    // 1. WebSite Schema
    injectJsonLd('schema-website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': SEO_CONFIG.siteName,
      'url': SEO_CONFIG.siteUrl,
      'description': SEO_CONFIG.pages['/'].description,
    });

    // 2. FAQPage Schema (only on /faq or /)
    if (currentPath === '/' || currentPath === '/faq') {
      injectJsonLd('schema-faq', {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': SITE_CONFIG.faqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer,
          },
        })),
      });
    } else {
      const existingFaq = document.head.querySelector('#schema-faq');
      if (existingFaq) existingFaq.remove();
    }

    // 3. BreadcrumbList Schema (for subpages)
    if (currentPath !== '/') {
      const breadcrumbName = pageSeo.title.split('—')[0].trim();
      injectJsonLd('schema-breadcrumbs', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': `${SEO_CONFIG.siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': breadcrumbName,
            'item': fullCanonicalUrl,
          },
        ],
      });
    } else {
      const existingBc = document.head.querySelector('#schema-breadcrumbs');
      if (existingBc) existingBc.remove();
    }

  }, [currentPath, pageSeo, fullCanonicalUrl, fullOgImageUrl]);

  return {
    currentPath,
    pageSeo,
    navigate,
    is404: !SEO_CONFIG.pages[currentPath],
  };
}
