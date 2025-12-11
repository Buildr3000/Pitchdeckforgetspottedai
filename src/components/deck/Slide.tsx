import React from "react";
import { cn } from "../../lib/utils";
import { GridBackground } from "./GridBackground";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

export function Slide({ children, className }: SlideProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white text-[#564256] font-mono flex flex-col items-center justify-center p-8 md:p-16">
      <GridBackground />
      <div className={cn("relative z-10 w-full max-w-6xl mx-auto h-full flex flex-col justify-center", className)}>
        {children}
      </div>
    </div>
  );
}
