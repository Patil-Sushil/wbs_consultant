import { useTheme } from "../hooks/useTheme";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import ConsultantVsAnalyst from "../components/sections/ConsultantVsAnalyst";
import DetailedServices from "../components/sections/DetailedServices";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ContactCTA from "../components/sections/ContactCTA";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import PreLoader from "../components/ui/PreLoader";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      {/* PreLoader Animation */}
      <PreLoader />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <ConsultantVsAnalyst />
        <DetailedServices />
        <WhyChooseUs />
        <ContactCTA />
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Home;
