import React from 'react';
import { 
  Bot, 
  Clock, 
  CheckCircle2, 
  UserCheck, 
  FileText, 
  Laptop, 
  MessageSquare, 
  Cpu, 
  Zap, 
  ShieldAlert, 
  ArrowLeft 
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { primaryOnboarding } from '../../mock/data';

export const OnboardingDetailView: React.FC = () => {
  const { setActiveTab, onboardingState } = useDemo();

  const timelineEvents = [
    {
      time: 'Day 1 • 08:30 AM',
      title: 'HR Initiated Onboarding Journey',
      description: 'Employee profile initialized in Freshservice by HR team.',
      actor: 'Human / HR',
      actorType: 'human',
      icon: FileText
    },
    {
      time: 'Day 1 • 08:45 AM',
      title: 'Employee Identity Verified',
      description: 'Entra ID user object created and background check verified.',
      actor: 'System / Identity',
      actorType: 'system',
      icon: UserCheck
    },
    {
      time: 'Day 1 • 09:00 AM',
      title: 'Hardware Request Ticket Created',
      description: 'Standard IT hardware ticket created in Freshservice.',
      actor: 'Freshservice System',
      actorType: 'system',
      icon: Laptop
    },
    {
      time: 'Day 1 • 09:15 AM',
      title: 'Workflow Waiting for Manager Input',
      description: 'Onboarding journey reached manager input step. Form sent to Priya Sharma.',
      actor: 'Freshservice Workflow',
      actorType: 'system',
      icon: Clock
    },
    {
      time: 'Day 2 • 10:42 AM (26h elapsed)',
      title: '🤖 AI Detected Stalled Workflow',
      description: 'Active Nudge background rule #12 triggered: manager response pending > 24 hours.',
      actor: 'Active Nudge AI',
      actorType: 'ai',
      icon: Bot,
      highlight: true
    },
    {
      time: 'Day 2 • 10:43 AM',
      title: '🤖 AI Proactively Reached Out via Slack',
      description: 'Conversational nudge sent to Priya Sharma asking for laptop & software preference.',
      actor: 'Active Nudge AI',
      actorType: 'ai',
      icon: MessageSquare,
      highlight: true
    },
    {
      time: 'Day 2 • 10:44 AM',
      title: 'Manager Natural Language Response Received',
      description: 'Priya Sharma replied: "MacBook please. He needs GitHub and Figma access. No Jira for now."',
      actor: 'Priya Sharma (Manager)',
      actorType: 'human',
      icon: UserCheck
    },
    {
      time: 'Day 2 • 10:45 AM',
      title: '🤖 Requirements Extracted from Natural Language',
      description: 'Extraction Agent structured 4 fields (MacBook, GitHub, Figma, No Jira) with 98% confidence.',
      actor: 'Active Nudge AI',
      actorType: 'ai',
      icon: Cpu,
      highlight: true
    },
    {
      time: 'Day 2 • 10:46 AM',
      title: '🤖 Freshservice Ticket & Custom Fields Updated',
      description: 'Orchestrator Agent invoked MCP tool `update_onboarding_ticket` to unblock workflow.',
      actor: 'Active Nudge AI',
      actorType: 'ai',
      icon: Zap,
      highlight: true
    },
    {
      time: 'Day 2 • 10:47 AM',
      title: '🤖 Provisioning Workflows Triggered',
      description: 'Hardware dispatch queued; Entra ID developer group assigned.',
      actor: 'Active Nudge AI',
      actorType: 'ai',
      icon: CheckCircle2,
      highlight: true
    }
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <button
            onClick={() => setActiveTab('overview')}
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-800 mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Dashboard</span>
          </button>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Rahul Kumar — Onboarding Journey
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
              Ticket #ONB-8492
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 mt-0.5">
            Complete chronological event log with AI intervention markers.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
            Manager: Priya Sharma
          </span>
        </div>
      </div>

      {/* Summary Profile Info Card */}
      <div className="fw-card p-5 bg-white space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-xs">
          <div>
            <span className="text-slate-400 font-medium block">Employee</span>
            <span className="font-extrabold text-slate-900 text-sm mt-0.5 block">{primaryOnboarding.name}</span>
          </div>
          <div>
            <span className="text-slate-400 font-medium block">Role</span>
            <span className="font-bold text-slate-900 mt-0.5 block">{primaryOnboarding.role}</span>
          </div>
          <div>
            <span className="text-slate-400 font-medium block">Department</span>
            <span className="font-bold text-slate-900 mt-0.5 block">{primaryOnboarding.department}</span>
          </div>
          <div>
            <span className="text-slate-400 font-medium block">Joining Date</span>
            <span className="font-bold text-slate-900 mt-0.5 block">{primaryOnboarding.joiningDate}</span>
          </div>
          <div>
            <span className="text-slate-400 font-medium block">Overall Status</span>
            <span className="font-extrabold text-emerald-600 text-sm mt-0.5 block uppercase">
              {onboardingState === 'resolved' ? 'UNBLOCKED' : 'STALLED (Intervention Available)'}
            </span>
          </div>
        </div>
      </div>

      {/* Chronological Timeline */}
      <div className="fw-card p-6 bg-white space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h3 className="font-bold text-slate-900 text-sm">Chronological Onboarding Events</h3>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="font-semibold text-slate-700">AI Driven</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
              <span className="font-semibold text-slate-700">System / Human</span>
            </span>
          </div>
        </div>

        <div className="space-y-6 relative pl-6 border-l-2 border-slate-200 ml-2">
          {timelineEvents.map((evt, idx) => {
            const Icon = evt.icon;
            const isAi = evt.actorType === 'ai';

            return (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <span className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center ${
                  isAi ? 'bg-blue-600 ring-4 ring-blue-50' : 'bg-slate-400'
                }`}>
                  {isAi && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                </span>

                <div className={`p-4 rounded-xl border text-xs transition-all ${
                  isAi 
                    ? 'bg-blue-50/60 border-blue-200/90 text-blue-950 shadow-xs' 
                    : 'bg-slate-50/60 border-slate-200 text-slate-800'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${isAi ? 'text-blue-600' : 'text-slate-500'}`} />
                      <h4 className="font-extrabold text-sm text-slate-900">{evt.title}</h4>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400">{evt.time}</span>
                  </div>

                  <p className="text-slate-600 text-xs mt-1 font-medium">{evt.description}</p>

                  <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                    <span className={`font-bold px-2 py-0.5 rounded ${
                      isAi ? 'bg-blue-100 text-blue-800' : 'bg-slate-200 text-slate-700'
                    }`}>
                      Actor: {evt.actor}
                    </span>
                    {isAi && (
                      <span className="text-blue-600 font-extrabold flex items-center gap-1">
                        <Bot className="w-3 h-3" /> Autonomous Action
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
