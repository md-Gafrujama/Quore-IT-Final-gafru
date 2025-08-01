'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
const newsItems = [
  {
    date: 'May 15, 2025',
    title: '2025 Digital Leadership Report Launch Webinar – 10th June 2025',
    image: '/news/news1.png',
  },
  {
    date: 'May 7, 2025',
    title:
      'AI creates the world’s biggest tech skills shortage in over 15 years, finds Nash Squared/Harvey Nash report',
    image: '/news/news2.png',
  },
  {
    date: 'December 23, 2024',
    title: 'PAG acquires NashTech, a subsidiary of Nash Squared',
    image: '/news/news3.png',
  },
  {
    date: 'October 25, 2024',
    title: 'NashTech expands global delivery with new innovation hub in Vietnam',
    image: '/news/news4.png',
  },
  {
    date: 'September 10, 2024',
    title: 'New tech trends reshaping digital transformation in 2025',
    image: '/news/news5.png',
  },
  {
    date: 'August 30, 2024',
    title: 'Nash Squared celebrates 50 years of technology excellence',
    image: '/news/news6.png',
  },
]

export default function CompanyNews() {
  return (<>
  <Navbar/>
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-2">
          Company News
        </h2>
        <div className="w-20 h-1 bg-[#00d9a6] mx-auto mb-10 rounded"></div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
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
          ))}
        </div>
      </div>
    </section>
<Footer/>
    </>
  )
}