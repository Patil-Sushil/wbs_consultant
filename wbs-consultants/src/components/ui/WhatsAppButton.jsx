import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919371112215"; // WhatsApp number without + or spaces
  const message = "Hello! I'm interested in your consulting services.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        {/* Tooltip/Message Box */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-20 right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 w-64 mb-2"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                  Chat with us!
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  Hi there! How can we help you today?
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-300 w-full"
                >
                  Start Chat
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Main WhatsApp Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 10px 25px rgba(37, 211, 102, 0.3)",
              "0 10px 35px rgba(37, 211, 102, 0.5)",
              "0 10px 25px rgba(37, 211, 102, 0.3)",
            ],
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {/* Pulse Ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Icon */}
          <MessageCircle className="w-8 h-8 text-white relative z-10" />

          {/* Notification Badge */}
          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-white text-xs font-bold">1</span>
          </motion.div>
        </motion.button>
      </motion.div>
    </>
  );
};

export default WhatsAppButton;
