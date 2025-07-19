import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSearch, FiFilter, FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Medicines', 'Supplements', 'Equipment', 'Personal Care'];

  const products = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      category: 'Medicines',
      price: '₹45',
      originalPrice: '₹55',
      rating: 4.8,
      reviews: 128,
      inStock: true,
      image: 'https://in.pinterest.com/pin/401101910580333552/', // Paracetamol
      prescription: true
    },
    {
      id: 2,
      name: 'Vitamin D3 Supplements',
      category: 'Supplements',
      price: '₹299',
      originalPrice: '₹399',
      rating: 4.6,
      reviews: 89,
      inStock: true,
      image: 'https://in.pinterest.com/pin/948992952733359531/', // Vitamin D3
      prescription: false
    },
    {
      id: 3,
      name: 'Digital Thermometer',
      category: 'Equipment',
      price: '₹199',
      originalPrice: '₹249',
      rating: 4.9,
      reviews: 156,
      inStock: true,
      image: 'https://in.pinterest.com/pin/346073552629215264/', // Thermometer
      prescription: false
    },
    {
      id: 4,
      name: 'Hand Sanitizer 500ml',
      category: 'Personal Care',
      price: '₹89',
      originalPrice: '₹120',
      rating: 4.5,
      reviews: 234,
      inStock: true,
      image: 'https://in.pinterest.com/pin/47287864827467884/', // Sanitizer
      prescription: false
    },
    {
      id: 5,
      name: 'Blood Pressure Monitor',
      category: 'Equipment',
      price: '₹1,299',
      originalPrice: '₹1,599',
      rating: 4.7,
      reviews: 67,
      inStock: true,
      image: 'https://in.pinterest.com/pin/637400153550481710/', // BP Monitor
      prescription: false
    },
    {
      id: 6,
      name: 'Omega 3 Fish Oil',
      category: 'Supplements',
      price: '₹549',
      originalPrice: '₹699',
      rating: 4.8,
      reviews: 112,
      inStock: false,
      image: 'https://in.pinterest.com/pin/4591982893500436480/', // Omega 3
      prescription: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-emerald-600 font-semibold text-lg">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Quality Healthcare Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of medicines, supplements, and healthcare equipment, 
            all verified and sourced from trusted manufacturers.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Categories */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-semibold">Out of Stock</span>
                  </div>
                )}
                {product.prescription && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Prescription Required
                  </div>
                )}
                <Link to="/profile">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <FiHeart className="text-gray-600" />
                  </motion.button>
                </Link>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-emerald-600 font-medium">{product.category}</span>
                  <div className="flex items-center space-x-1">
                    <FiStar className="text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="font-semibold text-lg text-gray-900 mb-3">{product.name}</h3>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="text-sm text-emerald-600 font-medium">
                    {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
                  </span>
                </div>

                <Link to="/cart">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!product.inStock}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                      product.inStock
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <FiShoppingCart />
                    <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
            >
              Load More Products
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Products;