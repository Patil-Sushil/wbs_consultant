import { useTheme } from "../hooks/useTheme";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import ConsultantVsAnalyst from "../components/sections/ConsultantVsAnalyst";
import DetailedServices from "../components/sections/DetailedServices";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";
import ContactCTA from "../components/sections/ContactCTA";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Services />
        <ConsultantVsAnalyst />
        <DetailedServices />
        <WhyChooseUs />
        <Testimonials />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
