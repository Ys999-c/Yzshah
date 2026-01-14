import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { triggerHaptic } from '../App';

export const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,var(--text-secondary)_1px,transparent_1px),linear-gradient(to_bottom,var(--text-secondary)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03]" />
      
      {/* Splash of Color - Dynamic based on theme */}
      <div className="absolute top-1/4 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />

      <div className="mx-auto max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center space-x-2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-dim px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-accent" />
            Aspiring AI/ML Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-5xl font-bold tracking-tighter text-primary sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Architecting <br />
          <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent gradient-text">
            Intelligence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg text-secondary md:text-xl leading-relaxed"
        >
          Bridging the gap between theoretical mathematics and applied neural networks. 
          Striving to build autonomous systems that redefine the boundaries of what computers can learn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a 
            href="#connect" 
            onClick={() => triggerHaptic('medium')}
            className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-background transition-all hover:scale-105 hover:bg-accent hover:text-white active:scale-95"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};