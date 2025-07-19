import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay, FiShield, FiClock, FiTruck } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-emerald-600 via-blue-600 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      {/* Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/10 rounded-full"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium"
              >
                🚀 Digital Healthcare Revolution
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                From Local Pharmacy to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-300">
                  Digital Care
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-blue-100 max-w-2xl"
              >
                Powered by Trust and Technology. Experience healthcare like never before with our AI-enabled platform, 
                seamless ordering, and personalized care solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Order Now</span>
                  <FiArrowRight />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <FiPlay />
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
              >
                {[
                  { number: '800+', label: 'Patients Served' },
                  { number: '50+', label: 'Hospital Partners' },
                  { number: '24/7', label: 'Support Available' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      className="text-2xl md:text-3xl font-bold text-emerald-300"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              {[
                {
                  icon: FiShield,
                  title: 'Secure & Trusted',
                  description: 'End-to-end encryption and verified suppliers',
                  color: 'from-emerald-500 to-emerald-600'
                },
                {
                  icon: FiClock,
                  title: '24/7 Availability',
                  description: 'Round-the-clock support and emergency services',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  icon: FiTruck,
                  title: 'Fast Delivery',
                  description: 'Same-day delivery for urgent medications',
                  color: 'from-purple-500 to-purple-600'
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.05, x: -10 }}
                  className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                      <feature.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-blue-200 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;