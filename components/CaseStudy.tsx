import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Target, Zap, TrendingUp } from 'lucide-react';

const CaseStudy: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-32 bg-bold-black text-white relative overflow-hidden perspective-1000">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bold-purple/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-bold-acid/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[90rem] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-2 h-2 bg-bold-acid rounded-full animate-pulse"></span>
                        <span className="text-bold-acid font-bold text-xs tracking-[0.2em] uppercase">Featured Case Study</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter mb-4 leading-none">
                        ODESSY
                    </h2>
                    <p className="text-lg text-gray-400 font-medium mb-6 max-w-md">
                        Premium apparel brand scaling from stagnation to market dominance.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                        {["Fashion & Apparel", "Meta Ads", "4 Months"].map((tag) => (
                            <span key={tag} className="border border-white/10 bg-white/5 text-gray-400 text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-6 mb-10">
                        <div className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                             <div className="p-2 bg-red-500/10 rounded-xl border border-red-500/20 group-hover:border-red-500/50 transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500">
                                   <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                                   <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                   <rect x="11" y="11" width="2" height="2" fill="currentColor" />
                                </svg>
                             </div>
                             <div>
                                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 group-hover:text-gray-300 transition-colors">The Problem</h4>
                                 <p className="text-base font-bold text-gray-200">Low sales volume & creative fatigue.</p>
                             </div>
                        </div>

                         <div className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                             <div className="p-2 bg-bold-acid/10 rounded-xl border border-bold-acid/20 group-hover:border-bold-acid/50 transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-bold-acid">
                                   <path d="M12 2L12 22M2 12L22 12" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                                   <path d="M12 6L18 12L12 18L6 12L12 6Z" stroke="currentColor" strokeWidth="2" />
                                   <circle cx="12" cy="12" r="2" fill="currentColor" />
                                </svg>
                             </div>
                             <div>
                                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 group-hover:text-gray-300 transition-colors">The Strategy</h4>
                                 <p className="text-base font-bold text-gray-200">Aggressive creative testing & funnel optimization.</p>
                             </div>
                        </div>

                        <div className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                             <div className="p-2 bg-green-500/10 rounded-xl border border-green-500/20 group-hover:border-green-500/50 transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
                                   <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                                   <path d="M12 4L12 20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                                   <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                             </div>
                             <div>
                                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 group-hover:text-gray-300 transition-colors">The Result</h4>
                                 <p className="text-base font-bold text-gray-200">940% revenue increase — from Rs. 500k/mo to Rs. 5M/mo in 4 months.</p>
                             </div>
                        </div>
                    </div>

                    <a href="#work" className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-bold-black font-display font-bold uppercase tracking-widest rounded-xl hover:bg-bold-acid hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-bold-acid/20 text-[10px]">
                        <span>View Portfolio</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                    </a>

                    <p className="text-gray-600 text-[9px] mt-6">
                        * Results are client-specific and not guaranteed.
                    </p>
                </motion.div>

                {/* 3D Visual Card */}
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="relative mt-12 lg:mt-0"
                >
                    <div className="absolute inset-0 bg-bold-acid/20 blur-[60px] rounded-full -z-10 transform translate-y-10" />
                    
                    <div 
                        className="relative z-10 bg-gray-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl overflow-visible"
                        style={{ transform: "translateZ(20px)" }}
                    >
                        <div className="relative z-20">
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Monthly Revenue</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter">Rs. 5M</span>
                                        <span className="text-green-400 font-bold flex items-center gap-1 bg-green-400/10 px-2 py-1 rounded-lg text-[10px]">
                                            <TrendingUp className="w-2 h-2" /> +940%
                                        </span>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                                    <ArrowUpRight className="w-4 h-4 text-bold-acid" />
                                </div>
                            </div>

                            {/* Main Result Big Stat */}
                            <div className="text-center py-4 relative">
                                <motion.div 
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                    className="text-[6rem] md:text-[8rem] leading-none font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5 drop-shadow-2xl"
                                >
                                    10<span className="text-bold-acid">×</span>
                                </motion.div>
                                <p className="text-base font-bold text-white uppercase tracking-widest mt-2">Sales Increase</p>
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">In Just 1 Month</p>
                            </div>

                            {/* Graph Bars */}
                            <div className="flex justify-between items-end h-32 mt-12 gap-2">
                                {[20, 35, 30, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 0.6, delay: i * 0.05 + 0.3 }}
                                        className="w-full bg-gradient-to-t from-bold-acid/5 to-bold-acid/80 rounded-t-sm relative group"
                                    >
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-bold-acid shadow-[0_0_10px_#00E5FF]"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Floating Element - ROAS */}
                    <motion.div 
                        animate={{ y: [0, -8, 0], rotate: [6, 8, 6] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-8 -right-8 bg-white text-bold-black px-6 py-4 rounded-2xl font-bold shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-[200] border-4 border-bold-black"
                        style={{ transform: "translateZ(150px) rotate(6deg)" }}
                    >
                        <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-40 mb-1">ROAS</div>
                        <div className="text-4xl font-black font-display leading-none">8.42</div>
                        <div className="absolute top-2 right-2 flex gap-1">
                            <div className="w-1 h-1 bg-bold-acid rounded-full" />
                            <div className="w-1 h-1 bg-bold-acid rounded-full opacity-50" />
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default CaseStudy;