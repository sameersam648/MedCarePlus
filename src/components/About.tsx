import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineData = [
    {
      year: '2018',
      title: 'Local Pharmacy Founded',
      description: 'Started as a small neighborhood pharmacy serving 100+ families',
      icon: FiMapPin,
      color: 'bg-emerald-500'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Introduced online ordering and delivery services during pandemic',
      icon: FiTrendingUp,
      color: 'bg-blue-500'
    },
    {
      year: '2022',
      title: 'Hospital Partnerships',
      description: 'Partnered with 20+ hospitals for bulk supply and emergency services',
      icon: FiUsers,
      color: 'bg-purple-500'
    },
    {
      year: '2024',
      title: 'AI-Powered Platform',
      description: 'Launched smart inventory, AI chatbot, and personalized care solutions',
      icon: FiAward,
      color: 'bg-orange-500'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-semibold text-lg">Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            From Local Roots to Digital Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness our transformation from a neighborhood pharmacy to a cutting-edge digital health platform, 
            driven by technology and powered by trust.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-blue-500 hidden md:block"></div>

          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-full ${item.color}`}>
                        <item.icon className="text-white text-xl" />
                      </div>
                      <span className="text-2xl font-bold text-gray-900">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`w-6 h-6 rounded-full ${item.color} border-4 border-white shadow-lg z-10`}
                  ></motion.div>
                </div>

                {/* Spacer */}
                <div className="w-full md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Impact Today</h3>
            <p className="text-blue-100 text-lg">Numbers that reflect our commitment to healthcare excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '800+', label: 'Patients Served', suffix: '' },
              { number: '50', label: 'Hospital Partners', suffix: '+' },
              { number: '99.9', label: 'Uptime', suffix: '%' },
              { number: '24', label: 'Hour Support', suffix: '/7' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;