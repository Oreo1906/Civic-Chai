import { useState, useEffect, useRef } from 'react';
import logo from '../../assets/39e95c412ab01117e76e1d51f2ff5403cab1cfd6.png';

interface NavigationProps {
  onLoginClick?: () => void;
  onSignUpClick?: () => void;
  onNavClick?: (section: string) => void;
  activeSection?: string;
}

const DARK_SECTIONS = ['hero', 'community-stats', 'footer-section'];

export function Navigation({ onLoginClick, onSignUpClick: _onSignUpClick, onNavClick, activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeItem, setActiveItem] = useState(() => {
    // Map section to menu item
    const sectionToItem: { [key: string]: string } = {
      'home': 'Home',
      'about': 'About',
      'discussions': 'Discussions',
      'community-feed': 'Community Feed',
      'impact-stories': 'Impact Stories',
    };
    return sectionToItem[activeSection || 'home'] || 'Home';
  });
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const menuItems = [
    'Home',
    'About',
    'Discussions',
    'Community Feed',
    'Impact Stories',
    'Contact'
  ];

  const sectionMap: { [key: string]: string } = {
    'Home': 'home',
    'About': 'about',
    'Discussions': 'discussions',
    'Community Feed': 'community-feed',
    'Impact Stories': 'impact-stories',
    'Contact': '#'
  };

  // Scroll detection for dark/light bg
  useEffect(() => {
    const handleScroll = () => {
      const navHeight = 80;
      const scrollY = window.scrollY;
      const overDark = DARK_SECTIONS.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        return scrollY + navHeight / 2 >= top && scrollY + navHeight / 2 < bottom;
      });
      setIsDark(overDark);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Recalculate underline position whenever activeItem or menu mounts
  useEffect(() => {
    const el = itemRefs.current[activeItem];
    const container = menuRef.current;
    if (!el || !container) return;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    setUnderlineStyle({
      left: elRect.left - containerRect.left,
      width: elRect.width,
      opacity: 1,
    });
  }, [activeItem, menuItems]);

  // Recalculate on resize
  useEffect(() => {
    const handleResize = () => {
      const el = itemRefs.current[activeItem];
      const container = menuRef.current;
      if (!el || !container) return;
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setUnderlineStyle({
        left: elRect.left - containerRect.left,
        width: elRect.width,
        opacity: 1,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeItem]);

  const handleNavClick = (item: string) => {
    setActiveItem(item);
    onNavClick?.(sectionMap[item]);
  };

  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const borderColor = isDark ? 'border-white' : 'border-gray-900';
  const barColor = isDark ? 'bg-white' : 'bg-gray-900';
  const hoverLoginClass = isDark
    ? 'hover:bg-white hover:text-black'
    : 'hover:bg-gray-900 hover:text-white';

  // Underline color + glow based on bg
  const underlineColor = isDark ? '#ffffff' : '#111111';
  const underlineGlow = isDark
    ? '0 0 6px rgba(255,255,255,0.9), 0 0 14px rgba(255,255,255,0.4)'
    : 'none';

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

          {/* Desktop Menu — position relative so underline is absolute inside */}
          <div
            ref={menuRef}
            className="hidden lg:flex items-center gap-8 flex-1 justify-center ml-12 relative"
          >
            {menuItems.map((item) => (
              <a
                key={item}
                ref={(el) => { itemRefs.current[item] = el; }}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className={`${textColor} transition-all duration-300 pb-1`}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: activeItem === item ? 600 : 500,
                  letterSpacing: '0.01em',
                  opacity: activeItem === item ? 1 : 0.75,
                }}
                onMouseEnter={(e) => {
                  if (activeItem !== item) {
                    (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeItem !== item) {
                    (e.currentTarget as HTMLAnchorElement).style.opacity = '0.75';
                  }
                }}
              >
                {item}
              </a>
            ))}

            {/* Sliding underline indicator */}
            <span
              style={{
                position: 'absolute',
                bottom: '-4px',
                left: underlineStyle.left,
                width: underlineStyle.width,
                height: '2.5px',
                borderRadius: '99px',
                background: underlineColor,
                boxShadow: underlineGlow,
                opacity: underlineStyle.opacity,
                transition: 'left 350ms cubic-bezier(0.4, 0, 0.2, 1), width 350ms cubic-bezier(0.4, 0, 0.2, 1), background 300ms ease, box-shadow 300ms ease, opacity 200ms ease',
                pointerEvents: 'none',
              }}
            />
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
                className="transition-colors py-2 flex items-center gap-2"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1rem',
                  fontWeight: activeItem === item ? 600 : 500,
                  color: activeItem === item ? '#ffffff' : 'rgba(255,255,255,0.65)',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                  setIsMenuOpen(false);
                }}
              >
                {/* Active dot indicator for mobile */}
                <span style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: activeItem === item ? '#ffffff' : 'transparent',
                  border: '1.5px solid rgba(255,255,255,0.3)',
                  display: 'inline-block',
                  flexShrink: 0,
                  transition: 'background 200ms ease',
                }} />
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