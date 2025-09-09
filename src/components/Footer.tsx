import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <AnimatedLogo size="md" />
              <div>
                <h3 className="text-2xl font-bold">Grow Wise</h3>
                <p className="text-blue-200">AI Career Advisor</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed max-w-md">
              Empowering Indian students with AI-powered career guidance, personalized recommendations, 
              and actionable insights for the evolving job market.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-blue-200">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@growwise.ai</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Features', 'Career Categories', 'Success Stories', 'Blog', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Career Guide', 'Skill Assessment', 'Industry Reports', 'Learning Paths', 'FAQ', 'Support'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-blue-200 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>for Indian students</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-blue-200">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>© 2024 Grow Wise. All rights reserved.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;