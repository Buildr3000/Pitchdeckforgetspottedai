import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { Bot, EyeOff, Coins } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionBadge } from '../SectionBadge';

export function ProblemSlide() {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full justify-center">
        <SectionBadge label="Contexte" />
        <h2 className="text-3xl md:text-5xl font-['IBM_Plex_Mono',monospace] font-bold mb-10 text-[#564256] text-left leading-tight">
          Le SEO traditionnel ne <span className="text-[#fc814a]">suffit plus</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Bot className="w-6 h-6 text-[#fc814a]" />,
              title: "La fin du modèle Google",
              desc: "Les utilisateurs basculent vers les modèles d'IA générative pour obtenir des réponses immédiates (ChatGPT, Perplexity).",
              data: "2,5 Md",
              dataLabel: "de requêtes ChatGPT"
            },
            {
              icon: <EyeOff className="w-6 h-6 text-[#fc814a]" />,
              title: "L'invisibilité algorithmique",
              desc: "Le SEO technique ne suffit plus. Si vous n'êtes pas cité dans les 'Sources IA' retenues par les LLMs, vous disparaissez du parcours client.",
              data: "60%",
              dataLabel: "de zero click search"
            },
            {
              icon: <Coins className="w-6 h-6 text-[#fc814a]" />,
              title: "Le paradoxe des éditeurs & médias",
              desc: "Pillés pour entraîner les modèles, les éditeurs perdent leur audience directe mais deviennent la matière première indispensable des LLMs.",
              data: "70%",
              dataLabel: "de dépendance à la data web"
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-white border border-[rgba(252,129,74,0.13)] p-6 rounded-[14px] shadow-[0px_4px_20px_0px_rgba(252,129,74,0.08)] hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="bg-[#fc814a]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-['IBM_Plex_Mono',monospace] font-bold text-[#564256] mb-2">{item.title}</h3>
              <p className="text-sm font-['Inter',sans-serif] text-[#5f5c63] font-light leading-relaxed mb-6 flex-1">{item.desc}</p>
              
              <div className="pt-4 border-t border-gray-100 mt-auto">
                 <div className="text-3xl font-['IBM_Plex_Mono',monospace] font-bold text-[#fc814a] mb-1">{item.data}</div>
                 <div className="text-xs font-['IBM_Plex_Mono',monospace] text-[#5f5c63] uppercase tracking-wide font-medium">{item.dataLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sources */}
        <div className="mt-8 pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[10px] font-['IBM_Plex_Mono',monospace] text-[#5f5c63]/60">
            <span>Sources :</span>
            <span>OpenAI</span>
            <span>SparkToro / Datos</span>
            <span>Reuters Institute</span>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
