import React from 'react';
import { ChevronRight, ArrowUpRight, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/content';

interface FinalCTAProps {
  onOpenGetStarted: () => void;
  onExploreOptions: () => void;
  onOpenConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenGetStarted,
  onExploreOptions,
  onOpenConsultation
}) => {
  return (
    <section 
      id="final-cta"
      className="py-20 sm:py-28 bg-[#0B243F] text-white border-t border-white/10 relative overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Subtle geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-semibold text-[#38BDF8]">
          <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          <span>Structured Digital Wealth Management</span>
        </div>

        {/* Main Closing Headline */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Take a more informed approach to investing.
          </h2>
          <p className="text-base sm:text-lg text-[#EAF3FF]/80 leading-relaxed">
            Gain immediate access to disciplined digital asset strategies, segregated cold-storage custody, and complete portfolio telemetry.
          </p>
        </div>

        {/* Primary Action Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            id="final-cta-get-started"
            onClick={onOpenGetStarted}
            className="w-full sm:w-auto bg-[#1769D2] hover:bg-[#155bb6] text-white font-semibold px-8 py-3.5 rounded-md shadow-lg transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2 text-base group"
          >
            <span>{COMPANY_CONFIG.primaryCTA}</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            type="button"
            id="final-cta-explore-options"
            onClick={onExploreOptions}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-medium px-6 py-3.5 rounded-md border border-white/15 transition-colors flex items-center justify-center gap-2 text-base"
          >
            <span>{COMPANY_CONFIG.secondaryCTA}</span>
            <ArrowUpRight className="w-4 h-4 text-[#64748B]" />
          </button>
        </div>

        {/* Secondary advisor link */}
        <div className="pt-4 text-xs text-[#EAF3FF]/70">
          <span>Looking for customized high-net-worth or corporate entity solutions? </span>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="text-[#38BDF8] hover:underline font-semibold"
          >
            Schedule a confidential consultation
          </button>
        </div>

        {/* Security checks row */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#64748B]">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Dedicated Account Segregation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Fiduciary Reporting Ledgers</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            <span>No Lockup Exit Penalties</span>
          </div>
        </div>

      </div>
    </section>
  );
};
