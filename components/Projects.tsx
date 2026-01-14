import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { SpotlightCard } from './ui/SpotlightCard';

const projects: Project[] = [
  {
    id: '1',
    title: 'VisionGuard',
    description: 'A real-time object detection system optimized for low-latency edge devices using YOLOv8.',
    tags: ['Python', 'OpenCV', 'PyTorch'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '2',
    title: 'SentimentFlow',
    description: 'NLP transformer model capable of analyzing complex sentiment in financial news feeds.',
    tags: ['TensorFlow', 'NLP', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '3',
    title: 'Neural Style',
    description: 'An implementation of neural style transfer allowing artistic recomposition of video streams.',
    tags: ['Deep Learning', 'Python', 'NumPy'],
    image: 'https://images.unsplash.com/photo-1550645612-83f5d594b671?q=80&w=2670&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '4',
    title: 'DataViz AI',
    description: 'Automated data visualization tool that suggests charts based on dataset topology.',
    tags: ['Pandas', 'React', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    link: '#',
  },
];

export const Projects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 border-b border-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Selected Projects
            </h2>
            <p className="mt-4 text-neutral-400">
              Explorations in code, data, and intelligence.
            </p>
          </div>
          
          <div className="hidden gap-2 sm:flex">
            <button 
              onClick={() => scroll('left')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-12 sm:mx-0 sm:px-0"
        >
          {projects.map((project, index) => (
            <div key={project.id} className="min-w-[85vw] snap-center sm:min-w-[400px] md:min-w-[500px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <SpotlightCard className="group h-full flex flex-col">
                  {/* Image Area */}
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 grayscale group-hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  
                  {/* Content Area */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center rounded-md bg-neutral-800/80 px-2 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="mb-2 text-xl font-bold text-white group-hover:text-neutral-200">
                      {project.title}
                    </h3>
                    
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-400">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-neutral-800">
                      <a href={project.link} className="inline-flex items-center text-sm font-semibold text-white hover:text-neutral-300">
                        View Details <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};