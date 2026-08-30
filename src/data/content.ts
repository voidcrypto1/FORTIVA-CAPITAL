import { 
  NavItem, 
  InvestmentOption, 
  AllocationPreset, 
  TransactionDemo, 
  FAQItemData, 
  ComparisonItem,
  TrustItem,
  FeatureItem,
  StepItem
} from '../types';

export const COMPANY_CONFIG = {
  name: 'FORTIVA CAPITAL',
  legalName: 'Fortiva Capital Management Ltd.',
  tagline: 'A clearer way to approach modern investing.',
  subTagline: 'A structured digital wealth and asset management platform designed to give investors transparent visibility, systematic strategies, and disciplined portfolio oversight.',
  primaryCTA: 'Get Started',
  secondaryCTA: 'Explore Investment Options',
  consultationCTA: 'Schedule Strategy Consultation',
  contactEmail: '[support@fortivacapital.com - VERIFIED CONTACT PENDING]',
  phone: '[+1 (800) FORTIVA - VERIFIED PHONE PENDING]',
  jurisdictionPlaceholder: '[REGULATORY DISCLOSURE: Pending regional compliance filings]',
  demoDisclaimer: 'Illustrative interface and sample parameters shown for demonstration purposes. Past performance is not indicative of future results.',
  riskNotice: 'Risk Disclosure: Investing in digital assets and financial instruments involves significant risk of loss. Values can fluctuate widely. Information presented here is educational and does not constitute personalized financial or tax advice.'
};

export const NAVIGATION_LINKS: NavItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Investment Options', href: '#investment-options' },
  { label: 'Product Showcase', href: '#showcase' },
  { label: 'Strategy Planner', href: '#calculator' },
  { label: 'Why Fortiva', href: '#why-fortiva' },
  { label: 'Security & Trust', href: '#security' },
  { label: 'FAQ', href: '#faq' },
];

export const TRUST_BAR_ITEMS: TrustItem[] = [
  {
    icon: 'ShieldCheck',
    title: 'Segregated Cold Custody',
    description: 'Assets maintained in dedicated, cryptographically isolated institutional vaults.'
  },
  {
    icon: 'Activity',
    title: 'Systematic Risk Controls',
    description: 'Automated exposure rebalancing with strict volatility parameters.'
  },
  {
    icon: 'FileText',
    title: 'Auditable Reporting',
    description: 'Comprehensive transaction ledgers, tax documentation, and transparent accounting.'
  },
  {
    icon: 'Lock',
    title: 'Multi-Signature Governance',
    description: 'Hardware-backed authorization thresholds for all treasury and asset operations.'
  },
  {
    icon: 'Clock',
    title: 'Real-Time Portfolio Telemetry',
    description: 'Direct visibility into asset allocations, liquidity tiers, and historical rebalancing.'
  }
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: 'structured-experience',
    title: 'Structured Investment Experience',
    badge: 'Framework First',
    icon: 'Layers',
    description: 'Move beyond ad-hoc trading. We structure investment access through clear strategic mandates, defined risk bounds, and transparent methodology.',
    details: [
      'Pre-vetted institutional asset selection',
      'Automated risk-parity rebalancing rules',
      'Clear strategy documentation and execution policies',
      'Elimination of speculative impulse trading'
    ]
  },
  {
    id: 'portfolio-visibility',
    title: 'Total Portfolio Visibility',
    badge: 'Real-Time Telemetry',
    icon: 'BarChart3',
    description: 'Understand every decimal point in your account. Monitor real-time weighting, asset drift, fee debits, and performance benchmarks in a clean console.',
    details: [
      'Live multi-tier asset allocation telemetry',
      'Comprehensive fee and transaction ledger transparency',
      'Benchmark comparisons against standard indices',
      'Exportable audit-ready financial statements'
    ]
  },
  {
    id: 'research-insights',
    title: 'Disciplined Research & Analytics',
    badge: 'Data Driven',
    icon: 'LineChart',
    description: 'Ground your capital allocation in institutional-grade market intelligence, macro risk models, and quantitative on-chain metrics.',
    details: [
      'Weekly market structure and liquidity briefs',
      'On-chain tokenomic and protocol health monitoring',
      'Macroeconomic correlation analysis',
      'Neutral, hype-free analytical commentary'
    ]
  },
  {
    id: 'dedicated-support',
    title: 'Dedicated Client Governance',
    badge: 'Human Oversight',
    icon: 'Users',
    description: 'Access seasoned wealth strategists and support specialists who prioritize clarity, responsiveness, and responsible capital preservation.',
    details: [
      'Direct access to client portfolio specialists',
      'Institutional onboarding and entity structuring',
      'Bespoke reporting for wealth managers and family offices',
      'Secure encrypted messaging and consultation scheduling'
    ]
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Create & Verify Your Account',
    description: 'Complete our secure digital onboarding workflow with identity verification and jurisdictional suitability assessment.',
    details: 'Our structured compliance onboarding takes minutes, establishing your segregated account container with enterprise-grade multi-factor security.'
  },
  {
    number: '02',
    title: 'Explore Strategic Mandates',
    description: 'Review rigorously constructed investment strategies ranging from systematic large-cap exposure to balanced multi-asset models.',
    details: 'Examine detailed strategy briefs, asset weighting parameters, historical volatility profiles, and custodial architectures without promotional hyperbole.'
  },
  {
    number: '03',
    title: 'Select Your Investment Profile',
    description: 'Choose the allocation framework that precisely aligns with your time horizon, liquidity requirements, and risk tolerance.',
    details: 'Set automated rebalancing parameters, deposit preferences, and allocation limits with full transparency before any capital deployment.'
  },
  {
    number: '04',
    title: 'Monitor & Manage Transparently',
    description: 'Track portfolio evolution through an intuitive, real-time dashboard featuring live reporting, rebalancing logs, and audit trails.',
    details: 'Receive quarterly fiduciary reports, seamless tax summaries, and full flexibility to adjust strategy weights as your financial objectives evolve.'
  }
];

