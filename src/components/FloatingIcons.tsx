import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Stethoscope, TrendingUp, Briefcase, Cpu } from 'lucide-react';

const FloatingIcons: React.FC = () => {
  const icons = [
    { Icon: Code, delay: 0, x: 100, y: 50 },
    { Icon: Palette, delay: 0.5, x: -80, y: 80 },
    { Icon: Stethoscope, delay: 1, x: 120, y: -60 },
    { Icon: TrendingUp, delay: 1.5, x: -100, y: -40 },
    { Icon: Briefcase, delay: 2, x: 80, y: 100 },
    { Icon: Cpu, delay: 2.5, x: -120, y: 20 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute top-1/2 left-1/2"
          initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0.3, 0.6, 0],
            x: [0, x, x * 1.2, x * 0.8, x],
            y: [0, y, y * 1.2, y * 0.8, y],
            scale: [0, 1, 1.1, 0.9, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;