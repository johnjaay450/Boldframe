import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  
  // Mouse movement for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xPct = e.clientX / innerWidth - 0.5;
      const yPct = e.clientY / innerHeight - 0.5;
      x.set(xPct);
      y.set(yPct);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden perspective-1000 pt-24 pb-12">
      {/* Light gradient overlay */}
      <div className="absolute inset-0 z-0 bg-bold-light" />
      
      {/* Abstract Background Shapes - Smoother float */}
      <motion.div 
        style={{ y: y1 }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-[-5%] w-[350px] h-[350px] bg-gradient-to-br from-bold-acid/20 to-bold-black/5 rounded-full blur-[80px] pointer-events-none mix-blend-multiply"
      />
      <motion.div 
        style={{ y: y2 }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-gradient-to-tr from-bold-purple/10 to-bold-acid/10 rounded-full blur-[80px] pointer-events-none mix-blend-multiply"
      />

      {/* Floating Meta Ads (Official Meta Logo) - Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.5 },
          x: { duration: 0.8, delay: 0.5 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute left-[5%] lg:left-[10%] top-[25%] hidden lg:flex flex-col items-center justify-center gap-3 p-4 bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] z-20 group hover:scale-105 transition-transform duration-300 w-32 h-32"
      >
        <div className="relative w-12 h-12">
           <svg viewBox="0 0 24 24" className="w-full h-full fill-[#0668E1]">
             <path d="M16.924 7.558c-1.702 0-3.18.932-4.924 2.895-1.744-1.963-3.222-2.895-4.924-2.895-2.906 0-5.076 2.324-5.076 5.437 0 3.113 2.17 5.437 5.076 5.437 1.702 0 3.18-.932 4.924-2.895 1.744 1.963 3.222 2.895 4.924 2.895 2.906 0 5.076-2.324 5.076-5.437 0-3.113-2.17-5.437-5.076-5.437zm0 8.448c-1.364 0-2.47-1.125-3.366-2.616l-.342-.562.342-.562c.896-1.491 2.002-2.616 3.366-2.616 1.488 0 2.696 1.349 2.696 3.011 0 1.662-1.208 3.011-2.696 3.011zm-9.848 0c-1.488 0-2.696-1.349-2.696-3.011 0-1.662 1.208-3.011 2.696-3.011 1.364 0 2.47 1.125 3.366 2.616l.342.562-.342.562c-.896 1.491-2.002 2.616-3.366 2.616z" />
           </svg>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-bold-black">Meta Ads</span>
      </motion.div>

      {/* Floating TikTok Ads - Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0, y: [0, 20, 0] }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.7 },
          x: { duration: 0.8, delay: 0.7 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute right-[5%] lg:right-[10%] top-[35%] hidden lg:flex flex-col items-center justify-center gap-3 p-4 bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] z-20 group hover:scale-105 transition-transform duration-300 w-32 h-32"
      >
        <div className="relative w-12 h-12">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-black">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-bold-black">TikTok Ads</span>
      </motion.div>

      <div className="max-w-[95%] md:max-w-[80rem] mx-auto px-6 relative z-10 w-full flex flex-col justify-center items-center h-full">
        <motion.div 
          style={{ rotateX: rotateX, rotateY: rotateY }}
          className="flex flex-col items-center text-center preserve-3d"
        >
            <motion.div
              initial={{ opacity: 0, y: 20, z: 0 }}
              animate={{ opacity: 1, y: 0, z: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-bold-black/10 bg-white/60 backdrop-blur-md shadow-sm">
                <div className="w-1.5 h-1.5 bg-bold-acid rounded-full animate-pulse"></div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-bold-black">
                  Performance Growth Agency
                </span>
              </div>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[0.9] tracking-tight mb-4 text-bold-black origin-bottom relative z-20">
              <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: "110%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  SCALING
                </motion.span>
              </div>
              <div className="overflow-hidden flex justify-center items-center gap-2 md:gap-4 flex-wrap">
                <motion.span 
                  initial={{ y: "110%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="block relative z-10"
                >
                  BRANDS
                </motion.span>
                <motion.div 
                  initial={{ width: 0, opacity: 0, scale: 0 }}
                  animate={{ width: 'auto', opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                  className="hidden md:block h-[0.6em] relative z-0"
                >
                   <div className="h-full aspect-video bg-bold-black rounded-lg flex items-center justify-center overflow-hidden relative mx-2 shadow-xl shadow-bold-black/20">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="w-[250%] h-[250%] bg-[conic-gradient(from_0deg,transparent_0deg,#00E5FF_360deg)] opacity-70 absolute"
                      />
                      <span className="relative z-10 text-white font-display text-[10px] font-bold px-2">EST. 24</span>
                   </div>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: "110%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-b from-bold-gray to-gray-300"
                >
                   LIMITLESSLY
                </motion.span>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20, z: 0 }}
              animate={{ opacity: 1, y: 0, z: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-bold-gray text-sm md:text-base max-w-lg leading-relaxed mb-6 font-medium"
            >
              We design, execute, and scale data-driven advertising campaigns that generate measurable revenue growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, z: 0 }}
              animate={{ opacity: 1, y: 0, z: 60 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 items-center"
            >
              <a 
                href="#services"
                onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group relative px-6 py-3 bg-bold-black text-white font-bold text-[10px] uppercase tracking-widest overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300 w-40 text-center shadow-lg shadow-bold-black/20"
              >
                <span className="relative z-10 group-hover:text-bold-black transition-colors duration-300">View Services</span>
                <div className="absolute inset-0 bg-bold-acid transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-[0.16,1,0.3,1]"></div>
              </a>
              <a 
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group px-6 py-3 bg-white border border-gray-200 text-bold-black font-bold text-[10px] uppercase tracking-widest hover:border-bold-black transition-all rounded-xl flex items-center justify-center gap-2 hover:scale-105 duration-300 shadow-sm w-40 text-center"
              >
                Book Audit <ArrowDownRight className="w-3 h-3 group-hover:-rotate-90 transition-transform duration-300" />
              </a>
            </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity: useTransform(scrollY, [0, 100], [1, 0]) }}
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bold-black/30 pointer-events-none"
      >
        <span className="text-[8px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-[1px] h-6 bg-bold-black/10 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-bold-black"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;