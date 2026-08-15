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

export const ParticipationContainer: React.FC<ParticipationContainerProps> = ({
  onSubmitted,
  onError,
  resetKey = 0,
}) => {
  const [step, setStep] = useState<number>(1);
  const [uid, setUid] = useState<string>('');
  const [playerName, setPlayerName] = useState<string>('');
  const [diamondAmount, setDiamondAmount] = useState<number | string>(520);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Reset all state back to Step 1 empty whenever resetKey updates
  useEffect(() => {
    setStep(1);
    setUid('');
    setPlayerName('');
    setDiamondAmount(520);
    setIsSubmitting(false);
  }, [resetKey]);

  const handleNextUid = (enteredUid: string) => {
    setUid(enteredUid);
    setStep(2);
  };

  const handleNextName = (enteredName: string) => {
    setPlayerName(enteredName);
    setStep(3);
  };

  const handleNextDiamonds = (amount: number | string) => {
    setDiamondAmount(amount);
    setStep(4);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Generate Request ID
    const randomHex = Math.floor(100000 + Math.random() * 900000);
    const newEntry: ParticipationEntry = {
      requestId: `ZF-${randomHex}`,
      uid,
      playerName,
      diamondAmount,
      timestamp: new Date().toISOString(),
      status: 'Eligible Entry Submitted',
      source: 'ZAIFII Direct Portal',
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitted(newEntry);
      
      // Immediately reset background form state so any future participation starts 100% fresh
      setStep(1);
      setUid('');
      setPlayerName('');
      setDiamondAmount(520);
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
            currentStep={step}
            onStepClick={(targetStep) => {
              if (targetStep < step) setStep(targetStep);
            }}
          />

          {/* Form Step Switcher */}
          <div className="mt-4">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <Step1UID
                  key={`step1-${resetKey}`}
                  initialUid={uid}
                  onNext={handleNextUid}
                  onError={onError}
                />
              )}

              {step === 2 && (
                <Step2Name
                  key={`step2-${resetKey}`}
                  initialName={playerName}
                  onNext={handleNextName}
                  onBack={() => setStep(1)}
                  onError={onError}
                />
              )}

              {step === 3 && (
                <Step3Diamonds
                  key={`step3-${resetKey}`}
                  initialDiamonds={diamondAmount}
                  onNext={handleNextDiamonds}
                  onBack={() => setStep(2)}
                  onError={onError}
                />
              )}

              {step === 4 && (
                <Step4Review
                  key={`step4-${resetKey}`}
                  uid={uid}
                  playerName={playerName}
                  diamondAmount={diamondAmount}
                  onEdit={() => setStep(1)}
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
