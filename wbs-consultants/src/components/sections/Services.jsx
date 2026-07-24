import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "../../data/content";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const scrollToService = (link) => {
    // Update the URL hash first to trigger auto-expand
    window.location.hash = link.replace("#", "");

    // Then scroll to the element (heading)
    setTimeout(() => {
      const element = document.querySelector(link);
      if (element) {
        // Scroll to the top of the card/heading
        const offset = 100; // Increased offset to show more above the heading
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section
      id="services"
      className="py-6 sm:py-12 bg-gray-50 dark:bg-gray-900 overflow-x-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-16"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-4">
            Our{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Comprehensive
            </span>{" "}
            Services
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            End-to-end business solutions designed to drive growth, efficiency,
            and strategic success
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white dark:bg-gray-800 p-2 sm:p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700 overflow-hidden"
                onClick={() => scrollToService(service.link)}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/5 to-teal-50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Icon Container */}
                  <motion.div
                    className="flex justify-center mb-1.5 sm:mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="p-1.5 sm:p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 transition-colors duration-300">
                      <Icon
                        className="w-5 h-5 sm:w-8 sm:h-8 text-emerald-600 dark:text-emerald-400"
                        strokeWidth={1.5}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xs sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 text-center group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2 min-h-[2rem] flex items-center justify-center leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400 text-center mb-1 sm:mb-4 line-clamp-2 leading-tight">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-2.5 h-2.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
