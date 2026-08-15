import React from 'react';
import { Gem, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { AdSlot } from './AdSlot';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onNavigatePath: (path: string) => void;
  onOpenLearnMore: () => void;
  onOpenRules: () => void;
  onStartParticipation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onNavigatePath,
  onOpenLearnMore,
  onOpenRules,
  onStartParticipation,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Ad Footer Placement */}
        <div>
          <AdSlot slotId={SITE_CONFIG.adSlots.FOOTER} minHeight="min-h-[80px]" className="bg-slate-800/80 border-slate-700 text-slate-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div 
              onClick={() => onNavigatePath('/')}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 p-0.5 shadow-md shadow-blue-500/20">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <Gem className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-heading font-black text-2xl tracking-tight text-white">
                ZAIFII
              </span>
            </div>
            
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              {SITE_CONFIG.slogan}
            </p>

            <div className="pt-1 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Independent Giveaway Platform</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-white text-sm uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <button onClick={() => onNavigatePath('/')} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={onStartParticipation} className="hover:text-blue-400 transition-colors">
                  Participate Now
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePath('/how-it-works')} className="hover:text-blue-400 transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePath('/giveaway-rules')} className="hover:text-blue-400 transition-colors">
                  Giveaway Rules
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePath('/faq')} className="hover:text-blue-400 transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePath('/learn-more')} className="hover:text-blue-400 transition-colors">
                  Learn How Additional Entries Work
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Policy Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-white text-sm uppercase tracking-wider">
              Legal & Support
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>
                <button onClick={() => onNavigatePath('/privacy-policy')} className="hover:text-white transition-colors text-left">
                  Read Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePath('/terms')} className="hover:text-white transition-colors text-left">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePath('/contact')} className="hover:text-white transition-colors text-left">
                  Contact ZAIFII Support
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePath('/learn-more')} className="hover:text-white transition-colors text-left">
                  Official TikTok Entry Instructions
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links Placeholders */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-white text-sm uppercase tracking-wider">
              Official Channels
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Connect with ZAIFII across official community hubs for winner announcements and upcoming events.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-blue-400">
              <span title="Placeholder: YOUTUBE_URL_HERE" className="px-2.5 py-1 bg-slate-800 rounded-lg border border-slate-700 cursor-pointer">TikTok</span>
              <span title="Placeholder: YOUTUBE_URL_HERE" className="px-2.5 py-1 bg-slate-800 rounded-lg border border-slate-700 cursor-pointer">YouTube</span>
              <span title="Placeholder: INSTAGRAM_URL_HERE" className="px-2.5 py-1 bg-slate-800 rounded-lg border border-slate-700 cursor-pointer">Instagram</span>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="space-y-3 text-center sm:text-left text-[11px] text-slate-500 leading-relaxed">
          <p>
            {SITE_CONFIG.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-600">
            <span>© 2026 ZAIFII. All rights reserved.</span>
            <span>Mobile-First Gaming Participation Interface</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
