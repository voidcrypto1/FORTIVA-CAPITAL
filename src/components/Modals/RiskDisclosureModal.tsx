import React from 'react';
import { X, AlertTriangle, FileText, Shield, Download, Printer } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/content';

interface RiskDisclosureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RiskDisclosureModal: React.FC<RiskDisclosureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="risk-disclosure-modal-title"
    >
      <div className="bg-[#071A2F] border border-white/15 rounded-2xl max-w-3xl w-full text-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#0B243F]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#1769D2]/20 border border-[#1769D2]/40 flex items-center justify-center text-[#38BDF8]">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h2 id="risk-disclosure-modal-title" className="text-base font-bold text-white">
                Comprehensive Investment Risk Disclosure
              </h2>
              <p className="text-[11px] text-[#64748B]">
                Document Ref: FORTIVA-RISK-REV-2026 • Legal Notice
              </p>
            </div>
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

        {/* Document Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-[#EAF3FF]/80 leading-relaxed">
          
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-[#EAF3FF] space-y-2">
            <div className="font-bold text-[#38BDF8] uppercase tracking-wider text-[11px]">Key Summary Notice</div>
            <p>
              Investing in digital assets, systematic crypto index allocations, and tokenized financial instruments involves a high degree of risk, including the possible total loss of principal. Digital assets are highly speculative and volatile.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-white text-base">1. Market Volatility & Price Fluctuations</h3>
            <p>
              The prices of digital assets and cryptocurrency tokens fluctuate substantially over short and prolonged periods. Market prices can be influenced by macroeconomic trends, regulatory announcements, technological developments, market liquidity shifts, and broader sentiment. Past performance or sample backtested models are not reliable indicators of future results.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-white text-base">2. Custodial & Technological Risks</h3>
            <p>
              While FORTIVA CAPITAL employs segregated institutional cold-vault storage with multi-signature governance and hardware security modules (HSM), underlying blockchain networks and cryptographic protocols remain subject to technological risks including protocol forks, consensus anomalies, smart contract vulnerabilities, and network congestion.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-white text-base">3. Regulatory & Jurisdictional Environment</h3>
            <p>
              The legal and regulatory frameworks governing digital assets, decentralized finance protocols, and tokenized real-world assets vary significantly by jurisdiction and are subject to ongoing evolution. New legislation or regulatory guidance may adversely affect the liquidity, transferability, or tax treatment of specific digital holdings.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-white text-base">4. No FDIC or SIPC Insurance</h3>
            <p>
              Unlike traditional bank deposit accounts or broker-dealer balances, digital asset holdings held in institutional cold custody are not insured by the Federal Deposit Insurance Corporation (FDIC) or the Securities Investor Protection Corporation (SIPC).
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-white text-base">5. Suitability & Discretionary Advice</h3>
            <p>
              Information presented on this website is for general informational and educational purposes and does not constitute personalized financial, legal, tax, or investment advice. Investors are encouraged to consult with qualified legal, tax, and financial advisors before establishing an investment mandate.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0B243F] flex items-center justify-between">
          <span className="text-xs text-[#64748B]">
            Last Updated: August 2026
          </span>

          <button
            type="button"
            onClick={onClose}
            className="bg-[#1769D2] hover:bg-[#155bb6] text-white text-xs font-semibold px-5 py-2 rounded-md transition-colors"
          >
            I Understand & Acknowledge
          </button>
        </div>

      </div>
    </div>
  );
};
