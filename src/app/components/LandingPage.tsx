import { useState } from 'react';

interface LandingPageProps {
  onEnter: () => void;
}

export function LandingPage({ onEnter }: LandingPageProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden px-4">
      <button
        onClick={handleClick}
        className={`
          relative cursor-pointer transition-all duration-700 ease-out
          ${isAnimating ? 'scale-[20] opacity-0' : 'scale-100 opacity-100 hover:scale-110'}
        `}
      >
        <div className="text-center">
          <h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent animate-pulse"
            style={{
              textShadow: '0 0 30px rgba(229, 9, 20, 0.5), 0 0 60px rgba(229, 9, 20, 0.3)',
              fontFamily: 'Impact, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            CLICK TO ENTER
          </h1>
          <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </div>
      </button>
    </div>
  );
}