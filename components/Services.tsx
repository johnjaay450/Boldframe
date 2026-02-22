import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const MetaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-[#0668E1] group-hover:fill-white transition-colors">
    <path d="M16.924 7.558c-1.702 0-3.18.932-4.924 2.895-1.744-1.963-3.222-2.895-4.924-2.895-2.906 0-5.076 2.324-5.076 5.437 0 3.113 2.17 5.437 5.076 5.437 1.702 0 3.18-.932 4.924-2.895 1.744 1.963 3.222 2.895 4.924 2.895 2.906 0 5.076-2.324 5.076-5.437 0-3.113-2.17-5.437-5.076-5.437zm0 8.448c-1.364 0-2.47-1.125-3.366-2.616l-.342-.562.342-.562c.896-1.491 2.002-2.616 3.366-2.616 1.488 0 2.696 1.349 2.696 3.011 0 1.662-1.208 3.011-2.696 3.011zm-9.848 0c-1.488 0-2.696-1.349-2.696-3.011 0-1.662 1.208-3.011 2.696-3.011 1.364 0 2.47 1.125 3.366 2.616l.342.562-.342.562c-.896 1.491-2.002 2.616-3.366 2.616z" />
  </svg>
);

const TikTokLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-black group-hover:fill-white transition-colors">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const ShopifyLogo = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#95BF47] group-hover:fill-white transition-colors">
       <path d="M21.366 7.26c-.167-.53-.664-.92-1.22-1.02l-9.5-1.74a1.35 1.35 0 0 0-.5.02L2.64 6.26c-.53.16-.9.63-1.02 1.17L.02 16.5c-.1.56.2 1.1.7 1.34l9.5 4.5c.33.16.7.16 1.04 0l9.5-4.5c.5-.24.8-.78.7-1.34l-1.6-9.24zM11.5 19.8l-7.5-3.55 1.25-7.2 7.5 1.36-1.25 9.4zm0-11.4L4.8 7.2l6.7-1.23 6.7 1.23-6.7 1.2z" />
    </svg>
  </div>
);

const WooCommerceLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.226 4.008C1.008 4.008 0 5.016 0 6.234v8.748c0 1.218 1.008 2.226 2.226 2.226h8.316l2.958 3.042 2.958-3.042h5.316C22.992 17.208 24 16.2 24 14.982V6.234c0-1.218-1.008-2.226-2.226-2.226H2.226z" fill="#7F54B3"/>
    <path d="M1.35 6.57c.18-.24.432-.372.774-.396.63-.048 .99.276 1.08.972.39 2.604.816 4.812 1.278 6.624l2.754-5.244c.252-.48.564-.726.936-.75.546-.036.882.312 1.014.996.312 1.656.708 3.066 1.176 4.248.324-3.156.87-5.436 1.638-6.852.18-.336.444-.504.804-.528.276-.018.528.06.744.234.216.174.336.396.354.672.012.204-.036.384-.144.552-.486.876-.888 2.316-1.206 4.308-.306 1.932-.432 3.438-.384 4.512.018.3-.036.564-.162.786-.144.252-.354.39-.612.408-.288.018-.576-.12-.852-.408C9.03 15.39 7.968 13.77 7.11 11.49c-.804 1.584-1.404 2.784-1.794 3.594-.732 1.398-1.356 2.112-1.878 2.148-.336.024-.624-.252-.876-.828-.636-1.614-1.32-4.734-2.046-9.354-.048-.3.03-.576.21-.816l.624.336z" fill="white"/>
    <path d="M21.516 8.988c-.456-.804-1.128-1.212-2.016-1.236-.888.012-1.608.468-2.148 1.368-.468.78-.702 1.644-.702 2.58 0 .708.144 1.32.432 1.836.456.804 1.128 1.212 2.016 1.236.888-.012 1.608-.468 2.148-1.368.468-.78.702-1.644.702-2.58 0-.708-.144-1.32-.432-1.836zm-1.404 3.276c-.24.564-.576.852-1.008.864-.432-.012-.756-.348-.972-.996-.144-.432-.216-.876-.216-1.332 0-.36.042-.696.126-1.008.156-.576.456-.888.888-.9.432.012.756.348.972.996.144.432.216.876.216 1.332 0 .36-.042.696-.006 1.044z" fill="white"/>
    <path d="M16.2 8.988c-.456-.804-1.128-1.212-2.016-1.236-.888.012-1.608.468-2.148 1.368-.468.78-.702 1.644-.702 2.58 0 .708.144 1.32.432 1.836.456.804 1.128 1.212 2.016 1.236.888-.012 1.608-.468 2.148-1.368.468-.78.702-1.644.702-2.58 0-.708-.144-1.32-.432-1.836zm-1.404 3.276c-.24.564-.576.852-1.008.864-.432-.012-.756-.348-.972-.996-.144-.432-.216-.876-.216-1.332 0-.36.042-.696.126-1.008.156-.576.456-.888.888-.9.432.012.756.348.972.996.144.432.216.876.216 1.332 0 .36-.042.696-.006 1.044z" fill="white"/>
  </svg>
);

