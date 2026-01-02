import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
    {
      icon: MapPin,
      title: 'Location',
      content: 'Currently Exploring the World',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sage-50 to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sage-200 dark:bg-sage-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-200 dark:bg-sky-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-sage-900 dark:text-sky-300">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question, partnership idea, or just want to say hello? I'd love to hear from you. Reach out anytime!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="text-sage-600 dark:text-sky-400 mb-4">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-sage-900 dark:text-sky-300">
                    {info.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400">
                    {info.content}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-sage-900 dark:text-sky-300">
                Send Me a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg border border-green-300 dark:border-green-700">
                  ✓ Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Collaboration Opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="form-input"
                    placeholder="Tell me about your idea or question..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Social Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-sage-900 dark:text-sky-300 mb-8">
              Follow Me On Social Media
            </h3>
            <div className="flex justify-center gap-6">
              {['Instagram', 'YouTube', 'TikTok', 'Twitter'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="px-6 py-3 bg-sage-600 dark:bg-sky-500 text-white rounded-lg font-semibold hover:bg-sage-700 dark:hover:bg-sky-600 transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-800/50">
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
      </section>
    </div>
  );
};
