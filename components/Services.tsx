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
  <svg viewBox="0 0 109 124" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
    <path d="M95.5 23.6c-0.1-0.8-0.8-1.2-1.3-1.3c-0.6-0.1-11.4-0.2-11.4-0.2s-9-8.9-9.9-9.8c-0.9-0.9-2.8-0.6-3.5-0.4c-0.1 0-2 0.6-5.1 1.6C62.6 9.1 59.7 3 54 3C53.6 3 53.2 3 52.7 3.1C51 1.1 48.9 0 47.1 0C30.8 0 22.9 20.3 20.4 30.6l-13.2 4.1C3 36 3 36.1 2.5 40.3L0 109.3l74.2 13.9L109 115c0 0-13.3-90.6-13.5-91.4zM62.8 15.8c-2.4 0.7-5.1 1.6-8 2.5c0-4.2-0.6-10-2.7-14.9C57.3 4.2 61.1 10.9 62.8 15.8zM51.3 19.3c-5.5 1.7-11.4 3.5-17.4 5.4C35.9 15.4 41 5 49.6 3.4C51.8 7.9 51.6 14.7 51.3 19.3zM46.9 3.3c0.7 0 1.3 0.2 1.9 0.5C40.9 5.7 36 16.5 34 25.5c-5.1 1.6-10.1 3.1-14.7 4.6C21.7 20.5 28.6 3.3 46.9 3.3z" fill="#95BF47"/>
    <path d="M94.2 22.3c-0.6-0.1-11.4-0.2-11.4-0.2s-9-8.9-9.9-9.8c-0.4-0.4-0.8-0.5-1.3-0.5l0 111.5l34.8-7.4c0 0-13.3-90.6-13.5-91.4C93.8 23.7 93.8 22.4 94.2 22.3z" fill="#5E8E3E"/>
    <path d="M54 39.5l-4.3 16.1c0 0-4.8-2.2-10.5-1.9c-8.4 0.5-8.4 5.8-8.4 7.1c0.5 7.5 20.2 9.1 21.3 26.7c0.9 13.8-7.3 23.3-19.1 24c-14.1 0.9-21.2-7.4-21.2-7.4l2.9-12.3c0 0 7.1 5.4 12.8 5c3.7-0.2 5.1-3.3 4.9-5.4c-0.6-9.8-16.7-9.2-17.7-25.3c-0.8-13.5 8-27.3 27.7-28.5C49.6 37.2 54 39.5 54 39.5z" fill="white"/>
  </svg>
);

const WooCommerceLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.226 4.008C1.008 4.008 0 5.016 0 6.234v8.748c0 1.218 1.008 2.226 2.226 2.226h8.316l2.958 3.042 2.958-3.042h5.316C22.992 17.208 24 16.2 24 14.982V6.234c0-1.218-1.008-2.226-2.226-2.226H2.226z" fill="#7F54B3"/>
    <path d="M1.35 6.57c.18-.24.432-.372.774-.396.63-.048 .99.276 1.08.972.39 2.604.816 4.812 1.278 6.624l2.754-5.244c.252-.48.564-.726.936-.75.546-.036.882.312 1.014.996.312 1.656.708 3.066 1.176 4.248.324-3.156.87-5.436 1.638-6.852.18-.336.444-.504.804-.528.276-.018.528.06.744.234.216.174.336.396.354.672.012.204-.036.384-.144.552-.486.876-.888 2.316-1.206 4.308-.306 1.932-.432 3.438-.384 4.512.018.3-.036.564-.162.786-.144.252-.354.39-.612.408-.288.018-.576-.12-.852-.408C9.03 15.39 7.968 13.77 7.11 11.49c-.804 1.584-1.404 2.784-1.794 3.594-.732 1.398-1.356 2.112-1.878 2.148-.336.024-.624-.252-.876-.828-.636-1.614-1.32-4.734-2.046-9.354-.048-.3.03-.576.21-.816l.624.336z" fill="white"/>
    <path d="M21.516 8.988c-.456-.804-1.128-1.212-2.016-1.236-.888.012-1.608.468-2.148 1.368-.468.78-.702 1.644-.702 2.58 0 .708.144 1.32.432 1.836.456.804 1.128 1.212 2.016 1.236.888-.012 1.608-.468 2.148-1.368.468-.78.702-1.644.702-2.58 0-.708-.144-1.32-.432-1.836zm-1.404 3.276c-.24.564-.576.852-1.008.864-.432-.012-.756-.348-.972-.996-.144-.432-.216-.876-.216-1.332 0-.36.042-.696.126-1.008.156-.576.456-.888.888-.9.432.012.756.348.972.996.144.432.216.876.216 1.332 0 .36-.042.696-.006 1.044z" fill="white"/>
    <path d="M16.2 8.988c-.456-.804-1.128-1.212-2.016-1.236-.888.012-1.608.468-2.148 1.368-.468.78-.702 1.644-.702 2.58 0 .708.144 1.32.432 1.836.456.804 1.128 1.212 2.016 1.236.888-.012 1.608-.468 2.148-1.368.468-.78.702-1.644.702-2.58 0-.708-.144-1.32-.432-1.836zm-1.404 3.276c-.24.564-.576.852-1.008.864-.432-.012-.756-.348-.972-.996-.144-.432-.216-.876-.216-1.332 0-.36.042-.696.126-1.008.156-.576.456-.888.888-.9.432.012.756.348.972.996.144.432.216.876.216 1.332 0 .36-.042.696-.006 1.044z" fill="white"/>
  </svg>
);