const CapCutLogo = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-black group-hover:fill-white transition-colors">
      <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"/>
    </svg>
  </div>
);


const PremiereLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <rect width="24" height="24" rx="4" className="fill-[#00005B] group-hover:fill-white transition-colors" />
    <text x="5" y="17" className="fill-[#9999FF] group-hover:fill-bold-black transition-colors" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Pr</text>
  </svg>
);

const ZoomLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-[#2D8CFF] group-hover:fill-white transition-colors">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5 16l-3-2v2H7V8h7v2l3-2v8z"/>
  </svg>
);

const GoogleMeetLogo = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-bold-black group-hover:fill-white transition-colors">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13h-3v-2h3v2zm0-4h-3V9h3v2zm-5 4H7V9h5v6z"/>
    </svg>
  </div>
);
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Paid Advertising",
    logos: [<MetaLogo />, <TikTokLogo />],
    items: ["Meta Ads Scaling", "Creative Testing", "ROI Optimization", "Multi-Channel Strategy"]
  },
  {
    title: "Shopify Growth",
    logos: [<ShopifyLogo />, <WooCommerceLogo />],
    items: ["Store Development", "Conversion Optimization", "Funnel Structuring", "A/B Testing"]
  },
  {
    title: "Creative Production",
    logos: [<CapCutLogo />, <PremiereLogo />],
    items: ["Ad Creatives", "Viral Hooks", "Conversion Visuals", "UGC Management"]
  },
  {
    title: "Strategy Consulting",
    logos: [<ZoomLogo />, <GoogleMeetLogo />],
    items: ["Strategy Calls", "Audit Reports", "Scaling Roadmap", "Team Training"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-white overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-bold-purple font-bold text-xs tracking-[0.3em] uppercase mb-6 block"
          >
            The Scaling Matrix
          </motion.span>
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-display font-black text-bold-black tracking-tighter leading-[0.9] uppercase">
              Growth <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-bold-gray to-gray-300">Systems</span>
            </h2>
            {/* Moved dot to the side of the heading */}
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="w-12 h-12 border border-bold-black/10 rounded-full flex items-center justify-center group cursor-crosshair">
                <div className="w-1.5 h-1.5 bg-bold-acid rounded-full group-hover:scale-[3] transition-transform duration-700 ease-in-out"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-bold-black/10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 border-r border-b border-bold-black/10 hover:bg-bold-black transition-colors duration-700 overflow-hidden"
            >
              {/* Animated Background Element */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-bold-acid/5 rounded-full blur-3xl group-hover:bg-bold-acid/20 transition-colors duration-700 -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                  {service.logos.map((logo, i) => (
                    <div key={i} className="text-bold-black group-hover:text-white transition-colors">
                      {logo}
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-black text-bold-black group-hover:text-white transition-colors mb-8 uppercase tracking-tighter">
                  {service.title}
                </h3>

                <ul className="space-y-3 mb-10">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-bold-gray group-hover:text-gray-400 transition-colors font-sans text-[11px] font-bold uppercase tracking-wider">
                      <span className="w-1 h-1 bg-bold-acid rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  title={`Learn more about ${service.title}`} 
                  className="flex items-center gap-3 group/btn cursor-pointer"
                >
                   <div className="w-8 h-8 rounded-full border border-bold-black/10 group-hover:border-white/20 flex items-center justify-center text-bold-black group-hover:text-white transition-all group-hover/btn:bg-bold-acid group-hover/btn:text-bold-black">
                      <ArrowRight className="w-3 h-3" />
                   </div>
                   <span className="font-display text-[9px] font-black uppercase tracking-widest text-bold-black group-hover:text-white transition-colors">View Details</span>
                </a>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-bold-acid opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;