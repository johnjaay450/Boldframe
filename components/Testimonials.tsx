import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Bold Frame completely transformed our paid acquisition. We went from Rs. 2M/mo to Rs. 10M/mo in just 4 months.",
    author: "Sarah Jenkins",
    role: "Founder, Glow Skin",
    bg: "bg-white",
    text: "text-bold-black",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    quote: "The creative team is unmatched. They understand what works on TikTok and Meta natively. The ROAS speaks for itself.",
    author: "Mike Ross",
    role: "CMO, ActiveWear Co",
    bg: "bg-bold-black",
    text: "text-white",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    quote: "Finally an agency that cares about profitability, not just vanity metrics. They feel like an in-house partner.",
    author: "David Chen",
    role: "CEO, TechGadget",
    bg: "bg-bold-light",
    text: "text-bold-black",
    gradient: "from-amber-500 to-orange-500"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-40 bg-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
           <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-8 h-[1px] bg-bold-black"></div>
                 <span className="font-mono text-[10px] uppercase tracking-widest text-bold-gray">Client_Testimony</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-display font-black text-bold-black tracking-tighter uppercase leading-[0.85]">
                Verified <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-bold-gray to-gray-300">Impact</span>
              </h2>
           </div>
           <div className="text-right">
              <div className="inline-block p-6 border border-bold-black/10 rounded-full">
                 <Quote className="w-8 h-8 text-bold-acid" />
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative"
            >
              <div className="mb-10">
                 <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, star) => (
                       <Star key={star} className="w-4 h-4 fill-bold-acid text-bold-acid" />
                    ))}
                 </div>
                 <p className="text-2xl md:text-3xl font-display font-bold text-bold-black leading-tight tracking-tight mb-8">
                    "{t.quote}"
                 </p>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-bold-black/5">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm bg-gradient-to-br ${t.gradient}`}>
                    {t.author.charAt(0)}
                 </div>
                 <div>
                    <h4 className="text-sm font-bold text-bold-black uppercase tracking-widest">{t.author}</h4>
                    <p className="text-[10px] font-mono text-bold-gray uppercase tracking-widest mt-1">{t.role}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;