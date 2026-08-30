import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Building, 
  User, 
  Briefcase, 
  AlertCircle,
  Lock
} from 'lucide-react';
import { INVESTMENT_OPTIONS } from '../../data/content';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [entityType, setEntityType] = useState<'individual' | 'entity' | 'advisor'>('individual');
  const [selectedStrategy, setSelectedStrategy] = useState<string>(INVESTMENT_OPTIONS[0].id);
  const [riskTolerance, setRiskTolerance] = useState<string>('Balanced');
  const [capitalRange, setCapitalRange] = useState<string>('$25,000 - $100,000');
  
  // Form fields
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="get-started-modal-title"
    >
      <div className="bg-[#071A2F] border border-white/15 rounded-2xl max-w-2xl w-full text-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0B243F]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#1769D2] flex items-center justify-center text-white font-bold text-sm">
              F
            </div>
            <div>
              <h2 id="get-started-modal-title" className="text-base font-bold text-white">
                Account Application & Onboarding
              </h2>
              <p className="text-[11px] text-[#64748B]">
                Step {step} of 3 • Structured Institutional Onboarding
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
              <div className="w-14 h-14 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center mx-auto text-[#10B981]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Application Received
              </h3>
              <p className="text-sm text-[#EAF3FF]/80 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{fullName || 'Investor'}</span>. Your preliminary account profile has been logged. An institutional onboarding director will reach out via <span className="text-white font-mono">{email}</span> within 1 business day with your secure identity verification link.
              </p>

              <div className="p-4 rounded-xl bg-black/30 border border-white/10 text-xs text-left space-y-1.5 max-w-md mx-auto">
                <div className="text-[#64748B] uppercase font-bold text-[10px]">Submitted Configuration</div>
                <div><span className="text-[#64748B]">Entity:</span> <span className="text-white capitalize">{entityType}</span></div>
                <div><span className="text-[#64748B]">Target Mandate:</span> <span className="text-white">{INVESTMENT_OPTIONS.find(o => o.id === selectedStrategy)?.name}</span></div>
                <div><span className="text-[#64748B]">Allocation Scope:</span> <span className="text-white">{capitalRange}</span></div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-[#1769D2] hover:bg-[#155bb6] text-white text-xs font-semibold px-6 py-2.5 rounded-md transition-colors"
                >
                  Return to Platform
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Entity & Investor Profile */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <h3 className="text-lg font-bold text-white">Select Account Entity Type</h3>
                    <p className="text-xs text-[#64748B] mt-1">Determine the legal structure for your segregated custodial account.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setEntityType('individual')}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                        entityType === 'individual'
                          ? 'border-[#1769D2] bg-[#0B243F] ring-1 ring-[#1769D2]'
                          : 'border-white/10 bg-black/20 hover:border-white/20'
                      }`}
                    >
                      <User className={`w-5 h-5 ${entityType === 'individual' ? 'text-[#38BDF8]' : 'text-[#64748B]'}`} />
                      <div className="mt-3">
                        <div className="text-xs font-bold text-white">Individual / Joint</div>
                        <div className="text-[10px] text-[#64748B] mt-0.5">Personal taxable or trust account</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setEntityType('entity')}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                        entityType === 'entity'
                          ? 'border-[#1769D2] bg-[#0B243F] ring-1 ring-[#1769D2]'
                          : 'border-white/10 bg-black/20 hover:border-white/20'
                      }`}
                    >
                      <Building className={`w-5 h-5 ${entityType === 'entity' ? 'text-[#38BDF8]' : 'text-[#64748B]'}`} />
                      <div className="mt-3">
                        <div className="text-xs font-bold text-white">Corporate / Family Office</div>
                        <div className="text-[10px] text-[#64748B] mt-0.5">LLC, LP, Foundation, or Trust</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setEntityType('advisor')}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                        entityType === 'advisor'
                          ? 'border-[#1769D2] bg-[#0B243F] ring-1 ring-[#1769D2]'
                          : 'border-white/10 bg-black/20 hover:border-white/20'
                      }`}
                    >
                      <Briefcase className={`w-5 h-5 ${entityType === 'advisor' ? 'text-[#38BDF8]' : 'text-[#64748B]'}`} />
                      <div className="mt-3">
                        <div className="text-xs font-bold text-white">RIA / Institutional</div>
                        <div className="text-[10px] text-[#64748B] mt-0.5">Multi-account discretionary access</div>
                      </div>
                    </button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-white block">
                      Anticipated Capital Allocation
                    </label>
                    <select
                      value={capitalRange}
                      onChange={(e) => setCapitalRange(e.target.value)}
                      className="w-full bg-[#0B243F] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#1769D2]"
                    >
                      <option value="$10,000 - $25,000">$10,000 – $25,000 USD</option>
                      <option value="$25,000 - $100,000">$25,000 – $100,000 USD</option>
                      <option value="$100,000 - $500,000">$100,000 – $500,000 USD</option>
                      <option value="$500,000 - $1,000,000">$500,000 – $1,000,000 USD</option>
                      <option value="$1,000,000+">$1,000,000+ USD (Institutional Mandate)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 2: Investment Strategy Selection */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <h3 className="text-lg font-bold text-white">Select Strategic Mandate</h3>
                    <p className="text-xs text-[#64748B] mt-1">Choose the primary framework for your account allocation.</p>
                  </div>

                  <div className="space-y-3">
                    {INVESTMENT_OPTIONS.map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedStrategy(opt.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                          selectedStrategy === opt.id
                            ? 'border-[#1769D2] bg-[#0B243F] ring-1 ring-[#1769D2]'
                            : 'border-white/10 bg-black/20 hover:border-white/20'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">{opt.name}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#38BDF8]">{opt.riskTier}</span>
                          </div>
                          <p className="text-[11px] text-[#64748B]">{opt.tagline}</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedStrategy === opt.id ? 'border-[#1769D2] bg-[#1769D2]' : 'border-[#64748B]'
                        }`}>
                          {selectedStrategy === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-lg bg-black/30 border border-white/5 text-xs text-[#64748B] flex items-start gap-2">
                    <Lock className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>Strategies feature scheduled automated rebalancing and 100% cold vault institutional custody.</span>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact Details & Qualification */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <h3 className="text-lg font-bold text-white">Contact & Verification Details</h3>
                    <p className="text-xs text-[#64748B] mt-1">Provide your primary contact to receive encrypted onboarding credentials.</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-white block mb-1">Full Legal Name / Entity Representative *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-[#0B243F] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#1769D2]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-white block mb-1">Business / Primary Email *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. eleanor@vancecapital.com"
                          className="w-full bg-[#0B243F] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#1769D2]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-white block mb-1">Phone Number (Optional)</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (555) 019-2834"
                          className="w-full bg-[#0B243F] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#1769D2]"
                        />
                      </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="pt-2 flex items-start gap-2 text-xs text-[#64748B]">
                      <input
                        type="checkbox"
                        id="terms-checkbox"
                        required
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-0.5 rounded border-white/20 bg-[#0B243F] text-[#1769D2] focus:ring-[#1769D2]"
                      />
                      <label htmlFor="terms-checkbox" className="leading-tight text-[11px] text-[#EAF3FF]/80">
                        I acknowledge that digital asset investing involves risk of capital loss, and confirm that I am seeking institutional wealth management information.
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step Navigation Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-1 text-xs text-[#EAF3FF]/80 hover:text-white font-semibold px-3 py-2 rounded"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="bg-[#1769D2] hover:bg-[#155bb6] text-white text-xs font-semibold px-5 py-2.5 rounded-md flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!termsAccepted || !fullName || !email}
                    className="bg-[#1769D2] hover:bg-[#155bb6] disabled:opacity-50 text-white text-xs font-semibold px-6 py-2.5 rounded-md flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Submit Preliminary Profile</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                )}
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
