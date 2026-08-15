import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Gem, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { AdSlot } from './AdSlot';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenLearnMore: () => void;
  onOpenRules: () => void;
  onStartParticipation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onOpenLearnMore,
  onOpenRules,
  onStartParticipation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // AD SLOT — HEADER
  // INSERT ADSTERRA CODE HERE
  // INSERT MONETAG CODE HERE

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      {/* Top Banner Notice for Trust */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-1.5 shadow-inner">
        <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
        <span>Official ZAIFII Giveaway Portal • 100% Free Entry • Mobile Optimized</span>
        <span className="hidden md:inline-block bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ml-2">Verified</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* ZAIFII Logo / Wordmark */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-600 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Gem className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                ZAIFII
              </span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest -mt-1 hidden sm:block">
                Free Fire Giveaway
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => handleNavClick('hero')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={onOpenRules}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Giveaway Rules
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={onOpenLearnMore}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Learn More
            </button>
          </nav>

          {/* Right Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onStartParticipation}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-xl shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
            >
              <span>Participate</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onStartParticipation}
              className="px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-sm shadow-blue-500/20 active:scale-95 transition-all"
            >
              Participate
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-100 bg-white shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              <button
                onClick={() => handleNavClick('hero')}
                className="w-full text-left px-4 py-3 text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>Home</span>
              </button>
              <button
                onClick={() => handleNavClick('how-it-works')}
                className="w-full text-left px-4 py-3 text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>How It Works</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRules();
                }}
                className="w-full text-left px-4 py-3 text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>Giveaway Rules</span>
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className="w-full text-left px-4 py-3 text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>FAQ</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLearnMore();
                }}
                className="w-full text-left px-4 py-3 text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>Learn More (Extra Entries)</span>
              </button>

              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onStartParticipation();
                  }}
                  className="w-full py-3 text-center text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-xl shadow-md"
                >
                  Participate Now →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Embedded Header Ad Placement */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        <AdSlot slotId={SITE_CONFIG.adSlots.HEADER} minHeight="min-h-[50px]" />
      </div>
    </header>
  );
};
