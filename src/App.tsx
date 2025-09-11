import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Users, TrendingUp, Target, BookOpen, BarChart3, Sparkles, ArrowRight, CheckCircle, User } from 'lucide-react';
import SkillSlider from './components/SkillSlider';
import SkillRadar from './components/SkillRadar';
import CareerCard from './components/CareerCard';
import SkillGapAnalysis from './components/SkillGapAnalysis';
import MarketInsights from './components/MarketInsights';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CareerCategoriesSection from './components/CareerCategoriesSection';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import AnimatedLogo from './components/AnimatedLogo';
import GlassCard from './components/GlassCard';
import Dashboard from './components/Dashboard';
import Dashboard from './components/Dashboard';
import { skills, careerPaths, interests, workStyles, careerStages, indianCities } from './data/careers';
import { Assessment, SkillGap } from './types';

type Screen = 'landing' | 'assessment' | 'interests' | 'profile' | 'results' | 'dashboard';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [assessment, setAssessment] = useState<Assessment>({
    skills: {},
    interests: [],
    workStyle: '',
    careerStage: '',
    location: ''
  });
  const [activeTab, setActiveTab] = useState('recommendations');

  // Initialize skills with zero values
  useEffect(() => {
    const initialSkills: { [key: string]: number } = {};
    skills.forEach(skill => {
      initialSkills[skill.id] = 0;
    });
    setAssessment(prev => ({ ...prev, skills: initialSkills }));
  }, []);

  const handleSkillChange = (skillId: string, value: number) => {
    setAssessment(prev => ({
      ...prev,
      skills: { ...prev.skills, [skillId]: value }
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setAssessment(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  // Calculate career matches
  const getCareerRecommendations = () => {
    return careerPaths.map(career => {
      let matchScore = 0;
      let totalPossible = 0;

      // Skill matching (60% weight)
      career.requiredSkills.forEach(skillName => {
        const skill = skills.find(s => s.name.toLowerCase() === skillName.toLowerCase());
        if (skill) {
          const userLevel = assessment.skills[skill.id] || 0;
          matchScore += userLevel;
          totalPossible += 4; // Max skill level
        }
      });

      // Interest matching (30% weight)
      const interestMatch = assessment.interests.some(interest => 
        career.industries.some(industry => 
          industry.toLowerCase().includes(interest.toLowerCase().split('&')[0].trim().toLowerCase())
        )
      ) ? 0.3 : 0;

      // Location preference (10% weight)
      const locationMatch = career.locations.includes(assessment.location) ? 0.1 : 0;

      const skillPercentage = totalPossible > 0 ? (matchScore / totalPossible) * 0.6 : 0;
      const finalMatch = Math.min(100, Math.round((skillPercentage + interestMatch + locationMatch) * 100));

      return { ...career, matchPercentage: finalMatch };
    }).sort((a, b) => b.matchPercentage - a.matchPercentage);
  };

  // Calculate skill gaps for top career match
  const getSkillGaps = (): SkillGap[] => {
    const recommendations = getCareerRecommendations();
    if (recommendations.length === 0) return [];

    const topCareer = recommendations[0];
    const gaps: SkillGap[] = [];

    topCareer.requiredSkills.forEach(skillName => {
      const skill = skills.find(s => s.name.toLowerCase() === skillName.toLowerCase());
      if (skill) {
        const currentLevel = assessment.skills[skill.id] || 0;
        const requiredLevel = 3; // Assuming intermediate level required
        
        if (currentLevel < requiredLevel) {
          gaps.push({
            skill: skill.name,
            currentLevel,
            requiredLevel,
            priority: currentLevel === 0 ? 'high' : currentLevel === 1 ? 'medium' : 'low',
            learningPath: [
              `Start with ${skill.name} fundamentals and basic concepts`,
              `Practice with beginner-friendly projects and tutorials`,
              `Build intermediate projects to strengthen understanding`,
              `Join communities and contribute to open-source projects`,
              `Pursue advanced certifications and specializations`
            ].slice(currentLevel, requiredLevel + 1)
          });
        }
      }
    });

    return gaps.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  };

  const getSkillsForRadar = () => {
    const categorizedSkills: { [key: string]: { name: string; level: number; category: string } } = {};
    
    skills.forEach(skill => {
      const userLevel = assessment.skills[skill.id] || 0;
      if (!categorizedSkills[skill.category] || categorizedSkills[skill.category].level < userLevel) {
        categorizedSkills[skill.category] = {
          name: skill.name,
          level: userLevel + 1, // Convert 0-4 to 1-5 for radar
          category: skill.category
        };
      }
    });

    return Object.values(categorizedSkills);
  };

  const renderLanding = () => (
    <div className="relative">
      <HeroSection onGetStarted={() => setCurrentScreen('assessment')} />
      <FeaturesSection />
      <CareerCategoriesSection />
      <Footer />
      <SocialLinks />
    </div>
  );

  const renderAssessment = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-6 bg-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <AnimatedLogo size="md" />
                <div>
                  <h1 className="text-2xl font-bold text-white">Skills Assessment</h1>
                  <p className="text-blue-200">Rate your current proficiency in these key skills</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-medium">Step 1 of 3</div>
                <div className="w-32 h-2 bg-white/20 rounded-full mt-2">
                  <div className="w-1/3 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8 bg-white/10 backdrop-blur-xl">
              <div className="space-y-6">
                {skills.map((skill) => (
                  <SkillSlider
                    key={skill.id}
                    skill={skill.name}
                    value={assessment.skills[skill.id] || 0}
                    onChange={(value) => handleSkillChange(skill.id, value)}
                    inDemand={skill.inDemand}
                  />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Skills Radar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlassCard className="p-8 bg-white/10 backdrop-blur-xl h-full">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Your Skills Profile</h3>
              <SkillRadar skills={getSkillsForRadar()} />
            </GlassCard>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-between mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            onClick={() => setCurrentScreen('landing')}
            className="px-6 py-3 text-white/80 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back
          </motion.button>
          <motion.button
            onClick={() => setCurrentScreen('interests')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next: Interests
          </motion.button>
        </motion.div>
      </div>
    </div>
  );

  const renderInterests = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-6 bg-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <AnimatedLogo size="md" />
                <div>
                  <h1 className="text-2xl font-bold text-white">Your Interests</h1>
                  <p className="text-blue-200">Select areas that excite you most (choose 3-5)</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-medium">Step 2 of 3</div>
                <div className="w-32 h-2 bg-white/20 rounded-full mt-2">
                  <div className="w-2/3 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="p-8 bg-white/10 backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.button
                  key={interest}
                  onClick={() => handleInterestToggle(interest)}
                  className={`p-6 rounded-2xl border-2 text-left transition-all ${
                    assessment.interests.includes(interest)
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/50 text-white'
                      : 'bg-white/5 border-white/20 hover:border-purple-400/50 text-white/80 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{interest}</span>
                    {assessment.interests.includes(interest) && (
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          className="flex justify-between mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={() => setCurrentScreen('assessment')}
            className="px-6 py-3 text-white/80 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back
          </motion.button>
          <motion.button
            onClick={() => setCurrentScreen('profile')}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next: Profile
          </motion.button>
        </motion.div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-6 bg-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <AnimatedLogo size="md" />
                <div>
                  <h1 className="text-2xl font-bold text-white">Profile Details</h1>
                  <p className="text-blue-200">Tell us about your work preferences and location</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-medium">Step 3 of 3</div>
                <div className="w-32 h-2 bg-white/20 rounded-full mt-2">
                  <div className="w-full h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="p-8 bg-white/10 backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Work Style */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Preferred Work Style</h3>
                <div className="space-y-4">
                  {workStyles.map((style, index) => (
                    <motion.button
                      key={style}
                      onClick={() => setAssessment(prev => ({ ...prev, workStyle: style }))}
                      className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                        assessment.workStyle === style
                          ? 'bg-gradient-to-r from-pink-500/20 to-red-500/20 border-pink-400/50 text-white'
                          : 'bg-white/5 border-white/20 hover:border-pink-400/50 text-white/80 hover:text-white'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{style}</span>
                        {assessment.workStyle === style && (
                          <CheckCircle className="w-5 h-5 text-pink-400" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Career Stage */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Career Stage</h3>
                <div className="space-y-4">
                  {careerStages.map((stage, index) => (
                    <motion.button
                      key={stage}
                      onClick={() => setAssessment(prev => ({ ...prev, careerStage: stage }))}
                      className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                        assessment.careerStage === stage
                          ? 'bg-gradient-to-r from-pink-500/20 to-red-500/20 border-pink-400/50 text-white'
                          : 'bg-white/5 border-white/20 hover:border-pink-400/50 text-white/80 hover:text-white'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{stage}</span>
                        {assessment.careerStage === stage && (
                          <CheckCircle className="w-5 h-5 text-pink-400" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Location */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Preferred Location</h3>
              <select
                value={assessment.location}
                onChange={(e) => setAssessment(prev => ({ ...prev, location: e.target.value }))}
                className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white focus:border-pink-400/50 focus:outline-none backdrop-blur-xl"
              >
                <option value="" className="bg-gray-900">Select your preferred city</option>
                {indianCities.map((city) => (
                  <option key={city} value={city} className="bg-gray-900">{city}</option>
                ))}
              </select>
            </motion.div>
          </GlassCard>
        </motion.div>

        <motion.div
          className="flex justify-between mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            onClick={() => setCurrentScreen('interests')}
            className="px-6 py-3 text-white/80 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back
          </motion.button>
          <motion.button
            onClick={() => setCurrentScreen('results')}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-2xl hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get My Results
          </motion.button>
        </motion.div>
      </div>
    </div>
  );

  const renderResults = () => {
    const recommendations = getCareerRecommendations();
    const skillGaps = getSkillGaps();

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <motion.nav 
          className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/20"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AnimatedLogo size="md" />
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Grow Wise - Your Career Analysis
                  </h1>
                  <p className="text-sm text-gray-600">Personalized recommendations ready!</p>
                </div>
              </div>
              <motion.button
                onClick={() => setCurrentScreen('landing')}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                New Assessment
              </motion.button>
              <motion.button
                onClick={() => setCurrentScreen('dashboard')}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="w-4 h-4" />
                Dashboard
              </motion.button>
            </div>
            <motion.button
              onClick={() => setCurrentScreen('dashboard')}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="w-4 h-4" />
              Dashboard
            </motion.button>
          </div>
        </motion.nav>

        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            className="flex space-x-1 bg-white/60 backdrop-blur-xl rounded-2xl p-1 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { id: 'recommendations', label: 'Career Recommendations', icon: Users },
              { id: 'skills', label: 'Skills Analysis', icon: Target },
              { id: 'gaps', label: 'Learning Path', icon: BookOpen },
              { id: 'market', label: 'Market Insights', icon: BarChart3 }
            ].map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                  activeTab === id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {activeTab === 'recommendations' && (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Top Career Matches</h2>
                    <p className="text-gray-600">Based on your skills, interests, and preferences</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {recommendations.slice(0, 6).map((career, index) => (
                      <motion.div
                        key={career.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <CareerCard
                          career={career}
                          matchPercentage={career.matchPercentage}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Skills Profile</h2>
                    <p className="text-gray-600">Visual representation of your current skill levels</p>
                  </div>
                  <GlassCard className="p-8 bg-white/80 backdrop-blur-xl">
                    <SkillRadar skills={getSkillsForRadar()} />
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                      {getSkillsForRadar().map((skill, index) => (
                        <motion.div
                          key={index}
                          className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-white/40"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <div className="font-semibold text-gray-800">{skill.category}</div>
                          <div className="text-blue-600 font-medium">Level {skill.level}</div>
                          <div className="text-sm text-gray-600">{skill.name}</div>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              )}

              {activeTab === 'gaps' && (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Learning Roadmap</h2>
                    <p className="text-gray-600">Personalized paths to bridge your skill gaps</p>
                  </div>
                  {skillGaps.length > 0 ? (
                    <SkillGapAnalysis skillGaps={skillGaps} />
                  ) : (
                    <GlassCard className="p-12 text-center bg-white/80 backdrop-blur-xl">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Great Job!</h3>
                      <p className="text-gray-600">You have all the required skills for your top career match.</p>
                    </GlassCard>
                  )}
                </div>
              )}

              {activeTab === 'market' && (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Intelligence</h2>
                    <p className="text-gray-600">Latest trends and insights from the Indian job market</p>
                  </div>
                  <MarketInsights />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  };

  // Main render logic
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentScreen}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {currentScreen === 'landing' && renderLanding()}
        {currentScreen === 'assessment' && renderAssessment()}
        {currentScreen === 'interests' && renderInterests()}
        {currentScreen === 'profile' && renderProfile()}
        {currentScreen === 'results' && renderResults()}
        {currentScreen === 'dashboard' && <Dashboard />}
        {currentScreen === 'dashboard' && <Dashboard />}
      </motion.div>
    </AnimatePresence>
  );
}

export default App;