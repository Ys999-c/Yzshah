import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Connect } from './components/Connect';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Moon, Sun, Monitor } from 'lucide-react';

// Haptic helper
export const triggerHaptic = (style: 'light' | 'medium' | 'heavy' = 'light') => {
  if (navigator.vibrate) {
    switch (style) {
      case 'light': navigator.vibrate(5); break;
      case 'medium': navigator.vibrate(10); break;
      case 'heavy': navigator.vibrate(15); break;
    }
  }
};

type Theme = 'dark' | 'light' | 'mono';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  // Scroll to top on initial page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Clear hash from URL without triggering navigation
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  // Smooth scroll handler for navigation links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    triggerHaptic();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL hash after smooth scroll
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const toggleTheme = () => {
    triggerHaptic('medium');
    setTheme(prev => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'mono';
      return 'dark';
    });
  };

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-accent font-sans overflow-x-hidden transition-colors duration-300">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full border-b border-secondary/10 bg-background/80 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); triggerHaptic(); }}
          >

            <span className="font-semibold tracking-tight text-primary">Yug Shah</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-sm font-medium text-secondary">
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-primary transition-colors">About</a>
              <a href="#connect" onClick={(e) => handleNavClick(e, 'connect')} className="hover:text-primary transition-colors">Contact</a>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-surface border border-secondary/10 text-primary hover:bg-accent/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' && <Moon className="h-4 w-4" />}
              {theme === 'light' && <Sun className="h-4 w-4" />}
              {theme === 'mono' && <Monitor className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="relative">
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="connect">
          <Connect />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;