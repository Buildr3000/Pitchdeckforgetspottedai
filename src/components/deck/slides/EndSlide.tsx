import React from "react";
import { Slide } from "../Slide";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function EndSlide() {
  return (
    <Slide className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl md:text-7xl font-['IBM_Plex_Mono',monospace] font-bold mb-8">
            Prêt à maîtriser vos <br />
            <span className="text-[#fc814a]">mentions ?</span>
        </h2>
        
        <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
        >
            <button className="bg-[#fc814a] text-white text-xl md:text-2xl font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl hover:bg-[#e56a35] transition-all flex items-center gap-3">
                Join the Beta <ArrowRight className="w-6 h-6" />
            </button>
        </motion.div>

        <div className="mt-16 flex justify-center gap-8 opacity-60">
            <div className="flex flex-col items-center">
                <span className="text-sm uppercase tracking-widest font-bold mb-1">Email</span>
                <span className="text-lg">hello@getspotted.ai</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-sm uppercase tracking-widest font-bold mb-1">Social</span>
                <span className="text-lg">@getspotted_ai</span>
            </div>
        </div>
      </motion.div>
    </Slide>
  );
}
