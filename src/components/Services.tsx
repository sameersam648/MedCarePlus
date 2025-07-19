import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiShoppingBag, FiTruck, FiClock, FiShield, FiUsers, FiSmartphone } from 'react-icons/fi';
import { FaRobot, FaHospital, FaPills } from 'react-icons/fa';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: FiShoppingBag,
      title: 'Online Medicine Store',
      description: 'Browse and order medicines with prescription upload and verification',
      features: ['Prescription validation', 'Generic alternatives', 'Bulk discounts'],
      color: 'from-emerald-500 to-emerald-600',
      delay: 0.1
    },
    {
      icon: FaRobot,
      title: 'AI Health Assistant',
      description: 'Smart chatbot for health queries, medication reminders, and consultations',
      features: ['24/7 availability', 'Symptom checker', 'Medicine interactions'],
      color: 'from-blue-500 to-blue-600',
      delay: 0.2
    },
    {
      icon: FiTruck,
      title: 'Express Delivery',
      description: 'Same-day delivery for urgent medications and health supplies',
      features: ['Emergency delivery', 'Temperature control', 'Real-time tracking'],
      color: 'from-purple-500 to-purple-600',
      delay: 0.3
    },
    {
      icon: FaHospital,
      title: 'Hospital Portal',
      description: 'Dedicated platform for hospitals and clinics to manage bulk orders',
      features: ['Bulk pricing', 'Credit facilities', 'Inventory alerts'],
      color: 'from-orange-500 to-orange-600',
      delay: 0.4
    },
    {
      icon: FiShield,
      title: 'Health Records',
      description: 'Secure digital health records and prescription history management',
      features: ['HIPAA compliant', 'Family sharing', 'Doctor access'],
      color: 'from-teal-500 to-teal-600',
      delay: 0.5
    },
    {
      icon: FaPills,
      title: 'Medication Management',
      description: 'Smart reminders and adherence tracking for better health outcomes',
      features: ['Dosage reminders', 'Refill alerts', 'Progress tracking'],
      color: 'from-pink-500 to-pink-600',
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered health assistance to seamless medicine delivery, 
            we provide end-to-end healthcare solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: service.delay }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="text-white text-2xl" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: service.delay + 0.1 + featureIndex * 0.1 }}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 w-full py-3 px-4 rounded-lg bg-gradient-to-r ${service.color} text-white font-medium hover:shadow-lg transition-shadow duration-300`}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Future of Healthcare?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their health needs. 
              Start your journey with our comprehensive healthcare platform today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Get Started Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;