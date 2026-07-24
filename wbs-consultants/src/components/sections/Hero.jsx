import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 90; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#0D4A3F] via-[#0A5F4F] to-[#0D4A3F] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-8 sm:pt-36 sm:pb-16 overflow-hidden flex items-center w-full min-h-[60vh] sm:min-h-[75vh]"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#7FD99A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Main Content Wrapper (Centered & High-Density) */}
        <div className="w-full text-center flex flex-col items-center">
          {/* Professional Small Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4"
          >
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Balance Sheet Consulting & Optimization
            </span>
          </motion.div>

          {/* Simple, Professional, Clean Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4 max-w-4xl"
          >
            WORKS IN
            <br />
            <span className="text-[#7FD99A] dark:text-emerald-400 inline-block mt-1.5 sm:mt-3">
              BALANCE SHEET
            </span>
          </motion.h1>

          {/* Punchy Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-lg md:text-xl text-white/90 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-4xl px-4"
          >
            Expert consulting aligning assets, liabilities, and equity to unlock
            capital efficiency, reduce operational risks, and maximize long-term
            cash flow. Our customized diagnostics identify hidden liquidity and
            optimize working capital structures. We seamlessly bridge corporate
            finance strategy with robust ERP implementations. Through active
            partnership, we equip leadership teams with key indicators to drive
            sustainable capital growth.
          </motion.p>

          {/* Compact CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto mb-6 sm:mb-8 px-4"
          >
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="group bg-gradient-to-r from-[#7FD99A] to-[#6BC885] hover:from-[#6BC885] hover:to-[#5AB574] dark:from-emerald-500 dark:to-emerald-600 text-[#0D4A3F] dark:text-white px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 w-full sm:w-auto sm:min-w-[160px]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>GET STARTED</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("#services")}
              className="bg-transparent border border-[#7FD99A] dark:border-emerald-500 hover:bg-[#7FD99A]/10 text-white dark:text-gray-200 px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto sm:min-w-[160px]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              LEARN MORE
            </motion.button>
          </motion.div>

          {/* Inline Trust Badges - Very Compact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3 sm:gap-6 text-white/70 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#7FD99A] rounded-full"></span>
              <span>15+ Years Experience</span>
            </div>
            <div className="w-px h-3 bg-white/20"></div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#7FD99A] rounded-full"></span>
              <span>100+ Projects Delivered</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
