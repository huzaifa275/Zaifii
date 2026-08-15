import React from 'react';

interface AdSlotProps {
  slotId: string;
  className?: string;
  minHeight?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  className = '',
  minHeight = 'min-h-[90px]',
}) => {
  // ========================================
  // ZAIFII AD SLOT
  // NETWORK: ADSTERRA / MONETAG
  // INSERT APPROVED AD CODE HERE
  // Slot Identifier: ${slotId}
  // Example for Adsterra: <script type="text/javascript" src="//atScript.js"></script>
  // Example for Monetag: <script src="https://alwingulla.com/88/tag.min.js" data-zone="123456" async data-cfasync="false"></script>
  // ========================================

  return (
    <div
      data-ad-slot={slotId}
      className={`relative w-full overflow-hidden rounded-xl bg-slate-50/70 border border-dashed border-slate-200 flex flex-col items-center justify-center p-3 transition-all text-center ${minHeight} ${className}`}
    >
      {/* Dev comment placeholder representation */}
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
        <span>Ad Placement ({slotId})</span>
      </div>
      <p className="text-[11px] text-slate-400 mt-0.5">
        Adsterra / Monetag Code Reserved Container
      </p>

      {/* Reserved area to prevent CLS (Cumulative Layout Shift) */}
      <div id={`ad-container-${slotId}`} className="w-full flex justify-center">
        {/* Ad script render anchor */}
      </div>
    </div>
  );
};
