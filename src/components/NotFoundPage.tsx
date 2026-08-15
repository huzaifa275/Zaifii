import React from 'react';
import { Sparkles, HelpCircle, ArrowLeft, Home, BookOpen, ShieldCheck } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-2xl space-y-6 bg-white">
        
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto shadow-inner">
          <HelpCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Error 404
          </span>

          <h1 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight pt-2">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist or may have moved to another URL.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('/')}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Back to ZAIFII Home</span>
          </button>

          <button
            onClick={() => onNavigate('/how-it-works')}
            className="w-full sm:w-auto px-5 py-3.5 text-sm font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>How It Works</span>
          </button>

          <button
            onClick={() => onNavigate('/giveaway-rules')}
            className="w-full sm:w-auto px-5 py-3.5 text-sm font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Giveaway Rules</span>
          </button>
        </div>

      </div>
    </main>
  );
};
