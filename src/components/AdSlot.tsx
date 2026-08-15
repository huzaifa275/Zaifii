import React, { useEffect, useRef, useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface AdSlotProps {
  slotId: string;
  className?: string;
  adCode?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  className = '',
  adCode,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAdContent, setHasAdContent] = useState<boolean>(false);

  // Get active ad code from prop, siteConfig, or window global object
  const activeCode =
    adCode ||
    SITE_CONFIG.adCodes?.[slotId] ||
    (typeof window !== 'undefined' && (window as any)?.ZAIFII_ADS?.[slotId]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!activeCode) {
      setHasAdContent(false);
      return;
    }

    if (container.getAttribute('data-loaded-code') === activeCode) {
      return;
    }

    // Clean previous scripts or markup
    container.innerHTML = '';

    try {
      // Create document fragment to execute embedded scripts (Adsterra, Monetag, etc.)
      const range = document.createRange();
      range.selectNode(container);
      const fragment = range.createContextualFragment(activeCode);

      const scripts = Array.from(fragment.querySelectorAll('script'));

      container.appendChild(fragment);

      // Re-instantiate script elements to guarantee browser execution in dynamic React mounting
      scripts.forEach((oldScript) => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach((attr) => {
          newScript.setAttribute(attr.name, attr.value);
        });
        newScript.textContent = oldScript.textContent;
        if (oldScript.parentNode) {
          oldScript.parentNode.replaceChild(newScript, oldScript);
        } else {
          container.appendChild(newScript);
        }
      });

      container.setAttribute('data-loaded-code', activeCode);
      setHasAdContent(true);
    } catch (err) {
      console.warn(`[AdSlot] Error loading ad snippet for ${slotId}:`, err);
    }
  }, [slotId, activeCode]);

  // When no active ad code is provided, do not render blank rectangles or reserved whitespace
  if (!activeCode && !hasAdContent) {
    return (
      <div
        ref={containerRef}
        id={`ad-container-${slotId}`}
        data-ad-slot={slotId}
        aria-hidden="true"
        className="hidden"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      id={`ad-container-${slotId}`}
      data-ad-slot={slotId}
      className={`w-full max-w-full flex justify-center items-center overflow-hidden transition-all ${className}`}
    />
  );
};

