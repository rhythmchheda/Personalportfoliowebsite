import { Github, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'AI Traffic Rate Limiter',
    description:
      'AI-powered Traffic Rate Limiter integrating Redis, Go, and Snowflake with real-time React dashboard.',
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjU4ODE5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['TypeScript', 'Go', 'Redis', 'Snowflake'],
    github: 'https://github.com/rhythmchheda/ai-traffic-rate-limiter',
  },
  {
    id: 2,
    title: 'Dynamic Recommender',
    description:
      'AI-powered product recommendation system using content-based filtering and collaborative insights.',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjU4NjYzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['JavaScript', 'FastAPI', 'Python', 'AI/ML'],
    github: 'https://github.com/rhythmchheda/dynamic-recommender',
  },
  {
    id: 3,
    title: 'MoodLens',
    description:
      'AI-powered web app detecting facial emotions and recommending Spotify tracks matching your mood.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzY1OTE1MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['JavaScript', 'Computer Vision', 'Spotify API'],
    github: 'https://github.com/rhythmchheda/moodlens',
  },
  {
    id: 4,
    title: 'Movie Success Prediction',
    description:
      'Research paper on movie success prediction using Naïve Bayes algorithm.',
    image: 'https://images.unsplash.com/photo-1739433437912-cca661ba902f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MXx8fHwxNzY1ODM5ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'Machine Learning', 'Research'],
    github: 'https://github.com/rhythmchheda/movie-success-prediction-publication',
  },
  {
    id: 5,
    title: 'Stock Price Prediction',
    description:
      'Stock price prediction using LSTM neural networks for market trend forecasting.',
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjU4ODE5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'LSTM', 'Deep Learning'],
    github: 'https://github.com/rhythmchheda/Stock-Price-Prediction-using-LSTM-model',
  },
];

export function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 336;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'right' ? scrollAmount : -scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section id="projects" className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white mb-6 text-2xl sm:text-3xl">Featured Projects</h2>
        
        <div className="relative group/container">
          {/* Left Arrow - ALWAYS VISIBLE when needed */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-full bg-gradient-to-r from-black/90 to-transparent flex items-center justify-start opacity-0 group-hover/container:opacity-100 transition-opacity duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="text-white" size={40} />
            </button>
          )}

          {/* Right Arrow - ALWAYS VISIBLE when needed */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-full bg-gradient-to-l from-black/90 to-transparent flex items-center justify-end opacity-0 group-hover/container:opacity-100 transition-opacity duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="text-white" size={40} />
            </button>
          )}

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-none w-80 group snap-start"
              >
                <div className="relative overflow-hidden rounded">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Hover overlay - ALWAYS RENDERED */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/20 text-white text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github size={16} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Title below */}
                <div className="mt-2">
                  <h4 className="text-white text-sm">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}