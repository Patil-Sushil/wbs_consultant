import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Lightbulb, TrendingUp, CheckCircle } from "lucide-react";

const ConsultantVsAnalyst = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-6 sm:py-20 bg-white dark:bg-gray-800 overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-16"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-4">
            Understanding Our{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Dual Expertise
            </span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We combine strategic vision with practical implementation to deliver
            comprehensive business solutions
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-12"
        >
          {/* Business Consultant Card */}
          <motion.div
            variants={cardVariants}
            className="relative bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-emerald-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-full blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-3 sm:mb-6">
                <div className="p-2 sm:p-3 bg-emerald-600 rounded-lg">
                  <Target className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                    Business Consultant
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    Strategic Advisor
                  </p>
                </div>
              </div>

              <div className="mb-3 sm:mb-6">
                <div className="inline-block bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full mb-2 sm:mb-4">
                  <p className="text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-semibold italic">
                    "What should be done and why?"
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  We provide expert advice to help organizations improve
                  performance, address challenges, and achieve strategic
                  objectives. Our emphasis is on assessing the company's overall
                  direction, market position, and competitive environment.
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-xs sm:text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                  Key Responsibilities:
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {[
                    "Developing and refining business strategies",
                    "Offering external, industry-informed perspectives",
                    "Supporting long-term growth, innovation, and transformation initiatives",
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Business Analyst Card */}
          <motion.div
            variants={cardVariantsRight}
            className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-blue-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-3 sm:mb-6">
                <div className="p-2 sm:p-3 bg-blue-600 rounded-lg">
                  <TrendingUp className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                    Business Analyst
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">
                    Implementation Specialist
                  </p>
                </div>
              </div>

              <div className="mb-3 sm:mb-6">
                <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-2 sm:mb-4">
                  <p className="text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold italic">
                    "How should it be done?"
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our focus is on understanding specific business needs and
                  translating them into actionable solutions. We analyze
                  processes, gather and document requirements, and work closely
                  with both commercial and technical teams.
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-xs sm:text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  Key Responsibilities:
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {[
                    "Examining workflows and identifying areas for improvement",
                    "Acting as a liaison between stakeholders and technical teams",
                    "Ensuring solutions meet requirements and deliver measurable value",
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-emerald-600 to-blue-600 p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl"
        >
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">
            The Perfect Combination
          </h3>
          <p className="text-xs sm:text-base text-white/90 max-w-3xl mx-auto">
            By combining strategic consulting with practical analysis, we ensure
            your business not only knows what to do, but also how to do it
            effectively. This dual approach creates sustainable growth and
            measurable results.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultantVsAnalyst;
