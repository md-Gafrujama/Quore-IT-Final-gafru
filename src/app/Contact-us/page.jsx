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
  const [formErrors, setFormErrors] = useState({});

  // Create refs for scrolling and animations
  const formRef = useRef(null);
  const countriesRef = useRef(null);
  const heroRef = useRef(null);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Please share your message with us';
    if (!formData.accept) errors.accept = 'You must accept the privacy policy to continue';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission with realistic API behavior
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
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
      setFormErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToCountries = () => {
    countriesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, rotateY: -8 },
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
      {/* Enhanced Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Modern Background with Dark Gray and Accent Green */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          
          {/* Animated Gradient Orbs with Brand Colors */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(0, 217, 166, 0.3) 0%, transparent 70%)' }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(0, 217, 166, 0.2) 0%, rgba(75, 85, 99, 0.3) 50%, transparent 70%)' }}
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
          
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 217, 166, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 166, 0.5) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.h1 
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none mb-6"
                style={{ 
                  background: `linear-gradient(45deg, #ffffff, #00d9a6)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundSize: "200% 200%"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Contact Us
              </motion.h1>
            </motion.div>
            
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Connect with our global team of recruitment specialists and take your career to the next level
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                onClick={scrollToForm}
                className="group relative px-8 py-4 text-white font-bold rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0, 217, 166, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center text-lg">
                  Get in Touch
                  <motion.svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
                <motion.div 
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, #00b894, #00d9a6)` }}
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={scrollToCountries}
                className="px-8 py-4 border-2 text-white font-bold rounded-2xl backdrop-blur-sm transition-all duration-300"
                style={{ borderColor: '#00d9a6' }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(0, 217, 166, 0.1)',
                  borderColor: '#00d9a6'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg">Our Locations</span>
              </motion.button>
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div 
                className="w-6 h-10 border-2 rounded-full flex justify-center cursor-pointer transition-colors duration-300"
                style={{ borderColor: '#00d9a6' }}
                whileHover={{ 
                  scale: 1.1,
                  borderColor: '#00d9a6',
                  boxShadow: '0 0 20px rgba(0, 217, 166, 0.3)'
                }}
                onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
              >
                <motion.div 
                  className="w-1 h-3 rounded-full mt-2"
                  style={{ backgroundColor: '#00d9a6' }}
                  animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Services Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #00d9a6 2px, transparent 2px), radial-gradient(circle at 75% 75%, #374151 2px, transparent 2px)`,
              backgroundSize: '100px 100px, 150px 150px'
            }}
          />
        </div>

        <motion.div
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              variants={itemVariants}
            >
              How Can We Help?
            </motion.h2>
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Discover opportunities and solutions tailored to your needs across our global network
            </motion.p>
          </motion.div>

          {/* Service Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            variants={containerVariants}
          >
            {[
              { 
                icon: "💼",
                title: "Job Opportunities", 
                description: "Explore thousands of tech roles worldwide",
                action: () => window.open('#', '_blank'),
                stats: "10,000+ Active Jobs"
              },
              { 
                icon: "🤝",
                title: "Client Solutions", 
                description: "Partner with us for your hiring needs",
                action: scrollToForm,
                stats: "500+ Happy Clients"
              },
              { 
                icon: "🌍",
                title: "Global Presence", 
                description: "40+ offices across 3 continents",
                action: scrollToCountries,
                stats: "40+ Office Locations"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
                onClick={service.action}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full relative overflow-hidden">
                  {/* Background Gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="text-5xl mb-6 block text-center"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed text-center mb-6">
                      {service.description}
                    </p>
                    
                    <div className="text-center">
                      <span 
                        className="inline-block px-4 py-2 text-white text-sm font-semibold rounded-full"
                        style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                      >
                        {service.stats}
                      </span>
                    </div>
                    
                    <motion.div 
                      className="w-full h-1 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Office Showcase */}
          <motion.div 
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row">
              <motion.div 
                className="lg:w-1/2 relative h-80 lg:h-auto overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop')`
                  }}
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, rgba(0, 217, 166, 0.2), rgba(55, 65, 81, 0.2))` }}
                />
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2 p-8 sm:p-12 lg:p-16"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-8">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
                    style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                  >
                    <span className="text-white text-3xl">🏢</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Head Office</h3>
                </div>
                
                <address className="text-lg sm:text-xl text-gray-700 not-italic space-y-6 mb-10">
                  <div className="flex items-start">
                    <span className="mr-4 mt-1 text-2xl" style={{ color: '#00d9a6' }}>📍</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">London Headquarters</p>
                      <p className="leading-relaxed">LDN:W, 3 Noble Street<br/>London, EC2V 7EE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="mr-4 text-2xl" style={{ color: '#00d9a6' }}>📞</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Phone</p>
                      <a 
                        href="tel:+442073330033" 
                        className="font-semibold hover:underline transition-colors"
                        style={{ color: '#00d9a6' }}
                      >
                        +44 (0)20 7333 0033
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="mr-4 text-2xl" style={{ color: '#00d9a6' }}>✉️</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <a 
                        href="mailto:info@harveynash.com" 
                        className="font-semibold hover:underline transition-colors"
                        style={{ color: '#00d9a6' }}
                      >
                        info@harveynash.com
                      </a>
                    </div>
                  </div>
                </address>
                
                <motion.button
                  className="inline-flex items-center px-8 py-4 text-white font-bold rounded-2xl hover:shadow-xl transition-all duration-500"
                  style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 217, 166, 0.3)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Get Directions</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Global Network Section */}
      <motion.section
        ref={countriesRef}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 217, 166, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 166, 0.1) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>
          
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 rounded-full blur-xl"
            style={{ background: `radial-gradient(circle, rgba(0, 217, 166, 0.2) 0%, transparent 70%)` }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-32 right-32 w-24 h-24 rounded-full blur-xl"
            style={{ background: `radial-gradient(circle, rgba(0, 217, 166, 0.3) 0%, transparent 70%)` }}
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.6, 0.3],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
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
                  "0 0 40px rgba(0, 217, 166, 0.5)",
                  "0 0 20px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Global Network
            </motion.h2>
            <motion.p 
              className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Connecting talent with opportunity across 40+ offices worldwide
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Europe",
                items: [
                  { name: 'United Kingdom', count: '12 offices' },
                  { name: 'Germany', count: '8 offices' },
                  { name: 'Netherlands', count: '6 offices' },
                  { name: 'Belgium', count: '4 offices' }
                ]
              },
              {
                title: "Americas",
                items: [
                  { name: 'United States', count: '15 offices' },
                  { name: 'Canada', count: '5 offices' },
                  { name: 'Mexico', count: '3 offices' },
                  { name: 'Brazil', count: '2 offices' }
                ]
              },
              {
                title: "Asia Pacific",
                items: [
                  { name: 'Australia', count: '8 offices' },
                  { name: 'Singapore', count: '4 offices' },
                  { name: 'Japan', count: '6 offices' },
                  { name: 'India', count: '10 offices' }
                ]
              }
            ].map((region, regionIndex) => (
              <motion.div 
                key={regionIndex}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500"
                whileHover={{ 
                  y: -8,
                  rotateY: 3,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
              >
                <motion.h3
                  className="text-2xl sm:text-3xl font-bold text-white mb-8 pb-4 border-b border-white/20 relative"
                  variants={itemVariants}
                >
                  {region.title}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 rounded-full"
                    style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    transition={{ delay: 0.5 + regionIndex * 0.1, duration: 0.8 }}
                  />
                </motion.h3>
                
                <motion.div variants={containerVariants} className="space-y-6">
                  {region.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                      whileHover={{ 
                        x: 12,
                        transition: { duration: 0.2 }
                      }}
                      className="group/item cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <motion.div 
                            className="w-3 h-3 bg-white rounded-full mr-4 transition-colors duration-300"
                            style={{ backgroundColor: activeField ? '#00d9a6' : '#ffffff' }}
                            whileHover={{ 
                              scale: 1.5,
                              backgroundColor: '#00d9a6'
                            }}
                          />
                          <span className="text-lg font-medium text-white group-hover/item:text-gray-300 transition-colors duration-300">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400 group-hover/item:text-white transition-colors duration-300">
                          {item.count}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Security Alert Section */}
      <motion.section
        className="bg-gradient-to-br from-amber-50 to-red-50 py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border-l-8 relative overflow-hidden"
            style={{ borderLeftColor: '#00d9a6' }}
          >
            <motion.div 
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl"
              style={{ background: `radial-gradient(circle, rgba(0, 217, 166, 0.2) 0%, transparent 70%)` }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="flex flex-col lg:flex-row gap-8 relative z-10">
              <motion.div 
                className="lg:w-1/4"
                variants={itemVariants}
              >
                <motion.div 
                  className="text-white font-bold rounded-2xl p-6 text-center shadow-lg"
                  style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                  whileHover={{ scale: 1.05 }}
                  animate={{ 
                    boxShadow: [
                      "0 10px 30px rgba(0, 217, 166, 0.3)",
                      "0 20px 40px rgba(0, 217, 166, 0.4)",
                      "0 10px 30px rgba(0, 217, 166, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.div 
                    className="text-4xl mb-3"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⚠️
                  </motion.div>
                  <h3 className="text-xl font-bold">Security Alert</h3>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="lg:w-3/4"
                variants={itemVariants}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                  Phishing Scam Warning
                </h2>
                
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    <strong>Important Notice:</strong> We are aware that individuals impersonating Harvey Nash consultants have been contacting people via WhatsApp, SMS and Telegram about fake job opportunities.
                  </p>
                  
                  <p>
                    This is a <strong>phishing scam</strong> and has been reported to Action Fraud. The security of our systems has not been compromised.
                  </p>
                  
                  <div className="bg-gray-100 rounded-2xl p-6 mt-6">
                    <h4 className="font-bold text-gray-800 mb-3">Stay Protected:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Always verify job opportunities through our official website</li>
                      <li>• Be cautious of unsolicited messages from unknown numbers</li>
                      <li>• Report suspicious activity to our security team</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Contact Form Section */}
      <motion.section
        ref={formRef}
        className="bg-gradient-to-br from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="flex flex-col xl:flex-row gap-16"
          >
            {/* Left Column - Contact Info */}
            <motion.div 
              variants={itemVariants}
              className="xl:w-2/5"
            >
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight"
                variants={itemVariants}
              >
                Let's Connect
              </motion.h2>
              
              <motion.div 
                variants={itemVariants} 
                className="space-y-8 mb-12"
              >
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our expert consultants work across the world, offering permanent, contract, interim and executive recruitment through our global network.
                </p>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  Ready to take the next step? Fill out the form or contact us directly using the information below.
                </p>
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
                      <a 
                        href="tel:+442073330033" 
                        className="text-xl font-semibold hover:underline transition-colors"
                        style={{ color: '#00d9a6' }}
                      >
                        +44 (0)20 7333 0033
                      </a>
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
                      <a 
                        href="mailto:info@harveynash.com" 
                        className="text-xl font-semibold hover:underline transition-colors"
                        style={{ color: '#00d9a6' }}
                      >
                        info@harveynash.com
                      </a>
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
                        <p className="text-gray-700 text-lg leading-relaxed mb-3">
                          LDN:W, 3 Noble Street<br />London, EC2V 7EE
                        </p>
                        <button 
                          className="font-semibold hover:underline transition-colors"
                          style={{ color: '#00d9a6' }}
                        >
                          View on map →
                        </button>
                      </div>
                    )
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-6 group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      {item.content}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div 
              variants={itemVariants}
              className="xl:w-3/5"
            >
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100 relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h3 
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
                  variants={itemVariants}
                >
                  Send us a message
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 mb-10 text-lg"
                  variants={itemVariants}
                >
                  Fields marked with an asterisk (*) are required.
                </motion.p>

                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  variants={containerVariants}
                >
                  {/* Success/Error Messages */}
                  <AnimatePresence>
                    {submitStatus === 'successfully_submitted' && (
                      <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        className="text-white px-8 py-6 rounded-2xl shadow-lg relative overflow-hidden"
                        style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{ duration: 1.5 }}
                        />
                        <div className="flex items-center space-x-3 relative z-10">
                          <motion.svg 
                            className="w-6 h-6" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                          >
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </motion.svg>
                          <div>
                            <p className="font-bold text-xl">Thank you for your message!</p>
                            <p className="text-white/90">We'll get back to you within 24 hours.</p>
                          </div>
                        </div>
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
                          <div>
                            <p className="font-bold text-xl">Submission Error</p>
                            <p className="text-red-100">Please try again later.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Form Fields */}
                  <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        First name *
                      </label>
                      <motion.input
                        whileFocus={{ 
                          boxShadow: "0 0 0 4px rgba(0, 217, 166, 0.1)",
                          scale: 1.01
                        }}
                        onFocus={() => setActiveField('firstName')}
                        onBlur={() => setActiveField('')}
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your first name"
                        className={`w-full px-5 py-4 border-2 ${
                          formErrors.firstName 
                            ? 'border-red-300 focus:border-red-400' 
                            : 'border-gray-300 focus:border-green-400'
                        } rounded-xl focus:ring-0 focus:outline-none transition-all duration-300 text-lg bg-gray-50 focus:bg-white placeholder-gray-400`}
                        style={{
                          focusBorderColor: formErrors.firstName ? '#ef4444' : '#00d9a6'
                        }}
                      />
                      {formErrors.firstName && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {formErrors.firstName}
                        </motion.p>
                      )}
                      <motion.div 
                        className="h-0.5 rounded-full"
                        style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
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
                          boxShadow: "0 0 0 4px rgba(0, 217, 166, 0.1)",
                          scale: 1.01
                        }}
                        onFocus={() => setActiveField('lastName')}
                        onBlur={() => setActiveField('')}
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your last name"
                        className={`w-full px-5 py-4 border-2 ${
                          formErrors.lastName 
                            ? 'border-red-300 focus:border-red-400' 
                            : 'border-gray-300 focus:border-green-400'
                        } rounded-xl focus:ring-0 focus:outline-none transition-all duration-300 text-lg bg-gray-50 focus:bg-white placeholder-gray-400`}
                      />
                      {formErrors.lastName && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {formErrors.lastName}
                        </motion.p>
                      )}
                      <motion.div 
                        className="h-0.5 rounded-full"
                        style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                        initial={{ width: 0 }}
                        animate={{ width: activeField === 'lastName' ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <motion.input
                        whileFocus={{ 
                          boxShadow: "0 0 0 4px rgba(0, 217, 166, 0.1)",
                          scale: 1.01
                        }}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField('')}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className={`w-full px-5 py-4 border-2 ${
                          formErrors.email 
                            ? 'border-red-300 focus:border-red-400' 
                            : 'border-gray-300 focus:border-green-400'
                        } rounded-xl focus:ring-0 focus:outline-none transition-all duration-300 text-lg bg-gray-50 focus:bg-white placeholder-gray-400`}
                      />
                      {formErrors.email && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {formErrors.email}
                        </motion.p>
                      )}
                      <motion.div 
                        className="h-0.5 rounded-full"
                        style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                        initial={{ width: 0 }}
                        animate={{ width: activeField === 'email' ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <motion.input
                        whileFocus={{ 
                          boxShadow: "0 0 0 4px rgba(0, 217, 166, 0.1)",
                          scale: 1.01
                        }}
                        onFocus={() => setActiveField('phone')}
                        onBlur={() => setActiveField('')}
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-5 py-4 border-2 border-gray-300 focus:border-green-400 rounded-xl focus:ring-0 focus:outline-none transition-all duration-300 text-lg bg-gray-50 focus:bg-white placeholder-gray-400"
                      />
                      <motion.div 
                        className="h-0.5 rounded-full"
                        style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                        initial={{ width: 0 }}
                        animate={{ width: activeField === 'phone' ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-3">
                    <label htmlFor="location" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Current Location
                    </label>
                    <motion.input
                      whileFocus={{ 
                        boxShadow: "0 0 0 4px rgba(0, 217, 166, 0.1)",
                        scale: 1.01
                      }}
                      onFocus={() => setActiveField('location')}
                      onBlur={() => setActiveField('')}
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, Country"
                      className="w-full px-5 py-4 border-2 border-gray-300 focus:border-green-400 rounded-xl focus:ring-0 focus:outline-none transition-all duration-300 text-lg bg-gray-50 focus:bg-white placeholder-gray-400"
                    />
                    <motion.div 
                      className="h-0.5 rounded-full"
                      style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                      initial={{ width: 0 }}
                      animate={{ width: activeField === 'location' ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-3">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Your Message *
                    </label>
                    <motion.textarea
                      whileFocus={{ 
                        boxShadow: "0 0 0 4px rgba(0, 217, 166, 0.1)",
                        scale: 1.01
                      }}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField('')}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      placeholder="Tell us about your requirements, career goals, or how we can help you..."
                      className={`w-full px-5 py-4 border-2 ${
                        formErrors.message 
                          ? 'border-red-300 focus:border-red-400' 
                          : 'border-gray-300 focus:border-green-400'
                      } rounded-xl focus:ring-0 focus:outline-none transition-all duration-300 resize-none text-lg bg-gray-50 focus:bg-white placeholder-gray-400`}
                    />
                    {formErrors.message && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {formErrors.message}
                      </motion.p>
                    )}
                    <motion.div 
                      className="h-0.5 rounded-full"
                      style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                      initial={{ width: 0 }}
                      animate={{ width: activeField === 'message' ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 border-2 border-gray-200">
                    <div className="flex items-start space-x-5">
                      <motion.input
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        type="checkbox"
                        id="accept"
                        name="accept"
                        checked={formData.accept}
                        onChange={handleInputChange}
                        className="mt-1 h-6 w-6 focus:ring-green-400 border-3 border-gray-400 rounded-lg transition-all duration-300"
                        style={{
                          accentColor: '#00d9a6'
                        }}
                        required
                      />
                      <div>
                        <label htmlFor="accept" className="block text-lg font-semibold text-gray-700 mb-3 cursor-pointer">
                          I agree to the privacy policy *
                        </label>
                        <p className="text-base text-gray-600 leading-relaxed">
                          By submitting this form, you agree to our privacy policy and consent to having Harvey Nash collect your personal information to respond to your inquiry. We respect your privacy and will never share your information with third parties.
                        </p>
                        {formErrors.accept && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-2 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {formErrors.accept}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-4">
                    <motion.button
                      whileHover={{ 
                        scale: isSubmitting ? 1 : 1.02,
                        boxShadow: isSubmitting ? "none" : "0 20px 40px rgba(0, 217, 166, 0.3)",
                        y: isSubmitting ? 0 : -3
                      }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed shadow-none' 
                          : 'shadow-xl hover:shadow-2xl'
                      } text-white font-bold py-5 px-12 rounded-2xl transition-all duration-500 w-full text-xl flex items-center justify-center relative overflow-hidden`}
                      style={{
                        background: isSubmitting 
                          ? '#9ca3af' 
                          : `linear-gradient(135deg, #00d9a6, #00b894)`
                      }}
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
                            SENDING MESSAGE...
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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
    </>
  );
};

export default ContactUs;
