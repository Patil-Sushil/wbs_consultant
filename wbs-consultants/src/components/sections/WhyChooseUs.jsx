import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { whyChooseUs } from "../../data/content";
import { CheckCircle, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="why-us"
      className="py-6 sm:py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-x-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-10"
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Why Choose{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                WBS Consultants
              </span>
            </h2>
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <p className="text-xs sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We deliver exceptional value through expertise, innovation, and
            unwavering commitment to your success
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-3 sm:space-y-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="flex items-start gap-2.5 sm:gap-4 group"
              >
                {/* Bullet Point */}
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 bg-emerald-600 dark:bg-emerald-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Icon on the right (optional decoration) */}
                <div className="hidden md:block flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 sm:mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 px-4 py-3 sm:px-8 sm:py-6 rounded-xl sm:rounded-2xl border border-emerald-200 dark:border-gray-600">
            <p className="text-xs sm:text-lg text-gray-700 dark:text-gray-300 font-medium">
              Ready to transform your business? Let's create a{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                win-win
              </span>{" "}
              partnership together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
