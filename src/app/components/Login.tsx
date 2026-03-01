import { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import logo from '../../assets/39e95c412ab01117e76e1d51f2ff5403cab1cfd6.png';
import bgImage from '../../assets/0644b590a28da90de87cd44bb08d574a39b22246.png';

export function Login({ onBackClick, onSignUpClick }: { onBackClick?: () => void; onSignUpClick?: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="h-screen w-full flex overflow-hidden">

      {/* ── LEFT PANEL ── */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col justify-between p-12 h-screen sticky top-0">

        {/* Blurred background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            filter: 'blur(3px)',
            transform: 'scale(1.05)',
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Orange vignette bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 100% 60% at 30% 100%, rgba(249,115,22,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        <div className="relative z-10">
          <img
            src={logo}
            alt="Civic Chai"
            className="h-12 w-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {/* Center copy */}
        <div className="relative z-10 max-w-md">
          <h1
            className="text-white mb-6 leading-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Welcome Back to<br />
            <span className="text-orange-400">Civic Chai.</span>
          </h1>
          <p
            className="text-white/60 leading-relaxed"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1.05rem',
              fontWeight: 400,
              lineHeight: '1.75',
            }}
          >
            Your community is waiting. Log in to continue raising
            concerns, joining discussions, and driving real change
            across India.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-8 mt-10">
            {[
              { n: '10K+', l: 'Voices' },
              { n: '300+', l: 'Resolved' },
              { n: '50+', l: 'Cities' },
            ].map((s) => (
              <div key={s.l}>
                <p
                  className="text-white"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.n}
                </p>
                <p
                  className="text-white/40"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="relative z-10">
          <p
            className="text-white/25"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.78rem',
              fontWeight: 400,
            }}
          >
            © {new Date().getFullYear()} Civic Chai · Made with ♥ for India
          </p>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="w-full lg:w-1/2 bg-[#FAF8F5] flex flex-col items-center justify-center px-6 py-12 relative overflow-y-auto h-screen">

        {/* Mobile logo */}
        <div className="lg:hidden mb-8">
          <img src={logo} alt="Civic Chai" className="h-10 w-auto" />
        </div>

        {/* Back link */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onBackClick?.();
          }}
          className="absolute top-8 right-8 flex items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors duration-200"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.82rem',
            fontWeight: 500,
          }}
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
          Back to Home
        </a>

        {/* Login Card */}
        <div
          className="w-full max-w-md bg-white rounded-2xl p-8 md:p-10"
          style={{
            boxShadow:
              '0 4px 6px -1px rgba(0,0,0,0.04), 0 20px 60px -10px rgba(0,0,0,0.10)',
          }}
        >
          {/* Card heading */}
          <div className="mb-8">
            <h2
              className="text-gray-900 mb-2"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '1.75rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Sign in
            </h2>
            <p
              className="text-gray-400"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 400,
              }}
            >
              Enter your credentials to access your account.
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-5">

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-gray-700"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 400,
                }}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-gray-700"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.82rem',
                    fontWeight: 500,
                  }}
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: 400,
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword
                    ? <EyeOff className="w-4.5 h-4.5" strokeWidth={2} />
                    : <Eye className="w-4.5 h-4.5" strokeWidth={2} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  rememberMe
                    ? 'bg-gray-900 border-gray-900'
                    : 'bg-white border-gray-300'
                }`}
              >
                {rememberMe && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 12 12"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2 6l3 3 5-5"
                    />
                  </svg>
                )}
              </button>
              <span
                className="text-gray-500 select-none cursor-pointer"
                onClick={() => setRememberMe(!rememberMe)}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 400,
                }}
              >
                Remember me for 30 days
              </span>
            </div>

            {/* Login Button */}
            <button
              type="button"
              className="relative group w-full bg-gray-900 text-white py-3.5 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01] active:scale-100 mt-1"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
              }}
            >
              {/* Slide-up orange fill on hover */}
              <span className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10">LOGIN</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-1">
              <div className="flex-1 h-px bg-gray-100" />
              <span
                className="text-gray-300"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 500,
                }}
              >
                OR
              </span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Sign up link */}
            <p
              className="text-center text-gray-500"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.88rem',
                fontWeight: 400,
              }}
            >
              Don't have an account?{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSignUpClick?.();
                }}
                className="text-gray-900 font-semibold hover:text-orange-500 transition-colors duration-200 underline underline-offset-2"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
