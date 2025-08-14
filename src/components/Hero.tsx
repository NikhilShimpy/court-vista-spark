import heroBg from "@/assets/hero-sports-bg.jpg";
import badmintonIcon from "@/assets/badminton-icon.png";
import tennisIcon from "@/assets/tennis-icon.png";
import basketballIcon from "@/assets/basketball-icon.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: 'translateZ(0)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
      </div>

      {/* Floating Sports Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={badmintonIcon} 
          alt="Badminton" 
          className="absolute top-20 left-10 w-16 h-16 opacity-70 float-animation"
        />
        <img 
          src={tennisIcon} 
          alt="Tennis" 
          className="absolute top-40 right-20 w-20 h-20 opacity-60 float-animation-delayed"
        />
        <img 
          src={basketballIcon} 
          alt="Basketball" 
          className="absolute bottom-40 left-20 w-18 h-18 opacity-80 float-animation-delayed-2"
        />
        <img 
          src={badmintonIcon} 
          alt="Badminton" 
          className="absolute bottom-20 right-10 w-14 h-14 opacity-50 float-animation"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Book.</span>{" "}
          <span className="gradient-text">Play.</span>{" "}
          <span className="gradient-text">Connect.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Find and book the perfect sports facilities near you. Join matches, meet players, and elevate your game.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-hero group">
            <span className="relative z-10">Book Now</span>
          </button>
          
          <button className="px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold">
            Explore Matches
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Sports Facilities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">10K+</div>
            <div className="text-muted-foreground">Active Players</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">25K+</div>
            <div className="text-muted-foreground">Matches Played</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;