export const INVESTMENT_OPTIONS: InvestmentOption[] = [
  {
    id: 'core-digital',
    name: 'Core Digital Asset Allocation',
    tagline: 'Systematic index-style exposure to premier market-cap digital assets.',
    category: 'Systematic',
    riskTier: 'Moderate',
    targetHorizon: '24–60 Months',
    minInvestment: '$10,000 USD (or equivalent)',
    description: 'Designed for investors seeking disciplined, rules-based exposure to dominant foundational blockchain networks with automated quarterly rebalancing and volatility smoothing.',
    keyTraits: [
      'Rules-based market-cap weighting with single-asset caps',
      'Quarterly rebalancing to prevent excessive asset drift',
      '100% cold-storage segregated custody',
      'Transparent flat annual management structure'
    ],
    allocationFocus: [
      { asset: 'Tier 1 Digital Assets (BTC/ETH)', percentage: 70, color: '#1769D2' },
      { asset: 'Infrastructure Protocols', percentage: 20, color: '#0B243F' },
      { asset: 'Liquid Reserve USD/Equivalents', percentage: 10, color: '#10B981' }
    ]
  },
  {
    id: 'balanced-growth',
    name: 'Balanced Multi-Asset Strategy',
    tagline: 'Diversified hybrid framework balancing liquid yield and growth assets.',
    category: 'Managed',
    riskTier: 'Balanced',
    targetHorizon: '12–36 Months',
    minInvestment: '$25,000 USD',
    description: 'A moderate approach pairing stable liquid yields with select digital infrastructure assets, engineered to dampen broad market drawdowns while capturing upside participation.',
    keyTraits: [
      'Dynamic hedging controls during extreme market volatility',
      'Yield-generating tokenized treasury & stable reserves',
      'Active risk parity adjustments',
      'Monthly portfolio manager commentary'
    ],
    allocationFocus: [
      { asset: 'Market Leaders', percentage: 45, color: '#1769D2' },
      { asset: 'Real-World Asset Reserves', percentage: 35, color: '#0B243F' },
      { asset: 'Decentralized Finance Core', percentage: 20, color: '#10B981' }
    ]
  },
  {
    id: 'tactical-yield',
    name: 'Institutional Liquidity & Yield',
    tagline: 'Capital preservation focus with institutional credit and staking yields.',
    category: 'Yield & Liquidity',
    riskTier: 'Conservative',
    targetHorizon: '6–18 Months',
    minInvestment: '$50,000 USD',
    description: 'Prioritizes principal security by allocating capital across tokenized short-duration sovereign obligations, institutional validator yields, and collateralized money markets.',
    keyTraits: [
      'Over-collateralized lending & staking protocols only',
      'Daily liquidity access with T+1 settlement',
      'Strict counterparty risk filtering',
      'Audited smart contract interactions'
    ],
    allocationFocus: [
      { asset: 'Tokenized US Treasuries / Equivalents', percentage: 60, color: '#0B243F' },
      { asset: 'Institutional Staked Protocols', percentage: 30, color: '#1769D2' },
      { asset: 'Instant Liquidity Pool', percentage: 10, color: '#10B981' }
    ]
  },
  {
    id: 'bespoke-wealth',
    name: 'Custom Wealth & Family Office Mandate',
    tagline: 'Tailored institutional portfolios with dedicated wealth strategist oversight.',
    category: 'Institutional',
    riskTier: 'Dynamic',
    targetHorizon: 'Custom / Long-Term',
    minInvestment: '$250,000 USD',
    description: 'Designed specifically for high-net-worth individuals, trusts, and family offices requiring customized allocation models, multi-entity tax structuring, and dedicated relationship directors.',
    keyTraits: [
      'Bespoke investment policy statement (IPS)',
      'Custom custodial architecture (Qualified Custodian integration)',
      'Direct API access & custom reporting pipelines',
      'Quarterly executive strategy consultations'
    ],
    allocationFocus: [
      { asset: 'Core Blue-Chip Digital', percentage: 40, color: '#1769D2' },
      { asset: 'Venture & Early Ecosystem', percentage: 25, color: '#0B243F' },
      { asset: 'Systematic Yield Reserve', percentage: 25, color: '#10B981' },
      { asset: 'Tactical Cash / Opportunity Fund', percentage: 10, color: '#64748B' }
    ]
  }
];

