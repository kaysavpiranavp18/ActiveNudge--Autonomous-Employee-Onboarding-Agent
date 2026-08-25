import React from 'react';
import { AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';

interface EscalationBannerProps {
  onClose?: () => void;
}

export const EscalationBanner: React.FC<EscalationBannerProps> = () => {
  return (
    <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 shadow-sm space-y-3">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-amber-200/80 text-amber-800 shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-amber-950">⚠ Provisioning Requires Human IT Review</span>
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-200 text-amber-900 uppercase">
              Partial Resolution
            </span>
          </div>
          <p className="text-sm text-amber-900">
            <strong>Figma License Unavailable:</strong> All seats occupied in Engineering workspace. The agent has automatically notified IT Licensing Team while preserving the extracted requirements.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2 border-t border-amber-200/80 text-xs">
        <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Laptop (MacBook Pro) ✓</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>GitHub Access ✓</span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-900 font-semibold">
          <ShieldAlert className="w-4 h-4 text-amber-600" />
          <span>Figma Access ⚠ (IT Ticket #4829)</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-700 font-medium">
          <CheckCircle2 className="w-4 h-4 text-slate-500" />
          <span>Jira (Not Required) ✓</span>
        </div>
      </div>
      <div className="text-xs text-amber-800 italic pt-1">
        💡 <strong>Autonomous Fallback Policy:</strong> Active Nudge unblocks 3 out of 4 requirements immediately instead of halting the entire onboarding process.
      </div>
    </div>
  );
};
