import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  Layers, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { InvestmentOption } from '../../types';

interface StrategyDetailsModalProps {
  option: InvestmentOption | null;
  onClose: () => void;
  onSelectAndOnboard: () => void;
}

export const StrategyDetailsModal: React.FC<StrategyDetailsModalProps> = ({
  option,
  onClose,
  onSelectAndOnboard
}) => {
  if (!option) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="strategy-modal-title"
    >
      <div className="bg-[#071A2F] border border-white/15 rounded-2xl max-w-2xl w-full text-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#0B243F]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold text-[#38BDF8] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                {option.category} Mandate
              </span>
              <span className="text-[10px] text-[#64748B]">• {option.riskTier} Risk Tier</span>
            </div>
            <h2 id="strategy-modal-title" className="text-xl font-bold text-white">
              {option.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#64748B] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
          
          {/* Strategy Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Mandate Objective</h3>
            <p className="text-sm text-[#EAF3FF]/90 leading-relaxed">
              {option.description}
            </p>
          </div>

          {/* Key Parameters */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#0B243F] border border-white/10 text-xs">
            <div className="space-y-1">
              <div className="text-[#64748B] uppercase font-semibold text-[10px]">Suggested Horizon</div>
              <div className="font-bold text-white text-sm">{option.targetHorizon}</div>
            </div>
            <div className="space-y-1">
              <div className="text-[#64748B] uppercase font-semibold text-[10px]">Minimum Account Size</div>
              <div className="font-bold text-white text-sm">{option.minInvestment}</div>
            </div>
          </div>

          {/* Allocation Weights */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#64748B] uppercase tracking-wider">Asset Distribution Targets</span>
              <span className="text-[#10B981] font-semibold">100% Target Alignment</span>
            </div>

            <div className="h-3 w-full rounded-full bg-black/40 overflow-hidden flex">
              {option.allocationFocus.map((alloc, idx) => (
                <div
                  key={idx}
                  style={{ width: `${alloc.percentage}%`, backgroundColor: alloc.color }}
                  title={`${alloc.asset}: ${alloc.percentage}%`}
                />
              ))}
            </div>

            <div className="space-y-2 pt-1">
              {option.allocationFocus.map((alloc, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded bg-black/20 border border-white/5 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: alloc.color }} />
                    <span className="text-white font-medium">{alloc.asset}</span>
                  </div>
                  <span className="font-bold text-white font-mono">{alloc.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Traits & Governance */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Operational Governance</h3>
            <ul className="space-y-2 text-xs text-[#EAF3FF]/80">
              {option.keyTraits.map((trait, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Risk Note */}
          <div className="p-4 rounded-xl bg-black/30 border border-white/5 flex items-start gap-3 text-xs text-[#64748B]">
            <AlertTriangle className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
            <p>
              Strategy weights are dynamically adjusted according to rules-based drift triggers. Investment involves risk of capital loss. Past results are not indicative of future performance.
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0B243F] flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-[#64748B] hover:text-white px-3 py-2"
          >
            Close Factsheet
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectAndOnboard();
            }}
            className="bg-[#1769D2] hover:bg-[#155bb6] text-white text-xs font-semibold px-5 py-2.5 rounded-md flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <span>Select & Configure Mandate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