export const ALLOCATION_PRESETS: AllocationPreset[] = [
  {
    id: 'conservative',
    name: 'Conservative Wealth Reserve',
    tag: 'Capital Preservation Focus',
    riskTier: 'Conservative',
    description: 'Engineered for capital stability, focusing heavily on short-duration tokenized treasuries and high-liquidity stable reserves with selective digital blue-chip exposure.',
    expectedVolatility: 'Low (6–9% Annualized)',
    rebalanceFrequency: 'Bi-Monthly',
    allocations: [
      { name: 'Tokenized Sovereign Yield / US T-Bills', symbol: 'RWA-TBILL', percentage: 55, color: '#0B243F', category: 'Fixed Income / Yield' },
      { name: 'Liquid Dollar Stable Reserves', symbol: 'USDC-INST', percentage: 25, color: '#10B981', category: 'Liquidity' },
      { name: 'Bitcoin (Physical Cold Storage)', symbol: 'BTC', percentage: 15, color: '#1769D2', category: 'Digital Bluechip' },
      { name: 'Ethereum (Validator Staking)', symbol: 'ETH-STK', percentage: 5, color: '#38BDF8', category: 'Proof-of-Stake Core' }
    ],
    metrics: {
      diversificationScore: '94 / 100',
      liquidityTier: 'T+1 Immediate',
      custodyType: 'Qualified Air-Gapped Trust',
      benchmarkComparison: 'US Treasury + Digital Hedge'
    }
  },
  {
    id: 'balanced',
    name: 'Balanced Market Index',
    tag: 'Structured Core & Satellite',
    riskTier: 'Balanced',
    description: 'A balanced blend capturing foundational digital asset growth while anchoring down-market downside through collateralized income reserves.',
    expectedVolatility: 'Moderate (14–18% Annualized)',
    rebalanceFrequency: 'Quarterly',
    allocations: [
      { name: 'Bitcoin (Institutional Holding)', symbol: 'BTC', percentage: 40, color: '#1769D2', category: 'Digital Bluechip' },
      { name: 'Ethereum & Smart Contract Infrastructure', symbol: 'ETH/SOL', percentage: 30, color: '#0B243F', category: 'Layer 1 Network' },
      { name: 'Real-World Yield & High-Grade RWA', symbol: 'RWA-YLD', percentage: 20, color: '#10B981', category: 'Fixed Income / Yield' },
      { name: 'DeFi Bluechips & Interoperability', symbol: 'DEFI-IDX', percentage: 10, color: '#38BDF8', category: 'Infrastructure' }
    ],
    metrics: {
      diversificationScore: '89 / 100',
      liquidityTier: 'T+2 Standard',
      custodyType: 'Multi-Sig Segregated Vault',
      benchmarkComparison: 'Top-10 Equal Weighted'
    }
  },
  {
    id: 'dynamic-growth',
    name: 'Dynamic Digital Expansion',
    tag: 'High Growth Potential',
    riskTier: 'Dynamic',
    description: 'A systematic strategy prioritizing high-conviction protocol infrastructure, decentralized compute, and emerging web3 ecosystems for long-term horizon allocators.',
    expectedVolatility: 'High (24–32% Annualized)',
    rebalanceFrequency: 'Monthly Quantitative',
    allocations: [
      { name: 'Layer 1 & Layer 2 Protocols', symbol: 'L1/L2-IDX', percentage: 45, color: '#1769D2', category: 'Protocol Core' },
      { name: 'Bitcoin & Ethereum Backbone', symbol: 'BTC/ETH', percentage: 30, color: '#0B243F', category: 'Macro Store of Value' },
      { name: 'AI Compute & DePIN Networks', symbol: 'AI-DEPIN', percentage: 15, color: '#38BDF8', category: 'Specialized Tech' },
      { name: 'Systematic Hedge Cash Reserve', symbol: 'USD-RESERVE', percentage: 10, color: '#10B981', category: 'Tactical Cash' }
    ],
    metrics: {
      diversificationScore: '82 / 100',
      liquidityTier: 'T+2 Standard',
      custodyType: 'Institutional HSM Multi-Sig',
      benchmarkComparison: 'Broad Crypto Market Cap'
    }
  }
];

