import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Trophy, Gem, ShieldCheck, Flame } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { AdSlot } from './AdSlot';

interface HeroProps {
  onStartParticipation: () => void;
  onLearnHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartParticipation,
  onLearnHowItWorks,
}) => {
  return (
    <section id="hero" className="relative pt-8 sm:pt-14 pb-12 overflow-hidden">
      {/* Light Gaming Background Glow Shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-300/30 via-cyan-200/20 to-violet-300/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-2xl pointer-events-none -z-10 animate-float-slow" />
      
      {/* Decorative Floating Gaming Badges */}
      <div className="hidden lg:block absolute top-12 left-10 animate-float-slow pointer-events-none">
        <div className="glass-card p-3 rounded-2xl shadow-lg flex items-center gap-2.5 border border-blue-100">
          <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
            <Gem className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-800">520 Diamonds</div>
            <div className="text-[10px] font-semibold text-emerald-600">Most Popular</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute top-28 right-12 animate-float-slow style-delay-2 pointer-events-none">
        <div className="glass-card p-3 rounded-2xl shadow-lg flex items-center gap-2.5 border border-purple-100">
          <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-800">Verified Giveaway</div>
            <div className="text-[10px] text-slate-500">100% Free Entry</div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 shadow-xs text-blue-700 text-xs sm:text-sm font-bold mb-6"
        >
          <Flame className="w-4 h-4 text-amber-500 animate-bounce" />
          <span>ZAIFII • Free Fire Giveaway Event</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          <span className="text-blue-900 font-extrabold">2026 Edition</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-slate-900 leading-[1.15]"
        >
          Your Chance to Win{' '}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent underline decoration-cyan-400/40 decoration-wavy decoration-2">
            Free Fire Diamonds
          </span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          {SITE_CONFIG.heroSubtext}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto"
        >
          <button
            onClick={onStartParticipation}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/45 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-cyan-200" />
            <span>Participate Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={onLearnHowItWorks}
            className="w-full sm:w-auto px-6 py-4 text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>How It Works</span>
          </button>
        </motion.div>

        {/* Trust features row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-2 max-w-xl mx-auto text-xs font-semibold text-slate-500"
        >
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>No Password Needed</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Gem className="w-4 h-4 text-cyan-600" />
            <span>Instant Submission</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Trophy className="w-4 h-4 text-violet-600" />
            <span>Extra TikTok Entries</span>
          </div>
        </motion.div>

        {/* Hero Ad Placement */}
        <AdSlot slotId={SITE_CONFIG.adSlots.HERO} />

      </div>
    </section>
  );
};
