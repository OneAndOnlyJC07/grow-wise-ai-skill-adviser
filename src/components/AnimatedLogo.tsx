import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Target } from 'lucide-react';

const AnimatedLogo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} relative cursor-pointer`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl"
        animate={{
          background: [
            'linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)',
            'linear-gradient(45deg, #8B5CF6, #EC4899, #3B82F6)',
            'linear-gradient(45deg, #EC4899, #3B82F6, #8B5CF6)',
            'linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)'
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm"
        animate={{
          boxShadow: [
            '0 0 20px rgba(59, 130, 246, 0.3)',
            '0 0 30px rgba(139, 92, 246, 0.4)',
            '0 0 25px rgba(236, 72, 153, 0.3)',
            '0 0 20px rgba(59, 130, 246, 0.3)'
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Brain className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedLogo;