import React from 'react';
import { Target, TrendingUp, BookOpen } from 'lucide-react';
import { SkillGap } from '../types';

interface SkillGapAnalysisProps {
  skillGaps: SkillGap[];
}

const SkillGapAnalysis: React.FC<SkillGapAnalysisProps> = ({ skillGaps }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '⚪';
    }
  };

  return (
    <div className="space-y-4">
      {skillGaps.map((gap, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="text-lg font-bold text-gray-800">{gap.skill}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-600">
                    Current: Level {gap.currentLevel + 1} → Target: Level {gap.requiredLevel + 1}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(gap.priority)}`}>
                    {getPriorityIcon(gap.priority)} {gap.priority.toUpperCase()} Priority
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {gap.requiredLevel - gap.currentLevel}
              </div>
              <div className="text-sm text-blue-500">levels to go</div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Progress to Target</span>
              <span className="text-sm font-medium text-gray-800">
                {Math.round((gap.currentLevel / gap.requiredLevel) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(gap.currentLevel / gap.requiredLevel) * 100}%` }}
              ></div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Recommended Learning Path:
            </h4>
            <div className="space-y-2">
              {gap.learningPath.map((step, stepIndex) => (
                <div key={stepIndex} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                    {stepIndex + 1}
                  </div>
                  <span className="text-sm text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillGapAnalysis;