 'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

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

  // Create refs for scrolling
  const formRef = useRef(null);
  const countriesRef = useRef(null);

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

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd2de4773-7e69-47b5-976c-50267c31532a', // Replace with your actual Web3Forms access key
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          message: formData.message,
          subject: 'New Contact Form Submission from Harvey Nash Website',
          from_name: 'Harvey Nash Website',
          // Additional fields for better organization
          first_name: formData.firstName,
          last_name: formData.lastName,
          // Bot spam protection
          botcheck: '',
        }),
      });

      if (response.ok) {
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
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll to form function
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to countries function
  const scrollToCountries = () => {
    countriesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const formVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <> 
      <Head>
        <title>Contact Harvey Nash | Global Recruitment Specialists</title>
        <meta name="description" content="Get in touch with Harvey Nash, global leaders in technology recruitment and workforce solutions. Contact our offices worldwide for career opportunities and client services." />
        <meta name="keywords" content="Harvey Nash, contact, recruitment, technology jobs, career opportunities, workforce solutions" />
        <meta property="og:title" content="Contact Harvey Nash | Global Recruitment Specialists" />
        <meta property="og:description" content="Get in touch with Harvey Nash, global leaders in technology recruitment and workforce solutions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.harveynash.com/contact" />
      </Head>

      <section className="relative h-96 flex mt-18 items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jobs_hero.jpg"
            alt="Harvey Nash Contact Page"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide">
            Contact us
          </h1>
        </div>
      </section>
 
      <div className="bg-white py-10 px-4 text-center">
        <motion.h2 
          className="text-3xl text-black font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          We operate from 40 offices covering the USA, <br /> Europe and Asia.
        </motion.h2>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="/Find-tech-jobs" 
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-red-600 text-3xl" aria-hidden="true">▼</div>
            <p className="font-bold mt-2 text-3xl text-black">Jobs & Careers</p>
          </motion.a>

          <motion.button 
            onClick={scrollToForm}
            className="flex flex-col items-center hover:opacity-80 transition-opacity border-none bg-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-red-600 text-3xl" aria-hidden="true">▼</div>
            <p className="font-bold text-black text-3xl mt-2">Client Query</p>
          </motion.button>

          <motion.button 
            onClick={scrollToCountries}
            className="flex flex-col items-center hover:opacity-80 transition-opacity border-none bg-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-red-600 text-3xl" aria-hidden="true">▼</div>
            <p className="font-bold text-black text-3xl mt-2">Our Locations</p>
          </motion.button>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row justify-center items-start md:items-center md:space-x-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-full md:w-1/2 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/london_office.jpg"
              alt="Harvey Nash London Office"
              width={500}
              height={350}
              className="w-full h-auto object-cover"
              loading="lazy"
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div 
            className="text-left md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl text-black font-bold mb-5">Our Head Office</h3>
            <address className="text-3xl text-black not-italic">
              LDN:W<br/>
              3 Noble Street<br/>
              London<br/>
              EC2V 7EE<br/>
              Tel: <a href="tel:+442073330033" className="text-teal-600 hover:text-teal-800 transition-colors">+44 (0)20 7333 0033</a><br/>
              <a href="mailto:info@harveynash.com" className="text-teal-600 hover:text-teal-800 transition-colors">info@harveynash.com</a>
            </address>
            <a 
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline mt-2 inline-block hover:text-teal-800 transition-colors"
              aria-label="View Harvey Nash London office on Google Maps"
            >
              Map and Directions
            </a>
          </motion.div>
        </motion.div>
      </div>
 
      <div className="min-h-screen bg-gray-50">
        {/* Country & Site Section */}
        <motion.section
          ref={countriesRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] py-16 px-8"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-16 text-white"
            >
              {/* Country Column */}
              <div>
                <motion.h2
                  variants={itemVariants}
                  className="text-4xl font-bold mb-8 tracking-wide"
                >
                  Country
                </motion.h2>
                <motion.div variants={containerVariants} className="space-y-4">
                  {[
                    { name: 'Belgium', link: 'https://www.harveynash.be/' },
                    { name: 'Germany', link: 'https://www.harveynash.de/' },
                    { name: 'Netherlands', link: 'https://www.harveynash.nl/' },
                    { name: 'USA', link: 'https://www.harveynashusa.com/' }
                  ].map((country, index) => (
                    <motion.div
                      key={country.name}
                      variants={itemVariants}
                      whileHover={{
                        x: 10,
                        transition: { duration: 0.3 }
                      }}
                      className="cursor-pointer hover:text-white/80 transition-colors duration-300"
                    >
                      <Link 
                        href={country.link} 
                        className="text-lg font-medium"
                        aria-label={`Visit Harvey Nash ${country.name}`}
                      >
                        {country.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Middle Column - Company Names */}
              <div>
                <motion.div variants={containerVariants} className="space-y-4 mt-16">
                  {[
                    { name: 'Canada', link: 'https://www.harveynashusa.com/' },
                    { name: 'Ireland', link: 'https://www.harveynash.ie/' },
                    { name: 'Poland', link: 'https://www.harveynash.pl/' },
                    { name: 'United Kingdom', link: 'https://www.harveynash.co.uk/' }
                  ].map((site, index) => (
                    <motion.div
                      key={site.name}
                      variants={itemVariants}
                      whileHover={{
                        x: 10,
                        transition: { duration: 0.3 }
                      }}
                      className="cursor-pointer hover:text-white/80 transition-colors duration-300"
                    >
                      <Link 
                        href={site.link} 
                        className="text-lg font-medium"
                        aria-label={`Visit Harvey Nash ${site.name}`}
                      >
                        {site.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Site Column */}
              <div>
                <motion.h2
                  variants={itemVariants}
                  className="text-4xl font-bold mb-8 tracking-wide"
                >
                  Site
                </motion.h2>
                <motion.div variants={containerVariants} className="space-y-4">
                  {[
                    { name: 'Nash Squared', link: 'https://www.nashsquared.com/' },
                    { name: 'Workforce Solutions', link: 'https://www.flexhuisglobal.com/uk/' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                      whileHover={{
                        x: 10,
                        transition: { duration: 0.3 }
                      }}
                      className="cursor-pointer hover:text-white/80 transition-colors duration-300"
                    >
                      <Link 
                        href={item.link} 
                        className="text-lg font-medium"
                        aria-label={`Visit ${item.name}`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Phishing Scam Update Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="bg-white py-16 px-8"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              Phishing scam Update **
            </motion.h2>
            
            <motion.div variants={containerVariants} className="space-y-4 text-gray-700">
              <motion.p variants={itemVariants} className="leading-relaxed">
                We are aware that individuals impersonating Harvey Nash consultants have been 
                contacting individuals via WhatsApp, SMS and Telegram about job opportunities. This is a phishing scam
                and we have reported this to{' '}
                <Link
                  href="https://www.actionfraud.police.uk/"
                  className="text-teal-600 underline cursor-pointer hover:text-teal-800 transition-colors"
                  aria-label="Report fraud to Action Fraud"
                >
                  Action Fraud
                </Link>
                . The security of our systems has not been impacted.
              </motion.p>
              
              <motion.p variants={itemVariants} className="leading-relaxed">
                To find out how to protect yourself and your data please read the article{' '}
                <Link
                  href="https://www.harveynash.co.uk/latest-news/how-to-protect-yourself-from-recruitment-phishing-scams"
                  className="text-teal-600 underline cursor-pointer hover:text-teal-800 transition-colors"
                  aria-label="Learn how to protect yourself from phishing scams"
                >
                  'How to protect yourself from recruitment phishing scams.'
                </Link>
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Get in Touch Section */}
        <motion.section
          ref={formRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="bg-gray-100 py-16 px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div variants={formVariants}>
              <motion.h2 
                variants={itemVariants}
                className="text-4xl font-bold text-gray-800 mb-8"
              >
                Get in touch
              </motion.h2>
              
              <motion.div variants={itemVariants} className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our expert consultants work across the world so we've got it covered wherever you are. We 
                  offer permanent, contract, interim and executive recruitment and have a global network
                    
                  {' '}of offices across Europe, the USA and Australia.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  We'd love to hear from you so please fill out the form below
                
                  {' '}if you have anything you'd like to ask us about.
                </p>
                
                <p className="text-gray-600 text-sm mt-4 italic">
                  Fields marked with an asterisk (*) are required.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8"
              >
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20"
              >
                <motion.form 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  aria-label="Contact form"
                >
                  {/* Hidden Web3Forms fields */}
                  <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
                  <input type="hidden" name="subject" value="New Contact Form Submission from Harvey Nash Website" />
                  <input type="hidden" name="from_name" value="Harvey Nash Website" />
                  <input type="hidden" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  {/* Success/Error Messages */}
                  {submitStatus === 'successfully_submitted' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl shadow-lg"
                      role="alert"
                    >
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="font-semibold">Successfully Submitted!</p>
                      </div>
                      <p className="mt-1">Thank you for your message. We'll get back to you soon.</p>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-4 rounded-xl shadow-lg"
                      role="alert"
                    >
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <p className="font-semibold">Error!</p>
                      </div>
                      <p className="mt-1">Something went wrong. Please try again later.</p>
                    </motion.div>
                  )}

                  {submitStatus && submitStatus !== 'successfully_submitted' && submitStatus !== 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-4 rounded-xl shadow-lg"
                      role="alert"
                    >
                      <p>{submitStatus}</p>
                    </motion.div>
                  )}

                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        First name *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-teal-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                        aria-required="true"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Last name *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-teal-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                        aria-required="true"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-teal-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                        aria-required="true"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone number
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-teal-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                      Location
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-teal-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-teal-500 transition-all duration-300 resize-vertical bg-white/50 backdrop-blur-sm hover:bg-white/70"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-gradient-to-r from-teal-50 to-indigo-50 rounded-xl p-6 border border-teal-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Privacy Notice
                    </h3>
                    
                    <div className="flex items-start space-x-3 mb-4">
                      <motion.input
                        whileTap={{ scale: 0.95 }}
                        type="checkbox"
                        id="accept"
                        name="accept"
                        checked={formData.accept}
                        onChange={handleInputChange}
                        className="mt-1 h-5 w-5 text-teal-600 focus:ring-teal-500 border-2 border-gray-300 rounded-md transition-colors"
                        aria-required="true"
                        required
                      />
                      <label htmlFor="accept" className="text-sm font-medium text-gray-700">
                        I Accept *
                      </label>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Please read our{' '}
                      <a href="/Policies/Privacy-Policy" className="text-teal-600 font-medium hover:text-teal-700 underline transition-colors" aria-label="Read our privacy policy">
                        privacy policy
                      </a>
                      {' '}to find out how we use personal data, as well as how to change your preferences. 
                      Should you wish to unsubscribe from Harvey Nash marketing communications please email{' '}
                      <a 
                        href="mailto:unsubscribe@harveynash.com"
                        className="text-teal-600 font-medium hover:text-teal-700 underline transition-colors"
                        aria-label="Email to unsubscribe from marketing communications"
                      >
                        unsubscribe@harveynash.com
                      </a>
                      {' '}with 'unsubscribe' in the subject line.
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex justify-center pt-4">
                    <motion.button
                      whileHover={{ 
                        scale: isSubmitting ? 1 : 1.05,
                        boxShadow: isSubmitting ? "0 4px 15px rgba(0,0,0,0.1)" : "0 15px 35px rgba(239, 68, 68, 0.3)"
                      }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] hover:from-[#c5f82a] hover:to-[#00d9a6] shadow-lg'
                      } text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 flex items-center justify-center min-w-[160px] text-lg`}
                      aria-label="Submit contact form"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            aria-hidden="true"
                          />
                          SENDING...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          SUBMIT
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </motion.form>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}

export default ContactUs;