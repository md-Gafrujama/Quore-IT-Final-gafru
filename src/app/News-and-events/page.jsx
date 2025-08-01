 'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
  import Head from 'next/head';
const NewsEvent = () => {
  const cards = [
    {
      id: 'card1',
      image: '/images/card1.webp',
      title: 'Egyptian HVN.TV – Beware of entity unlawfully trying associate with us',
      link: '/News-and-events/cards/card1',
    },
    {
      id: 'card2',
      image: '/images/card2.webp',
      title: "Nash Squared CEO, Bev White shortlisted for Computer Weekly’s 50 Most Influential Women in UK Tech",
      link: '/News-and-events/cards/card2',
    },
    {
      id: 'card3',
      image: '/images/card3.webp',
      title: 'Where are all the technologists? Talent shortages and what to do about them?',
      link: '/News-and-events/cards/card3',
    },
    {
      id: 'card4',
      image: '/images/card4.webp',
      title: 'Rachel Watts joins Harvey Nash Group as Global Marketing Director',
      link: '/News-and-events/cards/card4',
    },
    {
      id: 'card5',
      image: '/images/card5.webp',
      title: 'Harvey Nash Group pledge to use renewable energy by 2023',
      link: '/News-and-events/cards/card5',
    },
    {
      id: 'card6',
      image: '/images/card6.webp',
      title: 'Harvey Nash appoints cyber expert as Global CISO',
      link: '/News-and-events/cards/card6',
    },
    {
      id: 'card7',
      image: '/images/card7.webp',
      title: 'Harvey Nash wins prestigious Best Company to Work for Award',
      link: '/News-and-events/cards/card7',
    },
    {
      id: 'card8',
      image: '/images/card8.webp',
      title: 'Global tech threatened as skills crisis reaches high',
      link: '/News-and-events/cards/card8',
    },
    {
      id: 'card9',
      image: '/images/card9.webp',
      title: 'National Coming Out Day',
      link: '/News-and-events/cards/card9',
    },
  ];

  const isExternal = (url) => url.startsWith('http');

  return (
    <>
    <Head>
  <title>News & Events | Harvey Nash Group Updates and Announcements</title>
  <meta name="description" content="Stay updated with the latest news and events from Harvey Nash Group, including executive announcements, awards, and global initiatives." />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="News & Events | Harvey Nash Group Updates and Announcements" />
  <meta property="og:description" content="Discover the latest from Harvey Nash Group – from industry awards and leadership changes to tech talent insights and diversity efforts." />
  <meta property="og:image" content="/images/news.webp" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourdomain.com/News-and-events" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="News & Events | Harvey Nash Group Updates and Announcements" />
  <meta name="twitter:description" content="Read the latest updates from Harvey Nash Group. Explore leadership news, awards, initiatives, and global tech market trends." />
  <meta name="twitter:image" content="/images/news.webp" />
</Head>
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/news.webp"
            alt="Candidates Hero Background"
            fill
            quality={100}
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide">
            News and Event
          </h1>
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          {cards.map((card) => {
            const external = isExternal(card.link);
            return (
              <div
                key={card.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover rounded-t-lg"
                  quality={100}
                />
                <div className="p-6 flex flex-col justify-between h-60">
                  <h3 className="text-lg font-semibold text-blue-700 mb-4 hover:underline">
                    {external ? (
                      <a href={card.link} target="_blank" rel="noopener noreferrer">
                        {card.title}
                      </a>
                    ) : (
                      <Link href={card.link}>{card.title}</Link>
                    )}
                  </h3>

                  {external ? (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md text-center"
                    >
                      FIND OUT MORE
                    </a>
                  ) : (
                    <Link href={card.link}>
                      <button className="cursor-pointer bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md">
                        FIND OUT MORE
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="w-full flex justify-center mt-12 mb-24">
        <Link href="#article-archive">
          <button className="cursor-pointer bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md">
            FULL ARTICLE ARCHIVE
          </button>
        </Link>
      </div>
    </>
  );
};

export default NewsEvent;
