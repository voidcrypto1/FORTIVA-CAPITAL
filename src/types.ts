export type RiskTier = 'Conservative' | 'Moderate' | 'Balanced' | 'Growth' | 'Dynamic';

export interface NavItem {
  label: string;
  href: string;
}

export interface TrustItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  details: string[];
  icon: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface InvestmentOption {
  id: string;
  name: string;
  tagline: string;
  category: 'Systematic' | 'Managed' | 'Institutional' | 'Yield & Liquidity';
  riskTier: RiskTier;
  targetHorizon: string;
  minInvestment: string;
  description: string;
  keyTraits: string[];
  allocationFocus: { asset: string; percentage: number; color: string }[];
  isPlaceholder?: boolean;
}

export interface AllocationPreset {
  id: string;
  name: string;
  tag: string;
  riskTier: RiskTier;
  description: string;
  expectedVolatility: string;
  rebalanceFrequency: string;
  allocations: {
    name: string;
    symbol: string;
    percentage: number;
    color: string;
    category: string;
  }[];
  metrics: {
    diversificationScore: string;
    liquidityTier: string;
    custodyType: string;
    benchmarkComparison: string;
  };
}

export interface TransactionDemo {
  id: string;
  date: string;
  type: 'Rebalance' | 'Yield Accrual' | 'Allocation Shift' | 'Custody Verification';
  asset: string;
  amount: string;
  status: 'Completed' | 'Settled' | 'Verified';
}

export interface FAQItemData {
  id: string;
  category: 'General' | 'Investment' | 'Fees & Custody' | 'Security & Risk';
  question: string;
  answer: string;
}

export interface ComparisonItem {
  feature: string;
  fortiva: string;
  traditional: string;
  speculative: string;
}
