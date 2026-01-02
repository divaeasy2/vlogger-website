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
      <section className="relative py-20 md:py-40 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-adventure-200 dark:bg-adventure-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-forest-200 dark:bg-forest-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animation-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-slide-up">
            <h1 className="section-title">
              Discover the World Through My Lens
            </h1>
            <p className="section-subtitle">
              Join me on extraordinary journeys across breathtaking landscapes, hidden gems, and unforgettable moments captured in stunning galleries and videos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/about" className="btn-primary inline-block">
                Learn About Me
              </Link>
              <a href="#gallery" className="btn-secondary inline-block">
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, value: '15+', label: 'Countries Explored' },
              { icon: Camera, value: '500+', label: 'Photos & Videos' },
              { icon: Heart, value: '50K+', label: 'Amazing Followers' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="card text-center hover:scale-110">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-adventure-500" />
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="section-title">
              Latest Adventures
            </h2>
            <p className="section-subtitle">
              Explore my most recent discoveries and unforgettable moments
            </p>
          </div>
          <Gallery items={galleryItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-adventure-500 via-forest-500 to-adventure-600 dark:from-adventure-900 dark:via-forest-900 dark:to-adventure-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Have a question, collaboration idea, or just want to say hello? I'd love to hear from you!
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-adventure-600 dark:text-adventure-700 font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