const DaVinciResolveLogo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="borderGrad" cx="50%" cy="0%" r="100%">
        <stop offset="0%" stopColor="#00E5FF"/>
        <stop offset="40%" stopColor="#00FF88"/>
        <stop offset="70%" stopColor="#FFD700"/>
        <stop offset="100%" stopColor="#FF4444"/>
      </radialGradient>
      <radialGradient id="bgGrad" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#2A3A5C"/>
        <stop offset="100%" stopColor="#1A2440"/>
      </radialGradient>
      <radialGradient id="blueGrad" cx="40%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#80DFFF"/>
        <stop offset="100%" stopColor="#0088CC"/>
      </radialGradient>
      <radialGradient id="greenGrad" cx="40%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#CCFF44"/>
        <stop offset="100%" stopColor="#88BB00"/>
      </radialGradient>
      <radialGradient id="redGrad" cx="40%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#FFAAAA"/>
        <stop offset="100%" stopColor="#FF4466"/>
      </radialGradient>
    </defs>

    {/* Colorful gradient border */}
    <rect x="1" y="1" width="98" height="98" rx="22" fill="url(#borderGrad)"/>
    
    {/* Dark navy background */}
    <rect x="5" y="5" width="90" height="90" rx="18" fill="url(#bgGrad)"/>

    {/* Blue teardrop - top center */}
    <ellipse cx="50" cy="34" rx="13" ry="16" fill="url(#blueGrad)"/>
    <ellipse cx="50" cy="48" rx="6" ry="4" fill="url(#blueGrad)" opacity="0.6"/>

    {/* Yellow-green teardrop - bottom left */}
    <ellipse cx="34" cy="62" rx="14" ry="16" fill="url(#greenGrad)"/>
    <ellipse cx="42" cy="52" rx="5" ry="4" fill="url(#greenGrad)" opacity="0.6"/>

    {/* Red-pink teardrop - bottom right */}
    <ellipse cx="66" cy="62" rx="14" ry="16" fill="url(#redGrad)"/>
    <ellipse cx="58" cy="52" rx="5" ry="4" fill="url(#redGrad)" opacity="0.6"/>
  </svg>
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
  <svg viewBox="0 0 100 100" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">

    {/* Red - top left */}
    <path d="M20 12 Q12 12 12 20 L12 50 L50 50 L50 12 Z" fill="#EA4335"/>
    {/* Yellow - top right */}
    <path d="M50 12 L50 50 L72 50 L72 20 Q72 12 64 12 Z" fill="#FBBC04"/>
    {/* Blue - bottom left */}
    <path d="M12 50 L12 80 Q12 88 20 88 L50 88 L50 50 Z" fill="#4285F4"/>
    {/* Green - bottom right */}
    <path d="M50 50 L50 88 L64 88 Q72 88 72 80 L72 50 Z" fill="#34A853"/>

    {/* White/transparent center square cutout */}
    <rect x="30" y="30" width="40" height="40" rx="4" fill="white"/>

    {/* Green video camera triangle pointing right */}
    <polygon points="72,38 90,28 90,72 72,62" fill="#34A853"/>
    <rect x="86" y="28" width="6" height="44" rx="3" fill="#34A853"/>

  </svg>
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
    logos: [<DaVinciResolveLogo />, <PremiereLogo />],
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