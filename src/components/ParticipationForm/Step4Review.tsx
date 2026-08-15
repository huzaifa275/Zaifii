import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Edit3, Send, ShieldAlert, User, Gamepad2, Gem } from 'lucide-react';
import { AdSlot } from '../AdSlot';
import { SITE_CONFIG } from '../../config/siteConfig';

interface Step4ReviewProps {
  uid: string;
  playerName: string;
  diamondAmount: number | string;
  onEdit: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export const Step4Review: React.FC<Step4ReviewProps> = ({
  uid,
  playerName,
  diamondAmount,
  onEdit,
  onSubmit,
  isSubmitting,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center space-y-2">
        <div className="inline-flex p-3 rounded-2xl bg-violet-50 text-violet-600 mb-1">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
          Review Your Entry
        </h2>
        <p className="text-sm text-slate-500 max-w-sm mx-auto">
          Make sure everything is correct before submitting your giveaway entry.
        </p>
      </div>

      {/* Summary Card */}
      <div className="max-w-md mx-auto bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-5 border border-slate-200/80 shadow-md space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Participation Details
          </span>
          <button
            type="button"
            onClick={onEdit}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Details</span>
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <User className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase">Free Fire UID</div>
              <div className="font-heading font-extrabold text-slate-900 text-base">{uid}</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
              <Gamepad2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase">In-Game Name</div>
              <div className="font-heading font-extrabold text-slate-900 text-base">{playerName}</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
            <div className="p-2 rounded-lg bg-cyan-50 text-cyan-600">
              <Gem className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase">Requested Diamonds</div>
              <div className="font-heading font-extrabold text-blue-600 text-lg">
                {diamondAmount} 💎
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 text-[11px] text-slate-500 bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span>
            This registers your eligible entry into the giveaway drawing pool. Winners are selected according to the official giveaway rules.
          </span>
        </div>
      </div>

      {/* Ad before submission */}
      <div className="max-w-md mx-auto">
        <AdSlot slotId={SITE_CONFIG.adSlots.BEFORE_SUBMIT} minHeight="min-h-[80px]" />
      </div>

      {/* Actions */}
      <div className="pt-2 max-w-md mx-auto flex items-center gap-3">
        <button
          type="button"
          onClick={onEdit}
          disabled={isSubmitting}
          className="px-5 py-4 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-2xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
        >
          <Edit3 className="w-4 h-4" />
          <span>Edit</span>
        </button>

        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="flex-1 py-4 px-6 text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 rounded-2xl shadow-xl shadow-emerald-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Submitting...</span>
            </div>
          ) : (
            <>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Submit Participation</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};
