export interface PageSeoConfig {
  title: string;
  description: string;
  canonicalPath: string;
  keywords: string[];
  ogImage?: string;
  noindex?: boolean;
}

const metaEnv = (import.meta as any).env || {};

export const SEO_CONFIG = {
  // Centralized Site URL configuration (easily changeable via env or default)
  siteUrl: metaEnv.VITE_SITE_URL || 'https://zaifii.com',
  siteName: 'ZAIFII',
  defaultOgImage: '/og-image.png',
  
  // Search Engine Verification Placeholders
  verification: {
    googleSearchConsole: metaEnv.VITE_GOOGLE_SEARCH_CONSOLE_VERIFICATION || '',
    bingWebmaster: metaEnv.VITE_BING_WEBMASTER_VERIFICATION || '',
  },

  // Analytics Code Placeholder
  // ANALYTICS PLACEHOLDER
  // ADD APPROVED ANALYTICS CODE HERE (e.g., Google Analytics 4 / Tag Manager)
  analyticsId: metaEnv.VITE_ANALYTICS_ID || '',

  pages: {
    '/': {
      title: 'ZAIFII — Free Fire Giveaway & Diamond Giveaway',
      description: 'Participate in the ZAIFII Free Fire giveaway, submit your eligible entry, and learn how additional entries can increase your chances of winning.',
      canonicalPath: '/',
      keywords: ['Free Fire giveaway', 'Free Fire diamonds', 'giveaway participation', 'ZAIFII', 'Free Fire diamond giveaway'],
    },
    '/how-it-works': {
      title: 'How ZAIFII Free Fire Giveaway Works',
      description: 'Learn how to participate in the ZAIFII Free Fire diamond giveaway in 4 simple steps and earn additional entries through official TikTok links.',
      canonicalPath: '/how-it-works',
      keywords: ['how ZAIFII works', 'Free Fire giveaway guide', 'participate Free Fire diamonds', 'additional entries'],
    },
    '/giveaway-rules': {
      title: 'ZAIFII Giveaway Rules',
      description: 'Read the official rules, eligibility criteria, winner selection guidelines, and legal terms for the ZAIFII Free Fire giveaway.',
      canonicalPath: '/giveaway-rules',
      keywords: ['ZAIFII giveaway rules', 'Free Fire giveaway terms', 'eligibility requirements', 'winner selection'],
    },
    '/faq': {
      title: 'ZAIFII Free Fire Giveaway — FAQ',
      description: 'Find answers to frequently asked questions about ZAIFII Free Fire diamond giveaways, UID submission requirements, and additional entry rules.',
      canonicalPath: '/faq',
      keywords: ['ZAIFII FAQ', 'Free Fire giveaway questions', 'how to get extra entries', 'diamond giveaway help'],
    },
    '/learn-more': {
      title: 'How Additional Entries Work — ZAIFII',
      description: 'Discover how to multiply your giveaway entries by returning to ZAIFII through designated TikTok links and official promotional posts.',
      canonicalPath: '/learn-more',
      keywords: ['additional entries', 'TikTok giveaway entries', 'ZAIFII extra entries', 'increase winning chances'],
    },
    '/privacy-policy': {
      title: 'Privacy Policy — ZAIFII',
      description: 'Read the official ZAIFII privacy policy regarding Free Fire player UID handling, participant privacy protections, and cookie usage.',
      canonicalPath: '/privacy-policy',
      keywords: ['ZAIFII privacy policy', 'data protection', 'Free Fire UID safety', 'privacy terms'],
    },
    '/terms': {
      title: 'Terms & Conditions — ZAIFII',
      description: 'Review the terms of service, user responsibilities, platform rules, and disclaimers governing the ZAIFII Free Fire giveaway platform.',
      canonicalPath: '/terms',
      keywords: ['ZAIFII terms and conditions', 'terms of service', 'giveaway rules disclaimer'],
    },
    '/contact': {
      title: 'Contact ZAIFII',
      description: 'Get in touch with the ZAIFII giveaway team for questions, inquiries, support, and verified promotional details.',
      canonicalPath: '/contact',
      keywords: ['contact ZAIFII', 'ZAIFII support', 'giveaway support', 'Free Fire giveaway contact'],
    },
    '404': {
      title: 'Page Not Found — ZAIFII',
      description: 'The page you are looking for does not exist on ZAIFII Free Fire Giveaway platform. Return to homepage or check giveaway rules.',
      canonicalPath: '/404',
      keywords: ['404', 'page not found', 'ZAIFII'],
      noindex: true,
    },
  } as Record<string, PageSeoConfig>,
};
