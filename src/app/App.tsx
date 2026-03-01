import { Navigation } from './components/Navigation';
import { HeroContent } from './components/HeroContent';
import { HowItWorks } from './components/HowItWorks';
import { WhyCivicChai } from './components/WhyCivicChai';
import { ImpactStories } from './components/ImpactStories';
import bgImage from '../assets/0644b590a28da90de87cd44bb08d574a39b22246.png';

export default function App() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        />
        
        {/* Dark Overlay (45% black) */}
        <div className="absolute inset-0 bg-black/45" />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Hero Content - Vertically Centered, Left Aligned */}
        <div className="relative z-10 h-full flex items-center">
          <HeroContent />
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Why Civic Chai Section */}
      <WhyCivicChai />

      {/* Impact Stories Section */}
      <ImpactStories />
    </div>
  );
}