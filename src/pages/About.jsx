import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Heart, Zap } from 'lucide-react';

export const About = () => {
  const skills = [
    {
      icon: Compass,
      title: 'Adventure Seeking',
      description: 'Always searching for the next breathtaking destination and hidden gems around the world.',
    },
    {
      icon: Heart,
      title: 'Authentic Stories',
      description: 'Capturing genuine moments and telling real stories that inspire and connect with people.',
    },
    {
      icon: Zap,
      title: 'Creative Vision',
      description: 'Using cutting-edge photography and videography to bring travel experiences to life.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sage-50 to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200 dark:bg-sky-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-sage-900 dark:text-sky-300">
              About Me
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A travel enthusiast documenting the world's most beautiful moments
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Section */}
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sage-400 to-sky-400 rounded-2xl transform rotate-6"></div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                  alt="About"
                  className="relative w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Text Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sage-900 dark:text-sky-300">
                My Journey Began
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Five years ago, I left my conventional life to pursue my passion for travel and storytelling. What started as a personal blog has evolved into a thriving platform where I share my most incredible adventures with people from around the world.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                My mission is simple: to inspire others to explore, discover, and appreciate the incredible beauty of our planet. Every photograph, every video, and every story is crafted with genuine care and passion.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Whether I'm hiking through mountain ranges, diving in crystal-clear waters, or exploring vibrant cities, I'm always looking for those magical moments that remind us why travel matters.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="section-title">
              What I'm Passionate About
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-sage-600 dark:text-sky-400 mb-4">
                      <Icon size={40} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-sage-900 dark:text-sky-300">
                      {skill.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h2 className="section-title">
              Travel Milestones
            </h2>
            <div className="space-y-8">
              {[
                {
                  year: '2019',
                  title: 'The Beginning',
                  description: 'Started my travel vlog with a simple camera and big dreams, documenting my first international trip.',
                },
                {
                  year: '2020',
                  title: '1 Million Views',
                  description: 'Reached 1 million total views across all platforms, building a passionate community of travel enthusiasts.',
                },
                {
                  year: '2021',
                  title: '10 Countries',
                  description: 'Traveled to 10 different countries, creating over 100 videos and thousands of photographs.',
                },
                {
                  year: '2022',
                  title: 'Global Recognition',
                  description: 'Featured in major travel magazines and collaborated with international tourism boards.',
                },
                {
                  year: '2023',
                  title: 'Community Milestone',
                  description: 'Reached 50,000 dedicated followers and launched exclusive travel guides for my community.',
                },
                {
                  year: '2024-2025',
                  title: 'New Adventures',
                  description: 'Exploring emerging destinations and sharing untold stories from the world\'s most remote regions.',
                },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-sage-600 dark:bg-sky-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
                      {index + 1}
                    </div>
                    {index < 5 && <div className="w-1 h-16 bg-gradient-to-b from-sage-600 to-transparent dark:from-sky-500"></div>}
                  </div>
                  <div className="pb-8">
                    <div className="text-sage-600 dark:text-sky-400 font-bold text-lg">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-sage-900 dark:text-sky-300 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-sage-600 to-sky-600 dark:from-sky-700 dark:to-sky-600 rounded-xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Follow My Adventures?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of followers who love travel inspiration and stunning visual storytelling.
            </p>
            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-sage-600 dark:text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
