import { useState, useEffect } from 'react';
import logo from '../../assets/39e95c412ab01117e76e1d51f2ff5403cab1cfd6.png';

interface NavigationProps {
  onLoginClick?: () => void;
  onSignUpClick?: () => void;
  onNavClick?: (section: string) => void;
}

// Sections with dark backgrounds → nav stays white
// Sections with light backgrounds → nav switches to black
const DARK_SECTIONS = ['hero', 'community-stats', 'footer-section'];

export function Navigation({ onLoginClick, onSignUpClick: _onSignUpClick, onNavClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // hero is dark, so start white

  const menuItems = [
    'Home',
    'About',
    'Discussions',
    'Raise Concern',
    'Impact Stories',
    'Contact'
  ];

  const sectionMap: { [key: string]: string } = {
    'Home': 'home',
    'About': 'about',
    'Discussions': 'discussions',
    'Raise Concern': '#',
    'Impact Stories': 'impact-stories',
    'Contact': '#'
  };

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = 80;
      const scrollY = window.scrollY;

      // Check each dark section to see if nav is currently over it
      const overDark = DARK_SECTIONS.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        return scrollY + navHeight / 2 >= top && scrollY + navHeight / 2 < bottom;
      });

      setIsDark(overDark);
    };

    // Run once on mount to set initial state
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const borderColor = isDark ? 'border-white' : 'border-gray-900';
  const barColor = isDark ? 'bg-white' : 'bg-gray-900';
  const hoverLoginClass = isDark
    ? 'hover:bg-white hover:text-black'
    : 'hover:bg-gray-900 hover:text-white';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">

          {/* Logo — always original colors, never affected */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Civic Chai"
              className="h-12 md:h-14 w-auto"
            />
          </div>

          {/* Desktop Menu links */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center ml-12">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick?.(sectionMap[item]);
                }}
                className={`${textColor} hover:opacity-70 transition-all duration-300`}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Login Button — Desktop */}
          <button
            onClick={onLoginClick}
            className={`hidden lg:flex border-2 ${borderColor} ${textColor} px-6 py-2.5 rounded-lg ${hoverLoginClass} transition-all duration-300`}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            Login
          </button>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 hover:opacity-70 transition-opacity"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-7 h-0.5 ${barColor} transition-colors duration-300`} />
            <span className={`w-7 h-0.5 ${barColor} transition-colors duration-300`} />
            <span className={`w-7 h-0.5 ${barColor} transition-colors duration-300`} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div
            className="lg:hidden mt-6 pb-6 flex flex-col gap-4 p-6 rounded-lg"
            style={{
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-white/80 transition-colors py-2"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick?.(sectionMap[item]);
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </a>
            ))}
            <button
              onClick={onLoginClick}
              className="border-2 border-white text-white px-6 py-2.5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 mt-2"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 600,
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}