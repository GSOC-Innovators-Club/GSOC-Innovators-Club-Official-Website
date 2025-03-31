import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-[999]"
    >
      {/* Animated loader with gradient */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-24 h-24 mb-8"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-green-500 border-b-yellow-500 border-l-red-500"
        />
      </motion.div>

      {/* Loading text with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-center"
      >
        <motion.h2 
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-2xl font-bold text-white mb-2"
        >
          Loading
        </motion.h2>
        <p className="text-gray-400">Preparing your experience</p>
      </motion.div>

      {/* Progress bar */}
      <motion.div 
        className="w-64 h-1 bg-gray-700 rounded-full mt-8 overflow-hidden"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
          style={{ originX: 0 }}
        />
      </motion.div>
    </motion.div>
  );
};