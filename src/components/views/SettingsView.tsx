import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const SettingsView: React.FC = () => {
  return (
    <div className="space-y-6 pb-12 max-w-4xl">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Agent Command Settings</h1>
        <p className="text-sm font-medium text-slate-500 mt-1">
          Configure autonomous SLA thresholds, conversational policies, and MCP safety rules.
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* SLA & Detection Rules */}
        <div className="fw-card p-6 bg-white space-y-4">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 border-b border-slate-200 pb-3">
            <ClockIcon className="w-4 h-4 text-blue-600" />
            Autonomous Detection &amp; SLA Thresholds
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-800 block mb-1">Stalled Bottleneck Threshold</label>
              <select className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold">
                <option>24 Hours (Default)</option>
                <option>12 Hours</option>
                <option>48 Hours</option>
              </select>
              <span className="text-[10px] text-slate-400 mt-1 block">Time before Active Nudge takes initiative</span>
            </div>

            <div>
              <label className="font-bold text-slate-800 block mb-1">Outreach Channel Preference</label>
              <select className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold">
                <option>Slack &amp; MS Teams (Conversational)</option>
                <option>Slack Direct Message Only</option>
                <option>Email Nudge + Chat</option>
              </select>
            </div>
          </div>
        </div>

        {/* MCP Safety & Governance */}
        <div className="fw-card p-6 bg-white space-y-4">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 border-b border-slate-200 pb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Model Context Protocol (MCP) Safety Policy
          </h3>

          <div className="space-y-3 text-xs">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="mt-0.5 w-4 h-4 text-blue-600 rounded" />
              <div>
                <span className="font-bold text-slate-900 block">Require Human Review on High-Privilege Entra ID Roles</span>
                <span className="text-slate-500 text-[11px]">If an extracted requirement requests Admin permissions, auto-escalate to IT.</span>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="mt-0.5 w-4 h-4 text-blue-600 rounded" />
              <div>
                <span className="font-bold text-slate-900 block">Automatic Provisioning Fallback on Stock Exhaustion</span>
                <span className="text-slate-500 text-[11px]">If hardware seats are full, unblock standard tools and queue hardware ticket.</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
