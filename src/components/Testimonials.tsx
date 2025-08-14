import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tennis Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "QuickCourt has completely transformed how I find tennis partners. The booking process is seamless and I've met amazing players through their match system!"
    },
    {
      name: "Mike Chen",
      role: "Badminton Player",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Finding quality badminton courts used to be a hassle. Now I can book my favorite court in seconds and join tournaments with players of my skill level."
    },
    {
      name: "Emma Davis",
      role: "Basketball Coach",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "As a coach, QuickCourt helps me organize training sessions and find courts for my team. The platform is incredibly user-friendly and reliable."
    },
    {
      name: "Alex Rodriguez",
      role: "Football Captain",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The community aspect is what sets QuickCourt apart. I've not only found great fields but also connected with passionate players who share my love for the game."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">What Players Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied athletes who've elevated their game with QuickCourt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-3d tilt-card glow-on-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Ready to join our community?</p>
          <button className="btn-hero">
            <span>Start Playing Today</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;