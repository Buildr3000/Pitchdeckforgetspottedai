import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { SectionBadge } from '../SectionBadge';

export function MarketSlide() {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full justify-center">
        <SectionBadge label="Proposition de valeur" />
        <h2 className="text-3xl md:text-5xl font-['IBM_Plex_Mono',monospace] font-bold mb-10 text-[#564256] text-left leading-tight">
          Un modèle <span className="text-[#fc814a]">gagnant-gagnant</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-[rgba(232,232,232,0.5)] p-8 rounded-[24px] shadow-sm flex flex-col items-start"
            >
                <div className="bg-[#fc814a]/10 px-3 py-1 rounded-lg text-[#fc814a] text-xs font-bold mb-6">MARQUES</div>
                <h3 className="font-['IBM_Plex_Mono',monospace] text-xl font-bold text-[#564256] mb-4">Maîtrisez votre narratif IA</h3>
                <ul className="space-y-3">
                    {["Être cité dans les réponses ChatGPT/SGE", "Placer vos bénéfices clés (Brand Context)", "Émerger face à la concurrence"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-[#5f5c63] font-light">
                            <CheckCircle2 className="w-4 h-4 text-[#fc814a]" />
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#564256] p-8 rounded-[24px] shadow-xl flex flex-col items-start text-white"
            >
                <div className="bg-white/10 px-3 py-1 rounded-lg text-white text-xs font-bold mb-6">ÉDITEURS</div>
                <h3 className="font-['IBM_Plex_Mono',monospace] text-xl font-bold mb-4">Valorisez votre influence</h3>
                <ul className="space-y-3">
                    {["Monétiser le statut de 'Source de Vérité'", "Vendre une mention, pas un clic", "Créer une nouvelle source de revenus"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/80 font-light">
                            <CheckCircle2 className="w-4 h-4 text-[#fc814a]" />
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
      </div>
    </SlideContainer>
  );
}
