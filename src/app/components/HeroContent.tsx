export function HeroContent() {
  return (
    <div className="container mx-auto px-6 lg:px-12">
      <div className="max-w-4xl">
        {/* Main Heading */}
        <h1 
          className="text-white mb-8 leading-tight tracking-tight"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}
        >
          CONNECTING INDIA<br />WITH CHAI.
        </h1>
        
        {/* Paragraph */}
        <p 
          className="text-white/90 mb-10 max-w-2xl leading-relaxed"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            fontWeight: 400
          }}
        >
          Civic Chai: Where citizens share their stories, grievances, and drive change. 
          Share your "Chai" – Share your voice.
        </p>
        
        {/* CTA Button */}
        <button 
          className="bg-white text-black px-8 py-4 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            fontWeight: 700,
            letterSpacing: '0.05em',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}
        >
          SHARE YOUR TEA
        </button>
      </div>
    </div>
  );
}
