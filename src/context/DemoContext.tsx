import React, { createContext, useContext, useState, useEffect } from 'react';
import { ActiveTab, OnboardingStatus, ExtractedRequirement } from '../types';
import { primaryOnboarding, defaultRequirementsExtracted, demoSteps } from '../mock/data';

interface DemoContextType {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onboardingState: OnboardingStatus;
  setOnboardingState: (state: OnboardingStatus) => void;
  demoModeActive: boolean;
  setDemoModeActive: (active: boolean) => void;
  currentDemoStep: number;
  setCurrentDemoStep: (step: number) => void;
  nextDemoStep: () => void;
  prevDemoStep: () => void;
  restartDemo: () => void;
  
  // Interactive conversation & extraction state
  chatMessages: ChatMessageItem[];
  isThinking: boolean;
  requirements: ExtractedRequirement[];
  isEscalatedMode: boolean;
  setIsEscalatedMode: (escalated: boolean) => void;

  // Actions
  startIntervention: () => void;
  simulateManagerResponse: (customText?: string) => void;
  executeActions: () => void;
  resetPrototype: () => void;
}

export interface ChatMessageItem {
  id: string;
  sender: 'ai' | 'manager' | 'system';
  senderName: string;
  avatar?: string;
  text: string;
  timestamp: string;
  requirements?: ExtractedRequirement[];
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [onboardingState, setOnboardingState] = useState<OnboardingStatus>('stalled');
  const [demoModeActive, setDemoModeActive] = useState<boolean>(false);
  const [currentDemoStep, setCurrentDemoStep] = useState<number>(1);
  const [isEscalatedMode, setIsEscalatedMode] = useState<boolean>(false);
  
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [requirements, setRequirements] = useState<ExtractedRequirement[]>([]);

  const [chatMessages, setChatMessages] = useState<ChatMessageItem[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      senderName: 'Active Nudge AI',
      text: `Hi Priya 👋\n\nRahul Kumar joins the Engineering team in 3 days, but his onboarding is currently waiting for your input.\n\nI just need two things:\n• Laptop preference\n• Required software and development access\n\nYou can reply naturally — I'll handle the rest.`,
      timestamp: '10:43 AM'
    }
  ]);

  // Sync tab with demo step when demo mode is active
  useEffect(() => {
    if (demoModeActive) {
      const step = demoSteps.find(s => s.stepNumber === currentDemoStep);
      if (step) {
        setActiveTab(step.targetTab);
      }
    }
  }, [currentDemoStep, demoModeActive]);

  const startIntervention = () => {
    setOnboardingState('intervening');
    setActiveTab('intervention');
  };

  const simulateManagerResponse = (customText?: string) => {
    const text = customText || "MacBook please. He needs GitHub and Figma access. No Jira for now.";
    
    // Add manager response
    const mgrMsg: ChatMessageItem = {
      id: `msg-${Date.now()}`,
      sender: 'manager',
      senderName: 'Priya Sharma (Hiring Manager)',
      avatar: primaryOnboarding.managerAvatar,
      text: text,
      timestamp: '10:44 AM'
    };

    setChatMessages(prev => [...prev, mgrMsg]);
    setIsThinking(true);

    // Simulate AI requirement extraction delay
    setTimeout(() => {
      setIsThinking(false);
      
      let reqs = defaultRequirementsExtracted;
      if (isEscalatedMode) {
        reqs = defaultRequirementsExtracted.map(r => 
          r.category === 'figma' 
            ? { ...r, status: 'escalated', note: 'Figma enterprise seats exhausted. Escalating license request to IT Admin.' }
            : r
        );
      }
      setRequirements(reqs);

      const aiReply: ChatMessageItem = {
        id: `msg-${Date.now() + 1}`,
        sender: 'ai',
        senderName: 'Active Nudge AI',
        text: `Got it. I understood:`,
        timestamp: '10:45 AM',
        requirements: reqs
      };

      const aiFollowUp: ChatMessageItem = {
        id: `msg-${Date.now() + 2}`,
        sender: 'ai',
        senderName: 'Active Nudge AI',
        text: `I've captured the requirements. I'll update Rahul's onboarding workflow and trigger the required provisioning actions.`,
        timestamp: '10:45 AM'
      };

      setChatMessages(prev => [...prev, aiReply, aiFollowUp]);
    }, 1800);
  };

  const executeActions = () => {
    setOnboardingState('executing');
    setActiveTab('orchestration');

    // After orchestration simulation, navigate to resolved state
    setTimeout(() => {
      setOnboardingState('resolved');
      if (demoModeActive && currentDemoStep === 4) {
        setCurrentDemoStep(5);
      }
    }, 3800);
  };

  const nextDemoStep = () => {
    if (currentDemoStep < demoSteps.length) {
      const nextStep = currentDemoStep + 1;
      setCurrentDemoStep(nextStep);
      
      // Execute state transitions based on demo step
      if (nextStep === 2 && onboardingState === 'stalled') {
        startIntervention();
      } else if (nextStep === 3 && chatMessages.length === 1) {
        simulateManagerResponse();
      } else if (nextStep === 4 && onboardingState !== 'executing') {
        executeActions();
      } else if (nextStep === 5) {
        setOnboardingState('resolved');
        setActiveTab('resolved');
      } else if (nextStep === 6) {
        setActiveTab('agent_studio');
      }
    }
  };

  const prevDemoStep = () => {
    if (currentDemoStep > 1) {
      setCurrentDemoStep(currentDemoStep - 1);
    }
  };

  const restartDemo = () => {
    resetPrototype();
    setDemoModeActive(true);
    setCurrentDemoStep(1);
    setActiveTab('overview');
  };

  const resetPrototype = () => {
    setOnboardingState('stalled');
    setActiveTab('overview');
    setIsEscalatedMode(false);
    setIsThinking(false);
    setRequirements([]);
    setChatMessages([
      {
        id: 'msg-1',
        sender: 'ai',
        senderName: 'Active Nudge AI',
        text: `Hi Priya 👋\n\nRahul Kumar joins the Engineering team in 3 days, but his onboarding is currently waiting for your input.\n\nI just need two things:\n• Laptop preference\n• Required software and development access\n\nYou can reply naturally — I'll handle the rest.`,
        timestamp: '10:43 AM'
      }
    ]);
  };

  return (
    <DemoContext.Provider
      value={{
        activeTab,
        setActiveTab,
        onboardingState,
        setOnboardingState,
        demoModeActive,
        setDemoModeActive,
        currentDemoStep,
        setCurrentDemoStep,
        nextDemoStep,
        prevDemoStep,
        restartDemo,
        chatMessages,
        isThinking,
        requirements,
        isEscalatedMode,
        setIsEscalatedMode,
        startIntervention,
        simulateManagerResponse,
        executeActions,
        resetPrototype
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
};
