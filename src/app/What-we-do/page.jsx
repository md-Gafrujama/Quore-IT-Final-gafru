'use client';
import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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

      {/* Enhanced Hero Section with Advanced Parallax */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden mt-20"
      >
        {/* Dynamic Background with Multiple Layers */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <Image
            src="/images/jobs_hero.jpg"
            alt="Candidates Hero Background"
            fill
            className="object-cover object-center filter brightness-90"
            priority
            quality={95}
          />
          
          {/* Multi-layered Animated Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/40"></div>
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#c5f82a]/10 via-transparent to-[#00d9a6]/10"
            style={{
              transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`
            }}
          ></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#c5f82a] rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-[#00d9a6] rounded-full animate-bounce opacity-40"></div>
            <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Enhanced Content with Advanced Animations */}
        <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 transform transition-all duration-1500 ease-out ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
        }`}>
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-wide transition-all duration-700 hover:scale-105 hover:text-shadow-xl cursor-default leading-tight">
              What we do
            </h1>
            
            {/* Dynamic Glow Effect */}
            <div 
              className="absolute -inset-8 bg-gradient-to-r from-[#c5f82a]/20 via-[#00d9a6]/20 to-[#c5f82a]/20 rounded-full blur-3xl opacity-0 hover:opacity-100 transition-all duration-1000 pointer-events-none"
              style={{
                transform: `scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})`
              }}
            ></div>
          </div>
          
          {/* Subtitle with Typewriter Effect */}
          <p className={`mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Connecting global technology talent with innovative organizations
          </p>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technology Recruitment Section */}
      <div className="w-full bg-[#f4f4f4] py-20 overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #c5f82a 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Enhanced Text Content */}
            <div className={`lg:w-1/2 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="relative">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333] mb-8 relative leading-tight">
                  Technology Recruitment
                  <div className="absolute -bottom-3 left-0 w-24 h-1.5 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-full transform origin-left scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]"></div>
                  <div className="absolute -bottom-5 left-2 w-16 h-0.5 bg-gradient-to-r from-[#00d9a6] to-[#c5f82a] rounded-full transform origin-left scale-x-0 animate-[scaleX_1s_ease-out_0.8s_forwards]"></div>
                </h1>
              </div>
              
              <div className="space-y-6 mb-10">
                <p className="text-lg lg:text-xl text-[#333] leading-relaxed hover:text-[#444] transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg hover:bg-white/50 p-4 rounded-lg">
                  We help organisations across more than <span className="font-semibold text-[#00d9a6]">30 countries</span> recruit highly experienced experts on a permanent and contract basis.
                </p>
                
                <p className="text-lg lg:text-xl text-[#333] leading-relaxed hover:text-[#444] transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg hover:bg-white/50 p-4 rounded-lg">
                  In addition, our <span className="font-semibold text-[#c5f82a] bg-[#333] px-2 py-1 rounded">Recruitment Solutions</span> business provides tailored services that help companies recruit and manage their workforce more effectively.
                </p>
              </div>
              
              <div className="flex flex-col space-y-6">
                <button 
                  onClick={scrollToLocations}
                  className="group text-[#0066cc] text-lg lg:text-xl font-semibold cursor-pointer text-left flex items-center hover:text-[#0052a3] transition-all duration-500 transform hover:translate-x-4 hover:scale-105 p-4 rounded-xl hover:bg-white/80 hover:shadow-xl"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#c5f82a] rounded-full mr-3 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#00d9a6]"></div>
                    <span className="relative">
                      Select your Recruitment location
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0066cc] to-[#00d9a6] transition-all duration-500 group-hover:w-full"></div>
                    </span>
                  </div>
                  <svg className="ml-3 w-5 h-5 transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                <a href="#" className="group text-[#0066cc] text-lg lg:text-xl font-semibold hover:text-[#0052a3] transition-all duration-500 transform hover:translate-x-4 hover:scale-105 flex items-center p-4 rounded-xl hover:bg-white/80 hover:shadow-xl">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#00d9a6] rounded-full mr-3 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#c5f82a]"></div>
                    <span className="relative">
                      Find out about Workforce Solutions
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0066cc] to-[#c5f82a] transition-all duration-500 group-hover:w-full"></div>
                    </span>
                  </div>
                  <svg className="ml-3 w-5 h-5 transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Enhanced Image with Advanced Effects */}
            <div className={`lg:w-1/2 flex justify-center lg:justify-end transform transition-all duration-1000 delay-600 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <div className="relative w-full max-w-md lg:max-w-lg group">
                {/* Multi-layer Background Effects */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#c5f82a]/30 to-[#00d9a6]/30 rounded-2xl transform rotate-3 scale-0 group-hover:scale-110 transition-all duration-700 blur-xl"></div>
                <div className="absolute -inset-2 bg-gradient-to-tl from-[#00d9a6]/20 to-[#c5f82a]/20 rounded-xl transform -rotate-2 scale-0 group-hover:scale-105 transition-all duration-500 delay-100"></div>
                
                <div className="relative w-full h-80 lg:h-96 bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-3xl">
                  <Image
                    src="/images/what-we-do.webp"
                    alt="Technology Recruitment"
                    fill
                    className="object-contain p-6 transform transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#00d9a6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Location Section with Advanced Interactions */}
      <div id="locations-section" className={`w-full bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-white px-4 sm:px-6 lg:px-8 py-20 mt-16 relative overflow-hidden transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-16 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
          <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          
          {/* Floating Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black/80 mb-4">
              Global Presence
            </h2>
            <p className="text-lg lg:text-xl text-black/70 max-w-2xl mx-auto">
              Choose your location to connect with our local recruitment experts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center lg:text-left">
            {/* Enhanced Locations Grid */}
            <div className="lg:col-span-2 transform transition-all duration-700 hover:scale-105">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-8 text-black/80 relative text-center lg:text-left">
                Choose your location
                <div className="absolute -bottom-3 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-20 h-1.5 bg-black/30 rounded-full"></div>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-black/90">
                {locations.map((location, index) => (
                  <div
                    key={location}
                    className={`group relative p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 backdrop-blur-sm border border-white/20 ${
                      hoveredLocation === location 
                        ? 'bg-white/30 scale-110 -translate-y-2 shadow-2xl' 
                        : 'hover:bg-white/20 shadow-lg'
                    }`}
                    onMouseEnter={() => setHoveredLocation(location)}
                    onMouseLeave={() => setHoveredLocation(null)}
                    style={{ 
                      animationDelay: `${index * 150}ms`,
                      transformOrigin: 'center center'
                    }}
                  >
                    <div className="relative z-10">
                      <span className="font-semibold text-sm sm:text-base transition-all duration-300 group-hover:text-black">
                        {location}
                      </span>
                    </div>
                    
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Site Links */}
            <div className="transform transition-all duration-700 hover:scale-105">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-8 text-black/80 relative text-center lg:text-left">
                Explore Our Sites
                <div className="absolute -bottom-3 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-16 h-1.5 bg-black/30 rounded-full"></div>
              </h3>
              
              <div className="space-y-4 text-black/90">
                <a href="#" className="group block p-5 rounded-xl transition-all duration-500 hover:bg-white/20 hover:shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-105 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-base sm:text-lg relative">
                      Nash Squared
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/50 transition-all duration-500 group-hover:w-full"></div>
                    </span>
                    <svg className="w-5 h-5 transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-black/70 mt-2 group-hover:text-black/90 transition-colors duration-300">
                    Technology recruitment specialists
                  </p>
                </a>
                
                <a href="#" className="group block p-5 rounded-xl transition-all duration-500 hover:bg-white/20 hover:shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-105 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-base sm:text-lg relative">
                      Workforce Solutions
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/50 transition-all duration-500 group-hover:w-full"></div>
                    </span>
                    <svg className="w-5 h-5 transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-black/70 mt-2 group-hover:text-black/90 transition-colors duration-300">
                    Tailored workforce management
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Contact Section */}
      <div
        className="bg-cover bg-center w-full min-h-screen flex flex-col justify-center items-center text-white text-center relative overflow-hidden"
        style={{ 
          backgroundImage: "url('/images/keyboard.jpg')",
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Enhanced Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#00d9a6]/20 via-transparent to-[#c5f82a]/20"></div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#c5f82a] rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-[#00d9a6] rounded-full animate-bounce opacity-80"></div>
          <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#c5f82a] rounded-full animate-ping delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
          }`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 drop-shadow-2xl leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                How can we help?
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto drop-shadow-lg leading-relaxed opacity-90">
              If you would like us to contact you with more information on what we do and what we can offer, please let us know.
            </p>

            <div className="space-y-8">
              <Link href="/contact">
                <button className="group relative bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] hover:from-[#00d9a6] hover:to-[#c5f82a] font-bold py-5 px-10 sm:py-6 sm:px-12 rounded-full transition-all duration-700 shadow-2xl transform hover:scale-110 hover:shadow-green-500/30 text-black text-lg sm:text-xl overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    CONTACT US
                    <svg className="ml-3 w-5 h-5 transform transition-all duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-700 blur-xl"></div>
                  
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
                </button>
              </Link>
              
              {/* Additional Contact Options */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm sm:text-base opacity-80">
                <span>Or reach out directly:</span>
                <div className="flex gap-6">
                  <a href="mailto:info@quoreit.com" className="hover:text-[#c5f82a] transition-colors duration-300 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    Email
                  </a>
                  <a href="tel:+1234567890" className="hover:text-[#00d9a6] transition-colors duration-300 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .text-shadow-xl {
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
        
        @media (max-width: 640px) {
          .text-4xl { font-size: 2rem; }
          .text-5xl { font-size: 2.5rem; }
          .text-6xl { font-size: 3rem; }
        }
      `}</style>
    </>
  );
};

export default WhatWeDo;
