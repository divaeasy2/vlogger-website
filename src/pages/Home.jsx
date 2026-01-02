import React from 'react';
import { Link } from 'react-router-dom';
import { Gallery } from '../components/Gallery';
import { MapPin, Heart, Camera } from 'lucide-react';

export const Home = () => {
  // Sample gallery data - replace these with actual images/videos
  const galleryItems = [
    {
      id: 1,
      title: 'Mountain Summit',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      description: 'An unforgettable sunrise at 3000 meters elevation.',
    },
    {
      id: 2,
      title: 'Tropical Paradise',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
      description: 'Crystal clear waters and pristine beaches.',
    },
    {
      id: 3,
      title: 'Desert Adventure',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop',
      src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop',
      description: 'Golden dunes under the starry night sky.',
    },
    {
      id: 4,
      title: 'Northern Lights',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
      src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop',
      description: 'Aurora Borealis dancing across the Arctic sky.',
    },
    {
      id: 5,
      title: 'Forest Exploration',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
      description: 'Discovering hidden waterfalls in the rainforest.',
    },
    {
      id: 6,
      title: 'Urban Exploration',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop',
      src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=800&fit=crop',
      description: 'Vibrant streets and iconic landmarks across the globe.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Top left orb */}
          <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-adventure-200 dark:bg-adventure-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
          
          {/* Bottom right orb */}
          <div className="absolute -bottom-10 sm:bottom-10 -right-10 sm:right-10 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-forest-200 dark:bg-forest-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70" style={{animationDelay: '2s'}}></div>
          
          {/* Middle accent orb */}
          <div className="absolute top-1/3 right-1/4 sm:right-1/3 w-32 sm:w-64 md:w-72 h-32 sm:h-64 md:h-72 bg-earth-200 dark:bg-earth-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Discover the World <span className="bg-gradient-to-r from-adventure-600 to-forest-600 bg-clip-text text-transparent">Through My Lens</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Join me on extraordinary journeys across breathtaking landscapes, hidden gems, and unforgettable moments captured in stunning galleries and videos.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div className="p-3 sm:p-4 bg-white dark:bg-slate-800/50 rounded-lg sm:rounded-xl border border-gray-100 dark:border-slate-700 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-adventure-500 to-forest-500 bg-clip-text text-transparent">15+</div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Countries</p>
                </div>
                <div className="p-3 sm:p-4 bg-white dark:bg-slate-800/50 rounded-lg sm:rounded-xl border border-gray-100 dark:border-slate-700 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-forest-500 to-earth-500 bg-clip-text text-transparent">500+</div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Adventures</p>
                </div>
                <div className="p-3 sm:p-4 bg-white dark:bg-slate-800/50 rounded-lg sm:rounded-xl border border-gray-100 dark:border-slate-700 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-earth-500 to-adventure-500 bg-clip-text text-transparent">50K+</div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Followers</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-8">
                <Link to="/about" className="btn-primary inline-block text-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
                  Learn About Me
                </Link>
                <a href="#gallery" className="btn-secondary inline-block text-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
                  View Gallery
                </a>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="animate-fade-in relative hidden sm:block">
              <div className="relative">
                {/* Decorative gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-adventure-400 via-forest-400 to-earth-400 rounded-3xl transform rotate-6 scale-105 opacity-75"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-forest-500 to-adventure-400 rounded-3xl transform -rotate-6 scale-105 opacity-50"></div>
                
                {/* Image Container */}
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop"
                    alt="Travel Vlogger"
                    className="w-full h-auto aspect-square object-cover hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-adventure-500 to-forest-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                    <span>✈️</span>
                    <span>Travel Vlogger</span>
                  </div>
                </div>

                {/* Floating elements around image */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-adventure-400 to-forest-400 rounded-2xl shadow-lg opacity-80 hidden lg:block"></div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-earth-400 to-adventure-400 rounded-full shadow-lg opacity-80 hidden lg:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 sm:py-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: MapPin, value: '15+', label: 'Countries Explored' },
              { icon: Camera, value: '500+', label: 'Photos & Videos' },
              { icon: Heart, value: '50K+', label: 'Amazing Followers' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="card text-center hover:scale-105 sm:hover:scale-110">
                  <Icon className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-3 sm:mb-4 text-adventure-500" />
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section id="gallery" className="py-16 sm:py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-3 sm:mb-4">
              Latest Adventures
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore my most recent discoveries and unforgettable moments
            </p>
          </div>
          <Gallery items={galleryItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-adventure-500 via-forest-500 to-adventure-600 dark:from-adventure-900 dark:via-forest-900 dark:to-adventure-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Connect?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95 max-w-2xl mx-auto">
            Have a question, collaboration idea, or just want to say hello? I'd love to hear from you!
          </p>
          <Link to="/contact" className="inline-block px-6 sm:px-10 py-3 sm:py-4 bg-white text-adventure-600 dark:text-adventure-700 font-bold text-sm sm:text-base rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

