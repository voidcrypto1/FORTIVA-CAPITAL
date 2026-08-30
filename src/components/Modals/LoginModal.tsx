import React, { useState } from 'react';
import { X, Lock, KeyRound, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenGetStarted: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onOpenGetStarted
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authMethod, setAuthMethod] = useState<'password' | 'hardware'>('password');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authenticatedSuccess, setAuthenticatedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      setAuthenticatedSuccess(true);
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
    >
      <div className="bg-[#071A2F] border border-white/15 rounded-2xl max-w-md w-full text-white shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#0B243F]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#1769D2] flex items-center justify-center text-white font-bold text-sm">
              F
            </div>
            <div>
              <h2 id="login-modal-title" className="text-base font-bold text-white">
                Client Portal Access
              </h2>
              <p className="text-[11px] text-[#64748B]">
                Encrypted Institutional Authentication
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
        <div className="p-6 sm:p-8 space-y-5">
          {authenticatedSuccess ? (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
              <div className="w-12 h-12 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center mx-auto text-[#10B981]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Session Authenticated</h3>
              <p className="text-xs text-[#EAF3FF]/80 leading-relaxed">
                Welcome to your Fortiva Client Dashboard. Segregated custody telemetry is synchronized.
              </p>
              <div className="p-3 bg-black/40 rounded-lg border border-white/10 text-xs font-mono text-[#38BDF8]">
                Session ID: FT-89291-AUTH-SECURE
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-full bg-[#1769D2] hover:bg-[#155bb6] text-white text-xs font-semibold py-2.5 rounded-md transition-colors"
              >
                Access Account Overview
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4 text-xs">
              
              {/* Method Switcher */}
              <div className="flex bg-black/40 p-1 rounded-lg border border-white/10">
                <button
                  type="button"
                  onClick={() => setAuthMethod('password')}
                  className={`flex-1 py-1.5 rounded text-xs font-medium transition-colors ${
                    authMethod === 'password' ? 'bg-[#1769D2] text-white' : 'text-[#64748B] hover:text-white'
                  }`}
                >
                  Password & 2FA
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMethod('hardware')}
                  className={`flex-1 py-1.5 rounded text-xs font-medium transition-colors ${
                    authMethod === 'hardware' ? 'bg-[#1769D2] text-white' : 'text-[#64748B] hover:text-white'
                  }`}
                >
                  FIDO2 Hardware Key
                </button>
              </div>

              {authMethod === 'password' ? (
                <>
                  <div>
                    <label className="text-white font-semibold block mb-1">Account Email / Client ID</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="investor@institutional.com"
                      className="w-full bg-[#0B243F] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#1769D2]"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-white font-semibold block">Password</label>
                      <a href="#faq" onClick={onClose} className="text-[#38BDF8] text-[11px] hover:underline">
                        Forgot Password?
                      </a>
                    </div>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-[#0B243F] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#1769D2]"
                    />
                  </div>
                </>
              ) : (
                <div className="p-6 bg-[#0B243F] rounded-xl border border-white/10 text-center space-y-3">
                  <KeyRound className="w-8 h-8 text-[#38BDF8] mx-auto animate-pulse" />
                  <div className="text-xs font-bold text-white">Insert FIDO2 / YubiKey Security Key</div>
                  <p className="text-[11px] text-[#64748B]">Tap your hardware token to complete cryptographically verified sign-in.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isAuthenticating}
                className="w-full bg-[#1769D2] hover:bg-[#155bb6] disabled:opacity-50 text-white font-semibold py-2.5 rounded-md text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{isAuthenticating ? 'Verifying Credentials...' : 'Authenticate & Sign In'}</span>
              </button>

              <div className="pt-2 text-center text-[11px] text-[#64748B]">
                <span>Don't have an established mandate yet? </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenGetStarted();
                  }}
                  className="text-[#38BDF8] hover:underline font-semibold"
                >
                  Apply for an account
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
