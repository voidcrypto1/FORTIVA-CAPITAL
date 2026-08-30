import React, { useState } from 'react';
import { 
  Calculator, 
  Sliders, 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle2, 
  Info, 
  ArrowRight,
  PieChart as PieIcon,
  Percent
} from 'lucide-react';
import { RiskTier } from '../types';

interface StrategyCalculatorProps {
  onOpenGetStarted: () => void;
  onOpenConsultation: () => void;
}

export const StrategyCalculator: React.FC<StrategyCalculatorProps> = ({
  onOpenGetStarted,
  onOpenConsultation
}) => {
  const [capital, setCapital] = useState<number>(50000);
  const [riskTier, setRiskTier] = useState<RiskTier>('Balanced');
  const [timeHorizon, setTimeHorizon] = useState<string>('3-5 Years');

  // Allocation distribution calculation based on risk preference
  const getAllocationDistribution = () => {
    switch (riskTier) {
      case 'Conservative':
        return [
          { name: 'Tokenized Treasury / RWA Yield', percentage: 55, amount: capital * 0.55, color: '#0B243F' },
          { name: 'Liquid Dollar Stable Reserve', percentage: 25, amount: capital * 0.25, color: '#10B981' },
          { name: 'Core Digital Bluechip (BTC/ETH)', percentage: 20, amount: capital * 0.20, color: '#1769D2' }
        ];
      case 'Moderate':
      case 'Balanced':
        return [
          { name: 'Core Digital Bluechip (BTC)', percentage: 40, amount: capital * 0.40, color: '#1769D2' },
          { name: 'Smart Contract Layer 1s', percentage: 30, amount: capital * 0.30, color: '#0B243F' },
          { name: 'Real-World Asset Yield', percentage: 20, amount: capital * 0.20, color: '#10B981' },
          { name: 'Cash Reserve / Opportunistic', percentage: 10, amount: capital * 0.10, color: '#64748B' }
        ];
      case 'Growth':
      case 'Dynamic':
        return [
          { name: 'Protocol Infrastructure & Layer 1s', percentage: 45, amount: capital * 0.45, color: '#1769D2' },
          { name: 'Core Digital Store of Value', percentage: 30, amount: capital * 0.30, color: '#0B243F' },
          { name: 'Emerging Ecosystems & AI/DePIN', percentage: 15, amount: capital * 0.15, color: '#38BDF8' },
          { name: 'Tactical Cash Cushion', percentage: 10, amount: capital * 0.10, color: '#10B981' }
        ];
    }
  };

  // Fee calculation tier
  const getFeeTierRate = () => {
    if (capital >= 250000) return 0.0065; // 0.65% for high tier
    if (capital >= 100000) return 0.0075; // 0.75%
    return 0.0090; // 0.90% flat annual fee
  };

  const feeRate = getFeeTierRate();
  const estimatedAnnualFee = capital * feeRate;
  const allocations = getAllocationDistribution();

  return (
    <section 
      id="calculator"
      className="py-20 sm:py-28 bg-[#F7F9FC] text-[#102033]"
      aria-label="Interactive Strategy & Fee Estimator"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3FF] border border-[#1769D2]/20 text-[#1769D2] text-xs font-semibold uppercase tracking-wider">
            Interactive Strategy Planner
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102033] tracking-tight">
            Structure Your Investment Framework
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Test hypothetical capital allocations, evaluate risk bounds, and review our transparent, flat management fee model.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="bg-white rounded-2xl border border-[#E3E8EF] shadow-md p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Capital Slider & Input */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="capital-range" className="text-sm font-bold text-[#102033]">
                    Hypothetical Capital Allocation
                  </label>
                  <span className="text-lg font-extrabold text-[#1769D2] font-mono">
                    ${capital.toLocaleString()} USD
                  </span>
                </div>

                <input
                  type="range"
                  id="capital-range"
                  min={10000}
                  max={1000000}
                  step={5000}
                  value={capital}
                  onChange={(e) => setCapital(Number(e.target.value))}
                  className="w-full h-2 bg-[#E3E8EF] rounded-lg appearance-none cursor-pointer accent-[#1769D2]"
                />

                <div className="flex justify-between text-[11px] text-[#64748B] font-mono">
                  <span>$10,000 (Min)</span>
                  <span>$250,000</span>
                  <span>$500,000</span>
                  <span>$1,000,000+</span>
                </div>
              </div>

              {/* Risk Tolerance Tier Buttons */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#102033] block">
                  Risk & Volatility Tolerance
                </label>
                
                <div className="grid grid-cols-3 gap-3">
                  {(['Conservative', 'Balanced', 'Dynamic'] as const).map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      id={`calc-tier-${tier.toLowerCase()}`}
                      onClick={() => setRiskTier(tier)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        riskTier === tier
                          ? 'border-[#1769D2] bg-[#EAF3FF] text-[#1769D2] font-bold shadow-xs'
                          : 'border-[#E3E8EF] bg-white text-[#64748B] hover:border-[#1769D2]/40 font-medium'
                      }`}
                    >
                      <div className="text-xs">{tier}</div>
                      <div className="text-[10px] text-[#64748B] mt-0.5">
                        {tier === 'Conservative' ? 'Capital preservation' : tier === 'Balanced' ? 'Hybrid growth & yield' : 'High tech conviction'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Horizon Selector */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#102033] block">
                  Anticipated Time Horizon
                </label>
                
                <div className="grid grid-cols-3 gap-3">
                  {(['1-2 Years', '3-5 Years', '5+ Years'] as const).map((horizon) => (
                    <button
                      key={horizon}
                      type="button"
                      id={`calc-horizon-${horizon.replace(/\s+/g, '-').toLowerCase()}`}
                      onClick={() => setTimeHorizon(horizon)}
                      className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all text-center ${
                        timeHorizon === horizon
                          ? 'border-[#1769D2] bg-[#1769D2] text-white shadow-xs'
                          : 'border-[#E3E8EF] bg-white text-[#64748B] hover:border-gray-300'
                      }`}
                    >
                      {horizon}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fee Schedule Box */}
              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#E3E8EF] space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#102033]">Transparent Annual Management Fee</span>
                  <span className="font-bold text-[#1769D2] font-mono">{(feeRate * 100).toFixed(2)}% / yr</span>
                </div>
                <div className="flex items-center justify-between text-[#64748B]">
                  <span>Estimated Annual Custody & Governance</span>
                  <span className="font-mono font-medium text-[#102033]">${Math.round(estimatedAnnualFee).toLocaleString()} USD</span>
                </div>
                <p className="text-[11px] text-[#64748B] pt-1 border-t border-[#E3E8EF]">
                  Zero front-end sales loads • Zero withdrawal penalty fees • Billed quarterly in arrears based on average balance.
                </p>
              </div>

            </div>

            {/* Right Column: Calculated Allocation Breakdown & Strategy Profile */}
            <div className="lg:col-span-6 bg-[#071A2F] text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#38BDF8] tracking-wider">
                      Simulated Allocation Model
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      {riskTier} Mandate Structure
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-semibold text-[#64748B]">Time Horizon</span>
                    <div className="text-xs font-bold text-white">{timeHorizon}</div>
                  </div>
                </div>

                {/* Progress Visual */}
                <div className="space-y-2">
                  <div className="h-3 w-full bg-black/40 rounded-full overflow-hidden flex">
                    {allocations.map((item, idx) => (
                      <div
                        key={idx}
                        style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                        title={`${item.name}: ${item.percentage}%`}
                      />
                    ))}
                  </div>
                </div>

                {/* Allocation Line Items */}
                <div className="space-y-2.5">
                  {allocations.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-black/25 border border-white/5 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                        <span className="font-medium text-[#EAF3FF]">{item.name}</span>
                      </div>
                      <div className="text-right font-mono">
                        <span className="font-bold text-white">${Math.round(item.amount).toLocaleString()}</span>
                        <span className="text-[#64748B] ml-2">({item.percentage}%)</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Governance Highlight */}
                <div className="pt-2 text-xs text-[#EAF3FF]/80 space-y-1.5 border-t border-white/10">
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Quarterly automated rebalancing to keep allocation locked to target</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Dedicated institutional segregated cold custody trust container</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  id="calc-open-onboarding"
                  onClick={onOpenGetStarted}
                  className="bg-[#1769D2] hover:bg-[#155bb6] text-white text-xs font-semibold px-5 py-3 rounded-md transition-colors text-center shadow-sm"
                >
                  Configure This Strategy
                </button>
                <button
                  type="button"
                  id="calc-open-consultation"
                  onClick={onOpenConsultation}
                  className="bg-white/10 hover:bg-white/15 text-white text-xs font-medium px-4 py-3 rounded-md transition-colors text-center"
                >
                  Request Advisor Briefing
                </button>
              </div>

            </div>

          </div>

          {/* Educational Disclaimer footer */}
          <div className="mt-8 pt-6 border-t border-[#E3E8EF] flex items-start gap-2.5 text-xs text-[#64748B]">
            <Info className="w-4 h-4 text-[#1769D2] mt-0.5 shrink-0" />
            <p>
              <strong>Educational Tool Disclaimer:</strong> This strategy simulation tool is provided exclusively for illustrative and educational purposes to demonstrate how asset allocation weights and annual management fee schedules operate. It does not forecast future financial returns, yield guarantees, or tax consequences.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
