export function CommunityStats() {
  const stats = [
    { number: '10,000+', label: 'Voices Raised' },
    { number: '5,000+', label: 'Active Discussions' },
    { number: '300+', label: 'Issues Resolved' },
    { number: '50+', label: 'Cities Connected' },
  ];

  return (
    <section
      id="community-stats"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: '#0A0A0F' }}
    >
      {/* Subtle orange glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Thin top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
            }}
          >
            The Movement in Numbers
          </h2>
          <p
            className="text-white/50 max-w-xl mx-auto"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1.05rem',
              fontWeight: 400,
            }}
          >
            Citizens across India are coming together to build stronger communities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden max-w-5xl mx-auto border border-white/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-12 px-6 text-center bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300 group"
            >
              {/* Number */}
              <span
                className="block text-white mb-3 group-hover:text-orange-400 transition-colors duration-300"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 'clamp(2.5rem, 6vw, 3.75rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </span>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-orange-500 rounded-full mb-3 opacity-70 group-hover:opacity-100 group-hover:w-12 transition-all duration-300" />

              {/* Label */}
              <span
                className="text-white/50 group-hover:text-white/80 transition-colors duration-300"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Thin bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60" />
    </section>
  );
}
