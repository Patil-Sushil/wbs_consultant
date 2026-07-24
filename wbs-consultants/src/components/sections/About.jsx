import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { stats } from "../../data/content";
import AnimatedCounter from "../ui/AnimatedCounter";
import {
  Award,
  Target,
  Users,
  TrendingUp,
  Briefcase,
  Shield,
} from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const features = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Aligning business objectives with actionable strategies",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Track record of successful implementations",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Personalized solutions for your unique needs",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Growth Driven",
      description: "Focused on sustainable growth and results",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Briefcase,
      title: "Expert Team",
      description: "Seasoned professionals with industry expertise",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "Building long-term relationships based on trust",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold mb-3">
              About Us
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              About{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                WBS Consultants
              </span>
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are a team of experienced professionals dedicated to empowering
              businesses through strategic consulting, financial analysis, and
              innovative technology solutions.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features as Bullet Points */}
          <motion.div
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 group"
                  >
                    {/* Bullet Point */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-emerald-600 dark:bg-emerald-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Icon on the right */}
                    <div className="hidden md:flex flex-shrink-0 items-center justify-center">
                      <div
                        className={`p-2.5 bg-gradient-to-br ${feature.color} rounded-lg shadow-lg opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
