import React from 'react';
import { Heart, Instagram, Youtube, Linkedin, Twitch } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitch, href: '#', label: 'TikTok' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-black text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-adventure-500 to-forest-600 rounded-lg flex items-center justify-center font-bold text-lg">
                ✈️
              </div>
              <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-adventure-400 to-forest-400 bg-clip-text text-transparent">Travel Vlogger</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Documenting extraordinary adventures and inspiring wanderlust around the globe. Join us on the journey!
            </p>
            <div className="flex space-x-2 sm:space-x-4 pt-3 sm:pt-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                const colors = [
                  'from-pink-500 to-rose-500',
                  'from-red-500 to-orange-500',
                  'from-black to-gray-800 dark:from-white dark:to-gray-400',
                  'from-blue-600 to-cyan-500'
                ];
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="group relative"
                    title={social.label}
                  >
                    <div className={`w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br ${colors[idx]} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 hover:-translate-y-2`}>
                      <Icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <span className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-xs sm:text-sm text-gray-400 hover:text-adventure-400 transition-colors duration-300 flex items-center group">
                    <span className="w-0 h-0.5 bg-adventure-500 group-hover:w-2 transition-all duration-300 mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Travel Guides', 'Photography Tips', 'Destinations'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-adventure-400 transition-colors duration-300 flex items-center group">
                    <span className="w-0 h-0.5 bg-adventure-500 group-hover:w-2 transition-all duration-300 mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              Get travel tips and adventure updates in your inbox.
            </p>
            <form className="flex flex-col space-y-2 sm:space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-gray-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-adventure-500 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-adventure-500 to-forest-600 hover:shadow-lg hover:shadow-adventure-500/50 text-white rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8 sm:my-12"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">
          <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-2">
            © {currentYear} Travel Vlogger. Made with <Heart size={14} className="text-red-500 fill-red-500" /> and wanderlust.
          </p>
          <div className="flex gap-3 sm:gap-6 text-gray-400 text-xs sm:text-sm">
            <a href="#" className="hover:text-adventure-400 transition-colors duration-300">Privacy Policy</a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-adventure-400 transition-colors duration-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
