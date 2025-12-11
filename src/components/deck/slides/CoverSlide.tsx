import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { motion } from 'motion/react';

export function CoverSlide() {
  return (
    <SlideContainer className="text-center">
      <div className="flex flex-col items-center justify-center h-full gap-12">
        
        {/* Figma Group 7: Badge */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white border-[1.5px] border-[rgba(252,129,74,0.2)] px-8 py-3 rounded-full shadow-[0px_4px_20px_0px_rgba(252,129,74,0.08)] flex items-center gap-3"
        >
           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="w-2 h-2 md:w-3 md:h-3">
              <circle cx="6.83847" cy="6.83847" r="6.83847" fill="#FC814A"/>
           </svg>
          <span className="font-['IBM_Plex_Mono',monospace] font-semibold text-[#fc814a] text-sm md:text-base tracking-tight">Marketplace de Mentions</span>
        </motion.div>

        {/* Figma Group 9: Logo + Title */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
             {/* Logo Icon */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 shrink-0"
             >
                <svg viewBox="0 0 173 204" fill="none" className="w-full h-full">
                     <rect x="28.33" y="29.5102" width="129.845" height="146.371" fill="white"/>
                     <path d="M157.897 0H14.4433C14.4433 0 0 -9.33843e-07 0 14.4433V186.539C0 200.982 14.4433 200.982 14.4433 200.982H157.897C157.897 200.982 172.34 200.982 172.34 186.539V14.4433C172.096 -9.33843e-07 157.897 0 157.897 0ZM121.911 114.812H100.369V150.553C100.124 154.47 97.1865 157.652 93.2697 157.652H78.826C78.3364 157.652 77.8468 157.652 77.3572 157.652C73.93 156.918 71.482 153.98 71.482 150.553V114.812H49.9395C44.5538 114.567 41.3714 107.223 44.5538 103.062L80.2948 59.9763C83.2325 57.0387 87.8841 57.0387 90.8217 59.7315C90.8217 59.7315 90.8217 59.7315 91.0661 59.9763L126.807 103.062C130.724 107.223 127.297 114.567 121.911 114.812Z" fill="#FC814A"/>
                </svg>
             </motion.div>

             {/* Text Content */}
             <div className="flex flex-col items-center md:items-start">
                 <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-['IBM_Plex_Mono',monospace] font-semibold text-[#564256] text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-center md:text-left"
                 >
                    Getspotted.ai
                 </motion.h1>

                 <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="font-['IBM_Plex_Mono',monospace] font-semibold text-[#564256] text-lg md:text-3xl text-center md:text-left mt-2 md:mt-4 max-w-4xl"
                 >
                    Votre visibilité à l'ère du <span className="text-[#fc814a]">SEO & de l'IA</span>
                 </motion.p>
             </div>
        </div>

      </div>
    </SlideContainer>
  );
}
