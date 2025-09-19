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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(0, 217, 166, 0.2) 0%, rgba(75, 85, 99, 0.3) 50%, transparent 70%)' }}
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
          
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 217, 166, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 166, 0.5) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="relative z-10 text-center w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none mb-6"
              style={{ 
                background: `linear-gradient(45deg, #ffffff, #00d9a6)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Contact Us
            </motion.h1>
            
            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Connect with our global team of recruitment specialists and take your career to the next level
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 text-white font-semibold rounded-lg text-lg transition-all duration-300"
                style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 217, 166, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.button>

              <motion.button
                onClick={scrollToCountries}
                className="w-full sm:w-auto px-8 py-4 border-2 text-white font-semibold rounded-lg text-lg transition-all duration-300"
                style={{ borderColor: '#00d9a6' }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(0, 217, 166, 0.1)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Our Locations
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              How Can We Help?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Discover opportunities and solutions tailored to your needs across our global network
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: "💼",
                title: "Job Opportunities", 
                description: "Explore thousands of tech roles worldwide",
                stats: "10,000+ Active Jobs"
              },
              { 
                icon: "🤝",
                title: "Client Solutions", 
                description: "Partner with us for your hiring needs",
                stats: "500+ Happy Clients"
              },
              { 
                icon: "🌍",
                title: "Global Presence", 
                description: "40+ offices across 3 continents",
                stats: "40+ Office Locations"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 hover:bg-white rounded-lg transition-all duration-300 cursor-pointer group"
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span 
                  className="inline-block px-4 py-2 text-white text-sm font-semibold rounded-full"
                  style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                >
                  {service.stats}
                </span>
                <motion.div 
                  className="w-16 h-1 rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Office Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className="w-full h-96 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop')`
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Head Office</h3>
              
              <div className="space-y-6 text-lg text-gray-700">
                <div className="flex items-start">
                  <span className="mr-4 mt-1 text-2xl" style={{ color: '#00d9a6' }}>📍</span>
                  <div>
                    <p className="font-semibold text-gray-900">London Headquarters</p>
                    <p>LDN:W, 3 Noble Street<br/>London, EC2V 7EE</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="mr-4 text-2xl" style={{ color: '#00d9a6' }}>📞</span>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a 
                      href="tel:+442073330033" 
                      className="font-semibold hover:underline"
                      style={{ color: '#00d9a6' }}
                    >
                      +44 (0)20 7333 0033
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="mr-4 text-2xl" style={{ color: '#00d9a6' }}>✉️</span>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a 
                      href="mailto:info@harveynash.com" 
                      className="font-semibold hover:underline"
                      style={{ color: '#00d9a6' }}
                    >
                      info@harveynash.com
                    </a>
                  </div>
                </div>
              </div>
              
              <motion.button
                className="mt-8 px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300"
                style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Directions
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <motion.section
        ref={countriesRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Global Network</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connecting talent with opportunity across 40+ offices worldwide
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
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
            ].map((region, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white/10 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-white/20 relative">
                  {region.title}
                  <div 
                    className="absolute bottom-0 left-0 w-16 h-1 rounded-full"
                    style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                  />
                </h3>
                
                <div className="space-y-4">
                  {region.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-center">
                      <span className="text-white">{item.name}</span>
                      <span className="text-gray-400 text-sm">{item.count}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Security Alert */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-lg p-8 border-l-4"
            style={{ borderLeftColor: '#00d9a6' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/4">
                <div 
                  className="p-4 rounded-lg text-center text-white font-bold"
                  style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                >
                  <div className="text-3xl mb-2">⚠️</div>
                  <div>Security Alert</div>
                </div>
              </div>
              
              <div className="lg:w-3/4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                  Phishing Scam Warning
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Important Notice:</strong> We are aware that individuals impersonating Harvey Nash consultants have been contacting people via WhatsApp, SMS and Telegram about fake job opportunities.
                  </p>
                  <p>
                    This is a <strong>phishing scam</strong> and has been reported to Action Fraud. The security of our systems has not been compromised.
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Stay Protected:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Always verify job opportunities through our official website</li>
                      <li>• Be cautious of unsolicited messages from unknown numbers</li>
                      <li>• Report suspicious activity to our security team</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROFESSIONAL CONTACT FORM - Simple & Clean Design */}
      <motion.section
        ref={formRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          {/* Form Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to take the next step? Send us a message and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          {/* Contact Info Row */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <a 
                href="tel:+442073330033" 
                className="text-lg font-medium hover:underline"
                style={{ color: '#00d9a6' }}
              >
                +44 (0)20 7333 0033
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <a 
                href="mailto:info@harveynash.com" 
                className="text-lg font-medium hover:underline break-all"
                style={{ color: '#00d9a6' }}
              >
                info@harveynash.com
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                LDN:W, 3 Noble Street<br />London, EC2V 7EE
              </p>
            </motion.div>
          </motion.div>

          {/* CLEAN & PROFESSIONAL FORM */}
          <motion.div variants={itemVariants}>
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-8"
              variants={containerVariants}
            >
              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus === 'successfully_submitted' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-6 rounded-lg text-white text-center"
                    style={{ background: `linear-gradient(135deg, #00d9a6, #00b894)` }}
                  >
                    <svg className="w-8 h-8 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">Thank you for your message!</h3>
                    <p>We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-6 bg-red-500 text-white rounded-lg text-center"
                  >
                    <svg className="w-8 h-8 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">Submission Error</h3>
                    <p>Please try again later.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Fields - Clean & Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField('firstName')}
                    onBlur={() => setActiveField('')}
                    required
                    placeholder="Enter your first name"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-all duration-300 text-lg ${
                      formErrors.firstName 
                        ? 'border-red-300 focus:border-red-500' 
                        : activeField === 'firstName'
                          ? 'border-green-400 focus:border-green-500'
                          : 'border-gray-300 focus:border-gray-400'
                    } bg-white placeholder-gray-400`}
                  />
                  {formErrors.firstName && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-sm text-red-500 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {formErrors.firstName}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField('lastName')}
                    onBlur={() => setActiveField('')}
                    required
                    placeholder="Enter your last name"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-all duration-300 text-lg ${
                      formErrors.lastName 
                        ? 'border-red-300 focus:border-red-500' 
                        : activeField === 'lastName'
                          ? 'border-green-400 focus:border-green-500'
                          : 'border-gray-300 focus:border-gray-400'
                    } bg-white placeholder-gray-400`}
                  />
                  {formErrors.lastName && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-sm text-red-500 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {formErrors.lastName}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField('')}
                    required
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-all duration-300 text-lg ${
                      formErrors.email 
                        ? 'border-red-300 focus:border-red-500' 
                        : activeField === 'email'
                          ? 'border-green-400 focus:border-green-500'
                          : 'border-gray-300 focus:border-gray-400'
                    } bg-white placeholder-gray-400`}
                  />
                  {formErrors.email && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-sm text-red-500 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {formErrors.email}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField('phone')}
                    onBlur={() => setActiveField('')}
                    placeholder="+1 (555) 123-4567"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-all duration-300 text-lg ${
                      activeField === 'phone'
                        ? 'border-green-400 focus:border-green-500'
                        : 'border-gray-300 focus:border-gray-400'
                    } bg-white placeholder-gray-400`}
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  onFocus={() => setActiveField('location')}
                  onBlur={() => setActiveField('')}
                  placeholder="City, Country"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-all duration-300 text-lg ${
                    activeField === 'location'
                      ? 'border-green-400 focus:border-green-500'
                      : 'border-gray-300 focus:border-gray-400'
                  } bg-white placeholder-gray-400`}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField('')}
                  rows={6}
                  required
                  placeholder="Tell us about your requirements, career goals, or how we can help you..."
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-all duration-300 resize-none text-lg ${
                    formErrors.message 
                      ? 'border-red-300 focus:border-red-500' 
                      : activeField === 'message'
                        ? 'border-green-400 focus:border-green-500'
                        : 'border-gray-300 focus:border-gray-400'
                  } bg-white placeholder-gray-400`}
                />
                {formErrors.message && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-500 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {formErrors.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Privacy Policy Checkbox */}
              <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <input
                    type="checkbox"
                    id="accept"
                    name="accept"
                    checked={formData.accept}
                    onChange={handleInputChange}
                    className="mt-1 h-5 w-5 text-green-500 rounded border-2 border-gray-300 focus:ring-0"
                    style={{ accentColor: '#00d9a6' }}
                    required
                  />
                  <div>
                    <label htmlFor="accept" className="block text-lg font-medium text-gray-900 mb-2 cursor-pointer">
                      I agree to the privacy policy *
                    </label>
                    <p className="text-gray-600 leading-relaxed">
                      By submitting this form, you agree to our privacy policy and consent to having Harvey Nash collect your personal information to respond to your inquiry.
                    </p>
                    {formErrors.accept && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 text-sm text-red-500 flex items-center"
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

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="text-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-12 py-4 text-white font-bold text-lg rounded-lg transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'hover:shadow-lg'
                  }`}
                  style={{
                    background: isSubmitting 
                      ? '#9ca3af' 
                      : `linear-gradient(135deg, #00d9a6, #00b894)`
                  }}
                  whileHover={!isSubmitting ? { 
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(0, 217, 166, 0.3)"
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        <motion.div
                          className="w-6 h-6 border-3 border-white border-t-transparent rounded-full mr-3"
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
                        className="flex items-center justify-center"
                      >
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        SEND MESSAGE
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;
