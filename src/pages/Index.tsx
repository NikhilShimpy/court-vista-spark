import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SportsFacilities from "@/components/SportsFacilities";
import CommunityMatches from "@/components/CommunityMatches";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <SportsFacilities />
      <CommunityMatches />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
