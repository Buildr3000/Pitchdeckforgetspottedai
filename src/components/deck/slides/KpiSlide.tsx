import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { motion } from 'motion/react';
import { Globe, Users, TrendingUp, Layers } from 'lucide-react';
import { SectionBadge } from '../SectionBadge';

export function KpiSlide() {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full justify-center">
        <SectionBadge label="Traction" />
        <h2 className="text-3xl md:text-5xl font-['IBM_Plex_Mono',monospace] font-bold mb-10 text-[#564256] text-left leading-tight">
          Qui <span className="text-[#fc814a]">séduit déjà</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full mx-auto">
            {[
                { 
                    value: "4 100", 
                    label: "Domaines enregistrés", 
                    sub: "sur la plateforme",
                    icon: Layers 
                },
                { 
                    value: "+100k", 
                    label: "Sites en onboarding", 
                    sub: "au niveau Européen",
                    icon: Globe 
                },
                { 
                    value: "100", 
                    label: "Annonceurs inscrits", 
                    sub: "en 3 semaines",
                    icon: Users 
                },
                { 
                    value: "2", 
                    label: "Campagnes scale-up", 
                    sub: "en cours",
                    icon: TrendingUp 
                }
            ].map((kpi, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center items-center text-center h-full"
                >
                    <kpi.icon className="w-8 h-8 text-[#fc814a] mb-3 stroke-[1.5]" />
                    
                    <div className="font-['IBM_Plex_Mono',monospace] text-4xl font-bold text-[#564256] mb-2">
                        {kpi.value}
                    </div>
                    
                    <div className="font-['IBM_Plex_Mono',monospace] text-base font-bold text-[#564256] mb-1">
                        {kpi.label}
                    </div>
                    
                    <div className="font-['Inter',sans-serif] text-xs text-[#5f5c63]">
                        {kpi.sub}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </SlideContainer>
  );
}
