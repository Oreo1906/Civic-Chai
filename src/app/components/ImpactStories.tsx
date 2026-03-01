import { BadgeCheck } from 'lucide-react';

export function ImpactStories() {
  const stories = [
    {
      story: 'Our neighborhood faced frequent water supply issues for months. After raising the concern on Civic Chai and gathering community support, the local authorities installed new water lines within three weeks. The power of collective voice is incredible.',
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra'
    },
    {
      story: 'Street lights in our area were non-functional for over a year, making evening walks unsafe. Through Civic Chai discussions, we coordinated with 200+ residents and got the municipal corporation to replace all lights in just 15 days.',
      name: 'Rajesh Kumar',
      location: 'Bangalore, Karnataka'
    },
    {
      story: 'Illegal garbage dumping near our school was affecting children\'s health. After documenting and sharing on Civic Chai, we engaged with environmental officers and community volunteers to clean up and install proper waste management systems.',
      name: 'Anjali Verma',
      location: 'Delhi, NCR'
    }
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 
          className="text-center mb-4 text-gray-900"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.01em'
          }}
        >
          Real Stories. Real Change.
        </h2>

        <p 
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '1.05rem',
            fontWeight: 400
          }}
        >
          Discover how citizens are making a difference in their communities
        </p>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Success Badge Icon */}
              <div className="mb-6 flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-green-600" strokeWidth={2} />
                </div>
                <span 
                  className="text-green-700"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}
                >
                  Resolved
                </span>
              </div>

              {/* Story Summary */}
              <p 
                className="text-gray-700 leading-relaxed mb-6 flex-grow"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 400,
                  lineHeight: '1.7'
                }}
              >
                "{item.story}"
              </p>

              {/* User Info */}
              <div className="border-t border-gray-100 pt-4">
                <p 
                  className="text-gray-900 mb-1"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 600
                  }}
                >
                  {item.name}
                </p>
                <p 
                  className="text-gray-500"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 400
                  }}
                >
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
