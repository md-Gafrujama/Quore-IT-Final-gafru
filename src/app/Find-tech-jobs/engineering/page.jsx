"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SenecaServicesPage = () => {
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <>
      <Head>
        <title>Seneca Resources - Expert IT Services & Recruitment Solutions</title>
        <meta 
          name="description" 
          content="From small business to Fortune 100. Seneca Resources provides expert IT services, government solutions, engineering, and consulting services. Trusted by winning teams nationwide." 
        />
        <meta
          property="og:image"
          content="/" 
        />
        <meta name="keywords" content="IT services, government services, engineering, consulting, technology solutions, recruitment, DevOps, cybersecurity, cloud solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/services" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Ultra Professional Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 mt-18 overflow-hidden min-h-screen flex items-center">
          {/* Professional Grid Pattern Background */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '100px 100px'
              }}
            />
          </div>

          {/* Subtle Professional Accent Lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-60" />
          
          {/* Sophisticated Background Elements */}
          <div className="absolute top-32 right-20 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-32 left-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              
              {/* Left Content - Ultra Professional Design */}
              <motion.div
                onHoverStart={() => setHoveredSide('left')}
                onHoverEnd={() => setHoveredSide(null)}
                className="text-white space-y-10 lg:space-y-12 cursor-pointer relative"
                initial={{ opacity: 0, x: -80 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: hoveredSide === 'left' ? 1.02 : hoveredSide === 'right' ? 0.98 : 1
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 100, 
                  damping: 20,
                  duration: 1.2
                }}
              >
                {/* Professional Brand Accent */}
                <motion.div 
                  className="flex items-center space-x-4 mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  
                </motion.div>

                {/* Premium Main Headline */}
                <motion.div className="space-y-4">
                  <motion.h1 
                    className="text-5xl sm:text-6xl lg:text-5xl xl:text-5xl font-bold leading-[0.9] tracking-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.span 
                      className="block text-white font-light mb-2"
                      style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                    >
                      Engineering
                    </motion.span>
                    <motion.span 
                      className=" font-black"
                      style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                    >
                      <span className="text-white">Recruitment</span>
                      <span className="">,</span>
                    </motion.span>
                    <motion.span 
                      className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 bg-clip-text text-transparent block font-black mt-2"
                      style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                 Services
                    </motion.span>
                  </motion.h1>
                </motion.div>

                {/* Professional Taglines */}
                <motion.div 
                  className="space-y-6 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                 
                  
                  <div className="space-y-5 pt-4">
                    <motion.p 
                      className="text-lg lg:text-lg text-gray-300 leading-relaxed font-light text-justify"
                      whileHover={{ x: 8, color: "#e5e7eb" }}
                      transition={{ duration: 0.3 }}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      High-performing operations demand more than just skill, they require the right talent, at the right time. At Quore IT, we specialize in connecting organizations with engineering professionals who can make an immediate impact. From contract staffing to fully outsourced solutions, our recruitment services are designed to support the full spectrum of engineering skill sets. Whether you need specialized expertise for short-term projects or long-term strategic resources, our team delivers candidates who align with both your technical requirements and organizational goals.
                    </motion.p>
                    <motion.p 
                      className="text-lg lg:text-lg text-gray-300 leading-relaxed font-light text-lg text-justify"
                      whileHover={{ x: 8, color: "#e5e7eb" }}
                      transition={{ duration: 0.3 }}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      With deep industry knowledge and a people-first approach, We ensures you gain access to top engineering talent that drives efficiency, innovation, and lasting success.
                    </motion.p>
                  </div>
                </motion.div>

                {/* Professional CTA Section */}
                <motion.div
                  className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <Link 
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-none hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30 overflow-hidden"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="relative z-10 flex items-center">
                      GET STARTED TODAY
                      <motion.svg 
                        className="ml-3 w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    />
                  </Link>
                  
                 
                </motion.div>

             

                {/* Professional Side Indicator */}
                <motion.div
                  className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"
                  animate={{
                    scaleY: hoveredSide === 'left' ? 1.5 : 1,
                    opacity: hoveredSide === 'left' ? 1 : 0.4
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* Right Image - Ultra Professional Design */}
              <motion.div
                onHoverStart={() => setHoveredSide('right')}
                onHoverEnd={() => setHoveredSide(null)}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, x: 80 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: hoveredSide === 'right' ? 1.03 : hoveredSide === 'left' ? 0.98 : 1
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 100, 
                  damping: 20,
                  duration: 1.2
                }}
              >
                {/* Professional Frame Design */}
                <motion.div 
                  className="relative transform transition-all duration-700"
                  animate={{
                    rotateY: hoveredSide === 'right' ? -2 : 0,
                    y: hoveredSide === 'right' ? -10 : 0
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Sophisticated Border Frame */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 via-transparent to-cyan-500/20 rounded-2xl blur-xl" />
                  <div className="absolute -inset-2 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20" />

                  {/* Main Image Container */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-4">
                    {/* Professional Inner Frame */}
                    <div className="relative rounded-xl overflow-hidden shadow-xl">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        <Image
                          src="/images/it1.png"
                          alt="Professional business team handshake in modern office setting"
                          width={800}
                          height={600}
                          className="w-full h-auto object-cover"
                          priority
                          loading="eager"
                        />
                      </motion.div>

                      {/* Professional Overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"
                        animate={{
                          opacity: hoveredSide === 'right' ? 0.8 : 0.5
                        }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Professional Badge */}
                      <motion.div 
                        className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                        animate={{
                          scale: hoveredSide === 'right' ? 1.1 : 1,
                          y: hoveredSide === 'right' ? -5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                          <span className="text-slate-800 font-semibold text-sm">Trusted Partner</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Professional Corner Accents */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-emerald-400/60 rounded-tl-lg" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/60 rounded-tr-lg" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400/60 rounded-bl-lg" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-emerald-400/60 rounded-br-lg" />
                  </div>
                </motion.div>

                {/* Professional Side Indicator */}
                <motion.div
                  className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"
                  animate={{
                    scaleY: hoveredSide === 'right' ? 1.5 : 1,
                    opacity: hoveredSide === 'right' ? 1 : 0.4
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </div>
          </div>

          {/* Professional Bottom Accent */}
          <motion.div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </section>

        {/* Rest of the sections remain the same... */}
   
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Premium Header Design */}
     

            {/* Automotive Section - Enhanced Layout */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative order-2 lg:order-1">
                <motion.div 
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src="/images/it7.png"
                    alt="Automotive engineer working with robotic manufacturing equipment in modern factory"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                    loading="eager"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>
              </div>
              
              <motion.div 
                className="space-y-8 lg:space-y-10 order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-justify">
                  Automotive
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed text-justify">
                 Finding the right talent in the automotive industry can be complex especially when precision and efficiency are critical. We understand the unique demands of this space and bring proven expertise to every engagement. From process and manufacturing engineering to logistics, skilled trades, and automation, we provide a strong network of automotive-focused professionals who keep your projects moving forward without costly setbacks.
                </p>
                <Link 
                  href="/services/automotive"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 text-lg"
                  aria-label="Get started with Automotive engineering services"
                >
                  GET STARTED
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Energy/Utility Staffing Section - Enhanced */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="space-y-8 lg:space-y-10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent text-justify">
                  Energy/Utility Staffing
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed text-justify">
                  The energy and utility sector is transforming faster than ever, and Quore IT is evolving right alongside it. We deliver specialized teams of electrical engineers, project managers, technicians, and more, wherever they’re needed most. With deep knowledge of established systems and a keen eye on emerging innovations, we help clients navigate both legacy challenges and the industry’s rapid changes.
                </p>
                <Link 
                  href="/services/energy-utility"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500/50 text-lg"
                  aria-label="Get started with Energy/Utility staffing services"
                >
                  GET STARTED
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
              
              <div className="relative">
                <motion.div 
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05, rotateY: -5 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src="/images/it8.png"
                    alt="Energy utility engineers reviewing blueprints at construction site with industrial background"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Compliance Section - Enhanced */}
        <motion.section 
          className="bg-gradient-to-r from-slate-100 to-gray-100 py-12 lg:py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-white/30">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                When working with the government and their agencies, Seneca Resources assures that all 
                employees are fully compliant with state and federal regulations, including{' '}
                <Link 
                  href="/section-508-compliance" 
                  className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 transition-all duration-300 hover:decoration-4 font-semibold"
                  aria-label="Learn more about Section 508 compliance"
                >
                  Section 508 of the Rehabilitation Act
                </Link>
                {' '}which requires Federal agencies to make their electronic and information 
                technology accessible to people with disabilities.
              </p>
            </div>
          </div>
        </motion.section>
        
       {/* Engineering Specialties Section */}
              <section className="py-20 lg:py-28 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm mb-6">
                      <span className="text-sm font-medium text-gray-800 uppercase tracking-wide">Industry Expertise</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                      Engineering Specialties &<br />Industry Support
                    </h2>
                    <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed text-justify">
                      We provide crucial support to leading companies across various industries with specialized engineering talent and technical expertise.
                    </p>
                  </motion.div>
      
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* Aerospace - Enhanced */}
                    <motion.article 
                      className="bg-white/95 backdrop-blur-sm border border-white/50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">AEROSPACE</h3>
                      </div>
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Instrumentation Engineers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Controls Systems</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Design Engineers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Fabrication Support</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Mechanical Engineers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Materials Management</span>
                        </li>
                      </ul>
                    </motion.article>
      
                    {/* Chemical/Petro - Enhanced */}
                    <motion.article 
                      className="bg-white/95 backdrop-blur-sm border border-white/50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">CHEMICAL/PETRO</h3>
                      </div>
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Process/Manufacturing Engineers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Chemists/Lab Technician Support</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Chemical Engineers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Environmental/Health/Safety Engineers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Nuclear Engineers</span>
                        </li>
                      </ul>
                    </motion.article>
      
                    {/* Logistics/Automation - Enhanced */}
                    <motion.article 
                      className="bg-white/95 backdrop-blur-sm border border-white/50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 md:col-span-2 lg:col-span-1"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">LOGISTICS/AUTOMATION</h3>
                      </div>
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Field Service Engineers & Technicians</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Controls & Mechanical Engineers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Sales Engineers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>IT Service Managers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                          <span>Project Managers</span>
                        </li>
                      </ul>
                    </motion.article>
                  </div>
      
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href="/services/engineering-specialties"
                      className="inline-flex items-center px-12 py-5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-gray-300 text-lg transform hover:scale-105 hover:-translate-y-1"
                      aria-label="Get started with engineering specialty services"
                    >
                      GET STARTED
                      <svg className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </section>
      </main>
    </>
  );
};

export default SenecaServicesPage;
