import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { motion } from 'motion/react';
import { SectionBadge } from '../SectionBadge';
import spotFinderMockup from '../../../assets/spot-finder-mockup.png';
import googleLogo from '../../../assets/google-logo.png';
import chatgptLogo from '../../../assets/chatgpt-logo.png';
import geminiLogo from '../../../assets/gemini-logo.png';
import claudeLogo from '../../../assets/claude-logo.png';
import perplexityLogo from '../../../assets/perplexity-logo.png';

export function SolutionSlide() {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full justify-center">
        <SectionBadge label="La solution" />

        <h2 className="text-3xl md:text-5xl font-['IBM_Plex_Mono',monospace] font-bold mb-6 text-[#564256] text-left leading-tight">
          Une marketplace de <span className="text-[#fc814a]">mentions de marques</span>
        </h2>
        
        <p className="text-[#5f5c63] font-['Inter',sans-serif] font-light text-left w-full mb-0 text-base md:text-lg leading-relaxed">
          Identifiez les contenus sourcés par les LLMs et intégrez-y vos mentions de marque. Une solution simple pour influencer les réponses de l'IA directement à la source.
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center justify-center">
          {/* Mockup Container */}
          <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full md:w-[82%] max-w-4xl relative"
          >
              {/* Browser Window */}
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] relative z-10 h-[550px] md:h-[550px] flex items-center justify-center p-[5px] my-0">
                  <div className="flex items-center justify-center w-full h-full overflow-hidden">
                      <img 
                          src={spotFinderMockup} 
                          alt="Spot Finder - Interface de recherche GetSpotted" 
                          className="w-[60%] md:w-[55%] max-w-[60%] md:max-w-[55%] max-h-[60%] object-contain"
                      />
                  </div>
              </div>
          </motion.div>

          {/* Bandeau IA - compact, logos sur fond */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-[150px] max-w-[150px] md:w-[150px] flex flex-col gap-3 items-center text-center md:self-center"
          >
            <span className="text-sm font-semibold text-[#564256]">Compatibilité</span>

            <div className="flex flex-col items-center gap-3">
              {[ 
                { name: 'Google', logo: googleLogo },
                { name: 'GPT', logo: chatgptLogo },
              ].map((ia) => (
                <img
                  key={ia.name}
                  src={ia.logo}
                  alt={ia.name}
                  className="h-10 w-auto object-contain drop-shadow-sm"
                />
              ))}
            </div>

            <div className="flex flex-col gap-2 items-center">
              <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Bientôt dispo
              </span>
              <div className="flex flex-col items-center gap-3">
                {[
                  { name: 'Gemini', logo: geminiLogo },
                  { name: 'Claude', logo: claudeLogo },
                  { name: 'Perplexity', logo: perplexityLogo },
                ].map((ia) => (
                  <img
                    key={ia.name}
                    src={ia.logo}
                    alt={ia.name}
                    className="h-9 w-auto object-contain opacity-60"
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </SlideContainer>
  );
}
