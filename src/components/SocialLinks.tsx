import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Linkedin, Instagram, Share2 } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: '#',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: '#',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      icon: Share2,
      label: 'Share',
      href: '#',
      color: 'from-gray-600 to-gray-700',
      hoverColor: 'hover:from-gray-700 hover:to-gray-800'
    }
  ];

  return (
    <motion.div
      className="fixed right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-2 sm:space-y-3"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          className={`
            group flex items-center justify-center w-12 h-12 
            sm:w-12 sm:h-12 w-10 h-10
            bg-gradient-to-r ${link.color} ${link.hoverColor}
            rounded-full shadow-lg backdrop-blur-sm
            transition-all duration-300
          `}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          title={link.label}
        >
          <link.icon className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
          
          {/* Tooltip */}
          <div className="absolute right-12 sm:right-14 bg-gray-900 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {link.label}
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;