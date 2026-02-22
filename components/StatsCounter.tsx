import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform, animate } from 'framer-motion';

interface CountUpProps {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ to, decimals = 0, prefix = "", suffix = "", duration = 1 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  
  useEffect(() => {
    if (isInView) {
      const node = ref.current;
      if (node) {
        const controls = animate(0, to, {
          duration: duration,
          ease: "easeOut",
          onUpdate(value) {
            node.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
          },
        });
        return () => controls.stop();
      }
    }
  }, [isInView, to, decimals, prefix, suffix, duration]);

  return <span ref={ref}>0</span>;
};

const stats = [
  { number: 47, suffix: "+", label: "Brands Scaled" },
  { number: 50, prefix: "PKR ", suffix: "M+", label: "Ad Spend Managed" },
  { number: 6.4, suffix: "x", label: "Average ROAS", decimals: 1 },
  { number: 200, prefix: "PKR ", suffix: "M+", label: "Revenue Generated", decimals: 1 },
];

const StatsCounter: React.FC = () => {
  return (
    <section className="bg-white py-16 relative overflow-hidden border-y border-bold-black/5">
      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-0">
          {stats.map((stat, index) => (
            <div key={index} className="relative flex flex-col items-center text-center px-4">
              {/* Top Accent Bar - Now centered and subtle */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="h-[2px] bg-bold-acid mb-8"
              />
              
              {/* Number - Smaller and Dark Blue */}
              <div className="text-bold-black font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter">
                <CountUp 
                  to={stat.number} 
                  decimals={stat.decimals} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix} 
                />
              </div>
              
              {/* Label - Darker muted color */}
              <p className="text-bold-black/60 text-[10px] uppercase tracking-widest font-bold mt-4 max-w-[120px] leading-relaxed">
                {stat.label}
              </p>

              {/* Vertical Divider for Desktop - Subtle */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute -right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-bold-black/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
