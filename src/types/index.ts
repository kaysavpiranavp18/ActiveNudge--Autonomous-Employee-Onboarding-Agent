export type OnboardingStatus = 'stalled' | 'intervening' | 'executing' | 'resolved' | 'escalated';

export type JourneyStepStatus = 'completed' | 'warning' | 'pending' | 'failed';

export interface JourneyStep {
  id: string;
  name: string;
  status: JourneyStepStatus;
  detail?: string;
}

export interface EmployeeOnboarding {
  id: string;
  name: string;
  role: string;
  department: string;
  joiningDate: string;
  managerName: string;
  managerAvatar?: string;
  status: OnboardingStatus;
  stalledReason: string;
  stalledDurationHours: number;
  progressPercentage: number;
  steps: JourneyStep[];
  requirements?: {
    laptop: { value: string; status: 'ready' | 'pending' | 'failed' };
    github: { value: string; status: 'provisioning' | 'ready' | 'failed' };
    figma: { value: string; status: 'provisioning' | 'ready' | 'failed' };
    jira: { value: string; status: 'confirmed' | 'not_required' };
  };
}

export interface ExtractedRequirement {
  id: string;
  category: 'laptop' | 'github' | 'figma' | 'jira';
  title: string;
  value: string;
  confidence: number;
  icon: string;
  status: 'ready' | 'provisioning' | 'not_required' | 'escalated';
  note?: string;
}

export interface InterventionLogItem {
  id: string;
  employeeName: string;
  role: string;
  issue: string;
  detectedDelay: string;
  actionTaken: string;
  status: 'Resolved' | 'Escalated' | 'In Progress';
  timeSaved: string;
  timestamp: string;
  category: 'Onboarding' | 'Hardware' | 'Access' | 'Manager Input';
}

export interface IntegrationItem {
  id: string;
  name: string;
  status: 'Connected in production architecture' | 'Architecture ready' | 'Prototype simulation';
  statusType: 'success' | 'warning' | 'info';
  description: string;
  category: string;
  icon: string;
}

export type ActiveTab = 
  | 'overview' 
  | 'intervention' 
  | 'orchestration' 
  | 'resolved' 
  | 'detail' 
  | 'interventions_log' 
  | 'integrations' 
  | 'agent_studio' 
  | 'analytics' 
  | 'settings';

export interface DemoStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  targetTab: ActiveTab;
  actionPrompt?: string;
  highlightCardId?: string;
}
