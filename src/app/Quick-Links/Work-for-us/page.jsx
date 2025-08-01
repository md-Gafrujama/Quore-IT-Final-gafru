

'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";

const workforUs = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Next.js Image Optimization */}
        <div className="absolute inset-0">
          <Image
            src="/images/workus.jpg"
            alt="Nash Squared Career Background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>
        
       
        
        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Teal Frame with "Work for us" */}
          <div className="relative">
            <div className=" p-8 md:p-12 rounded-lg shadow-2xl max-w-2xl mx-auto">
              <div className=" bg-opacity-90 p-6 md:p-8 rounded-sm">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center">
                  Work For Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Career Adventure Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Time for an adventure?
              </h2>
              
              {/* Red underline */}
              <div className="w-16 h-1 bg-red-600 mx-auto mb-8"></div>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
                Visit our dedicated careers website to find why a career with Nash 
                Squared can help you build a limitless future.
              </p>
              
              <Link 
                href="/careers" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Visit our Careers Website
              </Link>
            </div>
          </div>

          {/* Brands Section */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Nash Squared Brands
            </h3>
            
            {/* Red underline */}
            <div className="w-16 h-1 bg-red-600 mx-auto mb-12"></div>
            
            {/* Brand Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
              {/* Quore IT */}
              <Link 
                href="https://www.harveynash.com" 
                className="hover:opacity-80 transition-opacity duration-300 hover:scale-105 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-32 h-20 md:w-40 md:h-24 relative">
                  <Image
                    src="/images/quore-it.jpg"
                    alt="Quore IT Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              </Link>

              {/* FLEXHUIS */}
              <Link 
                href="https://www.flexhuisglobal.com/uk/" 
                className="hover:opacity-80 transition-opacity duration-300 hover:scale-105 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-32 h-20 md:w-40 md:h-24 relative">
                  <Image
                    src="/images/flex.png"
                    alt="FLEXHUIS Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              </Link>

              {/* Spinks */}
              <Link 
                href="hhttps://www.wearespinks.com/" 
                className="hover:opacity-80 transition-opacity duration-300 hover:scale-105 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-32 h-20 md:w-40 md:h-24 relative">
                  <Image
                    src="/images/spinks.jpg"
                    alt="Spinks Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              </Link>

              {/* Crimson */}
              <Link 
                href="https://www.crimson.co.uk/" 
                className="hover:opacity-80 transition-opacity duration-300 hover:scale-105 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-32 h-20 md:w-40 md:h-24 relative">
                  <Image
                    src="/images/crimson.jpg"
                    alt="Crimson Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              </Link>

              {/* Talent it */}
              <Link 
                href="https://talent-it.be/nl" 
                className="hover:opacity-80 transition-opacity duration-300 hover:scale-105 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-32 h-20 md:w-40 md:h-24 relative">
                  <Image
                    src="/images/talent.jpg"
                    alt="Talent IT Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default workforUs;