export const DEMO_TRANSACTIONS: TransactionDemo[] = [
  {
    id: 'TX-89214',
    date: '2026-08-24 14:32',
    type: 'Rebalance',
    asset: 'BTC/ETH Weight Alignment',
    amount: 'Normalized to 40/30 target',
    status: 'Completed'
  },
  {
    id: 'TX-89201',
    date: '2026-08-21 09:15',
    type: 'Yield Accrual',
    asset: 'RWA-TBILL Tokenized Distribution',
    amount: '+$412.50 USD credited',
    status: 'Settled'
  },
  {
    id: 'TX-89178',
    date: '2026-08-18 16:45',
    type: 'Custody Verification',
    asset: 'Quarterly Cryptographic Proof of Reserve',
    amount: '100% Solvency Verified',
    status: 'Verified'
  },
  {
    id: 'TX-89145',
    date: '2026-08-14 11:20',
    type: 'Allocation Shift',
    asset: 'Volatility Threshold Trigger Reallocation',
    amount: 'Risk reduction into cash reserve',
    status: 'Completed'
  }
];

export const COMPARISON_TABLE: ComparisonItem[] = [
  {
    feature: 'Investment Approach',
    fortiva: 'Structured strategic mandates, rule-based rebalancing, and disciplined asset weights',
    traditional: 'Slow manual execution, high minimums, limited digital asset capabilities',
    speculative: 'Impulsive trading, emotional FOMO, unregulated speculative tokens'
  },
  {
    feature: 'Asset Custody & Security',
    fortiva: 'Institutional segregated cold vaults with hardware multi-signature verification',
    traditional: 'Standard legacy clearing with delayed settlement windows',
    speculative: 'Commingled exchange hot wallets subject to exchange counterparty risk'
  },
  {
    feature: 'Transparency & Reporting',
    fortiva: 'Real-time telemetry, clear fee statements, and exportable tax-ready ledger audit logs',
    traditional: 'Monthly or quarterly printed statements with opaque fee deductions',
    speculative: 'Inaccurate trade logs, hidden spreads, and ambiguous balance figures'
  },
  {
    feature: 'Risk Management',
    fortiva: 'Algorithmic drift triggers, volatility containment bounds, and liquidity thresholds',
    traditional: 'Infrequent quarterly review with rigid legacy asset limitations',
    speculative: 'Zero risk modeling, extreme leverage, and high liquidation hazard'
  },
  {
    feature: 'Fee Structure',
    fortiva: 'Transparent tier-based management fee with zero hidden trade markups',
    traditional: 'Front-load sales loads, 12b-1 hidden distribution fees, exit penalties',
    speculative: 'High withdrawal fees, hidden order routing markups, liquidation penalties'
  }
];

