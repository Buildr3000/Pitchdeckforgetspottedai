import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import { SectionBadge } from '../SectionBadge';
import tomPhoto from '@/assets/tom-rouchy.jpg';
import alexisPhoto from '@/assets/unnamed.jpg';

export function TeamSlide() {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full justify-center">
        <SectionBadge label="Équipe" />
        <h2 className="text-3xl md:text-5xl font-['IBM_Plex_Mono',monospace] font-bold mb-10 text-[#564256] text-left leading-tight">
          Une équipe <span className="text-[#fc814a]">complémentaire</span>
        </h2>
        
        <div className="flex justify-center gap-8 md:gap-16">
            {[
                { 
                    name: "Alexis Maresca", 
                    role: "Co-Founder",
                    desc: "Expert SEO & Growth",
                    initials: "AM",
                    image: alexisPhoto
                },
                { 
                    name: "Tom Rouchy", 
                    role: "Co-Founder",
                    desc: "Tech & Product",
                    initials: "TR",
                    image: tomPhoto
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
                </motion.div>
            ))}
        </div>
      </div>
    </SlideContainer>
  );
}
