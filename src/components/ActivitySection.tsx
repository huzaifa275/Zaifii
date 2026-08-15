import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Users, Gem, Trophy, Info, Sparkles } from 'lucide-react';
import { ActivityFeedItem } from '../types';

export const ActivitySection: React.FC = () => {
  // Sample activity counter targets
  const [totalEntries, setTotalEntries] = useState(2582);
  const [uniquePlayers, setUniquePlayers] = useState(1947);
  const [diamondRequests, setDiamondRequests] = useState(3126);

  // Sample live submissions ticker
  const [recentLog, setRecentLog] = useState<ActivityFeedItem[]>([
    { id: 'act-1', playerName: 'Shadow***99', uidMasked: '109****21', diamonds: '520 💎', timeAgo: '8s ago' },
    { id: 'act-2', playerName: 'King_***FF', uidMasked: '882****04', diamonds: '1,060 💎', timeAgo: '24s ago' },
    { id: 'act-3', playerName: 'Pro_***07', uidMasked: '341****19', diamonds: '310 💎', timeAgo: '41s ago' },
    { id: 'act-4', playerName: 'Viper***X', uidMasked: '901****82', diamonds: '2,180 💎', timeAgo: '1m ago' },
    { id: 'act-5', playerName: 'Zaif***Pro', uidMasked: '561****90', diamonds: '520 💎', timeAgo: '2m ago' },
  ]);

  // Subtle ticker increment every 12s to demonstrate live interface without fake claims
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalEntries((prev) => prev + 1);
      setDiamondRequests((prev) => prev + (Math.random() > 0.5 ? 520 : 310));
      
      const newNames = ['Legend***01', 'Ghost***88', 'Alpha***X', 'Fire***Player', 'Ninja***22'];
      const randomName = newNames[Math.floor(Math.random() * newNames.length)];
      const randomUid = `${Math.floor(100 + Math.random() * 899)}****${Math.floor(10 + Math.random() * 89)}`;
      const randomDiam = Math.random() > 0.4 ? '520 💎' : '1,060 💎';

      setRecentLog((prev) => [
        {
          id: `act-${Date.now()}`,
          playerName: randomName,
          uidMasked: randomUid,
          diamonds: randomDiam,
          timeAgo: 'Just now',
        },
        ...prev.slice(0, 4),
      ]);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

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
                Overview of current community participation statistics and recent entries
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-bold">
            <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>Sample Activity Metrics</span>
          </div>
        </div>

        {/* Counter Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 rounded-2xl p-5 border border-blue-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20 shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                {totalEntries.toLocaleString()}
              </div>
              <div className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                Total Submissions
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50/80 to-violet-50/80 rounded-2xl p-5 border border-indigo-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md shadow-indigo-500/20 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                {uniquePlayers.toLocaleString()}
              </div>
              <div className="text-xs font-bold text-indigo-800 uppercase tracking-wider">
                Unique Players
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50/80 to-teal-50/80 rounded-2xl p-5 border border-cyan-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-bold shadow-md shadow-cyan-500/20 shrink-0">
              <Gem className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                {diamondRequests.toLocaleString()} 💎
              </div>
              <div className="text-xs font-bold text-cyan-800 uppercase tracking-wider">
                Diamonds Allocated
              </div>
            </div>
          </div>
        </div>

        {/* Live Submissions Feed */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
            <span>Recent Participation Requests</span>
            <span className="flex items-center gap-1.5 text-emerald-600 text-[11px] lowercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              live stream
            </span>
          </div>

          <div className="divide-y divide-slate-100 bg-slate-50/50 rounded-2xl border border-slate-200/80 overflow-hidden">
            <AnimatePresence>
              {recentLog.map((act) => (
                <motion.div
                  key={act.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-extrabold text-xs flex items-center justify-center shrink-0">
                      FF
                    </div>
                    <div>
                      <div className="font-heading font-bold text-slate-900 text-sm flex items-center gap-2">
                        <span>{act.playerName}</span>
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

        {/* Disclaimer Note */}
        <p className="text-[11px] text-slate-400 italic text-center">
          Notice: Figures displayed represent sample activity metrics for layout demonstration purposes.
        </p>

      </div>
    </section>
  );
};
