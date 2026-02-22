import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  {
    year: "2022",
    title: "Foundation",
    subtitle: "Started Performance Marketing",
    description: "Launched with a singular focus on algorithmic media buying and data-driven creative testing strategies.",
  },
  {
    year: "2023",
    title: "Evolution",
    subtitle: "Expanded to Shopify Growth Systems",
    description: "Integrated full-stack development and Conversion Rate Optimization (CRO) to control the entire funnel.",
  },
  {
    year: "2024",
    title: "Scale",
    subtitle: "Scaled Brands Internationally",
    description: "Successfully launched multiple partner brands into European and APAC markets, navigating complex logistics and localization.",
  },
  {
    year: "2025",
    title: "Dominance",
    subtitle: "Generated $100M+ Client Revenue",
    description: "Surpassed nine figures in verified client revenue generation, cementing our status as a premier growth partner.",
  }
];

const TimelineItem: React.FC<{ item: typeof milestones[0]; index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [isEven ? 100 : -100, 0]);

  return (
    <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mb-24 last:mb-0">
      {/* Year & Label */}
      <div className={`flex flex-col ${isEven ? 'lg:items-end lg:pr-16 lg:text-right' : 'lg:order-2 lg:items-start lg:pl-16 lg:text-left'}`}>
        <motion.div style={{ opacity, x }} className="relative">
           <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-bold-acid mb-2 block">{item.title}</span>
           <h3 className="text-6xl md:text-8xl font-display font-black text-bold-black tracking-tighter leading-none mb-4">
              {item.year}
           </h3>
        </motion.div>
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-center ${isEven ? 'lg:pl-16' : 'lg:order-1 lg:pr-16 lg:text-right'}`}>
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-sm"
        >
            <h4 className="text-xl font-display font-bold text-bold-black mb-3 uppercase tracking-tight">{item.subtitle}</h4>
            <p className="text-bold-gray font-medium leading-relaxed text-base">
                {item.description}
            </p>
            <div className={`mt-6 flex items-center gap-3 ${isEven ? '' : 'justify-end'}`}>
               <div className="w-8 h-[1px] bg-bold-black/10"></div>
               <span className="font-mono text-[9px] text-bold-gray uppercase tracking-widest">LOG_ENTRY_{index + 1}</span>
            </div>
        </motion.div>
      </div>

      {/* Central Node - Minimalist */}
      <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col items-center">
         <div className="w-[1px] h-full bg-bold-black/5 relative">
            <motion.div 
               style={{ scaleY: scrollYProgress }}
               className="absolute top-0 left-0 w-full h-full bg-bold-acid origin-top"
            />
         </div>
         <div className="w-3 h-3 bg-bold-black rounded-full border-2 border-white absolute top-0 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="experience" className="py-40 bg-bold-light relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-32">
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-bold-purple font-bold text-xs tracking-[0.3em] uppercase block mb-4"
            >
                Our Journey
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-6xl font-display font-black text-bold-black uppercase tracking-tighter"
            >
                Timeline of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-bold-black to-bold-gray">Evolution</span>
            </motion.h2>
        </div>

        <div ref={containerRef} className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200">
            <motion.div 
                style={{ scaleY: scrollYProgress }}
                className="w-full h-full bg-gradient-to-b from-bold-black via-bold-acid to-bold-purple origin-top"
            />
          </div>

          <div className="py-10">
            {milestones.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;