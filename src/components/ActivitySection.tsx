import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Info, Activity } from 'lucide-react';
import { ActivityFeedItem } from '../types';

// Masking function: Shows only the first letter and masks all remaining characters with '*'
const maskPlayerName = (rawName: string): string => {
  if (!rawName) return 'P********';
  const firstLetter = rawName.trim().charAt(0).toUpperCase();
  // Strip existing asterisks if any to find approximate original name length
  const unmaskedBase = rawName.replace(/\*+/g, '');
  const totalLen = Math.max(8, unmaskedBase.length + 5);
  return `${firstLetter}${'*'.repeat(totalLen - 1)}`;
};

// Predefined activity samples with masked player names and UIDs
const FEED_SAMPLES = [
  { name: 'S*********', uid: '109****21', pkg: '520 💎' },
  { name: 'K*********', uid: '882****04', pkg: '1,060 💎' },
  { name: 'P********', uid: '341****19', pkg: '310 💎' },
  { name: 'V*******', uid: '901****82', pkg: '2,180 💎' },
  { name: 'Z********', uid: '561****90', pkg: '100 💎' },
  { name: 'A********', uid: '772****33', pkg: '520 💎' },
  { name: 'G********', uid: '409****12', pkg: '310 💎' },
];

export const ActivitySection: React.FC = () => {
  const [sampleIndex, setSampleIndex] = useState(0);

  const [recentLog, setRecentLog] = useState<ActivityFeedItem[]>([
    { id: 'act-1', playerName: 'S*********', uidMasked: '109****21', diamonds: '520 💎', timeAgo: 'Just now' },
    { id: 'act-2', playerName: 'K*********', uidMasked: '882****04', diamonds: '1,060 💎', timeAgo: '24s ago' },
    { id: 'act-3', playerName: 'P********', uidMasked: '341****19', diamonds: '310 💎', timeAgo: '41s ago' },
    { id: 'act-4', playerName: 'V*******', uidMasked: '901****82', diamonds: '2,180 💎', timeAgo: '1m ago' },
  ]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Random natural gap between 1 to 2 minutes (60s to 120s)
    const randomInterval = Math.floor(60000 + Math.random() * 60000);

    timerRef.current = setTimeout(() => {
      let nextIndex = Math.floor(Math.random() * FEED_SAMPLES.length);
      if (nextIndex === sampleIndex) {
        nextIndex = (sampleIndex + 1) % FEED_SAMPLES.length;
      }

      setSampleIndex(nextIndex);

      const chosen = FEED_SAMPLES[nextIndex];
      const newItem: ActivityFeedItem = {
        id: `act-${Date.now()}-${Math.random()}`,
        playerName: chosen.name,
        uidMasked: chosen.uid,
        diamonds: chosen.pkg,
        timeAgo: 'Just now',
      };

      setRecentLog((prev) => [newItem, ...prev.slice(0, 3)]);
    }, randomInterval);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [sampleIndex]);

  return (
    <section id="recent-activity" className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/90 relative overflow-hidden space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-100 text-amber-600 shadow-inner">
              <Flame className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 flex items-center gap-2">
                <span>Recent Activity</span>
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Overview of recent community participation requests and activity stream
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Activity className="w-3.5 h-3.5 text-blue-600 animate-pulse shrink-0" />
            <span>Live Activity Stream</span>
          </div>
        </div>

        {/* Live Submissions Feed */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
            <span>Recent Activity Stream</span>
            <span className="flex items-center gap-1.5 text-emerald-600 text-[11px] lowercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              live stream
            </span>
          </div>

          <div className="divide-y divide-slate-100 bg-slate-50/50 rounded-2xl border border-slate-200/80 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {recentLog.map((act) => (
                <motion.div
                  key={act.id}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-extrabold text-xs flex items-center justify-center shrink-0">
                      FF
                    </div>
                    <div>
                      <div className="font-heading font-bold text-slate-900 text-sm flex items-center gap-2">
                        <span>{maskPlayerName(act.playerName)}</span>
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-200/60 px-1.5 py-0.5 rounded">
                          UID: {act.uidMasked}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        Requested: <strong className="text-blue-600 font-extrabold">{act.diamonds}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full block">
                      Submitted
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">{act.timeAgo}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Explicit Visual Animation Notice */}
        <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-100">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <p className="text-[11px] text-slate-400 font-medium">
            Notice: Figures displayed represent a visual activity animation for layout demonstration purposes.
          </p>
        </div>

      </div>
    </section>
  );
};

