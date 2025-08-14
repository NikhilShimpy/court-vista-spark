import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Sports: ["Badminton", "Tennis", "Basketball", "Football", "Table Tennis", "Swimming"],
    Company: ["About Us", "Careers", "Press", "Partners", "Contact"],
    Support: ["Help Center", "Safety", "Community Guidelines", "Terms of Service", "Privacy Policy"],
    Resources: ["Blog", "Events", "Mobile App", "API", "Developers"]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "Youtube" }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-4">QuickCourt</h2>
                <p className="text-muted-foreground text-lg max-w-md">
                  Connecting athletes with the perfect sports facilities and building communities through the love of sports.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>123 Sports Avenue, Athletic District, AD 12345</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-SPORT</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>hello@quickcourt.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-muted hover:bg-primary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-300 hover:scale-110 glow-on-hover"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-semibold text-foreground mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-card border border-border rounded-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Stay in the Game</h3>
                <p className="text-muted-foreground">Get the latest updates on tournaments, new facilities, and exclusive offers.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary flex-1 min-w-[250px]"
                />
                <button className="btn-hero whitespace-nowrap">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 QuickCourt. All rights reserved. Built for athletes, by athletes.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;