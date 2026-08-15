import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Copy, RefreshCw, Sparkles, ExternalLink, ShieldCheck, X } from 'lucide-react';
import { ParticipationEntry } from '../types';
import { AdSlot } from './AdSlot';
import { SITE_CONFIG } from '../config/siteConfig';

interface SuccessModalProps {
  entry: ParticipationEntry | null;
  onClose: () => void;
  onNewEntry: () => void;
  onOpenLearnMore: () => void;
  onToast: (msg: string, type?: 'success' | 'info') => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  entry,
  onClose,
  onNewEntry,
  onOpenLearnMore,
  onToast,
}) => {
  if (!entry) return null;

  const handleCopyId = () => {
    if (entry.requestId) {
      navigator.clipboard.writeText(entry.requestId);
      onToast(`Request ID ${entry.requestId} copied to clipboard!`, 'success');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden"
        >
          {/* Confetti Background Gradient Glow */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500" />
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center space-y-3 pt-2">
            <div className="inline-flex p-4 rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
              🎉 Participation Submitted
            </h2>

            <p className="text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 rounded-full py-1 px-4 inline-block">
              Your request has been successfully submitted.
            </p>
          </div>

          {/* Entry Details Card */}
          <div className="mt-6 bg-slate-50/90 rounded-2xl p-5 border border-slate-200/80 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase">Request ID</span>
              <button
                onClick={handleCopyId}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <span>{entry.requestId}</span>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-left pt-1">
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase block">Free Fire UID</span>
                <span className="font-heading font-extrabold text-slate-900 text-sm">{entry.uid}</span>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase block">In-Game Name</span>
                <span className="font-heading font-extrabold text-slate-900 text-sm">{entry.playerName}</span>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase block">Selected Diamonds</span>
                <span className="font-heading font-extrabold text-blue-600 text-sm">{entry.diamondAmount} 💎</span>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase block">Status</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  {entry.status}
                </span>
              </div>
            </div>
          </div>

          {/* Additional Entry Guidance Notice */}
          <div className="mt-4 p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-xs text-blue-900 space-y-2">
            <div className="flex items-center gap-2 font-bold text-blue-950">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Ready for another eligible entry?</span>
            </div>
            <p className="leading-relaxed text-slate-600">
              You can participate again by manually completing the process again. Each participation is treated as a new, independently completed entry.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenLearnMore();
              }}
              className="text-xs font-bold text-blue-700 underline hover:text-blue-900 inline-flex items-center gap-1 cursor-pointer"
            >
              Learn How Additional TikTok Entries Work →
            </button>
          </div>

          {/* Ad inside success modal */}
          <div className="mt-5">
            <AdSlot slotId={SITE_CONFIG.adSlots.SUCCESS} minHeight="min-h-[75px]" />
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onNewEntry();
              }}
              className="flex-1 py-3.5 px-5 font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>Participate Again →</span>
            </button>

            <button
              onClick={onClose}
              className="py-3.5 px-5 font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-2xl transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
