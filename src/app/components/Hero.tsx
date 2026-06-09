import { Play, Info } from 'lucide-react';
import profileImage from 'figma:asset/a202790fec528d8e401f6b2398e7449c434c77a1.png';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-start"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1753998943619-b9cd910887e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBkYXJrJTIwc2NyZWVufGVufDF8fHx8MTc2NTkxNTA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Red accent badge */}
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded text-xs sm:text-sm tracking-widest">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              AVAILABLE FOR HIRE
            </div>
          </div>
          
          {/* Content with image */}
          <div className="flex flex-col items-start gap-6 mb-6">
            {/* Profile Image */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <img 
                src={profileImage} 
                alt="Rhythm Chheda" 
                className="w-full h-full object-cover rounded-lg border-2 border-red-600"
                style={{
                  boxShadow: '0 0 30px rgba(229, 9, 20, 0.5)'
                }}
              />
            </div>
            
            {/* Name */}
            <h1 className="text-gray-300 text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight" style={{ lineHeight: '1.1' }}>
              Rhythm Chheda
            </h1>
          </div>
          
          {/* Netflix-style tagline */}
          <div className="mb-8 space-y-3">
            <p className="text-gray-300 text-xl sm:text-2xl md:text-3xl">
              Software Engineer • Full-Stack Systems • Applied Machine Learning
            </p>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl">
              Building full-stack applications that combine modern web systems, backend services, and applied ML to deliver real-world impact. MS in IT Management from UT Dallas. Driven by clean design and production readiness.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 bg-white text-black px-8 sm:px-10 py-3 sm:py-4 rounded hover:bg-white/80 transition-colors text-base sm:text-lg"
            >
              <Play size={20} fill="currentColor" />
              View Projects
            </button>
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 bg-gray-500/70 text-white px-8 sm:px-10 py-3 sm:py-4 rounded hover:bg-gray-500/50 transition-colors text-base sm:text-lg"
            >
              <Info size={20} />
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}