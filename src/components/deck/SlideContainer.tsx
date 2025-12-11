import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface SlideContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export function SlideContainer({ children, className }: SlideContainerProps) {
  return (
    <div className={cn("relative w-full h-full flex flex-col overflow-y-auto p-6 md:p-12 text-[#564256]", className)}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-7xl mx-auto min-h-full flex flex-col justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
}
