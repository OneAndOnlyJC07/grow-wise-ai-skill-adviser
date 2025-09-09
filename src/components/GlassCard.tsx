import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  gradient = false 
}) => {
  return (
    <motion.div
      className={`
        relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl
        ${gradient ? 'bg-gradient-to-br from-white/20 to-white/5' : ''}
        ${hover ? 'hover:bg-white/20 hover:border-white/30' : ''}
        transition-all duration-300 shadow-xl
        ${className}
      `}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;