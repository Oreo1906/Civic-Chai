import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '../../assets/39e95c412ab01117e76e1d51f2ff5403cab1cfd6.png';

interface FooterProps {
  onNavClick?: (section: string) => void;
}

export function Footer({ onNavClick }: FooterProps) {
  const platformLinks = ['Home', 'Discussions', 'Raise Concern', 'Impact Stories'];
  const companyLinks = ['About', 'Contact', 'Privacy Policy', 'Terms'];

  const socials = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ];

  return (
    <footer id="footer-section" style={{ background: '#0A0A0F' }} className="relative overflow-hidden">

      {/* Top orange accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60" />

      {/* Main footer content */}
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Civic Chai"
              className="h-12 w-auto mb-5"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p
              className="text-white/50 leading-relaxed max-w-sm"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 400,
                lineHeight: '1.75',
              }}
            >
              Civic Chai is India's citizen-first platform for raising concerns,
              sparking discussions, and driving real change in communities across
              the country. Your chai. Your voice. Your India.
            </p>

            {/* Orange small divider */}
            <div className="w-10 h-0.5 bg-orange-500 rounded-full mt-6 opacity-80" />
          </div>

          {/* Col 2 — Platform */}
          <div>
            <h4
              className="text-white mb-5"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Platform
            </h4>
            <ul className="flex flex-col gap-3">
              {platformLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const sectionMap: { [key: string]: string } = {
                        'Home': 'home',
                        'Discussions': 'discussions',
                        'Raise Concern': '#',
                        'Impact Stories': 'impact-stories'
                      };
                      onNavClick?.(sectionMap[item]);
                    }}
                    className="text-white/50 hover:text-white transition-colors duration-200"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.9rem',
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4
              className="text-white mb-5"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const sectionMap: { [key: string]: string } = {
                        'About': 'about',
                        'Contact': '#',
                        'Privacy Policy': '#',
                        'Terms': '#'
                      };
                      onNavClick?.(sectionMap[item]);
                    }}
                    className="text-white/50 hover:text-white transition-colors duration-200"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.9rem',
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p
            className="text-white/30 text-center md:text-left"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.8rem',
              fontWeight: 400,
            }}
          >
            © {new Date().getFullYear()} Civic Chai. All rights reserved. Made with{' '}
            <span className="text-orange-500">♥</span> for India.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-200"
              >
                <Icon className="w-4 h-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
