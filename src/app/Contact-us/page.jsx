
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    message: '',
    accept: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeField, setActiveField] = useState('');

  // Create refs for scrolling and animations
  const formRef = useRef(null);
  const countriesRef = useRef(null);
  const heroRef = useRef(null);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.accept) {
      setSubmitStatus('Please accept the privacy policy to continue.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
      setSubmitStatus('successfully_submitted');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        message: '',
        accept: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCountries = () => {
    countriesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const formVariants = {
    hidden: { scale: 0.9, opacity: 0, rotateX: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateY: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Enhanced Hero Section with Fixed Background */}
      <motion.section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Fixed Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop')`,
              backgroundAttachment: 'fixed'
            }}
          />
          
          {/* Multi-layered Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-transparent to-blue-500/20"
            style={{
              transform: `translateX(${mousePosition.x * 0.01}px) translateY(${mousePosition.y * 0.01}px)`
            }}
          />
          
          {/* Floating Elements */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full"
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-3/4 right-1/3 w-4 h-4 bg-blue-500 rounded-full"
              animate={{ 
                y: [0, -30, 0],
                x: [0, 20, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
            <motion.div 
              className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-white rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            />
          </div>
        </div>

        {/* Enhanced Content */}
        <div className="relative z-10 text-center w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <motion.h1 
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tight leading-none"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                    "0 0 40px rgba(59, 130, 246, 0.4)",
                    "0 0 20px rgba(34, 197, 94, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Contact Us
              </motion.h1>
              
              {/* Dynamic Glow Effect */}
              <motion.div 
                className="absolute -inset-8 bg-gradient-to-r from-green-400/20 via-blue-500/20 to-green-400/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Connect with our global team of recruitment specialists here
            </motion.p>

            {/* Scroll Indicator with Enhanced Animation */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div 
                className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center cursor-pointer hover:border-green-400"
                whileHover={{ scale: 1.1 }}
                onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
              >
                <motion.div 
                  className="w-1 h-3 bg-white rounded-full mt-2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Global Reach Section */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 30%, #22c55e 2px, transparent 2px), radial-gradient(circle at 70% 70%, #3b82f6 2px, transparent 2px)',
            backgroundSize: '80px 80px, 120px 120px'
          }}></div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto mb-20 relative z-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text"
          >
            Global Reach, Local Expertise
          </motion.h2>
          <motion.p 
            className="text-xl sm:text-2xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We operate from 40+ offices across the USA, Europe, and Asia, bringing you world-class service wherever you are.
          </motion.p>
        </motion.div>

        {/* Enhanced Action Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { 
              title: "Jobs & Careers", 
              icon: "🔍", 
              content: <span className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer">Find Tech Jobs</span>,
              description: "Explore thousands of opportunities",
              color: "from-blue-500 to-purple-600"
            },
            { 
              title: "Client Query", 
              icon: "💬", 
              action: scrollToForm,
              description: "Let's discuss your needs",
              color: "from-green-500 to-teal-600"
            },
            { 
              title: "Our Locations", 
              icon: "📍", 
              action: scrollToCountries,
              description: "Find our global offices",
              color: "from-orange-500 to-red-600"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 } 
              }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <div 
                onClick={item.action ? item.action : undefined}
                className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 h-full flex flex-col items-center relative overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-5xl sm:text-6xl mb-6 block">{item.icon}</span>
                </motion.div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 relative z-10">{item.title}</h3>
                
                <div className="mt-auto mb-6 relative z-10">
                  {item.content || <p className="text-gray-600 text-lg">{item.description}</p>}
                </div>
                
                <motion.div 
                  className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full relative z-10"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Office Info Section */}
        <motion.div 
          className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden relative z-10"
          initial={{ opacity: 0, y: 50, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row">
            <motion.div 
              className="lg:w-1/2 relative h-80 lg:h-auto overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop')`
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-transparent to-blue-500/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <motion.div 
              className="lg:w-1/2 p-8 sm:p-12 lg:p-16"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-6 shadow-lg">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Head Office</h3>
              </motion.div>
              
              <address className="text-lg sm:text-xl text-gray-700 not-italic space-y-4 mb-10">
                <motion.p 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-blue-500 mr-4 mt-1 text-xl">📍</span>
                  <span className="leading-relaxed">LDN:W, 3 Noble Street<br/>London, EC2V 7EE</span>
                </motion.p>
                
                <motion.p 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-blue-500 mr-4 text-xl">📞</span>
                  <span className="text-blue-600 hover:text-blue-800 transition-all duration-300 font-semibold cursor-pointer">
                    +44 (0)20 7333 0033
                  </span>
                </motion.p>
                
                <motion.p 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-blue-500 mr-4 text-xl">✉️</span>
                  <span className="text-blue-600 hover:text-blue-800 transition-all duration-300 font-semibold cursor-pointer">
                    info@harveynash.com
                  </span>
                </motion.p>
              </address>
              
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full hover:shadow-xl transition-all duration-500 transform hover:scale-105"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Map and Directions</span>
                <motion.span 
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="min-h-screen bg-gray-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-xl"
            animate={{ 
              x: [0, -80, 0],
              y: [0, -60, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, delay: 5 }}
          />
        </div>

        {/* Enhanced Country & Site Section */}
        <motion.section
          ref={countriesRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="bg-gradient-to-br from-green-400 via-blue-500 to-green-400 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }}></div>
            </div>
            
            {/* Floating Orbs */}
            <motion.div 
              className="absolute top-20 left-20 w-20 h-20 bg-white/20 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-32 right-32 w-16 h-16 bg-white/20 rounded-full"
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              variants={itemVariants}
              className="text-center mb-20"
            >
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                whileInView={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 40px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Our Global Network
              </motion.h2>
              <motion.p 
                className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Connecting talent with opportunity across 40+ offices worldwide
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            >
              {/* Enhanced Countries Columns */}
              {[
                {
                  title: "Countries",
                  items: [
                    { name: 'Belgium' },
                    { name: 'Germany' },
                    { name: 'Netherlands' },
                    { name: 'USA' }
                  ]
                },
                {
                  title: "More Locations",
                  items: [
                    { name: 'Canada' },
                    { name: 'Ireland' },
                    { name: 'Poland' },
                    { name: 'United Kingdom' }
                  ]
                },
                {
                  title: "Our Sites",
                  items: [
                    { 
                      name: 'Nash Squared', 
                      desc: 'Technology recruitment specialists' 
                    },
                    { 
                      name: 'Workforce Solutions', 
                      desc: 'Flexible talent solutions' 
                    }
                  ]
                }
              ].map((column, columnIndex) => (
                <motion.div 
                  key={columnIndex}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/20 hover:bg-white/15 transition-all duration-500 group"
                  whileHover={{ 
                    y: -5,
                    rotateY: 2,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
                  }}
                >
                  <motion.h3
                    variants={itemVariants}
                    className="text-2xl sm:text-3xl font-bold text-white mb-10 pb-4 border-b border-white/20 relative"
                  >
                    {column.title}
                    <motion.div 
                      className="absolute bottom-0 left-0 h-0.5 bg-white rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "60px" }}
                      transition={{ delay: 0.5 + columnIndex * 0.1, duration: 0.8 }}
                    />
                  </motion.h3>
                  
                  <motion.div variants={containerVariants} className="space-y-6">
                    {column.items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        variants={itemVariants}
                        whileHover={{ 
                          x: 12,
                          transition: { duration: 0.2 }
                        }}
                        className="group/item cursor-pointer"
                      >
                        <div className="block transition-all duration-300">
                          <div className="flex items-center mb-2">
                            <motion.span 
                              className="w-3 h-3 bg-white rounded-full mr-4 group-hover/item:bg-green-400 transition-all duration-300"
                              whileHover={{ scale: 1.5 }}
                            />
                            <span className="text-lg sm:text-xl font-medium text-white hover:text-gray-200 transition-colors duration-300">
                              {item.name}
                            </span>
                            <motion.span 
                              className="ml-3 opacity-0 group-hover/item:opacity-100 transition-all duration-300 text-green-400"
                              initial={{ x: -10 }}
                              whileHover={{ x: 0 }}
                            >
                              →
                            </motion.span>
                          </div>
                          {item.desc && (
                            <p className="text-sm sm:text-base text-white/70 ml-7 group-hover/item:text-white/90 transition-colors duration-300">
                              {item.desc}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Phishing Scam Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="bg-white py-24 px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01, rotateX: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-yellow-50 via-white to-red-50 p-10 sm:p-12 lg:p-16 rounded-3xl shadow-xl border border-gray-200 max-w-6xl mx-auto relative overflow-hidden"
            >
              {/* Background Animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-yellow-100/50 to-red-100/50 rounded-3xl"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              
              <motion.div 
                variants={containerVariants}
                className="flex flex-col lg:flex-row gap-10 lg:gap-12 relative z-10"
              >
                <motion.div variants={itemVariants} className="lg:w-1/3">
                  <motion.div 
                    className="bg-gradient-to-br from-yellow-500 to-red-500 text-white font-bold rounded-2xl p-6 sm:p-8 text-center shadow-lg"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)"
                    }}
                  >
                    <motion.h3 
                      className="text-2xl sm:text-3xl mb-3 flex items-center justify-center"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ⚠️ Security Alert
                    </motion.h3>
                    <p className="text-sm sm:text-base opacity-90">Important Notice</p>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="lg:w-2/3">
                  <motion.h2
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight"
                  >
                    Phishing Scam Update
                  </motion.h2>
                  
                  <motion.div variants={containerVariants} className="space-y-6 text-gray-700 text-lg sm:text-xl leading-relaxed">
                    <motion.p variants={itemVariants}>
                      We are aware that individuals impersonating Harvey Nash consultants have been 
                      contacting individuals via WhatsApp, SMS and Telegram about job opportunities. This is a phishing scam
                      and we have reported this to Action Fraud. The security of our systems has not been impacted.
                    </motion.p>
                    
                    <motion.p variants={itemVariants}>
                      To find out how to protect yourself and your data please read our security guidelines
                      and learn how to protect yourself from recruitment phishing scams.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Contact Form Section */}
        <motion.section
          ref={formRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="bg-gradient-to-br from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={formVariants}
              className="flex flex-col xl:flex-row gap-12 lg:gap-16"
            >
              {/* Enhanced Left Column - Contact Info */}
              <motion.div 
                variants={itemVariants}
                className="xl:w-2/5"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text"
                >
                  Let's Connect
                </motion.h2>
                
                <motion.div 
                  variants={itemVariants} 
                  className="space-y-6 mb-12"
                >
                  <motion.p 
                    className="text-lg sm:text-xl text-gray-700 leading-relaxed"
                    whileInView={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Our expert consultants work across the world so we've got it covered wherever you are. We offer permanent, contract, interim and executive recruitment through our global network.
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg sm:text-xl text-gray-700 leading-relaxed"
                    whileInView={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    Fill out the form or use the details below to reach out to our team.
                  </motion.p>
                </motion.div>

                <motion.div 
                  variants={containerVariants}
                  className="space-y-8"
                >
                  {[
                    {
                      icon: (
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      title: "Call Us",
                      content: (
                        <span className="text-blue-500 hover:text-blue-700 transition-colors text-lg sm:text-xl font-semibold cursor-pointer">
                          +44 (0)20 7333 0033
                        </span>
                      )
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      title: "Email Us",
                      content: (
                        <span className="text-blue-500 hover:text-blue-700 transition-colors text-lg sm:text-xl font-semibold cursor-pointer">
                          info@harveynash.com
                        </span>
                      )
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      title: "Visit Us",
                      content: (
                        <div>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            LDN:W, 3 Noble Street<br />London, EC2V 7EE
                          </p>
                          <span className="text-blue-500 hover:text-blue-700 transition-colors inline-block mt-3 font-semibold cursor-pointer">
                            View on map →
                          </span>
                        </div>
                      )
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="flex items-start space-x-5 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="flex-shrink-0 bg-gradient-to-br from-green-400 to-blue-500 p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)"
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        {item.content}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Enhanced Right Column - Contact Form */}
              <motion.div 
                variants={itemVariants}
                className="xl:w-3/5"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, rotateY: -5 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-gray-100 relative overflow-hidden"
                >
                  {/* Animated Background Gradient */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-blue-500/5"
                    animate={{ 
                      background: [
                        "linear-gradient(45deg, rgba(34, 197, 94, 0.05) 0%, transparent 50%, rgba(59, 130, 246, 0.05) 100%)",
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(34, 197, 94, 0.05) 100%)",
                        "linear-gradient(45deg, rgba(34, 197, 94, 0.05) 0%, transparent 50%, rgba(59, 130, 246, 0.05) 100%)"
                      ]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  
                  <motion.h3 
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10"
                  >
                    Send us a message
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 mb-10 text-lg relative z-10"
                    variants={itemVariants}
                  >
                    Fields marked with an asterisk (*) are required.
                  </motion.p>

                  <motion.form 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    onSubmit={handleSubmit}
                    className="space-y-8 relative z-10"
                  >
                    {/* Enhanced Success/Error Messages */}
                    <AnimatePresence>
                      {submitStatus === 'successfully_submitted' && (
                        <motion.div
                          initial={{ opacity: 0, y: -20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.9 }}
                          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-6 rounded-2xl shadow-lg relative overflow-hidden"
                        >
                          <motion.div 
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                          />
                          <div className="flex items-center space-x-3 relative z-10">
                            <motion.svg 
                              className="w-6 h-6" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            >
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </motion.svg>
                            <p className="font-bold text-xl">Thank you for your message!</p>
                          </div>
                          <p className="mt-2 text-lg">We'll get back to you soon.</p>
                        </motion.div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.9 }}
                          className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-6 rounded-2xl shadow-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <p className="font-bold text-xl">Submission Error</p>
                          </div>
                          <p className="mt-2 text-lg">Please try again later.</p>
                        </motion.div>
                      )}

                      {submitStatus && !['successfully_submitted', 'error'].includes(submitStatus) && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-6 rounded-2xl shadow-lg"
                        >
                          <p className="text-lg">{submitStatus}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          First name *
                        </label>
                        <motion.input
                          whileFocus={{ 
                            boxShadow: "0 0 0 4px rgba(34, 197, 94, 0.2)",
                            borderColor: "#22c55e",
                            scale: 1.02
                          }}
                          onFocus={() => setActiveField('firstName')}
                          onBlur={() => setActiveField('')}
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-0 focus:outline-none transition-all duration-300 text-lg bg-gray-50 focus:bg-white"
                        />
                        <motion.div 
                          className="h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: activeField === 'firstName' ? "100%" : "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          Last name *
                        </label>
                        <motion.input
                          whileFocus={{ 
                            boxShadow: "0 0 0 4px rgba(34, 197, 94, 0.2)",
                            borderColor: "#22c55e",
                            scale: 1.02
                          }}
                          onFocus={() => setActiveField('lastName')}
                          onBlur={() => setActiveField('')}
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-0 focus:outline-none transition-all duration-300 text-lg bg-gray-50 focus:bg-white"
                        />
                        <motion.div 
                          className="h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: activeField === 'lastName' ? "100%" : "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          Email *
                        </label>
                        <motion.input
                          whileFocus={{ 
                            boxShadow: "0 0 0 4px rgba(34, 197, 94, 0.2)",
                            borderColor: "#22c55e",
                            scale: 1.02
                          }}
                          onFocus={() => setActiveField('email')}
                          onBlur={() => setActiveField('')}
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-0 focus:outline-none transition-all duration-300 text-lg bg-gray-50 focus:bg-white"
                        />
                        <motion.div 
                          className="h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: activeField === 'email' ? "100%" : "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          Phone number
                        </label>
                        <motion.input
                          whileFocus={{ 
                            boxShadow: "0 0 0 4px rgba(34, 197, 94, 0.2)",
                            borderColor: "#22c55e",
                            scale: 1.02
                          }}
                          onFocus={() => setActiveField('phone')}
                          onBlur={() => setActiveField('')}
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-0 focus:outline-none transition-all duration-300 text-lg bg-gray-50 focus:bg-white"
                        />
                        <motion.div 
                          className="h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: activeField === 'phone' ? "100%" : "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-3">
                      <label htmlFor="location" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Location
                      </label>
                      <motion.input
                        whileFocus={{ 
                          boxShadow: "0 0 0 4px rgba(34, 197, 94, 0.2)",
                          borderColor: "#22c55e",
                          scale: 1.02
                        }}
                        onFocus={() => setActiveField('location')}
                        onBlur={() => setActiveField('')}
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-0 focus:outline-none transition-all duration-300 text-lg bg-gray-50 focus:bg-white"
                      />
                      <motion.div 
                        className="h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: activeField === 'location' ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-3">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Message *
                      </label>
                      <motion.textarea
                        whileFocus={{ 
                          boxShadow: "0 0 0 4px rgba(34, 197, 94, 0.2)",
                          borderColor: "#22c55e",
                          scale: 1.02
                        }}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField('')}
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-0 focus:outline-none transition-all duration-300 resize-none text-lg bg-gray-50 focus:bg-white"
                      />
                      <motion.div 
                        className="h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: activeField === 'message' ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200">
                      <div className="flex items-start space-x-5">
                        <motion.input
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ scale: 1.1 }}
                          type="checkbox"
                          id="accept"
                          name="accept"
                          checked={formData.accept}
                          onChange={handleInputChange}
                          className="mt-1 h-6 w-6 text-green-500 focus:ring-green-400 border-3 border-gray-400 rounded-lg transition-all duration-300"
                          required
                        />
                        <div>
                          <label htmlFor="accept" className="block text-lg font-semibold text-gray-700 mb-3">
                            I agree to the privacy policy *
                          </label>
                          <p className="text-base text-gray-600 leading-relaxed">
                            By submitting this form, you agree to our privacy policy and consent to having Harvey Nash collect your personal information.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="pt-4">
                      <motion.button
                        whileHover={{ 
                          scale: isSubmitting ? 1 : 1.05,
                          boxShadow: isSubmitting ? "none" : "0 20px 40px rgba(34, 197, 94, 0.4)",
                          y: isSubmitting ? 0 : -2
                        }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className={`${
                          isSubmitting 
                            ? 'bg-gray-400 cursor-not-allowed shadow-none' 
                            : 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 shadow-xl'
                        } text-white font-bold py-5 px-10 rounded-2xl transition-all duration-500 w-full text-xl flex items-center justify-center relative overflow-hidden`}
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center"
                            >
                              <motion.div
                                className="w-6 h-6 border-3 border-white border-t-transparent rounded-full mr-4"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              SENDING...
                            </motion.div>
                          ) : (
                            <motion.div
                              key="send"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center"
                            >
                              <motion.svg 
                                className="w-6 h-6 mr-3" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </motion.svg>
                              SEND MESSAGE
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        {/* Button ripple effect */}
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-2xl scale-0"
                          whileHover={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.button>
                    </motion.div>
                  </motion.form>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default ContactUs;