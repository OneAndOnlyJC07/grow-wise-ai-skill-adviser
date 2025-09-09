import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../types';

interface BadgeCollectionProps {
  badges: Badge[];
  unlockedBadges: string[];
}

const BadgeCollection: React.FC<BadgeCollectionProps> = ({ badges, unlockedBadges }) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-600';
      case 'rare': return 'from-blue-400 to-blue-600';
      case 'epic': return 'from-purple-400 to-purple-600';
      case 'legendary': return 'from-yellow-400 to-orange-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Your Achievements</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge, index) => {
          const isUnlocked = unlockedBadges.includes(badge.id);
          return (
            <motion.div
              key={badge.id}
              className={`relative p-4 rounded-xl border-2 text-center transition-all ${
                isUnlocked 
                  ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200' 
                  : 'bg-gray-50 border-gray-200 opacity-50'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={isUnlocked ? { scale: 1.05 } : {}}
            >
              {isUnlocked && (
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${getRarityColor(badge.rarity)} rounded-full flex items-center justify-center`}>
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
              <div className="text-3xl mb-2">{badge.icon}</div>
              <h4 className="font-semibold text-sm text-gray-800 mb-1">{badge.name}</h4>
              <p className="text-xs text-gray-600">{badge.description}</p>
              <div className={`mt-2 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getRarityColor(badge.rarity)} text-white`}>
                {badge.rarity.toUpperCase()}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BadgeCollection;