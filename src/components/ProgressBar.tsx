import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Zap } from 'lucide-react';

interface ProgressBarProps {
  level: number;
  xp: number;
  xpToNext: number;
  streak: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ level, xp, xpToNext, streak }) => {
  const progress = (xp / xpToNext) * 100;
  
  const getLevelTitle = (level: number) => {
    if (level < 5) return 'Beginner Explorer';
    if (level < 10) return 'Skill Builder';
    if (level < 20) return 'Career Navigator';
    if (level < 30) return 'Industry Expert';
    return 'Career Master';
  };

  const getLevelIcon = (level: number) => {
    if (level < 5) return Star;
    if (level < 20) return Zap;
    return Trophy;
  };

  const Icon = getLevelIcon(level);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Level {level}</h3>
            <p className="text-sm text-gray-600">{getLevelTitle(level)}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-orange-600 font-medium">
            <span>🔥</span>
            <span>{streak} day streak</span>
          </div>
          <p className="text-sm text-gray-600">{xp}/{xpToNext} XP</p>
        </div>
      </div>
      
      <div className="relative">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Current XP: {xp}</span>
          <span>Next Level: {xpToNext - xp} XP to go</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;