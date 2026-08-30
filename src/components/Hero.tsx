import React, { useState } from 'react';
import { 
  ChevronRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Layers, 
  BarChart2, 
  Activity, 
  SlidersHorizontal,
  Info,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { COMPANY_CONFIG } from '../data/content';

interface HeroProps {
  onOpenGetStarted: () => void;
  onExploreOptions: () => void;
  onOpenStrategyDetails?: (strategyId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenGetStarted,
  onExploreOptions,
  onOpenStrategyDetails
}) => {
  const [activeTab, setActiveTab] = useState<'allocation' | 'performance' | 'activity'>('allocation');

  return (
    <section 
      id="overview" 
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-[#071A2F] text-white overflow-hidden"
      aria-label="Overview & Hero Section"
    >
      {/* Subtle geometric background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Ambient soft glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1769D2]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Headline & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Status / Category Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#EAF3FF]/90">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span>Institutional-Grade Digital Wealth Infrastructure</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.12]">
                A clearer way to approach <span className="text-[#38BDF8]">modern investing</span>.
              </h1>
              <p className="text-base sm:text-lg text-[#EAF3FF]/80 leading-relaxed max-w-xl">
                FORTIVA CAPITAL provides a structured digital wealth platform designed to help qualified investors explore, manage, and monitor disciplined digital asset strategies with institutional clarity.
              </p>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                id="hero-get-started-button"
                onClick={onOpenGetStarted}
                className="bg-[#1769D2] hover:bg-[#155bb6] text-white font-semibold px-6 py-3.5 rounded-md shadow-sm transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2 text-base group"
              >
                <span>{COMPANY_CONFIG.primaryCTA}</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                type="button"
                id="hero-explore-options-button"
                onClick={onExploreOptions}
                className="bg-white/10 hover:bg-white/15 text-white font-medium px-6 py-3.5 rounded-md border border-white/15 transition-colors flex items-center justify-center gap-2 text-base"
              >
                <span>{COMPANY_CONFIG.secondaryCTA}</span>
                <ArrowUpRight className="w-4 h-4 text-[#64748B] group-hover:text-white" />
              </button>
            </div>

            {/* Trust Micro-Badges */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#EAF3FF]/90 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Segregated Vaults</span>
                </div>
                <p className="text-[11px] text-[#64748B] leading-tight">Cold hardware isolation</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#EAF3FF]/90 font-medium">
                  <Activity className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Systematic Rules</span>
                </div>
                <p className="text-[11px] text-[#64748B] leading-tight">No speculative FOMO</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#EAF3FF]/90 font-medium">
                  <Lock className="w-3.5 h-3.5 text-[#1769D2]" />
                  <span>Audit Telemetry</span>
                </div>
                <p className="text-[11px] text-[#64748B] leading-tight">Real-time ledger access</p>
              </div>
            </div>

          </div>

          {/* Right Column: Illustrative Financial Dashboard Showcase */}
          <div className="lg:col-span-6">
            <div 
              id="hero-interactive-dashboard"
              className="bg-[#0B243F] border border-white/15 rounded-xl shadow-2xl p-5 sm:p-6 relative text-white"
            >
              {/* Dashboard Top Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                      Sample Portfolio Console
                    </div>
                    <div className="text-sm font-bold text-white">
                      Balanced Multi-Asset Framework
                    </div>
                  </div>
                </div>

                {/* Dashboard Nav Tab Pill */}
                <div className="flex items-center bg-black/30 p-1 rounded-lg text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab('allocation')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'allocation' ? 'bg-[#1769D2] text-white font-medium' : 'text-[#64748B] hover:text-white'
                    }`}
                  >
                    Allocation
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('performance')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'performance' ? 'bg-[#1769D2] text-white font-medium' : 'text-[#64748B] hover:text-white'
                    }`}
                  >
                    Structure
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('activity')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'activity' ? 'bg-[#1769D2] text-white font-medium' : 'text-[#64748B] hover:text-white'
                    }`}
                  >
                    Rebalance Log
                  </button>
                </div>
              </div>

              {/* Dashboard Content Panes */}
              <div className="py-4 space-y-4">
                
                {/* Metric Summary Strip */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-black/20 p-3 rounded-lg border border-white/5">
                    <div className="text-[11px] text-[#64748B] uppercase font-semibold">Target Diversification</div>
                    <div className="text-base font-bold text-white mt-0.5">89 / 100</div>
                    <div className="text-[10px] text-[#10B981] mt-0.5">Optimal Multi-Sector</div>
                  </div>

                  <div className="bg-black/20 p-3 rounded-lg border border-white/5">
                    <div className="text-[11px] text-[#64748B] uppercase font-semibold">Risk Band</div>
                    <div className="text-base font-bold text-[#38BDF8] mt-0.5">Balanced Tier</div>
                    <div className="text-[10px] text-[#64748B] mt-0.5">14–18% Volatility Band</div>
                  </div>

                  <div className="bg-black/20 p-3 rounded-lg border border-white/5">
                    <div className="text-[11px] text-[#64748B] uppercase font-semibold">Rebalancing</div>
                    <div className="text-base font-bold text-white mt-0.5">Quarterly</div>
                    <div className="text-[10px] text-[#64748B] mt-0.5">Rule-Based Drift Trigger</div>
                  </div>
                </div>

                {/* Tab 1: Allocation Breakdown */}
                {activeTab === 'allocation' && (
                  <div className="space-y-3 pt-1 animate-in fade-in">
                    <div className="flex items-center justify-between text-xs text-[#64748B] font-medium">
                      <span>Target Asset Distribution</span>
                      <span>100% Capital Accounted</span>
                    </div>

                    {/* Progress Bar Graphic */}
                    <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden flex">
                      <div style={{ width: '40%' }} className="bg-[#1769D2] h-full" title="Digital Bluechip (40%)" />
                      <div style={{ width: '30%' }} className="bg-[#38BDF8] h-full" title="Smart Contract Layer 1 (30%)" />
                      <div style={{ width: '20%' }} className="bg-[#10B981] h-full" title="Tokenized Real-World Yield (20%)" />
                      <div style={{ width: '10%' }} className="bg-[#64748B] h-full" title="Liquid Cash Reserve (10%)" />
                    </div>

                    {/* Asset Breakdown List */}
                    <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                      <div className="flex items-center justify-between p-2 rounded bg-black/20 border border-white/5">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#1769D2]"></span>
                          <span className="text-[#EAF3FF] font-medium">Digital Bluechip</span>
                        </div>
                        <span className="font-bold text-white">40%</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded bg-black/20 border border-white/5">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]"></span>
                          <span className="text-[#EAF3FF] font-medium">Protocol Layer 1</span>
                        </div>
                        <span className="font-bold text-white">30%</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded bg-black/20 border border-white/5">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                          <span className="text-[#EAF3FF] font-medium">Tokenized Sovereign Yield</span>
                        </div>
                        <span className="font-bold text-white">20%</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded bg-black/20 border border-white/5">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#64748B]"></span>
                          <span className="text-[#EAF3FF] font-medium">Liquid Cash Reserve</span>
                        </div>
                        <span className="font-bold text-white">10%</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Structure & Governance */}
                {activeTab === 'performance' && (
                  <div className="space-y-2.5 pt-1 text-xs animate-in fade-in">
                    <div className="p-2.5 rounded bg-black/20 border border-white/5 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-white">Automated Drift Triggers</div>
                        <div className="text-[#64748B] text-[11px]">Rebalances automatically when any individual asset deviates by more than ±5% from policy weight.</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded bg-black/20 border border-white/5 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-white">Segregated Cold Vault Security</div>
                        <div className="text-[#64748B] text-[11px]">Assets held in designated client accounts backed by institutional qualified custodian partner vaults.</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded bg-black/20 border border-white/5 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-white">Comprehensive Tax Reporting</div>
                        <div className="text-[#64748B] text-[11px]">Downloadable FIFO/HIFO lot reporting ready for corporate or personal annual filings.</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Rebalance Log */}
                {activeTab === 'activity' && (
                  <div className="space-y-2 pt-1 text-xs animate-in fade-in">
                    <div className="flex items-center justify-between p-2 rounded bg-black/20 border border-white/5">
                      <div>
                        <div className="font-medium text-white">Systematic Drift Rebalance</div>
                        <div className="text-[10px] text-[#64748B]">August 24, 2026 — Execution Complete</div>
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#10B981]/20 text-[#10B981] rounded">
                        Settled
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-black/20 border border-white/5">
                      <div>
                        <div className="font-medium text-white">Yield Accrual Distribution</div>
                        <div className="text-[10px] text-[#64748B]">August 21, 2026 — RWA Fixed Yield</div>
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#1769D2]/20 text-[#38BDF8] rounded">
                        Distributed
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-black/20 border border-white/5">
                      <div>
                        <div className="font-medium text-white">Cryptographic Solvency Audit</div>
                        <div className="text-[10px] text-[#64748B]">August 18, 2026 — Merkle Proof Verified</div>
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-white/10 text-[#EAF3FF] rounded">
                        Verified
                      </span>
                    </div>
                  </div>
                )}

              </div>

              {/* Mandatory Illustrative Disclaimer per Requirement #7 & #28 */}
              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#64748B]">
                <Info className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <span>{COMPANY_CONFIG.demoDisclaimer}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
