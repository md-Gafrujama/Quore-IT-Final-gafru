 'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card6 = () => {
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
      title: "Nash Squared CEO, Bev White shortlisted for Computer Weekly's 50 Most Influential Women in UK Tech",
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
  ];

  const isExternal = (url) => url.startsWith('http');

  return (
    <>
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/news.webp"
            alt="Harvey Nash Group News and Events background"
            fill
            quality={100}
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide">
            News and Events
          </h1>
        </div>
      </section>

      <main className="px-6 py-12 max-w-3xl mx-auto text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-red-800">
          Harvey Nash Group appoints cyber expert as Global CISO to support growth and establish new virtual CISO practice
        </h1>

        <div className="mb-6">
          <Image
            src="/images/card6.webp"
            alt="Jim Tiller, Global Chief Information Security Officer at Harvey Nash Group"
            width={800}
            height={600}
            className="rounded-lg shadow-lg w-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />
        </div>

        <article className="prose lg:prose-xl">
          <p className="mb-4 text-lg leading-relaxed">
            Harvey Nash Group, the leading technology and talent solutions business, has announced the appointment of Jim Tiller as Global Chief Information Security Officer to support the group's growth and establish a new virtual CISO practice for clients.
          </p>

          <p className="mb-4 text-lg leading-relaxed">
            With over two decades of information security experience, Jim is an internationally recognised cybersecurity authority on cyber risk management, security technology, industry leadership, and multiple patent-winning recognition for innovation in security solutions.
          </p>

          <p className="mb-4 text-lg leading-relaxed">
            Prior to joining Harvey Nash Group, Jim has been the COO of Kivu Consulting, the VP of Security Services and Operations at Optiv, and the Director of Security Consulting Services for the Americas at Hewlett-Packard. Jim also worked for several years at British Telecom (BT), where he was the VP of Global Security Consulting and VP of Security Services for the US & Canada.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Bev White, Chief Executive, Harvey Nash Group, said:</h2>
          <blockquote className="italic mb-4 text-lg leading-relaxed">
            "I am delighted that Jim has joined Harvey Nash Group as he is a great fit for our culture and his wide range of unique capabilities and experience will drive business-enabling cybersecurity strategy, architecture, and services for the group and our clients globally.
            <br /><br />
            Jim's deep insights and experience will be hugely valuable as we take this exciting next step in our evolution as the leading technology and talent solutions group. Jim's role will be predominantly externally focused, establishing a virtual CISO practice early in the year as an additional service to our clients. We have all witnessed the global growth in competition between businesses for cyber skills, so we expect this dedicated virtual practice to be much in demand."
          </blockquote>

          <h2 className="text-xl font-semibold mt-8 mb-2">On his appointment as Global CISO for the Group, Jim Tiller said:</h2>
          <blockquote className="italic mb-4 text-lg leading-relaxed">
            "I am thrilled to be taking up this position at Harvey Nash Group, who are recognised globally as leaders in technology and talent solutions. With such an acceleration in the development of digital services and channels through the pandemic, cybersecurity is of the utmost priority for organisations across sectors. The opportunity to support clients in this through the provision of a virtual CISO practice is an exciting prospect and I can't wait to start developing solutions to meet all their varied needs and requirements."
          </blockquote>

          <h3 className="text-lg font-bold mt-10 mb-2">Media Contacts:</h3>
          <p className="mb-4 text-lg leading-relaxed">
            David Pippett, ProServ PR<br />
            <a href="mailto:david@proservpr.com" className="text-blue-600 underline hover:text-blue-800">david@proservpr.com</a><br />
            +44 (0) 7899 798197
          </p>

          <h3 className="text-lg font-bold mt-10 mb-2">About Harvey Nash Group</h3>
          <p className="mb-4 text-lg leading-relaxed">
            Harvey Nash Group are the leading global provider of talent and technology solutions.
            <br /><br />
            We're equipped with a unique network that realises the potential where people and technology meet. For over three decades we've been helping clients solve broad and complex problems, building and scaling their technology and digital capability.
            <br /><br />
            <a
              href="https://www.harveynashgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
              aria-label="Visit Harvey Nash Group official website"
            >
              www.harveynashgroup.com
            </a>
            <br />
            Follow us on LinkedIn at{" "}
            <a
              href="https://www.linkedin.com/company/harvey-nash-group/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
              aria-label="Follow Harvey Nash Group on LinkedIn"
            >
              Harvey Nash Group LinkedIn page
            </a>
          </p>
        </article>
      </main>

      <section className="py-10 px-4 bg-gray-100">
        <h2 className="sr-only">Related news articles</h2>
        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2">
          {cards.map((card) => {
            const external = isExternal(card.link);
            return (
              <article
                key={card.id}
                className="bg-white w-full max-w-xs mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-36 w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover rounded-t-lg"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between h-40">
                  <h3 className="text-sm font-semibold text-blue-700 mb-2 hover:underline leading-snug">
                    {external ? (
                      <a 
                        href={card.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Read more about ${card.title}`}
                      >
                        {card.title}
                      </a>
                    ) : (
                      <Link 
                        href={card.link}
                        className="hover:underline"
                        aria-label={`Read more about ${card.title}`}
                      >
                        {card.title}
                      </Link>
                    )}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Card6;