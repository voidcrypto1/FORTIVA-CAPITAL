import React from 'react';
import { 
  Eye, 
  FileCheck2, 
  Cpu, 
  ShieldCheck, 
  Check, 
  X, 
  Minus,
  Sparkles
} from 'lucide-react';
import { COMPARISON_TABLE } from '../data/content';

export const WhyFortiva: React.FC = () => {
  const pillars = [
    {
      icon: <Eye className="w-6 h-6 text-[#1769D2]" />,
      title: 'Clarity Over Speculation',
      description: 'We present digital wealth information in a calm, structured environment. Every asset class and rebalance action has a documented rationale.'
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-[#1769D2]" />,
      title: 'Radical Fee Transparency',
      description: 'Simple annualized management fees with zero hidden order-routing markups, no surprise withdrawal penalties, and audit-ready tax ledgers.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#1769D2]" />,
      title: 'Institutional Modern Tech',
      description: 'Real-time telemetry, automated drift containment, and enterprise cold-storage custody built for high-net-worth standards.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#1769D2]" />,
      title: 'Disciplined Risk Framework',
      description: 'Quantitative rules determine allocation and rebalancing timing, removing speculative impulses and emotional market timing.'
    }
  ];

  return (
    <section 
      id="why-fortiva"
      className="py-20 sm:py-28 bg-[#071A2F] text-white border-t border-[#E3E8EF]/10"
      aria-label="Why Choose Fortiva Capital"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider">
            Institutional Distinction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose Fortiva Capital
          </h2>
          <p className="text-base sm:text-lg text-[#EAF3FF]/80 leading-relaxed">
            The bridge between traditional fiduciary wealth management discipline and high-potential digital asset markets.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#0B243F] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-lg text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#EAF3FF]/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-[#0B243F] border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              Platform Comparison
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              How Fortiva Compares to Alternatives
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm" aria-label="Comparative Platform Matrix">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-3 font-semibold text-[#64748B] w-1/4">Key Dimension</th>
                  <th className="py-3.5 px-4 font-bold text-[#38BDF8] bg-[#1769D2]/10 rounded-t-lg w-1/3">
                    FORTIVA CAPITAL
                  </th>
                  <th className="py-3.5 px-3 font-semibold text-[#64748B] w-1/5">Traditional Wealth Firms</th>
                  <th className="py-3.5 px-3 font-semibold text-[#64748B] w-1/5">Speculative Crypto Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {COMPARISON_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-3 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 bg-[#1769D2]/5 font-medium text-white border-x border-[#1769D2]/20">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                        <span>{row.fortiva}</span>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-[#64748B]">
                      {row.traditional}
                    </td>
                    <td className="py-4 px-3 text-[#64748B]">
                      {row.speculative}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
