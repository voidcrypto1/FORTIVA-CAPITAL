import React from 'react';
import { Shield, Lock, ExternalLink, Mail, Phone, MapPin, AlertCircle } from 'lucide-react';
import { COMPANY_CONFIG, NAVIGATION_LINKS } from '../data/content';

interface FooterProps {
  onOpenGetStarted: () => void;
  onOpenLogin: () => void;
  onOpenRiskDisclosure: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenGetStarted,
  onOpenLogin,
  onOpenRiskDisclosure,
  onOpenConsultation
}) => {
  return (
    <footer 
      id="main-footer"
      className="bg-[#071A2F] text-white border-t border-white/10 pt-16 pb-12"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Narrative */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#1769D2] flex items-center justify-center text-white font-bold text-base">
                <span className="flex items-baseline">
                  <span>F</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] ml-0.5 mb-0.5"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold tracking-wider text-base leading-tight">
                  FORTIVA CAPITAL
                </span>
                <span className="text-[#64748B] text-[9px] uppercase font-semibold tracking-widest leading-none">
                  WEALTH & ASSET MANAGEMENT
                </span>
              </div>
            </div>

            <p className="text-xs text-[#EAF3FF]/70 leading-relaxed max-w-sm">
              A modern digital investment and wealth-management platform engineered to give institutional, family office, and qualified allocators structured digital asset exposure.
            </p>

            <div className="pt-2 text-xs text-[#64748B] space-y-1">
              <div>{COMPANY_CONFIG.contactEmail}</div>
              <div>{COMPANY_CONFIG.phone}</div>
              <div>{COMPANY_CONFIG.jurisdictionPlaceholder}</div>
            </div>
          </div>

          {/* Col 2: Platform & Mandates */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Platform
            </div>
            <ul className="space-y-2 text-xs text-[#EAF3FF]/80">
              <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#investment-options" className="hover:text-white transition-colors">Investment Mandates</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Client Console</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Strategy Planner</a></li>
            </ul>
          </div>

          {/* Col 3: Trust & Governance */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Governance
            </div>
            <ul className="space-y-2 text-xs text-[#EAF3FF]/80">
              <li><a href="#why-fortiva" className="hover:text-white transition-colors">Why Fortiva</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Custodial Security</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ Knowledge Base</a></li>
              <li>
                <button 
                  type="button" 
                  onClick={onOpenConsultation}
                  className="hover:text-white transition-colors text-left"
                >
                  Schedule Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Compliance */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Legal & Compliance
            </div>
            <ul className="space-y-2 text-xs text-[#EAF3FF]/80">
              <li>
                <button 
                  type="button" 
                  onClick={onOpenRiskDisclosure} 
                  className="hover:text-white transition-colors text-left font-medium text-[#38BDF8]"
                >
                  Risk Disclosure Statement
                </button>
              </li>
              <li><a href="#security" className="hover:text-white transition-colors">Fee Transparency Terms</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Privacy & Data Policy</a></li>
              <li>
                <button 
                  type="button" 
                  onClick={onOpenLogin}
                  className="hover:text-white transition-colors text-left"
                >
                  Investor Portal Login
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Required Prominent Risk Disclosure Box (Requirement #18 & #28) */}
        <div className="p-6 rounded-xl bg-black/40 border border-white/10 space-y-3 text-xs text-[#64748B] leading-relaxed">
          <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-[#1769D2]" />
            <span>Official Legal & Risk Disclaimers</span>
          </div>
          <p>
            <strong>Risk Disclosure:</strong> Investing involves risk, including the possible loss of principal. Digital assets and other financial instruments can be highly volatile. Information presented on this website is for educational and informational purposes and should not be interpreted as personalized financial, tax, or legal advice. Please review applicable terms, fees, risks, and disclosures before making any investment decision.
          </p>
          <p className="text-[11px] text-[#64748B]">
            FORTIVA CAPITAL does not promise or guarantee specific financial outcomes, rates of return, or protection from capital depreciation. Custodial services are provided in conjunction with qualified institutional partners.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Status */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            © {new Date().getFullYear()} FORTIVA CAPITAL Management Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span>All Systems Operational • Segregated Custody Vaults Online</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
