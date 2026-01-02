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
    <div className="min-h-screen bg-gradient-to-br from-white via-sage-50 to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sage-200 dark:bg-sage-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-200 dark:bg-sky-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-sage-900 dark:text-sky-300">
            Discover the World Through My Lens
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Join me on extraordinary journeys across breathtaking landscapes, hidden gems, and unforgettable moments captured in stunning galleries and videos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="btn-primary">
              Learn About Me
            </Link>
            <a href="#gallery" className="btn-secondary">
              View Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-800/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-600 dark:text-sky-400 mb-2">15+</div>
              <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                <MapPin size={20} /> Countries Explored
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-600 dark:text-sky-400 mb-2">500+</div>
              <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                <Camera size={20} /> Photos & Videos
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-600 dark:text-sky-400 mb-2">50K+</div>
              <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                <Heart size={20} /> Amazing Followers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">
            Latest Adventures
          </h2>
          <Gallery items={galleryItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage-600 dark:bg-sky-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-lg mb-8 opacity-90">
            Have a question, collaboration idea, or just want to say hello? I'd love to hear from you!
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-sage-600 dark:text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};
