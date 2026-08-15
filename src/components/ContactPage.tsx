import React, { useState } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { Mail, MessageSquare, Send, CheckCircle, HelpCircle, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onToast?: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Giveaway Query');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      onToast?.('Please fill out all required fields before sending.', 'error');
      return;
    }

    setSubmitted(true);
    onToast?.('Thank you! Your message has been sent to ZAIFII support.', 'success');
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs items={[{ name: 'Contact ZAIFII', path: '/contact' }]} onNavigate={onNavigate} />

      <article className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8 bg-white">
        
        {/* Header */}
        <header className="pb-6 border-b border-slate-100 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Mail className="w-4 h-4 text-blue-600" />
            <span>ZAIFII Support Hub</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
            Contact ZAIFII Support
          </h1>

          <p className="text-sm text-slate-600 font-medium">
            Have a question regarding your Free Fire giveaway participation or additional entry tracking? Reach out to us below.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Info Side Box */}
          <aside className="space-y-4 md:col-span-1">
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-3 text-xs text-slate-700">
              <h2 className="font-heading font-bold text-slate-900 text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                Quick Assistance
              </h2>
              <p className="leading-relaxed">
                Before sending a message, please check our <button onClick={() => onNavigate('/faq')} className="text-blue-600 font-bold underline">FAQ Section</button> for instant answers on UID verification and drawing schedules.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs text-slate-600">
              <span className="font-bold text-slate-800 uppercase tracking-wider block">
                Official Channels
              </span>
              <p>
                Winner lists and announcements are published on official ZAIFII community handles.
              </p>
            </div>
          </aside>

          {/* Form Side */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-slate-900 text-xl">
                  Message Delivered!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to ZAIFII support. Our team reviews all legitimate inquiries promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-4 py-2 text-xs font-bold text-emerald-700 bg-emerald-100 rounded-xl hover:bg-emerald-200 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name / Nickname <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 mb-1">
                    Subject Topic
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white"
                  >
                    <option value="Giveaway Query">Giveaway Query</option>
                    <option value="TikTok Additional Entries">TikTok Additional Entries</option>
                    <option value="UID Verification">UID Verification</option>
                    <option value="General Support">General Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message or inquiry here..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Support</span>
                </button>
              </form>
            )}
          </div>

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
            <button onClick={() => onNavigate('/faq')} className="hover:underline cursor-pointer">
              Read FAQ
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
