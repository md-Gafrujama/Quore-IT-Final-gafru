'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
 const newsItems = [
  {
    date: 'June 19, 2025',
    title: 'Bridging the AI skills gap',
    image: '/images/ai1.jpg',
    link: '/Insights/Parliamentary-Tech-Champions/Baroness-smith-of-llanfaes',
  },
  {
    date: 'June 17, 2025',
    title: 'How are employers rethinking talent to keep pace with AI innovation?',
    image: '/images/ai2.jpg',
    link: '/Insights/Parliamentary-Tech-Champions/Baroness-smith-of-llanfaes',
  },
  {
    date: 'March 10, 2025',
    title: 'Nurture your skills and aspirations on International Women’s Day',
    image: '/images/ai3.jpg',
    link: '/Insights/Parliamentary-Tech-Champions/Baroness-smith-of-llanfaes',
  },
  {
    date: 'December 16, 2024',
    title: 'What makes a great CIO?',
    image: '/images/ai1.jpg',
    link: '/Insights/Parliamentary-Tech-Champions/Baroness-smith-of-llanfaes',
  },
  {
    date: 'November 7, 2024',
    title: 'AI robots are coming. Are we ready?',
    image: '/images/ai1.jpg',
    link: '/Insights/Parliamentary-Tech-Champions/Baroness-smith-of-llanfaes',
  },
  {
    date: 'October 17, 2024',
    title: 'Is diversity (even more) under threat in tech?',
    image: '/images/ai1.jpg',
    link: '/Insights/Parliamentary-Tech-Champions/Baroness-smith-of-llanfaes',
  },
];


export default function Comment() {
  return (<>
  <Navbar/>
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-2">
          Comment & Analysis
        </h2>
        <div className="w-20 h-1 bg-[#00d9a6] mx-auto mb-10 rounded"></div>

        <div className="grid md:grid-cols-3 gap-6">
  {newsItems.map((item, index) => (
    <Link key={index} href={item.link}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={280}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-[#00d9a6] font-semibold uppercase mb-2">
            {item.date.toUpperCase()}
          </p>
          <h3 className="text-black font-bold text-lg leading-snug">
            {item.title}
          </h3>
        </div>
      </div>
    </Link>
  ))}
</div>

      </div>
    </section>
<Footer/>
    </>
  )
}