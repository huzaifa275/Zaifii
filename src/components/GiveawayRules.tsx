import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Calendar, Users, Award, AlertTriangle, Mail, Sparkles, X, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface GiveawayRulesProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
  onOpenRulesModal: () => void;
}

export const GiveawayRules: React.FC<GiveawayRulesProps> = ({
  isOpenModal,
  onCloseModal,
  onOpenRulesModal,
}) => {
  return (
    <>
      {/* On-Page Rules Section Preview */}
      <section id="giveaway-rules" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-blue-100 text-blue-600 shadow-inner">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
                  Official Giveaway Rules
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Transparent guidelines for participation, eligibility, and winner selection
                </p>
              </div>
            </div>

            <button
              onClick={onOpenRulesModal}
              className="px-4 py-2 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
            >
              <span>Read Full Giveaway Rules</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Key Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Giveaway Schedule</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Cycle active through current event window. Submissions received during this period are registered for drawing.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                <Users className="w-4 h-4 text-indigo-600" />
                <span>Eligibility</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Open to all registered Free Fire players providing valid 8–12 digit player UID and matching in-game name.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                <Award className="w-4 h-4 text-cyan-600" />
                <span>Winner Selection</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Random, verified drawing from all eligible entry tickets. Winners posted on official announcements.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onOpenRulesModal}
              className="text-sm font-bold text-blue-600 hover:text-blue-700 underline inline-flex items-center gap-1 cursor-pointer"
            >
              Read Full Giveaway Rules & Legal Disclaimers →
            </button>
          </div>

        </div>
      </section>

      {/* Full Rules Modal */}
      <AnimatePresence>
        {isOpenModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[85vh] flex flex-col"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
                <div className="flex items-center gap-2.5">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-black font-heading text-slate-900">
                    Full Giveaway Rules
                  </h2>
                </div>
                <button
                  onClick={onCloseModal}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto py-4 space-y-4 pr-1 text-sm text-slate-700">
                {SITE_CONFIG.giveawayRules.map((rule) => (
                  <div key={rule.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <h3 className="font-heading font-extrabold text-slate-900 text-base flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      <span>{rule.title}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pl-4">
                      {rule.content}
                    </p>
                  </div>
                ))}

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1">
                  <span className="font-bold uppercase tracking-wider block text-amber-800">
                    Standard Disclaimer
                  </span>
                  <p className="leading-relaxed">
                    ZAIFII is an independent giveaway promotion platform and is not sponsored, endorsed, or affiliated with Garena, Free Fire, or their parent companies. Participation does not guarantee a prize.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 shrink-0 flex justify-end">
                <button
                  onClick={onCloseModal}
                  className="px-6 py-2.5 font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer text-sm"
                >
                  Close Rules
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