export const FAQ_ITEMS: FAQItemData[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How does FORTIVA CAPITAL work?',
    answer: 'FORTIVA CAPITAL provides an institutional-grade digital investment platform that allows individuals, family offices, and corporate allocators to access structured digital asset and hybrid wealth strategies. Clients open a segregated account, select an investment mandate matching their objectives and risk parameters, and monitor performance and rebalancing through a transparent digital dashboard.'
  },
  {
    id: 'faq-2',
    category: 'Investment',
    question: 'What investment options and asset classes are available?',
    answer: 'We offer structured strategic options including Core Digital Asset Allocations (large-cap digital networks), Balanced Multi-Asset Strategies (hybrid digital assets paired with tokenized real-world yields), Institutional Liquidity & Staking Solutions, and Custom Wealth Mandates for accredited allocators.'
  },
  {
    id: 'faq-3',
    category: 'Fees & Custody',
    question: 'How are fees structured at FORTIVA CAPITAL?',
    answer: 'We operate on a transparent, flat annual asset management fee calculated as a modest percentage of assets under management, billed on an annualized basis. There are no front-end load fees, no hidden spreads, and no surprise account maintenance surcharges. A complete fee schedule is presented before finalizing any account configuration.'
  },
  {
    id: 'faq-4',
    category: 'General',
    question: 'How do I get started with an account?',
    answer: 'You can begin by clicking "Get Started" to complete our streamlined digital onboarding workflow. This involves identity verification, selecting your investment entity type (individual, corporate, or trust), completing a suitability assessment, and configuring your secure multi-factor authentication credentials.'
  },
  {
    id: 'faq-5',
    category: 'Fees & Custody',
    question: 'How are client assets custodied and safeguarded?',
    answer: 'Client assets are never commingled with operating capital. We partner with institutional, regulated custodians utilizing air-gapped cold storage vaults, multi-party computation (MPC), and multi-signature authorization routines to guarantee that only validated transactions with dual authorization can occur.'
  },
  {
    id: 'faq-6',
    category: 'Security & Risk',
    question: 'What risks should I understand before investing?',
    answer: 'Investing in digital assets and financial strategies carries market risk, including price volatility, technological evolution, and the potential loss of principal. Digital assets can experience rapid valuation changes. FORTIVA CAPITAL emphasizes risk management, diversification, and disciplined allocation, but does not guarantee returns or insulation from market declines.'
  },
  {
    id: 'faq-7',
    category: 'Security & Risk',
    question: 'Can I rebalance or withdraw my capital at any time?',
    answer: 'Yes. Depending on your chosen strategy, assets feature standard institutional liquidity windows (typically T+1 to T+2 settlement for standard strategies). Clients can initiate withdrawals, rebalance strategy weightings, or modify deposit parameters directly through their dashboard without penalty lock-ups.'
  },
  {
    id: 'faq-8',
    category: 'General',
    question: 'How can I reach your support and advisory team?',
    answer: 'Clients have access to dedicated account representatives and support specialists via secure in-app messaging, email, and scheduled video consultations for high-tier and institutional accounts.'
  }
];
