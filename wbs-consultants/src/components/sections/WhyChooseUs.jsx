import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    "Proven ERP Success Across Industries",
    "Holistic Approach: Finance, Operations & Technology",
    "Personalized Mentorship for Growth",
  ];

  return (
    <section id="why-us" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-emerald-700 dark:text-emerald-400 mb-12">
          Why Choose Me
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm"
            >
              <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
