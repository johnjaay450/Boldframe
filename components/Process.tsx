import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We dive deep into your data, auditing past performance, creative assets, and funnel metrics to identify the biggest opportunities for scale."
  },
  {
    num: "02",
    title: "Strategic Roadmap",
    desc: "We build a custom growth strategy tailored to your unit economics, defining clear KPIs, creative angles, and testing protocols."
  },
  {
    num: "03",
    title: "Creative Production",
    desc: "Our creative team produces high-converting UGC, static, and motion assets designed to stop the scroll and drive action."
  },
  {
    num: "04",
    title: "Scale & Optimize",
    desc: "We launch, test, and aggressively scale winning campaigns while constantly iterating on creative to combat fatigue."
  }
];

const Visualizer: React.FC<{ index: number }> = ({ index }) => {
  switch (index) {
    case 0: // Discovery & Audit - Scanning Grid
      return (
        <div className="absolute inset-0 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-700">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #003A76 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <motion.div 
            animate={{ y: ['0%', '100%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bold-acid to-transparent shadow-[0_0_15px_#00E5FF]"
          />
        </div>
      );
    case 1: // Strategic Roadmap - Connecting Nodes
      return (
        <div className="absolute inset-0 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-700">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <motion.path
              d="M20,180 L60,140 L100,160 L140,100 L180,120"
              stroke="#00E5FF"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {[ [20,180], [60,140], [100,160], [140,100], [180,120] ].map(([cx, cy], i) => (
              <motion.circle
                key={i}
                cx={cx}
                cy={cy}
                r="4"
                fill="#00E5FF"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
            ))}
          </svg>
        </div>
      );
    case 2: // Creative Production - Floating Shapes
      return (
        <div className="absolute inset-0 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-700">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-bold-acid rounded-full"
              style={{ 
                width: Math.random() * 40 + 10, 
                height: Math.random() * 40 + 10,
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
                filter: 'blur(10px)'
              }}
              animate={{ 
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 5 + Math.random() * 5, repeat: Infinity }}
            />
          ))}
        </div>
      );
    case 3: // Scale & Optimize - Expanding Rings
      return (
        <div className="absolute inset-0 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-700 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-bold-acid rounded-full"
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{ width: '200%', height: '200%', opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
            />
          ))}
        </div>
      );
    default:
      return null;
  }
};

const ProcessCard: React.FC<{ step: typeof steps[0]; index: number }> = ({ step, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group h-full"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-200 border border-white/20 group-hover:border-bold-acid/50 transition-all duration-500 rounded-2xl shadow-2xl" />
      
      {/* Abstract Visualizer */}
      <Visualizer index={index} />
      
      {/* Accent Corner */}
      <div className="absolute top-0 left-0 w-12 h-[3px] bg-bold-black/10 group-hover:bg-bold-acid transition-colors duration-500 rounded-full" />
      <div className="absolute top-0 left-0 w-[3px] h-12 bg-bold-black/10 group-hover:bg-bold-acid transition-colors duration-500 rounded-full" />
      
      <div className="relative z-10 p-8 pt-12 flex flex-col h-full">
        {/* Vertical Step Indicator - Removed PHASE text as requested */}
        <div className="absolute top-0 right-6 flex flex-col items-center">
            <div className="h-16 w-[1px] bg-gradient-to-b from-bold-black/20 to-transparent" />
        </div>

        {/* Oversized Background Number */}
        <div className="absolute -left-2 top-0 pointer-events-none select-none overflow-hidden">
            <motion.span 
                style={{ transform: "translateZ(-20px)" }}
                className="text-[11rem] font-display font-black text-transparent stroke-bold-black/5 stroke-1 opacity-10 group-hover:opacity-20 transition-opacity duration-700 leading-none block"
            >
                {step.num}
            </motion.span>
        </div>
        
        <div style={{ transform: "translateZ(40px)" }} className="mt-auto relative">
            <h3 className="text-2xl font-display font-black mb-4 uppercase tracking-tighter text-bold-black group-hover:text-bold-purple transition-colors duration-300 leading-tight">
                {step.title}
            </h3>
            <div className="h-[2px] w-8 bg-bold-acid mb-6 group-hover:w-16 transition-all duration-700" />
            <p className="text-bold-gray text-sm leading-relaxed font-medium max-w-[85%] group-hover:text-bold-black transition-colors">
                {step.desc}
            </p>
        </div>
      </div>

      {/* Subtle Outer Glow on Hover */}
      <div className="absolute -inset-2 bg-bold-acid/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10" />
    </motion.div>
  );
};

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="process" ref={containerRef} className="py-24 bg-bold-black text-white relative overflow-hidden perspective-2000">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            style={{ 
                y: useTransform(scrollYProgress, [0, 1], [0, -200]),
                rotate: useTransform(scrollYProgress, [0, 1], [0, 45])
            }}
            className="absolute top-20 -right-20 w-96 h-96 bg-bold-acid/5 rounded-full blur-[100px]"
          />
          <motion.div 
            style={{ 
                y: useTransform(scrollYProgress, [0, 1], [0, 300]),
                rotate: useTransform(scrollYProgress, [0, 1], [0, -30])
            }}
            className="absolute bottom-20 -left-20 w-[500px] h-[500px] bg-bold-purple/5 rounded-full blur-[120px]"
          />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
           <motion.span 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-bold-acid font-bold text-xs tracking-[0.3em] uppercase mb-6 block"
           >
             The Bold Methodology
           </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-display font-black tracking-tighter mb-8 uppercase leading-[0.9]"
          >
            THE SCALING <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bold-acid via-white to-white/20">FRAMEWORK</span>
          </motion.h2>
          
          {/* Animated Progress Path */}
          <div className="max-w-4xl mx-auto h-[2px] bg-white/5 relative mt-16 overflow-hidden rounded-full">
             <motion.div 
                style={{ scaleX: pathLength }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-bold-acid to-transparent origin-left"
             />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 preserve-3d">
          {steps.map((step, i) => (
            <div key={i} className="relative group/step">
              <ProcessCard step={step} index={i} />

              {i < 3 && (
                <>
                  {/* Desktop Arrow */}
                  <div className="hidden lg:block absolute top-1/2 -right-8 translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      initial={{ rotate: 180 }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id={`arrow-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00E5FF" />
                            <stop offset="50%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
                          </linearGradient>
                        </defs>
                        <polygon points="0,30 44,5 44,55" fill={`url(#arrow-grad-${i})`} />
                        <polygon points="36,2 80,30 36,58" fill={`url(#arrow-grad-${i})`} />
                        <circle cx="40" cy="30" r="10" fill={`url(#arrow-grad-${i})`} />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="lg:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      initial={{ rotate: 180 }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id={`arrow-grad-mobile-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#00E5FF" />
                            <stop offset="50%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
                          </linearGradient>
                        </defs>
                        <polygon points="30,0 5,44 55,44" fill={`url(#arrow-grad-mobile-${i})`} />
                        <polygon points="2,36 58,36 30,80" fill={`url(#arrow-grad-mobile-${i})`} />
                        <circle cx="30" cy="40" r="10" fill={`url(#arrow-grad-mobile-${i})`} />
                      </svg>
                    </motion.div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;