import React, { useEffect, useState } from 'react';
import { 
  GitFork, 
  Bot, 
  MessageSquare, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  RefreshCw, 
  ArrowRight, 
  Info,
  Server,
  Zap,
  Check,
  AlertCircle
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { EscalationBanner } from '../common/EscalationBanner';

export const OrchestrationView: React.FC = () => {
  const { onboardingState, setActiveTab, isEscalatedMode } = useDemo();
  
  const [logStepIndex, setLogStepIndex] = useState<number>(0);

  const logs = [
    { time: '10:45:02', text: 'Orchestrator Agent initialized workflow dispatch', status: 'done' },
    { time: '10:45:04', text: 'Communication Agent: Manager response parsed (Slack API)', status: 'done' },
    { time: '10:45:06', text: 'Extraction Agent: 4 requirements classified (Confidence > 0.95)', status: 'done' },
    { time: '10:45:08', text: 'MCP Gateway: Bound Freshservice MCP tool schema `update_onboarding_ticket`', status: 'done' },
    { time: '10:45:10', text: 'Provisioning Agent: Updating Freshservice custom fields (Laptop = MacBook Pro)', status: 'running' },
    { time: '10:45:12', text: 'Provisioning Agent: Dispatching Entra ID group membership `org-engineering-dev`', status: 'running' },
    { time: '10:45:15', text: 'MCP Security Policy: Verification complete. All constraints satisfied.', status: 'done' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLogStepIndex(prev => (prev < logs.length ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  const isExecuting = onboardingState === 'executing';
  const isDone = onboardingState === 'resolved';

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Agent Activity</h1>
            <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border ${
              isDone ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-indigo-50 text-indigo-700 border-indigo-200'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isDone ? 'bg-emerald-500' : 'bg-indigo-600 animate-ping'}`} />
              <span>{isDone ? '● COMPLETE' : '● EXECUTING'}</span>
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Active Nudge is coordinating specialized agents and external tool execution via Model Context Protocol (MCP).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
            Target: Rahul Kumar (ONB-8492)
          </span>
        </div>
      </div>

      {/* Escalation Alert Banner if applicable */}
      {isEscalatedMode && <EscalationBanner />}

      {/* Architecture Disclaimer */}
      <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-900 flex items-start gap-3 text-xs">
        <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <div className="flex items-center gap-2 font-bold text-blue-950">
            <span>Prototype Simulation &amp; Target Architecture</span>
            <span className="px-1.5 py-0.2 rounded bg-blue-200 text-blue-900 text-[10px]">MCP Tool Layer</span>
          </div>
          <p className="text-blue-800 mt-0.5">
            Production architecture will connect these actions through <strong>Freshworks Agent Studio</strong> and governed <strong>MCP tool bindings</strong> to Freshservice, Slack, and Entra ID.
          </p>
        </div>
      </div>

      {/* Central Visual Graph & Right Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Central Visual Orchestration Graph (8 cols) */}
        <div className="lg:col-span-8 fw-card p-6 bg-slate-900 text-white rounded-2xl relative overflow-hidden space-y-8">
          {/* Top Label */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <GitFork className="w-5 h-5 text-blue-400" />
              <h3 className="font-bold text-sm text-white">Multi-Agent Orchestration Engine</h3>
            </div>
            <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-blue-950 text-blue-300 border border-blue-700/50">
              Freshworks Agent Studio Runtime
            </span>
          </div>

          {/* Graph Nodes Visual Layout */}
          <div className="space-y-10 relative">
            {/* LEVEL 1: Central Orchestrator Agent Node */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-gradient-to-r from-blue-900/90 to-indigo-900/90 border-2 border-blue-500 rounded-xl p-4 shadow-xl text-center space-y-1.5 relative">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] font-bold uppercase tracking-wider">
                  Primary Orchestrator
                </div>
                <h4 className="font-extrabold text-base text-white flex items-center justify-center gap-2">
                  <Bot className="w-5 h-5 text-blue-400" />
                  Orchestrator Agent
                </h4>
                <p className="text-xs text-slate-300">
                  Detects workflow state, evaluates SLA rules, and coordinates specialized sub-agents.
                </p>
              </div>
            </div>

            {/* Connecting lines from Orchestrator down to Specialized Agents */}
            <div className="flex justify-around items-center text-slate-500 text-xs px-12">
              <div className="h-8 w-[2px] bg-blue-500/50 animate-pulse" />
              <div className="h-8 w-[2px] bg-blue-500/50 animate-pulse" />
              <div className="h-8 w-[2px] bg-blue-500/50 animate-pulse" />
            </div>

            {/* LEVEL 2: 3 Specialized Sub-Agents */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Communication Agent */}
              <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Sub-Agent 1</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Done
                  </span>
                </div>
                <h5 className="font-bold text-sm text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-sky-400" />
                  Communication Agent
                </h5>
                <p className="text-xs text-slate-300">
                  Engages manager via conversational outreach on Slack/Teams.
                </p>
              </div>

              {/* Extraction Agent */}
              <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Sub-Agent 2</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Done
                  </span>
                </div>
                <h5 className="font-bold text-sm text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  Extraction Agent
                </h5>
                <p className="text-xs text-slate-300">
                  Converts natural language into structured field schemas.
                </p>
              </div>

              {/* Provisioning Agent */}
              <div className={`bg-slate-800/90 border rounded-xl p-4 space-y-2 relative ${
                isDone ? 'border-emerald-500' : 'border-blue-500/80 ring-2 ring-blue-500/20'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Sub-Agent 3</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
                    isDone 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-400/30 animate-pulse'
                  }`}>
                    {isDone ? <Check className="w-3 h-3" /> : <RefreshCw className="w-3 h-3 animate-spin" />}
                    {isDone ? 'Done' : 'Executing'}
                  </span>
                </div>
                <h5 className="font-bold text-sm text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Provisioning Agent
                </h5>
                <p className="text-xs text-slate-300">
                  Updates Freshservice and triggers hardware &amp; access workflows.
                </p>
              </div>
            </div>

            {/* Connecting lines down to MCP Tool Layer */}
            <div className="flex justify-center my-4">
              <div className="w-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>

            {/* LEVEL 3: MCP Tool Layer (Highlighted Central Hub) */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-2 border-amber-500/60 rounded-xl p-4 text-center space-y-2 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Governed MCP Tool Gateway
                </span>
                <span className="text-xs text-slate-400">Model Context Protocol v1.0</span>
              </div>
              <p className="text-xs text-slate-300 max-w-xl mx-auto">
                <strong>MCP Tool Layer:</strong> Provides governed, audit-logged tool access for agent actions across Freshworks and enterprise infrastructure.
              </p>

              {/* 4 External Integrations Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-left">
                  <span className="font-bold text-white block">Freshservice</span>
                  <span className="text-[10px] text-emerald-400">Tickets &amp; Journeys</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-left">
                  <span className="font-bold text-white block">MCP Gateway</span>
                  <span className="text-[10px] text-amber-400">Tool Binding Hub</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-left">
                  <span className="font-bold text-white block">Slack / Teams</span>
                  <span className="text-[10px] text-sky-400">Conversational Outreach</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-left">
                  <span className="font-bold text-white block">Entra ID</span>
                  <span className="text-[10px] text-indigo-400">Access Provisioning</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Activity Feed (4 cols) */}
        <div className="lg:col-span-4 fw-card p-5 bg-white space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Server className="w-4 h-4 text-blue-600" />
              Live Execution Log
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
              Audit Tracked
            </span>
          </div>

          <div className="space-y-3 text-xs overflow-y-auto max-h-[500px]">
            {logs.slice(0, logStepIndex + 1).map((log, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-400">{log.time}</span>
                  <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Complete
                  </span>
                </div>
                <p className="font-semibold text-slate-800">{log.text}</p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => setActiveTab('resolved')}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-md transition-all"
            >
              <span>View Unblocked Onboarding</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
