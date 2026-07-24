import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#0D4A3F] via-[#0A5F4F] to-[#0D4A3F] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
          {/* Animated particles background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#7FD99A] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo with scale animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="mb-8"
            >
              <motion.img
                src={logo}
                alt="WBS Consultants"
                className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                animate={{
                  scale: [1, 1.1, 1],
                  filter: [
                    "drop-shadow(0 0 20px rgba(127, 217, 154, 0.5))",
                    "drop-shadow(0 0 40px rgba(127, 217, 154, 0.8))",
                    "drop-shadow(0 0 20px rgba(127, 217, 154, 0.5))",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Company name with letter animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center mb-6"
            >
              <motion.h1
                className="text-5xl sm:text-6xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {"WBS".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-xl sm:text-2xl font-semibold text-[#7FD99A] tracking-wider"
              >
                CONSULTANTS
              </motion.p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="w-64 h-2 bg-white/10 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.6, duration: 1.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#7FD99A] to-emerald-400 rounded-full"
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: 1.8,
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
              className="mt-6 text-white/70 text-sm tracking-widest"
            >
              LOADING...
            </motion.p>
          </div>

          {/* Circular progress rings */}
          <motion.div
            className="absolute"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.div
              className="w-96 h-96 border-4 border-[#7FD99A]/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <motion.div
            className="absolute"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.div
              className="w-[500px] h-[500px] border-4 border-emerald-400/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
