import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { motion } from 'motion/react';
import { MousePointer2, Layers, Megaphone, ArrowDown } from 'lucide-react';
import { SectionBadge } from '../SectionBadge';
import ouestFranceLogo from '@/assets/ouest-france-alt.png';

export function OuestFranceSlide() {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full justify-center">
        <SectionBadge label="Cas média" />
        <h2 className="text-3xl md:text-5xl font-['IBM_Plex_Mono',monospace] font-bold mb-10 text-[#564256] text-left leading-tight">
          Une opportunité <span className="text-[#fc814a]">stratégique</span> pour <img src={ouestFranceLogo} alt="Ouest France" className="h-16 md:h-24 inline-block ml-3 align-middle" style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(95%) saturate(6000%) hue-rotate(355deg) brightness(95%) contrast(115%)' }} />
        </h2>
        
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mx-auto">
            
            {/* Left: 3 Pillars in a vertical stack for better balance */}
            <div className="flex flex-col gap-6">
                {[
                    {
                        title: "Monétisation des contenus Ouest-France Shopping",
                        desc: "Générez des revenus additionnels grâce à l'intégration de produits locaux directement dans vos articles.",
                        icon: <MousePointer2 className="w-6 h-6 text-[#fc814a]" />
                    },
                    {
                        title: "Apprentissage et test en commun",
                        desc: "Explorez ensemble de nouveaux formats publicitaires et mesurez leur performance.",
                        icon: <Layers className="w-6 h-6 text-[#fc814a]" />
                    },
                    {
                        title: "Nouvelles offres régie GEO Addity",
                        desc: "Proposez à vos annonceurs des solutions de référencement IA innovantes et différenciantes.",
                        icon: <Megaphone className="w-6 h-6 text-[#fc814a]" />
                    }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:border-[#fc814a]/30 transition-colors flex items-start gap-4"
                    >
                        <div className="bg-[#fc814a]/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="font-['IBM_Plex_Mono',monospace] text-lg font-bold text-[#564256] mb-1">{item.title}</h3>
                            {item.desc && (
                              <p className="font-['Inter',sans-serif] text-sm text-[#5f5c63] font-light leading-relaxed">
                                  {item.desc}
                              </p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Right: Visual - Proposition de valeur */}
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="hidden md:flex flex-col items-center justify-center bg-white rounded-2xl p-8 relative overflow-hidden border border-[rgba(252,129,74,0.13)] shadow-[0px_4px_20px_0px_rgba(252,129,74,0.08)]"
            >
                {/* Background dots */}
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#d0d0d0 1px, transparent 1px)', backgroundSize: '14px 14px' }} />
                
                <div className="relative z-10 w-full flex flex-col items-center gap-6">
                    {/* Équation visuelle */}
                    <div className="flex items-center justify-center gap-6">
                        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center justify-center">
                            <img src={ouestFranceLogo} className="h-12" alt="Ouest France" style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(95%) saturate(6000%) hue-rotate(355deg) brightness(95%) contrast(115%)' }} />
                        </div>
                        <span className="text-2xl text-[#564256] font-bold">+</span>
                        <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center justify-center">
                            <svg viewBox="0 0 173 204" fill="none" className="w-10 h-12">
                                <rect x="28.33" y="29.5102" width="129.845" height="146.371" fill="white"/>
                                <path d="M157.897 0H14.4433C14.4433 0 0 -9.33843e-07 0 14.4433V186.539C0 200.982 14.4433 200.982 14.4433 200.982H157.897C157.897 200.982 172.34 200.982 172.34 186.539V14.4433C172.096 -9.33843e-07 157.897 0 157.897 0ZM121.911 114.812H100.369V150.553C100.124 154.47 97.1865 157.652 93.2697 157.652H78.826C78.3364 157.652 77.8468 157.652 77.3572 157.652C73.93 156.918 71.482 153.98 71.482 150.553V114.812H49.9395C44.5538 114.567 41.3714 107.223 44.5538 103.062L80.2948 59.9763C83.2325 57.0387 87.8841 57.0387 90.8217 59.7315C90.8217 59.7315 90.8217 59.7315 91.0661 59.9763L126.807 103.062C130.724 107.223 127.297 114.567 121.911 114.812Z" fill="#FC814A"/>
                            </svg>
                        </div>
                    </div>
                    
                    {/* Flèche */}
                    <div className="flex justify-center">
                        <div className="bg-[#fc814a]/10 rounded-full p-4">
                            <ArrowDown className="w-6 h-6 text-[#fc814a]" />
                        </div>
                    </div>
                    
                    {/* Résultat - Style ProblemSlide */}
                    <div className="bg-white border border-[rgba(252,129,74,0.13)] rounded-[14px] p-5 shadow-[0px_4px_20px_0px_rgba(252,129,74,0.08)] max-w-xs w-full">
                        <div className="text-center">
                            <p className="text-xs font-['IBM_Plex_Mono',monospace] text-[#5f5c63] uppercase tracking-wide font-medium mb-2">Résultat</p>
                            <p className="text-xl font-['IBM_Plex_Mono',monospace] font-bold text-[#fc814a] leading-snug">
                                Nouvelle régie GEO
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </SlideContainer>
  );
}
