import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Users, Star } from 'lucide-react';
import { CareerSimulation } from '../types';

interface CareerSimulationCardProps {
  simulation: CareerSimulation;
  onStart: (simulationId: string) => void;
}

const CareerSimulationCard: React.FC<CareerSimulationCardProps> = ({ simulation, onStart }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative">
        <img 
          src={simulation.thumbnail} 
          alt={simulation.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">{simulation.title}</h3>
          <div className="flex items-center gap-4 text-white/90 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{simulation.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{simulation.completedBy.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span>{simulation.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(simulation.difficulty)}`}>
            {simulation.difficulty.charAt(0).toUpperCase() + simulation.difficulty.slice(1)}
          </span>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">{simulation.description}</p>

        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-2">Skills You'll Practice:</h4>
          <div className="flex flex-wrap gap-2">
            {simulation.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <motion.button
          onClick={() => onStart(simulation.id)}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Play className="w-5 h-5" />
          Start Simulation
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CareerSimulationCard;