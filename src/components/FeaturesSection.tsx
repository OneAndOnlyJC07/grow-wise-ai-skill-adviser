import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, TrendingUp, Users, BookOpen, BarChart3 } from 'lucide-react';
import GlassCard from './GlassCard';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze your skills, interests, and market trends to provide personalized recommendations.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Skill Gap Analysis',
      description: 'Identify exactly what skills you need to develop for your dream career with detailed learning roadmaps.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description: 'Stay ahead with real-time insights on emerging roles, salary trends, and job opportunities across India.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Users,
      title: 'Personalized Matching',
      description: 'Get career recommendations tailored to your unique profile, work style, and location preferences.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: BookOpen,
      title: 'Learning Pathways',
      description: 'Structured learning paths with curated resources, certifications, and project recommendations.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Monitor your skill development journey with detailed analytics and milestone achievements.',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Why Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Grow Wise?</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience the future of career guidance with our comprehensive AI-powered platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 sm:p-8 h-full bg-white/80 backdrop-blur-xl">
                <div className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                  <feature.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;