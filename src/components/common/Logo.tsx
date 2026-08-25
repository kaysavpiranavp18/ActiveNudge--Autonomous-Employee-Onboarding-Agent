import React from 'react';

interface LogoProps {
  variant?: 'full' | 'horizontal' | 'sidebar' | 'icon';
  className?: string;
  showBadge?: boolean;
}

export const ActiveNudgeLogo: React.FC<LogoProps> = ({ 
  variant = 'horizontal', 
  className = '',
  showBadge = true
}) => {
  if (variant === 'icon') {
    return (
      <img 
        src="/logo-icon-transparent.png" 
        alt="Active Nudge Icon" 
        className={`h-8 w-auto object-contain shrink-0 ${className}`}
      />
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className={`flex flex-col gap-2.5 ${className}`}>
        {/* Perfectly proportioned brand header logo */}
        <div className="flex items-center justify-start">
          <img 
            src="/logo-header-dark.png" 
            alt="Active Nudge" 
            className="h-[52px] w-auto object-contain drop-shadow-md"
          />
        </div>

        {showBadge && (
          <div className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700/80 flex items-center justify-between text-[11px] text-slate-300 shadow-xs">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Built for <strong className="text-white font-bold">Freshworks Agent Studio</strong></span>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      <img 
        src="/logo-transparent.png" 
        alt="Active Nudge — Turn stalled onboarding into action" 
        className="h-14 w-auto object-contain drop-shadow-sm"
      />
    </div>
  );
};
