import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { motion } from 'motion/react';
import { Repeat, ShoppingBag, ShieldCheck } from 'lucide-react';
import { SectionBadge } from '../SectionBadge';

export function BusinessModelSlide() {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full justify-center">
        <SectionBadge label="Business model" />
        <h2 className="text-3xl md:text-5xl font-['IBM_Plex_Mono',monospace] font-bold mb-10 text-[#564256] text-left leading-tight">
          Un business model aligné sur la <span className="text-[#fc814a]">création de valeur</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vente & Location */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-[rgba(252,129,74,0.13)] p-8 rounded-[24px] shadow-[0px_4px_20px_0px_rgba(252,129,74,0.08)] flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
                <div className="flex gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#fc814a]/10 flex items-center justify-center border-2 border-white z-10">
                        <ShoppingBag className="w-6 h-6 text-[#fc814a]" />
                    </div>
                    <div className="w-14 h-14 rounded-full bg-[#fc814a]/10 flex items-center justify-center border-2 border-white">
                        <Repeat className="w-6 h-6 text-[#fc814a]" />
                    </div>
                </div>
                <h3 className="font-['IBM_Plex_Mono',monospace] text-2xl text-[#564256] font-bold mb-3">Vente & Location</h3>
                <p className="text-base text-[#5f5c63] font-light mb-8 max-w-sm">Achat de mention à vie ou visibilité temporaire sur des pages à fort trafic.</p>
                
                <div className="w-full bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="text-xs text-[#5f5c63] uppercase tracking-wider font-bold mb-2">Commission</div>
                    <div className="text-4xl font-['IBM_Plex_Mono',monospace] font-bold text-[#fc814a]">25%</div>
                    <div className="text-xs text-[#5f5c63]/70 mt-2 uppercase font-bold tracking-wide">One-shot ou Récurrent</div>
                </div>
            </motion.div>

            {/* Tiers de Confiance */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-[rgba(252,129,74,0.13)] p-8 rounded-[24px] shadow-[0px_4px_20px_0px_rgba(252,129,74,0.08)] flex flex-col items-center text-center hover:shadow-lg transition-shadow text-[#564256]"
            >
                <div className="w-14 h-14 rounded-full bg-[#fc814a]/10 flex items-center justify-center border-2 border-white z-10 mb-6 shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-[#fc814a]" />
                </div>
                <h3 className="font-['IBM_Plex_Mono',monospace] text-2xl text-[#564256] font-bold mb-3">Tiers de confiance</h3>
                <p className="text-base text-[#5f5c63] font-light mb-8 max-w-sm">Sécurisation des transactions et garantie de publication.</p>
                
                <div className="w-full bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="text-xs text-[#5f5c63] uppercase tracking-wider font-bold mb-2">Service</div>
                    <div className="text-4xl font-['IBM_Plex_Mono',monospace] font-bold text-[#fc814a]">Inclus</div>
                    <div className="text-xs text-[#5f5c63]/70 mt-2 uppercase font-bold tracking-wide">Platform</div>
                </div>
            </motion.div>
        </div>
      </div>
    </SlideContainer>
  );
}
