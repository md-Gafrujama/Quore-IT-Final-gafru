// pages/find-job.jsx

"use client";
   import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
// import { Link } from 'react-router-dom';
 import Image from 'next/image';

const FindJob = () => {
  return (

     <> 
   

<Head>
  <title>Find a Tech Job | Explore Global Opportunities</title>
  <meta name="description" content="Looking for your next tech career move? Find permanent, contract, and board-level opportunities across the USA, UK, Germany, and more." />
  
  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Find a Tech Job | Explore Global Opportunities" />
  <meta property="og:description" content="Take the next step in your career. Explore tech job opportunities in the USA, UK, Germany, and beyond with board-level and remote roles." />
  <meta property="og:image" content="/images/jobs_hero.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourdomain.com/find-job" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Find a Tech Job | Explore Global Opportunities" />
  <meta name="twitter:description" content="Discover the best tech roles tailored to your skills—remote, permanent, or interim. Get in touch with top recruiters." />
  <meta name="twitter:image" content="/images/jobs_hero.jpg" />
</Head>
          <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/jobs_hero.jpg" // Replace with your actual hero background image
          alt="Candidates Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide">
          Candidates
        </h1>
      </div>
    </section>

 <section className="flex flex-col items-center justify-center text-center px-4 py-12">
  <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-4">Find a Tech Job</h1>
  <p className="text-lg md:text-xl max-w-2xl mb-12 text-gray-700">
    Do you want to take the next big leap in your career? Whether you're looking for a
    permanent, contract or interim job, we can help match you with a role and a company
    that fits you.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
    <div className="flex flex-col items-center">
      <span className="text-3xl mb-2 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-transparent bg-clip-text">▼</span>
      <p className="font-extrabold text-lg">Choose your <br /> location</p>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-3xl mb-2 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-transparent bg-clip-text">▼</span>
      <p className="font-extrabold text-lg">Board Level <br /> Opportunities</p>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-3xl mb-2 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-transparent bg-clip-text">▼</span>
      <p className="font-extrabold text-lg">Get in touch</p>
    </div>
  </div>
</section>

      <div className="w-full bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white px-6 py-12 mt-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left min-h-[40vh]">
    
    {/* Column 1 */}
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

    {/* Column 2 */}
    <div>
      <h3 className="text-2xl font-extrabold mb-4 text-black/80">Site</h3>
      <ul className="space-y-1  text-black/90">
        <li>Nash Squared</li>
        <li>Workforce Solutions</li>
      </ul>
    </div>
  </div>
</div>
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
 <Link href="/Contact-us">
  <button className="cursor-pointer bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md">
    CONTACT US
  </button>
</Link>

    </div>
  
    </>
  );
};

export default FindJob;
