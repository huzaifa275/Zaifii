import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Video, Flame, Repeat } from 'lucide-react';

interface AdditionalEntrySectionProps {
  onOpenLearnMore: () => void;
  onStartParticipation: () => void;
}

export const AdditionalEntrySection: React.FC<AdditionalEntrySectionProps> = ({
  onOpenLearnMore,
  onStartParticipation,
}) => {
  return (
    <section className="py-10 sm:py-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white relative overflow-hidden my-6 rounded-3xl shadow-2xl mx-4 sm:mx-6 lg:mx-8">
      
      {/* Decorative Glow Elements */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200 text-xs font-bold uppercase tracking-wider">
          <Repeat className="w-3.5 h-3.5 text-cyan-300 animate-spin" />
          <span>TikTok Multi-Entry Program</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight">
          Want Another Entry?
        </h2>

        <p className="text-base sm:text-lg text-blue-100 font-medium max-w-2xl mx-auto leading-relaxed">
          You can participate again by completing the process again. After completing your participation, return through the eligible ZAIFII TikTok source and complete the participation process again. Each eligible participation counts as an additional entry.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenLearnMore}
            className="w-full sm:w-auto px-8 py-4 font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span>Learn How</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-blue-600" />
          </button>

          <button
            onClick={onStartParticipation}
            className="w-full sm:w-auto px-6 py-4 font-bold text-white bg-white/15 hover:bg-white/25 border border-white/25 rounded-2xl backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Participate Again</span>
          </button>
        </div>

      </div>
    </section>
  );
};
