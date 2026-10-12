import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold flex items-center">
              <span className="text-blue-700">JR</span>
              <span className="text-emerald-500">10</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-600 hover:text-blue-700 font-medium">{t.nav.home}</a>
            <a href="#services" className="text-gray-600 hover:text-blue-700 font-medium">{t.nav.services}</a>
            <a href="#" className="text-gray-600 hover:text-blue-700 font-medium">{t.nav.about}</a>
            <button 
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="flex items-center space-x-1 text-gray-500 hover:text-blue-700"
            >
              <Globe size={18} />
              <span className="text-sm font-bold uppercase">{language}</span>
            </button>
            <a href="#quote" className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-colors">
              {t.nav.quote}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="p-2 text-gray-500"
            >
              <span className="text-sm font-bold uppercase">{language}</span>
            </button>
            <button onClick={toggleMenu} className="p-2 text-blue-700">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-blue-700 z-40 flex flex-col justify-center items-center text-white md:hidden"
          >
            <nav className="flex flex-col space-y-8 text-center text-3xl font-bold">
              <motion.a href="#" onClick={toggleMenu} whileHover={{ scale: 1.1 }}>{t.nav.home}</motion.a>
              <motion.a href="#services" onClick={toggleMenu} whileHover={{ scale: 1.1 }}>{t.nav.services}</motion.a>
              <motion.a href="#" onClick={toggleMenu} whileHover={{ scale: 1.1 }}>{t.nav.about}</motion.a>
              <motion.a href="#quote" onClick={toggleMenu} whileHover={{ scale: 1.1 }} className="text-emerald-400">{t.nav.quote}</motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
