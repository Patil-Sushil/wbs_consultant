const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-emerald-700 dark:bg-gray-900 pt-32 pb-20 overflow-hidden"
    >
      {/* Wave Pattern Background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-emerald-800 dark:text-gray-800"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Financial <span className="font-bold">Insight.</span> Strategic{" "}
          <span className="font-bold">Advisory.</span> ERP{" "}
          <span className="font-bold">Excellence.</span>
        </h1>

        <p className="text-lg text-emerald-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Empowering Your Business for Success
        </p>

        <button
          onClick={() => scrollToSection("#contact")}
          className="bg-white hover:bg-emerald-50 text-emerald-700 px-8 py-3 rounded-md font-semibold transition-colors duration-300"
        >
          Book a Consultation
        </button>
      </div>
    </section>
  );
};

export default Hero;
