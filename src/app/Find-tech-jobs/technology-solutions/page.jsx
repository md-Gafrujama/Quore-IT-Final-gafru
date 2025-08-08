"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Shield, Zap, Award, ArrowRight, Check, Phone, Mail, ExternalLink, Play } from 'lucide-react';

const ITSolutionsHero = () => {
  const [hoveredPartner, setHoveredPartner] = useState(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const techServices = [
    'Converged Infrastructure',
    'Micro Data Centers', 
    'Data Analytics/Big Data',
    'Power & Cooling',
    'Server, Desktop & Printer Hardware',
    'SmartBunker*',
    'Virtualization',
    'Cloud Infrastructure',
    'Storage, Back-Up, & Recovery',
    'Network & Systems Monitoring'
  ];

  const projectServices = [
    'Assessments',
    'Architecture & Design',
    'Implementation',
    'Configuration',
    'Data Migration',
    'Maintenance',
    'On-going Support'
  ];

  const partners = [
    { name: 'AWS', logo: '/aws-logo.png' },
    { name: 'Check Point', logo: '/checkpoint-logo.png' },
    { name: 'Cisco', logo: '/cisco-logo.png' },
    { name: 'Commvault', logo: '/commvault-logo.png' },
    { name: 'Dell Technologies', logo: '/dell-logo.png' },
    { name: 'EMC', logo: '/emc-logo.png' },
    { name: 'Hitachi', logo: '/hitachi-logo.png' },
    { name: 'HPE', logo: '/hpe-logo.png' },
    { name: 'Information Builders', logo: '/ib-logo.png' },
    { name: 'Radian', logo: '/radian-logo.png' },
    { name: 'RSA', logo: '/rsa-logo.png' },
    { name: 'Schneider Electric', logo: '/schneider-logo.png' },
    { name: 'ServiceNow', logo: '/servicenow-logo.png' },
    { name: 'Tenable', logo: '/tenable-logo.png' },
    { name: 'Veracode', logo: '/veracode-logo.png' },
    { name: 'VMware', logo: '/vmware-logo.png' },
    { name: 'Xerox', logo: '/xerox-logo.png' },
  ];

  const stats = [
    { number: "500+", label: "Fortune 500 Clients", icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { number: "99.9%", label: "System Uptime", icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { number: "24/7", label: "Expert Support", icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { number: "15+", label: "Years Experience", icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" /> },
  ];

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      {/* Mobile-Optimized Hero Section - FIXED NAVBAR OVERLAP */}
      <motion.section 
        className="min-h-screen bg-gradient-to-br from-[#00d9a6] via-[#00c294] to-[#00a582] text-white relative overflow-hidden pt-20 sm:pt-24 lg:pt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Optimized Background Pattern for Mobile */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Reduced Floating Elements for Mobile */}
        <div className="absolute top-32 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-[#c5f82a]/20 sm:bg-[#c5f82a]/30 rounded-full blur-xl sm:blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-[#00d9a6]/15 sm:bg-[#00d9a6]/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Mobile-First Content Layout */}
            <motion.div 
              className="order-2 lg:order-1 text-center lg:text-left"
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
            >
              {/* Mobile-Optimized Badge */}
              <motion.div 
                className="inline-block bg-[#00d9a6]/20 backdrop-blur-sm px-3 py-2 sm:px-6 sm:py-3 rounded-full mb-6 sm:mb-8 border border-[#c5f82a]/40"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-[#c5f82a] text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">TRUSTED BY FORTUNE 500 COMPANIES</span>
                  <span className="sm:hidden">FORTUNE 500 TRUSTED</span>
                </span>
              </motion.div>
              
              {/* Mobile-Responsive Heading */}
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.span className="block text-[#c5f82a] mb-1 sm:mb-0" variants={fadeInUp}>
                  Seamless Operations,
                </motion.span>
                <motion.span className="block text-white mb-1 sm:mb-0" variants={fadeInUp}>
                  Robust Security:
                </motion.span>
                <motion.span className="block text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2" variants={fadeInUp}>
                  Meet our cutting edge
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-[#c5f82a] to-[#a8f020] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                  variants={fadeInUp}
                >
                  IT Solutions.
                </motion.span>
              </motion.h1>
              
              {/* Mobile-Optimized Description */}
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-10 leading-relaxed px-2 sm:px-0"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                Transforming businesses with innovative technology solutions designed for performance, security, and scalability.
              </motion.p>
              
              {/* Mobile-Responsive Button Layout */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <motion.button 
                  className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#c5f82a] to-[#a8f020] hover:from-[#b8f018] hover:to-[#96e018] text-black font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#c5f82a]/30 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
                
                <motion.button 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#c5f82a]/60 text-[#c5f82a] font-semibold rounded-xl hover:bg-[#c5f82a]/10 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-4 h-4" />
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Mobile-Optimized Image Section */}
            <motion.div 
              className="order-1 lg:order-2 relative px-4 sm:px-0"
              variants={slideInRight}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-[#c5f82a]/30"
                whileHover={{ scale: 1.01, rotate: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c5f82a]/20 to-[#00d9a6]/30 rounded-2xl sm:rounded-3xl blur-xl"></div>
                <Image 
                  src="/images/the-meeting-of-two-business-people.png" 
                  alt="Business professionals meeting"
                  width={600}
                  height={400}
                  className="relative object-cover w-full h-auto rounded-2xl sm:rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00d9a6]/30 to-transparent rounded-2xl sm:rounded-3xl"></div>
              </motion.div>
              
              {/* Mobile-Responsive Floating Card */}
              <motion.div 
                className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-64 sm:w-72 border border-[#00d9a6]/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-[#00d9a6] to-[#00c294] p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <p className="text-gray-800 font-bold text-base sm:text-lg">24/7 Support</p>
                    <p className="text-gray-600 text-sm sm:text-base">Always ready to help</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mobile-Optimized Stats Section */}
      <motion.section 
        className="py-12 sm:py-16 bg-white border-b"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={scaleUp}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-2 sm:mb-4">
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-[#00d9a6] to-[#00c294] rounded-xl sm:rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                    {React.cloneElement(stat.icon)}
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section with Mobile Improvements */}
      <motion.section 
        className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-white/80 backdrop-blur-sm shadow-xl sm:shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00d9a6]/20"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="mb-6 sm:mb-8">
                <motion.p 
                  className="font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl leading-relaxed mb-4 sm:mb-6 text-center sm:text-left"
                  variants={fadeInUp}
                >
                  With a rich history of serving numerous clients nationwide across diverse industry verticals,
                </motion.p>
                
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00d9a6] to-[#00c294] bg-clip-text text-transparent mb-4 sm:mb-6 text-center sm:text-left"
                  variants={fadeInUp}
                >
                  Seneca Resources is your trusted partner for comprehensive technology solutions.
                </motion.h2>
                
                <motion.p 
                  className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-center sm:text-left"
                  variants={fadeInUp}
                >
                  Our team boasts deep expertise in addressing real-world business challenges. So you can be sure that you've got the resources and support you need to thrive in today's fast-paced technology landscape.
                </motion.p>
              </div>
              
              <div className="border-t border-[#00d9a6]/20 pt-6 sm:pt-8">
                <motion.p 
                  className="text-gray-700 text-base sm:text-lg leading-relaxed text-center sm:text-left"
                  variants={fadeInUp}
                >
                  At Seneca Resources, we understand that modern businesses rely on systems, applications, and data like never before. Swift access, unwavering availability, and robust security are must have – they're fundamental to keeping your operations running seamlessly. That's why our teams tailor their approach to your project's unique requirements and objectives. We excel in delivering these critical components when and how you need them.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="bg-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#00d9a6]/20 to-[#c5f82a]/20 rounded-full text-[#00d9a6] text-sm font-medium mb-4 border border-[#00d9a6]/30">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Technologies. Expert Support.
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Tech Solutions */}
            <motion.div 
              className="bg-gradient-to-br from-[#00d9a6] via-[#00c294] to-[#00a582] p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-[#c5f82a]/30"
              variants={slideInLeft}
              whileHover={{ scale: 1.01, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-white/20 rounded-lg sm:rounded-xl">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white">Advanced Tech and Support</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {techServices.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#c5f82a] mt-0.5 mr-2 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-white text-sm sm:text-base group-hover:text-[#c5f82a]/90 transition-colors duration-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Project Management */}
            <motion.div 
              className="bg-gradient-to-br from-[#00d9a6] via-[#00c294] to-[#00a582] p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-[#c5f82a]/30"
              variants={slideInRight}
              whileHover={{ scale: 1.01, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-white/20 rounded-lg sm:rounded-xl">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white">Project Management Design/Architecture</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {projectServices.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#c5f82a] mt-0.5 mr-2 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-white text-sm sm:text-base group-hover:text-[#c5f82a]/90 transition-colors duration-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Learn More Button */}
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <motion.a 
              href="/learn-more" 
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00d9a6] to-[#00c294] hover:from-[#00c294] hover:to-[#00b284] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section 
        className="py-12 sm:py-20 bg-gray-50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#00d9a6]/20 to-[#c5f82a]/20 rounded-full text-[#00d9a6] text-sm font-medium mb-4 border border-[#00d9a6]/30">
              Trusted Partners
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tech Partners
            </h2>
            <p className="max-w-4xl text-base sm:text-lg lg:text-xl text-gray-600 mx-auto leading-relaxed">
              In addition, Seneca Resources is a certified hardware, software, and maintenance Value-Added Reseller (VAR) for leading industry manufacturers. We proudly offer a comprehensive product portfolio designed to establish and maintain high-performance, uninterrupted availability and protection for your systems.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6"
            variants={staggerContainer}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="group bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00d9a6]/30"
                variants={scaleUp}
                whileHover={{ y: -2, scale: 1.02 }}
                onHoverStart={() => setHoveredPartner(index)}
                onHoverEnd={() => setHoveredPartner(null)}
              >
                <div className="relative h-12 sm:h-16 w-full">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-center text-xs sm:text-sm font-medium text-gray-600 group-hover:text-[#00d9a6] transition-colors duration-300 mt-2 sm:mt-3">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 sm:mt-16 text-center"
            variants={fadeInUp}
          >
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Backed by our expert team and industry-leading technology partners, we guarantee the efficiency and security of your IT environment. We deploy your technology solutions with purpose and precision, so you can focus on your core business: taking care of your customers.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-[#00d9a6] via-[#00c294] to-[#00a582] text-white min-h-[500px] sm:min-h-[600px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-[#c5f82a]/15 sm:bg-[#c5f82a]/20 rounded-full blur-xl sm:blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-[#c5f82a]/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            
            {/* Image */}
            <motion.div 
              className="relative h-64 sm:h-96 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl order-2 lg:order-1"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c5f82a]/20 to-[#00d9a6]/30 rounded-2xl sm:rounded-3xl blur-xl"></div>
              <Image
                src="/images/corporate-meeting.jpg"
                alt="Corporate Meeting"
                fill
                className="relative object-cover rounded-2xl sm:rounded-3xl"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00d9a6]/20 to-transparent rounded-2xl sm:rounded-3xl"></div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="text-center lg:text-left bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#c5f82a]/20 order-1 lg:order-2"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-tight">
                To discover how Seneca Resources can
                <br />
                <span className="bg-gradient-to-r from-[#c5f82a] to-[#a8f020] bg-clip-text text-transparent">
                  address your specific IT requirements
                </span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <motion.div 
                  className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-lg sm:text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5f82a]" />
                  <span className="text-sm sm:text-base lg:text-lg">contact us at <span className="font-semibold text-[#c5f82a]">info@senecahq.com</span></span>
                </motion.div>
                
                <p className="text-lg sm:text-xl">or call</p>
                
                <motion.div 
                  className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#c5f82a]" />
                  <span className="text-2xl sm:text-3xl font-bold text-[#c5f82a]">703-390-9099</span>
                </motion.div>
              </div>

              <motion.div 
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.button 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#c5f82a] to-[#a8f020] hover:from-[#b8f018] hover:to-[#96e018] text-black font-bold rounded-xl transition-all duration-300 shadow-lg"
                  variants={scaleUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Quote
                </motion.button>
                
                <motion.button 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#c5f82a]/60 hover:bg-[#c5f82a]/10 text-[#c5f82a] font-semibold rounded-xl transition-all duration-300"
                  variants={scaleUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Call
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ITSolutionsHero;
