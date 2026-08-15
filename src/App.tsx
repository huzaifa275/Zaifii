import React, { useState } from 'react';
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

// Dedicated SEO Route Pages
import { HowItWorksPage } from './components/HowItWorksPage';
import { GiveawayRulesPage } from './components/GiveawayRulesPage';
import { FAQPage } from './components/FAQPage';
import { LearnMorePage } from './components/LearnMorePage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsPage } from './components/TermsPage';
import { ContactPage } from './components/ContactPage';
import { NotFoundPage } from './components/NotFoundPage';

// SEO Router Hook
import { useSeoRouter } from './hooks/useSeoRouter';

export default function App() {
  const { currentPath, navigate } = useSeoRouter();

  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [submittedEntry, setSubmittedEntry] = useState<ParticipationEntry | null>(null);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
  const [resetKey, setResetKey] = useState<number>(0);

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
    if (currentPath !== '/') {
      navigate('/');
      setTimeout(() => {
        if (sectionId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartNewParticipation = () => {
    // Increment resetKey to wipe out all form data and return to Step 1
    setResetKey((prev) => prev + 1);
    setSubmittedEntry(null);
    setIsLearnMoreOpen(false);
    setIsRulesModalOpen(false);

    if (currentPath !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('participation-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const inputEl = document.getElementById('ff-uid-input') as HTMLInputElement | null;
          if (inputEl) inputEl.focus();
        }, 150);
      }, 100);
      return;
    }

    const el = document.getElementById('participation-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      const inputEl = document.getElementById('ff-uid-input') as HTMLInputElement | null;
      if (inputEl) inputEl.focus();
    }, 150);
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

  // Render view depending on path
  const renderMainContent = () => {
    switch (currentPath) {
      case '/':
        return (
          <main className="flex-1 space-y-4">
            {/* Hero Section */}
            <Hero
              onStartParticipation={handleStartNewParticipation}
              onLearnHowItWorks={() => scrollToSection('how-it-works')}
            />

            {/* Main Participation Multi-step Form */}
            <ParticipationContainer
              resetKey={resetKey}
              onSubmitted={handleSubmitted}
              onError={(msg) => addToast(msg, 'error')}
            />

            {/* Middle Content Ad Placement */}
            <AdSlot slotId={SITE_CONFIG.adSlots.CONTENT} className="max-w-7xl mx-auto px-4" />

            {/* Want Another Entry? / TikTok Flow Section */}
            <AdditionalEntrySection
              onOpenLearnMore={() => navigate('/learn-more')}
              onStartParticipation={handleStartNewParticipation}
            />

            {/* How It Works Section */}
            <HowItWorks
              onStartParticipation={handleStartNewParticipation}
              onOpenLearnMore={() => navigate('/learn-more')}
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

            {/* Extra Ad Slot 1 */}
            <AdSlot slotId={SITE_CONFIG.adSlots.EXTRA_1} className="max-w-7xl mx-auto px-4" />

            {/* Extra Ad Slot 2 (Vignette / Global format) */}
            <AdSlot slotId={SITE_CONFIG.adSlots.EXTRA_2} />
          </main>
        );

      case '/how-it-works':
        return <HowItWorksPage onNavigate={navigate} onStartParticipation={handleStartNewParticipation} />;

      case '/giveaway-rules':
        return <GiveawayRulesPage onNavigate={navigate} onStartParticipation={handleStartNewParticipation} />;

      case '/faq':
        return <FAQPage onNavigate={navigate} />;

      case '/learn-more':
        return <LearnMorePage onNavigate={navigate} onStartParticipation={handleStartNewParticipation} />;

      case '/privacy-policy':
        return <PrivacyPolicyPage onNavigate={navigate} />;

      case '/terms':
        return <TermsPage onNavigate={navigate} />;

      case '/contact':
        return <ContactPage onNavigate={navigate} onToast={addToast} />;

      default:
        return <NotFoundPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF] text-slate-800 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* Header */}
      <Header
        onNavigate={scrollToSection}
        onNavigatePath={navigate}
        onOpenLearnMore={() => navigate('/learn-more')}
        onOpenRules={() => navigate('/giveaway-rules')}
        onStartParticipation={handleStartNewParticipation}
      />

      {renderMainContent()}

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onNavigatePath={navigate}
        onOpenLearnMore={() => navigate('/learn-more')}
        onOpenRules={() => navigate('/giveaway-rules')}
        onStartParticipation={handleStartNewParticipation}
      />

      {/* Success Modal */}
      <SuccessModal
        entry={submittedEntry}
        onClose={() => setSubmittedEntry(null)}
        onNewEntry={handleStartNewParticipation}
        onOpenLearnMore={() => navigate('/learn-more')}
        onToast={addToast}
      />

      {/* Learn More Modal */}
      <LearnMoreModal
        isOpen={isLearnMoreOpen}
        onClose={() => setIsLearnMoreOpen(false)}
        onStartParticipation={handleStartNewParticipation}
      />

    </div>
  );
}
