import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onRegister: (eventId: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onRegister }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'workshop': return 'text-blue-600 bg-blue-100';
      case 'hackathon': return 'text-purple-600 bg-purple-100';
      case 'webinar': return 'text-green-600 bg-green-100';
      case 'career-fair': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'workshop': return '🛠️';
      case 'hackathon': return '💻';
      case 'webinar': return '📹';
      case 'career-fair': return '🤝';
      default: return '📅';
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 ${getTypeColor(event.type).replace('text-', 'bg-').replace('bg-', 'bg-gradient-to-r from-').replace('-100', '-400 to-').replace('bg-gradient-to-r from-blue-400 to-', 'bg-gradient-to-r from-blue-400 to-blue-500')} rounded-xl flex items-center justify-center text-xl`}>
            {getTypeIcon(event.type)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1).replace('-', ' ')}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{event.date.toLocaleDateString('en-IN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users className="w-4 h-4" />
          <span>Organized by {event.organizer}</span>
        </div>
      </div>

      {event.skills.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-2">Relevant Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {event.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <motion.button
        onClick={() => onRegister(event.id)}
        className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <ExternalLink className="w-5 h-5" />
        Register Now
      </motion.button>
    </motion.div>
  );
};

export default EventCard;