import { useState, useRef } from 'react';
import { Navigation } from './components/Navigation';
import { HeroContent } from './components/HeroContent';
import { HowItWorks } from './components/HowItWorks';
import { WhyCivicChai } from './components/WhyCivicChai';
import { ActiveDiscussions } from './components/ActiveDiscussions';
import { CommunityStats } from './components/CommunityStats';
import { CallToAction } from './components/CallToAction';
import { ImpactStories } from './components/ImpactStories';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import bgImage from '../assets/0644b590a28da90de87cd44bb08d574a39b22246.png';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const discussionsRef = useRef<HTMLDivElement>(null);
  const impactStoriesRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showLogin) {
    return <Login onBackClick={() => setShowLogin(false)} onSignUpClick={() => { setShowLogin(false); setShowSignUp(true); }} />;
  }

  if (showSignUp) {
    return <SignUp onBackClick={() => setShowSignUp(false)} onLoginClick={() => { setShowSignUp(false); setShowLogin(true); }} />;
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div id="hero" ref={homeRef} className="relative w-full h-screen overflow-hidden">
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
        <Navigation 
          onLoginClick={() => setShowLogin(true)} 
          onSignUpClick={() => setShowSignUp(true)}
          onNavClick={(section) => {
            if (section === 'home') scrollToSection(homeRef);
            if (section === 'about') scrollToSection(aboutRef);
            if (section === 'discussions') scrollToSection(discussionsRef);
            if (section === 'impact-stories') scrollToSection(impactStoriesRef);
          }}
        />
        
        {/* Hero Content - Vertically Centered, Left Aligned */}
        <div className="relative z-10 h-full flex items-center">
          <HeroContent />
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Why Civic Chai Section */}
      <div ref={aboutRef}>
        <WhyCivicChai />
      </div>

      {/* Active Discussions Section */}
      <div ref={discussionsRef}>
        <ActiveDiscussions />
      </div>

      {/* Community Stats Section */}
      <CommunityStats />

      {/* Impact Stories Section */}
      <div ref={impactStoriesRef}>
        <ImpactStories />
      </div>

      {/* Call to Action Section */}
      <CallToAction onLoginClick={() => setShowLogin(true)} />

      {/* Footer */}
      <Footer 
        onNavClick={(section) => {
          if (section === 'home') scrollToSection(homeRef);
          if (section === 'about') scrollToSection(aboutRef);
          if (section === 'discussions') scrollToSection(discussionsRef);
          if (section === 'impact-stories') scrollToSection(impactStoriesRef);
        }}
      />
    </div>
  );
}