/**
 * SEO Configuration for ElevaTree
 * Central place to manage all SEO-related metadata and configuration
 */

export const SEO_CONFIG = {
  // Domain and basic info
  domain: 'https://elevatree.in',
  siteName: 'ElevaTree',
  author: 'ElevaTree Team',
  
  // Default meta tags
  defaults: {
    title: 'ElevaTree - Career Guidance & Mentorship in Pondicherry | Expert Career Counseling',
    description: 'ElevaTree offers expert career guidance, mentorship, and professional development. Connect with experienced mentors in Pondicherry and elevate your career journey with personalized guidance.',
    keywords: 'career guidance, mentorship, career counseling, professional development, pondicherry, career planning, job guidance, mentor platform',
    image: 'https://elevatree.in/src/assets/logo.jpg',
    type: 'website',
    locale: 'en_IN'
  },

  // Geo-targeting
  geo: {
    placeName: 'Pondicherry, India',
    region: 'IN-PY',
    country: 'India'
  },

  // Contact information
  contact: {
    email: 'support@elevatree.in',
    phone: '+91 XXXXXXXXXX', // Update with actual phone
    address: 'Pondicherry, India'
  },

  // Social media profiles
  socialProfiles: {
    facebook: 'https://www.facebook.com/elevatree',
    twitter: 'https://twitter.com/elevatree',
    instagram: 'https://www.instagram.com/elevatree',
    linkedin: 'https://www.linkedin.com/company/elevatree'
  },

  // Page-specific SEO
  pages: {
    home: {
      title: 'ElevaTree - Career Guidance & Mentorship in Pondicherry | Expert Career Counseling',
      description: 'ElevaTree offers expert career guidance, mentorship, and professional development. Connect with experienced mentors in Pondicherry and elevate your career journey with personalized guidance.',
      keywords: 'career guidance pondicherry, mentorship, career counseling, professional development, job guidance, career planning',
      path: '/'
    },
    mentors: {
      title: 'Expert Mentors - Career Guidance & Professional Development | ElevaTree',
      description: 'Connect with our expert mentors specializing in career guidance, professional development, and mentorship. Get personalized guidance from experienced professionals in Pondicherry.',
      keywords: 'expert mentors, career mentors, professional mentors, career guidance mentors, mentorship programs, pondicherry',
      path: '/#/mentors'
    },
    about: {
      title: 'About ElevaTree - Career Guidance & Mentorship Platform | Pondicherry',
      description: 'Learn about ElevaTree\'s mission to guide and empower students with personalized mentorship, expert career counseling, and professional development resources in Pondicherry.',
      keywords: 'about elevatree, career guidance platform, mentorship program, student support, pondicherry education',
      path: '/#/about'
    },
    resources: {
      title: 'Career Resources & Guidance Materials | ElevaTree',
      description: 'Access comprehensive career guidance resources, guides, and educational materials to help you plan your professional journey. Free resources for career development.',
      keywords: 'career resources, career guides, learning materials, career planning, professional development resources',
      path: '/#/resources'
    },
    getStarted: {
      title: 'Get Started with ElevaTree - Begin Your Career Journey',
      description: 'Get started with ElevaTree and begin your journey towards career excellence. Sign up today for expert mentorship and career guidance.',
      keywords: 'get started, sign up, career mentorship, begin mentorship',
      path: '/#/get-started'
    }
  },

  // Primary keywords for content optimization
  primaryKeywords: [
    'elevatree',
    'career guidance pondicherry',
    'career mentorship',
    'professional development'
  ],

  // Secondary keywords
  secondaryKeywords: [
    'career counseling',
    'mentor platform',
    'job guidance',
    'career planning',
    'mentorship programs',
    'pondicherry education',
    'career development'
  ],

  // Long-tail keywords (high conversion potential)
  longtailKeywords: [
    'best career guidance in pondicherry',
    'online mentorship platform',
    'career counselor pondicherry',
    'professional development courses',
    'career planning services',
    'expert career mentor',
    'how to plan your career',
    'career guidance for students'
  ],

  // Structured data
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ElevaTree',
    url: 'https://elevatree.in',
    logo: 'https://elevatree.in/src/assets/logo.jpg',
    description: 'ElevaTree is a comprehensive career development platform connecting professionals with expert mentors for personalized career guidance and professional development.',
    sameAs: [
      'https://www.facebook.com/elevatree',
      'https://twitter.com/elevatree',
      'https://www.instagram.com/elevatree',
      'https://www.linkedin.com/company/elevatree'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pondicherry',
      addressRegion: 'Puducherry',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@elevatree.in'
    }
  },

  // Robots.txt settings
  robots: {
    allow: ['/'],
    disallow: ['/signin', '/dashboard', '/profile-setup'],
    crawlDelay: 0,
    sitemapUrl: 'https://elevatree.in/sitemap.xml'
  },

  // Breadcrumb structure for navigation
  breadcrumbs: {
    home: { name: 'Home', url: 'https://elevatree.in/' },
    mentors: { name: 'Mentors', url: 'https://elevatree.in/#/mentors' },
    about: { name: 'About', url: 'https://elevatree.in/#/about' },
    resources: { name: 'Resources', url: 'https://elevatree.in/#/resources' }
  }
};

// Utility function to get page config
export function getPageSEO(pageName: keyof typeof SEO_CONFIG.pages) {
  return SEO_CONFIG.pages[pageName];
}

// Utility function to generate structured data
export function generateOrganizationSchema() {
  return JSON.stringify(SEO_CONFIG.organization);
}

// Utility function to build meta tags
export function buildMetaTags(config: {
  title: string;
  description: string;
  keywords?: string;
  ogUrl?: string;
}) {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords || SEO_CONFIG.defaults.keywords,
    ogTitle: config.title,
    ogDescription: config.description,
    ogUrl: config.ogUrl || SEO_CONFIG.domain,
    canonicalUrl: config.ogUrl || SEO_CONFIG.domain
  };
}

export default SEO_CONFIG;
