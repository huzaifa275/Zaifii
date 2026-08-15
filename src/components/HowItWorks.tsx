import React from 'react';
import { UserCheck, Gem, Send, Repeat, Sparkles, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onStartParticipation: () => void;
  onOpenLearnMore: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  onStartParticipation,
  onOpenLearnMore,
}) => {
  const steps = [
    {
      num: '01',
      title: 'Enter Free Fire UID & Name',
      desc: 'Provide your valid Free Fire 8-12 digit player UID and in-game name accurately.',
      icon: <UserCheck className="w-6 h-6 text-blue-600" />,
      badge: 'Step 1',
    },
    {
      num: '02',
      title: 'Choose Diamond Amount',
      desc: 'Select your preferred diamond reward package (100 💎, 310 💎, 520 💎, 1060 💎, 2180 💎, or Custom).',
      icon: <Gem className="w-6 h-6 text-cyan-600" />,
      badge: 'Step 2',
    },
    {
      num: '03',
      title: 'Review & Submit Entry',
      desc: 'Verify your details on the summary card and submit to obtain your unique Request ID.',
      icon: <Send className="w-6 h-6 text-indigo-600" />,
      badge: 'Step 3',
    },
    {
      num: '04',
      title: 'Multiply Chances via TikTok',
      desc: 'Return to ZAIFII through eligible TikTok links to submit again. Every completed submission adds an extra entry.',
      icon: <Repeat className="w-6 h-6 text-violet-600" />,
      badge: 'Bonus Entries',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Simple Participation Guide</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
          How ZAIFII Giveaway Works
        </h2>

        <p className="text-base text-slate-600 font-medium max-w-xl mx-auto">
          Participating in the ZAIFII Free Fire giveaway is quick, 100% free, and transparent.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((st) => (
          <div
            key={st.num}
            className="glass-card rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4 relative group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                {st.badge}
              </span>
              <span className="font-heading font-black text-2xl text-slate-300 group-hover:text-blue-500 transition-colors">
                {st.num}
              </span>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-slate-100/80 flex items-center justify-center my-2 group-hover:scale-110 transition-transform">
              {st.icon}
            </div>

            <div className="space-y-1.5 flex-1">
              <h3 className="font-heading font-extrabold text-slate-900 text-lg">
                {st.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {st.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={onStartParticipation}
          className="px-6 py-3.5 font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>Start Participation Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={onOpenLearnMore}
          className="px-6 py-3.5 font-bold text-slate-700 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <span>Learn About TikTok Extra Entries</span>
        </button>
      </div>

    </section>
  );
};
