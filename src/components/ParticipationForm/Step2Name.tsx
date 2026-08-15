import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Gamepad2, ArrowRight, ArrowLeft } from 'lucide-react';

interface Step2NameProps {
  initialName: string;
  onNext: (name: string) => void;
  onBack: () => void;
  onError: (msg: string) => void;
}

export const Step2Name: React.FC<Step2NameProps> = ({
  initialName,
  onNext,
  onBack,
  onError,
}) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    setPlayerName(initialName);
    setInputError('');
    const timer = setTimeout(() => {
      const el = document.getElementById('ff-name-input');
      if (el) {
        el.focus();
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [initialName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = playerName.trim();

    if (!cleaned) {
      const msg = 'Please enter your Free Fire in-game name to continue.';
      setInputError(msg);
      onError(msg);
      return;
    }

    if (cleaned.length < 2) {
      const msg = 'In-game name must be at least 2 characters long.';
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
        <div className="inline-flex p-3 rounded-2xl bg-indigo-50 text-indigo-600 mb-1">
          <Gamepad2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
          What's Your Free Fire Name?
        </h2>
        <p className="text-sm text-slate-500 max-w-sm mx-auto">
          Enter your active in-game username or nickname as shown in Free Fire.
        </p>
      </div>

      <div className="space-y-2 max-w-md mx-auto">
        <label htmlFor="ff-name-input" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
          In-Game Name <span className="text-rose-500">*</span>
        </label>
        
        <input
          id="ff-name-input"
          type="text"
          value={playerName}
          onChange={(e) => {
            setPlayerName(e.target.value);
            if (inputError) setInputError('');
          }}
          placeholder="Enter your in-game name"
          className={`w-full px-4 py-3.5 sm:py-4 text-slate-900 bg-slate-50 border rounded-2xl text-base font-semibold transition-all focus-ring ${
            inputError ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:bg-white'
          }`}
          autoFocus
        />

        {inputError ? (
          <p className="text-xs font-semibold text-rose-600 flex items-center gap-1.5 pt-1">
            <span>•</span> {inputError}
          </p>
        ) : (
          <p className="text-xs text-slate-500 pt-1">
            Used to match your UID entry during winner verification.
          </p>
        )}
      </div>

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
