import React from 'react';
import { motion } from 'framer-motion';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-bold-purple font-bold text-xs mb-8 tracking-[0.2em] uppercase bg-blue-50 inline-block px-4 py-2 rounded-lg">
                The Bold Philosophy
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display leading-[0.9] mb-8 text-bold-black uppercase tracking-tight">
                Data Meets <br/>
                <span className="text-gray-300">Radical Creativity</span>
              </h3>
              <p className="text-bold-gray text-lg leading-relaxed mb-10 font-medium max-w-lg">
                In a saturated digital landscape, blending in is the fastest way to fail. We combine rigorous data analysis with bold, thumb-stopping creative production.
              </p>
              
              <div className="grid grid-cols-2 gap-10">
                <div className="pl-6 border-l-2 border-bold-black">
                  <h4 className="text-5xl font-display font-black text-bold-black mb-1 tracking-tighter">1B+</h4>
                  <p className="text-[10px] font-bold text-bold-gray uppercase tracking-widest">PKR Ad Spend Managed</p>
                </div>
                 <div className="pl-6 border-l-2 border-bold-acid">
                  <h4 className="text-5xl font-display font-black text-bold-black mb-1 tracking-tighter">4X</h4>
                  <p className="text-[10px] font-bold text-bold-gray uppercase tracking-widest">Average ROAS</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="relative order-1 lg:order-2 h-[600px] w-full perspective-1000">
             <motion.div
                initial={{ rotateY: 15, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "circOut" }}
                viewport={{ once: true }}
                className="w-full h-full relative z-10 rounded-[3rem] overflow-hidden bg-bold-black"
             >
                {/* 3D Floating Elements within container */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#002a55] to-bold-black">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border border-white/10 rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="w-[400px] h-[400px] bg-bold-purple/20 blur-[120px] rounded-full absolute"
                      />
                      <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-[300px] h-[300px] bg-bold-acid/10 blur-[100px] rounded-full absolute translate-x-20 -translate-y-20"
                      />
                      
                      <div className="relative z-10 text-center mix-blend-overlay">
                        <span className="font-display font-black text-9xl text-white opacity-20 tracking-tighter">BOLD</span>
                      </div>
                   </div>
                   
                   {/* Floating Cards */}
                   <motion.div 
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-24 right-16 bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl"
                   >
                      <div className="w-10 h-10 bg-bold-acid rounded-full mb-4"></div>
                      <div className="w-24 h-2 bg-white/20 rounded-full mb-2"></div>
                      <div className="w-16 h-2 bg-white/10 rounded-full"></div>
                   </motion.div>

                   <motion.div 
                      animate={{ y: [0, 20, 0] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-32 left-16 bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl"
                   >
                      <div className="text-4xl font-display font-bold text-white mb-2 tracking-tight">+450%</div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Growth Rate</div>
                   </motion.div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;