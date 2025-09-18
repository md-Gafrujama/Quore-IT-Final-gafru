"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';
const SenecaServicesPage = () => {
    const [hoveredSide, setHoveredSide] = useState(null);
      const services = [
   
    {
      id: 'cloud-consulting',
      title: 'Cloud Consulting',
      description: 'Whether an organization is looking to build, move or store their data, Seneca\'s cloud engineers are well versed in the development of cloud infrastructures and data migrations.',
      image: '/images/it13.png',
      alt: 'Team of professionals collaborating on cloud computing solutions',
      reverse: false
    },
    {
      id: 'data-science',
      title: 'Data Science Consulting',
      description: 'Our teams are fluent in Machine Learning, Artificial Intelligence, and Deep Learning technologies to meet your most pressing analytics needs. We\'ll partner with you to interrogate your data and find crucial business insights.',
      image: '/images/it14.png',
      alt: 'Data science team analyzing information on tablets and devices',
      reverse: true
    },
    {
      id: 'app-mobile',
      title: 'App/Mobile Development',
      description: 'We\'re fluent in the intricacies of all major mobile OS platforms as well as the latest dev tools and APKs. This means you can leverage the unique features of any mobile device or OS to your advantage.',
      image: '/images/it15.png',
      alt: 'Development team working on mobile applications',
      reverse: false
    },
    {
      id: 'agile-training',
      title: 'Agile Training',
      description: 'Our engineers help organizations Design, Develop, Deploy and Operate mission critical IT systems through organizational collaboration and continuous enhancements to IT systems and applications.',
      image: '/images/it16.png',
      alt: 'Team members participating in agile training and collaboration',
      reverse: true
    }
  ];
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

      <main className="min-h-screen bg-gray-50 ">
        {/* Hero Section */}
        {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-[#111827] to-[#1f2937] mt-18 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content with Enhanced Hover Effects */}
          <motion.div
            onHoverStart={() => setHoveredSide('left')}
            onHoverEnd={() => setHoveredSide(null)}
            className="text-white space-y-6 lg:space-y-8 cursor-pointer relative"
            initial={{ x: 0, opacity: 1 }}
            animate={{
              x: hoveredSide === 'left' ? 20 : hoveredSide === 'right' ? -30 : 0,
              scale: hoveredSide === 'left' ? 1.02 : hoveredSide === 'right' ? 0.95 : 1,
              opacity: hoveredSide === 'right' ? 0.7 : 1
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 30,
              duration: 0.6
            }}
          >
            {/* Content sliding in from left */}
            <motion.div 
              className="space-y-4"
              animate={{
                x: hoveredSide === 'right' ? -50 : 0,
                opacity: hoveredSide === 'right' ? 0.5 : 1
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                People who know,{' '}
                <span className="text-[#00d9a6] block">Quore IT.</span>
              </motion.h1>
            </motion.div>

            <motion.div 
              className="space-y-4 lg:space-y-6 text-lg sm:text-xl lg:text-2xl"
              animate={{
                x: hoveredSide === 'right' ? -30 : 0,
                opacity: hoveredSide === 'right' ? 0.6 : 1
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <motion.p 
                className="font-medium"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                From small business to Fortune 100.
              </motion.p>
              <motion.p 
                className="font-medium"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                Public sector to private enterprise.
              </motion.p>
              <motion.p 
                className="leading-relaxed"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                When it comes to highly skilled services and best-in-class
                solutions, winning teams know they can count on Seneca
                Resources.
              </motion.p>
              <motion.p 
                className="leading-relaxed"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                Our clients see results because we seek out exactly the right fit
                for every situation. It's precision resourcing, and it can
                transform your business.
              </motion.p>
            </motion.div>

            {/* Hover indicator for left side */}
            <motion.div
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-white/30 rounded-full"
              animate={{
                scaleY: hoveredSide === 'left' ? 2 : 1,
                opacity: hoveredSide === 'left' ? 1 : 0.3
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Right Image with Enhanced Hover Effects */}
          <motion.div
            onHoverStart={() => setHoveredSide('right')}
            onHoverEnd={() => setHoveredSide(null)}
            className="relative group cursor-pointer"
            initial={{ x: 0, opacity: 1 }}
            animate={{
              x: hoveredSide === 'right' ? -20 : hoveredSide === 'left' ? 30 : 0,
              scale: hoveredSide === 'right' ? 1.05 : hoveredSide === 'left' ? 0.95 : 1,
              opacity: hoveredSide === 'left' ? 0.7 : 1
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 30,
              duration: 0.6
            }}
          >
            {/* Content sliding in from right */}
            <motion.div
              animate={{
                x: hoveredSide === 'left' ? 50 : 0,
                opacity: hoveredSide === 'left' ? 0.5 : 1
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Floating background decorations with enhanced animations */}
              <motion.div 
                className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-green-400 to-pink-500 rounded-full opacity-20 blur-3xl"
                animate={{ 
                  scale: hoveredSide === 'right' ? 1.2 : 1,
                  rotate: hoveredSide === 'right' ? 180 : 0
                }}
                transition={{ duration: 0.8 }}
              />
              <motion.div 
                className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full opacity-15 blur-3xl"
                animate={{ 
                  scale: hoveredSide === 'right' ? 1.1 : 1,
                  rotate: hoveredSide === 'right' ? -90 : 0
                }}
                transition={{ duration: 0.6 }}
              />

              {/* Main image container with slide-in effect */}
              <motion.div 
                className="relative transform transition-all duration-500"
                animate={{
                  scale: hoveredSide === 'right' ? 1.08 : 1.02,
                  rotate: hoveredSide === 'right' ? -2 : hoveredSide === 'left' ? 1 : 0,
                  y: hoveredSide === 'right' ? -10 : 0
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Glassmorphism backdrop */}
                <motion.div 
                  className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl"
                  animate={{
                    borderColor: hoveredSide === 'right' ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Image wrapper with enhanced styling */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 transform transition-all duration-300">
                  {/* Inner glow effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/20 rounded-3xl"
                    animate={{
                      opacity: hoveredSide === 'right' ? 0.6 : 0.3
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Actual image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src="/images/it1.png"
                        alt="Professional business team handshake in modern office setting"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-700"
                        priority
                        loading="eager"
                      />
                    </motion.div>

                    {/* Overlay gradient for depth */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
                      animate={{
                        opacity: hoveredSide === 'right' ? 0.8 : 0.4
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Decorative corner elements with animations */}
                  <motion.div 
                    className="absolute top-2 right-2 w-4 h-4 bg-green-400 rounded-full opacity-70"
                    animate={{
                      scale: hoveredSide === 'right' ? 1.5 : 1,
                      rotate: hoveredSide === 'right' ? 180 : 0
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div 
                    className="absolute bottom-2 left-2 w-3 h-3 bg-cyan-400 rounded-full opacity-70"
                    animate={{
                      scale: hoveredSide === 'right' ? 1.3 : 1,
                      rotate: hoveredSide === 'right' ? -180 : 0
                    }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  />
                </div>

                {/* Additional floating elements with enhanced animations */}
                <motion.div 
                  className="absolute -top-2 left-1/4 w-6 h-6 bg-gradient-to-r from-green-400 to-pink-500 rounded-full opacity-60"
                  animate={{
                    y: hoveredSide === 'right' ? [-5, 5, -5] : [0],
                    scale: hoveredSide === 'right' ? 1.2 : 1
                  }}
                  transition={{ 
                    duration: hoveredSide === 'right' ? 2 : 0.5, 
                    repeat: hoveredSide === 'right' ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-3 right-1/3 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60"
                  animate={{
                    y: hoveredSide === 'right' ? [5, -5, 5] : [0],
                    scale: hoveredSide === 'right' ? 1.3 : 1
                  }}
                  transition={{ 
                    duration: hoveredSide === 'right' ? 1.5 : 0.5, 
                    repeat: hoveredSide === 'right' ? Infinity : 0,
                    repeatType: "reverse",
                    delay: 0.3
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Hover indicator for right side */}
            <motion.div
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-white/30 rounded-full"
              animate={{
                scaleY: hoveredSide === 'right' ? 2 : 1,
                opacity: hoveredSide === 'right' ? 1 : 0.3
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>

 
  <section className="py-12 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-6 lg:mb-8">
                Engineering Recruitment Services
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
                Maintaining high level performance in your operations takes a certain kind of talent - the right 
                talent. From contract labor to outsourced solutions, Seneca Resources brings the experience to 
                support a broad range of activities across the spectrum of engineering skill sets.
              </p>
            </div>

            {/* Automotive Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/it7.png"
                    alt="Automotive engineer working with robotic manufacturing equipment in modern factory"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                    loading="eager"
                  />
                </div>
              </div>
              
              <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Automotive</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Recruiting for automotive can be challenging - especially when it comes to rework. Luckily no one 
                  knows the automotive space like Seneca. From process & manufacturing engineering to logistics, 
                  skilled trades and even automation, we've got a deep bench of auto-minded professionals to keep 
                  your project rolling.
                </p>
                <Link 
                  href="/services/automotive"
                  className="inline-flex items-center px-8 py-4 bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105"
                  aria-label="Get started with Automotive engineering services"
                >
                  GET STARTED
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Energy/Utility Staffing Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6 lg:space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Energy/Utility Staffing</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Far from being a sedate line of business, almost no sector is evolving as quickly as energy and utility. 
                  Seneca is moving with it, deploying teams of specialist electrical engineers, PMs, technicians 
                  and more to where they're needed most. We're fluent in legacy dynamics while staying abreast of 
                  the latest twists and turns of this dynamic space.
                </p>
                <Link 
                  href="/services/energy-utility"
                  className="inline-flex items-center px-8 py-4 bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105"
                  aria-label="Get started with Energy/Utility staffing services"
                >
                  GET STARTED
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/it8.png"
                    alt="Energy utility engineers reviewing blueprints at construction site with industrial background"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                When working with the government and their agencies, Seneca Resources assures that all 
                employees are fully compliant with state and federal regulations, including{' '}
                <Link 
                  href="/section-508-compliance" 
                  className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                  aria-label="Learn more about Section 508 compliance"
                >
                  Section 508 of the Rehabilitation Act
                </Link>
                {' '}which requires Federal agencies to make their electronic and information 
                technology accessible to people with disabilities.
              </p>
            </div>
          </div>
        </section>
        
        {/* Engineering Specialties Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
                We also provide crucial support to leading companies in the following areas:
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {/* Aerospace */}
              <article className="bg-green-900/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 lg:p-8 hover:bg-green-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl lg:text-2xl font-bold text-white-400 mb-4 lg:mb-6">AEROSPACE</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Instrumentation Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Controls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Design Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Fabrication Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Mechanical Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Materials Management</span>
                  </li>
                </ul>
              </article>

              {/* Chemical/Petro */}
              <article className="bg-green-900/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 lg:p-8 hover:bg-green-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl lg:text-2xl font-bold text-white-400 mb-4 lg:mb-6">CHEMICAL/PETRO</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Process/Manufacturing Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Chemists/Lab Technician Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Chemical Engineer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Environmental/Health/Safety Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Nuclear Engineers</span>
                  </li>
                </ul>
              </article>

              {/* Logistics/Automation */}
              <article className="bg-green-900/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 lg:p-8 hover:bg-green-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl md:col-span-2 lg:col-span-1">
                <h3 className="text-xl lg:text-2xl font-bold text-white-400 mb-4 lg:mb-6">LOGISTICS/AUTOMATION</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Field Service Engineers & Technicians</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Controls & Mechanical Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Sales Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>IT Service Managers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Project Managers</span>
                  </li>
                </ul>
              </article>
            </div>

            <div className="text-center">
              <Link 
                href="/services/engineering-specialties"
                className="inline-flex items-center px-10 py-4 bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 text-lg"
                aria-label="Get started with engineering specialty services"
              >
                GET STARTED
                <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Government Services Section */}
      

       

        {/* Services Grid */}
        

       
      </main>
    </>
  );
};

export default SenecaServicesPage;