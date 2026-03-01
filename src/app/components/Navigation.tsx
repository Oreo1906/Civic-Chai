import { useState } from 'react';
import logo from '../../assets/39e95c412ab01117e76e1d51f2ff5403cab1cfd6.png';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'Home',
    'About',
    'Discussions',
    'Raise Concern',
    'Impact Stories',
    'Contact'
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Civic Chai" 
              className="h-12 md:h-14 w-auto"
            />
          </div>
          
          {/* Desktop Menu - Center/Right */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center ml-12">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-white/80 transition-colors"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  letterSpacing: '0.01em'
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Login Button - Desktop */}
          <button 
            className="hidden lg:block border-2 border-white text-white px-6 py-2.5 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.02em'
            }}
          >
            Login
          </button>
        
          {/* Mobile Hamburger Menu */}
          <button 
            className="lg:hidden flex flex-col gap-1.5 p-2 hover:opacity-70 transition-opacity"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-7 h-0.5 bg-white" />
            <span className="w-7 h-0.5 bg-white" />
            <span className="w-7 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 flex flex-col gap-4 bg-black/80 backdrop-blur-md p-6 rounded-lg">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-white/80 transition-colors py-2"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 500
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              className="border-2 border-white text-white px-6 py-2.5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 mt-2"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 600
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