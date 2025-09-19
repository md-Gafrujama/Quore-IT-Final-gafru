"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react'; 

const SenecaServicesPage = () => {
  const [hoveredSide, setHoveredSide] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

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
          content="/images/it1.png" 
        />
        <meta name="keywords" content="IT services, government services, engineering, consulting, technology solutions, recruitment, DevOps, cybersecurity, cloud solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/services" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Gradient Orbs */}
            <motion.div 
              className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#00d9a6]/20 to-[#c5f82a]/20 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Floating Geometric Elements */}
            <motion.div 
              className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#00d9a6] rounded-full opacity-60"
              animate={{
                y: [-10, 10, -10],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-1/3 left-1/4 w-6 h-6 border-2 border-[#c5f82a] rotate-45 opacity-40"
              animate={{
                rotate: [45, 225, 45],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 min-h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
              
              {/* Left Content - Enhanced */}
              <motion.div
                onHoverStart={() => setHoveredSide('left')}
                onHoverEnd={() => setHoveredSide(null)}
                className="text-white space-y-8 cursor-pointer relative z-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: isLoaded ? 1 : 0, 
                  x: isLoaded ? 0 : -50,
                  scale: hoveredSide === 'left' ? 1.02 : hoveredSide === 'right' ? 0.98 : 1
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  scale: { duration: 0.3 }
                }}
              >
                {/* Main Headline with Enhanced Typography */}
                <motion.div 
                  className="space-y-4"
                  animate={{
                    x: hoveredSide === 'right' ? -30 : 0,
                    opacity: hoveredSide === 'right' ? 0.8 : 1
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.div 
                    className="inline-block px-4 py-2 bg-gradient-to-r from-[#00d9a6]/20 to-[#c5f82a]/20 rounded-full border border-[#00d9a6]/30 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <span className="text-[#00d9a6] font-semibold text-sm tracking-wide uppercase">
                      Professional IT Solutions
                    </span>
                  </motion.div>

                  <motion.h1 
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      People who know,
                    </span>
                    <span className="block bg-gradient-to-r from-[#00d9a6] to-[#c5f82a] bg-clip-text text-transparent mt-2">
                      Choose IT Excellence.
                    </span>
                  </motion.h1>
                </motion.div>

                {/* Enhanced Description */}
                <motion.div 
                  className="space-y-6 text-lg lg:text-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <div className="space-y-4">
                    <motion.p 
                      className="text-gray-200 font-medium text-justify"
                      whileHover={{ x: 5, color: "#f8fafc" }}
                      transition={{ duration: 0.2 }}
                    >
                      From small business to Fortune 100 companies, we deliver cutting-edge technology solutions that drive business transformation and sustainable growth.
                    </motion.p>
                    
                    <motion.p 
                      className="text-gray-300 text-justify"
                      whileHover={{ x: 5, color: "#f1f5f9" }}
                      transition={{ duration: 0.2 }}
                    >
                      When it comes to highly skilled services and best-in-class solutions, winning teams trust Seneca Resources to deliver exceptional results through precision resourcing and innovative technology partnerships.
                    </motion.p>
                  </div>

                  {/* Feature Highlights */}
                  <motion.div 
                    className="grid grid-cols-2 gap-4 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    {[
                      { icon: "🚀", text: "Fortune 100 Trusted" },
                      { icon: "⚡", text: "Rapid Deployment" },
                      { icon: "🎯", text: "Precision Resourcing" },
                      { icon: "💡", text: "Innovation Focused" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-sm font-medium text-gray-200">{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Enhanced CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                >
                  <motion.button
                    className="group relative px-8 py-4 bg-gradient-to-r from-[#00d9a6] to-[#c5f82a] text-white font-bold rounded-full text-lg shadow-xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Get Started Today
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>

                  <motion.button
                    className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center justify-center">
                      Learn More
                      <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </motion.button>
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                  className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                >
                  {[
                    { number: "500+", label: "Projects Delivered" },
                    { number: "98%", label: "Client Satisfaction" },
                    { number: "24/7", label: "Support Available" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#00d9a6] to-[#c5f82a] bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Image - Enhanced */}
              <motion.div
                onHoverStart={() => setHoveredSide('right')}
                onHoverEnd={() => setHoveredSide(null)}
                className="relative group cursor-pointer lg:justify-self-end"
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: isLoaded ? 1 : 0, 
                  x: isLoaded ? 0 : 50,
                  scale: hoveredSide === 'right' ? 1.05 : hoveredSide === 'left' ? 0.95 : 1
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: 0.2,
                  scale: { duration: 0.3 }
                }}
              >
                <motion.div
                  animate={{
                    x: hoveredSide === 'left' ? 30 : 0,
                    opacity: hoveredSide === 'left' ? 0.8 : 1
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Enhanced Background Decorations */}
                  <motion.div 
                    className="absolute -top-8 -right-8 w-80 h-80 bg-gradient-to-br from-[#00d9a6]/30 to-[#c5f82a]/30 rounded-full opacity-30 blur-2xl"
                    animate={{ 
                      scale: hoveredSide === 'right' ? 1.3 : 1,
                      rotate: hoveredSide === 'right' ? 180 : 0
                    }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Main Image Container */}
                  <motion.div 
                    className="relative transform transition-all duration-500 z-10"
                    animate={{
                      scale: hoveredSide === 'right' ? 1.08 : 1.02,
                      rotate: hoveredSide === 'right' ? -1 : 0,
                      y: hoveredSide === 'right' ? -5 : 0
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Enhanced Glassmorphism Frame */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl"
                      animate={{
                        borderColor: hoveredSide === 'right' ? 'rgba(0,217,166,0.4)' : 'rgba(255,255,255,0.2)',
                        boxShadow: hoveredSide === 'right' 
                          ? '0 25px 50px -12px rgba(0,217,166,0.25)' 
                          : '0 25px 50px -12px rgba(0,0,0,0.25)'
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Image Wrapper */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 via-gray-50/5 to-gray-100/10 p-4 backdrop-blur-sm">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-[#00d9a6]/10 via-transparent to-[#c5f82a]/10 rounded-3xl"
                        animate={{
                          opacity: hoveredSide === 'right' ? 0.8 : 0.4
                        }}
                        transition={{ duration: 0.3 }}
                      />

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

                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                          animate={{
                            opacity: hoveredSide === 'right' ? 0.6 : 0.3
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Enhanced Corner Decorations */}
                      <motion.div 
                        className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-r from-[#00d9a6] to-[#c5f82a] rounded-full shadow-lg"
                        animate={{
                          scale: hoveredSide === 'right' ? 1.5 : 1,
                          rotate: hoveredSide === 'right' ? 360 : 0
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div 
                        className="absolute bottom-2 left-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"
                        animate={{
                          scale: hoveredSide === 'right' ? 1.3 : 1,
                          rotate: hoveredSide === 'right' ? -360 : 0
                        }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      />
                    </div>

                    {/* Enhanced Floating Elements */}
                    <motion.div 
                      className="absolute -top-4 left-1/4 w-8 h-8 bg-gradient-to-r from-[#00d9a6] to-[#c5f82a] rounded-full opacity-80 shadow-lg"
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
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.div 
              className="flex flex-col items-center space-y-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-medium tracking-wider">SCROLL</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* Consulting Services Header */}
        <section className="bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Consulting Services
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Understanding how a skill fits into a larger mechanism is the mark of a true expert. Our 
              recruitment specialists understand the bigger picture, and help our clients do the same. With 
              decades of combined experience across all phases of strategic planning, Seneca Consulting 
              Services can help you see the road ahead.
            </motion.p>
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Expertise in the key areas driving business today.
            </motion.h2>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {services.map((service, index) => (
                <motion.article 
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${
                    service.reverse ? 'lg:grid-flow-col-dense' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Image Container */}
                  <div className={`relative ${service.reverse ? 'lg:col-start-2' : ''}`}>
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                        priority={index < 2}
                        quality={85}
                      />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`${service.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-center">
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 text-justify">
                        {service.description}
                      </p>
                      <div className="mt-auto">
                        <Link
                          href={`/services/${service.id}`}
                          className="inline-flex items-center bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] hover:from-[#00d9a6] hover:to-[#c5f82a] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500/50"
                          aria-label={`Learn more about ${service.title} services`}
                        >
                          GET STARTED
                          <svg 
                            className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Specialties Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
                We also provide crucial support to leading companies in the following areas:
              </h2>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Aerospace */}
              <article className="bg-green-900/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 lg:p-8 hover:bg-green-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">AEROSPACE</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Instrumentation Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Controls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Design Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Fabrication Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Mechanical Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Materials Management</span>
                  </li>
                </ul>
              </article>

              {/* Chemical/Petro */}
              <article className="bg-green-900/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 lg:p-8 hover:bg-green-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">CHEMICAL/PETRO</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Process/Manufacturing Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Chemists/Lab Technician Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Chemical Engineer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Environmental/Health/Safety Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Nuclear Engineers</span>
                  </li>
                </ul>
              </article>

              {/* Logistics/Automation */}
              <article className="bg-green-900/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 lg:p-8 hover:bg-green-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl md:col-span-2 lg:col-span-1">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">LOGISTICS/AUTOMATION</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Field Service Engineers & Technicians</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Controls & Mechanical Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Sales Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>IT Service Managers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Project Managers</span>
                  </li>
                </ul>
              </article>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/services/engineering-specialties"
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 text-lg shadow-xl"
                aria-label="Get started with engineering specialty services"
              >
                GET STARTED
                <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
