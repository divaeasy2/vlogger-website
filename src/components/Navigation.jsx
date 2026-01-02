import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 shadow-lg transition-all duration-300 border-b border-gray-100 dark:border-slate-800 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-10 sm:w-11 h-10 sm:h-11 bg-gradient-to-br from-adventure-500 to-forest-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-adventure-500/50 group-hover:shadow-xl transition-shadow duration-300">
              ✈️
            </div>
            <span className="hidden sm:inline font-bold text-lg sm:text-xl bg-gradient-to-r from-adventure-600 to-forest-600 bg-clip-text text-transparent">
              Travel Vlogger
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-adventure-600 dark:hover:text-adventure-400 transition-colors duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-adventure-500 to-forest-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-adventure-600 dark:text-adventure-400 hover:bg-adventure-100 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-adventure-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 dark:border-slate-800 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2.5 px-4 text-gray-700 dark:text-gray-300 hover:text-adventure-600 dark:hover:text-adventure-400 transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
