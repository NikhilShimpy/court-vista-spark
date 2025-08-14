import { MapPin, Users, Play } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Book a Court",
      description: "Browse and book sports facilities near you with real-time availability and instant confirmation."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Join/Create Matches",
      description: "Connect with players of similar skill levels or create your own matches and tournaments."
    },
    {
      icon: <Play className="w-12 h-12" />,
      title: "Play & Connect",
      description: "Show up, play amazing games, and build lasting connections with the sports community."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps and join the most active sports community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform translate-x-4 z-0"></div>
              )}
              
              {/* Card */}
              <div className="card-3d tilt-card text-center relative z-10 glow-on-hover">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;