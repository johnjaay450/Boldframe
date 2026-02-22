import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "SHOPIFY", "NIKE", "ADIDAS", "GYMSHARK", "HIMS", "RITUAL", "AWAY", "CASPER"
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-[10px] font-bold uppercase text-gray-400 tracking-[0.3em]">Trusted by the world's best</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex gap-20 md:gap-32 whitespace-nowrap py-4 items-center"
        >
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <span 
              key={i} 
              className="text-4xl md:text-6xl font-display font-black text-gray-200 hover:text-black transition-all duration-500 cursor-default select-none tracking-tighter"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
      
      <div className="flex justify-center mt-12 gap-2">
         <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
         <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
         <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
      </div>
    </section>
  );
};

export default TrustedBy;