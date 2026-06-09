import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { WorkExperience } from './components/WorkExperience';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Certifications } from './components/Certifications';
import { Resume } from './components/Resume';
import { ProfileSelection, Profile } from './components/ProfileSelection';
import { LandingPage } from './components/LandingPage';
import { GoogleAnalytics, trackEvent } from './components/GoogleAnalytics';
import { useState } from 'react';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const handleEnter = () => {
    setHasEntered(true);
    trackEvent('landing_page_enter', { category: 'Landing Page', label: 'clicked_to_enter' });
  };

  const handleSelectProfile = (profile: Profile) => {
    setSelectedProfile(profile);
    trackEvent('profile_selected', { category: 'Profile Selection', label: profile.name });
  };

  const handleResetProfile = () => {
    setSelectedProfile(null);
  };

  if (!hasEntered) {
    return (
      <>
        <GoogleAnalytics />
        <LandingPage onEnter={handleEnter} />
      </>
    );
  }

  if (!selectedProfile) {
    return (
      <>
        <GoogleAnalytics />
        <ProfileSelection onSelectProfile={handleSelectProfile} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <GoogleAnalytics />
      <Navigation selectedProfile={selectedProfile} onResetProfile={handleResetProfile} />
      <main>
        <Hero />
        <Projects />
        <WorkExperience />
        <Skills />
        <Certifications />
        <About />
        <Resume />
        <Contact />
      </main>
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">© 2025 Rhythm Chheda. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://github.com/rhythmchheda" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/rhythm-chheda/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="mailto:rhythmchheda@gmail.com" className="text-gray-500 hover:text-white transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}