import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { motion } from 'motion/react';
import { Mail, Globe } from 'lucide-react';
import { SectionBadge } from '../SectionBadge';

export function CTASlide() {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full justify-center items-center text-center">
        <SectionBadge label="Contact" className="mx-auto" />
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-3xl md:text-5xl font-['IBM_Plex_Mono',monospace] font-bold mb-8 text-[#564256]"
        >
            Développons la première régie <span className="text-[#fc814a]">GEO</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-['Inter',sans-serif] text-[#5f5c63] text-lg md:text-xl mb-12 w-full font-light leading-relaxed"
        >
            Le Search a changé. Le modèle publicitaire aussi.<br/>
            Construisons ensemble le standard de demain.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm"
        >
            <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 bg-[#fc814a]/10 rounded-full flex items-center justify-center mx-auto mb-3 text-[#fc814a] group-hover:bg-[#fc814a] group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-[#564256] mb-1">Email</div>
                <a href="mailto:alexis@getspotted.ai" className="font-['IBM_Plex_Mono',monospace] text-lg text-[#5f5c63] group-hover:text-[#fc814a] transition-colors">alexis@getspotted.ai</a>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
            <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 bg-[#fc814a]/10 rounded-full flex items-center justify-center mx-auto mb-3 text-[#fc814a] group-hover:bg-[#fc814a] group-hover:text-white transition-colors">
                    <Globe className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-[#564256] mb-1">Site Web</div>
                <a href="https://getspotted.ai" target="_blank" rel="noreferrer" className="font-['IBM_Plex_Mono',monospace] text-lg text-[#5f5c63] group-hover:text-[#fc814a] transition-colors">getspotted.ai</a>
            </div>
        </motion.div>

      </div>
    </SlideContainer>
  );
}
