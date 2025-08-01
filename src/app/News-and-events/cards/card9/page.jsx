 'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const WhatWeDo = () => {
  const scrollToLocations = () => {
    const locationsSection = document.getElementById('locations-section');
    if (locationsSection) {
      locationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Harvey Nash",
    "description": "Technology recruitment services across 30+ countries providing permanent and contract staffing solutions",
    "url": "https://www.harveynash.co.uk",
    "serviceType": "Technology Recruitment",
    "areaServed": ["Belgium", "Canada", "Germany", "Ireland", "Netherlands", "Poland", "USA", "United Kingdom"],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "/Contact-us"
    }
  };

  return (
    <>
      <Head>
        <title>What We Do - Technology Recruitment Services | Harvey Nash</title>
        <meta 
          name="description" 
          content="Harvey Nash provides technology recruitment services across 30+ countries. We help organizations recruit experienced IT professionals on permanent and contract basis with tailored workforce solutions."
        />
        <meta name="keywords" content="technology recruitment, IT staffing, permanent recruitment, contract recruitment, workforce solutions, recruitment process outsourcing" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="What We Do - Technology Recruitment Services | Harvey Nash" />
        <meta property="og:description" content="Harvey Nash provides technology recruitment services across 30+ countries. We help organizations recruit experienced IT professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/what-we-do.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What We Do - Technology Recruitment Services | Harvey Nash" />
        <meta name="twitter:description" content="Harvey Nash provides technology recruitment services across 30+ countries." />
        <link rel="canonical" href="https://www.harveynash.co.uk/what-we-do" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center overflow-hidden mt-20"
        role="banner"
        aria-labelledby="hero-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jobs_hero.jpg"
            alt="Technology recruitment professionals working together in modern office environment"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
            loading="eager"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 
            id="hero-heading"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide"
          >
            What we do
          </h1>
        </div>
      </section>

      {/* Technology Recruitment Section */}
      <section 
        className="w-full bg-[#f4f4f4] py-8"
        aria-labelledby="tech-recruitment-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text content */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 
                id="tech-recruitment-heading"
                className="text-3xl font-bold text-[#333] mb-4"
              >
                Technology Recruitment
              </h2>
              
              <p className="text-lg text-[#333] mb-4">
                We help organisations across more than 30 countries recruit highly experienced experts on a permanent and contract basis.
              </p>
              
              <p className="text-lg text-[#333] mb-6">
                In addition, our Recruitment Solutions business provides tailored services that help companies recruit and manage their workforce more effectively, from payroll services to recruitment process outsourcing and more.
              </p>
              
              <nav className="flex flex-col space-y-3" aria-label="Quick navigation">
                <button 
                  onClick={scrollToLocations}
                  className="text-[#0066cc] text-lg hover:underline cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:ring-offset-2 rounded"
                  aria-describedby="locations-description"
                >
                  Select your Recruitment location
                </button>
                <span id="locations-description" className="sr-only">
                  Navigate to our global locations section below
                </span>
                
                <Link 
                  href="https://www.harveynash.co.uk/talent-solutions"
                  className="text-[#0066cc] text-lg hover:underline focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:ring-offset-2 rounded"
                  rel="noopener"
                  target="_blank"
                  aria-label="Find out about Workforce Solutions (opens in new tab)"
                >
                  Find out about Workforce Solutions
                </Link>
              </nav>
            </div>
            
            {/* Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/images/what-we-do.webp"
                  alt="Professional technology recruitment consultants collaborating on candidate placement strategies"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location/Site Section */}
      <section 
        id="locations-section" 
        className="w-full bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-white px-6 py-12"
        aria-labelledby="locations-heading"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left min-h-[40vh]">
          {/* Column 1 - Locations */}
          <div>
            <h3 
              id="locations-heading"
              className="text-2xl font-extrabold mb-4 text-black/80"
            >
              Choose your location
            </h3>
            <nav 
              className="grid grid-cols-2 gap-2 text-black/90 text-base"
              aria-label="Global locations"
            >
              <Link 
                href="https://www.harveynash.be/"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                rel="noopener"
                target="_blank"
                aria-label="Harvey Nash Belgium (opens in new tab)"
              >
                Belgium
              </Link>
              <Link 
                href="https://www.harveynashusa.com/"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                rel="noopener"
                target="_blank"
                aria-label="Harvey Nash Canada (opens in new tab)"
              >
                Canada
              </Link>
              <Link 
                href="https://www.harveynash.de/"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                rel="noopener"
                target="_blank"
                aria-label="Harvey Nash Germany (opens in new tab)"
              >
                Germany
              </Link>
              <Link 
                href="https://www.harveynash.ie/"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                rel="noopener"
                target="_blank"
                aria-label="Harvey Nash Ireland (opens in new tab)"
              >
                Ireland
              </Link>
              <Link 
                href="https://www.harveynash.nl/"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                rel="noopener"
                target="_blank"
                aria-label="Harvey Nash Netherlands (opens in new tab)"
              >
                Netherlands
              </Link>
              <Link 
                href="https://www.harveynash.pl/"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                rel="noopener"
                target="_blank"
                aria-label="Harvey Nash Poland (opens in new tab)"
              >
                Poland
              </Link>
              <Link 
                href="https://www.harveynashusa.com/"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                rel="noopener"
                target="_blank"
                aria-label="Harvey Nash USA (opens in new tab)"
              >
                USA
              </Link>
              <Link 
                href="https://www.harveynash.co.uk/"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                rel="noopener"
                target="_blank"
                aria-label="Harvey Nash United Kingdom (opens in new tab)"
              >
                United Kingdom
              </Link>
            </nav>
          </div>

          {/* Spacer */}
          <div className="hidden md:block" aria-hidden="true" />

          {/* Column 2 - Site Links */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4 text-black/80">
              Related Sites
            </h3>
            <nav aria-label="Related company sites">
              <ul className="space-y-1 text-black/90">
                <li>
                  <Link 
                    href="https://www.nashsquared.com/"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                    rel="noopener"
                    target="_blank"
                    aria-label="Nash Squared (opens in new tab)"
                  >
                    Nash Squared
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://www.flexhuisglobal.com/uk/"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                    rel="noopener"
                    target="_blank"
                    aria-label="Workforce Solutions (opens in new tab)"
                  >
                    Workforce Solutions
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="bg-cover bg-center w-full min-h-[60vh] flex flex-col justify-center items-center text-white text-center relative"
        style={{ backgroundImage: "url('/images/keyboard.jpg')" }}
        aria-labelledby="contact-heading"
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
        
        <div className="relative z-10">
          <h2 
            id="contact-heading"
            className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          >
            How can we help?
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-4xl drop-shadow-md px-4">
            If you would like us to contact you with more information on what we do and what we can offer, please let us know.
          </p>

          <Link 
            href="/Contact-us"
            className="inline-block bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 text-black"
            aria-label="Contact us to learn more about our services"
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;