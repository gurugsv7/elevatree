import { useEffect } from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface LocalBusinessConfig {
  name: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  telephone: string;
  email: string;
  url: string;
}

/**
 * Add Breadcrumb Schema to page
 */
export function useBreadcrumbSchema(items: BreadcrumbItem[]) {
  useEffect(() => {
    const breadcrumbList = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbList);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [items]);
}

/**
 * Add FAQ Schema to page
 */
export function useFAQSchema(faqs: FAQItem[]) {
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [faqs]);
}

/**
 * Add Local Business Schema to page
 */
export function useLocalBusinessSchema(config: LocalBusinessConfig) {
  useEffect(() => {
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: config.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: config.streetAddress,
        addressLocality: config.addressLocality,
        addressRegion: config.addressRegion,
        postalCode: config.postalCode,
        addressCountry: 'IN'
      },
      telephone: config.telephone,
      email: config.email,
      url: config.url,
      sameAs: [
        'https://www.facebook.com/elevatree',
        'https://twitter.com/elevatree',
        'https://www.linkedin.com/company/elevatree'
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [config]);
}

/**
 * Add Article Schema to page
 */
export function useArticleSchema(config: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) {
  useEffect(() => {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: config.headline,
      description: config.description,
      image: config.image,
      datePublished: config.datePublished,
      dateModified: config.dateModified || config.datePublished,
      author: {
        '@type': 'Organization',
        name: 'ElevaTree'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [config]);
}
