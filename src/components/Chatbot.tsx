import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend, FiUser, FiMic, FiPaperclip } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  typing?: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI health assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickResponses = [
    "Check medicine availability",
    "Track my order",
    "Prescription upload",
    "Emergency delivery",
    "Health consultation",
    "Store locations"
  ];

  const botResponses = {
    "hello": "Hello! I'm here to help with your healthcare needs. What can I assist you with today?",
    "medicine": "I can help you check medicine availability, prices, and alternatives. What medication are you looking for?",
    "order": "To track your order, please provide your order number. You can also check your order status in your account dashboard.",
    "prescription": "You can upload your prescription by clicking the attachment icon or taking a photo. Our pharmacists will verify it within 30 minutes.",
    "emergency": "For emergency deliveries, we offer same-day delivery for urgent medications. Call our 24/7 hotline at +91 9876543210.",
    "consultation": "Our AI can provide basic health information, but for medical advice, please consult with our qualified pharmacists or your doctor.",
    "location": "Our main store is at 123 Health Street, Mumbai. We also offer delivery across the city. Would you like to see nearby pickup points?",
    "default": "I understand you need help. Could you please be more specific about what you're looking for? I can assist with medicines, orders, prescriptions, and general health queries."
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return botResponses.hello;
    } else if (lowerMessage.includes('medicine') || lowerMessage.includes('drug') || lowerMessage.includes('tablet')) {
      return botResponses.medicine;
    } else if (lowerMessage.includes('order') || lowerMessage.includes('track')) {
      return botResponses.order;
    } else if (lowerMessage.includes('prescription') || lowerMessage.includes('upload')) {
      return botResponses.prescription;
    } else if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent')) {
      return botResponses.emergency;
    } else if (lowerMessage.includes('consultation') || lowerMessage.includes('doctor') || lowerMessage.includes('advice')) {
      return botResponses.consultation;
    } else if (lowerMessage.includes('location') || lowerMessage.includes('store') || lowerMessage.includes('address')) {
      return botResponses.location;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickResponse = (response: string) => {
    setInputText(response);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-500 to-blue-600 text-white p-4 rounded-full shadow-lg z-50 hover:shadow-xl transition-shadow duration-300"
      >
        <FiMessageCircle size={24} />
        
        {/* Notification Dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center"
        >
          1
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <FaRobot size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">MediCare+ Assistant</h3>
                  <p className="text-xs text-blue-100">Online • Typically replies instantly</p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ rotate: 90 }}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <FiX size={20} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      {message.sender === 'user' ? <FiUser size={16} /> : <FaRobot size={16} />}
                    </div>

                    {/* Message Bubble */}
                    <div className={`p-3 rounded-2xl ${
                      message.sender === 'user' 
                        ? 'bg-emerald-500 text-white rounded-br-none' 
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-emerald-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <FaRobot className="text-white" size={16} />
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200">
                      <div className="flex space-x-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Responses */}
            {messages.length <= 1 && (
              <div className="p-4 border-t bg-white">
                <p className="text-xs text-gray-500 mb-3">Quick actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickResponses.slice(0, 4).map((response, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickResponse(response)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-xs bg-gray-100 hover:bg-emerald-50 text-gray-700 p-2 rounded-lg transition-colors"
                    >
                      {response}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 pr-20"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                    <button className="text-gray-400 hover:text-gray-600 p-1">
                      <FiPaperclip size={16} />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 p-1">
                      <FiMic size={16} />
                    </button>
                  </div>
                </div>
                <motion.button
                  onClick={handleSendMessage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputText.trim()}
                  className="bg-emerald-500 text-white p-3 rounded-full hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiSend size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;