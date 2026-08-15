import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gem, ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

interface Step3DiamondsProps {
  initialDiamonds: number | string;
  onNext: (diamonds: number | string) => void;
  onBack: () => void;
  onError: (msg: string) => void;
}

export const Step3Diamonds: React.FC<Step3DiamondsProps> = ({
  initialDiamonds,
  onNext,
  onBack,
  onError,
}) => {
  const [selectedId, setSelectedId] = useState<string>(() => {
    if (!initialDiamonds) return 'd520';
    if (typeof initialDiamonds === 'number') {
      const match = SITE_CONFIG.diamondOptions.find((d) => d.amount === initialDiamonds);
      return match ? match.id : 'dCustom';
    }
    return 'dCustom';
  });

  const [customVal, setCustomVal] = useState<string>(() => {
    if (typeof initialDiamonds === 'string' && initialDiamonds !== 'Custom') return initialDiamonds;
    if (typeof initialDiamonds === 'number' && !SITE_CONFIG.diamondOptions.some((d) => d.amount === initialDiamonds)) {
      return String(initialDiamonds);
    }
    return '';
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedId === 'dCustom') {
      const num = parseInt(customVal.trim(), 10);
      if (!customVal.trim() || isNaN(num) || num <= 0) {
        onError('Please enter a valid custom diamond amount.');
        return;
      }
      onNext(num);
    } else {
      const pkg = SITE_CONFIG.diamondOptions.find((d) => d.id === selectedId);
      if (pkg && pkg.amount !== 'Custom') {
        onNext(pkg.amount);
      } else {
        onError('Please select a valid diamond package.');
      }
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="text-center space-y-2">
        <div className="inline-flex p-3 rounded-2xl bg-cyan-50 text-cyan-600 mb-1">
          <Gem className="w-8 h-8 animate-pulse" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
          How Many Diamonds Would You Like?
        </h2>
        <p className="text-sm text-slate-500 max-w-sm mx-auto">
          Choose your target diamond reward tier for this giveaway participation.
        </p>
      </div>

      {/* Selectable Diamond Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
        {SITE_CONFIG.diamondOptions.map((item) => {
          const isSelected = selectedId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`relative cursor-pointer rounded-2xl p-4 border transition-all text-center flex flex-col items-center justify-between select-none ${
                isSelected
                  ? 'bg-gradient-to-b from-blue-50/90 to-cyan-50/90 border-blue-500 ring-2 ring-blue-500/30 shadow-lg shadow-blue-500/10 scale-[1.02]'
                  : 'bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:bg-white'
              }`}
            >
              {item.tag && (
                <span className="absolute -top-2.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-xs tracking-wider">
                  {item.tag}
                </span>
              )}

              {isSelected && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              )}

              <div className="w-10 h-10 rounded-xl bg-blue-100/80 flex items-center justify-center text-blue-600 my-1">
                <Gem className="w-5 h-5" />
              </div>

              <div className="font-heading font-black text-slate-900 text-lg sm:text-xl my-1">
                {item.label}
              </div>

              <span className="text-[11px] font-semibold text-slate-500">
                {item.bonusText}
              </span>
            </div>
          );
        })}
      </div>

      {/* Custom Amount Field */}
      {selectedId === 'dCustom' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="max-w-md mx-auto pt-2 space-y-2"
        >
          <label htmlFor="custom-diamond-input" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
            Specify Custom Diamond Amount <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              id="custom-diamond-input"
              type="number"
              min="10"
              max="50000"
              value={customVal}
              onChange={(e) => setCustomVal(e.target.value)}
              placeholder="e.g. 500"
              className="w-full px-4 py-3 text-slate-900 bg-slate-50 border border-slate-200 rounded-2xl text-base font-semibold focus-ring"
              autoFocus
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
              💎 Diamonds
            </span>
          </div>
        </motion.div>
      )}

      {/* Actions */}
      <div className="pt-2 max-w-md mx-auto flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-4 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-2xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="submit"
          className="flex-1 py-4 px-6 text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-indigo-700 rounded-2xl shadow-lg shadow-blue-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Continue</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.form>
  );
};
