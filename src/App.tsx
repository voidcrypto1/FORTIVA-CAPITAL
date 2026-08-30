import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ValueProposition } from './components/ValueProposition';
import { HowItWorks } from './components/HowItWorks';
import { InvestmentOptions } from './components/InvestmentOptions';
import { DashboardShowcase } from './components/DashboardShowcase';
import { StrategyCalculator } from './components/StrategyCalculator';
import { WhyFortiva } from './components/WhyFortiva';
import { SecurityTransparency } from './components/SecurityTransparency';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

// Modals
import { GetStartedModal } from './components/Modals/GetStartedModal';
import { StrategyDetailsModal } from './components/Modals/StrategyDetailsModal';
import { ConsultationModal } from './components/Modals/ConsultationModal';
import { RiskDisclosureModal } from './components/Modals/RiskDisclosureModal';
import { LoginModal } from './components/Modals/LoginModal';

import { InvestmentOption } from './types';
import { INVESTMENT_OPTIONS } from './data/content';

export default function App() {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isRiskDisclosureOpen, setIsRiskDisclosureOpen] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<InvestmentOption | null>(null);

  const handleOpenGetStarted = () => {
    setIsGetStartedOpen(true);
  };

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleOpenRiskDisclosure = () => {
    setIsRiskDisclosureOpen(true);
  };

  const handleSelectStrategy = (option: InvestmentOption) => {
    setSelectedStrategy(option);
  };

  const handleExploreOptions = () => {
    const el = document.getElementById('investment-options');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-[#102033] selection:bg-[#1769D2] selection:text-white">
      {/* Top Main Navigation Bar */}
      <Navbar
        onOpenGetStarted={handleOpenGetStarted}
        onOpenLogin={handleOpenLogin}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Page Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive Dashboard Widget Preview */}
        <Hero
          onOpenGetStarted={handleOpenGetStarted}
          onExploreOptions={handleExploreOptions}
        />

        {/* 2. Trust & Credibility Strip */}
        <TrustBar />

        {/* 3. Value Proposition: "Investment decisions deserve clarity." */}
        <ValueProposition
          onOpenGetStarted={handleOpenGetStarted}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 4. How It Works: 4-Step Process */}
        <HowItWorks
          onOpenGetStarted={handleOpenGetStarted}
        />

        {/* 5. Investment Options & Mandates */}
        <InvestmentOptions
          onSelectOption={handleSelectStrategy}
          onOpenGetStarted={handleOpenGetStarted}
        />

        {/* 6. Product / Dashboard Showcase Console */}
        <DashboardShowcase
          onOpenGetStarted={handleOpenGetStarted}
        />

        {/* 7. Interactive Strategy & Fee Simulator */}
        <StrategyCalculator
          onOpenGetStarted={handleOpenGetStarted}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 8. Why Choose Fortiva Capital & Comparison Matrix */}
        <WhyFortiva />

        {/* 9. Security, Governance & Risk Transparency */}
        <SecurityTransparency
          onOpenRiskDisclosure={handleOpenRiskDisclosure}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 10. Frequently Asked Questions */}
        <FAQSection
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 11. Final Closing CTA */}
        <FinalCTA
          onOpenGetStarted={handleOpenGetStarted}
          onExploreOptions={handleExploreOptions}
          onOpenConsultation={handleOpenConsultation}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenGetStarted={handleOpenGetStarted}
        onOpenLogin={handleOpenLogin}
        onOpenRiskDisclosure={handleOpenRiskDisclosure}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Onboarding & Action Modals */}
      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
      />

      <StrategyDetailsModal
        option={selectedStrategy}
        onClose={() => setSelectedStrategy(null)}
        onSelectAndOnboard={() => {
          setSelectedStrategy(null);
          setIsGetStartedOpen(true);
        }}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <RiskDisclosureModal
        isOpen={isRiskDisclosureOpen}
        onClose={() => setIsRiskDisclosureOpen(false)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onOpenGetStarted={() => {
          setIsLoginOpen(false);
          setIsGetStartedOpen(true);
        }}
      />
    </div>
  );
}
