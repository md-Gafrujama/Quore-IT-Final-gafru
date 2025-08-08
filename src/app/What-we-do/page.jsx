'use client';
import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [particles, setParticles] = useState([]);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const locationsRef = useRef(null);

  // Initialize particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speed * 0.1) % 100,
        y: particle.y + Math.sin(Date.now() * 0.001 + particle.id) * 0.1,
      })));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll tracking and parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine current section
      const sections = [heroRef.current, contentRef.current, locationsRef.current];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToLocations = () => {
    const locationsSection = document.getElementById('locations-section');
    if (locationsSection) {
      locationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const locations = [
    { name: 'Belgium', flag: '🇧🇪', color: 'from-yellow-400 to-red-600' },
    { name: 'Canada', flag: '🇨🇦', color: 'from-red-500 to-white' },
    { name: 'Germany', flag: '🇩🇪', color: 'from-black to-red-600' },
    { name: 'Ireland', flag: '🇮🇪', color: 'from-green-600 to-orange-500' },
    { name: 'Netherlands', flag: '🇳🇱', color: 'from-red-600 to-blue-600' },
    { name: 'Poland', flag: '🇵🇱', color: 'from-white to-red-600' },
    { name: 'USA', flag: '🇺🇸', color: 'from-blue-600 to-red-600' },
    { name: 'United Kingdom', flag: '🇬🇧', color: 'from-blue-800 to-red-600' }
  ];

  const features = [
    { icon: '🎯', title: 'Targeted Recruitment', description: 'Precision matching for your needs' },
    { icon: '🌍', title: 'Global Reach', description: '30+ countries worldwide' },
    { icon: '⚡', title: 'Fast Delivery', description: 'Quick turnaround times' },
    { icon: '🏆', title: 'Quality Assured', description: 'Expert-level professionals' }
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

      {/* Floating Cursor Trail */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate3d(0, 0, 0)',
          transition: 'all 0.1s ease-out'
        }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-80 animate-ping"></div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-40">
        <div 
          className="h-full bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] transition-all duration-300 ease-out"
          style={{ width: `${Math.min(scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100, 100)}%` }}
        ></div>
      </div>

      {/* Section Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        {[0, 1, 2].map((section) => (
          <button
            key={section}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === section 
                ? 'bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] scale-150 shadow-lg' 
                : 'bg-white/40 hover:bg-white/60 hover:scale-125'
            }`}
            onClick={() => {
              const targets = ['hero', 'content', 'locations-section'];
              document.getElementById(targets[section])?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        ))}
      </div>

      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: `translateZ(0) scale(${1 + Math.sin(Date.now() * 0.002 + particle.id) * 0.2})`
            }}
          />
        ))}
      </div>

      {/* Hero Section with Advanced Effects */}
      <section 
        id="hero"
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden mt-20"
      >
        {/* Multi-layer Background with Parallax */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 scale-110 transition-transform duration-700 ease-out"
            style={{ transform: `translateY(${scrollY * 0.5}px) scale(1.1)` }}
          >
            <Image
              src="/images/jobs_hero.jpg"
              alt="Candidates Hero Background"
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
          </div>
          
          {/* Dynamic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#00d9a6]/10 via-transparent to-[#c5f82a]/10"></div>
          
          {/* Animated mesh gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#c5f82a]/20 via-transparent to-[#00d9a6]/20 animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced Content */}
        <div className={`relative z-10 text-center max-w-6xl px-4 transform transition-all duration-1500 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="relative">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-wide mb-8 relative">
              <span className="relative z-10 hover:scale-105 transition-transform duration-500 cursor-default inline-block">
                What we do
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] opacity-0 hover:opacity-20 transition-opacity duration-500 blur-2xl transform scale-110"></div>
            </h1>
            
            {/* Subtitle with typewriter effect */}
            <p className={`text-xl md:text-2xl text-white/90 mb-12 font-light tracking-wide transform transition-all duration-1500 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Connecting talent with opportunity across the globe
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1500 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <button 
                onClick={scrollToLocations}
                className="group relative bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-black font-bold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25"
              >
                <span className="relative z-10">Explore Locations</span>
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500"></div>
              </button>
              
              <button className="group relative bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-110 hover:bg-white hover:text-black">
                <span className="relative z-10">Learn More</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Preview Cards */}
      <div className="w-full bg-gradient-to-b from-[#f4f4f4] to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 hover:border-[#00d9a6]/30 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333] mb-2 group-hover:text-[#00d9a6] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-[#c5f82a]/5 to-[#00d9a6]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Recruitment Section */}
      <div id="content" ref={contentRef} className="w-full bg-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #c5f82a 2px, transparent 2px), radial-gradient(circle at 75% 75%, #00d9a6 2px, transparent 2px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Text content */}
            <div className={`lg:w-1/2 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="relative mb-8">
                <h1 className="text-5xl font-black text-[#333] mb-6 relative">
                  Technology Recruitment
                  <div className="absolute -bottom-3 left-0 w-24 h-1.5 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-full"></div>
                </h1>
              </div>
              
              <div className="space-y-6 mb-10">
                <p className="text-xl text-[#333] leading-relaxed hover:text-[#444] transition-colors duration-300 relative pl-6">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-full"></span>
                  We help organisations across more than 30 countries recruit highly experienced experts on a permanent and contract basis.
                </p>
                
                <p className="text-xl text-[#333] leading-relaxed hover:text-[#444] transition-colors duration-300 relative pl-6">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-full"></span>
                  Our Recruitment Solutions business provides tailored services that help companies recruit and manage their workforce more effectively, from payroll services to recruitment process outsourcing and more.
                </p>
              </div>
              
              <div className="flex flex-col space-y-6">
                <button 
                  onClick={scrollToLocations}
                  className="group relative text-[#0066cc] text-xl font-bold cursor-pointer text-left flex items-center hover:text-[#0052a3] transition-all duration-300 transform hover:translate-x-4 bg-blue-50 hover:bg-blue-100 rounded-lg p-4"
                >
                  <div className="mr-4 w-12 h-12 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-full flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="relative">
                    Select your Recruitment location
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0066cc] transition-all duration-300 group-hover:w-full"></div>
                  </span>
                </button>
                
                <a href="#" className="group relative text-[#0066cc] text-xl font-bold hover:text-[#0052a3] transition-all duration-300 transform hover:translate-x-4 flex items-center bg-blue-50 hover:bg-blue-100 rounded-lg p-4">
                  <div className="mr-4 w-12 h-12 bg-gradient-to-r from-[#00d9a6] to-[#c5f82a] rounded-full flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="relative">
                    Find out about Workforce Solutions
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0066cc] transition-all duration-300 group-hover:w-full"></div>
                  </span>
                </a>
              </div>
            </div>
            
            {/* Enhanced Image Section */}
            <div className={`lg:w-1/2 flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <div className="relative w-full max-w-lg">
                {/* Floating elements around image */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] rounded-full animate-bounce delay-0 opacity-20"></div>
                <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-[#00d9a6] to-[#c5f82a] rounded-full animate-bounce delay-500 opacity-20"></div>
                <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] rounded-full animate-ping opacity-30"></div>
                
                <div className="group relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-green-500/10 transition-all duration-500 transform hover:scale-105">
                  <div className="relative h-80 overflow-hidden rounded-2xl">
                    <Image
                      src="/images/what-we-do.webp"
                      alt="Technology Recruitment"
                      fill
                      className="object-cover transform transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Statistics */}
      <div className="w-full bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '30+', label: 'Countries' },
              { number: '1000+', label: 'Clients' },
              { number: '10k+', label: 'Placements' },
              { number: '98%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center group transform transition-all duration-500 hover:scale-110 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl md:text-5xl font-black text-[#333] mb-2 group-hover:text-[#00d9a6] transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Location Section */}
      <div 
        id="locations-section" 
        ref={locationsRef}
        className="w-full bg-gradient-to-br from-[#c5f82a] via-[#00d9a6] to-[#c5f82a] text-white px-6 py-20 relative overflow-hidden"
      >
        {/* Dynamic background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full animate-pulse transform rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full animate-pulse delay-700 transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full animate-ping delay-1000"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 right-1/4 w-16 h-16 border-4 border-white/10 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-4 border-white/10 rotate-12 animate-bounce"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-5xl font-black mb-6 text-black/90">
              Global Presence
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Select your location to connect with our local recruitment specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Locations Grid */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-black mb-8 text-black/90 text-center md:text-left">
                Choose your location
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {locations.map((location, index) => (
                  <div
                    key={location.name}
                    className={`group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2 ${
                      hoveredLocation === location.name ? 'scale-105 bg-white/20 shadow-2xl -translate-y-2' : ''
                    }`}
                    onMouseEnter={() => setHoveredLocation(location.name)}
                    onMouseLeave={() => setHoveredLocation(null)}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      transitionDelay: `${index * 50}ms`
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl transform group-hover:scale-125 transition-transform duration-300">
                        {location.flag}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-black/90 group-hover:text-black transition-colors duration-300">
                          {location.name}
                        </h4>
                        <div className="text-sm text-black/60 group-hover:text-black/80 transition-colors duration-300">
                          View opportunities
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover effect gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${location.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                    
                    {/* Click ripple effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-active:scale-100 transition-transform duration-150"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Site Links with Enhanced Design */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
              <h3 className="text-3xl font-black mb-8 text-black/90 text-center">
                Our Sites
              </h3>
              <div className="space-y-6">
                <a href="#" className="group flex items-center p-4 rounded-2xl transition-all duration-300 hover:bg-white/20 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1">
                  <div className="mr-4 w-12 h-12 bg-gradient-to-r from-white/20 to-white/30 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-6 h-6 text-black/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-lg text-black/90 group-hover:text-black transition-colors duration-300 relative">
                      Nash Squared
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/60 transition-all duration-300 group-hover:w-full"></div>
                    </span>
                    <div className="text-sm text-black/60 group-hover:text-black/80 transition-colors duration-300">
                      Technology Specialists
                    </div>
                  </div>
                  <svg className="ml-auto w-5 h-5 text-black/60 transform group-hover:translate-x-1 group-hover:text-black transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                <a href="#" className="group flex items-center p-4 rounded-2xl transition-all duration-300 hover:bg-white/20 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1">
                  <div className="mr-4 w-12 h-12 bg-gradient-to-r from-white/20 to-white/30 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-6 h-6 text-black/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-lg text-black/90 group-hover:text-black transition-colors duration-300 relative">
                      Workforce Solutions
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/60 transition-all duration-300 group-hover:w-full"></div>
                    </span>
                    <div className="text-sm text-black/60 group-hover:text-black/80 transition-colors duration-300">
                      Comprehensive Services
                    </div>
                  </div>
                  <svg className="ml-auto w-5 h-5 text-black/60 transform group-hover:translate-x-1 group-hover:text-black transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              {/* Additional Quick Actions */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="text-lg font-bold text-black/90 mb-4">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-white/20 hover:bg-white/30 rounded-xl p-3 transition-all duration-300 transform hover:scale-105 text-center">
                    <div className="text-2xl mb-1">📧</div>
                    <div className="text-xs font-medium text-black/80">Email Us</div>
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 rounded-xl p-3 transition-all duration-300 transform hover:scale-105 text-center">
                    <div className="text-2xl mb-1">📞</div>
                    <div className="text-xs font-medium text-black/80">Call Now</div>
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 rounded-xl p-3 transition-all duration-300 transform hover:scale-105 text-center">
                    <div className="text-2xl mb-1">💼</div>
                    <div className="text-xs font-medium text-black/80">Jobs</div>
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 rounded-xl p-3 transition-all duration-300 transform hover:scale-105 text-center">
                    <div className="text-2xl mb-1">📊</div>
                    <div className="text-xs font-medium text-black/80">Reports</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#333] mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Quore IT transformed our hiring process. Their global reach and expertise in tech recruitment is unmatched.",
                author: "Sarah Johnson",
                role: "CTO, TechCorp",
                rating: 5
              },
              {
                quote: "Outstanding service and results. They found us the perfect candidates in record time across multiple countries.",
                author: "Michael Chen",
                role: "HR Director, GlobalTech",
                rating: 5
              },
              {
                quote: "The workforce solutions provided by Quore IT have streamlined our entire recruitment operation.",
                author: "Emma Williams",
                role: "CEO, StartupHub",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={testimonial.author}
                className={`group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 hover:border-[#00d9a6]/30 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-gray-700 text-lg mb-6 italic leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-full flex items-center justify-center mr-4 transform group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-black font-bold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-[#333] group-hover:text-[#00d9a6] transition-colors duration-300">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Contact Section */}
      <div
        id="contact"
        className="bg-cover bg-center bg-fixed w-full min-h-screen flex flex-col justify-center items-center text-white text-center relative overflow-hidden"
        style={{ backgroundImage: "url('/images/keyboard.jpg')" }}
      >
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#00d9a6]/20 via-transparent to-[#c5f82a]/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping delay-0"></div>
          <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white/40 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-ping delay-1500"></div>
        </div>

        <div className="relative z-10 max-w-6xl px-4 w-full">
          <div className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-7xl font-black mb-8 drop-shadow-2xl relative">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                How can we help?
              </span>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 blur-3xl opacity-50 animate-pulse"></div>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto drop-shadow-lg leading-relaxed font-light">
              Ready to transform your recruitment process? Let's connect and explore how our global expertise can drive your success.
            </p>

            {/* Enhanced CTA Section */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-12">
              <Link href="/contact">
                <button className="group relative bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-black font-black py-6 px-12 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25 text-lg">
                  <span className="relative z-10 flex items-center">
                    GET STARTED TODAY
                    <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d9a6] to-[#c5f82a] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
              
              <button className="group relative bg-transparent border-3 border-white text-white font-bold py-6 px-12 rounded-full transition-all duration-500 transform hover:scale-110 hover:bg-white hover:text-black text-lg">
                <span className="relative z-10 flex items-center">
                  SCHEDULE A CALL
                  <svg className="ml-3 w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: '📧', title: 'Email', value: 'hello@quoreit.com', action: 'Send Email' },
                { icon: '📞', title: 'Phone', value: '+1 (555) 123-4567', action: 'Call Now' },
                { icon: '💬', title: 'Live Chat', value: 'Available 24/7', action: 'Start Chat' }
              ].map((contact, index) => (
                <div
                  key={contact.title}
                  className={`group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 800}ms` }}
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#c5f82a] transition-colors duration-300">
                    {contact.title}
                  </h3>
                  <p className="text-white/80 mb-4 group-hover:text-white transition-colors duration-300">
                    {contact.value}
                  </p>
                  <button className="text-[#c5f82a] font-semibold group-hover:text-white transition-colors duration-300 relative">
                    {contact.action}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .border-3 {
          border-width: 3px;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default WhatWeDo;