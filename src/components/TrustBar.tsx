import React from 'react';
import { 
  ShieldCheck, 
  Activity, 
  FileText, 
  Lock, 
  Clock, 
  CheckSquare
} from 'lucide-react';
import { TRUST_BAR_ITEMS } from '../data/content';

export const TrustBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#1769D2]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#1769D2]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#1769D2]" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-[#1769D2]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#1769D2]" />;
      default:
        return <CheckSquare className="w-5 h-5 text-[#1769D2]" />;
    }
  };

  return (
    <section 
      id="trust-credibility"
      className="bg-[#0B243F] border-y border-white/10 py-10 text-white"
      aria-label="Trust and Platform Credibility"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Microcopy */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
            Transparency First
          </span>
          <p className="text-sm text-[#EAF3FF]/80 mt-1 font-medium">
            Clear information, segregated custody, and systematic governance form the core of every client relationship.
          </p>
        </div>

        {/* 5-Column Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {TRUST_BAR_ITEMS.map((item, index) => (
            <div 
              key={index}
              className="bg-black/20 border border-white/5 p-4 rounded-lg flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-bold text-sm text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Audit & Compliance Disclaimer Note */}
        <div className="mt-8 pt-4 border-t border-white/5 text-center text-xs text-[#64748B]">
          <span>Institutional account segregation • Cryptographic Proof of Reserves • Non-custodial discretionary mandates available</span>
        </div>

      </div>
    </section>
  );
};
