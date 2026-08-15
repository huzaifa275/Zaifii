import React from 'react';
import { Check } from 'lucide-react';

interface ProgressIndicatorProps {
  currentStep: number; // 1, 2, 3, 4, 5 (5 is submitted)
  onStepClick?: (step: number) => void;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  onStepClick,
}) => {
  const steps = [
    { number: 1, label: 'UID', code: '01' },
    { number: 2, label: 'NAME', code: '02' },
    { number: 3, label: 'DIAMONDS', code: '03' },
    { number: 4, label: 'REVIEW', code: '04' },
  ];

  return (
    <div className="w-full pb-6 pt-2">
      <div className="flex items-center justify-between relative max-w-lg mx-auto px-2 sm:px-4">
        {/* Connector Line */}
        <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 bg-slate-200 rounded-full -z-0">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-full transition-all duration-300"
            style={{
              width: `${Math.min(100, Math.max(0, ((currentStep - 1) / (steps.length - 1)) * 100))}%`,
            }}
          />
        </div>

        {steps.map((step) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;
          const isClickable = step.number < currentStep && onStepClick;

          return (
            <div key={step.number} className="relative z-10 flex flex-col items-center">
              <button
                type="button"
                disabled={!isClickable}
                onClick={() => isClickable && onStepClick(step.number)}
                className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all shadow-sm ${
                  isCompleted
                    ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer scale-105'
                    : isCurrent
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white ring-4 ring-blue-100 scale-110 shadow-md shadow-blue-500/20'
                    : 'bg-white border-2 border-slate-200 text-slate-400'
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" /> : step.code}
              </button>
              <span
                className={`mt-1.5 text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-colors ${
                  isCurrent ? 'text-blue-600' : isCompleted ? 'text-slate-700' : 'text-slate-400'
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
