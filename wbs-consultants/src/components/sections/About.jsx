const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop"
                alt="Professional Business Consultant"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-4 border-b-4 border-emerald-500 inline-block pb-2">
              Your Trusted Partner in Finance & Technology
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am a Financial Consultant, Business Analyst, Mentor, and ERP
              Implementation Specialist with over{" "}
              <span className="font-semibold">15 years</span> of experience
              helping businesses streamline operations and achieve sustainable
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
