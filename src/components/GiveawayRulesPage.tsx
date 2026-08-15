import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { ShieldCheck, Calendar, Users, Award, AlertTriangle, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface GiveawayRulesPageProps {
  onNavigate: (path: string) => void;
  onStartParticipation: () => void;
}

export const GiveawayRulesPage: React.FC<GiveawayRulesPageProps> = ({ onNavigate, onStartParticipation }) => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs items={[{ name: 'Giveaway Rules', path: '/giveaway-rules' }]} onNavigate={onNavigate} />

      <article className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8 bg-white">
        
        {/* Header */}
        <header className="pb-6 border-b border-slate-100 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Official Rules & Guidelines</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
            ZAIFII Giveaway Rules & Terms
          </h1>

          <p className="text-sm text-slate-600 font-medium leading-relaxed">
            Transparent guidelines for Free Fire giveaway participation, eligibility requirements, entry verification, and impartial winner selection.
          </p>
        </header>

        {/* All rules list */}
        <div className="space-y-4">
          {SITE_CONFIG.giveawayRules.map((rule) => (
            <section key={rule.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h2 className="font-heading font-extrabold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <span>{rule.title}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium pl-4">
                {rule.content}
              </p>
            </section>
          ))}

          <section className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-800">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Standard Disclaimer</span>
            </div>
            <p className="leading-relaxed">
              {SITE_CONFIG.disclaimer} Free Fire and Garena are registered trademarks of their respective owners. Participation does not guarantee winning a prize.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('/')}
            className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to ZAIFII Home</span>
          </button>

          <div className="flex items-center gap-4 text-xs font-semibold text-blue-600">
            <button onClick={() => onNavigate('/terms')} className="hover:underline cursor-pointer">
              Terms & Conditions
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
