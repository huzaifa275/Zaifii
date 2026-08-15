import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { FileText, ShieldAlert, CheckCircle, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs items={[{ name: 'Terms & Conditions', path: '/terms' }]} onNavigate={onNavigate} />

      <article className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8 bg-white">
        
        {/* Header */}
        <header className="pb-6 border-b border-slate-100 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Official Platform Terms</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
            Terms & Conditions — ZAIFII
          </h1>

          <p className="text-sm text-slate-500 font-medium">
            Effective Date: August 15, 2026 | Last Revision: August 2026
          </p>
        </header>

        {/* Content sections */}
        <div className="space-y-8 text-slate-700 leading-relaxed text-sm">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              1. Agreement to Terms
            </h2>
            <p>
              By accessing and participating in the ZAIFII Free Fire giveaway platform, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              2. Participation Eligibility
            </h2>
            <p>
              Participation in ZAIFII giveaways is 100% free of charge. No purchase, payment, or financial transaction is ever required to enter or win.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Participants must be active Free Fire players with a valid, non-banned player UID.</li>
              <li>Submissions must contain authentic player UID and matching in-game name details.</li>
              <li>Incorrect player details may result in inability to deliver rewards if selected.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              3. Additional Entry Guidelines
            </h2>
            <p>
              Participants may submit additional entries by returning to ZAIFII through eligible official TikTok links or designated promotional posts as described in our <button onClick={() => onNavigate('/learn-more')} className="text-blue-600 font-semibold underline hover:text-blue-700">Learn More</button> guide.
            </p>
            <p>
              Automated bot scripts, illegal exploit attempts, or malicious duplicate submissions intended to bypass fairness verification are strictly prohibited and will result in immediate entry disqualification.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              4. Winner Selection & Prize Distribution
            </h2>
            <p>
              Winners are selected using an impartial random selection process from verified eligible tickets. All prizes consist of Free Fire Diamonds credited to the winning player's UID. Prizes are non-transferable and cannot be exchanged for cash currency.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              5. Disclaimer of Affiliation
            </h2>
            <p>
              {SITE_CONFIG.disclaimer} ZAIFII operates as an independent promotional hub for gaming enthusiasts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              6. Modifications & Governing Law
            </h2>
            <p>
              ZAIFII reserves the right to update these terms or modify giveaway schedules to maintain security and operational integrity. Continued use of the platform after updates constitutes acceptance of the modified terms.
            </p>
          </section>

        </div>

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
            <button onClick={() => onNavigate('/privacy-policy')} className="hover:underline cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('/giveaway-rules')} className="hover:underline cursor-pointer">
              Giveaway Rules
            </button>
          </div>
        </footer>

      </article>
    </main>
  );
};
