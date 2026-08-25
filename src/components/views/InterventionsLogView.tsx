import React, { useState } from 'react';
import { Bot, Filter, Search, Clock, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { historicalInterventions } from '../../mock/data';
import { useDemo } from '../../context/DemoContext';

export const InterventionsLogView: React.FC = () => {
  const { startIntervention } = useDemo();
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Onboarding', 'Hardware', 'Access', 'Manager Input', 'Resolved', 'Escalated'];

  const filteredItems = historicalInterventions.filter(item => {
    const matchesCat = filterCategory === 'All' 
      ? true 
      : filterCategory === 'Resolved' || filterCategory === 'Escalated'
      ? item.status === filterCategory
      : item.category === filterCategory;

    const matchesSearch = item.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.issue.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">AI Interventions</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
              Prototype Data
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Historical audit log of autonomous bottlenecks resolved across Freshservice workflows.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
            Total Interventions: 19
          </span>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search employee or issue..."
            className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>

      {/* Interventions Data Table */}
      <div className="fw-card overflow-hidden bg-white">
        <div className="px-6 py-4 border-b border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700">Autonomous Resolution Log</span>
          <span className="text-[11px] text-slate-400">Explicitly labeled prototype scenario data</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100/80 text-[10px] uppercase font-bold text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3">Employee</th>
                <th className="px-6 py-3">Issue / Bottleneck</th>
                <th className="px-6 py-3">Detected Delay</th>
                <th className="px-6 py-3">AI Action Taken</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Time Saved</th>
                <th className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredItems.map((row) => (
                <tr 
                  key={row.id} 
                  className={`hover:bg-slate-50 transition-colors ${row.employeeName === 'Rahul Kumar' ? 'bg-blue-50/40 font-medium' : ''}`}
                >
                  <td className="px-6 py-4 font-bold text-slate-900">
                    <div>
                      <span>{row.employeeName}</span>
                      <span className="text-[10px] text-slate-400 font-normal block">{row.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-800">{row.issue}</td>
                  <td className="px-6 py-4 text-amber-700 font-bold">{row.detectedDelay}</td>
                  <td className="px-6 py-4 text-slate-600 max-w-xs">{row.actionTaken}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      row.status === 'Resolved' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-extrabold text-slate-900">{row.timeSaved}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={startIntervention}
                      className="px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-600 hover:text-white font-bold text-[11px] text-blue-700 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Review</span>
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
