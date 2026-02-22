import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, animate } from 'framer-motion';
import { TrendingUp, DollarSign, Bell, Package, ArrowUpRight } from 'lucide-react';

const ShopifyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 448 512" className={className} fill="currentColor">
    <path d="M444.17 183.19l-44.72-80c-4.4-7.88-12.75-12.81-21.78-12.81H320V64c0-35.35-28.65-64-64-64h-64c-35.35 0-64 28.65-64 64v26.38H70.33c-9.03 0-17.38 4.93-21.78 12.81l-44.72 80c-4.4 7.88-4.4 17.5 0 25.38l44.72 80c4.4 7.88 12.75 12.81 21.78 12.81h21.33v150.62c0 35.35 28.65 64 64 64h192c35.35 0 64-28.65 64-64V301.38h21.33c9.03 0 17.38-4.93 21.78-12.81l44.72-80c4.41-7.88 4.41-17.5 0-25.38zM192 64c0-17.67 14.33-32 32-32s32 14.33 32 32v26.38h-64V64zm192 387.62c0 17.67-14.33 32-32 32H160c-17.67 0-32-14.33-32-32V301.38h256v150.24zM363.33 275H84.67l-30.72-55 30.72-55h278.66l30.72 55-30.72 55z"/>
  </svg>
);

const Counter = ({ value, prefix = "", suffix = "" }: { value: any, prefix?: string, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const unsubscribe = value.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`;
      }
    });
    return () => unsubscribe();
  }, [value, prefix, suffix]);

  return <span ref={ref} />;
};

const SalesDashboard = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const salesValue = useTransform(scrollYProgress, [0, 1], [1000000, 5000000]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const barScale = useTransform(scrollYProgress, [0, 1], [0.7, 1.3]);

  return (
    <motion.div 
      style={{ scale, y }}
      className="relative h-full w-full bg-bold-black border border-white/10 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] group overflow-hidden"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-bold-acid rounded-lg flex items-center justify-center shadow-md shadow-bold-acid/20">
            <ShopifyIcon className="w-5 h-5 text-bold-black" />
          </div>
          <span className="text-xs font-bold text-white uppercase tracking-tight">Shopify Admin</span>
        </div>
        <motion.div 
          style={{ scale: barScale }}
          className="flex items-center gap-1 text-bold-black bg-bold-acid px-2 py-1 rounded-md"
        >
          <TrendingUp className="w-3 h-3" />
          <span className="text-[10px] font-bold">+12.5%</span>
        </motion.div>
      </div>

      <div className="mb-8">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Sales Today</p>
        <h4 className="text-4xl font-display font-black text-white">
          <Counter value={salesValue} prefix="Rs. " />
        </h4>
      </div>

      <div className="flex items-end justify-between h-24 gap-1.5">
        {[30, 45, 35, 60, 50, 75, 70, 95, 85, 100].map((h, i) => (
          <motion.div
            key={i}
            style={{ scaleY: barScale }}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.3, delay: i * 0.03, ease: "circOut" }}
            className="w-full bg-gradient-to-t from-bold-acid/20 to-bold-acid rounded-t-sm origin-bottom"
          />
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-bold-acid rounded-full animate-pulse" />
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Live Updates</span>
        </div>
        <motion.div style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 360]) }}>
          <ArrowUpRight className="w-3 h-3 text-gray-400" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const OrderNotifications = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, name: "Emma S.", amount: "Rs. 15,000", time: "Just now" },
    { id: 2, name: "Liam K.", amount: "Rs. 8,500", time: "1m ago" },
    { id: 3, name: "Olivia W.", amount: "Rs. 25,000", time: "3m ago" }
  ]);
  
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  useEffect(() => {
    const names = ["Noah J.", "Ava M.", "Ethan B.", "Sophia L.", "Mason D."];
    const interval = setInterval(() => {
      const newOrder = {
        id: Date.now(),
        name: names[Math.floor(Math.random() * names.length)],
        amount: `Rs. ${Math.floor(Math.random() * 50000 + 5000).toLocaleString()}`,
        time: "Just now"
      };
      setNotifications(prev => [newOrder, ...prev.slice(0, 2)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      style={{ rotate, y }}
      className="relative h-full w-full bg-bold-black border border-white/10 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-white/5 rounded-xl border border-white/10">
          <Bell className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-white uppercase tracking-tight">Real-time Orders</p>
          <p className="text-[8px] text-gray-400 uppercase tracking-widest">Global Activity</p>
        </div>
      </div>

      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {notifications.map((n, i) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, x: -50 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="flex items-center gap-4 p-3 bg-white/5 border border-white/10 rounded-xl shadow-sm"
            >
              <div className="w-10 h-10 bg-bold-acid/10 rounded-full flex items-center justify-center">
                <Package className="w-5 h-5 text-bold-acid" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-bold text-white">{n.name}</p>
                  <p className="text-[10px] font-black text-bold-acid">{n.amount}</p>
                </div>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-0.5">Shopify Order • {n.time}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const AnalyticsWidget = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const progress = useTransform(scrollYProgress, [0, 1], [471, 0]);
  const roasValue = useTransform(scrollYProgress, [0, 1], [2.4, 8.2]);

  return (
    <motion.div 
      style={{ rotateX, y, perspective: 1000 }}
      className="relative h-full w-full bg-bold-black border border-white/10 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center"
    >
      <div className="absolute top-6 left-6 flex items-center gap-3">
        <div className="p-2 bg-bold-acid/10 rounded-xl border border-bold-acid/20">
          <DollarSign className="w-4 h-4 text-bold-acid" />
        </div>
        <p className="text-[10px] font-bold text-white uppercase tracking-tight">Conversion Rate</p>
      </div>

      <div className="relative w-44 h-44">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="88"
            cy="88"
            r="75"
            className="stroke-white/5 fill-none"
            strokeWidth="10"
          />
          <motion.circle
            cx="88"
            cy="88"
            r="75"
            className="stroke-bold-acid fill-none"
            strokeWidth="10"
            strokeDasharray="471"
            style={{ strokeDashoffset: progress }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h4 className="text-5xl font-display font-black text-white">
            <Counter value={roasValue} suffix="x" />
          </h4>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Average ROAS</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 w-full">
        <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
          <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1">Growth</p>
          <p className="text-sm font-black text-white">+480%</p>
        </div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-3 bg-bold-acid rounded-xl text-center shadow-lg shadow-bold-acid/20"
        >
          <p className="text-[8px] font-bold text-bold-black/70 uppercase tracking-widest mb-1">Status</p>
          <p className="text-sm font-black text-bold-black uppercase">Scaling</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const MotionGraphics: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 300, damping: 20, mass: 0.5 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  return (
    <section ref={containerRef} className="py-32 bg-bold-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00E5FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 mb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="w-12 h-12 bg-bold-acid rounded-xl flex items-center justify-center shadow-xl shadow-bold-acid/30">
                <ShopifyIcon className="w-7 h-7 text-bold-black" />
              </div>
              <span className="text-bold-acid font-black text-sm tracking-[0.3em] uppercase">Shopify Ecosystem</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-[0.85]"
            >
              The Engine of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bold-acid via-white to-bold-acid bg-[length:200%_auto] animate-gradient-x">Limitless Growth</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="h-[450px]">
            <SalesDashboard scrollYProgress={smoothProgress} />
          </div>
          
          <div className="h-[450px]">
            <OrderNotifications scrollYProgress={smoothProgress} />
          </div>

          <div className="h-[450px]">
            <AnalyticsWidget scrollYProgress={smoothProgress} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionGraphics;

