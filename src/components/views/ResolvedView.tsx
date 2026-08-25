import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  RotateCcw,
  Users,
  Check,
  TrendingUp,
  FileCheck
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { primaryOnboarding } from '../../mock/data';
import { EscalationBanner } from '../common/EscalationBanner';

export const ResolvedView: React.FC = () => {
  const { resetPrototype, requirements, isEscalatedMode, setActiveTab } = useDemo();

  return (
    <div className="space-y-6 pb-12">
      {/* Hero Banner Header */}
      <div className="fw-card p-8 bg-gradient-to-r from-emerald-900 via-slate-900 to-slate-900 text-white rounded-2xl relative overflow-hidden shadow-xl border-emerald-500/40">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30 uppercase tracking-wider">
                  Workflow State • Unblocked
                </span>
                <span className="text-xs text-slate-400 font-medium">Prototype Scenario</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Rahul's onboarding is back on track.
              </h1>
              <p className="text-slate-300 text-sm max-w-xl">
                Active Nudge collected the missing requirements and automatically continued the Freshservice workflow.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={resetPrototype}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 flex items-center gap-2 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Test Again</span>
            </button>
            <button
              onClick={() => setActiveTab('detail')}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <span>View Full Journey Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Escalation Alert if testing escalation */}
      {isEscalatedMode && <EscalationBanner />}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Summary & Requirements Table (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Employee Summary Card */}
          <div className="fw-card p-5 bg-white space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <h3 className="font-bold text-slate-900 text-sm">Employee Profile &amp; Final Status</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                100% Completed
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-slate-400 font-medium block">Employee</span>
                <span className="font-extrabold text-slate-900 text-sm mt-0.5 block">{primaryOnboarding.name}</span>
                <span className="text-slate-500">{primaryOnboarding.role}</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Department</span>
                <span className="font-bold text-slate-900 mt-0.5 block">{primaryOnboarding.department}</span>
                <span className="text-slate-500">Engineering HQ</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Joining Date</span>
                <span className="font-bold text-slate-900 mt-0.5 block">{primaryOnboarding.joiningDate}</span>
                <span className="text-emerald-600 font-bold">On Schedule</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Manager</span>
                <span className="font-bold text-slate-900 mt-0.5 block">{primaryOnboarding.managerName}</span>
                <span className="text-slate-500">Input Collected</span>
              </div>
            </div>
          </div>

          {/* Clean Requirements Table */}
          <div className="fw-card overflow-hidden bg-white">
            <div className="px-6 py-4 border-b border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Captured Onboarding Requirements</h3>
                <p className="text-xs text-slate-500">Extracted from natural language response via Active Nudge</p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Verified &amp; Provisioned
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100/80 text-[10px] uppercase font-bold text-slate-500 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3">Requirement</th>
                    <th className="px-6 py-3">Extracted Result</th>
                    <th className="px-6 py-3">Provisioning Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-bold text-slate-900 flex items-center gap-2">
                      <span>💻</span> <span>Hardware / Laptop</span>
                    </td>
                    <td className="px-6 py-4 font-extrabold text-slate-900">MacBook Pro 16"</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold inline-flex items-center gap-1">
                        <Check className="w-3 h-3" /> Ready for Dispatch
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-bold text-slate-900 flex items-center gap-2">
                      <span>🔧</span> <span>Development Access</span>
                    </td>
                    <td className="px-6 py-4 font-extrabold text-slate-900">GitHub (Engineering Org)</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold inline-flex items-center gap-1">
                        <Check className="w-3 h-3" /> Entra ID Group Bound
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-bold text-slate-900 flex items-center gap-2">
                      <span>🎨</span> <span>Design Tools</span>
                    </td>
                    <td className="px-6 py-4 font-extrabold text-slate-900">Figma Access</td>
                    <td className="px-6 py-4">
                      {isEscalatedMode ? (
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold inline-flex items-center gap-1">
                          ⚠ IT Review Queued
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold inline-flex items-center gap-1">
                          <Check className="w-3 h-3" /> SAML SSO Active
                        </span>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-bold text-slate-900 flex items-center gap-2">
                      <span>📋</span> <span>Project Management</span>
                    </td>
                    <td className="px-6 py-4 font-extrabold text-slate-500">Jira Access</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold inline-flex items-center gap-1">
                        <Check className="w-3 h-3 text-slate-400" /> Not Required
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Workflow Completion & Resolution Metrics (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* AI Resolution Summary Card */}
          <div className="fw-card p-6 bg-white space-y-4 border-2 border-emerald-500/20">
            <h3 className="font-bold text-slate-900 text-sm flex items-center justify-between border-b border-slate-200/80 pb-3">
              <span>AI Resolution Summary</span>
              <Sparkles className="w-4 h-4 text-emerald-600" />
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              Active Nudge detected a 26-hour manager-response bottleneck, contacted Priya Sharma, extracted 4 requirements, updated the onboarding workflow, and triggered provisioning.
            </p>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-semibold text-slate-400 uppercase block">Resolution Time</span>
                <span className="text-lg font-extrabold text-slate-900">3 min 12 sec</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-semibold text-slate-400 uppercase block">Manual Follow-ups</span>
                <span className="text-lg font-extrabold text-emerald-600">0 Calls</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-semibold text-slate-400 uppercase block">Human Intervention</span>
                <span className="text-lg font-extrabold text-slate-900">Not Required</span>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="text-[10px] font-bold text-emerald-800 uppercase block">Potential Delay</span>
                <span className="text-lg font-extrabold text-emerald-700">26h Saved</span>
              </div>
            </div>

            {/* Highlighted ROI Metric Callout */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white space-y-1 shadow-md">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-100">
                <span>IMPACT MEASUREMENT</span>
                <span className="text-[10px] opacity-80">Prototype Scenario</span>
              </div>
              <p className="text-xl font-extrabold text-white">26 hours of potential delay eliminated</p>
              <p className="text-xs text-emerald-100">
                Transformed a day-one blocker into a 3-minute autonomous resolution.
              </p>
            </div>
          </div>

          {/* Workflow Journey Checklist */}
          <div className="fw-card p-5 bg-white space-y-3">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Freshservice Journey Completion
            </h4>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-emerald-900 font-bold">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" /> HR Verification
                </span>
                <span>Complete</span>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-emerald-900 font-bold">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" /> Employee Profile
                </span>
                <span>Complete</span>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-emerald-900 font-bold">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" /> Hardware Provisioning
                </span>
                <span>MacBook Ready</span>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-emerald-900 font-bold">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" /> Software Access
                </span>
                <span>Entra ID Bound</span>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-emerald-900 font-bold">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" /> Manager Sign-off
                </span>
                <span>Extracted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
