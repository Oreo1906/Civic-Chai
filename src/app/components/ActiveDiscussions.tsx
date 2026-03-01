import { MessageCircle, ChevronUp, MapPin, ArrowRight } from 'lucide-react';

export function ActiveDiscussions() {
  const discussions = [
    {
      title: 'Pothole Crisis on MG Road – Who is Responsible?',
      preview:
        'The stretch between MG Road and Brigade Road has developed dangerous potholes after the monsoon. Three accidents have already been reported this month alone.',
      location: 'Bangalore, Karnataka',
      replies: 84,
      upvotes: 213,
      tag: 'Infrastructure',
      tagColor: 'bg-orange-100 text-orange-700',
    },
    {
      title: 'Open Sewage Near Sector 14 School — Children at Risk',
      preview:
        'An open drain next to Govt. Primary School Sector 14 has been overflowing for weeks. Parents are worried about the health hazard it poses to students.',
      location: 'Gurugram, Haryana',
      replies: 57,
      upvotes: 178,
      tag: 'Health & Sanitation',
      tagColor: 'bg-red-100 text-red-700',
    },
    {
      title: 'No Street Lighting in Andheri East Colony Since 3 Months',
      preview:
        'Residents of Andheri East Colony are forced to walk in complete darkness every night. Multiple theft incidents have been reported and women feel unsafe.',
      location: 'Mumbai, Maharashtra',
      replies: 42,
      upvotes: 156,
      tag: 'Safety',
      tagColor: 'bg-blue-100 text-blue-700',
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-4">
          <h2
            className="text-gray-900"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}
          >
            Active Discussions
          </h2>
        </div>

        <p
          className="text-center text-gray-500 mb-14 max-w-xl mx-auto"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '1.05rem',
            fontWeight: 400,
          }}
        >
          Citizens are talking. Join the conversation and make your voice count.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
          {discussions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Card Top Bar — colored accent line */}
              <div className="h-1 w-full bg-orange-500" />

              <div className="p-7 flex flex-col flex-grow">
                {/* Tag */}
                <div className="mb-4">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${item.tagColor}`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200 leading-snug"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1.05rem',
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>

                {/* Preview Text */}
                <p
                  className="text-gray-500 leading-relaxed flex-grow mb-6"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    lineHeight: '1.7',
                  }}
                >
                  {item.preview}
                </p>

                {/* Footer Row */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2} />
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '0.78rem',
                        fontWeight: 400,
                      }}
                    >
                      {item.location}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4">
                    {/* Replies */}
                    <div className="flex items-center gap-1 text-gray-400">
                      <MessageCircle className="w-3.5 h-3.5" strokeWidth={2} />
                      <span
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: '0.78rem',
                          fontWeight: 500,
                        }}
                      >
                        {item.replies}
                      </span>
                    </div>

                    {/* Upvotes */}
                    <div className="flex items-center gap-1 text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full">
                      <ChevronUp className="w-3.5 h-3.5" strokeWidth={2.5} />
                      <span
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: '0.78rem',
                          fontWeight: 600,
                        }}
                      >
                        {item.upvotes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button
            className="flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-3.5 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 group"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            View All Discussions
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              strokeWidth={2.5}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
