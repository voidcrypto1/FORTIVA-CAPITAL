import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Scale, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink,
  Info
} from 'lucide-react';
import { COMPANY_CONFIG } from '../data/content';

interface SecurityTransparencyProps {
  onOpenRiskDisclosure: () => void;
  onOpenConsultation: () => void;
}

export const SecurityTransparency: React.FC<SecurityTransparencyProps> = ({
  onOpenRiskDisclosure,
  onOpenConsultation
}) => {
  return (
    <section 
      id="security"
      className="py-20 sm:py-28 bg-[#F7F9FC] text-[#102033]"
      aria-label="Security, Governance and Transparency"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3FF] border border-[#1769D2]/20 text-[#1769D2] text-xs font-semibold uppercase tracking-wider">
            Governance & Protection
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102033] tracking-tight">
            Built around transparency and responsible investing.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Every layer of our infrastructure is engineered to protect investor capital, isolate custodial risk, and deliver complete operational clarity.
          </p>
        </div>

        {/* 4-Box Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Box 1: Custodial Architecture */}
          <div className="bg-white rounded-xl border border-[#E3E8EF] p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-[#EAF3FF] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#1769D2]" />
            </div>
            <h3 className="font-bold text-xl text-[#102033]">
              Segregated Institutional Custody
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Client digital assets are never commingled with operating company funds. All holdings reside in dedicated accounts secured by institutional qualified custodians with hardware-isolated cold vaults and multi-party computation (MPC).
            </p>
            <ul className="space-y-2 text-xs text-[#102033] font-medium pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Zero lending or re-hypothecation of discretionary client assets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Multi-signature approval protocols for all outbound settlement</span>
              </li>
            </ul>
          </div>

          {/* Box 2: Transparent Fee Philosophy */}
          <div className="bg-white rounded-xl border border-[#E3E8EF] p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-[#EAF3FF] flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#1769D2]" />
            </div>
            <h3 className="font-bold text-xl text-[#102033]">
              Upfront, Auditable Fee Model
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              We reject the opaque spread markups and hidden custodial kickbacks common across retail platforms. Our flat annualized management fee is transparently disclosed and billed quarterly in arrears.
            </p>
            <ul className="space-y-2 text-xs text-[#102033] font-medium pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Zero deposit fees, zero hidden currency conversion margins</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Detailed fee accounting itemized on every quarterly report</span>
              </li>
            </ul>
          </div>

          {/* Box 3: Data Privacy & Encryption */}
          <div className="bg-white rounded-xl border border-[#E3E8EF] p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-[#EAF3FF] flex items-center justify-center">
              <Lock className="w-6 h-6 text-[#1769D2]" />
            </div>
            <h3 className="font-bold text-xl text-[#102033]">
              Enterprise Data Security
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Your financial records and identity documentation are protected by end-to-end TLS 1.3 encryption and restricted role-based access. We enforce mandatory hardware 2FA and time-locked security approvals.
            </p>
            <ul className="space-y-2 text-xs text-[#102033] font-medium pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>FIDO2 / WebAuthn hardware security key authentication</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Zero data monetization or third-party marketing sharing</span>
              </li>
            </ul>
          </div>

          {/* Box 4: Compliance & Suitability Governance */}
          <div className="bg-white rounded-xl border border-[#E3E8EF] p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-[#EAF3FF] flex items-center justify-center">
              <Scale className="w-6 h-6 text-[#1769D2]" />
            </div>
            <h3 className="font-bold text-xl text-[#102033]">
              Suitability & Risk Discipline
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              We strictly assess client investment objectives and liquidity needs before onboarding. We do not encourage over-leveraged positioning or speculative impulse trading.
            </p>
            <ul className="space-y-2 text-xs text-[#102033] font-medium pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Rigorous client suitability and risk tolerance profiling</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Complete AML/KYC institutional onboarding standards</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Dedicated Risk Disclosure Banner per Requirement #14 & #28 */}
        <div className="bg-[#071A2F] text-white rounded-xl p-6 sm:p-8 border border-[#E3E8EF]/10 space-y-4">
          <div className="flex items-center gap-2.5 text-[#38BDF8]">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="text-base font-bold uppercase tracking-wider">
              Comprehensive Investment Risk Disclosure
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#EAF3FF]/80 leading-relaxed">
            {COMPANY_CONFIG.riskNotice} Digital assets may experience extreme price volatility, technological exploits, changing regulatory frameworks, and market illiquidity. Capital invested in digital strategies is not insured by the FDIC or SIPC unless explicitly stated for specific tokenized cash equivalents.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              id="open-full-risk-disclosure-btn"
              onClick={onOpenRiskDisclosure}
              className="text-xs font-bold text-[#38BDF8] hover:text-white underline underline-offset-4 flex items-center gap-1.5"
            >
              <span>Read Full Legal Risk Disclosure Document</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <span className="text-white/30 hidden sm:inline">•</span>

            <button
              type="button"
              id="security-consultation-btn"
              onClick={onOpenConsultation}
              className="text-xs text-[#EAF3FF]/80 hover:text-white"
            >
              Discuss Custodial Architecture with Compliance Team
            </button>
          </div>
        </div>

        {/* Regulatory Information Placeholder Notice (Requirement #29) */}
        <div className="mt-8 text-center text-xs text-[#64748B] flex items-center justify-center gap-2">
          <Info className="w-3.5 h-3.5 text-[#1769D2]" />
          <span>{COMPANY_CONFIG.jurisdictionPlaceholder}</span>
        </div>

      </div>
    </section>
  );
};
