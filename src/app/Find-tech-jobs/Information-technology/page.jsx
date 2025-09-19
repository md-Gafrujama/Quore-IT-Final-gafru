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
        <meta property="og:image" content="/" />
        <meta name="keywords" content="IT services, government services, engineering, consulting, technology solutions, recruitment, DevOps, cybersecurity, cloud solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/services" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Modern Enhanced Hero Section - Fixed for Navbar Overlap */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden pt-20 md:pt-24 lg:pt-16">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
                animation: 'grid-move 20s linear infinite'
              }}
            />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Content - Enhanced Typography with Perfect Alignment */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white space-y-8 text-center lg:text-left"
              >
                {/* Main Heading - Perfect Typography Hierarchy */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-4"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-tight tracking-tight">
                  Information Technology,{' '}
                    <span className="block bg-gradient-to-r from-[#00d9a6] via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
                   Recruiting
                    </span>
                  </h1>
                </motion.div>

                {/* Subtitle Section with Professional Alignment and Justified Text */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-6"
                >
                  

                  <div className="text-xl sm:text-lg md:text-xl text-gray-300 space-y-4 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                    <p className="text-justify" style={{ textJustify: 'inter-word' }}>
                  Technology moves fast, and there's no room for error. At Quore IT, we connect businesses with the right professionals across the full IT spectrum from software development and data analytics to AI and emerging technologies. Our recruiters stay ahead of industry trends to understand not just the skills you need, but the impact they drive. With the right talent in place, we help you innovate, adapt, and succeed in a constantly evolving digital landscape.
                    </p>
                    
                  </div>
                </motion.div>

                {/* CTA Buttons with Professional Styling */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
                >
                  <Link
                    href="/services"
                    className="group relative px-8 py-4 bg-gradient-to-r from-[#00d9a6] to-cyan-500 hover:from-[#00d9a6] hover:to-blue-600 text-white font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25"
                  >
                    <span className="relative z-10">Get Started Today</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                  </Link>
                  
                
                </motion.div>

                {/* Stats Section with Centered/Left Alignment */}
              
              </motion.div>

              {/* Right Visual Content - Enhanced Design */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative mt-8 lg:mt-0"
              >
                {/* Background Decorative Elements */}
                <div className="absolute -inset-8 bg-gradient-to-r from-[#00d9a6]/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl animate-pulse" />
                <div className="absolute -inset-12 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-full blur-3xl" />
                
                {/* Main Image Container with Glass Effect */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src="/images/it1.png"
                      alt="Professional business team handshake in modern office setting"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      priority
                    />
                    
                    {/* Image Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    
                    {/* Floating Tech Icons with Enhanced Animation */}
                    <motion.div
                      animate={{ 
                        y: [-10, 10, -10],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#00d9a6] to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    
                    <motion.div
                      animate={{ 
                        y: [10, -10, 10],
                        rotate: [0, -5, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute bottom-4 left-4 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </motion.div>

                    {/* Additional Floating Elements */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1/2 right-2 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
                    />
                  </motion.div>
                  
                  {/* Tech Stack Indicators with Perfect Centering */}
                  <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mt-6">
                    {['React', 'Node.js', 'Cloud', 'AI'].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 md:px-3 md:py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm text-white font-medium border border-white/20 cursor-pointer mb-2"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        
        </section>

        {/* Custom Styles for Animations */}
        <style jsx>{`
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>

        {/* Information Technology Recruiting Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

            {/* DevOps Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/it2.png"
                    alt="DevOps team collaboration in modern tech environment"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 lg:space-y-8 order-1 lg:order-2"
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">DevOps</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify" style={{ textJustify: 'inter-word' }}>
                  We embrace a DevOps culture that blends Agile practices with the latest in software and security. Our approach accelerates collaboration, strengthens IT systems, and drives continuous improvement. By designing, developing, deploying, and operating mission-critical applications with efficiency, we help your teams deliver faster, smarter, and more reliably than ever before.
                </p>
                <Link 
                  href="/Find-tech-jobs/Information-technology"
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] hover:from-[#00d9a6] hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 shadow-lg text-sm md:text-base"
                  aria-label="Get started with DevOps services"
                >
                  GET STARTED
                  <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cybersecurity & Cloud Sections */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
            {/* Cybersecurity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 lg:space-y-8"
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Cybersecurity</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify" style={{ textJustify: 'inter-word' }}>
                  We help organizations stay protected in an ever-evolving threat landscape. From risk assessments and security architecture to intrusion detection and network monitoring, our experts deliver end-to-end protection. We provide the talent and expertise to safeguard your data helping you prevent, detect, and respond to cyber threats quickly and effectively with cutting-edge solutions.
                </p>
                <Link 
                  href="/services/cybersecurity"
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] hover:from-[#00d9a6] hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 shadow-lg text-sm md:text-base"
                  aria-label="Get started with Cybersecurity services"
                >
                  GET STARTED
                  <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/it3.png"
                    alt="Cybersecurity professionals monitoring network security"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>

            {/* Cloud */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/it4.png"
                    alt="Cloud infrastructure engineers working in data center"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 lg:space-y-8 order-1 lg:order-2"
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Cloud</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify" style={{ textJustify: 'inter-word' }}>
                  Cloud infrastructures and data migrations are growing more complex every day on-prem, off-prem, edge, or hybrid. At Quore IT, our experts guide you through the choices, ensuring you get the right fit for your business. Whether it's AI, storage, compute, supercomputing, or networking, we help you maximize the value of your IT investments. From building to moving to managing data in the cloud, we deliver the talent and expertise to make it seamless.
                </p>
                <Link 
                  href="/services/cloud"
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] hover:from-[#00d9a6] hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 shadow-lg text-sm md:text-base"
                  aria-label="Get started with Cloud services"
                >
                  GET STARTED
                  <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLineart="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enterprise & Infrastructure Sections */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
            {/* Enterprise Resource Planning */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 lg:space-y-8"
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  Enterprise Resource Planning
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify" style={{ textJustify: 'inter-word' }}>
                  ERP is the backbone of seamless business operations, enabling organizations to connect and share data across departments. When implemented effectively, it drives efficiency, collaboration, and measurable growth. At Quore IT, we specialize in the development, customization, and deployment of leading ERP platforms including SAP, Oracle, Microsoft, and Salesforce, whether on-premises or in the cloud. Our experts ensure your ERP systems are tailored to support your goals and maximize business impact.
                </p>
                <Link 
                  href="/services/erp"
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] hover:from-[#00d9a6] hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 shadow-lg text-sm md:text-base"
                  aria-label="Get started with ERP services"
                >
                  GET STARTED
                  <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/it5.png"
                    alt="ERP specialists implementing enterprise solutions"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>

            {/* Infrastructure Engineering */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/it6.png"
                    alt="Infrastructure engineer monitoring network systems"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 lg:space-y-8 order-1 lg:order-2"
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  Infrastructure Engineering
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify" style={{ textJustify: 'inter-word' }}>
                  Infrastructure keeps your business running. So downtime is not an option. Our infrastructure engineers are there 24/7, providing everything from desktop and server support to network engineering. Whether you need a single skilled resource or a full team of engineers, Seneca Resources can deploy proven resources at a moment's notice to ensure your systems remain operational and efficient.
                </p>
                <Link 
                  href="/services/infrastructure"
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] hover:from-[#00d9a6] hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 shadow-lg text-sm md:text-base"
                  aria-label="Get started with Infrastructure Engineering services"
                >
                  GET STARTED
                  <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

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
