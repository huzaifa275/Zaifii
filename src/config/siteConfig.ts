import { DiamondPackage, FAQItem, RuleDetail } from '../types';

export const SITE_CONFIG = {
  name: 'ZAIFII',
  tagline: 'Premium Free Fire Giveaway Website',
  heroHeadline: 'Your Chance to Win Free Fire Diamonds',
  heroSubtext: 'Complete your eligible participation and increase your chances through additional eligible entries.',
  slogan: 'Your chance. Your entry. Your opportunity.',
  disclaimer: 'ZAIFII is an independent giveaway platform and is not affiliated with Garena or Free Fire unless explicitly stated otherwise.',
  
  // URL Placeholders (Do NOT invent real external URLs)
  urls: {
    tiktok: 'TIKTOK_URL_HERE',
    privacyPolicy: 'PRIVACY_POLICY_URL_HERE',
    termsAndConditions: 'TERMS_URL_HERE',
    contact: 'CONTACT_URL_HERE',
    socialYoutube: 'YOUTUBE_URL_HERE',
    socialInstagram: 'INSTAGRAM_URL_HERE',
    socialDiscord: 'DISCORD_URL_HERE',
  },

  // Ad Slot IDs & Configurations
  adSlots: {
    HEADER: 'AD_HEADER',
    HERO: 'AD_HERO',
    FORM_BETWEEN: 'AD_FORM_BETWEEN',
    CONTENT: 'AD_CONTENT',
    BEFORE_SUBMIT: 'AD_BEFORE_SUBMIT',
    SUCCESS: 'AD_SUCCESS',
    FOOTER: 'AD_FOOTER',
  },

  // Diamond Packages
  diamondOptions: [
    { id: 'd100', amount: 100, label: '100 💎', bonusText: 'Starter Entry', isPopular: false },
    { id: 'd310', amount: 310, label: '310 💎', bonusText: 'Popular Choice', isPopular: false },
    { id: 'd520', amount: 520, label: '520 💎', bonusText: 'Bonus Entry', isPopular: true, tag: 'MOST REQUESTED' },
    { id: 'd1060', amount: 1060, label: '1060 💎', bonusText: 'Pro Bundle', isPopular: false },
    { id: 'd2180', amount: 2180, label: '2180 💎', bonusText: 'Ultimate Pack', isPopular: false, tag: 'MEGA CHANCE' },
    { id: 'dCustom', amount: 'Custom', label: 'Custom Amount', bonusText: 'Enter Preferred Amount', isPopular: false },
  ] as DiamondPackage[],

  // FAQ Items
  faqs: [
    {
      id: 'faq-1',
      question: 'How do I participate?',
      answer: 'Simply enter your valid Free Fire UID, in-game name, and select your desired diamond amount in the 4-step form. Once submitted, your eligible entry is registered for the current giveaway cycle.',
    },
    {
      id: 'faq-2',
      question: 'Can I participate again?',
      answer: 'Yes! You can participate again by completing the process again. Each eligible completed participation counts as an additional entry toward the giveaway drawing.',
    },
    {
      id: 'faq-3',
      question: 'How do additional entries work?',
      answer: 'After completing your first participation, return through the eligible ZAIFII TikTok link or source and submit your entry again. Every valid submission from an eligible source adds an extra ticket to your name.',
    },
    {
      id: 'faq-4',
      question: 'Where do I return from?',
      answer: 'Return to ZAIFII directly from our official TikTok bio link or designated promotional posts. Returning through these official channels ensures your additional entry is tracked as eligible.',
    },
    {
      id: 'faq-5',
      question: 'When are winners announced?',
      answer: 'Winners are announced periodically at the conclusion of each giveaway round. Check the Giveaway Rules section and our official social channels for exact date schedules.',
    },
    {
      id: 'faq-6',
      question: 'How are winners selected?',
      answer: 'Winners are chosen through a verified, transparent random drawing from all valid, eligible entries collected during the event period.',
    },
    {
      id: 'faq-7',
      question: 'What happens if I enter the wrong UID?',
      answer: 'Make sure your UID and in-game name are accurate before submitting. Incorrect or invalid UIDs cannot receive prizes if selected in the drawing.',
    },
    {
      id: 'faq-8',
      question: 'Are duplicate or invalid entries counted?',
      answer: 'No. Only valid and eligible submissions count. Automated spam, incomplete details, or manipulative duplicate entries are automatically filtered and disqualified according to our rules.',
    },
  ] as FAQItem[],

  // Giveaway Rules details
  giveawayRules: [
    {
      id: 'rule-dates',
      title: 'Giveaway Period',
      content: 'Start Date: [START_DATE_PLACEHOLDER] | End Date: [END_DATE_PLACEHOLDER]. All entries submitted within this timeframe are eligible for the drawing.',
    },
    {
      id: 'rule-eligibility',
      title: 'Eligibility Requirements',
      content: 'Open to registered Free Fire players who submit a valid 8 to 12 digit player UID and matching in-game name.',
    },
    {
      id: 'rule-entry-req',
      title: 'Entry Requirements',
      content: 'Participants must complete all 4 steps of the ZAIFII submission process. Information provided must be authentic.',
    },
    {
      id: 'rule-add-entries',
      title: 'Additional Entries',
      content: 'Participants may gain additional entries by completing the form again after returning through the designated eligible TikTok link.',
    },
    {
      id: 'rule-winner-sel',
      title: 'Winner Selection Method',
      content: 'Winners will be selected via an impartial random selection process from all verified eligible entry tickets.',
    },
    {
      id: 'rule-announcement',
      title: 'Winner Announcement',
      content: 'Selected winners will be posted on the ZAIFII official portal and notified via in-game or designated communication channels.',
    },
    {
      id: 'rule-prizes',
      title: 'Prize Details',
      content: 'Prizes consist of Free Fire Diamonds corresponding to the selected packages. Prizes are non-transferable and cannot be exchanged for cash.',
    },
    {
      id: 'rule-disqualification',
      title: 'Disqualification Conditions',
      content: 'Automated bot submissions, fake UIDs, abusive behavior, or attempt to exploit the platform will result in immediate disqualification of all entries.',
    },
    {
      id: 'rule-contact',
      title: 'Contact Information',
      content: 'For inquiries or support regarding giveaway operations, please reach out via [CONTACT_URL_HERE].',
    },
  ] as RuleDetail[],
};
