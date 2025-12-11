import React from 'react';
import { cn } from '../../lib/utils';

type SectionBadgeProps = {
  label: string;
  className?: string;
};

export function SectionBadge({ label, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "bg-white border border-[rgba(252,129,74,0.13)] px-3 py-1.5 rounded-[14px] shadow-sm mb-6 flex items-center gap-2 w-fit",
        className
      )}
    >
      <div className="bg-[#fc814a] w-1.5 h-1.5 rounded-[4px]" />
      <span className="font-['IBM_Plex_Mono',monospace] text-[#fc814a] text-xs">
        {label}
      </span>
    </div>
  );
}
