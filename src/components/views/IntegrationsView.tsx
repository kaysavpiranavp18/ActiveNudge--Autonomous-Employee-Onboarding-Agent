import React from 'react';
import { Layers, Cpu, MessageSquare, ShieldCheck, Info, CheckCircle2, AlertTriangle } from 'lucide-react';
import { integrationItems } from '../../mock/data';

export const IntegrationsView: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Agent Integrations</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
              Ecosystem &amp; Protocol Layer
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Governed tool access and Model Context Protocol schema bindings for Active Nudge.
          </p>
        </div>
      </div>

      {/* Honest Prototype Notice Banner */}
      <div className="p-4 rounded-xl bg-slate-900 text-white flex items-start gap-3 text-xs shadow-md">
        <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-white text-sm">Honest Architecture Transparency</p>
          <p className="text-slate-300 leading-relaxed">
            This Stage 1 prototype simulates tool calls for demonstration. In full production, actions execution connects securely via <strong>Freshworks Agent Studio</strong> and the <strong>Model Context Protocol (MCP)</strong>.
          </p>
        </div>
      </div>

      {/* Grid of 4 Integration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrationItems.map((item) => {
          let badgeClass = 'bg-slate-100 text-slate-700 border-slate-200';
          if (item.statusType === 'success') {
            badgeClass = 'bg-emerald-50 text-emerald-800 border-emerald-200 font-bold';
          } else if (item.statusType === 'warning') {
            badgeClass = 'bg-amber-50 text-amber-800 border-amber-300 font-bold';
          } else if (item.statusType === 'info') {
            badgeClass = 'bg-blue-50 text-blue-800 border-blue-200 font-bold';
          }

          let icon = <Layers className="w-6 h-6 text-blue-600" />;
          if (item.id === 'mcp-gateway') icon = <Cpu className="w-6 h-6 text-amber-600" />;
          if (item.id === 'slack-teams') icon = <MessageSquare className="w-6 h-6 text-sky-600" />;
          if (item.id === 'entra-id') icon = <ShieldCheck className="w-6 h-6 text-indigo-600" />;

          return (
            <div key={item.id} className="fw-card p-6 bg-white space-y-4 relative">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900">{item.name}</h3>
                    <span className="text-xs text-slate-500 font-medium">{item.category}</span>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs border ${badgeClass}`}>
                  {item.status}
                </span>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {item.description}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Protocol: {item.id === 'mcp-gateway' ? 'MCP v1.0 Schema' : 'REST / Webhook'}</span>
                <span className="font-bold text-slate-700">Governance: Active</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
