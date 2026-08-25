import { EmployeeOnboarding, ExtractedRequirement, InterventionLogItem, IntegrationItem, DemoStep } from '../types';

export const primaryOnboarding: EmployeeOnboarding = {
  id: 'ONB-8492',
  name: 'Rahul Kumar',
  role: 'Software Engineer',
  department: 'Engineering',
  joiningDate: 'August 30, 2026',
  managerName: 'Priya Sharma',
  managerAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  status: 'stalled',
  stalledReason: 'Waiting for manager input',
  stalledDurationHours: 26,
  progressPercentage: 68,
  steps: [
    { id: '1', name: 'HR Verification', status: 'completed', detail: 'Background check & contract signed' },
    { id: '2', name: 'Employee Profile', status: 'completed', detail: 'Freshservice record created' },
    { id: '3', name: 'Identity Details', status: 'completed', detail: 'Entra ID user object initialized' },
    { id: '4', name: 'Hardware', status: 'warning', detail: 'Manager laptop preference missing' },
    { id: '5', name: 'Software Access', status: 'warning', detail: 'Development tool approvals pending' },
    { id: '6', name: 'Manager Confirmation', status: 'pending', detail: 'Sign-off required' },
  ],
  requirements: {
    laptop: { value: 'MacBook Pro 16" M3', status: 'ready' },
    github: { value: 'Engineering Team Access', status: 'provisioning' },
    figma: { value: 'Design Viewer & Dev seat', status: 'provisioning' },
    jira: { value: 'Not Requested', status: 'not_required' },
  }
};

export const sampleOnboardingsList: EmployeeOnboarding[] = [
  primaryOnboarding,
  {
    id: 'ONB-8493',
    name: 'Ananya Iyer',
    role: 'Product Designer',
    department: 'Design',
    joiningDate: 'September 02, 2026',
    managerName: 'Vikram Mehta',
    status: 'intervening',
    stalledReason: 'Hardware preference missing',
    stalledDurationHours: 19,
    progressPercentage: 72,
    steps: [
      { id: '1', name: 'HR Verification', status: 'completed' },
      { id: '2', name: 'Employee Profile', status: 'completed' },
      { id: '3', name: 'Identity Details', status: 'completed' },
      { id: '4', name: 'Hardware', status: 'warning' },
      { id: '5', name: 'Software Access', status: 'pending' },
      { id: '6', name: 'Manager Confirmation', status: 'pending' },
    ]
  },
  {
    id: 'ONB-8494',
    name: 'Arjun Patel',
    role: 'DevOps Engineer',
    department: 'Infrastructure',
    joiningDate: 'September 05, 2026',
    managerName: 'Kavita Rao',
    status: 'resolved',
    stalledReason: 'Cloud access permissions missing',
    stalledDurationHours: 11,
    progressPercentage: 100,
    steps: [
      { id: '1', name: 'HR Verification', status: 'completed' },
      { id: '2', name: 'Employee Profile', status: 'completed' },
      { id: '3', name: 'Identity Details', status: 'completed' },
      { id: '4', name: 'Hardware', status: 'completed' },
      { id: '5', name: 'Software Access', status: 'completed' },
      { id: '6', name: 'Manager Confirmation', status: 'completed' },
    ]
  },
  {
    id: 'ONB-8495',
    name: 'Sneha Reddy',
    role: 'Security Analyst',
    department: 'InfoSec',
    joiningDate: 'September 08, 2026',
    managerName: 'Rajesh Nair',
    status: 'escalated',
    stalledReason: 'Security clearance sign-off required',
    stalledDurationHours: 34,
    progressPercentage: 55,
    steps: [
      { id: '1', name: 'HR Verification', status: 'completed' },
      { id: '2', name: 'Employee Profile', status: 'completed' },
      { id: '3', name: 'Identity Details', status: 'completed' },
      { id: '4', name: 'Hardware', status: 'warning' },
      { id: '5', name: 'Software Access', status: 'failed' },
      { id: '6', name: 'Manager Confirmation', status: 'pending' },
    ]
  },
  {
    id: 'ONB-8496',
    name: 'Devanshu Shah',
    role: 'Frontend Engineer',
    department: 'Engineering',
    joiningDate: 'September 12, 2026',
    managerName: 'Priya Sharma',
    status: 'stalled',
    stalledReason: 'IDE & Github access pending',
    stalledDurationHours: 15,
    progressPercentage: 64,
    steps: [
      { id: '1', name: 'HR Verification', status: 'completed' },
      { id: '2', name: 'Employee Profile', status: 'completed' },
      { id: '3', name: 'Identity Details', status: 'completed' },
      { id: '4', name: 'Hardware', status: 'completed' },
      { id: '5', name: 'Software Access', status: 'warning' },
      { id: '6', name: 'Manager Confirmation', status: 'pending' },
    ]
  }
];

export const defaultRequirementsExtracted: ExtractedRequirement[] = [
  {
    id: 'req-1',
    category: 'laptop',
    title: 'Laptop Preference',
    value: 'MacBook Pro 16"',
    confidence: 0.98,
    icon: '💻',
    status: 'ready',
    note: 'Hardware catalog specs matched'
  },
  {
    id: 'req-2',
    category: 'github',
    title: 'GitHub Access',
    value: 'Required (Engineering Org)',
    confidence: 0.96,
    icon: '🔧',
    status: 'provisioning',
    note: 'Entra ID Group mapping triggered'
  },
  {
    id: 'req-3',
    category: 'figma',
    title: 'Figma Access',
    value: 'Required (Product Viewer)',
    confidence: 0.95,
    icon: '🎨',
    status: 'provisioning',
    note: 'SAML SSO role queued'
  },
  {
    id: 'req-4',
    category: 'jira',
    title: 'Jira Access',
    value: 'Not Required',
    confidence: 0.99,
    icon: '📋',
    status: 'not_required',
    note: 'Explicitly omitted by manager'
  }
];

