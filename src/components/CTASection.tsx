import { ArrowRight, Zap, Users, Trophy } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Sports Silhouettes */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-90"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Level Up Your Game?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of athletes who've discovered the easiest way to book courts and connect with players
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Booking</h3>
              <p className="text-white/80">Book courts in seconds with real-time availability</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Active Community</h3>
              <p className="text-white/80">Connect with 10,000+ passionate players</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Competitive Play</h3>
              <p className="text-white/80">Join tournaments and improve your skills</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-white/90 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-2xl">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/70 mb-6">Trusted by athletes at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">Elite Sports Club</div>
              <div className="text-white font-semibold">Champions Arena</div>
              <div className="text-white font-semibold">Premier Courts</div>
              <div className="text-white font-semibold">Urban Sports Hub</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;