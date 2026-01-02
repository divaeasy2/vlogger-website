import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Twitch, Linkedin } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@travelvlogger.com',
      link: 'mailto:hello@travelvlogger.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section with Contact Info Cards */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-5 sm:top-20 left-10 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-adventure-200 dark:bg-adventure-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-forest-200 dark:bg-forest-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-3 sm:mb-4">
              Let's Connect
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question, partnership idea, or just want to say hello? I'd love to hear from you!
            </p>
          </div>

          {/* Main Content Grid - Better Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - Contact Info & Social */}
            <div className="animate-slide-up space-y-8 md:space-y-12">
              {/* Contact Info Cards */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Quick Contact Info</h3>
                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="group relative block"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-adventure-400/20 to-forest-400/20 dark:from-adventure-600/20 dark:to-forest-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                        
                        <div className="relative p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 dark:border-slate-700 group-hover:border-adventure-300 dark:group-hover:border-adventure-600/50">
                          <div className="flex items-start gap-4">
                            {/* Icon Container */}
                            <div className="flex-shrink-0">
                              <div className="w-14 h-14 bg-gradient-to-br from-adventure-100 to-forest-100 dark:from-adventure-900/40 dark:to-forest-900/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Icon size={28} className="text-adventure-600 dark:text-adventure-400" />
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                {info.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 break-words">
                                {info.content}
                              </p>
                              <div className="mt-3 text-adventure-600 dark:text-adventure-400 text-xs font-semibold group-hover:gap-2 transition-all duration-300 flex items-center gap-1">
                                <span>Connect</span>
                                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Follow Me</h3>
                <div className="flex gap-4 flex-wrap">
                  {[
                    { icon: Instagram, label: 'Instagram', href: '#', color: 'from-pink-500 to-rose-500' },
                    { icon: Youtube, label: 'YouTube', href: '#', color: 'from-red-500 to-orange-500' },
                    { icon: Twitch, label: 'TikTok', href: '#', color: 'from-black to-gray-800 dark:from-white dark:to-gray-400' },
                    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'from-blue-600 to-cyan-500' },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="group relative"
                        title={social.label}
                      >
                        <div className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 hover:-translate-y-2`}>
                          <Icon size={24} />
                        </div>
                        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="animate-slide-up" id="contact-form">
              <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden sticky top-20 sm:top-32">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-adventure-500 via-forest-500 to-earth-500 px-6 sm:px-8 py-6 sm:py-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Send Me a Message
                  </h2>
                  <p className="text-adventure-100 text-xs sm:text-sm mt-1">I'll respond within 24 hours</p>
                </div>

                {/* Form Content */}
                <div className="p-6 sm:p-8">
                  {submitted && (
                    <div className="mb-5 sm:mb-6 p-3 sm:p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg border border-green-300 dark:border-green-700 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-base sm:text-lg flex-shrink-0">✓</span>
                        <div>
                          <p className="font-semibold">Message sent successfully!</p>
                          <p className="text-xs opacity-90">Thank you for reaching out. I'll get back to you soon.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input text-sm"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input text-sm"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-input text-sm"
                        placeholder="What is this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="form-input text-sm"
                        placeholder="Tell me about your idea or question..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-2 text-sm sm:text-base py-2.5 sm:py-3 hover:shadow-lg transition-shadow"
                    >
                      <Send size={16} className="sm:w-5 sm:h-5" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16 md:py-24 bg-white dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How can I use your content?',
                a: 'You can share and repost my content with proper credit and a link back to my channels. For commercial use, please reach out to discuss partnership opportunities.',
              },
              {
                q: 'Do you accept sponsorships or collaborations?',
                a: 'Absolutely! I love working with travel brands and tourism boards. Please contact me with your proposal and we can discuss how we can create amazing content together.',
              },
              {
                q: 'How often do you post new content?',
                a: 'I post new gallery updates and videos weekly on my main channels. Follow me to stay updated on my latest adventures!',
              },
              {
                q: 'Can I use your photos for my project?',
                a: 'It depends on the type of project. For personal use, you\'re welcome to share with credit. For commercial projects, please contact me for licensing information.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <h3 className="text-lg font-bold text-sage-900 dark:text-sky-300 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};