export const historicalInterventions: InterventionLogItem[] = [
  {
    id: 'INT-901',
    employeeName: 'Rahul Kumar',
    role: 'Software Engineer',
    issue: 'Manager response missing',
    detectedDelay: '26h delay',
    actionTaken: 'Manager Slack outreach & requirement extraction',
    status: 'Resolved',
    timeSaved: '26h',
    timestamp: 'Today, 10:46 AM',
    category: 'Manager Input'
  },
  {
    id: 'INT-902',
    employeeName: 'Ananya Iyer',
    role: 'Product Designer',
    issue: 'Hardware selection missing',
    detectedDelay: '19h delay',
    actionTaken: 'Conversational requirement extraction',
    status: 'Resolved',
    timeSaved: '19h',
    timestamp: 'Today, 09:12 AM',
    category: 'Hardware'
  },
  {
    id: 'INT-903',
    employeeName: 'Arjun Patel',
    role: 'DevOps Engineer',
    issue: 'Software access bottleneck',
    detectedDelay: '11h delay',
    actionTaken: 'Automated policy check & provisioning trigger',
    status: 'Resolved',
    timeSaved: '11h',
    timestamp: 'Yesterday, 04:30 PM',
    category: 'Access'
  },
  {
    id: 'INT-904',
    employeeName: 'Sneha Reddy',
    role: 'Security Analyst',
    issue: 'Security clearance sign-off',
    detectedDelay: '34h delay',
    actionTaken: 'Escalated to Chief InfoSec Officer',
    status: 'Escalated',
    timeSaved: '0h',
    timestamp: 'Yesterday, 02:15 PM',
    category: 'Manager Input'
  },
  {
    id: 'INT-905',
    employeeName: 'Devanshu Shah',
    role: 'Frontend Engineer',
    issue: 'IDE license confirmation',
    detectedDelay: '15h delay',
    actionTaken: 'Manager proactive reminder & auto-approval',
    status: 'Resolved',
    timeSaved: '15h',
    timestamp: '2 days ago',
    category: 'Access'
  }
];

export const integrationItems: IntegrationItem[] = [
  {
    id: 'freshservice',
    name: 'Freshservice',
    status: 'Connected in production architecture',
    statusType: 'success',
    description: 'Onboarding Journeys, tickets, employee requests & custom fields',
    category: 'IT Service Management',
    icon: 'Layers'
  },
  {
    id: 'mcp-gateway',
    name: 'MCP Gateway',
    status: 'Architecture ready',
    statusType: 'warning',
    description: 'Governed tool access and Model Context Protocol schema bindings for agent actions',
    category: 'Protocol & Tooling Layer',
    icon: 'Cpu'
  },
  {
    id: 'slack-teams',
    name: 'Slack / Microsoft Teams',
    status: 'Prototype simulation',
    statusType: 'info',
    description: 'Conversational manager outreach and proactive natural-language chat interactions',
    category: 'Collaboration',
    icon: 'MessageSquare'
  },
  {
    id: 'entra-id',
    name: 'Entra ID (Azure AD)',
    status: 'Prototype simulation',
    statusType: 'info',
    description: 'Identity lifecycle management, security group assignments, and access provisioning',
    category: 'Identity & Access',
    icon: 'ShieldCheck'
  }
];

export const demoSteps: DemoStep[] = [
  {
    stepNumber: 1,
    title: '1. STALLED WORKFLOW DETECTED',
    subtitle: 'Active Nudge detects Rahul Kumar onboarding is stuck for 26h waiting for manager input.',
    targetTab: 'overview',
    actionPrompt: 'Click "Activate AI Intervention" on Rahul Kumar card'
  },
  {
    stepNumber: 2,
    title: '2. PROACTIVE MANAGER OUTREACH',
    subtitle: 'Active Nudge takes initiative and reaches out to Priya Sharma via Slack with context.',
    targetTab: 'intervention',
    actionPrompt: 'Observe manager reply in natural language'
  },
  {
    stepNumber: 3,
    title: '3. NATURAL LANGUAGE EXTRACTION',
    subtitle: 'Agent converts unstructured message into 4 structured requirements with high confidence.',
    targetTab: 'intervention',
    actionPrompt: 'Click "Execute Actions" button'
  },
  {
    stepNumber: 4,
    title: '4. MULTI-AGENT & MCP ORCHESTRATION',
    subtitle: 'Orchestrator Agent coordinates Communication, Extraction, and Provisioning Agents through MCP.',
    targetTab: 'orchestration',
    actionPrompt: 'Watch real-time tool execution & MCP dispatch'
  },
  {
    stepNumber: 5,
    title: '5. FRESHSERVICE WORKFLOW UNBLOCKED',
    subtitle: 'Freshservice tickets updated, hardware & access provisioned. Bottleneck resolved in 3 mins!',
    targetTab: 'resolved',
    actionPrompt: 'Review completion summary & ROI metrics'
  },
  {
    stepNumber: 6,
    title: '6. AGENT STUDIO ARCHITECTURE',
    subtitle: 'See how Active Nudge is configured in Freshworks Agent Studio as an autonomous workflow.',
    targetTab: 'agent_studio',
    actionPrompt: 'Explore the node-based workflow builder'
  }
];
