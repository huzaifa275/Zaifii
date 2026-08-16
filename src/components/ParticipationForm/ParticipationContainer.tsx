import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { ProgressIndicator } from './ProgressIndicator';
import { Step1UID } from './Step1UID';
import { Step2Name } from './Step2Name';
import { Step3Diamonds } from './Step3Diamonds';
import { Step4Review } from './Step4Review';
import { ParticipationEntry } from '../../types';
import { AdSlot } from '../AdSlot';
import { SITE_CONFIG } from '../../config/siteConfig';

interface ParticipationContainerProps {
  onSubmitted: (entry: ParticipationEntry) => void;
  onError: (msg: string) => void;
  resetKey?: number;
}

const SESSION_STORAGE_KEY = 'zaifii_active_participation_form_state';

interface PersistentFormState {
  uid: string;
  playerName: string;
  diamondAmount: number | string;
  step: number;
}

const getInitialFormState = (): PersistentFormState => {
  try {
    const raw = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return {
          uid: typeof parsed.uid === 'string' ? parsed.uid : '',
          playerName: typeof parsed.playerName === 'string' ? parsed.playerName : '',
          diamondAmount: parsed.diamondAmount ?? 520,
          step: typeof parsed.step === 'number' && parsed.step >= 1 && parsed.step <= 4 ? parsed.step : 1,
        };
      }
    }
  } catch {
    // Ignore error if storage is unavailable
  }
  return { uid: '', playerName: '', diamondAmount: 520, step: 1 };
};

export const ParticipationContainer: React.FC<ParticipationContainerProps> = ({
  onSubmitted,
  onError,
  resetKey = 0,
}) => {
  const [formState, setFormState] = useState<PersistentFormState>(getInitialFormState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Sync state changes to sessionStorage immediately
  const updateFormState = (updates: Partial<PersistentFormState>) => {
    setFormState((prev) => {
      const next = { ...prev, ...updates };
      try {
        sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ignore storage write error
      }
      return next;
    });
  };

  // Reset all state back to Step 1 empty whenever resetKey updates (intentional reset)
  useEffect(() => {
    if (resetKey > 0) {
      const freshState: PersistentFormState = {
        uid: '',
        playerName: '',
        diamondAmount: 520,
        step: 1,
      };
      setFormState(freshState);
      setIsSubmitting(false);
      try {
        sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(freshState));
      } catch {
        // Ignore error
      }
    }
  }, [resetKey]);

  const handleNextUid = () => {
    updateFormState({ step: 2 });
  };

  const handleNextName = () => {
    updateFormState({ step: 3 });
  };

  const handleNextDiamonds = () => {
    updateFormState({ step: 4 });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Generate Request ID
    const randomHex = Math.floor(100000 + Math.random() * 900000);
    const newEntry: ParticipationEntry = {
      requestId: `ZF-${randomHex}`,
      uid: formState.uid,
      playerName: formState.playerName,
      diamondAmount: formState.diamondAmount,
      timestamp: new Date().toISOString(),
      status: 'Eligible Entry Submitted',
      source: 'ZAIFII Direct Portal',
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitted(newEntry);
    }, 800);
  };

  return (
    <section id="participation-form" className="py-8 sm:py-12 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Main Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-500/10 border border-slate-200/90 relative overflow-hidden">
          
          {/* Subtle Top Glow Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600"></div>

          {/* Progress Bar Header */}
          <ProgressIndicator
            currentStep={formState.step}
            onStepClick={(targetStep) => {
              if (targetStep <= formState.step || targetStep === 1 || targetStep === 2 || targetStep === 3) {
                updateFormState({ step: targetStep });
              }
            }}
          />

          {/* Form Step Switcher */}
          <div className="mt-4">
            <AnimatePresence mode="wait">
              {formState.step === 1 && (
                <Step1UID
                  key="step1"
                  uid={formState.uid}
                  onChangeUid={(newUid) => updateFormState({ uid: newUid })}
                  onNext={handleNextUid}
                  onError={onError}
                />
              )}

              {formState.step === 2 && (
                <Step2Name
                  key="step2"
                  playerName={formState.playerName}
                  onChangeName={(newName) => updateFormState({ playerName: newName })}
                  onNext={handleNextName}
                  onBack={() => updateFormState({ step: 1 })}
                  onError={onError}
                />
              )}

              {formState.step === 3 && (
                <Step3Diamonds
                  key="step3"
                  diamondAmount={formState.diamondAmount}
                  onChangeDiamonds={(newAmount) => updateFormState({ diamondAmount: newAmount })}
                  onNext={handleNextDiamonds}
                  onBack={() => updateFormState({ step: 2 })}
                  onError={onError}
                />
              )}

              {formState.step === 4 && (
                <Step4Review
                  key="step4"
                  uid={formState.uid}
                  playerName={formState.playerName}
                  diamondAmount={formState.diamondAmount}
                  onEdit={() => updateFormState({ step: 1 })}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Embedded Ad Slot inside form bottom */}
          <AdSlot slotId={SITE_CONFIG.adSlots.FORM_BETWEEN} />

        </div>

      </div>
    </section>
  );
};

