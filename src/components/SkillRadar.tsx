import React from 'react';

interface SkillRadarProps {
  skills: { name: string; level: number; category: string }[];
}

const SkillRadar: React.FC<SkillRadarProps> = ({ skills }) => {
  const categories = [...new Set(skills.map(s => s.category))];
  const maxLevel = 5;

  return (
    <div className="relative w-80 h-80 mx-auto">
      <svg viewBox="0 0 320 320" className="w-full h-full">
        {/* Grid circles */}
        {[1, 2, 3, 4, 5].map(level => (
          <circle
            key={level}
            cx="160"
            cy="160"
            r={level * 25}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}
        
        {/* Grid lines */}
        {categories.map((_, index) => {
          const angle = (index * 360) / categories.length - 90;
          const x2 = 160 + Math.cos((angle * Math.PI) / 180) * 125;
          const y2 = 160 + Math.sin((angle * Math.PI) / 180) * 125;
          return (
            <line
              key={index}
              x1="160"
              y1="160"
              x2={x2}
              y2={y2}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          );
        })}

        {/* Skill polygon */}
        <polygon
          points={categories
            .map((category, index) => {
              const skillInCategory = skills.find(s => s.category === category);
              const level = skillInCategory ? skillInCategory.level : 0;
              const angle = (index * 360) / categories.length - 90;
              const radius = (level / maxLevel) * 125;
              const x = 160 + Math.cos((angle * Math.PI) / 180) * radius;
              const y = 160 + Math.sin((angle * Math.PI) / 180) * radius;
              return `${x},${y}`;
            })
            .join(' ')}
          fill="rgba(59, 130, 246, 0.3)"
          stroke="#3B82F6"
          strokeWidth="2"
        />

        {/* Labels */}
        {categories.map((category, index) => {
          const angle = (index * 360) / categories.length - 90;
          const x = 160 + Math.cos((angle * Math.PI) / 180) * 140;
          const y = 160 + Math.sin((angle * Math.PI) / 180) * 140;
          return (
            <text
              key={category}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs font-medium fill-gray-700"
            >
              {category}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default SkillRadar;