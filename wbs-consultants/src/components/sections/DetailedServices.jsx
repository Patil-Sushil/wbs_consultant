import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { detailedServices } from "../../data/detailedContent";

const DetailedServices = () => {
  const [expandedService, setExpandedService] = useState(null);

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
    <section id="detailed-services" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-emerald-700 dark:text-emerald-400 mb-4">
          Our Expertise in Detail
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Explore our comprehensive range of services designed to transform your
          business
        </p>

        <div className="space-y-4">
          {services.map((service) => {
            const data = detailedServices[service.key];
            const isExpanded = expandedService === service.key;

            return (
              <div
                key={service.key}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleService(service.key)}
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors duration-200 flex justify-between items-center"
                >
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {data.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {data.subtitle}
                    </p>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-6 py-6 bg-white dark:bg-gray-900">
                    {renderServiceContent(service, data)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
