import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ParticipationContainer } from './components/ParticipationForm/ParticipationContainer';
import { AdditionalEntrySection } from './components/AdditionalEntrySection';
import { HowItWorks } from './components/HowItWorks';
import { ActivitySection } from './components/ActivitySection';
import { GiveawayRules } from './components/GiveawayRules';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { SuccessModal } from './components/SuccessModal';
import { LearnMoreModal } from './components/LearnMoreModal';
import { ToastContainer, ToastMessage } from './components/Toast';
import { ParticipationEntry } from './types';
import { AdSlot } from './components/AdSlot';
import { SITE_CONFIG } from './config/siteConfig';

export default function App() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [submittedEntry, setSubmittedEntry] = useState<ParticipationEntry | null>(null);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);

  const addToast = (text: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, text, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('participation-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitted = (entry: ParticipationEntry) => {
    const now = Date.now();
    if (now - lastSubmissionTime < 5000) {
      addToast('Please wait a few seconds before submitting another request.', 'error');
      return;
    }

    setLastSubmissionTime(now);
    setSubmittedEntry(entry);
    addToast('Participation successfully submitted!', 'success');

    // Persist in localStorage history
    try {
      const existing = JSON.parse(localStorage.getItem('zaifii_user_entries') || '[]');
      localStorage.setItem('zaifii_user_entries', JSON.stringify([entry, ...existing]));
    } catch {
      // Ignore storage errors if disabled
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF] text-slate-800 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* Header */}
      <Header
        onNavigate={scrollToSection}
        onOpenLearnMore={() => setIsLearnMoreOpen(true)}
        onOpenRules={() => setIsRulesModalOpen(true)}
        onStartParticipation={scrollToForm}
      />

      <main className="flex-1 space-y-4">
        
        {/* Hero Section */}
        <Hero
          onStartParticipation={scrollToForm}
          onLearnHowItWorks={() => scrollToSection('how-it-works')}
        />

        {/* Main Participation Multi-step Form */}
        <ParticipationContainer
          onSubmitted={handleSubmitted}
          onError={(msg) => addToast(msg, 'error')}
        />

        {/* Middle Content Ad Placement */}
        <div className="max-w-7xl mx-auto px-4 py-2">
          <AdSlot slotId={SITE_CONFIG.adSlots.CONTENT} minHeight="min-h-[90px]" />
        </div>

        {/* Want Another Entry? / TikTok Flow Section */}
        <AdditionalEntrySection
          onOpenLearnMore={() => setIsLearnMoreOpen(true)}
          onStartParticipation={scrollToForm}
        />

        {/* How It Works Section */}
        <HowItWorks
          onStartParticipation={scrollToForm}
          onOpenLearnMore={() => setIsLearnMoreOpen(true)}
        />

        {/* Recent Activity Section */}
        <ActivitySection />

        {/* Giveaway Rules Section */}
        <GiveawayRules
          isOpenModal={isRulesModalOpen}
          onCloseModal={() => setIsRulesModalOpen(false)}
          onOpenRulesModal={() => setIsRulesModalOpen(true)}
        />

        {/* FAQ Accordion Section */}
        <FAQSection />

      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenLearnMore={() => setIsLearnMoreOpen(true)}
        onOpenRules={() => setIsRulesModalOpen(true)}
        onStartParticipation={scrollToForm}
      />

      {/* Success Modal */}
      <SuccessModal
        entry={submittedEntry}
        onClose={() => setSubmittedEntry(null)}
        onNewEntry={scrollToForm}
        onOpenLearnMore={() => setIsLearnMoreOpen(true)}
        onToast={addToast}
      />

      {/* Learn More Modal */}
      <LearnMoreModal
        isOpen={isLearnMoreOpen}
        onClose={() => setIsLearnMoreOpen(false)}
        onStartParticipation={scrollToForm}
      />

    </div>
  );
}
