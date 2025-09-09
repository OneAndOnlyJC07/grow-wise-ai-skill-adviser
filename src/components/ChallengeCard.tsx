import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Trophy, Clock } from 'lucide-react';
import { Challenge } from '../types';

interface ChallengeCardProps {
  challenge: Challenge;
  onComplete: (challengeId: string) => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, onComplete }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'daily': return 'from-green-500 to-emerald-500';
      case 'weekly': return 'from-blue-500 to-cyan-500';
      case 'milestone': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'daily': return '📅';
      case 'weekly': return '📊';
      case 'milestone': return '🏆';
      default: return '⭐';
    }
  };

  return (
    <motion.div
      className={`relative p-6 rounded-2xl border-2 ${
        challenge.completed 
          ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' 
          : 'bg-white border-gray-200 hover:border-blue-300'
      } transition-all`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {challenge.completed && (
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">✓</span>
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(challenge.type)} rounded-xl flex items-center justify-center text-xl`}>
            {getTypeIcon(challenge.type)}
          </div>
          <div>
            <h3 className="font-bold text-gray-800">{challenge.title}</h3>
            <p className="text-sm text-gray-600 capitalize">{challenge.type} Challenge</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-yellow-600 font-medium">
            <Trophy className="w-4 h-4" />
            <span>{challenge.xpReward} XP</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-4">{challenge.description}</p>

      <div className="space-y-2 mb-4">
        <h4 className="font-medium text-gray-800">Requirements:</h4>
        {challenge.requirements.map((req, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span>{req}</span>
          </div>
        ))}
      </div>

      {challenge.deadline && (
        <div className="flex items-center gap-2 text-sm text-orange-600 mb-4">
          <Clock className="w-4 h-4" />
          <span>Deadline: {challenge.deadline.toLocaleDateString()}</span>
        </div>
      )}

      {!challenge.completed && (
        <motion.button
          onClick={() => onComplete(challenge.id)}
          className={`w-full py-3 bg-gradient-to-r ${getTypeColor(challenge.type)} text-white font-semibold rounded-xl hover:shadow-lg transition-all`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Start Challenge
        </motion.button>
      )}
    </motion.div>
  );
};

export default ChallengeCard;