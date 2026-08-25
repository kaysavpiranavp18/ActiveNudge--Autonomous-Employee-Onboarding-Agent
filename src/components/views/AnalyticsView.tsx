import React from 'react';
import { BarChart3, TrendingUp, Clock, CheckCircle2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';
import { KpiCard } from '../common/KpiCard';

export const AnalyticsView: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Onboarding Bottleneck Analytics</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
              Prototype Scenario Data
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Impact metrics showing autonomous resolution speed before vs after Active Nudge.
          </p>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <KpiCard
          title="Monitored"
          value="128"
          icon={BarChart3}
          iconBgColor="bg-blue-50"
          iconColor="text-blue-600"
        />
        <KpiCard
          title="Bottlenecks"
          value="23"
          icon={AlertTriangle}
          iconBgColor="bg-amber-50"
          iconColor="text-amber-600"
        />
        <KpiCard
          title="Interventions"
          value="19"
          icon={Zap}
          iconBgColor="bg-indigo-50"
          iconColor="text-indigo-600"
        />
        <KpiCard
          title="Auto-Resolved"
          value="17"
          change="89% rate"
          isPositive={true}
          icon={CheckCircle2}
          iconBgColor="bg-emerald-50"
          iconColor="text-emerald-600"
        />
        <KpiCard
          title="Escalated"
          value="02"
          change="Human IT"
          isPositive={false}
          icon={ShieldCheck}
          iconBgColor="bg-rose-50"
          iconColor="text-rose-600"
        />
        <KpiCard
          title="Avg. Resolution"
          value="18 min"
          change="vs 28 hrs"
          isPositive={true}
          icon={Clock}
          iconBgColor="bg-sky-50"
          iconColor="text-sky-600"
        />
      </div>

      {/* Chart: Before vs After Active Nudge */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 fw-card p-6 bg-white space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Average Onboarding Stalled Time</h3>
              <p className="text-xs text-slate-500">Comparing manual manager forms vs Active Nudge autonomous outreach</p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              98.9% Reduction in Stalled Hours
            </span>
          </div>

          {/* Simple Visual Bar Chart */}
          <div className="space-y-6 pt-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">Traditional Onboarding (Manual Forms)</span>
                <span className="text-slate-900 font-extrabold">28.4 Hours Avg. Delay</span>
              </div>
              <div className="w-full bg-slate-100 h-8 rounded-xl overflow-hidden p-1">
                <div className="bg-amber-500 h-full rounded-lg text-white text-[11px] font-bold flex items-center px-3 justify-between" style={{ width: '95%' }}>
                  <span>Waiting for manager to complete portal form</span>
                  <span>28.4h</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-blue-700">With Active Nudge (Autonomous Resolution)</span>
                <span className="text-emerald-600 font-extrabold">0.3 Hours (18 mins) Avg. Delay</span>
              </div>
              <div className="w-full bg-slate-100 h-8 rounded-xl overflow-hidden p-1">
                <div className="bg-gradient-to-r from-blue-600 to-emerald-500 h-full rounded-lg text-white text-[11px] font-bold flex items-center px-3 justify-between" style={{ width: '12%' }}>
                  <span>3 min resolution</span>
                  <span>0.3h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Category Breakdown */}
        <div className="lg:col-span-4 fw-card p-6 bg-white space-y-4">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-200 pb-3">
            Bottleneck Cause Breakdown
          </h3>

          <div className="space-y-3 text-xs">
            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span className="text-slate-700">Manager Input Missing</span>
                <span className="text-slate-900">54%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full" style={{ width: '54%' }} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span className="text-slate-700">Hardware Preference Unselected</span>
                <span className="text-slate-900">26%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full" style={{ width: '26%' }} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span className="text-slate-700">Developer Tool Approvals</span>
                <span className="text-slate-900">15%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-sky-500 h-full" style={{ width: '15%' }} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span className="text-slate-700">Security Clearance Delays</span>
                <span className="text-slate-900">5%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full" style={{ width: '5%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
