import { TrendingUp, Search, GraduationCap, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Financial Consulting",
      subtitle: "Strategic Planning",
      description: "& Risk Management",
    },
    {
      icon: Search,
      title: "Business Analysis",
      subtitle: "Process Optimization",
      description: "& Data Insights",
    },
    {
      icon: GraduationCap,
      title: "Mentorship & Advisory",
      subtitle: "Guidance & Leadership",
      description: "Coaching",
    },
    {
      icon: Settings,
      title: "ERP Implementation",
      subtitle: "ERP Integration",
      description: "& Support",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-emerald-700 dark:text-emerald-400 mb-12">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-emerald-50 dark:bg-gray-800 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Icon
                    className="w-16 h-16 text-emerald-700 dark:text-emerald-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {service.subtitle}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
