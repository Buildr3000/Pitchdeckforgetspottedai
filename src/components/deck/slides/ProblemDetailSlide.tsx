import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { motion } from 'motion/react';
import { Search, AlertCircle, Clock, Brain, Globe, Database, FileText } from 'lucide-react';
import { SectionBadge } from '../SectionBadge';

export function ProblemDetailSlide() {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full justify-center">
        <SectionBadge label="Détail du problème" />
        <h2 className="text-3xl md:text-5xl font-['IBM_Plex_Mono',monospace] font-bold mb-10 text-[#564256] text-left leading-tight">
          Identifier les sources est un <span className="text-[#fc814a]">défi majeur</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <p className="font-['Inter',sans-serif] font-light text-[#5f5c63] text-base md:text-lg leading-relaxed">
                    Identifier les mentions et les sources qui servent d'inputs aux LLMs est un défi majeur pour les marques aujourd'hui.
                </p>
                
                <div className="space-y-4">
                    {[
                        { 
                            text: "Quelle source influence ChatGPT ?", 
                            icon: <Search className="w-5 h-5 text-[#fc814a]" /> 
                        },
                        { 
                            text: "Comment contacter les bons éditeurs ?", 
                            icon: <AlertCircle className="w-5 h-5 text-[#fc814a]" /> 
                        },
                        { 
                            text: "Processus manuel et chronophage", 
                            icon: <Clock className="w-5 h-5 text-[#fc814a]" /> 
                        }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-xl shadow-sm"
                        >
                            <div className="bg-[#fc814a]/10 p-2 rounded-lg">
                                {item.icon}
                            </div>
                            <span className="font-['IBM_Plex_Mono',monospace] text-[#564256] font-medium">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Visual: LLM Input/Source Challenge */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative bg-[#f8f7f6] rounded-2xl border border-gray-100 shadow-inner h-80 flex items-center justify-center overflow-hidden"
            >
                {/* Background Network Pattern */}
                <div className="absolute inset-0 opacity-[0.05]" 
                    style={{ 
                        backgroundImage: 'radial-gradient(#564256 1px, transparent 1px)', 
                        backgroundSize: '20px 20px' 
                    }} 
                />

                {/* Central AI / LLM Node */}
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-100 relative">
                        <Brain className="w-10 h-10 text-[#564256]" strokeWidth={1.5} />
                        {/* Pulsing rings */}
                        <div className="absolute inset-0 bg-[#fc814a]/5 rounded-2xl animate-ping" />
                    </div>
                </div>

                {/* Input Sources Orbiting */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Source 1 - Web */}
                    <motion.div 
                        className="absolute top-1/4 left-[15%] bg-white p-2.5 rounded-xl shadow-md border border-gray-100 flex gap-2 items-center"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Globe className="w-4 h-4 text-gray-400" />
                        <div className="w-12 h-1.5 bg-gray-100 rounded-full" />
                    </motion.div>

                    {/* Source 2 - Data */}
                    <motion.div 
                        className="absolute bottom-1/4 right-[15%] bg-white p-2.5 rounded-xl shadow-md border border-gray-100 flex gap-2 items-center"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <Database className="w-4 h-4 text-gray-400" />
                        <div className="w-10 h-1.5 bg-gray-100 rounded-full" />
                    </motion.div>

                    {/* Source 3 - Article (The one being searched/unknown) */}
                    <motion.div 
                        className="absolute top-1/3 right-[10%] bg-white p-3 rounded-xl shadow-md border border-[#fc814a]/30 flex gap-2 items-center"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                        <FileText className="w-5 h-5 text-[#fc814a]" />
                        <div className="flex flex-col gap-1">
                            <div className="w-16 h-1.5 bg-gray-100 rounded-full" />
                            <div className="w-10 h-1.5 bg-gray-100 rounded-full" />
                        </div>
                        
                        {/* Question Mark Badge indicating unknown source status */}
                        <div className="absolute -top-2 -right-2 bg-[#fc814a] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shadow-sm border-2 border-white">
                            ?
                        </div>
                    </motion.div>

                    {/* Source 4 - Another Data Point */}
                    <motion.div 
                        className="absolute bottom-[20%] left-[20%] bg-white p-2 rounded-lg shadow-sm border border-gray-100 opacity-60"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    >
                        <FileText className="w-4 h-4 text-gray-300" />
                    </motion.div>
                </div>

                {/* Connecting Lines (SVG) - Representing flow into the Black Box */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                    <path d="M120,100 C150,120 180,140 220,150" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M400,240 C350,220 300,180 260,170" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
                    {/* The highlighted path for the unknown source */}
                    <path d="M420,130 C350,140 300,150 260,150" fill="none" stroke="#fc814a" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>

                {/* Label */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
                        <Search className="w-3 h-3 text-[#564256]" />
                        <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-bold text-[#564256] uppercase tracking-wider">
                            INPUT SOURCES ?
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </SlideContainer>
  );
}
