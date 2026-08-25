import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Bot, 
  GitFork, 
  Layers, 
  Workflow, 
  BarChart3, 
  Settings, 
  Zap,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { ActiveNudgeLogo } from '../common/Logo';
import { useDemo } from '../../context/DemoContext';
import { ActiveTab } from '../../types';

interface NavItem {
  id: ActiveTab;
  label: string;
  icon: React.ElementType;
  badge?: string;
  badgeColor?: string;
}

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab, onboardingState } = useDemo();

  const navItems: NavItem[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { 
      id: 'intervention', 
      label: 'AI Interventions', 
      icon: Bot,
      badge: onboardingState === 'stalled' ? 'Action' : onboardingState === 'intervening' ? 'Live' : undefined,
      badgeColor: onboardingState === 'stalled' ? 'bg-amber-500 text-white' : 'bg-blue-500 text-white'
    },
    { id: 'orchestration', label: 'Agent Activity', icon: GitFork },
    { id: 'resolved', label: 'Onboarding Detail', icon: Users },
    { id: 'interventions_log', label: 'Interventions Log', icon: Zap },
    { id: 'integrations', label: 'Integrations', icon: Layers },
    { id: 'agent_studio', label: 'Agent Studio', icon: Workflow, badge: 'FS Studio' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0 border-r border-slate-800 shrink-0 z-30 select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800/80">
        <ActiveNudgeLogo variant="sidebar" showBadge={true} />
      </div>


      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          Command Center Navigation
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150 group ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 font-bold'
                  : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${item.badgeColor || 'bg-slate-800 text-slate-300'}`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer / Hackathon Metadata */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-950/50">
        <div className="text-xs text-slate-400 space-y-1">
          <p className="font-bold text-slate-300 flex items-center justify-between">
            <span>Agent Hackathon 2026</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">Track 1</span>
          </p>
          <p className="text-[11px] text-slate-400">CX & Employee Onboarding</p>
          <div className="pt-2 text-[10px] text-slate-500 border-t border-slate-800/60 flex items-center justify-between">
            <span>Stage 1 Prototype</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </div>
        </div>
      </div>
    </aside>
  );
};
