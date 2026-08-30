import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Building, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [topic, setTopic] = useState('Custodial Architecture & Security');
  const [capitalSize, setCapitalSize] = useState('$250k - $1M');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setOrganization('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div className="bg-[#071A2F] border border-white/15 rounded-2xl max-w-lg w-full text-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0B243F]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#1769D2] flex items-center justify-center text-white font-bold text-sm">
              F
            </div>
            <div>
              <h2 id="consultation-modal-title" className="text-base font-bold text-white">
                Request Strategy Consultation
              </h2>
              <p className="text-[11px] text-[#64748B]">
                Private Advisory for Qualified Allocators & Family Offices
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

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
              <div className="w-14 h-14 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center mx-auto text-[#10B981]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Consultation Request Confirmed</h3>
              <p className="text-xs sm:text-sm text-[#EAF3FF]/80 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{name}</span>. A senior wealth strategist has received your inquiry. We will contact you at <span className="text-white font-mono">{email}</span> within 24 business hours to confirm calendar scheduling.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-[#1769D2] hover:bg-[#155bb6] text-white text-xs font-semibold px-6 py-2.5 rounded-md transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="text-white font-semibold block mb-1">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Marcus Thorne"
                  className="w-full bg-[#0B243F] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#1769D2]"
                />
              </div>

              <div>
                <label className="text-white font-semibold block mb-1">Direct Business Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. m.thorne@thorneholdings.com"
                  className="w-full bg-[#0B243F] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#1769D2]"
                />
              </div>

              <div>
                <label className="text-white font-semibold block mb-1">Organization / Family Office Name (Optional)</label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="e.g. Thorne Capital Partners"
                  className="w-full bg-[#0B243F] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#1769D2]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-white font-semibold block mb-1">Primary Topic</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full bg-[#0B243F] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#1769D2]"
                  >
                    <option value="Custodial Architecture & Security">Custodial Architecture & Security</option>
                    <option value="Custom Wealth Mandate">Custom Wealth Mandate</option>
                    <option value="Institutional Liquidity & Staking">Institutional Liquidity & Staking</option>
                    <option value="Tax & Multi-Entity Structuring">Tax & Multi-Entity Structuring</option>
                  </select>
                </div>

                <div>
                  <label className="text-white font-semibold block mb-1">Planned Allocation</label>
                  <select
                    value={capitalSize}
                    onChange={(e) => setCapitalSize(e.target.value)}
                    className="w-full bg-[#0B243F] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#1769D2]"
                  >
                    <option value="$100k - $250k">$100k – $250k</option>
                    <option value="$250k - $1M">$250k – $1M</option>
                    <option value="$1M - $5M">$1M – $5M</option>
                    <option value="$5M+">$5M+ (Institutional)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-start gap-2 text-[11px] text-[#64748B]">
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>All consultation requests are subject to strict non-disclosure and confidential fiduciary handling.</span>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3.5 py-2 rounded text-xs text-[#64748B] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#1769D2] hover:bg-[#155bb6] text-white font-semibold px-5 py-2.5 rounded-md text-xs transition-colors shadow-sm"
                >
                  Submit Consultation Request
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
