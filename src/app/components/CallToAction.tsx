export function CallToAction({ onLoginClick }: { onLoginClick?: () => void }) {
  return (
    <section
      className="relative w-full py-28 md:py-36 overflow-hidden"
      style={{ background: '#FAF8F5' }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Large watermark text — decorative background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="text-gray-900/[0.03] font-black text-center leading-none"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(6rem, 20vw, 18rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            whiteSpace: 'nowrap',
          }}
        >
          CHAI
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">

        {/* Eyebrow tag */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"
          />
          <span
            className="text-orange-600"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Join the Movement
          </span>
        </div>

        {/* Main Heading */}
        <h2
          className="text-gray-900 mb-6"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          Your Voice<br />
          <span className="text-orange-500">Matters.</span>
        </h2>

        {/* Subtext */}
        <p
          className="text-gray-500 mb-12 max-w-xl"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 400,
            lineHeight: '1.7',
          }}
        >
          Join Civic Chai today and help shape your community.
          <br className="hidden md:block" />
          Together, conversations become change.
        </p>

        {/* CTA Button */}
        <button
          onClick={onLoginClick}
          className="relative group bg-gray-900 text-white px-10 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-100"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          }}
        >
          {/* Hover fill effect */}
          <span
            className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
          />
          <span className="relative z-10">JOIN THE MOVEMENT</span>
        </button>

        {/* Subtle trust note */}
        <p
          className="mt-6 text-gray-400"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.8rem',
            fontWeight: 400,
          }}
        >
          Free to join · No spam · 10,000+ citizens already onboard
        </p>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
