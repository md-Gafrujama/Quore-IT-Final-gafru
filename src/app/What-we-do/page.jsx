 'use client';
  import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhatWeDo = () => {
  const scrollToLocations = () => {
    const locationsSection = document.getElementById('locations-section');
    if (locationsSection) {
      locationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <Head>
  <title>What We Do | Quore IT - Technology Recruitment & Workforce Solutions</title>
  <meta name="description" content="Explore how Quore IT connects businesses to tech talent worldwide. From recruitment to workforce solutions, we help drive digital transformation." />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="What We Do | Quore IT - Technology Recruitment & Workforce Solutions" />
  <meta property="og:description" content="We deliver global technology recruitment and workforce solutions to organizations in over 30 countries. Learn more about how we can help you scale." />
  <meta property="og:image" content="/images/what-we-do.webp" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourdomain.com/What-we-do" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="What We Do | Quore IT - Technology Recruitment & Workforce Solutions" />
  <meta name="twitter:description" content="Quore IT specializes in global tech recruitment and customized workforce solutions. Find your local recruitment partner today." />
  <meta name="twitter:image" content="/images/what-we-do.webp" />
</Head>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jobs_hero.jpg"
            alt="Candidates Hero Background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide">
            What we do
          </h1>
        </div>
      </section>

      {/* Technology Recruitment Section */}
      <div className="w-full bg-[#f4f4f4] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text content */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h1 className="text-3xl font-bold text-[#333] mb-4">Technology Recruitment</h1>
              
              <p className="text-lg text-[#333] mb-4">
                We help organisations across more than 30 countries recruit highly experienced experts on a permanent and contract basis.
              </p>
              
              <p className="text-lg text-[#333] mb-6">
                In addition, our Recruitment Solutions business provides tailored services that help companies recruit and manage their workforce more effectively, from payroll services to recruitment process outsourcing and more.
              </p>
              
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={scrollToLocations}
                  className="text-[#0066cc] text-lg hover:underline cursor-pointer text-left"
                >
                  Select your Recruitment location
                </button>
                <a href="#" className="text-[#0066cc] text-lg hover:underline cursor-pointer">
                  Find out about Workforce Solutions
                </a>
              </div>
            </div>
            
            {/* Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/images/what-we-do.webp"
                  alt="Technology Recruitment"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location/Site Section */}
      <div id="locations-section" className="w-full bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-white px-6 py-12 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left min-h-[40vh]">
          {/* Column 1 - Locations */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4 text-black/80">Choose your location</h3>
            <div className="grid grid-cols-2 gap-2 text-black/90 text-base">
              <span>Belgium</span>
              <span>Canada</span>
              <span>Germany</span>
              <span>Ireland</span>
              <span>Netherlands</span>
              <span>Poland</span>
              <span>USA</span>
              <span>United Kingdom</span>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block" />

          {/* Column 2 - Site Links */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4 text-black/80">Site</h3>
            <ul className="space-y-1 text-black/90">
              <li><a href="#" className="hover:underline">Nash Squared</a></li>
              <li><a href="#" className="hover:underline">Workforce Solutions</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        className="bg-cover bg-center w-full min-h-[60vh] flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: "url('/images/keyboard.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          How can we help?
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-4xl drop-shadow-md px-4">
          If you would like us to contact you with more information on what we do and what we can offer, please let us know.
        </p>

        <Link href="/contact">
          <button className="bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md">
            CONTACT US
          </button>
        </Link>
      </div>
    </>
  );
};

export default WhatWeDo;