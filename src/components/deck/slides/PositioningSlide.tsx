import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { motion } from 'motion/react';
import { Search, Bot, ArrowRight, FileText, Plus } from 'lucide-react';
import { SectionBadge } from '../SectionBadge';

export function PositioningSlide() {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full justify-center">
        <SectionBadge label="Contexte" />
        <h2 className="text-3xl md:text-5xl font-['IBM_Plex_Mono',monospace] font-bold mb-8 text-[#564256] text-left leading-tight">
          Une approche fondamentalement <span className="text-[#fc814a]">différente</span>
        </h2>

        <p className="text-[#5f5c63] font-['Inter',sans-serif] font-light text-left w-full mb-8 text-base md:text-lg leading-relaxed">
            Il existe une <strong className="font-bold text-[#564256]">décorrélation</strong> entre la position dans la SERP (Google) et les sources utilisées par l'IA : seuls 12 % des sources citées par ChatGPT proviennent du top 10 Google. Pour exister, il faut être dans la source.
        </p>

        {/* Visual Diagram of Decorrelation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 w-full max-w-[1284px] mx-auto">
            {/* SEO Classic Flow */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-100 rounded-xl p-6 border border-gray-200 flex flex-col items-center relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 bg-gray-200 text-gray-600 text-[10px] font-bold px-2 py-1 font-['IBM_Plex_Mono',monospace]">SEO</div>
                <div className="flex items-center gap-4 mb-4 w-full justify-center">
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-1">
                            <Search className="w-5 h-5 text-gray-400" />
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Google</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                    <div className="flex flex-col items-center">
                         <div className="w-24 h-16 bg-white border border-gray-200 rounded-md shadow-sm p-2 space-y-1">
                            <div className="h-1.5 bg-[#fc814a] w-3/4 rounded-full"></div>
                            <div className="h-1.5 bg-gray-100 w-full rounded-full"></div>
                            <div className="h-1.5 bg-gray-100 w-1/2 rounded-full"></div>
                         </div>
                         <span className="text-[10px] font-bold text-gray-400 uppercase mt-1">1. Link</span>
                    </div>
                </div>
                <p className="text-xs text-[#5f5c63] text-center font-light">Le classement (Ranking) détermine la visibilité.</p>
            </motion.div>

            {/* LLM Flow */}
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#fff7ed] rounded-xl p-6 border border-[#ffedd5] flex flex-col items-center relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 bg-[#fc814a] text-white text-[10px] font-bold px-2 py-1 font-['IBM_Plex_Mono',monospace]">AI</div>
                <div className="flex items-center gap-4 mb-4 w-full justify-center">
                     <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-white border border-[#fc814a]/30 rounded-full flex items-center justify-center mb-1">
                            <Bot className="w-5 h-5 text-[#fc814a]" />
                        </div>
                        <span className="text-[10px] font-bold text-[#fc814a] uppercase">Crawler</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#fc814a]/50" />
                    <div className="flex flex-col items-center">
                        <div className="flex gap-1 mb-1">
                             <div className="w-8 h-10 bg-white border border-[#fc814a]/30 rounded flex items-center justify-center">
                                <FileText className="w-4 h-4 text-[#fc814a]" />
                             </div>
                              <div className="w-8 h-10 bg-white border border-dashed border-gray-300 rounded flex items-center justify-center opacity-50">
                                <FileText className="w-4 h-4 text-gray-300" />
                             </div>
                        </div>
                         <span className="text-[10px] font-bold text-[#fc814a] uppercase">2. Source</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#fc814a]/50" />
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-10 bg-white border border-[#fc814a]/30 rounded-md shadow-sm p-2 flex flex-col justify-center gap-1">
                           <div className="h-1 bg-gray-100 w-full rounded-full"></div>
                           <div className="h-1 bg-[#fc814a] w-3/4 rounded-full"></div>
                        </div>
                        <span className="text-[10px] font-bold text-[#fc814a] uppercase mt-1">3. Output</span>
                   </div>
                </div>
                <p className="text-xs text-[#564256] text-center font-medium">
                  L’output dépend des occurrences de mentions de marque.
                  <span className="block">Indice de corrélation 0,664.</span>
                </p>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1284px] mx-auto">
          <div className="flex justify-center">
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm w-1/2 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-[#564256]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#564256]">SEO</span>
                  <span className="text-sm font-medium text-[#5f5c63]">On-site</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full">
            <div className="bg-[#fff7ed] border border-[#ffedd5] rounded-xl p-4 shadow-sm flex-1 flex items-center justify-center text-left">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-[#fc814a]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#fc814a]">SEO</span>
                  <span className="text-sm font-semibold text-[#fc814a]">On-site</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Plus className="w-6 h-6 text-[#fc814a]" />
            </div>

            <div className="bg-[#fff7ed] border border-[#ffedd5] rounded-xl p-4 shadow-sm flex-1 flex items-center justify-center text-left">
              <div className="flex items-center gap-3">
                <Bot className="w-5 h-5 text-[#fc814a]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#fc814a]">SEO</span>
                  <span className="text-sm font-semibold text-[#fc814a]">Off-site</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
