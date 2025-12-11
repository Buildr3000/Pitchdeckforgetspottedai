import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { motion } from 'motion/react';
import { Search, Filter, CheckCircle } from 'lucide-react';
import { SectionBadge } from '../SectionBadge';

export function SolutionSlide() {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full justify-center">
        <SectionBadge label="La solution" />

        <h2 className="text-3xl md:text-5xl font-['IBM_Plex_Mono',monospace] font-bold mb-6 text-[#564256] text-left leading-tight">
          Une marketplace d'influence pour les&nbsp;<span className="text-[#fc814a]">IA</span>
        </h2>
        
        <p className="text-[#5f5c63] font-['Inter',sans-serif] font-light text-left max-w-2xl mb-12 text-base md:text-lg leading-relaxed">
          Identifiez les contenus sourcés par les LLMs et intégrez-y vos mentions de marque. Une solution simple pour influencer les réponses de l'IA directement à la source.
        </p>

        {/* Mockup Container */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl mx-auto relative"
        >
            {/* Foreground Window (Opportunities) */}
            <div className="bg-white flex flex-col rounded-xl overflow-hidden border border-gray-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative z-10 max-h-[230px]">
                
                {/* Browser Header */}
                <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-4 sticky top-0 z-10">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                    </div>
                    <div className="flex-1 max-w-xl mx-auto bg-gray-50 border border-gray-200 rounded-md px-4 py-1.5 text-xs text-gray-500 text-center font-['Inter'] flex items-center justify-center gap-2">
                         <span className="text-gray-400">🔒</span>
                         app.getspotted.ai/opportunities
                    </div>
                    <div className="w-16"></div>
                </div>

                <div className="p-6 flex flex-col flex-1 overflow-hidden relative">
                    {/* Search Bar */}
                    <div className="flex gap-3 mb-8">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input 
                                type="text" 
                                value="Top CRM 2025" 
                                readOnly
                                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-[#564256] text-lg font-['IBM_Plex_Mono',monospace] shadow-sm focus:outline-none ring-2 ring-[#fc814a]/20" 
                            />
                        </div>
                        <button className="bg-[#564256] text-white px-6 py-3 rounded-xl font-bold font-['IBM_Plex_Mono'] text-sm hover:bg-[#453445] transition-colors">
                            Rechercher
                        </button>
                    </div>

                    {/* Results List */}
                    <div className="space-y-3 flex-1 overflow-y-auto pb-6 mask-linear-fade">
                        <div className="flex items-center justify-between text-xs text-gray-400 px-2 uppercase font-bold tracking-wider mb-2 font-['IBM_Plex_Mono']">
                            <span>12 sources trouvées</span>
                            <span>Potentiel LLM</span>
                        </div>

                        {/* Result 1 */}
                        <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm flex items-center justify-between group hover:border-[#fc814a]/30 transition-all hover:shadow-md cursor-pointer">
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-400 font-['IBM_Plex_Mono']">TF</div>
                                <div>
                                    <div className="font-bold text-[#564256] text-base mb-0.5 font-['IBM_Plex_Mono']">TechFinder.com</div>
                                    <div className="text-sm text-[#5f5c63] font-['IBM_Plex_Mono',monospace]">Article: "10 Best CRM Software for Startups"</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-8">
                                <button className="bg-[#fc814a] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#e56a35] transition-colors font-['IBM_Plex_Mono']">
                                    Faire une proposition
                                </button>
                            </div>
                        </div>

                        {/* Result 2 */}
                        <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm flex items-center justify-between group hover:border-[#fc814a]/30 transition-all hover:shadow-md cursor-pointer">
                             <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-400 font-['IBM_Plex_Mono']">SW</div>
                                <div>
                                    <div className="font-bold text-[#564256] text-base mb-0.5 font-['IBM_Plex_Mono']">SaaSWeekly</div>
                                    <div className="text-sm text-[#5f5c63] font-['IBM_Plex_Mono',monospace]">Guide: "Marketing Tools Comparison"</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-8">
                                <button className="bg-gray-100 text-[#5f5c63] px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors font-['IBM_Plex_Mono']">
                                    Voir
                                </button>
                            </div>
                        </div>

                        {/* Result 3 */}
                        <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm flex items-center justify-between group hover:border-[#fc814a]/30 transition-all hover:shadow-md cursor-pointer">
                             <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-400 font-['IBM_Plex_Mono']">AI</div>
                                <div>
                                    <div className="font-bold text-[#564256] text-base mb-0.5 font-['IBM_Plex_Mono']">AI-Insider</div>
                                    <div className="text-sm text-[#5f5c63] font-['IBM_Plex_Mono',monospace]">Analysis: "Future of CRM Tools"</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-8">
                                <button className="bg-gray-100 text-[#5f5c63] px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors font-['IBM_Plex_Mono']">
                                    Voir
                                </button>
                            </div>
                        </div>

                        {/* Result 4 */}
                         <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm flex items-center justify-between opacity-60">
                             <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-400 font-['IBM_Plex_Mono']">GH</div>
                                <div>
                                    <div className="font-bold text-[#564256] text-base mb-0.5 font-['IBM_Plex_Mono']">GrowthHackers</div>
                                    <div className="text-sm text-[#5f5c63] font-['IBM_Plex_Mono',monospace]">Post: "Organic Growth 2025"</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-8">
                                <button className="bg-gray-50 text-gray-300 px-6 py-2.5 rounded-lg text-sm font-bold font-['IBM_Plex_Mono']" disabled>
                                    Voir
                                </button>
                            </div>
                        </div>

                    </div>
                    {/* Fade overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-20"></div>
                </div>
            </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
}
