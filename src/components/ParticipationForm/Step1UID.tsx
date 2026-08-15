import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { UserCheck, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface Step1UIDProps {
  initialUid: string;
  onNext: (uid: string) => void;
  onError: (msg: string) => void;
}

export const Step1UID: React.FC<Step1UIDProps> = ({
  initialUid,
  onNext,
  onError,
}) => {
  const [uid, setUid] = useState(initialUid);
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    setUid(initialUid);
    setInputError('');
    const timer = setTimeout(() => {
      const el = document.getElementById('ff-uid-input');
      if (el) {
        el.focus();
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [initialUid]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = uid.trim();

    if (!cleaned) {
      const msg = 'Please enter your Free Fire UID to continue.';
      setInputError(msg);
      onError(msg);
      return;
    }

    if (cleaned.length < 6 || cleaned.length > 12 || !/^[0-9a-zA-Z]+$/.test(cleaned)) {
      const msg = 'Please enter a valid Free Fire UID (typically 8–12 numbers).';
      setInputError(msg);
      onError(msg);
      return;
    }

    setInputError('');
    onNext(cleaned);
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
        <div className="inline-flex p-3 rounded-2xl bg-blue-50 text-blue-600 mb-1">
          <UserCheck className="w-8 h-8" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
          Enter Your Free Fire UID
        </h2>
        <p className="text-sm text-slate-500 max-w-sm mx-auto">
          Your UID is required so giveaway rewards can be allocated to the right account if selected.
        </p>
      </div>

      <div className="space-y-2 max-w-md mx-auto">
        <label htmlFor="ff-uid-input" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
          Free Fire Player UID <span className="text-rose-500">*</span>
        </label>
        
        <div className="relative">
          <input
            id="ff-uid-input"
            type="text"
            inputMode="numeric"
            value={uid}
            onChange={(e) => {
              setUid(e.target.value);
              if (inputError) setInputError('');
            }}
            placeholder="e.g. 1234567890"
            className={`w-full px-4 py-3.5 sm:py-4 text-slate-900 bg-slate-50 border rounded-2xl text-base font-semibold transition-all focus-ring ${
              inputError ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:bg-white'
            }`}
            autoFocus
          />
        </div>

        {inputError ? (
          <p className="text-xs font-semibold text-rose-600 flex items-center gap-1.5 pt-1">
            <span>•</span> {inputError}
          </p>
        ) : (
          <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
            <HelpCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>Make sure your UID is correct before continuing.</span>
          </p>
        )}
      </div>

      <div className="bg-blue-50/60 rounded-xl p-3 max-w-md mx-auto text-xs text-slate-600 flex items-center gap-2 border border-blue-100">
        <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
        <span>Your account credentials or password will <strong>never</strong> be asked.</span>
      </div>

      <div className="pt-2 max-w-md mx-auto">
        <button
          type="submit"
          className="w-full py-4 px-6 text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-indigo-700 rounded-2xl shadow-lg shadow-blue-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Continue</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.form>
  );
};
