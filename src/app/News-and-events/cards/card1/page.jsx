 'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card1 = () => {
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
            alt="News and Events Background"
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
          Egyptian HVN.TV – Beware of entity unlawfully trying to associate with us
        </h1>

        <div className="mb-6">
          <Image
            src="/images/card1.webp"
            alt="Warning about unauthorized company using Harvey Nash branding"
            width={800}
            height={400}
            className="rounded-lg shadow-lg w-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />
        </div>

        <article className="prose lg:prose-xl">
          <p className="mb-4 text-lg leading-relaxed">
            It has been brought to our attention that a company, <strong>Harvey Nash Egyptian Films
            Limited</strong>, is unlawfully using the Harvey Nash / Nash Squared names, along with our
            other insignia. The company is operating under the names &quot;HVN.TV&quot;, &quot;HVNTEGYPT&quot; and &quot;Harvey
            Nash Egyptian Films&quot;.
          </p>

          <p className="mb-4 text-lg leading-relaxed">
            This company is not affiliated with or connected in any way to Nash Squared, Harvey Nash or
            any businesses in the Nash Squared Group.
          </p>

          <p className="text-lg leading-relaxed">
            If you have any concerns please contact{' '}
            <a href="mailto:info@nashsquared.com" className="text-blue-600 underline hover:text-blue-800">
              info@nashsquared.com
            </a>.
          </p>
        </article>
      </main>

      <section className="py-10 px-4 bg-gray-100">
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
                  <h2 className="text-sm font-semibold text-blue-700 mb-2 hover:underline leading-snug">
                    {external ? (
                      <a href={card.link} target="_blank" rel="noopener noreferrer">
                        {card.title}
                      </a>
                    ) : (
                      <Link href={card.link} className="hover:underline">
                        {card.title}
                      </Link>
                    )}
                  </h2>

                  {external ? (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-2 px-3 rounded transition-all duration-300 shadow-md text-center"
                      aria-label={`Read more about ${card.title}`}
                    >
                      FIND OUT MORE
                    </a>
                  ) : (
                    <Link
                      href={card.link}
                      className="text-xs bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-2 px-3 rounded transition-all duration-300 shadow-md text-center"
                    >
                      FIND OUT MORE
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Card1;