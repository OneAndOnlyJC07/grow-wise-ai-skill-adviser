import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Stethoscope, TrendingUp, Briefcase, Cpu, Users, BookOpen } from 'lucide-react';
import GlassCard from './GlassCard';

const CareerCategoriesSection: React.FC = () => {
  const categories = [
    {
      icon: Code,
      title: 'Technology',
      description: 'Software Development, AI/ML, Cybersecurity, Cloud Computing',
      jobs: '45,000+',
      growth: '+22%',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Briefcase,
      title: 'Business',
      description: 'Product Management, Consulting, Strategy, Operations',
      jobs: '32,000+',
      growth: '+18%',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'UI/UX Design, Graphic Design, Product Design',
      jobs: '18,000+',
      growth: '+28%',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Medical Technology, Biotechnology, Health Analytics',
      jobs: '25,000+',
      growth: '+15%',
      gradient: 'from-red-500 to-orange-500',
      bgGradient: 'from-red-50 to-orange-50'
    },
    {
      icon: TrendingUp,
      title: 'Finance',
      description: 'FinTech, Investment Banking, Financial Analysis',
      jobs: '28,000+',
      growth: '+20%',
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50'
    },
    {
      icon: Users,
      title: 'Marketing',
      description: 'Digital Marketing, Content Strategy, Brand Management',
      jobs: '22,000+',
      growth: '+25%',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50'
    },
    {
      icon: BookOpen,
      title: 'Education',
      description: 'EdTech, Training & Development, Academic Research',
      jobs: '15,000+',
      growth: '+12%',
      gradient: 'from-teal-500 to-green-500',
      bgGradient: 'from-teal-50 to-green-50'
    },
    {
      icon: Cpu,
      title: 'Emerging Tech',
      description: 'Blockchain, IoT, Quantum Computing, Robotics',
      jobs: '8,000+',
      growth: '+45%',
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-50 to-purple-50'
    }
  ];

  return (
    <section id="careers" className="py-12 sm:py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Explore
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Career Categories</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover opportunities across diverse industries and find your perfect career match
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className={`p-4 sm:p-6 h-full bg-gradient-to-br ${category.bgGradient} border-white/40`}>
                <div className={`w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-3 sm:mb-4`}>
                  <category.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">{category.description}</p>
                
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div>
                    <div className="font-semibold text-gray-900">{category.jobs}</div>
                    <div className="text-gray-500">Open Jobs</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">{category.growth}</div>
                    <div className="text-gray-500">Growth</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-lg transition-all text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Categories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerCategoriesSection;