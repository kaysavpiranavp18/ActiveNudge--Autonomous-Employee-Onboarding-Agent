import React, { useState } from 'react';
import { 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Bot, 
  AlertCircle,
  Cpu,
  RefreshCw,
  Sliders
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { EscalationBanner } from '../common/EscalationBanner';
import { primaryOnboarding } from '../../mock/data';

export const InterventionView: React.FC = () => {
  const { 
    chatMessages, 
    isThinking, 
    requirements, 
    simulateManagerResponse, 
    executeActions, 
    onboardingState,
    isEscalatedMode,
    setIsEscalatedMode
  } = useDemo();

  const [inputVal, setInputVal] = useState<string>('');

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    simulateManagerResponse(inputVal);
    setInputVal('');
  };

  const handleQuickPreset = () => {
    simulateManagerResponse("MacBook please. He needs GitHub and Figma access. No Jira for now.");
  };

  const hasExtracted = requirements.length > 0;

  return (
    <div className="space-y-6 pb-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">AI Intervention Started</h1>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center gap-1.5 border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '3s' }} />
              Active Manager Outreach
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Active Nudge is conversing with Priya Sharma to extract onboarding requirements automatically.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg border border-slate-200 cursor-pointer">
            <Sliders className="w-3.5 h-3.5 text-amber-600" />
            <span>IT License Escalation Test:</span>
            <input
              type="checkbox"
              checked={isEscalatedMode}
              onChange={(e) => setIsEscalatedMode(e.target.checked)}
              className="w-4 h-4 text-amber-600 rounded"
            />
          </label>
        </div>
      </div>

      {/* Escalation Alert if in Escalated Mode */}
      {isEscalatedMode && <EscalationBanner />}

      {/* Main Grid: Left Chat & Right Event Timeline / Extraction Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Slack/Teams-style Conversational Interface (7 cols) */}
        <div className="lg:col-span-7 fw-card flex flex-col h-[650px] overflow-hidden bg-white border border-slate-200 shadow-md">
          {/* Interface Top Bar */}
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-white">Active Nudge AI</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    Slack Workspace Simulation
                  </span>
                </div>
                <p className="text-xs text-slate-400">Conversational intervention • Manager outreach</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-slate-300">Powered by Agentic Workflow</span>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-5 overflow-y-auto space-y-5 bg-slate-50/50">
            {chatMessages.map((msg) => {
              const isAi = msg.sender === 'ai';
              return (
                <div 
                  key={msg.id}
                  className={`flex gap-3 ${isAi ? 'items-start' : 'items-start flex-row-reverse'}`}
                >
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-xs ${
                    isAi ? 'bg-blue-600 text-white' : 'bg-slate-800 text-white'
                  }`}>
                    {isAi ? <Zap className="w-4 h-4 fill-current" /> : 'PS'}
                  </div>

                  {/* Message Bubble */}
                  <div className={`max-w-xl space-y-2 ${isAi ? 'text-left' : 'text-right'}`}>
                    <div className="flex items-center gap-2 px-1">
                      <span className="text-xs font-bold text-slate-900">{msg.senderName}</span>
                      <span className="text-[10px] text-slate-400">{msg.timestamp}</span>
                    </div>

                    <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                      isAi 
                        ? 'bg-white text-slate-800 border border-slate-200/90 shadow-sm rounded-tl-none' 
                        : 'bg-blue-600 text-white font-medium shadow-sm rounded-tr-none'
                    }`}>
                      {msg.text}
                    </div>

                    {/* Render Inline Requirement Cards inside chat if attached */}
                    {msg.requirements && msg.requirements.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {msg.requirements.map((req) => (
                          <div 
                            key={req.id}
                            className={`p-3 rounded-xl border text-xs font-medium space-y-1 ${
                              req.status === 'escalated'
                                ? 'bg-amber-50 border-amber-300 text-amber-900'
                                : req.status === 'not_required'
                                ? 'bg-slate-100 border-slate-200 text-slate-600'
                                : 'bg-blue-50/80 border-blue-200 text-blue-950'
                            }`}
                          >
                            <div className="flex items-center justify-between font-bold">
                              <span className="flex items-center gap-1.5 text-sm">
                                <span>{req.icon}</span>
                                <span>{req.title}</span>
                              </span>
                              <span className={`text-[10px] px-1.5 py-0.5 rounded font-extrabold ${
                                req.status === 'escalated' 
                                  ? 'bg-amber-200 text-amber-900' 
                                  : 'bg-emerald-100 text-emerald-800'
                              }`}>
                                {Math.round(req.confidence * 100)}% CONFIDENT
                              </span>
                            </div>

                            <p className="font-extrabold text-slate-900 text-sm mt-1">{req.value}</p>
                            {req.note && (
                              <p className="text-[10px] text-slate-500 italic mt-0.5">{req.note}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Thinking / Extraction Indicator */}
            {isThinking && (
              <div className="flex items-center gap-3 text-slate-500 text-xs font-semibold p-3 bg-white rounded-xl border border-slate-200 w-fit animate-pulse">
                <RefreshCw className="w-4 h-4 text-blue-600 animate-spin" />
                <span>Understanding manager response &amp; extracting requirements via Agent Studio NLP...</span>
              </div>
            )}
          </div>

          {/* Quick Preset Action Bar & Input */}
          <div className="p-4 bg-white border-t border-slate-200 space-y-3">
            {chatMessages.length === 1 && (
              <div className="flex items-center justify-between bg-blue-50/80 p-2.5 rounded-lg border border-blue-200">
                <span className="text-xs font-semibold text-blue-900">
                  ⚡ Demo Shortcut: Simulate Priya Sharma's Slack Reply
                </span>
                <button
                  onClick={handleQuickPreset}
                  className="px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  Send Standard Response
                </button>
              </div>
            )}

            <form onSubmit={handleSendCustom} className="flex gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type a natural manager reply (e.g. 'MacBook please. He needs GitHub and Figma access. No Jira...')"
                className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Event Timeline & Requirement Extraction Summary (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Event Timeline Box */}
          <div className="fw-card p-5 bg-white space-y-4">
            <h3 className="font-bold text-slate-900 text-sm flex items-center justify-between border-b border-slate-200/80 pb-3">
              <span>Autonomous Intervention Timeline</span>
              <span className="text-xs text-blue-600 font-semibold">Live Events</span>
            </h3>

            <div className="space-y-3 text-xs relative pl-4 border-l-2 border-slate-200 ml-2">
              <div className="relative">
                <span className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-50" />
                <p className="font-bold text-slate-900">10:42 AM • Workflow Bottleneck Detected</p>
                <p className="text-slate-500 text-[11px]">Rahul Kumar onboarding input missing &gt; 26 hours.</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-50" />
                <p className="font-bold text-slate-900">10:42 AM • Manager Identified</p>
                <p className="text-slate-500 text-[11px]">Priya Sharma identified as hiring manager via Entra ID hierarchy.</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-blue-50" />
                <p className="font-bold text-slate-900">10:43 AM • Conversational Outreach Initiated</p>
                <p className="text-slate-500 text-[11px]">Active Nudge contacted manager on Slack with contextual nudge.</p>
              </div>

              {hasExtracted && (
                <div className="relative animate-fade-in">
                  <span className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-indigo-600 ring-4 ring-indigo-50" />
                  <p className="font-bold text-slate-900">10:45 AM • Requirements Extracted</p>
                  <p className="text-slate-500 text-[11px]">4 structured requirements extracted from natural language.</p>
                </div>
              )}
            </div>
          </div>

          {/* Requirement Extraction Summary Box */}
          <div className="fw-card p-5 bg-white space-y-4 border-2 border-blue-500/20">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  Structured Requirements Extracted
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Confidence metrics &amp; field mappings</p>
              </div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${hasExtracted ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'}`}>
                {hasExtracted ? '4 Extracted' : 'Awaiting Reply'}
              </span>
            </div>

            {hasExtracted ? (
              <div className="space-y-4">
                <div className="space-y-2.5">
                  {requirements.map((req) => (
                    <div key={req.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{req.icon}</span>
                        <div>
                          <p className="font-bold text-slate-900">{req.title}</p>
                          <p className="text-slate-700 font-extrabold text-xs">{req.value}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          req.status === 'escalated' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {Math.round(req.confidence * 100)}% Confident
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Primary Execute CTA */}
                <div className="pt-2 space-y-2">
                  <button
                    onClick={executeActions}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-md shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
                  >
                    <Zap className="w-4 h-4 fill-current" />
                    <span>Execute Actions</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-500 font-medium">
                    This triggers Orchestrator Agent to update Freshservice &amp; dispatch provisioning.
                  </p>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center space-y-2 text-slate-400 text-xs">
                <Clock className="w-8 h-8 mx-auto text-slate-300 animate-pulse" />
                <p className="font-semibold text-slate-600">Waiting for Priya Sharma to respond...</p>
                <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                  Once the manager replies naturally in chat, Active Nudge will parse the requirements instantly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
