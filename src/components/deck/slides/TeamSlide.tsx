import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import { SectionBadge } from '../SectionBadge';
import tomPhoto from '@/assets/tom-rouchy.jpg';
import alexisPhoto from '@/assets/unnamed.jpg';
import linkarLogo from '@/assets/linkar-logo.png';
import combakLogo from '@/assets/combak-logo.png';

export function TeamSlide() {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full justify-center">
        <SectionBadge label="Équipe" />
        <h2 className="text-3xl md:text-5xl font-['IBM_Plex_Mono',monospace] font-bold mb-10 text-[#564256] text-left leading-tight">
          Une équipe complémentaire, <span className="text-[#fc814a]">spécialiste du SEO</span>
        </h2>
        
        <div className="flex justify-center gap-8 md:gap-16">
            {[
                { 
                    name: "Alexis Maresca", 
                    role: "Co-Founder",
                    desc: "Marketing & Sales",
                    initials: "AM",
                    image: alexisPhoto,
                    logo: linkarLogo,
                    logoClass: "h-6 w-[100px] mt-5"
                },
                { 
                    name: "Tom Rouchy", 
                    role: "Co-Founder",
                    desc: "Tech & Product",
                    initials: "TR",
                    image: tomPhoto,
                    logo: combakLogo,
                    logoClass: "h-10 w-[160px] mt-5"
                }
            ].map((member, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex flex-col items-center text-center group"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#f0f0f0] border-4 border-white shadow-[0px_10px_30px_rgba(0,0,0,0.05)] mb-6 overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                        {member.image ? (
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#f9f9f9] to-[#ececec] text-[#564256]/20 font-['IBM_Plex_Mono',monospace] text-4xl font-bold">
                                {member.initials}
                            </div>
                        )}
                    </div>
                    
                    <h3 className="font-['IBM_Plex_Mono',monospace] text-2xl font-bold text-[#564256] mb-1">
                        {member.name}
                    </h3>
                    <div className="font-['IBM_Plex_Mono',monospace] text-[#fc814a] font-medium text-sm mb-3">
                        {member.role}
                    </div>
                    <p className="font-['Inter',sans-serif] text-[#5f5c63] font-light text-sm max-w-[200px]">
                        {member.desc}
                    </p>
                    {member.logo && (
                        <img src={member.logo} alt="Logo" className={`${member.logoClass} object-contain`} />
                    )}
                </motion.div>
            ))}
        </div>
      </div>
    </SlideContainer>
  );
}
