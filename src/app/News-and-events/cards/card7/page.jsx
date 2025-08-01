 'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const Card7 = () => {
  const cards = [
    {
      id: 'card1',
      image: '/images/card1.webp',
      title: 'Egyptian HVN.TV – Beware of entity unlawfully trying associate with us',
      link: '/News-and-events/cards/card1',
      alt: 'Warning notice about Egyptian HVN.TV entity attempting unauthorized association with Harvey Nash'
    },
    {
      id: 'card2',
      image: '/images/card2.webp',
      title: "Nash Squared CEO, Bev White shortlisted for Computer Weekly's 50 Most Influential Women in UK Tech",
      link: '/News-and-events/cards/card2',
      alt: 'Bev White, Nash Squared CEO, recognized among most influential women in UK technology sector'
    },
    {
      id: 'card3',
      image: '/images/card3.webp',
      title: 'Where are all the technologists? Talent shortages and what to do about them?',
      link: '/News-and-events/cards/card3',
      alt: 'Technology talent shortage analysis and solutions for the recruitment industry'
    },
    {
      id: 'card4',
      image: '/images/card4.webp',
      title: 'Rachel Watts joins Harvey Nash Group as Global Marketing Director',
      link: '/News-and-events/cards/card4',
      alt: 'Rachel Watts appointment announcement as Global Marketing Director at Harvey Nash Group'
    },
    {
      id: 'card5',
      image: '/images/card5.webp',
      title: 'Harvey Nash Group pledge to use renewable energy by 2023',
      link: '/News-and-events/cards/card5',
      alt: 'Harvey Nash Group sustainability commitment to renewable energy transition by 2023'
    },
    {
      id: 'card6',
      image: '/images/card6.webp',
      title: 'Harvey Nash appoints cyber expert as Global CISO',
      link: '/News-and-events/cards/card6',
      alt: 'Harvey Nash cybersecurity leadership appointment of new Global Chief Information Security Officer'
    },
  ];

  const isExternal = (url) => url?.startsWith('http') || false;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Harvey Nash wins prestigious Best Company to Work for Award",
    "datePublished": "2023-11-26T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "Harvey Nash Group"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Harvey Nash Group",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/harvey-nash-logo.png"
      }
    },
    "image": "/images/card7.webp",
    "description": "Harvey Nash wins Best Company to Work for Award from the Recruitment and Employment Confederation in the 50+ staff employer category.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "/News-and-events/cards/card7"
    }
  };

  return (
    <>
      <Head>
        <title>Harvey Nash Wins Best Company to Work for Award 2023 | Harvey Nash Group</title>
        <meta 
          name="description" 
          content="Harvey Nash wins prestigious Best Company to Work for Award from UK's Recruitment and Employment Confederation. Recognized for putting people first, career development, and inclusive workplace culture." 
        />
        <meta name="keywords" content="Harvey Nash, Best Company to Work for Award, Recruitment and Employment Confederation, technology recruitment, workplace culture, employee benefits" />
        <meta property="og:title" content="Harvey Nash Wins Best Company to Work for Award 2023" />
        <meta property="og:description" content="Harvey Nash recognized as UK's leading large employer in recruitment sector for dedication to people-first culture and innovative employee development." />
        <meta property="og:image" content="/images/card7.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="/News-and-events/cards/card7" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harvey Nash Wins Best Company to Work for Award 2023" />
        <meta name="twitter:description" content="Harvey Nash recognized for outstanding workplace culture and employee development programs." />
        <meta name="twitter:image" content="/images/card7.webp" />
        <link rel="canonical" href="/News-and-events/cards/card7" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <article>
        {/* Hero Section */}
        <section 
          className="relative h-96 flex items-center justify-center overflow-hidden mt-20"
          aria-label="News and Events Hero Section"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/news.webp"
              alt="Harvey Nash news and events hero background featuring corporate imagery"
              fill
              quality={85}
              priority
              className="object-cover object-center"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide">
              News and Events
            </h1>
          </div>
        </section>

        {/* Main Article Content */}
        <main className="px-6 py-12 max-w-3xl mx-auto text-gray-800">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-800">
              Harvey Nash wins prestigious Best Company to Work for Award
            </h1>
            <time 
              dateTime="2023-11-26" 
              className="text-gray-600 text-sm font-medium"
            >
              Published: November 26, 2023
            </time>
          </header>

          <div className="mb-8">
            <Image
              src="/images/card7.webp"
              alt="Harvey Nash team celebrating their Best Company to Work for Award win at the Recruitment and Employment Confederation ceremony"
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-full"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="mb-4 text-lg leading-relaxed">
              <strong>London, 26th November</strong> – Harvey Nash, the technology recruitment division of Harvey Nash Group, has won a prestigious award from the UK's leading recruitment sector body, the Recruitment and Employment Confederation.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              Winning the <strong>Best Company to Work for Award</strong> in the 50+ staff employer category, Harvey Nash beat stiff competition to be recognised as the UK's leading large employer in the recruitment sector.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
                What Made Harvey Nash Stand Out
              </h2>
              <p className="text-lg mb-4">Harvey Nash's award nomination highlighted:</p>
              
              <ul className="list-disc list-inside space-y-3 mb-6 text-lg leading-relaxed pl-4">
                <li>
                  <strong>People-First Culture:</strong> A dedication to putting its people first in all business decisions
                </li>
                <li>
                  <strong>Career Development:</strong> A major commitment to personal development, including structured career paths and innovative training such as bite-sized 'HIIT' skills development sessions
                </li>
                <li>
                  <strong>Employee Voice:</strong> A fun, open and rewarding environment where colleagues have a strong voice in how the organisation is run, from feedback sessions with the CEO through to membership of decision making groups like our diversity and inclusion board
                </li>
                <li>
                  <strong>Flexible Benefits:</strong> Generous and flexible employee benefits, including flexible working arrangements and 'summer hours'
                </li>
                <li>
                  <strong>Wellbeing Focus:</strong> A commitment to inclusion and wellbeing both inside and outside our organisation
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Leadership Response
              </h2>
              
              <blockquote className="bg-gray-50 border-l-4 border-red-800 pl-6 py-4 mb-6">
                <p className="italic text-lg leading-relaxed mb-2">
                  "A recruitment company is nothing without its people, and creating a rewarding, inclusive and fun environment to work in has been our number one priority. We set out to be the most attractive employer in our sector and I am so delighted that we have received this recognition."
                </p>
                <cite className="text-gray-700 font-medium">
                  — Bev White, CEO of Harvey Nash Group
                </cite>
              </blockquote>

              <blockquote className="bg-gray-50 border-l-4 border-red-800 pl-6 py-4 mb-6">
                <p className="italic text-lg leading-relaxed mb-2">
                  "As a people business it is so important to us that we continually listen to our colleagues to ensure that we deliver on our People Promise: Creating the moments that matter. I am so proud that the progress we have made, and continue to make, is down to our amazing people. What brilliant, and well deserved, recognition for all our teams to receive this award."
                </p>
                <cite className="text-gray-700 font-medium">
                  — Melanie Hayes, Chief People Officer of Harvey Nash Group
                </cite>
              </blockquote>
            </section>

            <section className="mb-8 bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                About Harvey Nash
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                We're Harvey Nash, and we build amazing technology and digital teams. From senior appointments through to recruitment and project solutions, we are experts in the tech sector. We're deeply connected with our clients and the diverse community we serve, and made up of passionate people who care about changing lives and helping our clients be successful.
              </p>
              <p className="text-lg">
                Learn more about our services at{' '}
                <Link 
                  href="https://www.harveynash.com" 
                  className="text-blue-600 hover:text-blue-800 font-medium underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.harveynash.com
                </Link>
              </p>
            </section>
          </div>
        </main>

        {/* Related Articles Section */}
        <section 
          className="py-12 px-4 bg-gray-100"
          aria-label="Related news articles"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Related News & Events
            </h2>
            
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2">
              {cards.map((card) => {
                const external = isExternal(card.link);
                return (
                  <article
                    key={card.id}
                    className="bg-white w-full max-w-xs mx-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        width={320}
                        height={200}
                        className="w-full h-36 object-cover rounded-t-lg"
                        quality={75}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    
                    <div className="p-4 flex flex-col justify-between h-40">
                      <h3 className="text-sm font-semibold text-blue-700 mb-2 leading-snug">
                        {external ? (
                          <a 
                            href={card.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline focus:underline focus:outline-none"
                            aria-label={`Read more about: ${card.title} (opens in new tab)`}
                          >
                            {card.title}
                          </a>
                        ) : (
                          <Link 
                            href={card.link}
                            className="hover:underline focus:underline focus:outline-none"
                            aria-label={`Read more about: ${card.title}`}
                          >
                            {card.title}
                          </Link>
                        )}
                      </h3>
                      
                      <div className="mt-auto">
                        {external ? (
                          <a 
                            href={card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                            aria-label={`Read full article: ${card.title} (opens in new tab)`}
                          >
                            Read More
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          <Link 
                            href={card.link}
                            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                            aria-label={`Read full article: ${card.title}`}
                          >
                            Read More
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Card7;