import { Clock, Star, MapPin } from "lucide-react";

const SportsFacilities = () => {
  const facilities = [
    {
      name: "Elite Badminton Center",
      sport: "Badminton",
      rating: 4.8,
      price: "$25/hour",
      location: "Downtown Sports Complex",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      features: ["AC", "Parking", "Equipment Rental"]
    },
    {
      name: "Premier Tennis Courts",
      sport: "Tennis",
      rating: 4.9,
      price: "$35/hour",
      location: "Riverside Tennis Club",
      image: "https://images.unsplash.com/photo-1542333391-ffc142d57cd3?w=400&h=300&fit=crop",
      features: ["Floodlights", "Coaching", "Cafe"]
    },
    {
      name: "Urban Basketball Arena",
      sport: "Basketball",
      rating: 4.7,
      price: "$20/hour",
      location: "City Sports Hub",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&h=300&fit=crop",
      features: ["Indoor", "Scoreboard", "Changing Rooms"]
    },
    {
      name: "Champions Football Turf",
      sport: "Football",
      rating: 4.8,
      price: "$50/hour",
      location: "Sports Village",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop",
      features: ["Full Size", "Floodlights", "Parking"]
    },
    {
      name: "Table Tennis Paradise",
      sport: "Table Tennis",
      rating: 4.6,
      price: "$15/hour",
      location: "Community Center",
      image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=400&h=300&fit=crop",
      features: ["Multiple Tables", "Equipment", "AC"]
    },
    {
      name: "Aqua Swimming Complex",
      sport: "Swimming",
      rating: 4.9,
      price: "$30/hour",
      location: "Wellness Resort",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=300&fit=crop",
      features: ["Olympic Size", "Lifeguard", "Lockers"]
    }
  ];

  return (
    <section id="facilities" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Popular Sports Facilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover top-rated facilities with world-class amenities and perfect playing conditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="card-3d tilt-card overflow-hidden glow-on-hover group">
              {/* Image */}
              <div className="relative h-48 mb-6 -m-6 mb-6">
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                
                {/* Sport Badge */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {facility.sport}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent fill-current" />
                  <span className="text-sm font-semibold">{facility.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {facility.name}
                </h3>

                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{facility.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-primary">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{facility.price}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {facility.features.map((feature, idx) => (
                    <span key={idx} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Book Button */}
                <button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsFacilities;