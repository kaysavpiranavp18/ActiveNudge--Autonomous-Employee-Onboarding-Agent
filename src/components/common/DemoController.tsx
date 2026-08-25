import React, { useEffect, useState } from 'react';
import { Play, Pause, ChevronRight, ChevronLeft, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { demoSteps } from '../../mock/data';

export const DemoController: React.FC = () => {
  const { 
    demoModeActive, 
    setDemoModeActive, 
    currentDemoStep, 
    nextDemoStep, 
    prevDemoStep, 
    restartDemo 
  } = useDemo();

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    let interval: any;
    if (isPlaying && demoModeActive) {
      interval = setInterval(() => {
        if (currentDemoStep < demoSteps.length) {
          nextDemoStep();
        } else {
          setIsPlaying(false);
        }
      }, 5500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentDemoStep, demoModeActive, nextDemoStep]);

  if (!demoModeActive) {
    return (
      <button
        onClick={() => setDemoModeActive(true)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold hover:bg-blue-100 transition-colors shadow-sm"
      >
        <Sparkles className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
        <span>Start Guided Hackathon Demo</span>
      </button>
    );
  }

  const step = demoSteps.find(s => s.stepNumber === currentDemoStep) || demoSteps[0];
  const progressPercent = Math.round((currentDemoStep / demoSteps.length) * 100);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-slate-700/80 backdrop-blur-md">
        {/* Top bar with step title & progress */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-extrabold text-xs tracking-wide uppercase">
              Demo Step {currentDemoStep} of {demoSteps.length}
            </span>
            <h4 className="text-sm font-bold text-white tracking-wide">{step.title}</h4>
          </div>
          <button
            onClick={() => setDemoModeActive(false)}
            className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800"
          >
            Exit Guided Demo
          </button>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-300 font-medium mb-3">
          {step.subtitle}
        </p>

        {/* Progress bar */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-3">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-400 h-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={restartDemo}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Restart Demo"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${isPlaying ? 'bg-amber-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'}`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pause Auto-Play' : 'Auto Play'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevDemoStep}
              disabled={currentDemoStep === 1}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 disabled:opacity-40 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              onClick={nextDemoStep}
              disabled={currentDemoStep === demoSteps.length}
              className="flex items-center gap-1 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-xs font-bold text-white shadow-md shadow-blue-600/30 transition-all"
            >
              <span>{currentDemoStep === demoSteps.length ? 'Completed' : 'Next Step'}</span>
              {currentDemoStep === demoSteps.length ? <CheckCircle2 className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
