
'use client';
import React, { useState, useEffect, useRef } from 'react';

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [counters, setCounters] = useState({ clients: 0, placements: 0, countries: 0, years: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target === statsRef.current && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      });
    };

    // Intersection Observer for stats animation
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    if (statsRef.current) observer.observe(statsRef.current);

    window.addEventListener('scroll', handleScroll, { passive: true });
    setIsVisible(true);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) observer.disconnect();
    };
  }, [hasAnimated]);

  // Animate counters
  const animateCounters = () => {
    const targets = { clients: 500, placements: 10000, countries: 30, years: 25 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targets).forEach(key => {
      let current = 0;
      const increment = targets[key] / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    });
  };

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const locations = [
    { name: 'Belgium', flag: '🇧🇪', speciality: 'FinTech' },
    { name: 'Canada', flag: '🇨🇦', speciality: 'AI/ML' },
    { name: 'Germany', flag: '🇩🇪', speciality: 'Engineering' },
    { name: 'Ireland', flag: '🇮🇪', speciality: 'Cloud' },
    { name: 'Netherlands', flag: '🇳🇱', speciality: 'DevOps' },
    { name: 'Poland', flag: '🇵🇱', speciality: 'Software Dev' },
    { name: 'USA', flag: '🇺🇸', speciality: 'Full Stack' },
    { name: 'United Kingdom', flag: '🇬🇧', speciality: 'Cybersecurity' }
  ];

  const services = [
    {
      title: 'Permanent Recruitment',
      description: 'Find the perfect full-time technology professionals for your organization.',
      icon: '👥',
      features: ['Executive Search', 'Mid-Level Hiring', 'Graduate Programs']
    },
    {
      title: 'Contract Solutions',
      description: 'Flexible contract professionals for project-based technology needs.',
      icon: '⚡',
      features: ['Project Teams', 'Interim Solutions', 'Specialist Skills']
    },
    {
      title: 'Workforce Solutions',
      description: 'Comprehensive workforce management and strategic consulting.',
      icon: '🎯',
      features: ['RPO Services', 'Managed Services', 'Consulting']
    }
  ];

  const testimonials = [
    {
      quote: "Quore IT transformed our hiring process. Their deep understanding of technology roles is unmatched.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp",
      company: "Fortune 500 Company"
    },
    {
      quote: "The quality of candidates and speed of delivery exceeded our expectations significantly.",
      author: "Michael Chen",
      position: "VP Engineering",
      company: "Scale-up Unicorn"
    },
    {
      quote: "Their workforce solutions helped us scale our team from 50 to 500 engineers seamlessly.",
      author: "Emma Davis",
      position: "Head of Talent",
      company: "Global Enterprise"
    }
  ];

  return (
    <>
      {/* Enhanced Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
          
          {/* Animated Grid */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '100px 100px',
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          ></div>
          
          {/* Professional Accent Elements */}
          <div className="absolute top-20 left-20 w-64 h-1 bg-gradient-to-r from-green-400 to-transparent opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-64 h-1 bg-gradient-to-l from-green-400 to-transparent opacity-30"></div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center px-6 lg:px-8 max-w-6xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-400/10 border border-green-400/30 backdrop-blur-sm">
                <span className="text-green-400 text-sm font-semibold tracking-wide">GLOBAL TECHNOLOGY SOLUTIONS</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight tracking-tight">
                What We
                <span className="block font-bold bg-gradient-to-r from-green-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Deliver
                </span>
              </h1>
            </div>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Connecting exceptional technology talent with forward-thinking organizations across the globe through strategic recruitment and workforce solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
              <button 
                onClick={() => smoothScrollTo('services-section')}
                className="group px-10 py-5 bg-green-400 text-slate-900 font-semibold rounded-lg hover:bg-green-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center text-lg"
              >
                <span>GET STARTED</span>
                <svg className="ml-3 w-6 h-6 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button 
                onClick={() => smoothScrollTo('about-section')}
                className="px-10 py-5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-lg"
              >
                Learn More
              </button>
            </div>
          </div>
          
          {/* Enhanced Scroll Indicator */}
          <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex flex-col items-center space-y-3">
              <span className="text-slate-400 text-sm font-medium">Discover More</span>
              <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
                <div className="w-1 h-3 bg-green-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      
      {/* About Section */}
      <section id="about-section" className="bg-slate-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center">
                    <div className="w-12 h-0.5 bg-green-400 mr-4"></div>
                    <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">About Quore IT</span>
                  </div>
                  
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                    Technology Recruitment Excellence
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    We partner with organizations across <span className="font-semibold text-slate-900">more than 30 countries</span> to identify and recruit highly experienced technology professionals on both permanent and contract basis.
                  </p>
                  
                  <p>
                    Our comprehensive <span className="font-semibold text-green-600">Recruitment Solutions</span> business delivers tailored services that empower companies to recruit and manage their technology workforce more effectively in an increasingly competitive market.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                  <div className="group p-6 rounded-xl border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Global Presence</h3>
                    <p className="text-slate-600 text-sm">Strategic locations worldwide to serve your talent needs locally.</p>
                  </div>
                  
                  <div className="group p-6 rounded-xl border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Proven Results</h3>
                    <p className="text-slate-600 text-sm">Track record of successful placements and long-term partnerships.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Visual Element */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 p-12 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-8 w-full max-w-sm">
                      {[...Array(9)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`aspect-square rounded-lg ${
                            i === 4 ? 'bg-green-400' : i === 1 ? 'bg-blue-400' : i === 7 ? 'bg-indigo-400' : 'bg-slate-200'
                          } animate-pulse`}
                          style={{ animationDelay: `${i * 200}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="px-12 py-8 bg-slate-50">
                    <div className="space-y-3">
                      <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                      <div className="h-4 bg-green-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-green-400 mr-4"></div>
              <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Our Services</span>
              <div className="w-12 h-0.5 bg-green-400 ml-4"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From permanent placements to flexible workforce solutions, we deliver tailored services that meet your unique technology talent needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  hoveredService === index 
                    ? 'border-green-200 shadow-xl bg-green-50 transform -translate-y-2' 
                    : 'border-slate-200 hover:border-green-200 hover:shadow-lg bg-white'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center justify-center text-sm text-slate-500">
                        <svg className={`w-4 h-4 mr-2 ${hoveredService === index ? 'text-green-500' : 'text-slate-400'} transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className={`mt-6 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    hoveredService === index 
                      ? 'bg-green-400 text-white shadow-lg' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-900 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-green-400 mr-4"></div>
              <span className="text-green-400 font-semibold text-sm tracking-wider uppercase">Our Process</span>
              <div className="w-12 h-0.5 bg-green-400 ml-4"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              How We Work
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our proven methodology ensures we deliver the right talent solutions for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Understand", description: "We analyze your requirements, culture, and technical needs", icon: "🔍" },
              { step: "02", title: "Source", description: "Leverage our global network to identify top talent", icon: "🌐" },
              { step: "03", title: "Evaluate", description: "Rigorous assessment of technical and cultural fit", icon: "⚖️" },
              { step: "04", title: "Deliver", description: "Present qualified candidates and support integration", icon: "🚀" }
            ].map((process, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-green-400/10 border-2 border-green-400/30 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-400/20 group-hover:border-green-400/50 transition-all duration-300">
                    <span className="text-3xl">{process.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-sm">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 -right-8 w-16 h-0.5 bg-green-400/30"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{process.title}</h3>
                <p className="text-slate-400 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-green-400 mr-4"></div>
              <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Industry Expertise</span>
              <div className="w-12 h-0.5 bg-green-400 ml-4"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Technology Sectors We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our specialized teams have deep expertise across all major technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Software Development", 
                skills: ["Full-Stack Development", "Mobile Apps", "DevOps", "Cloud Architecture"], 
                icon: "💻", 
                gradient: "from-blue-400 to-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200"
              },
              { 
                title: "Data & AI", 
                skills: ["Data Science", "Machine Learning", "AI Engineering", "Big Data"], 
                icon: "🤖", 
                gradient: "from-purple-400 to-purple-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200"
              },
              { 
                title: "Cybersecurity", 
                skills: ["Security Engineering", "Penetration Testing", "Compliance", "Risk Management"], 
                icon: "🔐", 
                gradient: "from-red-400 to-red-600",
                bgColor: "bg-red-50",
                borderColor: "border-red-200"
              },
              { 
                title: "Infrastructure", 
                skills: ["Cloud Engineering", "Site Reliability", "Network Architecture", "Platform Engineering"], 
                icon: "⚙️", 
                gradient: "from-green-400 to-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200"
              },
              { 
                title: "Product & Design", 
                skills: ["Product Management", "UX/UI Design", "Product Marketing", "Design Systems"], 
                icon: "🎨", 
                gradient: "from-indigo-400 to-indigo-600",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-200"
              },
              { 
                title: "Financial Technology", 
                skills: ["Blockchain", "Trading Systems", "RegTech", "Payment Solutions"], 
                icon: "💳", 
                gradient: "from-yellow-400 to-yellow-600",
                bgColor: "bg-yellow-50",
                borderColor: "border-yellow-200"
              }
            ].map((sector, index) => (
              <div key={index} className={`group bg-white p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${sector.borderColor} hover:${sector.borderColor}`}>
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${sector.gradient} flex items-center justify-center text-2xl`}>
                    {sector.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{sector.title}</h3>
                </div>
                <div className="space-y-3">
                  {sector.skills.map((skill, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-600">
                      <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 bg-gradient-to-r ${sector.gradient}`}></div>
                      {skill}
                    </div>
                  ))}
                </div>
                <div className={`mt-6 p-4 rounded-xl ${sector.bgColor} group-hover:${sector.bgColor} transition-all duration-300`}>
                  <p className="text-xs text-slate-500 text-center font-medium">
                    {Math.floor(Math.random() * 50 + 50)}+ Active Placements
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-green-400 mr-4"></div>
              <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
              <div className="w-12 h-0.5 bg-green-400 ml-4"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Your Success is Our Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Deep Industry Knowledge",
                  description: "Our consultants are technology professionals who understand the nuances of each role and the evolving tech landscape.",
                  icon: "🎓",
                  stat: "15+ Years Average Experience"
                },
                {
                  title: "Global Network, Local Expertise",
                  description: "With teams in 30+ countries, we combine global reach with deep local market knowledge and cultural understanding.",
                  icon: "🌍",
                  stat: "30+ Global Offices"
                },
                {
                  title: "Quality Over Quantity",
                  description: "We focus on finding the right fit, not just filling positions. Our thorough vetting process ensures long-term success.",
                  icon: "✨",
                  stat: "95% Retention Rate"
                },
                {
                  title: "Partnership Approach",
                  description: "We become an extension of your team, understanding your culture, goals, and long-term vision for sustainable growth.",
                  icon: "🤝",
                  stat: "85% Repeat Clients"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center text-2xl group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-700 transition-colors">{benefit.title}</h3>
                    <p className="text-slate-600 mb-3">{benefit.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {benefit.stat}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Success Metrics</h3>
                  <p className="text-slate-600">Proven track record of excellence</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                    <div className="text-sm text-slate-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-1">72hrs</div>
                    <div className="text-sm text-slate-600">Average Response Time</div>
                  </div>
                  <div className="text-center p-4 bg-indigo-50 rounded-xl">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">3x</div>
                    <div className="text-sm text-slate-600">Faster Hiring</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                    <div className="text-sm text-slate-600">Global Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="locations-section" className="bg-slate-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-green-400 mr-4"></div>
              <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Global Network</span>
              <div className="w-12 h-0.5 bg-green-400 ml-4"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Our Worldwide Presence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Connect with our specialized recruitment teams across key technology markets globally
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Location Grid */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Select Your Market</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {locations.map((location, index) => (
                  <div
                    key={location.name}
                    className={`group relative p-6 rounded-xl cursor-pointer transition-all duration-300 border ${
                      hoveredLocation === location.name 
                        ? 'bg-green-50 border-green-200 shadow-lg transform -translate-y-1' 
                        : 'bg-white border-slate-200 hover:border-green-200 hover:shadow-md'
                    }`}
                    onMouseEnter={() => setHoveredLocation(location.name)}
                    onMouseLeave={() => setHoveredLocation(null)}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">{location.flag}</div>
                      <div className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-green-900 transition-colors">
                        {location.name}
                      </div>
                      <div className={`text-xs ${
                        hoveredLocation === location.name ? 'text-green-600' : 'text-slate-500'
                      } transition-colors`}>
                        {location.speciality}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Links */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Brands</h3>
              
              <div className="space-y-6">
                <a href="#" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-xl mb-2 group-hover:text-green-900">Nash Squared</h4>
                      <p className="text-slate-600 text-sm mb-4">Specialized technology recruitment and talent acquisition solutions</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Executive Search</span>
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">Contract</span>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-green-600 transform transition-all duration-300 group-hover:translate-x-1 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
                
                <a href="#" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-xl mb-2 group-hover:text-green-900">Workforce Solutions</h4>
                      <p className="text-slate-600 text-sm mb-4">Comprehensive workforce management and strategic consulting services</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">RPO</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Consulting</span>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-green-600 transform transition-all duration-300 group-hover:translate-x-1 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-green-400 mr-4"></div>
              <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Client Success</span>
              <div className="w-12 h-0.5 bg-green-400 ml-4"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl relative hover:shadow-lg transition-all duration-300 group">
                <svg className="absolute top-6 left-6 w-8 h-8 text-green-400 opacity-50 group-hover:opacity-70 transition-opacity" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                </svg>
                <div className="pt-8">
                  <p className="text-slate-700 text-lg mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-slate-200 pt-4">
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-slate-600 text-sm">{testimonial.position}</div>
                    <div className="text-green-600 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-slate-900 to-blue-900/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/5 via-transparent to-transparent"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-400/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-indigo-400/5 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-400/10 border border-green-400/20 backdrop-blur-sm">
                  <span className="text-green-400 text-sm font-semibold tracking-wide">READY TO GET STARTED?</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Let's Build Your
                  <span className="block text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-indigo-400 bg-clip-text">
                    Dream Team
                  </span>
                </h2>
              </div>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Connect with our expert consultants to discuss your technology recruitment needs and discover how we can help you scale your organization.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
                <button className="group px-12 py-6 bg-green-400 text-slate-900 font-bold rounded-xl hover:bg-green-300 transition-all duration-300 shadow-2xl hover:shadow-green-400/25 transform hover:-translate-y-2 flex items-center text-xl">
                  <span>START YOUR SEARCH</span>
                  <svg className="ml-4 w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                <button className="px-12 py-6 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm text-xl">
                  Schedule Consultation
                </button>
              </div>
              
              {/* Enhanced Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-5xl mx-auto">
                <a href="mailto:info@quoreit.com" className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-green-400/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-400/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white text-lg mb-3">Email Us</h4>
                  <p className="text-slate-400 text-sm text-center leading-relaxed">Get detailed information about our services and how we can help</p>
                </a>
                
                <a href="tel:+1234567890" className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-blue-400/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-400/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white text-lg mb-3">Call Us</h4>
                  <p className="text-slate-400 text-sm text-center leading-relaxed">Speak directly with our recruitment experts for immediate assistance</p>
                </a>
                
                <button 
                  onClick={() => smoothScrollTo('locations-section')} 
                  className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-indigo-400/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-400/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white text-lg mb-3">Find Local Office</h4>
                  <p className="text-slate-400 text-sm text-center leading-relaxed">Connect with specialized teams in your region worldwide</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

   

     
    </>
  );
};

export default WhatWeDo;
