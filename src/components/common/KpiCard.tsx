import React from 'react';
import { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon: LucideIcon;
  iconBgColor?: string;
  iconColor?: string;
  highlight?: boolean;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  change,
  isPositive,
  icon: Icon,
  iconBgColor = 'bg-blue-50',
  iconColor = 'text-blue-600',
  highlight = false
}) => {
  return (
    <div className={`fw-card p-5 transition-all duration-200 ${highlight ? 'border-blue-400 ring-2 ring-blue-500/10' : ''}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{title}</span>
        <div className={`p-2.5 rounded-lg ${iconBgColor}`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
      </div>
      <div className="mt-3 flex items-baseline justify-between">
        <span className="text-2xl font-bold text-slate-900 tracking-tight">{value}</span>
        {change && (
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
            {change}
          </span>
        )}
      </div>
    </div>
  );
};
