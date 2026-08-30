import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ChevronRight, ArrowUpRight, Lock } from 'lucide-react';
import { NAVIGATION_LINKS, COMPANY_CONFIG } from '../data/content';

interface NavbarProps {
  onOpenGetStarted: () => void;
  onOpenLogin: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenGetStarted,
  onOpenLogin,
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for subtle indicator
      const sections = ['overview', 'how-it-works', 'investment-options', 'showcase', 'calculator', 'why-fortiva', 'security', 'faq'];
      const scrollPos = window.scrollY + 120;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#071A2F]/95 backdrop-blur-md border-b border-[#E3E8EF]/10 shadow-md py-3.5' 
          : 'bg-[#071A2F] border-b border-[#E3E8EF]/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#overview" 
            id="nav-logo"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1769D2] rounded-md px-1 py-0.5"
            aria-label="FORTIVA CAPITAL Home"
          >
            <div className="w-9 h-9 rounded bg-[#1769D2] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-[1.02]">
              <div className="font-bold text-lg tracking-tight flex items-baseline">
                <span>F</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] ml-0.5 mb-0.5"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-wider text-base sm:text-lg leading-tight">
                FORTIVA
              </span>
              <span className="text-[#64748B] text-[10px] uppercase font-semibold tracking-widest leading-none">
                CAPITAL
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm" aria-label="Main Navigation">
            {NAVIGATION_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  id={`nav-link-${sectionId}`}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors duration-150 ${
                    isActive 
                      ? 'text-white bg-white/10' 
                      : 'text-[#EAF3FF]/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Desktop CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              id="nav-login-button"
              onClick={onOpenLogin}
              className="text-[#EAF3FF] hover:text-white text-sm font-medium px-3.5 py-2 rounded-md transition-colors hover:bg-white/5 flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5 text-[#64748B]" />
              <span>Log In</span>
            </button>

            <button
              type="button"
              id="nav-get-started-button"
              onClick={onOpenGetStarted}
              className="bg-[#1769D2] hover:bg-[#155bb6] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-sm transition-all duration-150 active:scale-[0.98] flex items-center gap-1.5 focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#071A2F] focus:ring-[#1769D2]"
            >
              <span>{COMPANY_CONFIG.primaryCTA}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#1769D2]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="sm:hidden bg-[#071A2F] border-b border-[#E3E8EF]/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2"
        >
          <div className="flex flex-col space-y-1">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`mobile-nav-${link.href.replace('#', '')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#EAF3FF] hover:text-white px-3 py-2.5 rounded-md text-sm font-medium hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E3E8EF]/10 flex flex-col gap-2">
            <button
              type="button"
              id="mobile-nav-login"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full text-center text-white bg-white/10 hover:bg-white/15 text-sm font-medium py-2.5 rounded-md transition-colors"
            >
              Log In to Portal
            </button>
            <button
              type="button"
              id="mobile-nav-get-started"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="w-full text-center text-white bg-[#1769D2] hover:bg-[#155bb6] text-sm font-semibold py-2.5 rounded-md shadow-sm transition-colors"
            >
              {COMPANY_CONFIG.primaryCTA}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
