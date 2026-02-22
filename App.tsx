import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import Services from './components/Services';
import MotionGraphics from './components/MotionGraphics';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundScene from './components/BackgroundScene';
import Experience from './components/Experience';

// Fallback for 3D scene loading
const CanvasLoader = () => (
  <div className="flex items-center justify-center w-full h-screen bg-bold-light text-bold-black font-display tracking-widest text-xs">
    INITIALIZING...
  </div>
);

function App() {
  return (
    <div className="relative bg-bold-light min-h-screen text-bold-black font-sans selection:bg-bold-acid selection:text-bold-black overflow-hidden">
      <Suspense fallback={<CanvasLoader />}>
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="fixed inset-0 z-0"
        >
          <BackgroundScene />
        </motion.div>
      </Suspense>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <Navbar />
        <main className="relative">
          <Hero />
          <StatsCounter />
          <Services />
          <Process />
          <Expertise />
          <MotionGraphics />
          <Experience />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;