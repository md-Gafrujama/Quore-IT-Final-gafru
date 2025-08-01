 'use client';
import React from 'react';
import { Metadata } from 'next';
import { FaBullseye, FaChartBar, FaGlobe,FaCogs, FaMicrosoft, FaUsers, FaUserTie } from 'react-icons/fa';
 
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
import Image from 'next/image';
import Link from 'next/link';
const articles = [
  {
    date: 'JUNE 19, 2025',
    title: 'Bridging the AI skills gap',
    image: '/images/article1.webp',
  },
  {
    date: 'JUNE 17, 2025',
    title: 'How are employers rethinking talent to keep pace with AI innovation?',
    image: '/images/article2.webp',
  },
  {
    date: 'MAY 6, 2025',
    title: 'Nurture your skills and aspirations on International Women’s Day',
    image: '/images/article3.webp',
  },
  {
    date: 'MAY 6, 2025',
    title: 'What makes a great CIO?',
    image: '/images/article4.webp',
  },
  {
    date: 'MAY 6, 2025',
    title: 'AI robots are coming. Are we ready?',
    image: '/images/article5.webp',
  },
  {
    date: 'MAY 6, 2025',
    title: 'Is diversity (even more) under threat in tech?',
    image: '/images/article6.webp',
  },
];
const cardData = [
  {
    icon: <FaCogs />,
    title: 'Tech solutions',
    description: 'We brought together complex systems across multiple countries onto one single architecture for a major financial services company.',
  },
  {
    icon: <FaMicrosoft />,
    title: 'Microsoft expertise',
    description: 'We implemented Microsoft technologies to help a major university attract and admit new students.',
  },
  {
    icon: <FaUsers />,
    title: 'Developing leaders',
    description: 'We appointed and subsequently developed a digitally savvy board for a globally recognised retailer.',
  },
  {
    icon: <FaUserTie />,
    title: 'Talent attraction',
    description: 'We recruited and managed the technology talent pipeline for the European hub of one of the world’s largest social networks.',
  },
];
const solutions = [
  {
    title: 'Solving',
    description: 'We apply technology expertise to solve complex problems',
    icon: <FaBullseye size={40} className="text-[#00d9a6]" />,
  },
  {
    title: 'Building',
    description: 'We build your capabilities and technology capacity',
    icon: <FaChartBar size={40} className="text-[#00d9a6]" />,
  },
  {
    title: 'Developing',
    description: 'We identify and develop the best global leaders',
    icon: <FaUsers size={40} className="text-[#00d9a6]" />,
  },
  {
    title: 'Connecting',
    description: 'We connect organisations with the very best global talent',
    icon: <FaGlobe size={40} className="text-[#00d9a6]" />,
  },
];

export default function WhatWeDoPage() {
  return (
    <> 
    <Navbar/>
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] ">
        <Image
          src="/images/images.png"
          alt="What we do background"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.6]"
        />
        
      </div>

      {/* Content Section */}
      <div className="px-6 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">Our Solutions</h2>
          <div className="w-10 h-1 bg-red-500 mx-auto my-2" />
          <p className="max-w-2xl mx-auto text-gray-600">
            We’re equipped with a unique network, that realises the potential where people and technology meet.
            For over three decades we’ve been helping clients solve broad and complex problems,
            building and scaling their technology and digital capability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {solutions.map((sol, index) => (
            <div key={index} className="bg-white shadow-sm p-6 rounded-lg hover:shadow-md transition duration-300">
              <div className="mb-4">{sol.icon}</div>
              <h3 className="text-lg font-bold text-gray-800">{sol.title}</h3>
              <div className="w-8 h-1 bg-teal-700 mt-1 mb-2" />
              <p className="text-gray-600">{sol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      <section className="w-full text-gray-800">
      {/* Top Section */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          Network Effect
          <span className="block w-12 h-1 bg-[#00d9a6] mx-auto mt-2"></span>
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-base md:text-lg">
          Our strength is our network. It spans 3,000 colleagues across 16 countries and provides a uniquely broad range of service capabilities, from software development and technology solutions, to talent and workforce management.
        </p>
        <p className="max-w-3xl mx-auto mt-2 text-base md:text-lg">
          We bring these together, to the unique challenges of our clients both now, and in the future.
        </p>
      </div>

      {/* Bottom Cards */}
      <div className="bg-white py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-8">
          Four examples of our work
          <div className="w-12 h-1 bg-[#00d9a6] mx-auto mt-2"></div>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {cardData.map((card, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow-sm hover:shadow-md transition">
              <div className="text-[#00d9a6] mb-4 text-3xl">{card.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h4>
              <hr className="border-[#00d9a6] w-8 mx-auto mb-3" />
              <p className="text-sm text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-gray-100 py-10 px-4">
      <h2 className="text-center text-xl font-bold text-black">Comment & Analysis</h2>
      <div className="h-1 w-10 bg-[#00d9a6] mx-auto mt-2 mb-6 rounded"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {articles.map((item, index) => (
          <div key={index} className="bg-white rounded shadow p-2">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={200}
              className="rounded-t-md w-full object-cover"
            />
            <p className="text-xs text-[#00d9a6] font-semibold mt-2 px-2">{item.date}</p>
            <h3 className="font-bold text-base px-2 pb-3 text-[#002244]">{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-[#00d9a6] text-white font-semibold px-6 py-2 rounded hover:bg-[#00c29a]">
          More News & Insights
        </button>
      </div>
    </section>
      <section className="w-full bg-gradient-to-r from-green-800 via-blue-700 to-purple-800 text-white py-20 px-4 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
        We're ready to help <span className="text-white">you</span>
      </h2>
      <p className="text-xl md:text-3xl font-light mb-8">
        build a limitless future
      </p>
      <Link href="/contact">
        <button className="px-6 py-3 border border-white rounded-md text-white hover:bg-white hover:text-black transition duration-300">
          Contact us
        </button>
      </Link>
    </section>
    <Footer/>
    </>
  );
}
