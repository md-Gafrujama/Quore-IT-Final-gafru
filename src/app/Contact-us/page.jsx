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
          access_key: '86898b60-2f23-47a2-995e-0fa8a8df83ba', // Replace with your actual Web3Forms access key
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

    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/jobs_hero.jpg"
      alt="Harvey Nash Contact Page"
      fill
      className="object-cover object-center"
      priority
      quality={90}
      sizes="(max-width: 768px) 100vw, 100vw"
    />
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40"></div>
  </div>

  {/* Centered Content */}
  <div className="relative z-10 text-center w-full px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
        Contact Us
      </h1>
    </div>
  </div>
</section>
 
      <div className="bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 text-center">
  {/* Main Heading */}
  <motion.div
    className="max-w-4xl mx-auto mb-16"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Global Reach, Local Expertise
    </h2>
    <p className="text-xl text-gray-600">
      We operate from 40 offices across the USA, Europe, and Asia, bringing you world-class service wherever you are.
    </p>
  </motion.div>

  {/* Action Buttons */}
  <motion.div 
    className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
    {[
      { 
        title: "Jobs & Careers", 
        icon: "🔍", 
        content: <Link href="/Find-tech-jobs" className="text-blue-600 hover:text-blue-800">Find Tech Jobs</Link>,
        description: "Explore opportunities"
      },
      { 
        title: "Client Query", 
        icon: "💬", 
        action: scrollToForm,
        description: "Get in touch"
      },
      { 
        title: "Our Locations", 
        icon: "📍", 
        action: scrollToCountries,
        description: "Find our offices"
      }
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div 
          onClick={item.action ? item.action : undefined}
          className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 h-full flex flex-col items-center ${index === 0 ? 'hover:bg-blue-50' : 'hover:bg-teal-50'}`}
        >
          <span className="text-4xl mb-4">{item.icon}</span>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
          <div className="mt-auto mb-4">
            {item.content || <p className="text-gray-500">{item.description}</p>}
          </div>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
        </div>
      </motion.div>
    ))}
  </motion.div>

  {/* Office Info */}
  <motion.div 
    className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
  >
    <div className="flex flex-col md:flex-row">
      <motion.div 
        className="md:w-1/2 relative h-80 md:h-auto"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/london_office.jpg"
          alt="Harvey Nash London Office"
          fill
          className="object-cover"
          loading="lazy"
          quality={90}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent"></div>
      </motion.div>

      <motion.div 
        className="md:w-1/2 p-10 md:p-12"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full flex items-center justify-center mr-4">
            <span className="text-white text-xl">🏢</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">Our Head Office</h3>
        </div>
        
        <address className="text-lg text-gray-700 not-italic space-y-3">
          <p className="flex items-start">
            <span className="text-gray-400 mr-3 mt-1">📍</span>
            <span>LDN:W, 3 Noble Street<br/>London, EC2V 7EE</span>
          </p>
          <p className="flex items-center">
            <span className="text-gray-400 mr-3">📞</span>
            <a href="tel:+442073330033" className="text-blue-600 hover:text-blue-800 transition-colors">
              +44 (0)20 7333 0033
            </a>
          </p>
          <p className="flex items-center">
            <span className="text-gray-400 mr-3">✉️</span>
            <a href="mailto:info@harveynash.com" className="text-blue-600 hover:text-blue-800 transition-colors">
              info@harveynash.com
            </a>
          </p>
        </address>
        
        <a 
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-8 px-6 py-3 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6]  text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
          aria-label="View Harvey Nash London office on Google Maps"
        >
          <span>Map and Directions</span>
          <span className="ml-2">→</span>
        </a>
      </motion.div>
    </div>
  </motion.div>
</div>


      <div className="min-h-screen bg-gray-50">
        {/* Country & Site Section - Enhanced Design */}
<motion.section
  ref={countriesRef}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={containerVariants}
  className="bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] py-20 px-4 sm:px-6 lg:px-8"
>
  <div className="max-w-7xl mx-auto">
    <motion.div 
      variants={itemVariants}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Our Global Network
      </h2>
      <p className="text-xl text-white/90 max-w-3xl mx-auto">
        Connecting talent with opportunity across 40+ offices worldwide
      </p>
    </motion.div>

    <motion.div
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
    >
      {/* Countries Column */}
      <motion.div 
        variants={itemVariants}
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
      >
        <motion.h3
          variants={itemVariants}
          className="text-3xl font-bold text-white mb-8 pb-4 border-b border-white/20"
        >
          Countries
        </motion.h3>
        <motion.div variants={containerVariants} className="space-y-5">
          {[
            { name: 'Belgium', link: 'https://www.harveynash.be/' },
            { name: 'Germany', link: 'https://www.harveynash.de/' },
            { name: 'Netherlands', link: 'https://www.harveynash.nl/' },
            { name: 'USA', link: 'https://www.harveynashusa.com/' }
          ].map((country) => (
            <motion.div
              key={country.name}
              variants={itemVariants}
              whileHover={{ 
                x: 8,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Link
                href={country.link}
                className="flex items-center text-lg font-medium text-white hover:text-gray-200 transition-colors duration-300"
                aria-label={`Visit Harvey Nash ${country.name}`}
              >
                <span className="w-3 h-3 bg-white rounded-full mr-3 group-hover:bg-[#c5f82a] transition-colors"></span>
                {country.name}
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Middle Column - Additional Countries */}
      <motion.div 
        variants={itemVariants}
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
      >
        <motion.h3
          variants={itemVariants}
          className="text-3xl font-bold text-white mb-8 pb-4 border-b border-white/20"
        >
          More Locations
        </motion.h3>
        <motion.div variants={containerVariants} className="space-y-5">
          {[
            { name: 'Canada', link: 'https://www.harveynashusa.com/' },
            { name: 'Ireland', link: 'https://www.harveynash.ie/' },
            { name: 'Poland', link: 'https://www.harveynash.pl/' },
            { name: 'United Kingdom', link: 'https://www.harveynash.co.uk/' }
          ].map((country) => (
            <motion.div
              key={country.name}
              variants={itemVariants}
              whileHover={{ 
                x: 8,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Link
                href={country.link}
                className="flex items-center text-lg font-medium text-white hover:text-gray-200 transition-colors duration-300"
                aria-label={`Visit Harvey Nash ${country.name}`}
              >
                <span className="w-3 h-3 bg-white rounded-full mr-3 group-hover:bg-[#c5f82a] transition-colors"></span>
                {country.name}
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Sites Column */}
      <motion.div 
        variants={itemVariants}
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
      >
        <motion.h3
          variants={itemVariants}
          className="text-3xl font-bold text-white mb-8 pb-4 border-b border-white/20"
        >
          Our Sites
        </motion.h3>
        <motion.div variants={containerVariants} className="space-y-5">
          {[
            { name: 'Nash Squared', link: 'https://www.nashsquared.com/', desc: 'Technology recruitment specialists' },
            { name: 'Workforce Solutions', link: 'https://www.flexhuisglobal.com/uk/', desc: 'Flexible talent solutions' }
          ].map((site) => (
            <motion.div
              key={site.name}
              variants={itemVariants}
              whileHover={{ 
                x: 8,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Link
                href={site.link}
                className="block"
                aria-label={`Visit ${site.name}`}
              >
                <p className="text-lg font-medium text-white hover:text-gray-200 transition-colors duration-300">
                  {site.name}
                </p>
                <p className="text-sm text-white/70 mt-1 group-hover:text-white/90">
                  {site.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</motion.section>

{/* Phishing Scam Update Section - Enhanced Design */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={containerVariants}
  className="bg-white py-20 px-4 sm:px-6 lg:px-8"
>
  <div className="max-w-7xl mx-auto">
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.01 }}
      className="bg-gradient-to-r from-[#c5f82a]/10 to-[#00d9a6]/10 p-8 rounded-2xl shadow-lg border border-gray-200 max-w-5xl mx-auto"
    >
      <motion.div 
        variants={containerVariants}
        className="flex flex-col md:flex-row gap-8"
      >
        <motion.div variants={itemVariants} className="md:w-1/3">
          <div className="bg-[#c5f82a] text-gray-900 font-bold rounded-lg p-4 text-center">
            <h3 className="text-xl mb-2">⚠️ Security Alert</h3>
            <p className="text-sm">Important Notice</p>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="md:w-2/3">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-800 mb-6"
          >
            Phishing Scam Update
          </motion.h2>
          
          <motion.div variants={containerVariants} className="space-y-4 text-gray-700">
            <motion.p variants={itemVariants} className="leading-relaxed">
              We are aware that individuals impersonating Harvey Nash consultants have been 
              contacting individuals via WhatsApp, SMS and Telegram about job opportunities. This is a phishing scam
              and we have reported this to{' '}
              <Link
                href="https://www.actionfraud.police.uk/"
                className="text-[#00d9a6] font-medium underline cursor-pointer hover:text-[#008a6e] transition-colors"
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
                className="text-[#00d9a6] font-medium underline cursor-pointer hover:text-[#008a6e] transition-colors"
                aria-label="Learn how to protect yourself from phishing scams"
              >
                'How to protect yourself from recruitment phishing scams.'
              </Link>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</motion.section>

       {/* Get in Touch Section - Enhanced Design */}
<motion.section
  ref={formRef}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={containerVariants}
  className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8"
>
  <div className="max-w-6xl mx-auto">
    <motion.div 
      variants={formVariants}
      className="flex flex-col lg:flex-row gap-12"
    >
      {/* Left Column - Contact Info */}
      <motion.div 
        variants={itemVariants}
        className="lg:w-2/5"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Let's Connect
        </motion.h2>
        
        <motion.div 
          variants={itemVariants} 
          className="space-y-6 mb-8"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Our expert consultants work across the world so we've got it covered wherever you are. We offer permanent, contract, interim and executive recruitment through our global network.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Fill out the form or use the details below to reach out to our team.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div 
            variants={itemVariants}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] p-3 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
              <a href="tel:+442073330033" className="text-[#00d9a6] hover:text-[#008a6e] transition-colors text-lg">
                +44 (0)20 7333 0033
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] p-3 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
              <a href="mailto:info@harveynash.com" className="text-[#00d9a6] hover:text-[#008a6e] transition-colors text-lg">
                info@harveynash.com
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] p-3 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
              <p className="text-gray-700">LDN:W, 3 Noble Street<br />London, EC2V 7EE</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00d9a6] hover:text-[#008a6e] transition-colors inline-block mt-2"
              >
                View on map →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Column - Contact Form */}
      <motion.div 
        variants={itemVariants}
        className="lg:w-3/5"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            Send us a message
          </motion.h3>
          
          <p className="text-gray-600 mb-8">
            Fields marked with an asterisk (*) are required.
          </p>

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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="font-semibold">Thank you for your message!</p>
                </div>
                <p className="mt-1">We'll get back to you soon.</p>
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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="font-semibold">Submission Error</p>
                </div>
                <p className="mt-1">Please try again later.</p>
              </motion.div>
            )}

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name *
                </label>
                <motion.input
                  whileFocus={{ 
                    boxShadow: "0 0 0 3px rgba(197, 248, 42, 0.3)",
                    borderColor: "#00d9a6"
                  }}
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5f82a] focus:border-[#00d9a6] transition-all duration-300"
                  aria-required="true"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name *
                </label>
                <motion.input
                  whileFocus={{ 
                    boxShadow: "0 0 0 3px rgba(197, 248, 42, 0.3)",
                    borderColor: "#00d9a6"
                  }}
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5f82a] focus:border-[#00d9a6] transition-all duration-300"
                  aria-required="true"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <motion.input
                  whileFocus={{ 
                    boxShadow: "0 0 0 3px rgba(197, 248, 42, 0.3)",
                    borderColor: "#00d9a6"
                  }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5f82a] focus:border-[#00d9a6] transition-all duration-300"
                  aria-required="true"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <motion.input
                  whileFocus={{ 
                    boxShadow: "0 0 0 3px rgba(197, 248, 42, 0.3)",
                    borderColor: "#00d9a6"
                  }}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5f82a] focus:border-[#00d9a6] transition-all duration-300"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <motion.input
                whileFocus={{ 
                  boxShadow: "0 0 0 3px rgba(197, 248, 42, 0.3)",
                  borderColor: "#00d9a6"
                }}
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5f82a] focus:border-[#00d9a6] transition-all duration-300"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message *
              </label>
              <motion.textarea
                whileFocus={{ 
                  boxShadow: "0 0 0 3px rgba(197, 248, 42, 0.3)",
                  borderColor: "#00d9a6"
                }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5f82a] focus:border-[#00d9a6] transition-all duration-300 resize-none"
                aria-required="true"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <motion.input
                  whileTap={{ scale: 0.95 }}
                  type="checkbox"
                  id="accept"
                  name="accept"
                  checked={formData.accept}
                  onChange={handleInputChange}
                  className="mt-1 h-5 w-5 text-[#00d9a6] focus:ring-[#c5f82a] border-2 border-gray-300 rounded transition-colors"
                  aria-required="true"
                  required
                />
                <div>
                  <label htmlFor="accept" className="block text-sm font-medium text-gray-700 mb-2">
                    I agree to the privacy policy *
                  </label>
                  <p className="text-sm text-gray-600">
                    By submitting this form, you agree to our{' '}
                    <a href="/Policies/Privacy-Policy" className="text-[#00d9a6] hover:text-[#008a6e] font-medium underline transition-colors">
                      privacy policy
                    </a>
                    {' '}and consent to having Harvey Nash collect your personal information.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <motion.button
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.05,
                  boxShadow: "0 10px 25px rgba(197, 248, 42, 0.3)"
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] hover:from-[#c5f82a] hover:to-[#c5f82a] shadow-lg'
                } text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 w-full text-lg flex items-center justify-center`}
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
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    SEND MESSAGE
                  </>
                )}
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
}

export default ContactUs;