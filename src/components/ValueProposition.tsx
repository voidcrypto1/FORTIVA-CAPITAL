import React, { useState } from 'react';
import { 
  Layers, 
  BarChart3, 
  LineChart, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Eye,
  FileSpreadsheet,
  Headphones
} from 'lucide-react';
import { CORE_FEATURES } from '../data/content';

interface ValuePropositionProps {
  onOpenGetStarted: () => void;
  onOpenConsultation: () => void;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({
  onOpenGetStarted,
  onOpenConsultation
}) => {
  const [selectedFeature, setSelectedFeature] = useState<string>(CORE_FEATURES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#1769D2]" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-[#1769D2]" />;
      case 'LineChart':
        return <LineChart className="w-6 h-6 text-[#1769D2]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#1769D2]" />;
      default:
        return <Shield className="w-6 h-6 text-[#1769D2]" />;
    }
  };

  const activeFeatureObj = CORE_FEATURES.find(f => f.id === selectedFeature) || CORE_FEATURES[0];

  return (
    <section 
      id="value-proposition"
      className="py-20 sm:py-28 bg-[#F7F9FC] text-[#102033]"
      aria-label="Value Proposition & Core Capabilities"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3FF] border border-[#1769D2]/20 text-[#1769D2] text-xs font-semibold uppercase tracking-wider">
            Why Structure Matters
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-[#102033] tracking-tight">
            Investment decisions deserve clarity.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            We replace emotional timing and opaque execution with structured mandates, systematic rebalancing, and direct portfolio telemetry.
          </p>
        </div>

        {/* 4 Core Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_FEATURES.map((feature) => {
            const isSelected = feature.id === selectedFeature;
            return (
              <div
                key={feature.id}
                id={`feature-card-${feature.id}`}
                onClick={() => setSelectedFeature(feature.id)}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-white border-[#1769D2] shadow-md ring-1 ring-[#1769D2]/20 translate-y-[-2px]'
                    : 'bg-white border-[#E3E8EF] hover:border-[#1769D2]/40 hover:shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-[#EAF3FF] flex items-center justify-center">
                      {getIcon(feature.icon)}
                    </div>
                    {feature.badge && (
                      <span className="text-[11px] font-semibold text-[#1769D2] bg-[#EAF3FF] px-2 py-0.5 rounded">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-[#102033] tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E3E8EF] mt-6 flex items-center justify-between text-xs font-semibold text-[#1769D2]">
                  <span>Explore detail</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Deep Dive Interactive Panel */}
        <div className="mt-10 bg-[#071A2F] text-white rounded-xl p-6 sm:p-8 border border-[#E3E8EF]/10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Detail narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#38BDF8] uppercase tracking-wider">
                  Deep Dive Focus
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs text-[#EAF3FF]/70">{activeFeatureObj.title}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {activeFeatureObj.title}
              </h3>

              <p className="text-sm text-[#EAF3FF]/80 leading-relaxed">
                {activeFeatureObj.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeFeatureObj.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#EAF3FF]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Action Callout */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-lg p-5 space-y-4">
              <div className="text-xs text-[#64748B] font-semibold uppercase tracking-wider">
                Institutional Standard
              </div>
              <p className="text-xs text-[#EAF3FF]/85 leading-relaxed">
                Designed to meet the rigorous accounting, tax, and governance requirements of family offices, trusts, and disciplined individual allocators.
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenGetStarted}
                  className="bg-[#1769D2] hover:bg-[#155bb6] text-white text-xs font-semibold px-4 py-2.5 rounded transition-colors"
                >
                  Get Started
                </button>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="text-xs text-[#EAF3FF] hover:text-white underline underline-offset-4"
                >
                  Speak with Wealth Strategist
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
