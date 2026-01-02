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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-adventure-500 to-forest-600 rounded-lg flex items-center justify-center font-bold text-lg">
                ✈️
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-adventure-400 to-forest-400 bg-clip-text text-transparent">Travel Vlogger</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Documenting extraordinary adventures and inspiring wanderlust around the globe. Join us on the journey!
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-2.5 bg-slate-800 hover:bg-adventure-500 rounded-lg transition-all duration-300 hover:scale-110"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-gray-400 hover:text-adventure-400 transition-colors duration-300 flex items-center group">
                    <span className="w-0 h-0.5 bg-adventure-500 group-hover:w-2 transition-all duration-300 mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {['Travel Guides', 'Photography Tips', 'Destinations'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-adventure-400 transition-colors duration-300 flex items-center group">
                    <span className="w-0 h-0.5 bg-adventure-500 group-hover:w-2 transition-all duration-300 mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get travel tips and adventure updates in your inbox.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-adventure-500 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-gradient-to-r from-adventure-500 to-forest-600 hover:shadow-lg hover:shadow-adventure-500/50 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-12"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} Travel Vlogger. Made with <Heart size={16} className="text-red-500 fill-red-500" /> and wanderlust.
          </p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-adventure-400 transition-colors duration-300">Privacy Policy</a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-adventure-400 transition-colors duration-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
