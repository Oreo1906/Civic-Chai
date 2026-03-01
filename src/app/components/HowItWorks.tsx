import { MessageSquare, Users, Sparkles } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Raise Your Concern',
      description: 'Share your civic issues, grievances, and ideas with the community. Your voice matters and can spark meaningful change.'
    },
    {
      icon: Users,
      title: 'Discuss With Community',
      description: 'Engage in constructive discussions with fellow citizens. Build consensus and strengthen your case through collective support.'
    },
    {
      icon: Sparkles,
      title: 'Drive Real Impact',
      description: 'Turn conversations into action. Get noticed by decision-makers and create tangible positive change in your community.'
    }
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 
          className="text-center mb-16 md:mb-20 text-gray-900"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.01em'
          }}
        >
          How Civic Chai Works
        </h2>

        {/* Three Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Step Title */}
                <h3 
                  className="text-center mb-4 text-gray-900"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1.35rem',
                    fontWeight: 600
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-center text-gray-600 leading-relaxed"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 400
                  }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
