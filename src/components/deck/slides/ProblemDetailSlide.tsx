import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { motion } from 'motion/react';
import { Search, AlertCircle, FileQuestion, BarChart3, Coins, Layers } from 'lucide-react';
import { SectionBadge } from '../SectionBadge';

export function ProblemDetailSlide() {
  return (
    <SlideContainer
      children={
      <div className="flex flex-col h-full justify-center">
        <SectionBadge label="Problème" />
        <h2 className="text-3xl md:text-5xl font-['IBM_Plex_Mono',monospace] font-bold mb-10 text-[#564256] text-left leading-tight">
          Deux besoins, <span className="text-[#fc814a]">aucun pont</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start p-3 md:p-5">
          {/* Colonne Annonceur */}
          <div className="space-y-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm w-full md:max-w-xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-6 bg-[#fc814a] rounded-full"></div>
              <span className="font-['IBM_Plex_Mono',monospace] text-base font-bold text-[#564256] uppercase tracking-wider">Annonceur</span>
            </div>
            <div className="space-y-3">
              {[
                { text: "Que faire une fois le site optimisé SEO ?", icon: <FileQuestion className="w-4 h-4 text-[#fc814a]" /> },
                { text: "Quelle source influence ChatGPT ?", icon: <Search className="w-4 h-4 text-[#fc814a]" /> },
                { text: "Comment contacter les bons éditeurs ?", icon: <AlertCircle className="w-4 h-4 text-[#fc814a]" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-3 py-2 rounded-xl">
                  <div className="bg-[#fc814a]/10 p-1.5 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="font-['IBM_Plex_Mono',monospace] text-[#564256] text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne Éditeur */}
          <div className="space-y-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm w-full md:max-w-xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-6 bg-[#fc814a] rounded-full"></div>
              <span className="font-['IBM_Plex_Mono',monospace] text-base font-bold text-[#564256] uppercase tracking-wider">Éditeur</span>
            </div>
            <div className="space-y-3">
              {[
                { text: "Comment démontrer que mon site est une source pour les IA ?", icon: <BarChart3 className="w-4 h-4 text-[#fc814a]" /> },
                { text: "Comment monétiser ce levier de distribution ?", icon: <Coins className="w-4 h-4 text-[#fc814a]" /> },
                { text: "Comment gérer ça de manière scalable ?", icon: <Layers className="w-4 h-4 text-[#fc814a]" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-3 py-2 rounded-xl">
                  <div className="bg-[#fc814a]/10 p-1.5 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="font-['IBM_Plex_Mono',monospace] text-[#564256] text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      }
    />
  );
}
