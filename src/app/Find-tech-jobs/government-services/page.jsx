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

      <main className="min-h-screen bg-gray-50">
        {/* Enhanced Professional Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
          {/* Refined Background Elements */}
          <div className="absolute inset-0">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 217, 166, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 166, 0.08) 1px, transparent 1px)`,
                  backgroundSize: '60px 60px',
                }}
              />
            </div>
            
            {/* Professional Geometric Shapes */}
            <div className="absolute top-32 left-16 w-80 h-80 bg-gradient-to-r from-[#00d9a6]/5 to-[#c5f82a]/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-20 w-96 h-96 bg-gradient-to-l from-blue-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-gradient-to-tr from-emerald-400/4 to-teal-400/4 rounded-full blur-2xl"></div>
            
            {/* Elegant Lines */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d9a6]/20 to-transparent"></div>
              <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c5f82a]/15 to-transparent"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center min-h-[75vh]">
              
              {/* Refined Left Content */}
              <motion.div
                className="lg:col-span-6 text-white space-y-10"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Professional Badge */}
                

                {/* Main Heading with Professional Typography */}
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-5xl xl:text-5xl font-bold leading-[1.1] tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Government{' '}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d9a6] via-[#c5f82a] to-[#00d9a6]">
                      Services
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00d9a6] to-[#c5f82a] rounded-full transform scale-x-0 animate-scale-x"></div>
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5f82a] via-[#00d9a6] to-[#c5f82a]">
                    Quore IT
                  </span>
                  <span className="text-[#00d9a6]">.</span>
                </motion.h1>

                {/* Enhanced Professional Description */}
                <motion.div 
                  className="space-y-8 text-lg lg:text-xl max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="relative pl-8 border-l-4 border-gradient-to-b from-[#00d9a6] to-[#c5f82a]">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#00d9a6] to-[#c5f82a] rounded-full"></div>
                    <p className="font-semibold text-gray-200 leading-relaxed">
                      Navigating compliance with ease - trusted IT.<br />
                     staffing for government projects.
                    </p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-justify font-light text-xl">
                   At Quore IT, we recognize that staffing for government services comes with unique challenges—strict regulations, compliance requirements, and high expectations for reliability. Our team is equipped to navigate these complexities seamlessly, helping you build trusted IT teams quickly and efficiently. With a people-first approach and proven expertise, we deliver talent that empowers government projects to succeed.
                  </p>
                  
                
                </motion.div>

                {/* Professional CTA Button */}
                <motion.div 
                  className="pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Link 
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#00d9a6] to-[#c5f82a] text-gray-900 font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#00d9a6]/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <span className="relative z-10 text-lg">Get Started Today</span>
                    <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Professional Right Image Section */}
              <motion.div
                className="lg:col-span-6 relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Elegant Background Decorations */}
                <div className="absolute -inset-8">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#00d9a6]/8 to-[#c5f82a]/8 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
                </div>

                {/* Professional Image Container */}
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Glass Morphism Container */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-2xl">
                    {/* Subtle Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00d9a6]/5 via-transparent to-[#c5f82a]/5 rounded-3xl"></div>
                    
                    {/* Main Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10"></div>
                      <Image
                        src="/images/it1.png"
                        alt="Professional business team handshake in modern office setting"
                        width={700}
                        height={500}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                        loading="eager"
                      />
                    </div>

                    {/* Professional UI Elements */}
                    <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#00d9a6] to-[#c5f82a] rounded-2xl p-5 shadow-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        <span className="text-gray-900 font-semibold text-sm">Live Support</span>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -left-6 bg-white/95 rounded-2xl p-5 shadow-xl backdrop-blur-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex -space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-3 border-white shadow-lg"></div>
                          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-3 border-white shadow-lg"></div>
                          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-3 border-white shadow-lg"></div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Expert Team</div>
                          <div className="text-xs text-gray-600">Ready to Help</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#00d9a6] to-[#c5f82a] rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] rounded-full opacity-40"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Government Services Section - Enhanced */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Professional Header */}
           

            {/* Defense & Intel Section - Enhanced */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
                  <Image
                    src="/images/it9.png"
                    alt="Defense and intelligence team collaborating on government technology solutions"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="space-y-8 order-1 lg:order-2">
                <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">Defense & Intelligence</h3>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  We support defense and intelligence organizations with end-to-end technology expertise and skilled talent. Our capabilities span Enterprise IT, full-spectrum Software engineering, ERP platforms (SAP and Oracle), Systems Engineering and Administration, Application Development, Data Analytics, Cloud Computing, and Cybersecurity. We deliver the right professionals to strengthen mission readiness and ensure secure, efficient operations.
                </p>
                <Link 
                  href="/services/defense-intel"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-gray-900 font-semibold rounded-xl hover:shadow-xl hover:shadow-green-200 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-green-200 transform hover:scale-105 hover:-translate-y-1"
                  aria-label="Get started with Defense & Intel services"
                >
                  GET STARTED
                  <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Federal Civilian, Homeland, & Justice Section - Enhanced */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Federal Civilian, Homeland, & Justice
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  We bring proven expertise in supporting the IT and workforce needs of large government organizations. We partner with federal civilian agencies, homeland security, and justice departments to deliver a wide range of tailored solutions. From Data Analysis and Cybersecurity to Application Development, Project Management, ETL Engineering, and Quality Assurance. We provide skilled professionals who help government initiatives run efficiently, securely, and with measurable impact.
                </p>
                <Link 
                  href="/services/federal-civilian"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-gray-900 font-semibold rounded-xl hover:shadow-xl hover:shadow-green-200 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-green-200 transform hover:scale-105 hover:-translate-y-1"
                  aria-label="Get started with Federal Civilian, Homeland & Justice services"
                >
                  GET STARTED
                  <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
                  <Image
                    src="/images/it10.png"
                    alt="Federal civilian employees working on homeland security and justice technology projects"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* Federal Health Section - Enhanced */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
                  <Image
                    src="/images/it11.png"
                    alt="Healthcare professional working with advanced medical technology and data systems"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="space-y-8 order-1 lg:order-2">
                <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">Federal Health</h3>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  We provide support, planning, implementation, transitioning, operating and maintenance expertise to keep health initiatives running smoothly. From maintaining CMS applications to providing support Cloud Computing Services for Infrastructure as a Service (IaaS) and scalable Cloud based Platform as a Service (PaaS) applications.
                </p>
                <Link 
                  href="/services/federal-health"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-gray-900 font-semibold rounded-xl hover:shadow-xl hover:shadow-green-200 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-green-200 transform hover:scale-105 hover:-translate-y-1"
                  aria-label="Get started with Federal Health services"
                >
                  GET STARTED
                  <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* State, Local & Education Section - Enhanced */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  State, Local & Education
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  State and local governments, as well as educational institutions, face constantly evolving challenges that demand agility and innovation. Quore IT partners with SLED organizations to strengthen their capabilities through scalable talent solutions and specialized expertise. From Project and Program Management to Cybersecurity, Data science, Application Development, and beyond. We provide the skilled professionals needed to drive efficiency, security, and long-term impact.
                </p>
                <Link 
                  href="/services/state-local-education"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-gray-900 font-semibold rounded-xl hover:shadow-xl hover:shadow-green-200 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-green-200 transform hover:scale-105 hover:-translate-y-1"
                  aria-label="Get started with State, Local & Education services"
                >
                  GET STARTED
                  <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
                  <Image
                    src="/images/it12.png"
                    alt="State and local government officials collaborating on education and community initiatives"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Compliance Section - Enhanced */}
        <section className="bg-gradient-to-r from-gray-50 to-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center max-w-6xl mx-auto bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                When working with the government and their agencies, Seneca Resources assures that all 
                employees are fully compliant with state and federal regulations, including{' '}
                <Link 
                  href="/section-508-compliance" 
                  className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors duration-200 font-medium"
                  aria-label="Learn more about Section 508 compliance"
                >
                  Section 508 of the Rehabilitation Act
                </Link>
                {' '}which requires Federal agencies to make their electronic and information 
                technology accessible to people with disabilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Engineering Specialties Section - Enhanced */}
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

      <style jsx>{`
        @keyframes scale-x {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        .animate-scale-x {
          animation: scale-x 0.8s ease-out 0.5s forwards;
        }
      `}</style>
    </>
  );
};

export default SenecaServicesPage;
