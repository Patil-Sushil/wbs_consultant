import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Exit after 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#0A3D34] via-[#0D5748] to-[#0A3D34]"
        >
          {/* Subtle background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#7FD99A]/10 to-transparent"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo with subtle glow */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.img
                src={logo}
                alt="WBS Consultants"
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                animate={{
                  filter: [
                    "drop-shadow(0 0 15px rgba(127, 217, 154, 0.4))",
                    "drop-shadow(0 0 25px rgba(127, 217, 154, 0.5))",
                    "drop-shadow(0 0 15px rgba(127, 217, 154, 0.4))",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Company name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-2 tracking-wide">
                WBS
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[#7FD99A] tracking-[0.25em]">
                CONSULTANTS
              </p>
            </motion.div>
          </div>

          {/* Subtle corner decorations */}
          <motion.div
            className="absolute top-10 right-10 w-40 h-40 bg-[#7FD99A]/10 rounded-full blur-3xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl"
            animate={{
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
