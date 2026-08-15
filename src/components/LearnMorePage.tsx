import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { Sparkles, ShieldAlert, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';

interface LearnMorePageProps {
  onNavigate: (path: string) => void;
  onStartParticipation: () => void;
}

export const LearnMorePage: React.FC<LearnMorePageProps> = ({ onNavigate, onStartParticipation }) => {
  const steps = [
    'Complete the ZAIFII participation process with your Free Fire UID and details.',
    'Submit your eligible entry to receive your unique Request ID.',
    'Return to ZAIFII through the official eligible TikTok source or bio link.',
    'Complete the participation process again for another eligible entry.',
    'Each eligible completed participation counts as an additional entry in the drawing.',
    'More eligible entries provide more chances to win according to the giveaway rules.',
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs items={[{ name: 'How Additional Entries Work', path: '/learn-more' }]} onNavigate={onNavigate} />

      <article className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8 bg-white">
        
        {/* Header */}
        <header className="pb-6 border-b border-slate-100 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>ZAIFII Bonus Entry Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
            How Additional Entries Work — ZAIFII
          </h1>

          <p className="text-sm text-slate-600 font-medium leading-relaxed">
            Understand how repeat participation through designated eligible TikTok links grants valid additional entry tickets into the Free Fire diamond giveaway pool.
          </p>
        </header>

        {/* Content */}
        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              Step-by-Step Additional Entry Process
            </h2>

            <div className="space-y-3 pt-2">
              {steps.map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Important Notice */}
          <section className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-800">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>Fairness & Verification Notice</span>
            </div>
            <p className="text-xs leading-relaxed text-amber-900">
              Only valid and eligible submissions count. Automated bot scripts, fake UIDs, or abusive duplicate entries are automatically filtered out according to our official <button onClick={() => onNavigate('/giveaway-rules')} className="font-bold underline">Giveaway Rules</button>.
            </p>
          </section>
        </div>

        {/* Actions */}
        <footer className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('/')}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to ZAIFII Home</span>
          </button>

          <button
            onClick={() => {
              onNavigate('/');
              setTimeout(() => {
                onStartParticipation();
              }, 100);
            }}
            className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Submit Entry Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </footer>

      </article>
    </main>
  );
};
