import React, { useState } from 'react';
import { 
  Workflow, 
  Play, 
  GitBranch, 
  Bot, 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Sliders, 
  Plus, 
  Search, 
  ZoomIn, 
  ZoomOut, 
  Maximize2,
  Lock,
  ArrowRight,
  Database,
  Terminal,
  Activity,
  Check
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';

export const AgentStudioView: React.FC = () => {
  const { startIntervention } = useDemo();
  const [selectedNode, setSelectedNode] = useState<string>('orchestrator');

  const nodes = [
    {
      id: 'trigger',
      title: 'Trigger: Onboarding Stalled',
      subtitle: 'SLA Monitor • Event Listener',
      type: 'trigger',
      status: 'active',
      icon: Activity,
      color: 'border-cyan-500 bg-cyan-950/40 text-cyan-300',
      description: 'Triggers automatically when a Freshservice onboarding ticket sits pending manager input > 24 hours.',
      details: {
        eventType: 'freshservice.ticket.stalled',
        slaThreshold: '24 Hours',
        pollingInterval: 'Real-time WebSocket'
      }
    },
    {
      id: 'condition',
      title: 'Condition: SLA > 24h & Missing Data',
      subtitle: 'Rule Evaluator',
      type: 'condition',
      status: 'passed',
      icon: GitBranch,
      color: 'border-amber-500 bg-amber-950/40 text-amber-300',
      description: 'Evaluates whether the stalled workflow requires manager inputs (hardware preference or software access).',
      details: {
        conditionRule: 'input_missing == true AND duration >= 24h',
        targetRole: 'Hiring Manager (Priya Sharma)',
        priority: 'P1 High'
      }
    },
    {
      id: 'orchestrator',
      title: 'Active Nudge Orchestrator',
      subtitle: 'Autonomous AI Core',
      type: 'agent',
      status: 'running',
      icon: Bot,
      color: 'border-blue-500 bg-blue-950/80 text-blue-200 ring-2 ring-blue-400/40',
      description: 'Coordinates specialized sub-agents, maintains conversational context, and dispatches MCP tools.',
      details: {
        model: 'Freshworks-Agent-v2 (Studio LLM)',
        executionMode: 'Autonomous Initiative',
        guardrails: 'Strict MCP Governed Schema',
        avgLatency: '1.2 seconds'
      }
    },
    {
      id: 'comm_agent',
      title: 'Communication Agent',
      subtitle: 'Slack / Teams Outreach',
      type: 'sub_agent',
      status: 'complete',
      icon: Bot,
      color: 'border-sky-500 bg-sky-950/40 text-sky-300',
      description: 'Proactively messages the hiring manager on Slack/Teams with natural language context.',
      details: {
        channel: 'Slack DM (@Priya Sharma)',
        template: 'Proactive Manager Nudge v3',
        retryPolicy: 'Max 2 attempts'
      }
    },
    {
      id: 'extraction_agent',
      title: 'Requirement Extraction Agent',
      subtitle: 'NLP Field Parser',
      type: 'sub_agent',
      status: 'complete',
      icon: Cpu,
      color: 'border-indigo-500 bg-indigo-950/40 text-indigo-300',
      description: 'Parses natural language responses into structured JSON schemas (Laptop, GitHub, Figma, Jira).',
      details: {
        confidenceThreshold: '0.90',
        schemaMapping: 'onboarding_requirements_v1',
        fieldsExtracted: '4 items'
      }
    },
    {
      id: 'mcp_tool',
      title: 'MCP Governed Execution Gateway',
      subtitle: 'Model Context Protocol',
      type: 'mcp',
      status: 'active',
      icon: ShieldCheck,
      color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300',
      description: 'Provides audit-logged, governed tool access to Freshservice, Entra ID, and IT Procurement.',
      details: {
        boundTools: 'update_ticket, assign_entra_group, order_laptop',
        auditLogging: 'Enabled (Immutable Log)',
        safetyPolicy: 'Block root level admin escalations'
      }
    }
  ];

  const activeNode = nodes.find(n => n.id === selectedNode) || nodes[2];

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Freshworks Agent Studio — Workflow Visualizer
            </h1>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
              Active Canvas Environment
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Visual node-based canvas configuring Active Nudge autonomous rules and MCP tool schemas.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={startIntervention}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-md flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Test Canvas Execution</span>
          </button>
        </div>
      </div>

      {/* Defining Agentic Principle Callout */}
      <div className="fw-card p-5 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl border border-blue-500/30 shadow-lg relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-extrabold uppercase tracking-wider border border-blue-400/30">
                Agentic Architecture Rule
              </span>
              <span className="text-xs text-slate-400 font-medium">Autonomous Execution Loop</span>
            </div>
            <h3 className="text-xl font-extrabold text-white">
              Detect ➔ Decide ➔ Proactively Act ➔ Understand ➔ Execute ➔ Verify ➔ Resolve
            </h3>
            <p className="text-slate-300 text-xs">
              Unlike traditional chatbots that sit idle waiting for prompts, Active Nudge continuously listens to Freshservice state changes and initiates bottleneck resolution.
            </p>
          </div>
        </div>
      </div>

      {/* Main Interactive Workflow Canvas (12 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Visual Node Graph Canvas (8 cols) */}
        <div className="lg:col-span-8 fw-card bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col h-[700px]">
          {/* Studio Top Control Toolbar */}
          <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <Workflow className="w-4 h-4 text-blue-400" />
                <span>Workflow Canvas: <code className="text-blue-400 font-mono">active_nudge_orchestrator.fsflow</code></span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                ● Deployed v2.4
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded text-[11px]">
                <ZoomOut className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-mono">100%</span>
                <ZoomIn className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <button className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300">
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Dotted Canvas Area */}
          <div 
            className="flex-1 p-8 overflow-y-auto relative space-y-8 select-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          >
            {/* SVG Connecting Paths with Animated Flow Markers */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <linearGradient id="flowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>

            {/* NODE 1: Trigger */}
            <div className="flex justify-center relative z-10">
              <div 
                onClick={() => setSelectedNode('trigger')}
                className={`w-full max-w-md p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedNode === 'trigger' ? 'border-cyan-400 ring-4 ring-cyan-500/20 shadow-lg shadow-cyan-500/20' : 'border-slate-800 hover:border-slate-700'
                } bg-slate-900/90 text-white space-y-2`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    1. SLA Listener Trigger
                  </span>
                  <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                </div>
                <h4 className="font-extrabold text-sm text-white">Trigger: Onboarding Stalled</h4>
                <p className="text-slate-300 text-xs">Listens to Freshservice tickets waiting on manager input &gt; 24h.</p>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center text-blue-500 animate-pulse">
              <span className="w-0.5 h-6 bg-gradient-to-b from-cyan-500 to-amber-500" />
            </div>

            {/* NODE 2: Condition */}
            <div className="flex justify-center relative z-10">
              <div 
                onClick={() => setSelectedNode('condition')}
                className={`w-full max-w-md p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedNode === 'condition' ? 'border-amber-400 ring-4 ring-amber-500/20 shadow-lg shadow-amber-500/20' : 'border-slate-800 hover:border-slate-700'
                } bg-slate-900/90 text-white space-y-2`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    2. Rule Evaluator
                  </span>
                  <GitBranch className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="font-extrabold text-sm text-white">Condition: SLA &gt; 24h &amp; Pending Inputs</h4>
                <p className="text-slate-300 text-xs">Evaluates whether manager input is required for laptop or dev software.</p>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center text-blue-500 animate-pulse">
              <span className="w-0.5 h-6 bg-gradient-to-b from-amber-500 to-blue-500" />
            </div>

            {/* NODE 3: Orchestrator Agent (Central Highlighted Core) */}
            <div className="flex justify-center relative z-10">
              <div 
                onClick={() => setSelectedNode('orchestrator')}
                className={`w-full max-w-lg p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedNode === 'orchestrator' 
                    ? 'border-blue-400 ring-4 ring-blue-500/30 shadow-2xl shadow-blue-600/40 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950' 
                    : 'border-blue-600/80 bg-slate-900 hover:border-blue-500'
                } text-white space-y-3`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-white">Active Nudge Orchestrator</h4>
                      <span className="text-[10px] font-mono text-blue-300">Freshworks-Agent-v2</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Autonomous Core
                  </span>
                </div>
                <p className="text-slate-200 text-xs leading-relaxed">
                  Main Orchestration Core. Evaluates state, delegates sub-agents, and invokes governed MCP tools.
                </p>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center text-blue-500 animate-pulse">
              <span className="w-0.5 h-6 bg-gradient-to-b from-blue-500 to-indigo-500" />
            </div>

            {/* NODE 4 & 5: Parallel Sub-Agents */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 max-w-xl mx-auto">
              <div 
                onClick={() => setSelectedNode('comm_agent')}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedNode === 'comm_agent' ? 'border-sky-400 ring-4 ring-sky-500/20' : 'border-slate-800 hover:border-slate-700'
                } bg-slate-900/90 text-white space-y-2`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Sub-Agent A</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <h5 className="font-bold text-sm text-white flex items-center gap-2">
                  <Bot className="w-4 h-4 text-sky-400" />
                  Communication Agent
                </h5>
                <p className="text-slate-400 text-xs">Slack/Teams manager conversational outreach.</p>
              </div>

              <div 
                onClick={() => setSelectedNode('extraction_agent')}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedNode === 'extraction_agent' ? 'border-indigo-400 ring-4 ring-indigo-500/20' : 'border-slate-800 hover:border-slate-700'
                } bg-slate-900/90 text-white space-y-2`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Sub-Agent B</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <h5 className="font-bold text-sm text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  Extraction Agent
                </h5>
                <p className="text-slate-400 text-xs">NLP natural language response field parser.</p>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center text-blue-500 animate-pulse">
              <span className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 to-emerald-500" />
            </div>

            {/* NODE 6: MCP Tool Layer Gateway */}
            <div className="flex justify-center relative z-10">
              <div 
                onClick={() => setSelectedNode('mcp_tool')}
                className={`w-full max-w-md p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedNode === 'mcp_tool' ? 'border-emerald-400 ring-4 ring-emerald-500/20 shadow-lg shadow-emerald-500/20' : 'border-slate-800 hover:border-slate-700'
                } bg-slate-900/90 text-white space-y-2`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    MCP Tool Execution Gateway
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="font-extrabold text-sm text-white">Model Context Protocol (MCP) Bindings</h4>
                <p className="text-slate-300 text-xs">Dispatches updates to Freshservice, Entra ID, and Slack with audit logging.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Node Inspector Panel (4 cols) */}
        <div className="lg:col-span-4 fw-card p-6 bg-white space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">
                  Studio Inspector
                </span>
                <h3 className="font-extrabold text-slate-900 text-base">Node Properties</h3>
              </div>
              <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-slate-100 text-slate-700">
                {activeNode.id}
              </span>
            </div>

            {/* Node Title & Description */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <activeNode.icon className="w-5 h-5 text-blue-600" />
                <h4 className="font-extrabold text-slate-900 text-sm">{activeNode.title}</h4>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {activeNode.description}
              </p>
            </div>

            {/* Key Value Metadata Table */}
            <div className="space-y-2">
              <h5 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
                Configuration Attributes
              </h5>
              <div className="space-y-2 text-xs">
                {Object.entries(activeNode.details).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/70 border border-slate-200/80">
                    <span className="font-semibold text-slate-500 capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="font-extrabold text-slate-900 font-mono text-[11px]">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Governance & Safety Rules */}
            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 space-y-1.5 text-xs text-blue-900">
              <span className="font-bold text-blue-950 block flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" /> Governed Execution Policy
              </span>
              <p className="text-blue-800 text-[11px]">
                All actions dispatched by this node are signed and audit-logged via Freshworks Agent Studio security policies.
              </p>
            </div>
          </div>

          {/* Action Trigger Button */}
          <div className="pt-4 border-t border-slate-200 space-y-2">
            <button
              onClick={startIntervention}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-md transition-all"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Simulate Node Execution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-center text-slate-400">
              Clicking simulates node dispatch in the live hackathon workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
