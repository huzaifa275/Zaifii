import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { FAQSection } from './FAQSection';
import { ArrowLeft, HelpCircle } from 'lucide-react';

interface FAQPageProps {
  onNavigate: (path: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs items={[{ name: 'FAQ', path: '/faq' }]} onNavigate={onNavigate} />

      <article className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8 bg-white">
        
        {/* Header */}
        <header className="pb-6 border-b border-slate-100 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
            ZAIFII Free Fire Giveaway — FAQ
          </h1>

          <p className="text-sm text-slate-600 font-medium leading-relaxed">
            Find answers to common questions about Free Fire UID requirements, package selections, giveaway schedules, and additional TikTok entry methods.
          </p>
        </header>

        {/* Existing FAQ accordion */}
        <FAQSection />

        {/* Footer Links */}
        <footer className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('/')}
            className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to ZAIFII Home</span>
          </button>

          <div className="flex items-center gap-4 text-xs font-semibold text-blue-600">
            <button onClick={() => onNavigate('/giveaway-rules')} className="hover:underline cursor-pointer">
              Giveaway Rules
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('/contact')} className="hover:underline cursor-pointer">
              Contact Support
            </button>
          </div>
        </footer>

      </article>
    </main>
  );
};
