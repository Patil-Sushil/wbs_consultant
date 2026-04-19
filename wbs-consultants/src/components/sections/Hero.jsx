import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

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
      className="relative bg-gradient-to-br from-[#0D4A3F] via-[#0A5F4F] to-[#0D4A3F] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-0 overflow-hidden min-h-screen flex items-stretch"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
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

      <div className="w-full grid lg:grid-cols-2 relative z-10">
        {/* Left Side - Content */}
        <div className="bg-[#0D4A3F]/50 dark:bg-gray-900/50 backdrop-blur-sm flex items-center justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#7FD99A]/20 dark:bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#7FD99A]/30 dark:border-emerald-500/30"
            >
              <CheckCircle className="w-4 h-4 text-[#7FD99A] dark:text-emerald-400" />
              <span className="text-sm font-semibold text-white dark:text-gray-200">
                Trusted Financial Experts
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white dark:text-gray-100 mb-6 leading-tight">
              WORKS IN
              <br />
              <span className="text-[#7FD99A] dark:text-emerald-400">
                BALANCE
              </span>
              <br />
              SHEET
            </h1>

            <p className="text-lg sm:text-xl text-white/90 dark:text-gray-300 mb-8 leading-relaxed">
              We provide expert consulting services for managing and optimizing
              your balance sheet. Let us help you achieve financial clarity and
              stability.
            </p>

            {/* Key Points */}
            <div className="space-y-3 mb-10">
              {[
                "Strategic Financial Planning",
                "Balance Sheet Optimization",
                "Expert Business Consulting",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-[#7FD99A] dark:bg-emerald-400 rounded-full"></div>
                  <span className="text-white/80 dark:text-gray-300">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="group bg-[#7FD99A] hover:bg-[#6BC885] dark:bg-emerald-500 dark:hover:bg-emerald-600 text-[#0D4A3F] dark:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GET STARTED
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("#services")}
                className="bg-transparent border-2 border-[#7FD99A] dark:border-emerald-500 hover:bg-[#7FD99A]/10 dark:hover:bg-emerald-500/10 text-white dark:text-gray-200 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LEARN MORE
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Business Card */}
        <div className="bg-[#7FD99A] dark:bg-emerald-500 flex items-center justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-0 relative">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-10 right-10 w-40 h-40 bg-[#0D4A3F]/10 dark:bg-gray-900/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 dark:bg-white/5 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-lg relative z-10"
          >
            {/* Document/Balance Sheet Icon */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="bg-[#0D4A3F] dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
                <svg
                  className="w-64 h-64 sm:w-72 sm:h-72"
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Frame */}
                  <rect
                    x="20"
                    y="20"
                    width="260"
                    height="200"
                    rx="8"
                    stroke="#7FD99A"
                    strokeWidth="8"
                    fill="none"
                    className="dark:stroke-emerald-400"
                  />

                  {/* Inner Frame */}
                  <rect
                    x="40"
                    y="40"
                    width="220"
                    height="160"
                    rx="6"
                    stroke="#7FD99A"
                    strokeWidth="6"
                    fill="none"
                    className="dark:stroke-emerald-400"
                  />

                  {/* Document Lines */}
                  <line
                    x1="60"
                    y1="70"
                    x2="120"
                    y2="70"
                    stroke="#7FD99A"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="dark:stroke-emerald-400"
                  />
                  <line
                    x1="60"
                    y1="100"
                    x2="110"
                    y2="100"
                    stroke="#7FD99A"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="dark:stroke-emerald-400"
                  />
                  <line
                    x1="60"
                    y1="130"
                    x2="120"
                    y2="130"
                    stroke="#7FD99A"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="dark:stroke-emerald-400"
                  />
                  <line
                    x1="60"
                    y1="160"
                    x2="110"
                    y2="160"
                    stroke="#7FD99A"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="dark:stroke-emerald-400"
                  />
                  <line
                    x1="60"
                    y1="190"
                    x2="120"
                    y2="190"
                    stroke="#7FD99A"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="dark:stroke-emerald-400"
                  />

                  {/* Balance Scale */}
                  <rect
                    x="160"
                    y="185"
                    width="80"
                    height="10"
                    rx="5"
                    fill="#7FD99A"
                    className="dark:fill-emerald-400"
                  />
                  <rect
                    x="197"
                    y="90"
                    width="6"
                    height="95"
                    fill="#7FD99A"
                    className="dark:fill-emerald-400"
                  />
                  <circle
                    cx="200"
                    cy="90"
                    r="8"
                    fill="#7FD99A"
                    className="dark:fill-emerald-400"
                  />
                  <rect
                    x="150"
                    y="87"
                    width="100"
                    height="6"
                    rx="3"
                    fill="#7FD99A"
                    className="dark:fill-emerald-400"
                  />
                  <path
                    d="M 160 87 L 145 115 L 175 115 Z"
                    fill="#7FD99A"
                    className="dark:fill-emerald-400"
                  />
                  <ellipse
                    cx="160"
                    cy="115"
                    rx="20"
                    ry="6"
                    fill="#7FD99A"
                    className="dark:fill-emerald-400"
                  />
                  <path
                    d="M 240 87 L 225 115 L 255 115 Z"
                    fill="#7FD99A"
                    className="dark:fill-emerald-400"
                  />
                  <ellipse
                    cx="240"
                    cy="115"
                    rx="20"
                    ry="6"
                    fill="#7FD99A"
                    className="dark:fill-emerald-400"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Company Name */}
            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[#0D4A3F] dark:text-gray-900 mb-2">
                WBS
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-[#0D4A3F] dark:text-gray-900 tracking-wider">
                CONSULTANTS
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-3 text-[#0D4A3F] dark:text-gray-900 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-3xl sm:text-4xl font-bold">Shri</p>
              <p className="text-2xl sm:text-3xl font-bold">9371225251</p>
              <p className="text-xl sm:text-2xl font-semibold break-all">
                shri@wbsconsultants.com
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
