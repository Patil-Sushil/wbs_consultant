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
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                WBS Consultants
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are a team of experienced professionals dedicated to empowering
              businesses through strategic consulting, financial analysis, and
              innovative technology solutions.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-lg mb-4 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
