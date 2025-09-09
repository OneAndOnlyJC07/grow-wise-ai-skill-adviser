import React from 'react';

interface SkillSliderProps {
  skill: string;
  value: number;
  onChange: (value: number) => void;
  inDemand?: boolean;
}

const SkillSlider: React.FC<SkillSliderProps> = ({ skill, value, onChange, inDemand = false }) => {
  const levels = ['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'];

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-800">{skill}</span>
          {inDemand && (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
              High Demand
            </span>
          )}
        </div>
        <span className="text-sm text-gray-600">{levels[value]}</span>
      </div>
      
      <div className="relative">
        <input
          type="range"
          min="0"
          max="4"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between mt-1">
          {levels.map((level, index) => (
            <span
              key={level}
              className={`text-xs ${
                index <= value ? 'text-blue-600 font-medium' : 'text-gray-400'
              }`}
            >
              {level}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSlider;