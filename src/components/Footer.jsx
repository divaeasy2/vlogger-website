import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center font-bold">
                VL
              </div>
              <span className="font-bold text-lg">Travel Vlogger</span>
            </div>
            <p className="text-gray-300 text-sm">
              Documenting extraordinary adventures and inspiring wanderlust around the globe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-sky-400 transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-sky-400 transition-colors duration-300">About</a></li>
              <li><a href="/contact" className="hover:text-sky-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Me</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Instagram</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">YouTube</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">TikTok</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Twitter</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-3">
              Get travel tips and adventure updates in your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-l-lg text-gray-900 text-sm focus:outline-none w-full"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-sky-500 hover:bg-sky-600 transition-colors duration-300 rounded-r-lg font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Travel Vlogger. Made with <Heart size={16} className="text-red-500" /> and wanderlust.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0 text-gray-400 text-sm">
            <a href="#" className="hover:text-sky-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-sky-400 transition-colors duration-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
