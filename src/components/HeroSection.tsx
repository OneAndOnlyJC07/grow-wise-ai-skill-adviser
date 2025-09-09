import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Target, TrendingUp } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';
import GlassCard from './GlassCard';
import AnimatedCounter from './AnimatedCounter';
import FloatingIcons from './FloatingIcons';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      <FloatingIcons />

      {/* Navigation */}
      <motion.nav 
        className="relative z-20 bg-white/5 backdrop-blur-xl border-b border-white/10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AnimatedLogo size="md" />
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Grow Wise
                </h1>
                <p className="text-sm text-blue-200">AI Career Advisor</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#careers" className="text-white/80 hover:text-white transition-colors">Careers</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">AI-Powered Career Intelligence</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Discover Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Dream Career
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Get personalized career recommendations, skill gap analysis, and actionable insights 
            tailored for the evolving Indian job market. Make informed decisions about your future with AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={onGetStarted}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                Find My Career Path
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
            
            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: Users, value: 10000, suffix: '+', label: 'Students Guided' },
              { icon: Target, value: 500, suffix: '+', label: 'Career Paths' },
              { icon: TrendingUp, value: 95, suffix: '%', label: 'Success Rate' },
              { icon: Sparkles, value: 50, suffix: '+', label: 'Skills Tracked' }
            ].map(({ icon: Icon, value, suffix, label }, index) => (
              <GlassCard key={index} className="p-6 text-center" hover={false}>
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={value} suffix={suffix} />
                </div>
                <div className="text-blue-200 text-sm">{label}</div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;