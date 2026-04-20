import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { testimonials } from "../../data/content";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  User,
  Building2,
  TrendingUp,
} from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
          >
            <TrendingUp className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white tracking-wide">
              CLIENT SUCCESS STORIES
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto">
            Real experiences from businesses we've helped transform and grow
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Main Testimonial Card with 3D Effect */}
          <div className="relative min-h-[450px] flex items-center justify-center perspective-1000">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="w-full max-w-4xl"
              >
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Top Bar */}
                  <div className="h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500"></div>

                  <div className="p-8 md:p-12 relative">
                    {/* Large Quote Icon Background */}
                    <div className="absolute top-8 right-8 opacity-5">
                      <Quote className="w-32 h-32 text-emerald-600 dark:text-emerald-400" />
                    </div>

                    {/* Stars with Animation */}
                    <div className="flex justify-center gap-1 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{
                            opacity: i < currentTestimonial.rating ? 1 : 0.2,
                            scale: 1,
                            rotate: 0,
                          }}
                          transition={{
                            delay: i * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                        >
                          <Star
                            className={`w-7 h-7 ${
                              i < currentTestimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600"
                            }`}
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote Text */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center mb-10 leading-relaxed relative z-10"
                    >
                      <Quote className="inline w-8 h-8 text-emerald-500 dark:text-emerald-400 mr-2 -mt-2" />
                      <span className="italic">{currentTestimonial.quote}</span>
                      <Quote className="inline w-8 h-8 text-emerald-500 dark:text-emerald-400 ml-2 -mt-2 rotate-180" />
                    </motion.blockquote>

                    {/* Author Section with Enhanced Design */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                      {/* Avatar */}
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                          <User className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800">
                          <Building2 className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Author Info */}
                      <div className="text-center sm:text-left">
                        <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {currentTestimonial.author}
                        </p>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-base">
                          {currentTestimonial.position}
                        </p>
                        <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                          <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation */}
          <div className="flex flex-col items-center gap-6 mt-12">
            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4">
              <motion.button
                onClick={prevTestimonial}
                className="group p-4 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full transition-all duration-300 border border-white/30"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-emerald-100 transition-colors" />
              </motion.button>

              {/* Enhanced Dots Indicator */}
              <div className="flex gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className="relative"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div
                      className={`rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-10 h-3 bg-white"
                          : "w-3 h-3 bg-white/40 hover:bg-white/60"
                      }`}
                    />
                    {index === currentIndex && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-full bg-white/30 blur-sm"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="group p-4 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full transition-all duration-300 border border-white/30"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-emerald-100 transition-colors" />
              </motion.button>
            </div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                key={currentIndex}
                className="h-full bg-white rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>

            {/* Counter */}
            <motion.div
              className="text-center text-white/80 text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-white font-bold">{currentIndex + 1}</span>
              {" / "}
              <span>{testimonials.length}</span>
              <span className="mx-2">•</span>
              <span className="text-emerald-200">Auto-playing</span>
            </motion.div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Happy Clients", value: "500+", icon: User },
            { label: "Success Rate", value: "98%", icon: TrendingUp },
            { label: "5-Star Reviews", value: "200+", icon: Star },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <stat.icon className="w-8 h-8 text-white mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-emerald-100 text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
