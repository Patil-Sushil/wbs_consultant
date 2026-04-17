import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, link, index }) => {
  return (
    <motion.a
      href={link}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card rounded-xl p-6 group cursor-pointer hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300"
    >
      <div className="mb-4 inline-block p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 group-hover:bg-emerald-500 dark:group-hover:bg-emerald-500 transition-colors duration-300">
        <Icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

      <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
        Learn More
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </motion.a>
  );
};

export default ServiceCard;
