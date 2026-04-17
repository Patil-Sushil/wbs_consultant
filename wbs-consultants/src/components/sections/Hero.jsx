import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-32 pb-24 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-32 right-20 text-white/10"
        variants={floatingVariants}
        animate="animate"
      >
        <Sparkles className="w-16 h-16" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-20 text-white/10"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Sparkles className="w-12 h-12" />
      </motion.div>

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

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Your Trusted Business Partner
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Financial <span className="text-emerald-200">Insight.</span>
          <br className="hidden sm:block" />
          Strategic <span className="text-emerald-200">Advisory.</span>
          <br className="hidden sm:block" />
          ERP <span className="text-emerald-200">Excellence.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-emerald-50 dark:text-gray-300 mb-4 max-w-3xl mx-auto"
        >
          Empowering Your Business for Success
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base text-emerald-100/90 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Strategic consulting, financial analysis, and custom ERP solutions
          tailored to drive growth and operational excellence
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={() => scrollToSection("#contact")}
            className="group bg-white hover:bg-emerald-50 text-emerald-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("#contact")}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            <span>Schedule a Call</span>
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">15+</div>
            <div className="text-sm text-emerald-100">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">100+</div>
            <div className="text-sm text-emerald-100">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">12+</div>
            <div className="text-sm text-emerald-100">Industries Served</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
