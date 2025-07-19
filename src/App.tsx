import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <About />
            <Services />
            <Products />
            <Testimonials />
            <Contact />
          </>} />
          <Route path="/order-now" element={
            <div className="py-20 max-w-2xl mx-auto">
              <h1 className="text-3xl font-bold mb-6 text-center">Order Now</h1>
              <form className="bg-white p-6 rounded-lg shadow space-y-4">
                <input className="w-full border p-2 rounded" placeholder="Medicine/Product Name" />
                <input className="w-full border p-2 rounded" placeholder="Quantity" type="number" min="1" />
                <input className="w-full border p-2 rounded" placeholder="Delivery Address" />
                <button className="w-full bg-emerald-500 text-white py-2 rounded font-semibold hover:bg-emerald-600">Place Order</button>
              </form>
              <div className="mt-10 text-center">
                <h2 className="text-xl font-semibold mb-2">Featured Products</h2>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="bg-gray-100 p-4 rounded">Paracetamol 500mg</li>
                  <li className="bg-gray-100 p-4 rounded">Vitamin D3 Supplements</li>
                  <li className="bg-gray-100 p-4 rounded">Digital Thermometer</li>
                  <li className="bg-gray-100 p-4 rounded">Hand Sanitizer 500ml</li>
                </ul>
              </div>
            </div>
          } />
          <Route path="/cart" element={
            <div className="py-20 max-w-2xl mx-auto">
              <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
              <ul className="divide-y">
                <li className="py-4 flex justify-between items-center"><span>Paracetamol 500mg (x2)</span><span>₹90</span></li>
                <li className="py-4 flex justify-between items-center"><span>Hand Sanitizer 500ml (x1)</span><span>₹89</span></li>
              </ul>
              <div className="mt-6 flex justify-between font-bold text-lg">
                <span>Total</span><span>₹179</span>
              </div>
              <button className="mt-8 w-full bg-emerald-500 text-white py-3 rounded font-semibold hover:bg-emerald-600">Proceed to Checkout</button>
            </div>
          } />
          <Route path="/profile" element={
            <div className="py-20 max-w-2xl mx-auto">
              <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>
              <div className="bg-white p-6 rounded-lg shadow space-y-4">
                <div><span className="font-semibold">Name:</span> John Doe</div>
                <div><span className="font-semibold">Email:</span> johndoe@email.com</div>
                <div><span className="font-semibold">Phone:</span> +91 9876543210</div>
                <div><span className="font-semibold">Address:</span> 123 Health Street, Mumbai</div>
              </div>
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2">Order History</h2>
                <ul className="divide-y">
                  <li className="py-3">Order #12345 - Delivered</li>
                  <li className="py-3">Order #12344 - Delivered</li>
                  <li className="py-3">Order #12343 - Cancelled</li>
                </ul>
              </div>
            </div>
          } />
          <Route path="/get-started" element={
            <div className="py-20 max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-6">Get Started with MedCare+</h1>
              <ol className="list-decimal list-inside text-left mx-auto max-w-md space-y-2">
                <li>Register your account</li>
                <li>Browse products and services</li>
                <li>Add items to your cart</li>
                <li>Place your order and enjoy fast delivery!</li>
              </ol>
              <button className="mt-8 bg-emerald-500 text-white py-3 px-8 rounded font-semibold hover:bg-emerald-600">Register Now</button>
            </div>
          } />
          <Route path="/schedule-demo" element={
            <div className="py-20 max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-6">Schedule a Free Demo</h1>
              <form className="bg-white p-6 rounded-lg shadow space-y-4 max-w-md mx-auto">
                <input className="w-full border p-2 rounded" placeholder="Your Name" />
                <input className="w-full border p-2 rounded" placeholder="Email" type="email" />
                <input className="w-full border p-2 rounded" placeholder="Phone" />
                <input className="w-full border p-2 rounded" placeholder="Preferred Date" type="date" />
                <button className="w-full bg-emerald-500 text-white py-2 rounded font-semibold hover:bg-emerald-600">Request Demo</button>
              </form>
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2">What you'll see in the demo:</h2>
                <ul className="list-disc list-inside text-left mx-auto max-w-md">
                  <li>How to order medicines online</li>
                  <li>Using the AI Health Assistant</li>
                  <li>Tracking your orders</li>
                  <li>Managing your health records</li>
                </ul>
              </div>
            </div>
          } />
          <Route path="/contact-success" element={
            <div className="py-32 text-center">
              <h1 className="text-3xl font-bold mb-4 text-emerald-600">Thank you for contacting us!</h1>
              <p className="text-lg">Your message has been received. Our team will get back to you soon.</p>
              <a href="/" className="inline-block mt-8 bg-emerald-500 text-white py-3 px-8 rounded font-semibold hover:bg-emerald-600">Back to Home</a>
            </div>
          } />
          <Route path="/services/:serviceId" element={
            <div className="py-32 text-center">
              <h1 className="text-3xl font-bold mb-4">Service Details</h1>
              <p className="text-lg">Here you can display more information about the selected service, such as features, pricing, and FAQs.</p>
              <ul className="mt-8 space-y-2">
                <li>Feature 1: 24/7 Support</li>
                <li>Feature 2: Secure Data</li>
                <li>Feature 3: Fast Delivery</li>
              </ul>
            </div>
          } />
          <Route path="/products/:productId" element={
            <div className="py-32 text-center">
              <h1 className="text-3xl font-bold mb-4">Product Details</h1>
              <p className="text-lg">Here you can display more information about the selected product, such as description, price, and reviews.</p>
              <ul className="mt-8 space-y-2">
                <li>Description: High-quality, trusted product</li>
                <li>Price: ₹199</li>
                <li>Reviews: 4.8/5 (128 reviews)</li>
              </ul>
            </div>
          } />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;