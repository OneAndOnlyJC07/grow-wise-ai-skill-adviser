import React from 'react';
import { TrendingUp, Users, DollarSign, MapPin } from 'lucide-react';

const MarketInsights: React.FC = () => {
  const trendingSkills = [
    { skill: 'AI/ML', growth: '+45%', demand: 'Very High' },
    { skill: 'Cloud Computing', growth: '+38%', demand: 'High' },
    { skill: 'Data Science', growth: '+32%', demand: 'High' },
    { skill: 'Cybersecurity', growth: '+28%', demand: 'High' },
    { skill: 'UI/UX Design', growth: '+25%', demand: 'Medium' },
  ];

  const cityInsights = [
    { city: 'Bangalore', jobs: '45,000+', avgSalary: '₹12.5L', growth: '+18%' },
    { city: 'Hyderabad', jobs: '28,000+', avgSalary: '₹10.8L', growth: '+22%' },
    { city: 'Mumbai', jobs: '35,000+', avgSalary: '₹13.2L', growth: '+15%' },
    { city: 'Pune', jobs: '22,000+', avgSalary: '₹9.8L', growth: '+20%' },
  ];

  const emergingRoles = [
    { role: 'Prompt Engineer', companies: '150+', salaryRange: '₹15-35L' },
    { role: 'Cloud Security Architect', companies: '200+', salaryRange: '₹20-45L' },
    { role: 'Data Product Manager', companies: '120+', salaryRange: '₹18-40L' },
    { role: 'Sustainability Analyst', companies: '80+', salaryRange: '₹8-20L' },
  ];

  return (
    <div className="space-y-8">
      {/* Trending Skills */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-600" />
          Trending Skills in India
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingSkills.map((item, index) => (
            <div key={index} className="p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-100">
              <div className="font-semibold text-gray-800">{item.skill}</div>
              <div className="text-green-600 font-medium text-sm">{item.growth} growth</div>
              <div className="text-blue-600 text-sm">Demand: {item.demand}</div>
            </div>
          ))}
        </div>
      </div>

      {/* City Insights */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-blue-600" />
          Job Market by City
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cityInsights.map((city, index) => (
            <div key={index} className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold text-gray-800">{city.city}</div>
                <div className="text-green-600 font-medium text-sm">{city.growth}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-blue-600 font-medium">{city.jobs}</div>
                  <div className="text-gray-600 text-sm">Open Jobs</div>
                </div>
                <div>
                  <div className="text-purple-600 font-medium">{city.avgSalary}</div>
                  <div className="text-gray-600 text-sm">Avg Salary</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emerging Roles */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-600" />
          Emerging Roles in 2024
        </h3>
        <div className="space-y-4">
          {emergingRoles.map((role, index) => (
            <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-800">{role.role}</div>
                  <div className="text-purple-600 text-sm">{role.companies} companies hiring</div>
                </div>
                <div className="text-right">
                  <div className="text-green-600 font-medium">{role.salaryRange}</div>
                  <div className="text-gray-600 text-sm">Salary Range</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;