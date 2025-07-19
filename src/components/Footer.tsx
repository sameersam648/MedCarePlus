import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaStethoscope } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Online Pharmacy', href: '#products' },
      { name: 'AI Health Assistant', href: '#services' },
      { name: 'Hospital Portal', href: '#services' },
      { name: 'Express Delivery', href: '#services' },
      { name: 'Health Records', href: '#services' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Track Order', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'FAQs', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Licensing', href: '#' },
      { name: 'Compliance', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: FaFacebook, href: '#', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-600' },
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: FaYoutube, href: '#', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-500 p-3 rounded-lg">
                  <FaStethoscope className="text-white text-2xl" />
                </div>
                <span className="font-bold text-2xl">MediCare+</span>
              </div>

              <p className="text-gray-300 leading-relaxed">
                From a local pharmacy to a digital healthcare platform. We're committed to making 
                healthcare accessible, affordable, and convenient for everyone through technology and trust.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiPhone className="text-emerald-400" />
                  <span className="text-gray-300">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="text-emerald-400" />
                  <span className="text-gray-300">support@medicareplus.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMapPin className="text-emerald-400" />
                  <span className="text-gray-300">123 Health Street, Mumbai, Maharashtra</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:col-span-3">
            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-6 text-emerald-400">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-semibold text-lg mb-6 text-emerald-400">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-semibold text-lg mb-6 text-emerald-400">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-4 text-emerald-400">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest health tips, product updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <span>© 2024 MediCare+. All rights reserved.</span>
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-emerald-500 p-3 rounded-full hover:bg-emerald-600 transition-colors"
            >
              <FiArrowUp className="text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;