import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is your minimum ad budget?",
    answer: "We recommend a minimum monthly ad budget of Rs. 100,000 to see meaningful results. This ensures enough data to optimize campaigns effectively."
  },
  {
    question: "Do you offer performance guarantees?",
    answer: "We don't make unrealistic guarantees, but we back our work with full transparency — weekly reporting, live dashboards, and clear KPIs agreed upfront."
  },
  {
    question: "How long does onboarding take?",
    answer: "Onboarding takes 5–7 business days. We audit your accounts, build the strategy, and launch within the first two weeks."
  },
  {
    question: "Which platforms do you run ads on?",
    answer: "Primarily Meta (Facebook & Instagram) and TikTok. We also run Google Ads for select e-commerce brands."
  },
  {
    question: "How do you charge?",
    answer: "We work on a monthly retainer model. Pricing depends on scope — book a free audit call to get a custom quote."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="text-xl md:text-2xl font-display font-black uppercase tracking-tighter text-white group-hover:text-bold-acid transition-colors">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-bold-acid border-bold-acid text-bold-black' : 'text-white group-hover:border-bold-acid group-hover:text-bold-acid'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-bold-gray text-lg leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-bold-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bold-acid/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-bold-acid font-bold text-xs tracking-[0.2em] uppercase border border-bold-acid/30 inline-block px-4 py-2 rounded-lg">
              Common Questions
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase leading-[0.9]"
          >
            Everything you <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bold-acid to-white">need to know</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
