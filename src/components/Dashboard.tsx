import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Trophy, Target, Calendar, Briefcase, Users, BookOpen, Zap } from 'lucide-react';
import ProgressBar from './ProgressBar';
import BadgeCollection from './BadgeCollection';
import ChallengeCard from './ChallengeCard';
import CareerSimulationCard from './CareerSimulationCard';
import MentorCard from './MentorCard';
import JobCard from './JobCard';
import EventCard from './EventCard';
import { badges, challenges, mentors, jobOpportunities, events, careerSimulations } from '../data/gamification';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [userProgress] = useState({
    level: 8,
    xp: 2450,
    xpToNext: 3000,
    streak: 12,
    careerReadinessScore: 78
  });
  const [unlockedBadges] = useState(['first-assessment', 'skill-master', 'streak-warrior']);

  const handleCompleteChallenge = (challengeId: string) => {
    console.log('Completing challenge:', challengeId);
    // Add XP, update progress, unlock badges
  };

  const handleStartSimulation = (simulationId: string) => {
    console.log('Starting simulation:', simulationId);
    // Navigate to simulation
  };

  const handleConnectMentor = (mentorId: string) => {
    console.log('Connecting with mentor:', mentorId);
    // Open chat or connection flow
  };

  const handleApplyJob = (jobId: string) => {
    console.log('Applying to job:', jobId);
    // Open application flow
  };

  const handleRegisterEvent = (eventId: string) => {
    console.log('Registering for event:', eventId);
    // Open registration flow
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'challenges', label: 'Challenges', icon: Target },
    { id: 'simulations', label: 'Simulations', icon: Zap },
    { id: 'mentors', label: 'Mentors', icon: Users },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'events', label: 'Events', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-2 sm:px-0">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Welcome back, Student!</h1>
              <p className="text-gray-600 text-sm sm:text-base">Ready to level up your career journey?</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">{userProgress.careerReadinessScore}%</div>
                <div className="text-xs sm:text-sm text-gray-600">Career Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Progress Bar */}
        <motion.div
          className="mb-4 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ProgressBar
            level={userProgress.level}
            xp={userProgress.xp}
            xpToNext={userProgress.xpToNext}
            streak={userProgress.streak}
          />
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-white/60 backdrop-blur-xl rounded-2xl p-1 mb-4 sm:mb-8 overflow-x-auto">
          {tabs.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
              }
              className={`flex-shrink-0 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium transition-all text-sm sm:text-base ${
                activeTab === id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="hidden sm:inline">{label}</span>
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <BadgeCollection badges={badges} unlockedBadges={unlockedBadges} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Active Challenges</h3>
                  <div className="space-y-4">
                    {challenges.slice(0, 2).map((challenge) => (
                      <ChallengeCard
                        key={challenge.id}
                        challenge={challenge}
                        onComplete={handleCompleteChallenge}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Recommended Jobs</h3>
                  <div className="space-y-4">
                    {jobOpportunities.slice(0, 2).map((job) => (
                      <JobCard
                        key={job.id}
                        job={job}
                        onApply={handleApplyJob}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'challenges' && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Daily & Weekly Challenges</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {challenges.map((challenge) => (
                  <ChallengeCard
                    key={challenge.id}
                    challenge={challenge}
                    onComplete={handleCompleteChallenge}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'simulations' && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Career Simulations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {careerSimulations.map((simulation) => (
                  <CareerSimulationCard
                    key={simulation.id}
                    simulation={simulation}
                    onStart={handleStartSimulation}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'mentors' && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Find Your Mentor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {mentors.map((mentor) => (
                  <MentorCard
                    key={mentor.id}
                    mentor={mentor}
                    onConnect={handleConnectMentor}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'jobs' && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Job Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {jobOpportunities.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onApply={handleApplyJob}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {events.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onRegister={handleRegisterEvent}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
          }
  )
}