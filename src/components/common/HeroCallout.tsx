import React from 'react';
import { Zap, Clock, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';

export const HeroCallout: React.FC = () => {
  const { startIntervention, onboardingState } = useDemo();

  if (onboardingState === 'resolved') {
    return (
      <div className="fw-card p-6 bg-gradient-to-r from-emerald-900 via-slate-900 to-slate-900 text-white relative overflow-hidden shadow-lg border-emerald-500/30">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                  Success • Workflow Unblocked
                </span>
                <span className="text-xs text-slate-400">Prototype Scenario</span>
              </div>
              <h2 className="text-xl font-bold text-white mt-1">26 Hours of Potential Delay Eliminated</h2>
              <p className="text-slate-300 text-sm mt-0.5">
                Active Nudge proactively contacted Priya Sharma, extracted 4 requirements, and updated Freshservice in 3 min 12 sec.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fw-card p-6 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden shadow-xl border-blue-500/30">
      {/* Background glow effect */}
      <div className="absolute -right-10 -top-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              Autonomous Agent Triggered
            </span>
            <span className="text-xs font-medium text-slate-400">Built for Freshworks Agent Studio</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
            <img src="/logo-transparent.png" alt="Active Nudge Logo" className="h-14 w-auto object-contain bg-white/95 p-2 rounded-xl shadow-md shrink-0" />
            <div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Your onboarding workflow is stuck.<br />
                <span className="text-blue-400">Active Nudge already knows why.</span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-300 text-sm font-medium pt-1">
            <div className="flex items-center gap-1.5 text-amber-400">
              <Clock className="w-4 h-4" />
              <span>Manager input missing for <strong>26 hours</strong></span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldAlert className="w-4 h-4 text-blue-400" />
              <span>Target: Rahul Kumar (Software Engineer)</span>
            </div>
          </div>
        </div>

        <div className="shrink-0 w-full lg:w-auto">
          <button
            onClick={startIntervention}
            className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
          >
            <Zap className="w-5 h-5 fill-current" />
            <span>Resolve with Active Nudge</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
