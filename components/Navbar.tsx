import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Philosophy', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <>
      <nav 
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[92%] md:max-w-5xl"
      >
        <motion.div 
          initial={{ y: -50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full pl-6 pr-2 py-2 flex items-center justify-between"
        >
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 group mr-8">
            <span className="font-display font-black text-lg tracking-tight text-bold-black group-hover:text-bold-acid transition-colors duration-300">BOLD FRAME</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100/50 rounded-full p-1 border border-white/50 backdrop-blur-sm">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-5 py-2 text-[11px] font-bold text-bold-black/70 hover:text-bold-black uppercase tracking-wider transition-colors z-10"
              >
                {link.name}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white rounded-full shadow-sm z-[-1]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex px-6 py-3 bg-bold-black text-white rounded-full font-display font-bold text-[10px] uppercase tracking-widest hover:bg-bold-acid hover:text-bold-black transition-all duration-300 items-center gap-2 shadow-lg shadow-bold-black/20"
            >
              Start Scaling
            </motion.a>
            
            {/* Mobile Toggle */}
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden w-11 h-11 flex items-center justify-center bg-gray-50 rounded-full text-bold-black hover:bg-gray-100 transition-colors border border-gray-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-24 left-4 right-4 z-40 bg-white/95 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-6 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-lg font-display font-bold p-4 hover:bg-gray-50 rounded-2xl transition-colors flex justify-between items-center group text-bold-black uppercase"
                >
                  {link.name}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-bold-acid" />
                </motion.a>
              ))}
              <div className="h-[1px] bg-gray-100 my-4"></div>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="#contact"
                onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="w-full py-4 bg-bold-black text-white rounded-2xl font-display font-bold text-center uppercase tracking-widest text-xs active:scale-95 transition-transform shadow-lg shadow-bold-black/10"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;