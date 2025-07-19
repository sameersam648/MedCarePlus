import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer, City Hospital',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'MediCare+ has revolutionized how we manage our pharmacy needs. Their AI-powered inventory system and quick delivery have significantly improved our patient care efficiency.',
      company: 'City Hospital'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Regular Customer',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'As a senior citizen with multiple medications, the reminder system and home delivery service have been a lifesaver. The staff is knowledgeable and always helpful.',
      company: 'Mumbai, India'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Healthcare Administrator',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The digital transformation from a local pharmacy to this comprehensive platform is remarkable. Their chatbot accurately answers health queries and the prescription verification is seamless.',
      company: 'Medicare Clinic'
    },
    {
      id: 4,
      name: 'Dr. Michael Chen',
      role: 'Emergency Medicine Physician',
      image: 'https://images.pexels.com/photos/5722159/pexels-photo-5722159.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'In emergency situations, having a reliable pharmacy partner is crucial. MediCare+ delivers critical medications within hours, and their 24/7 support has saved countless lives.',
      company: 'Emergency Care Center'
    },
    {
      id: 5,
      name: 'Anita Patel',
      role: 'Mother of Two',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Managing my family\'s health needs has never been easier. The app tracks all our prescriptions, sends reminders, and the pediatric consultation feature is incredibly helpful.',
      company: 'Bangalore, India'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-semibold text-lg">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From local clinics to individual patients, hear how our digital transformation 
            has improved healthcare delivery and patient outcomes.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-emerald-200">
                <FaQuoteLeft size={48} />
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-emerald-100"
                  />
                </motion.div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center md:justify-start space-x-1 mb-4"
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FiStar key={i} className="text-yellow-400 fill-current" />
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic"
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.blockquote>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="font-bold text-lg text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-emerald-600 font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-600 hover:text-emerald-600"
            >
              <FiChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-600 hover:text-emerald-600"
            >
              <FiChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-emerald-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '4.9', label: 'Average Rating', suffix: '/5' },
            { number: '800', label: 'Happy Customers', suffix: '+' },
            { number: '50', label: 'Partner Hospitals', suffix: '+' },
            { number: '99.9', label: 'Uptime', suffix: '%' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;