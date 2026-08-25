import React from 'react';
import { DemoProvider, useDemo } from './context/DemoContext';
import { Sidebar } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';
import { DashboardView } from './components/views/DashboardView';
import { InterventionView } from './components/views/InterventionView';
import { OrchestrationView } from './components/views/OrchestrationView';
import { ResolvedView } from './components/views/ResolvedView';
import { OnboardingDetailView } from './components/views/OnboardingDetailView';
import { InterventionsLogView } from './components/views/InterventionsLogView';
import { IntegrationsView } from './components/views/IntegrationsView';
import { AgentStudioView } from './components/views/AgentStudioView';
import { AnalyticsView } from './components/views/AnalyticsView';
import { SettingsView } from './components/views/SettingsView';

const MainContent: React.FC = () => {
  const { activeTab } = useDemo();

  return (
    <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
      {activeTab === 'overview' && <DashboardView />}
      {activeTab === 'intervention' && <InterventionView />}
      {activeTab === 'orchestration' && <OrchestrationView />}
      {activeTab === 'resolved' && <ResolvedView />}
      {activeTab === 'detail' && <OnboardingDetailView />}
      {activeTab === 'interventions_log' && <InterventionsLogView />}
      {activeTab === 'integrations' && <IntegrationsView />}
      {activeTab === 'agent_studio' && <AgentStudioView />}
      {activeTab === 'analytics' && <AnalyticsView />}
      {activeTab === 'settings' && <SettingsView />}
    </main>
  );
};

export function App() {
  return (
    <DemoProvider>
      <div className="flex min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Topbar />
          <MainContent />
        </div>
      </div>
    </DemoProvider>
  );
}

export default App;
