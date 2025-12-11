import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { motion } from 'motion/react';
import { SectionBadge } from '../SectionBadge';

export function HowItWorksSlide() {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full justify-center">
         <SectionBadge label="Comment ça marche" className="mx-auto" />
         <h2 className="text-3xl md:text-5xl font-['IBM_Plex_Mono',monospace] font-bold mb-10 md:mb-16 text-center text-[#564256] leading-tight">Déployez votre stratégie d'influence en <span className="text-[#fc814a]">3 étapes</span></h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connecting line - Only visible on desktop */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#fc814a] to-[#564256] opacity-30 -z-10 origin-left" 
            />

            {[
                { step: "01", title: "Ciblez les sources", desc: "Identifiez les articles (comparatifs, guides) qui rankent déjà et qui servent de source de vérité aux IA sur votre secteur." },
                { step: "02", title: "Achetez la mention", desc: "Négociez l'ajout d'un bloc marque, d'un 'Coup de Cœur' ou d'une ligne dans un tableau comparatif existant." },
                { step: "03", title: "Dominez la réponse", desc: "Soyez visible pour l'acheteur humain et devenez la référence citée par ChatGPT, Gemini et Perplexity." }
            ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.2) }}
                  className="flex flex-col items-center text-center"
                >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-[#fc814a] flex items-center justify-center text-2xl md:text-3xl font-bold text-[#fc814a] shadow-lg mb-4 md:mb-6">
                        {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2 md:mb-4">{item.title}</h3>
                    <p className="text-sm md:text-base opacity-80 max-w-xs">{item.desc}</p>
                </motion.div>
            ))}
         </div>
      </div>
    </SlideContainer>
  );
}
