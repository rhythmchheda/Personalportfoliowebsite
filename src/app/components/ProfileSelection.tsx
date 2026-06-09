import recruiterImg from 'figma:asset/9f46ae42eb3a76e4f07532c7564eecb7259a6c47.png';
import developerImg from 'figma:asset/ffdd2a54cf732b1ca4f0e1a075dc4f46de287379.png';
import stalkerImg from 'figma:asset/ec45432da33e2fcc5f031f6abaf4a707ed1f7c64.png';
import adventurerImg from 'figma:asset/8f6e695d44a7bca90da73e09a07f9f33ee90acd9.png';

interface Profile {
  id: string;
  name: string;
  image: string;
  color: string;
}

const profiles: Profile[] = [
  {
    id: 'recruiter',
    name: 'Recruiter',
    image: recruiterImg,
    color: 'bg-cyan-500',
  },
  {
    id: 'developer',
    name: 'Developer',
    image: developerImg,
    color: 'bg-gray-400',
  },
  {
    id: 'stalker',
    name: 'Stalker',
    image: stalkerImg,
    color: 'bg-red-600',
  },
  {
    id: 'adventurer',
    name: 'Adventurer',
    image: adventurerImg,
    color: 'bg-yellow-500',
  },
];

interface ProfileSelectionProps {
  onSelectProfile: (profile: Profile) => void;
}

export function ProfileSelection({ onSelectProfile }: ProfileSelectionProps) {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 sm:mb-16 text-center">Who's Watching?</h1>
      <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-4xl">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => onSelectProfile(profile)}
            className="flex flex-col items-center gap-2 sm:gap-3 group transition-transform hover:scale-110"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded overflow-hidden border-4 border-transparent group-hover:border-white transition-all">
              <img 
                src={profile.image} 
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-gray-400 group-hover:text-white transition-colors text-sm sm:text-base">
              {profile.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export type { Profile };