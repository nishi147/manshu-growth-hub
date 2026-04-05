import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import AboutSection from "@/components/AboutSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
