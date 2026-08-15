export interface ParticipationEntry {
  requestId: string;
  uid: string;
  playerName: string;
  diamondAmount: number | string;
  timestamp: string;
  status: 'Eligible Entry Submitted' | 'Pending Review' | 'Verified';
  source?: string;
}

export interface DiamondPackage {
  id: string;
  amount: number | string;
  label: string;
  bonusText?: string;
  isPopular?: boolean;
  tag?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface RuleDetail {
  id: string;
  title: string;
  content: string;
  iconName?: string;
}

export interface ActivityFeedItem {
  id: string;
  playerName: string;
  uidMasked: string;
  diamonds: number | string;
  timeAgo: string;
}
