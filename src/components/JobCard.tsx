import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, ExternalLink } from 'lucide-react';
import { JobOpportunity } from '../types';

interface JobCardProps {
  job: JobOpportunity;
  onApply: (jobId: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onApply }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship': return 'text-blue-600 bg-blue-100';
      case 'full-time': return 'text-green-600 bg-green-100';
      case 'part-time': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const daysAgo = Math.floor((Date.now() - job.postedDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-1">{job.title}</h3>
          <p className="text-blue-600 font-medium mb-2">{job.company}</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{daysAgo} days ago</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-600 mb-1">{job.matchPercentage}%</div>
          <div className="text-sm text-gray-500">Match</div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(job.type)}`}>
          {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
        </span>
        <div className="flex items-center gap-1 text-green-600 font-medium">
          <span>{job.salary}</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{job.description}</p>

      <div className="mb-4">
        <h4 className="font-medium text-gray-800 mb-2">Required Skills:</h4>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <motion.button
        onClick={() => onApply(job.id)}
        className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <ExternalLink className="w-5 h-5" />
        Apply Now
      </motion.button>
    </motion.div>
  );
};

export default JobCard;