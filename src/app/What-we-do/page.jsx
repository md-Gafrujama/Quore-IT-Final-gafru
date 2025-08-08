'use client';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToLocations = () => {
    const locationsSection = document.getElementById('locations-section');
    if (locationsSection) {
      locationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const locations = [
    'Belgium', 'Canada', 'Germany', 'Ireland', 
    'Netherlands', 'Poland', 'USA', 'United Kingdom'
  ];

  return (
    <>
      <Head>
        <title>What We Do | Quore IT - Technology Recruitment & Workforce Solutions</title>
        <meta name="description" content="Explore how Quore IT connects businesses to tech talent worldwide. From recruitment to workforce solutions, we help drive digital transformation." />
        <meta property="og:title" content="What We Do | Quore IT - Technology Recruitment & Workforce Solutions" />
        <meta property="og:description" content="We deliver global technology recruitment and workforce solutions to organizations in over 30 countries. Learn more about how we can help you scale." />
        <meta property="og:image" content="/images/what-we-do.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/What-we-do" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What We Do | Quore IT - Technology Recruitment & Workforce Solutions" />
        <meta name="twitter:description" content="Quore IT specializes in global tech recruitment and customized workforce solutions. Find your local recruitment partner today." />
        <meta name="twitter:image" content="/images/what-we-do.webp" />
      </Head>

      {/* Hero Section with Parallax Effect */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0 transform scale-110 transition-transform duration-700 ease-out">
          <Image
            src="/images/jobs_hero.jpg"
            alt="Candidates Hero Background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40 animate-pulse"></div>
        </div>

        {/* Content with Stagger Animation */}
        <div className={`relative z-10 text-center transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide hover:scale-105 transition-transform duration-300 cursor-default">
            What we do
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </section>

      {/* Technology Recruitment Section */}
      <div className="w-full bg-[#f4f4f4] py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text content with stagger animation */}
            <div className={`md:w-1/2 transform transition-all duration-700 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h1 className="text-4xl font-bold text-[#333] mb-6 relative">
                Technology Recruitment
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-full transform scale-x-0 animate-pulse"></div>
              </h1>
              
              <p className="text-lg text-[#333] mb-6 leading-relaxed hover:text-[#444] transition-colors duration-300">
                We help organisations across more than 30 countries recruit highly experienced experts on a permanent and contract basis.
              </p>
              
              <p className="text-lg text-[#333] mb-8 leading-relaxed hover:text-[#444] transition-colors duration-300">
                In addition, our Recruitment Solutions business provides tailored services that help companies recruit and manage their workforce more effectively, from payroll services to recruitment process outsourcing and more.
              </p>
              
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={scrollToLocations}
                  className="group text-[#0066cc] text-lg font-semibold cursor-pointer text-left flex items-center hover:text-[#0052a3] transition-all duration-300 transform hover:translate-x-2"
                >
                  <span className="relative">
                    Select your Recruitment location
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0066cc] transition-all duration-300 group-hover:w-full"></div>
                  </span>
                  <svg className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                <a href="#" className="group text-[#0066cc] text-lg font-semibold hover:text-[#0052a3] transition-all duration-300 transform hover:translate-x-2 flex items-center">
                  <span className="relative">
                    Find out about Workforce Solutions
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0066cc] transition-all duration-300 group-hover:w-full"></div>
                  </span>
                  <svg className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Image with hover effects */}
            <div className={`md:w-1/2 flex justify-center md:justify-end transform transition-all duration-700 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="relative w-full h-64 md:h-80 group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c5f82a]/20 to-[#00d9a6]/20 rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-300 blur-xl"></div>
                <Image
                  src="/images/what-we-do.webp"
                  alt="Technology Recruitment"
                  fill
                  className="object-contain rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location/Site Section with Enhanced Interactions */}
      <div id="locations-section" className={`w-full bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-white px-6 py-16 mt-12 relative overflow-hidden transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left min-h-[40vh] relative z-10">
          {/* Column 1 - Locations */}
          <div className="transform transition-all duration-500 hover:scale-105">
            <h3 className="text-3xl font-extrabold mb-6 text-black/80 relative">
              Choose your location
              <div className="absolute -bottom-2 left-0 md:left-0 w-16 h-1 bg-black/30 rounded-full"></div>
            </h3>
            <div className="grid grid-cols-2 gap-3 text-black/90 text-base">
              {locations.map((location, index) => (
                <span 
                  key={location}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-white/20 hover:shadow-lg backdrop-blur-sm border border-white/10 ${
                    hoveredLocation === location ? 'bg-white/20 scale-105 shadow-lg' : 'hover:bg-white/10'
                  }`}
                  onMouseEnter={() => setHoveredLocation(location)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {location}
                </span>
              ))}
            </div>
          </div>

          {/* Spacer with animated line */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
          </div>

          {/* Column 2 - Site Links */}
          <div className="transform transition-all duration-500 hover:scale-105">
            <h3 className="text-3xl font-extrabold mb-6 text-black/80 relative">
              Site
              <div className="absolute -bottom-2 left-0 md:left-0 w-12 h-1 bg-black/30 rounded-full"></div>
            </h3>
            <ul className="space-y-4 text-black/90">
              <li>
                <a href="#" className="group flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-white/20 hover:shadow-lg backdrop-blur-sm border border-white/10 hover:scale-105">
                  <span className="relative">
                    Nash Squared
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/50 transition-all duration-300 group-hover:w-full"></div>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-white/20 hover:shadow-lg backdrop-blur-sm border border-white/10 hover:scale-105">
                  <span className="relative">
                    Workforce Solutions
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/50 transition-all duration-300 group-hover:w-full"></div>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section with Enhanced Interactions */}
      <div
        className="bg-cover bg-center w-full min-h-[60vh] flex flex-col justify-center items-center text-white text-center relative overflow-hidden"
        style={{ backgroundImage: "url('/images/keyboard.jpg')" }}
      >
        {/* Enhanced overlay with gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-ping delay-0"></div>
          <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white/30 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/10 rounded-full animate-ping delay-500"></div>
        </div>

        <div className="relative z-10 max-w-4xl px-4">
          <h1 className={`text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-2xl transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            How can we help?
          </h1>
          
          <p className={`text-lg md:text-xl mb-8 max-w-4xl drop-shadow-lg leading-relaxed transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            If you would like us to contact you with more information on what we do and what we can offer, please let us know.
          </p>

          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Link href="/contact">
              <button className="group relative bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-bold py-4 px-8 rounded-full transition-all duration-500 shadow-2xl transform hover:scale-110 hover:shadow-green-500/25 text-black">
                <span className="relative z-10">CONTACT US</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 blur-xl"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;