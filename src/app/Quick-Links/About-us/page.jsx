 'use client';
import React from 'react';
import Navbar from '@/components/newNavbar';
import Footer from '@/components/newFooter';
import { FaGlobe, FaUsers,FaLongArrowAltRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
 const aboutCards = [
  {
    title: 'Section 172 statement',
    image: '/images/about1.jpeg',
    text: 'This section describes how the Directors have had regard to the matters set out in section 172(1)(a) to (f) Companies Act 2016...',
    link: '/Policies/Section-172-Statement',
  },
  {
    title: 'Supplier Code of Conduct',
    image: '/images/about2.jpg',
    text: "Nash Squared including its affiliates ('Harvey Nash') engages internationally with suppliers for various services.",
    link: '/Policies/Supplier-Code',
  },
  {
    title: 'Environment',
    image: '/images/about3.jpg',
    text: 'Our operations, being services, are inherently less damaging to the environment than other business sectors.',
    link: '/Policies/Environment',
  },
  {
    title: 'Modern Slavery Statement for Nash Squared',
    image: '/images/blur-lights.jpg',
    text: '',
    link: '/Policies/Modern-Slavery-Statement',
  },
  {
    title: 'Vision & Values',
    image: '/images/city-blur.jpg',
    text: '',
    link: '/Policies/Vision-Values',
  },
  {
    title: 'Carbon Reduction Plan',
    image: '/images/co2.jpg',
    text: 'This Carbon Reduction Plan has been developed in accordance with requirements of the UK government.',
    link: '/Policies/Carbon-Reduction-Plan',
  },
];

const AboutUsPage = () => {
  return (
     <> 
      <Navbar />
 <div className="relative w-full h-[85vh] ">
        <Image
          src="/images/images1.png"
          alt="What we do background"
          layout="fill"
          objectFit="cover"
          className="brightness-[1]"
        />
        
      </div>
      {/* Our Purpose */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our purpose</h2>
        <div className="w-16 h-1 bg-[#00d9a6] mx-auto mb-6" />
        <p className="text-lg max-w-3xl mx-auto mb-4">
          We build limitless futures, by bringing together great people and technology.
        </p>
        <p className="text-base max-w-4xl mx-auto text-gray-700">
          We’re Nash Squared, the leading global provider of technology and talent solutions. 
          We’re equipped with a unique network, that realises the potential where people and technology meet.
        </p>
      </section>

      <hr className="border-gray-300" />

      {/* Why we exist */}
      <section className="py-16 px-4">
        <h3 className="text-center text-2xl font-bold mb-4">Why we exist</h3>
        <div className="w-12 h-1 bg-[#00d9a6] mx-auto mb-10" />

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left block */}
          <div className="flex gap-4">
            <div className="text-3xl text-[#00d9a6]">
              <FaGlobe />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800 border-b-2 border-[#00d9a6] inline-block mb-2">
                The world is changing
              </h4>
              <p className="text-gray-700 mb-2">
                As digital becomes pervasive, the boundaries blur between business, technology and markets.
              </p>
              <p className="text-gray-700">
                We help our clients realise their ambitions where talent and technology meet.
              </p>
            </div>
          </div>

          {/* Right block */}
          <div className="flex gap-4">
            <div className="text-3xl text-[#00d9a6]">
              <FaUsers />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800 border-b-2 border-[#00d9a6] inline-block mb-2">
                Where technology and talent meet
              </h4>
              <p className="text-gray-700 mb-2">
                We partner with organisations to realise the value from their people and technology.
              </p>
              <p className="text-gray-700">
                We use our global network to build digitally savvy, agile organisations.
              </p>
            </div>
          </div>
        </div>
      </section>
    <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-200 py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="font-semibold text-sm text-gray-700 mb-2">Bev White, CEO</h4>
            <div className="border-t-4 border-[#00d9a6] w-10 mb-4"></div>
            <p className="font-bold text-xl md:text-2xl leading-relaxed text-gray-800 mb-6">
              “Nash Squared occupy a very special place in the world. We have such an impact on people’s lives and careers, and the organisations and communities we work with. It’s a responsibility we take very seriously.”
            </p>
            <a href="#" className="text-[#00d9a6] font-semibold hover:underline flex items-center">
              Meet our Executive Council <FaLongArrowAltRight className="ml-2" />
            </a>
          </div>
          <div className="flex justify-center">
            <div className="w-60 h-60 bg-gradient-to-br from-[#00d9a6] to-purple-400 rounded-full flex items-center justify-center">
              <div className="w-52 h-52 bg-white rounded-full overflow-hidden">
                {/* Replace with your own <Image /> or <img src="..." /> if needed */}
                <img
                  src="/images/ceo.webp"
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Network Stats Section */}
      <section className="py-16 bg-white text-center">
        <h3 className="text-xl font-semibold mb-6">Our Network</h3>
        <div className="w-10 h-1 bg-[#00d9a6] mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            { title: "10,000+", subtitle: "Tech solutions" },
            { title: "£1.3bn", subtitle: "Billed revenue per annum" },
            { title: "500,000+", subtitle: "Placements" },
            { title: "3,300+", subtitle: "Colleagues worldwide" },
            { title: "48", subtitle: "Offices" },
            { title: "16", subtitle: "Countries" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-md shadow-sm text-left"
            >
              <h4 className="text-2xl font-bold text-black">{item.title}</h4>
              <div className="w-6 border-t-2 border-[#00d9a6] my-2"></div>
              <p className="text-gray-700">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
         {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-200 via-purple-200 to-indigo-200 py-16 text-center text-gray-800">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('/your-background-image.jpg')" }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Everyone is included</h1>
          <p className="text-lg md:text-xl mb-6">
            Our ambition is to be an organization that champions equality, diversity and inclusion in every market, sector and geography we work in
          </p>
          <a href="#" className="text-blue-700 font-semibold underline hover:text-blue-900">
            More about Equality, Diversity & Inclusion &gt;
          </a>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-red-600">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Value Cards */}
            {[
              {
                title: 'Open',
                desc: 'We are consistently honest, open and straightforward. By doing so we remove barriers and focus on the right outcomes.'
              },
              {
                title: 'Human',
                desc: 'We trust, respect and care for one another and those around us. It is our ability to connect and to understand the value each person brings that makes us special.'
              },
              {
                title: 'Collaborative',
                desc: 'We believe in the power of working together. We listen and evolve together by utilising our expertise to produce exceptional outcomes.'
              },
              {
                title: 'Hungry',
                desc: 'We constantly strive to identify opportunities, deliver outstanding results and inspire others.'
              },
              // {
              //   title: 'Entrepreneurial',
              //   desc: 'We are courageous, we challenge ideas, we pursue excellence in all we do. We are ambitious, we are innovators and we are change agents.'
              // }
            ].map((value, idx) => (
              <div key={idx} className="bg-white shadow-sm p-6 rounded-lg border">
                <h3 className="text-lg font-bold text-cyan-900 mb-2">{value.title}</h3>
                <div className="w-10 border-t-4 border-cyan-900 mb-4"></div>
                <p className="text-sm text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-2">More about us</h2>
        <div className="w-24 h-1 bg-red-500 mx-auto mb-8 rounded" />

        <p className="text-center text-gray-700 mb-4">
          Nash Squared are a global consultancy providing world class technology solutions and expertise.
        </p>
        <p className="text-center text-gray-700 mb-10">
          Today, our unique network is being leveraged by companies across every industry for the most challenging and mission–critical
          digital transformation engagements. Our people can make your digital transformation pipeline become a reality.
        </p>
   <div className="grid md:grid-cols-3 gap-6">
      {aboutCards.map((card, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
          <Link href={card.link}>
            <Image
              src={card.image}
              alt={card.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-4">
            <h3 className="text-blue-700 font-semibold mb-2">{card.title}</h3>
            {card.text && <p className="text-sm text-gray-700">{card.text}</p>}
          </div>
        </div>
      ))}
    </div>
      </div>
       <div className="w-full h-[100px] md:h-[200px] flex items-center justify-center bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 text-white text-center px-4">
      <div>
        <h1 className="text-2xl md:text-4xl font-light leading-snug">
          <span className="font-bold">We’re ready to help you</span> build a limitless future
        </h1>
        <button className="mt-6 px-6 py-2 border border-white rounded-md text-white hover:bg-white hover:text-black transition duration-300">
          Contact us
        </button>
      </div>
    </div>
      <Footer />
  </>
  );
};

export default AboutUsPage;
