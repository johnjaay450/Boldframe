import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, ArrowUp, Mail, MapPin } from 'lucide-react';

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white hover:bg-bold-acid hover:border-bold-acid hover:text-bold-black transition-all duration-300 bg-white/5 backdrop-blur-sm shadow-lg"
  >
    {icon}
  </motion.a>
);

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <a 
    href={href} 
    onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); }}
    className="group flex items-center gap-2 text-gray-400 hover:text-bold-acid transition-colors w-max"
  >
    <span className="w-1 h-1 rounded-full bg-bold-acid opacity-0 group-hover:opacity-100 transition-opacity"></span>
    <span className="font-display font-bold text-lg uppercase tracking-wide">{text}</span>
  </a>
);

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bold-black text-white relative overflow-hidden pt-24 pb-12">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-bold-purple/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-20 px-6">

        {/* TOP ROW — email left, socials right */}
        <div className="max-w-[95rem] mx-auto flex justify-between items-center mb-10">
          <a href="mailto:growth@boldframe.com" className="font-display font-black text-xs md:text-sm uppercase tracking-widest text-gray-400 hover:text-bold-acid transition-colors">
            growth@boldframe.com
          </a>
          <div className="flex gap-4">
            <SocialLink href="https://instagram.com" icon={<Instagram className="w-5 h-5" />} />
            <SocialLink href="https://twitter.com" icon={<Twitter className="w-5 h-5" />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} />
          </div>
        </div>

        {/* MASSIVE LOGO — scaled to exactly fit viewport width */}
        <div className="w-full border-t border-b border-white/10 py-4 mb-10 flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black uppercase leading-none text-white text-center"
            style={{ fontSize: 'clamp(3rem, 11.5vw, 14rem)', letterSpacing: '-0.03em', whiteSpace: 'nowrap' }}
          >
            BOLD FRAME
          </motion.h2>
        </div>

        {/* MIDDLE ROW — location left, nav center, CTA right */}
        <div className="max-w-[95rem] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">

          {/* Location */}
          <div className="space-y-2 min-w-[160px]">
            <div className="flex items-center gap-2 text-bold-acid">
              <MapPin className="w-3 h-3" />
              <span className="font-bold text-[9px] uppercase tracking-[0.4em]">Based In</span>
            </div>
            <p className="text-gray-400 font-medium text-sm leading-relaxed">
              Bahawalpur, Pakistan
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <FooterLink href="#services" text="Services" />
            <FooterLink href="#process" text="Process" />
            <FooterLink href="#expertise" text="Philosophy" />
            <FooterLink href="#testimonials" text="Reviews" />
            <FooterLink href="#contact" text="Contact" />
          </div>

          {/* CTA */}
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group relative px-8 py-4 bg-white text-bold-black font-bold text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-bold-acid transition-all duration-500 overflow-hidden whitespace-nowrap min-w-[160px] text-center"
          >
            <span className="relative z-10">Start Scaling →</span>
            <div className="absolute inset-0 bg-bold-acid translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </div>

        {/* BOTTOM BAR */}
        <div className="max-w-[95rem] mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest gap-4">
          <p>© {new Date().getFullYear()} Bold Frame Agency. All Rights Reserved.</p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 hover:text-bold-acid transition-colors"
          >
            Back to Top <ArrowUp className="w-3 h-3" />
          </motion.button>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;