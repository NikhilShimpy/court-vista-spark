import { Calendar, Users, MapPin, Trophy } from "lucide-react";

const CommunityMatches = () => {
  const matches = [
    {
      title: "Weekend Badminton Tournament",
      date: "Dec 16, 2024",
      time: "09:00 AM",
      sport: "Badminton",
      players: "8/16",
      location: "Elite Sports Center",
      level: "Intermediate",
      fee: "$15",
      prize: "$500"
    },
    {
      title: "Friday Night Basketball",
      date: "Dec 15, 2024",
      time: "07:00 PM",
      sport: "Basketball",
      players: "6/10",
      location: "Urban Arena",
      level: "All Levels",
      fee: "$10",
      prize: "Glory"
    },
    {
      title: "Tennis Doubles Championship",
      date: "Dec 18, 2024",
      time: "10:00 AM",
      sport: "Tennis",
      players: "12/16",
      location: "Premier Courts",
      level: "Advanced",
      fee: "$25",
      prize: "$800"
    },
    {
      title: "Sunday Football League",
      date: "Dec 17, 2024",
      time: "11:00 AM",
      sport: "Football",
      players: "18/22",
      location: "Champions Turf",
      level: "Intermediate",
      fee: "$20",
      prize: "$1000"
    },
    {
      title: "Table Tennis Showdown",
      date: "Dec 19, 2024",
      time: "06:00 PM",
      sport: "Table Tennis",
      players: "5/8",
      location: "TT Paradise",
      level: "Beginner",
      fee: "$8",
      prize: "$200"
    }
  ];

  const getSportColor = (sport: string) => {
    const colors = {
      Badminton: "from-primary to-primary/80",
      Basketball: "from-accent to-accent/80",
      Tennis: "from-secondary to-secondary/80",
      Football: "from-primary to-secondary",
      "Table Tennis": "from-accent to-primary"
    };
    return colors[sport as keyof typeof colors] || "from-primary to-secondary";
  };

  return (
    <section id="matches" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Community Matches</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join exciting matches and tournaments happening near you
          </p>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {matches.map((match, index) => (
              <div 
                key={index} 
                className="flex-none w-80 card-3d tilt-card glow-on-hover snap-center"
              >
                {/* Header with Sport Badge */}
                <div className={`h-24 -m-6 mb-6 rounded-t-xl bg-gradient-to-r ${getSportColor(match.sport)} flex items-center justify-between px-6`}>
                  <div>
                    <h3 className="text-xl font-bold text-white">{match.title}</h3>
                    <div className="text-white/90 text-sm">{match.sport}</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-semibold">{match.level}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Date & Time */}
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-5 h-5 mr-3 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">{match.date}</div>
                      <div className="text-sm">{match.time}</div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>{match.location}</span>
                  </div>

                  {/* Players */}
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-5 h-5 mr-3 text-primary" />
                    <span>{match.players} Players</span>
                  </div>

                  {/* Prize */}
                  <div className="flex items-center text-muted-foreground">
                    <Trophy className="w-5 h-5 mr-3 text-accent" />
                    <span>Prize: {match.prize}</span>
                  </div>

                  {/* Fee & Join Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-xl font-bold text-primary">{match.fee}</div>
                    <button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      Join Match
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {matches.map((_, index) => (
              <div key={index} className="w-2 h-2 bg-muted rounded-full"></div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-hero">
            <span>View All Matches</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityMatches;