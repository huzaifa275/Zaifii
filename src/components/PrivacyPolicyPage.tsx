import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { ShieldCheck, Lock, FileText, Mail, ArrowLeft, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs items={[{ name: 'Privacy Policy', path: '/privacy-policy' }]} onNavigate={onNavigate} />

      <article className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8 bg-white">
        
        {/* Header */}
        <header className="pb-6 border-b border-slate-100 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Official Legal Document</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
            Privacy Policy — ZAIFII
          </h1>

          <p className="text-sm text-slate-500 font-medium">
            Effective Date: August 15, 2026 | Last Updated: August 2026
          </p>
        </header>

        {/* Content sections */}
        <div className="space-y-8 text-slate-700 leading-relaxed text-sm">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              1. Overview & Data Transparency
            </h2>
            <p>
              Welcome to ZAIFII. Your privacy is paramount to us. This Privacy Policy outlines how ZAIFII handles information collected from participants who enter our Free Fire diamond giveaway platform. We are committed to transparency, data safety, and user control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              2. Information We Collect
            </h2>
            <p>
              When you submit an eligible participation request for the Free Fire giveaway on ZAIFII, we collect only the necessary details required to register your entry ticket:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Free Fire Player UID:</strong> Your 8 to 12 digit numeric game account identifier.</li>
              <li><strong>In-Game Name:</strong> Your Free Fire nickname for verification in public winner announcements.</li>
              <li><strong>Package Selection:</strong> The diamond package (100 💎, 310 💎, 520 💎, 1060 💎, 2180 💎, or Custom) selected during participation.</li>
              <li><strong>Referral Source Header:</strong> Information indicating if your participation originated from an eligible TikTok link or partner channel to award valid additional entries.</li>
            </ul>
            <p className="text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-slate-600 font-medium">
              <strong>Notice:</strong> ZAIFII NEVER asks for your Garena account password, Facebook login credentials, VK account login, or payment card details.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              3. How We Use Your Information
            </h2>
            <p>
              The information you provide is strictly used for the following legitimate purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Processing and validating your Free Fire giveaway participation request.</li>
              <li>Verifying entry eligibility according to our official <button onClick={() => onNavigate('/giveaway-rules')} className="text-blue-600 font-semibold underline hover:text-blue-700">Giveaway Rules</button>.</li>
              <li>Delivering won diamond rewards directly to verified Free Fire player UIDs.</li>
              <li>Filtering automated spam, bot submissions, and abusive duplicate scripts.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              4. Adsterra, Monetag & Web Analytics
            </h2>
            <p>
              ZAIFII incorporates third-party advertising containers provided by verified networks like Adsterra and Monetag to maintain our giveaway platform 100% free for all users. These third-party services may use cookies, web beacons, or browser local storage to measure ad performance and prevent fraud.
            </p>
            <p>
              You may manage or disable non-essential cookies through your browser settings at any time without affecting your participation eligibility on ZAIFII.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              5. Third-Party Brand Disclaimer
            </h2>
            <p>
              {SITE_CONFIG.disclaimer} Free Fire and Garena are registered trademarks of their respective owners. Mention of Free Fire trademarks is solely for descriptive purposes to identify eligible giveaway rewards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              6. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or your data protection rights, please visit our <button onClick={() => onNavigate('/contact')} className="text-blue-600 font-semibold underline hover:text-blue-700">Contact Support</button> page.
            </p>
          </section>

        </div>

        {/* Footer Links */}
        <footer className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('/')}
            className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to ZAIFII Home</span>
          </button>

          <div className="flex items-center gap-4 text-xs font-semibold text-blue-600">
            <button onClick={() => onNavigate('/terms')} className="hover:underline cursor-pointer">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('/giveaway-rules')} className="hover:underline cursor-pointer">
              Giveaway Rules
            </button>
          </div>
        </footer>

      </article>
    </main>
  );
};
