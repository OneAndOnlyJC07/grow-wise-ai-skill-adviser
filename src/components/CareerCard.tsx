import React from 'react';
import { TrendingUp, MapPin, Star } from 'lucide-react';
import { CareerPath } from '../types';

interface CareerCardProps {
  career: CareerPath;
  matchPercentage: number;
}

const CareerCard: React.FC<CareerCardProps> = ({ career, matchPercentage }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-gray-800">{career.title}</h3>
            {career.emergingRole && (
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                Emerging Role
              </span>
            )}
          </div>
          <p className="text-gray-600 text-sm mb-3">{career.description}</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-blue-600">{matchPercentage}%</div>
          <div className="text-xs text-blue-500">Match</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-50 rounded-lg p-3">
          <div className="text-green-700 font-semibold">{career.averageSalary}</div>
          <div className="text-green-600 text-sm">Average Salary</div>
        </div>
        <div className="bg-orange-50 rounded-lg p-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-orange-600" />
          <div>
            <div className="text-orange-700 font-semibold">{career.growthRate}</div>
            <div className="text-orange-600 text-sm">Growth Rate</div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-gray-800 mb-2">Key Skills Required:</h4>
        <div className="flex flex-wrap gap-2">
          {career.requiredSkills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
          {career.requiredSkills.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
              +{career.requiredSkills.length - 4} more
            </span>
          )}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-gray-800 mb-2">Top Industries:</h4>
        <div className="flex flex-wrap gap-2">
          {career.industries.map((industry) => (
            <span
              key={industry}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <MapPin className="w-4 h-4" />
        <span>Top locations: {career.locations.join(', ')}</span>
      </div>
    </div>
  );
};

export default CareerCard;