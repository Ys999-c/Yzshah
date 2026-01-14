import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Network, Terminal, Cpu, Database, Globe, Layers } from 'lucide-react';
import { triggerHaptic } from '../App';

const skills = [
    { name: 'Python', icon: Terminal, color: '#eab308' },    // yellow-500
    { name: 'TensorFlow', icon: Brain, color: '#f97316' },   // orange-500
    { name: 'PyTorch', icon: Network, color: '#ef4444' },    // red-500
    { name: 'React', icon: Globe, color: '#06b6d4' },        // cyan-500
    { name: 'SQL', icon: Database, color: '#3b82f6' },       // blue-500
    { name: 'OpenCV', icon: Layers, color: '#22c55e' },      // green-500
    { name: 'Git', icon: Code2, color: '#ea580c' },          // orange-600
    { name: 'Linux', icon: Cpu, color: '#fef08a' },          // yellow-200
];

export const About: React.FC = () => {
    return (
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
            {/* Section Header */}
            <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
                        The Person Behind <span className="text-accent">The Code</span>.
                    </h2>
                    <div className="space-y-6 text-lg text-secondary leading-relaxed">
                        <p>
                            I am <strong className="text-primary">Yug Shah</strong>, a passionate technologist and innovator currently advancing through my sophomore year of high school (10th Grade).
                        </p>
                        <p>
                            While my academic journey is just beginning, my professional ambition is clear: to become a world-class <strong className="text-primary">AI/ML Engineer</strong>. I am deeply driven by the mathematical intuition behind algorithms and the practical application of neural architectures.
                        </p>
                        <p>
                            My focus extends beyond standard curriculum into the realms of Deep Learning, Computer Vision, and Natural Language Processing. I am constantly building, breaking, and refining systems to understand the fundamental nature of intelligence.
                        </p>
                    </div>
                </motion.div>

                {/* Stats / Info Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center justify-center lg:justify-end"
                >
                    <div className="relative w-full max-w-md">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent/20 to-accent/10 opacity-50 blur-xl"></div>
                        <div className="relative overflow-hidden rounded-2xl border border-secondary/20 bg-surface/50 p-8 backdrop-blur-sm shadow-xl">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-4xl font-bold text-primary">10th</div>
                                    <div className="mt-1 text-sm font-medium text-secondary">Grade</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-primary">Active</div>
                                    <div className="mt-1 text-sm font-medium text-secondary">Learner</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-primary">AI</div>
                                    <div className="mt-1 text-sm font-medium text-secondary">Focus</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-primary">∞</div>
                                    <div className="mt-1 text-sm font-medium text-secondary">Curiosity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Tech Stack Strip */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-20 border-y border-secondary/10 bg-surface/30 py-12"
            >
                <div className="mb-8 text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Technologies & Tools</span>
                </div>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.05, color: skill.color }}
                            whileTap={{ scale: 0.95 }}
                            onTapStart={() => triggerHaptic()}
                            className="group flex flex-col items-center justify-center gap-3 text-secondary transition-colors cursor-pointer"
                        >
                            <div className="colored-icon transition-colors duration-300">
                                <skill.icon className="h-8 w-8 stroke-[1.5px]" />
                            </div>
                            <span className="text-xs font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};