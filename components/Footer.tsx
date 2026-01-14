import React from 'react';
import { motion } from 'framer-motion';
import { triggerHaptic } from '../App';
import { socialLinks } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-secondary/10 bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-6 md:flex-row">

        <div className="flex flex-col items-center md:items-start">
          <span className="text-lg font-bold tracking-tight text-primary">Yug Shah</span>
          <p className="mt-2 text-sm text-secondary">
            © {new Date().getFullYear()} Yug Shah. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary transition-colors hover:text-primary"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => triggerHaptic()}
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};