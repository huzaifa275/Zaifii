import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { HowItWorks } from './HowItWorks';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (path: string) => void;
  onStartParticipation: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate, onStartParticipation }) => {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs items={[{ name: 'How It Works', path: '/how-it-works' }]} onNavigate={onNavigate} />

      <article className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8 bg-white">
        <header className="pb-6 border-b border-slate-100 space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Complete Participation Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
            How ZAIFII Free Fire Giveaway Works
          </h1>

          <p className="text-base text-slate-600 font-medium leading-relaxed max-w-2xl">
            Participating in the ZAIFII Free Fire giveaway is quick, 100% free, and transparent. Follow the steps below to register your eligible entry ticket.
          </p>
        </header>

        {/* Existing HowItWorks steps */}
        <HowItWorks
          onStartParticipation={() => {
            onNavigate('/');
            setTimeout(onStartParticipation, 100);
          }}
          onOpenLearnMore={() => onNavigate('/learn-more')}
        />

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
            <button onClick={() => onNavigate('/faq')} className="hover:underline cursor-pointer">
              Read FAQ
            </button>
          </div>
        </footer>

      </article>
    </main>
  );
};
