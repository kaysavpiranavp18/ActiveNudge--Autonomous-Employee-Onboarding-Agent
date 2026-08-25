import React from 'react';
import { OnboardingStatus } from '../../types';

interface StatusBadgeProps {
  status: OnboardingStatus | string;
  size?: 'sm' | 'md' | 'lg';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const normalized = status.toLowerCase();

  let colors = 'bg-slate-100 text-slate-700 border-slate-200';
  let dotColor = 'bg-slate-400';
  let label = status;

  if (normalized === 'stalled') {
    colors = 'bg-amber-50 text-amber-800 border-amber-200/80';
    dotColor = 'bg-amber-500 animate-ping';
    label = 'STALLED';
  } else if (normalized === 'intervening') {
    colors = 'bg-blue-50 text-blue-700 border-blue-200/80';
    dotColor = 'bg-blue-600 animate-pulse';
    label = 'AI INTERVENING';
  } else if (normalized === 'executing') {
    colors = 'bg-indigo-50 text-indigo-700 border-indigo-200/80';
    dotColor = 'bg-indigo-600 animate-spin';
    label = 'AGENT EXECUTING';
  } else if (normalized === 'resolved' || normalized === 'unblocked') {
    colors = 'bg-emerald-50 text-emerald-800 border-emerald-200/80';
    dotColor = 'bg-emerald-500';
    label = 'UNBLOCKED';
  } else if (normalized === 'escalated') {
    colors = 'bg-rose-50 text-rose-800 border-rose-200/80';
    dotColor = 'bg-rose-500';
    label = 'ESCALATED';
  }

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs font-semibold',
    md: 'px-2.5 py-1 text-xs font-bold tracking-wide uppercase',
    lg: 'px-3.5 py-1.5 text-sm font-bold tracking-wider uppercase'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border ${colors} ${sizeClasses[size]}`}>
      <span className={`relative flex h-2 w-2`}>
        <span className={`inline-flex rounded-full h-2 w-2 ${dotColor}`}></span>
      </span>
      {label}
    </span>
  );
};
