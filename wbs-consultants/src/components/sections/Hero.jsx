import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import homeIcon from "../../assets/homeicon.png";

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
      className="relative bg-gradient-to-br from-[#0D4A3F] via-[#0A5F4F] to-[#0D4A3F] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-28 sm:pt-32 pb-12 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#7FD99A] dark:bg-emerald-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#7FD99A]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

      <div className="w-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Container */}
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl w-full text-center"
          >
            {/* Main Heading with Stagger Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white dark:text-gray-100 mb-6 leading-tight"
            >
              WORKS IN
              <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[#7FD99A] dark:text-emerald-400 inline-block"
              >
                BALANCE
              </motion.span>
              <br />
              SHEET
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-white/90 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto px-4"
            >
              We provide expert consulting services for managing and optimizing
              your balance sheet. Let us help you achieve financial clarity and
              stability.
            </motion.p>

            {/* Key Points with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            >
              {[
                "Strategic Financial Planning",
                "Balance Sheet Optimization",
                "Expert Business Consulting",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group bg-white/5 backdrop-blur-sm border border-[#7FD99A]/30 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-[#7FD99A]/50 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-3 h-3 bg-[#7FD99A] dark:bg-emerald-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-base sm:text-lg text-white font-semibold text-center">
                      {point}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="group relative bg-gradient-to-r from-[#7FD99A] to-[#6BC885] hover:from-[#6BC885] hover:to-[#5AB574] dark:from-emerald-500 dark:to-emerald-600 text-[#0D4A3F] dark:text-white px-8 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 min-w-[180px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>GET STARTED</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("#services")}
                className="group bg-transparent border-2 border-[#7FD99A] dark:border-emerald-500 hover:bg-[#7FD99A]/20 dark:hover:bg-emerald-500/20 text-white dark:text-gray-200 px-8 py-3 rounded-full font-bold text-base transition-all duration-300 min-w-[180px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                LEARN MORE
              </motion.button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/70 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>15+ Years Experience</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>100+ Projects Delivered</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>12+ Industries Served</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
