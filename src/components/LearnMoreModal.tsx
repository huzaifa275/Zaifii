import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShieldAlert, CheckCircle2, X, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartParticipation: () => void;
}

export const LearnMoreModal: React.FC<LearnMoreModalProps> = ({
  isOpen,
  onClose,
  onStartParticipation,
}) => {
  if (!isOpen) return null;

  const steps = [
    'Complete the ZAIFII participation process with your Free Fire UID and details.',
    'Submit your eligible entry to receive your unique Request ID.',
    'Return to ZAIFII through the official eligible TikTok source or bio link.',
    'Complete the participation process again for another eligible entry.',
    'Each eligible completed participation counts as an additional entry in the drawing.',
    'More eligible entries provide more chances to win according to the giveaway rules.',
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden"
        >
          {/* Top Banner Gradient */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ZAIFII Entry System</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
              How Additional Entries Work
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Understand how repeat participation through eligible sources grants additional entry tickets into the Free Fire diamond giveaway pool.
            </p>

            {/* 6-step checklist */}
            <div className="space-y-3 pt-2">
              {steps.map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100/80"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-normal">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Important Notice Box */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-amber-800">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Important</span>
              </div>
              <p className="text-xs leading-relaxed text-amber-900">
                Only valid and eligible submissions count. Duplicate, incomplete, automated, or otherwise invalid submissions may be excluded according to the giveaway rules.
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onStartParticipation();
                }}
                className="flex-1 py-3.5 px-6 font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Participate Now</span>
              </button>

              <button
                onClick={onClose}
                className="py-3.5 px-6 font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-2xl transition-colors cursor-pointer"
              >
                Got It
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
