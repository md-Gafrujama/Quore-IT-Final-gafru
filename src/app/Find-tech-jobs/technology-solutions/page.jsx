"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Shield, Zap, Award, ArrowRight, Check, Phone, Mail, ExternalLink } from 'lucide-react';

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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
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
    { number: "500+", label: "Fortune 500 Clients", icon: <Award className="w-8 h-8" /> },
    { number: "99.9%", label: "System Uptime", icon: <Shield className="w-8 h-8" /> },
    { number: "24/7", label: "Expert Support", icon: <Zap className="w-8 h-8" /> },
    { number: "15+", label: "Years Experience", icon: <Star className="w-8 h-8" /> },
  ];

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <motion.section 
        className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="order-2 lg:order-1"
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="inline-block bg-blue-600/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-blue-300/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-200 text-sm font-medium tracking-wider flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  TRUSTED BY FORTUNE 500 COMPANIES
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.span className="block text-cyan-300" variants={fadeInUp}>Seamless Operations,</motion.span>
                <motion.span className="block text-white" variants={fadeInUp}>Robust Security:</motion.span>
                <motion.span className="block text-blue-200" variants={fadeInUp}>Meet our cutting edge</motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent"
                  variants={fadeInUp}
                >
                  IT Solutions.
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-10 leading-relaxed"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                Transforming businesses with innovative technology solutions designed for performance, security, and scalability.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <motion.button 
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-cyan-500/30 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
                
                <motion.button 
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="order-1 lg:order-2 relative"
              variants={slideInRight}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-300/20"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-xl"></div>
                <Image 
                  src="/images/the-meeting-of-two-business-people.png" 
                  alt="Business professionals meeting"
                  width={600}
                  height={600}
                  className="relative object-cover w-full h-auto rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-3xl"></div>
              </motion.div>
              
              {/* Enhanced Floating Card */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl w-72 border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-xl shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 font-bold text-lg">24/7 Support</p>
                    <p className="text-gray-600">Dedicated team always ready</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 bg-white border-b"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={scaleUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                    {React.cloneElement(stat.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border border-gray-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8 sm:p-12">
              <div className="mb-8">
                <motion.p 
                  className="font-bold text-gray-800 text-2xl md:text-3xl leading-relaxed mb-6"
                  variants={fadeInUp}
                >
                  With a rich history of serving numerous clients nationwide across diverse industry verticals,
                </motion.p>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6"
                  variants={fadeInUp}
                >
                  Seneca Resources is your trusted partner for comprehensive technology solutions.
                </motion.h2>
                
                <motion.p 
                  className="text-gray-700 text-lg leading-relaxed mb-6"
                  variants={fadeInUp}
                >
                  Our team boasts deep expertise in addressing real-world business challenges. So you can be sure that you've got the resources and support you need to thrive in today's fast-paced technology landscape.
                </motion.p>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <motion.p 
                  className="text-gray-700 text-lg leading-relaxed"
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
        className="bg-white py-20 px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full text-gray-600 text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Technologies. Expert Support.
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Tech Solutions */}
            <motion.div 
              className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 p-8 rounded-3xl shadow-2xl border border-blue-300/20"
              variants={slideInLeft}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Advanced Tech and Support</h3>
              </div>
              <ul className="space-y-4">
                {techServices.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Check className="h-5 w-5 text-cyan-300 mt-0.5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-white group-hover:text-cyan-100 transition-colors duration-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Project Management */}
            <motion.div 
              className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 p-8 rounded-3xl shadow-2xl border border-blue-300/20"
              variants={slideInRight}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Project Management Design/Architecture</h3>
              </div>
              <ul className="space-y-4">
                {projectServices.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Check className="h-5 w-5 text-cyan-300 mt-0.5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-white group-hover:text-cyan-100 transition-colors duration-200">{item}</span>
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full text-gray-600 text-sm font-medium mb-4">
              Trusted Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tech Partners
            </h2>
            <p className="max-w-4xl text-xl text-gray-600 mx-auto leading-relaxed">
              In addition, Seneca Resources is a certified hardware, software, and maintenance Value-Added Reseller (VAR) for leading industry manufacturers. We proudly offer a comprehensive product portfolio designed to establish and maintain high-performance, uninterrupted availability and protection for your systems.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6"
            variants={staggerContainer}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                variants={scaleUp}
                whileHover={{ y: -5, scale: 1.05 }}
                onHoverStart={() => setHoveredPartner(index)}
                onHoverEnd={() => setHoveredPartner(null)}
              >
                <div className="relative h-16 w-full">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-300 mt-3">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            variants={fadeInUp}
          >
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Backed by our expert team and industry-leading technology partners, we guarantee the efficiency and security of your IT environment. We deploy your technology solutions with purpose and precision, so you can focus on your core business: taking care of your customers.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white min-h-[600px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <motion.div 
              className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-xl"></div>
              <Image
                src="/images/corporate-meeting.jpg"
                alt="Corporate Meeting"
                fill
                className="relative object-cover rounded-3xl"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="text-center lg:text-left bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                To discover how Seneca Resources can
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  address your specific IT requirements
                </span>
              </h2>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center justify-center lg:justify-start gap-3 text-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-6 h-6 text-cyan-300" />
                  <span>contact us at <span className="font-semibold text-cyan-300">info@senecahq.com</span></span>
                </motion.div>
                
                <p className="text-xl">or call</p>
                
                <motion.div 
                  className="flex items-center justify-center lg:justify-start gap-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-8 h-8 text-cyan-300" />
                  <span className="text-3xl font-bold text-cyan-300">703-390-9099</span>
                </motion.div>
              </div>

              <motion.div 
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                  variants={scaleUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Quote
                </motion.button>
                
                <motion.button 
                  className="px-8 py-4 border-2 border-white/30 hover:bg-white/10 rounded-xl font-semibold transition-all duration-300"
                  variants={scaleUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
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
