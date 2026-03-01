import { Eye, MapPin, Heart, CheckCircle } from 'lucide-react';

export function WhyCivicChai() {
  const features = [
    {
      icon: Eye,
      title: 'Transparent Discussions',
      description: 'Open dialogue where every voice is heard and every concern is visible to the community.'
    },
    {
      icon: MapPin,
      title: 'Local Issue Tracking',
      description: 'Track civic issues in your area and stay updated on their progress and resolution.'
    },
    {
      icon: Heart,
      title: 'Community Engagement',
      description: 'Connect with fellow citizens who care about making a difference in your locality.'
    },
    {
      icon: CheckCircle,
      title: 'Verified Impact Updates',
      description: 'Real-time updates on actions taken and tangible outcomes achieved through collective effort.'
    }
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto items-center">
          
          {/* Left Side - Heading and Paragraph */}
          <div className="lg:pr-8">
            <h2 
              className="mb-6 text-gray-900"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                lineHeight: '1.2'
              }}
            >
              Why Civic Chai?
            </h2>
            
            <p 
              className="text-gray-600 leading-relaxed"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                fontWeight: 400,
                lineHeight: '1.7'
              }}
            >
              Civic Chai empowers citizens to become active participants in governance. 
              Our platform bridges the gap between communities and decision-makers, 
              turning everyday conversations into meaningful civic action.
            </p>
          </div>

          {/* Right Side - 4 Feature Blocks in Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 border border-gray-100"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-orange-600" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Feature Title */}
                  <h3 
                    className="mb-2 text-gray-900"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '1.1rem',
                      fontWeight: 600
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-gray-600 leading-relaxed"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.875rem',
                      fontWeight: 400
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
