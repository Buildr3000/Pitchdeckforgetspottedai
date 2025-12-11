import React, { useState, useEffect } from 'react';
import { GridBackground } from './GridBackground';
import { CoverSlide } from './slides/CoverSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { PositioningSlide } from './slides/PositioningSlide';
import { ProblemDetailSlide } from './slides/ProblemDetailSlide';
import { SolutionSlide } from './slides/SolutionSlide';
import { MarketSlide } from './slides/MarketSlide';
import { KpiSlide } from './slides/KpiSlide';
import { TeamSlide } from './slides/TeamSlide';
import { BusinessModelSlide } from './slides/BusinessModelSlide';
import { OuestFranceSlide } from './slides/OuestFranceSlide';
import { CTASlide } from './slides/CTASlide';
import { ChevronRight, ChevronLeft, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatePresence } from 'motion/react';

const SLIDES = [
  CoverSlide,
  ProblemSlide,
  PositioningSlide,
  ProblemDetailSlide,
  SolutionSlide,
  MarketSlide,
  KpiSlide,
  BusinessModelSlide,
  TeamSlide,
  OuestFranceSlide,
  CTASlide
];

export function DeckPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const CurrentSlideComponent = SLIDES[currentSlide];

  const nextSlide = () => {
    if (currentSlide < SLIDES.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
          setIsFullscreen(false);
        }
      }
    } catch (err) {
      console.warn("Fullscreen toggle failed:", err);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden text-[#564256] selection:bg-[#fc814a] selection:text-white">
      {/* Dynamic Background */}
      <GridBackground />

      {/* Main Content Area */}
      <div className="absolute inset-0 flex flex-col">
        {/* Header/Progress */}
        <div className="h-16 flex items-center justify-between px-8 z-20">
            <div className="text-sm font-bold opacity-50">Getspotted.ai Pitch Deck</div>
            <div className="text-sm font-bold opacity-50">
                {currentSlide + 1} / {SLIDES.length}
            </div>
        </div>

        {/* Slide Viewport */}
        <div className="flex-1 relative overflow-hidden">
            <AnimatePresence mode="wait">
                 <CurrentSlideComponent key={currentSlide} />
            </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="h-20 flex items-center justify-between px-8 pb-4 z-20">
            <div className="flex gap-2">
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={toggleFullscreen}
                    title="Toggle Fullscreen"
                >
                    {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                </Button>
            </div>
            
            <div className="flex gap-4">
                 <Button 
                    onClick={prevSlide} 
                    disabled={currentSlide === 0}
                    variant="outline"
                    className="rounded-full w-12 h-12 p-0 border-[#564256]/20"
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button 
                    onClick={nextSlide} 
                    disabled={currentSlide === SLIDES.length - 1}
                    className="rounded-full w-12 h-12 p-0 bg-[#fc814a] hover:bg-[#e56a35] text-white"
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-[#fc814a] transition-all duration-300" 
           style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }} 
      />
    </div>
  );
}
