import React, { useState } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  PieChart, 
  Layers, 
  ArrowUpRight, 
  Sliders, 
  AlertCircle,
  Clock,
  DollarSign
} from 'lucide-react';
import { INVESTMENT_OPTIONS } from '../data/content';
import { InvestmentOption } from '../types';

interface InvestmentOptionsProps {
  onSelectOption: (option: InvestmentOption) => void;
  onOpenGetStarted: () => void;
}

export const InvestmentOptions: React.FC<InvestmentOptionsProps> = ({
  onSelectOption,
  onOpenGetStarted
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Systematic', 'Managed', 'Yield & Liquidity', 'Institutional'];

  const filteredOptions = selectedCategory === 'All'
    ? INVESTMENT_OPTIONS
    : INVESTMENT_OPTIONS.filter(opt => opt.category === selectedCategory);

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case 'Conservative':
        return 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30';
      case 'Balanced':
      case 'Moderate':
        return 'bg-[#1769D2]/15 text-[#1769D2] border-[#1769D2]/30';
      case 'Growth':
      case 'Dynamic':
        return 'bg-[#38BDF8]/15 text-[#0369A1] border-[#38BDF8]/30';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section 
      id="investment-options"
      className="py-20 sm:py-28 bg-[#F7F9FC] text-[#102033]"
      aria-label="Investment and Wealth Management Options"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3FF] border border-[#1769D2]/20 text-[#1769D2] text-xs font-semibold uppercase tracking-wider">
              Strategic Mandates
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102033] tracking-tight">
              Investment Options & Strategies
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed">
              Explore disciplined investment frameworks designed with pre-defined risk bounds, systematic asset weights, and institutional custody.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-lg border border-[#E3E8EF] shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1769D2] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#102033] hover:bg-[#F7F9FC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 or 4-Column Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredOptions.map((option) => (
            <div
              key={option.id}
              id={`investment-card-${option.id}`}
              className="bg-white rounded-xl border border-[#E3E8EF] p-6 sm:p-8 flex flex-col justify-between hover:border-[#1769D2]/40 hover:shadow-md transition-all group"
            >
              <div className="space-y-6">
                
                {/* Card Top: Category, Risk Tier & Name */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      {option.category} Mandate
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getRiskBadgeColor(option.riskTier)}`}>
                      {option.riskTier} Risk
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#102033] tracking-tight group-hover:text-[#1769D2] transition-colors">
                    {option.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {option.tagline}
                  </p>
                </div>

                {/* Parameters Matrix */}
                <div className="grid grid-cols-2 gap-3 py-3 px-4 rounded-lg bg-[#F7F9FC] border border-[#E3E8EF] text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#64748B]" />
                    <div>
                      <div className="text-[10px] text-[#64748B] uppercase font-semibold">Target Horizon</div>
                      <div className="font-bold text-[#102033]">{option.targetHorizon}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#64748B]" />
                    <div>
                      <div className="text-[10px] text-[#64748B] uppercase font-semibold">Suggested Minimum</div>
                      <div className="font-bold text-[#102033]">{option.minInvestment}</div>
                    </div>
                  </div>
                </div>

                {/* Key Traits List */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#102033] uppercase tracking-wider">
                    Core Attributes
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#64748B]">
                    {option.keyTraits.map((trait, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1769D2] mt-1.5 shrink-0" />
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Allocation Stack Bar */}
                <div className="space-y-2 pt-2 border-t border-[#E3E8EF]">
                  <div className="flex items-center justify-between text-xs text-[#64748B] font-medium">
                    <span>Target Asset Exposure</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-[#E3E8EF] overflow-hidden flex">
                    {option.allocationFocus.map((alloc, idx) => (
                      <div
                        key={idx}
                        style={{ width: `${alloc.percentage}%`, backgroundColor: alloc.color }}
                        title={`${alloc.asset}: ${alloc.percentage}%`}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-1 text-[11px] text-[#64748B]">
                    {option.allocationFocus.map((alloc, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: alloc.color }} />
                        <span>{alloc.asset} ({alloc.percentage}%)</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#E3E8EF] flex items-center justify-between gap-4">
                <button
                  type="button"
                  id={`explore-strategy-btn-${option.id}`}
                  onClick={() => onSelectOption(option)}
                  className="text-xs font-bold text-[#1769D2] hover:text-[#155bb6] flex items-center gap-1.5"
                >
                  <span>Strategy Factsheet & Risk Profile</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  id={`select-strategy-btn-${option.id}`}
                  onClick={onOpenGetStarted}
                  className="bg-[#071A2F] hover:bg-[#0B243F] text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors"
                >
                  Select Mandate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer per Requirement #11 & #28 */}
        <div className="mt-12 p-4 rounded-lg bg-white border border-[#E3E8EF] flex items-start gap-3 text-xs text-[#64748B]">
          <AlertCircle className="w-4 h-4 text-[#1769D2] mt-0.5 shrink-0" />
          <p>
            Strategy targets, allocation percentages, and parameters are determined in accordance with respective Investment Policy Statements. Values are rebalanced periodically and do not constitute a guarantee of positive yield or capital preservation.
          </p>
        </div>

      </div>
    </section>
  );
};
