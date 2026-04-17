import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ChevronUp } from "lucide-react";
import { detailedServices } from "../../data/detailedContent";

const DetailedServices = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    { key: "businessConsultant", color: "emerald" },
    { key: "businessAnalyst", color: "blue" },
    { key: "financeAnalyst", color: "purple" },
    { key: "fundRaising", color: "orange" },
    { key: "businessPromotion", color: "pink" },
    { key: "financeEducation", color: "indigo" },
    { key: "strategicPlanning", color: "teal" },
    { key: "processOptimization", color: "cyan" },
    { key: "mentorship", color: "rose" },
    { key: "erpDevelopment", color: "violet" },
    { key: "solutionArchitect", color: "amber" },
  ];

  const toggleService = (key) => {
    setExpandedService(expandedService === key ? null : key);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const renderServiceContent = (service, data) => {
    switch (service.key) {
      case "businessConsultant":
      case "businessAnalyst":
        return (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.description}
            </p>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Key Responsibilities:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {data.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case "financeAnalyst":
        return (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.description}
            </p>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Core Work:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {data.coreWork.map((work, idx) => (
                  <li key={idx}>{work}</li>
                ))}
              </ul>
            </div>
            <p className="text-gray-600 dark:text-gray-400 italic">
              {data.note}
            </p>
          </div>
        );

      case "fundRaising":
        return (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.description}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.purpose}
            </p>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Common Methods:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {data.methods.map((method, idx) => (
                  <li key={idx}>{method}</li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Why It Matters:</strong> {data.importance}
              </p>
            </div>
          </div>
        );

      case "businessPromotion":
        return (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.description}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.context}
            </p>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Key Aspects:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {data.keyAspects.map((aspect, idx) => (
                  <li key={idx}>{aspect}</li>
                ))}
              </ul>
            </div>
            <p className="text-gray-600 dark:text-gray-400 italic">
              {data.summary}
            </p>
          </div>
        );

      case "financeEducation":
        return (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.description}
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {data.balanceSheet.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {data.balanceSheet.description}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-3">
                {data.balanceSheet.components.map((comp, idx) => (
                  <li key={idx}>{comp}</li>
                ))}
              </ul>
              <div className="text-center my-4">
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {data.balanceSheet.equation}
                </p>
              </div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                By learning to read a balance sheet, you can:
              </h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {data.balanceSheet.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
            <p className="text-gray-600 dark:text-gray-400 italic">
              {data.summary}
            </p>
          </div>
        );

      case "strategicPlanning":
        return (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.description}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {data.strategicPlanning.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  {data.strategicPlanning.description}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {data.strategicPlanning.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {data.riskManagement.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  {data.riskManagement.description}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {data.riskManagement.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {data.connection}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {data.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
            <p className="text-gray-600 dark:text-gray-400 italic">
              {data.summary}
            </p>
          </div>
        );

      case "processOptimization":
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {data.processOptimization.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  {data.processOptimization.description}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {data.processOptimization.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  <strong>Benefits:</strong> {data.processOptimization.benefits}
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {data.dataAnalysis.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  {data.dataAnalysis.description}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <strong>Goal:</strong> {data.dataAnalysis.goal}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {data.dataAnalysis.process.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  <strong>Benefits:</strong> {data.dataAnalysis.benefits}
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.integration}
            </p>
          </div>
        );

      case "mentorship":
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {data.mentorship.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  {data.mentorship.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  {data.mentorship.characteristics}
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {data.coaching.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  {data.coaching.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  {data.coaching.characteristics}
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Why They Matter:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {data.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
            <p className="text-gray-600 dark:text-gray-400 italic">
              {data.summary}
            </p>
          </div>
        );

      case "erpDevelopment":
        return (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.description}
            </p>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Development Process:
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {data.developmentProcess.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Implementation Steps:
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {data.implementationSteps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Key Benefits:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {data.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case "solutionArchitect":
        return (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.description}
            </p>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Core Role:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {data.coreRole.map((role, idx) => (
                  <li key={idx}>{role}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Key Responsibilities:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {data.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Typical Skill Sets:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {data.skillSets.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
            <p className="text-gray-600 dark:text-gray-400 italic">
              {data.context}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="detailed-services"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Expertise in{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Detail
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our comprehensive range of services designed to transform
            your business
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {services.map((service) => {
            const data = detailedServices[service.key];
            const isExpanded = expandedService === service.key;

            return (
              <motion.div
                key={service.key}
                variants={itemVariants}
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <motion.button
                  onClick={() => toggleService(service.key)}
                  className="w-full px-6 py-5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200 flex justify-between items-center group"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {data.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {data.subtitle}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-6 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700">
                        {renderServiceContent(service, data)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedServices;
