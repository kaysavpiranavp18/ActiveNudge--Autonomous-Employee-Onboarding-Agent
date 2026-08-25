import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Sparkles, 
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  ChevronDown
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { DemoController } from '../common/DemoController';

export const Topbar: React.FC = () => {
  const { 
    onboardingState, 
    resetPrototype, 
    isEscalatedMode, 
    setIsEscalatedMode 
  } = useDemo();

  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-20 shadow-xs">
      {/* Left: Global Search & Workspace Indicator */}
      <div className="flex items-center gap-6 flex-1 max-w-xl">
        {/* Search */}
        <div className="relative w-full max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search onboardings, employees, or AI logs..."
            className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Workspace indicator */}
        <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span>Freshservice • Engineering HQ</span>
        </div>
      </div>

      {/* Right: AI Status, Escalation Simulation Toggle, Notifications & Profile */}
      <div className="flex items-center gap-4">
        {/* AI Status Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>● AI Monitoring Active</span>
        </div>

        {/* Escalation Simulation Toggle */}
        <div className="hidden sm:flex items-center gap-2">
          <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1.5 rounded-lg border border-slate-200 transition-colors">
            <input
              type="checkbox"
              checked={isEscalatedMode}
              onChange={(e) => setIsEscalatedMode(e.target.checked)}
              className="w-3.5 h-3.5 text-amber-600 rounded border-slate-300 focus:ring-amber-500"
            />
            <span className={isEscalatedMode ? 'text-amber-700 font-bold' : ''}>
              {isEscalatedMode ? 'Simulate IT Escalation' : 'Normal Demo Flow'}
            </span>
          </label>
        </div>

        {/* Reset Prototype Button */}
        <button
          onClick={resetPrototype}
          className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-colors"
          title="Reset Prototype State"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 relative border border-transparent hover:border-slate-200 transition-colors"
          >
            <Bell className="w-4.5 h-4.5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-50 text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-800">AI Agent Notifications</span>
                <span className="text-[10px] text-blue-600 font-semibold">2 New</span>
              </div>

              <div className="space-y-2.5">
                <div className="flex gap-2.5 p-2 rounded-lg bg-amber-50 border border-amber-100">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800">Bottleneck Detected</p>
                    <p className="text-slate-600 text-[11px]">Rahul Kumar onboarding pending input &gt; 24h.</p>
                    <span className="text-[10px] text-slate-400">10:42 AM</span>
                  </div>
                </div>

                <div className="flex gap-2.5 p-2 rounded-lg bg-emerald-50 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800">Intervention Ready</p>
                    <p className="text-slate-600 text-[11px]">Outreach message prepared for Priya Sharma.</p>
                    <span className="text-[10px] text-slate-400">10:43 AM</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="h-6 w-[1px] bg-slate-200" />

        {/* User Profile */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center border border-blue-500 shadow-xs">
            PS
          </div>
          <div className="hidden md:block text-left">
            <p className="text-xs font-bold text-slate-800 leading-tight">Priya Sharma</p>
            <p className="text-[10px] font-medium text-slate-500">Hiring Manager • Eng</p>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </div>

        {/* Demo Controller Button launcher */}
        <DemoController />
      </div>
    </header>
  );
};
