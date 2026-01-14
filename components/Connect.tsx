import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { triggerHaptic } from '../App';
import { socialLinks } from '../constants';

export const Connect: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />

            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Let's <span className="text-accent">Connect</span>.
                    </h2>
                    <p className="mt-4 text-secondary max-w-xl">
                        I'm always open to discussing new ideas, learning opportunities, or just having a chat about the future of AI. Find me on these platforms:
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => triggerHaptic('medium')}
                            className="block h-full"
                        >
                            <SpotlightCard className="group h-full p-8 transition-colors hover:border-accent/30">
                                <div className="flex flex-col h-full justify-between">
                                    <div>
                                        <div
                                            className="mb-4 inline-flex rounded-lg bg-surface p-3 ring-1 ring-secondary/20 transition-colors colored-icon group-hover:bg-surface/80"
                                            style={{ '--hover-color': link.hoverColor } as React.CSSProperties}
                                        >
                                            <link.icon className="h-6 w-6 transition-colors group-hover:text-[var(--hover-color)]" />
                                        </div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{link.name}</h3>
                                        <p className="text-sm text-secondary leading-relaxed">
                                            {link.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 flex items-center text-sm font-medium text-secondary transition-colors group-hover:text-primary">
                                        Visit Profile <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};