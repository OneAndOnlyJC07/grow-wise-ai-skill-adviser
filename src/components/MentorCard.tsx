import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Star, Briefcase } from 'lucide-react';
import { Mentor } from '../types';

interface MentorCardProps {
  mentor: Mentor;
  onConnect: (mentorId: string) => void;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor, onConnect }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <img
          src={mentor.avatar}
          alt={mentor.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
        />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800">{mentor.name}</h3>
          <p className="text-blue-600 font-medium">{mentor.title}</p>
          <p className="text-gray-600 text-sm">{mentor.company}</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span className="text-sm font-medium">{mentor.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm">{mentor.experience}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{mentor.bio}</p>

      <div className="mb-4">
        <h4 className="font-medium text-gray-800 mb-2">Expertise:</h4>
        <div className="flex flex-wrap gap-2">
          {mentor.expertise.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <motion.button
        onClick={() => onConnect(mentor.id)}
        className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <MessageCircle className="w-5 h-5" />
        Connect with Mentor
      </motion.button>
    </motion.div>
  );
};

export default MentorCard;