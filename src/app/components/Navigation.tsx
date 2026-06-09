import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Profile } from './ProfileSelection';

interface NavigationProps {
  selectedProfile: Profile;
  onResetProfile: () => void;
}

export function Navigation({ selectedProfile, onResetProfile }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchedLink = navItems.find(link => 
        link.name.toLowerCase().includes(query)
      );
      
      if (matchedLink) {
        scrollToSection(matchedLink.href);
        setSearchOpen(false);
        setSearchQuery('');
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Profile and nav */}
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Profile button */}
            <button
              onClick={onResetProfile}
              className="flex items-center gap-3 group flex-shrink-0"
            >
              <div className="w-8 h-8 rounded overflow-hidden border-2 border-transparent group-hover:border-red-600 transition-all">
                <img 
                  src={selectedProfile.image} 
                  alt={selectedProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-red-600 hover:text-red-500 transition-colors tracking-wider text-sm lg:text-base">
                {selectedProfile.name.toUpperCase()}
              </span>
            </button>
            
            {/* Navigation Links - ALWAYS VISIBLE */}
            <div className="flex items-center gap-3 lg:gap-6">
              {navItems.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-white transition-colors text-xs lg:text-base whitespace-nowrap"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Search */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-gray-900 border border-gray-700 text-white px-3 py-1 rounded focus:outline-none focus:border-red-600 transition-colors w-32 lg:w-auto text-sm"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </form>
            ) : (
              <button 
                onClick={() => setSearchOpen(true)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Search size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}