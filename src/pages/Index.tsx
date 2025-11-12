import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import PartnershipBadge from "@/components/PartnershipBadge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ServicesOverview />
      <PartnershipBadge />
      <Footer />
    </div>
  );
};

export default Index;
