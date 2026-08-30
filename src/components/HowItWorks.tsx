import React, { useState } from 'react';
import { 
  UserCheck, 
  Compass, 
  Sliders, 
  LineChart, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

interface HowItWorksProps {
  onOpenGetStarted: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenGetStarted }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <UserCheck className="w-5 h-5 text-[#1769D2]" />;
      case 1:
        return <Compass className="w-5 h-5 text-[#1769D2]" />;
      case 2:
        return <Sliders className="w-5 h-5 text-[#1769D2]" />;
      case 3:
        return <LineChart className="w-5 h-5 text-[#1769D2]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#1769D2]" />;
    }
  };

  return (
    <section 
      id="how-it-works"
      className="py-20 sm:py-28 bg-[#071A2F] text-white border-t border-[#E3E8EF]/10"
      aria-label="How Fortiva Capital Works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider">
            Process & Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Fortiva Capital Works
          </h2>
          <p className="text-base sm:text-lg text-[#EAF3FF]/80 leading-relaxed">
            A transparent four-step workflow built to transition clients seamlessly from onboarding to disciplined portfolio governance.
          </p>
        </div>

        {/* 4-Step Interactive Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <div
                key={step.number}
                id={`step-card-${step.number}`}
                onClick={() => setActiveStepIndex(idx)}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-200 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0B243F] border-[#1769D2] shadow-lg ring-1 ring-[#1769D2]/30 -translate-y-1'
                    : 'bg-black/20 border-white/10 hover:border-white/20 hover:bg-black/30'
                }`}
              >
                <div className="space-y-4">
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-black ${isActive ? 'text-[#38BDF8]' : 'text-[#64748B]'}`}>
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#EAF3FF]/70 mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-medium text-[#38BDF8]">
                  <span>{isActive ? 'Active Stage' : 'View Stage Details'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-1' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Stage Walkthrough Detail Box */}
        <div className="mt-10 bg-[#0B243F] border border-white/15 rounded-xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-[#1769D2]/20 text-[#38BDF8] text-xs font-bold">
                  Step {HOW_IT_WORKS_STEPS[activeStepIndex].number} Focus
                </span>
                <span className="text-sm font-semibold text-white">
                  {HOW_IT_WORKS_STEPS[activeStepIndex].title}
                </span>
              </div>
              <p className="text-sm text-[#EAF3FF]/80 leading-relaxed">
                {HOW_IT_WORKS_STEPS[activeStepIndex].details}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenGetStarted}
                className="bg-[#1769D2] hover:bg-[#155bb6] text-white text-xs font-semibold px-5 py-3 rounded-md transition-colors shadow-sm"
              >
                Begin Onboarding
              </button>
            </div>
          </div>
        </div>

        {/* Risk reminder banner */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#64748B] text-center">
          <ShieldAlert className="w-4 h-4 text-[#38BDF8]" />
          <span>All investment allocations are subject to market volatility and do not guarantee principal preservation or positive returns.</span>
        </div>

      </div>
    </section>
  );
};
