import React from 'react';
import { 
  Users, 
  AlertTriangle, 
  Bot, 
  Clock, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Zap,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { KpiCard } from '../common/KpiCard';
import { StatusBadge } from '../common/StatusBadge';
import { HeroCallout } from '../common/HeroCallout';
import { useDemo } from '../../context/DemoContext';
import { primaryOnboarding, sampleOnboardingsList } from '../../mock/data';

export const DashboardView: React.FC = () => {
  const { startIntervention, onboardingState, setActiveTab } = useDemo();

  return (
    <div className="space-y-6 pb-12">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Onboarding Command Center</h1>
            <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
              Freshworks Ecosystem
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Monitor onboarding health and let AI resolve workflow bottlenecks automatically.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setActiveTab('interventions_log')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold shadow-xs transition-colors"
          >
            <Bot className="w-4 h-4 text-blue-600" />
            <span>View Intervention History</span>
          </button>
        </div>
      </div>

      {/* Prominent Hero Callout Card */}
      <HeroCallout />

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <KpiCard
          title="Active Onboardings"
          value="128"
          change="+12 this week"
          isPositive={true}
          icon={Users}
          iconBgColor="bg-blue-50"
          iconColor="text-blue-600"
        />
        <KpiCard
          title="At Risk"
          value="07"
          change="Requires action"
          isPositive={false}
          icon={AlertTriangle}
          iconBgColor="bg-amber-50"
          iconColor="text-amber-600"
          highlight={true}
        />
        <KpiCard
          title="AI Interventions Today"
          value="14"
          change="87% success"
          isPositive={true}
          icon={Bot}
          iconBgColor="bg-indigo-50"
          iconColor="text-indigo-600"
        />
        <KpiCard
          title="Avg. Resolution Time"
          value="18 min"
          change="-42 min faster"
          isPositive={true}
          icon={Clock}
          iconBgColor="bg-emerald-50"
          iconColor="text-emerald-600"
        />
        <KpiCard
          title="AI Resolution Rate"
          value="87%"
          change="Autonomous"
          isPositive={true}
          icon={TrendingUp}
          iconBgColor="bg-sky-50"
          iconColor="text-sky-600"
        />
      </div>

      {/* Prominent Needs Attention Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Needs Attention
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
              1 Bottleneck Detected
            </span>
          </div>
          <span className="text-xs text-slate-500">Auto-detected by Freshworks Agent Studio rule #12</span>
        </div>

        {/* Highlighted Card for Rahul Kumar */}
        <div className="fw-card fw-card-highlight p-6 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Employee Info */}
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white font-bold text-base flex items-center justify-center border-2 border-slate-700 shadow-md">
                  RK
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-extrabold text-slate-900">{primaryOnboarding.name}</h3>
                    <StatusBadge status={onboardingState} size="md" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {primaryOnboarding.role} • <span className="text-slate-700">{primaryOnboarding.department}</span>
                  </p>
                </div>
              </div>

              {/* Grid of Key Info */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                <div>
                  <span className="text-slate-400 font-medium block">Joining Date</span>
                  <span className="font-bold text-slate-900 mt-0.5 block">{primaryOnboarding.joiningDate}</span>
                  <span className="text-[10px] text-amber-600 font-bold">In 3 days</span>
                </div>

                <div>
                  <span className="text-slate-400 font-medium block">Hiring Manager</span>
                  <span className="font-bold text-slate-900 mt-0.5 block">{primaryOnboarding.managerName}</span>
                  <span className="text-[10px] text-slate-500">Engineering Lead</span>
                </div>

                <div>
                  <span className="text-slate-400 font-medium block">Bottleneck Reason</span>
                  <span className="font-bold text-amber-700 mt-0.5 block">{primaryOnboarding.stalledReason}</span>
                  <span className="text-[10px] text-amber-600 font-bold">Pending 26 hours</span>
                </div>

                <div>
                  <span className="text-slate-400 font-medium block">Journey Progress</span>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${onboardingState === 'resolved' ? 'bg-emerald-500' : 'bg-amber-500'}`}
                        style={{ width: onboardingState === 'resolved' ? '100%' : '68%' }}
                      />
                    </div>
                    <span className="font-bold text-slate-900 text-xs">
                      {onboardingState === 'resolved' ? '100%' : '68%'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Journey Steps Progress */}
              <div>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Workflow Journey Steps
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                  {primaryOnboarding.steps.map((step) => {
                    let badgeBg = 'bg-emerald-50 text-emerald-800 border-emerald-200';
                    let icon = <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />;
                    
                    if (onboardingState === 'resolved') {
                      badgeBg = 'bg-emerald-50 text-emerald-800 border-emerald-200';
                      icon = <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />;
                    } else if (step.status === 'warning') {
                      badgeBg = 'bg-amber-50 text-amber-800 border-amber-300 font-bold';
                      icon = <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />;
                    } else if (step.status === 'pending') {
                      badgeBg = 'bg-slate-100 text-slate-500 border-slate-200';
                      icon = <span className="w-2 h-2 rounded-full bg-slate-300" />;
                    }

                    return (
                      <div 
                        key={step.id} 
                        className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 ${badgeBg}`}
                      >
                        {icon}
                        <span className="truncate font-semibold text-[11px]">{step.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Action CTA Box */}
            <div className="lg:w-72 bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-between space-y-4 shrink-0">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>AI Monitoring Active</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Active Nudge detected a workflow bottleneck: manager response has been missing for over 24h.
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={startIntervention}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>Activate AI Intervention</span>
                </button>

                <button
                  onClick={() => setActiveTab('detail')}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <span>View Onboarding Timeline</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Other Active Onboardings */}
      <div className="fw-card overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200/80 flex items-center justify-between bg-slate-50/50">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">All Monitored Onboardings</h3>
            <p className="text-xs text-slate-500">Real-time status across Engineering, Product, and Design teams.</p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-600">
            5 Total Records
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-100/70 uppercase tracking-wider text-[10px] font-bold text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3">Employee</th>
                <th className="px-6 py-3">Role & Dept</th>
                <th className="px-6 py-3">Joining Date</th>
                <th className="px-6 py-3">Manager</th>
                <th className="px-6 py-3">Stalled Duration</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {sampleOnboardingsList.map((item) => (
                <tr 
                  key={item.id}
                  className={`hover:bg-slate-50/80 transition-colors ${item.id === 'ONB-8492' ? 'bg-blue-50/30 font-medium' : ''}`}
                >
                  <td className="px-6 py-3.5 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <span>{item.name}</span>
                      {item.id === 'ONB-8492' && (
                        <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-bold">
                          Primary Demo
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-slate-600">
                    {item.role} <span className="text-slate-400">• {item.department}</span>
                  </td>
                  <td className="px-6 py-3.5 font-medium">{item.joiningDate}</td>
                  <td className="px-6 py-3.5 text-slate-700 font-semibold">{item.managerName}</td>
                  <td className="px-6 py-3.5">
                    <span className={`font-semibold ${item.stalledDurationHours > 24 ? 'text-amber-700' : 'text-slate-600'}`}>
                      {item.stalledDurationHours}h pending
                    </span>
                  </td>
                  <td className="px-6 py-3.5">
                    <StatusBadge status={item.id === 'ONB-8492' ? onboardingState : item.status} size="sm" />
                  </td>
                  <td className="px-6 py-3.5 text-right">
                    <button
                      onClick={() => {
                        if (item.id === 'ONB-8492') startIntervention();
                        else setActiveTab('detail');
                      }}
                      className="px-2.5 py-1 rounded bg-slate-100 hover:bg-blue-600 hover:text-white font-bold text-[11px] text-slate-700 transition-colors inline-flex items-center gap-1"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
