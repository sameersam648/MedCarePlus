import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: '24/7 Support Hotline',
      details: ['+91 9876543210', '+91 9876543211'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: FiMail,
      title: 'Email Support',
      details: ['support@medicareplus.com', 'orders@medicareplus.com'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiMapPin,
      title: 'Visit Our Store',
      details: ['123 Health Street, Medical District', 'Mumbai, Maharashtra 400001'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      details: ['Mon-Sat: 8:00 AM - 10:00 PM', 'Sunday: 9:00 AM - 8:00 PM'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const quickActions = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp Chat',
      color: 'bg-green-500 hover:bg-green-600',
      action: () => window.open('https://wa.me/919876543210', '_blank')
    },
    {
      icon: FaTelegram,
      label: 'Telegram Support',
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => window.open('https://t.me/medicareplus', '_blank')
    },
    {
      icon: FiPhone,
      label: 'Call Now',
      color: 'bg-emerald-500 hover:bg-emerald-600',
      action: () => window.open('tel:+919876543210', '_self')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-semibold text-lg">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Contact Our Healthcare Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our services? Need urgent medical supplies? 
            Our team is here to help you 24/7 with all your healthcare needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. Our dedicated support team 
                is always ready to assist you with your healthcare needs.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}>
                      <info.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div>
              <h4 className="font-semibold text-lg text-gray-900 mb-4">Quick Contact</h4>
              <div className="flex flex-wrap gap-3">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={action.action}
                    className={`${action.color} text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2`}
                  >
                    <action.icon />
                    <span>{action.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="partnership">Hospital Partnership</option>
                    <option value="technical">Technical Support</option>
                    <option value="emergency">Emergency Supply</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                  placeholder="Please describe your inquiry or request in detail..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow duration-300 flex items-center justify-center space-x-2"
              >
                <FiSend />
                <span>Send Message</span>
              </motion.button>
            </form>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-white/50 rounded-lg">
              <div className="flex items-center space-x-2 text-emerald-600 mb-2">
                <FiMessageCircle />
                <span className="font-medium">Quick Response Guarantee</span>
              </div>
              <p className="text-sm text-gray-600">
                We typically respond to all inquiries within 2 hours during business hours. 
                For urgent medical supply needs, please call our 24/7 hotline.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Physical Store</h3>
            <p className="text-gray-600 mb-6">
              Experience our healthcare services in person. Our store is equipped with modern facilities 
              and staffed by experienced pharmacists and healthcare professionals.
            </p>
            <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <FiMapPin className="text-4xl text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Interactive Map Coming Soon</p>
                <p className="text-sm text-gray-400">123 Health Street, Medical District, Mumbai</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;