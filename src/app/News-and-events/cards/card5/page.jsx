 'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const Card5 = () => {
  const cards = [
    {
      id: 'card1',
      image: '/images/card1.webp',
      title: 'Egyptian HVN.TV – Beware of entity unlawfully trying associate with us',
      link: '/News-and-events/cards/card1',
      alt: 'Warning notice about Egyptian HVN.TV entity trying to associate with Harvey Nash Group',
    },
    {
      id: 'card2',
      image: '/images/card2.webp',
      title: "Nash Squared CEO, Bev White shortlisted for Computer Weekly's 50 Most Influential Women in UK Tech",
      link: '/News-and-events/cards/card2',
      alt: 'Bev White, Nash Squared CEO, shortlisted for Computer Weekly award',
    },
    {
      id: 'card3',
      image: '/images/card3.webp',
      title: 'Where are all the technologists? Talent shortages and what to do about them?',
      link: '/News-and-events/cards/card3',
      alt: 'Analysis of technology talent shortages and solutions',
    },
    {
      id: 'card4',
      image: '/images/card4.webp',
      title: 'Rachel Watts joins Harvey Nash Group as Global Marketing Director',
      link: '/News-and-events/cards/card4',
      alt: 'Rachel Watts appointed as Global Marketing Director at Harvey Nash Group',
    },
    {
      id: 'card5',
      image: '/images/card5.webp',
      title: 'Harvey Nash Group pledge to use renewable energy by 2023',
      link: '/News-and-events/cards/card5',
      alt: 'Harvey Nash Group renewable energy sustainability pledge announcement',
    },
    {
      id: 'card6',
      image: '/images/card6.webp',
      title: 'Harvey Nash appoints cyber expert as Global CISO',
      link: '/News-and-events/cards/card6',
      alt: 'Harvey Nash Group appoints new Global Chief Information Security Officer',
    },
  ];

  const isExternal = (url) => url.startsWith('http');

  // Structured data for SEO
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Harvey Nash Group pledge to use renewable energy in European offices by 2023 on the way to achieve Net Zero",
    "description": "Harvey Nash Group publishes their Sustainability Report with details of how they will achieve Net Zero by 2050, starting with renewable energy in European offices by 2023.",
    "author": {
      "@type": "Organization",
      "name": "Harvey Nash Group"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Harvey Nash Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.harveynashgroup.com/logo.png"
      }
    },
    "datePublished": "2023-02-09",
    "dateModified": "2023-02-09",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.harveynashgroup.com/News-and-events/cards/card5"
    },
    "image": "/images/card5.webp"
  };

  return (
    <>
      <Head>
        <title>Harvey Nash Group Renewable Energy Pledge 2023 | Sustainability Report | Net Zero by 2050</title>
        <meta name="description" content="Harvey Nash Group commits to renewable energy in European offices by 2023 and Net Zero by 2050. Read their comprehensive sustainability report and environmental initiatives." />
        <meta name="keywords" content="Harvey Nash Group, renewable energy, sustainability, Net Zero, environmental pledge, green technology, ESG, corporate sustainability" />
        <meta property="og:title" content="Harvey Nash Group Renewable Energy Pledge 2023 | Net Zero by 2050" />
        <meta property="og:description" content="Harvey Nash Group commits to renewable energy in European offices by 2023 and Net Zero by 2050. Read their comprehensive sustainability report." />
        <meta property="og:image" content="/images/card5.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.harveynashgroup.com/News-and-events/cards/card5" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harvey Nash Group Renewable Energy Pledge 2023" />
        <meta name="twitter:description" content="Harvey Nash Group commits to renewable energy and Net Zero by 2050" />
        <meta name="twitter:image" content="/images/card5.webp" />
        <link rel="canonical" href="https://www.harveynashgroup.com/News-and-events/cards/card5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
        />
      </Head>

      <article itemScope itemType="https://schema.org/NewsArticle">
        <header className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/news.webp"
              alt="Harvey Nash Group news and events hero background featuring sustainability and renewable energy themes"
              fill
              quality={85}
              priority
              className="object-cover object-center"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <div className="absolute inset-0 bg-black/30" role="presentation"></div>
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide">
              News and Events
            </h1>
          </div>
        </header>

        <main className="px-6 py-12 max-w-3xl mx-auto text-gray-800">
          <header>
            <h1 
              className="text-3xl md:text-4xl font-bold mb-6 text-red-800"
              itemProp="headline"
            >
              Harvey Nash Group pledge to use renewable energy in European offices by 2023 on the way to achieve Net Zero
            </h1>
          </header>

          <div className="mb-6">
            <Image
              src="/images/card5.webp"
              alt="Harvey Nash Group renewable energy pledge announcement - corporate sustainability initiative showing commitment to Net Zero by 2050"
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-full"
              quality={85}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 800px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              itemProp="image"
            />
          </div>

          <div itemProp="articleBody">
            <p className="mb-4 text-lg leading-relaxed">
              <time dateTime="2023-02-09" itemProp="datePublished">
                <strong>London, February 9th</strong>
              </time> – Harvey Nash Group, the leading global provider of talent and technology solutions, publish their{' '}
              <a 
                href="https://www.harveynashgroup.com/sustainability" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Visit Harvey Nash Group Sustainability Report (opens in new tab)"
              >
                Sustainability Report
              </a>{' '}
              today, which includes details of how they will achieve Net Zero by 2050.
            </p>

            <p className="mb-4 text-lg leading-relaxed">
              The first steps on the journey to Net Zero will be to make sure European offices are powered by renewable energy by 2023, a 50 per cent reduction in air travel globally by 2025, as well as working with suppliers to reduce carbon footprint in the wider supply chain.
            </p>

            <p className="mb-4 text-lg leading-relaxed">
              As part of the Sustainability Report, the Group have also shared their plans for having a positive social impact, which includes supporting mental health initiatives and focusing on diversity and inclusion. The Group has already made progress in this area with the launch of the{' '}
              <a 
                href="https://www.harveynashgroup.com/wellbeing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Visit Harvey Nash Group Wellbeing Hub (opens in new tab)"
              >
                Wellbeing Hub
              </a>
              , an open to all portal for health and wellbeing and the{' '}
              <a 
                href="https://www.harveynashgroup.com/inclusion" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Visit Harvey Nash Group Inclusion Passport (opens in new tab)"
              >
                Inclusion Passport
              </a>
              , to support employees who may need workplace adjustments due to a health condition, disability or another personal situation without having to have a difficult conversation multiple times if they change line manager or department.
            </p>

            <blockquote className="mb-4 text-lg leading-relaxed border-l-4 border-red-800 pl-4 italic bg-gray-50 p-4 rounded-r-lg">
              <p className="mb-2">
                Harvey Nash Group Chief Executive Bev White commented: <em>"There's no doubt we have an impact on people's lives and careers, and the organisations and communities we work with. And it's a responsibility we take very seriously. Our vision is to build limitless futures. We believe our goals for environment, sustainability and governance are key to achieving this."</em>
              </p>
              <cite className="text-sm font-semibold text-gray-600">— Bev White, Chief Executive, Harvey Nash Group</cite>
            </blockquote>

            <p className="mb-4 text-lg leading-relaxed">
              The use of renewable energy in the tech sector is of utmost importance. For more on the Group's viewpoint on this, please read Chief Financial Officer, Chris Tilley's{' '}
              <a 
                href="https://www.harveynashgroup.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Read Chris Tilley's article on renewable energy (opens in new tab)"
              >
                most recent article
              </a>{' '}
              on this very thing.
            </p>

            <p className="mb-4 text-lg leading-relaxed">
              To download the full report, please visit{' '}
              <a 
                href="https://www.harveynashgroup.com/sustainability" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Download Harvey Nash Group Sustainability Report (opens in new tab)"
              >
                www.harveynashgroup.com/sustainability
              </a>.
            </p>
          </div>

          <section className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-900">About Harvey Nash Group</h2>
            <div itemScope itemType="https://schema.org/Organization">
              <p className="mb-4 text-lg leading-relaxed" itemProp="description">
                Harvey Nash Group are the leading global provider of talent and technology solutions.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                We're equipped with a unique network, that realises the potential where people and technology meet. For over three decades we've been helping clients solve broad and complex problems, building and scaling their technology and digital capability.
              </p>
              <div className="space-y-2">
                <p className="text-lg">
                  <strong>Website:</strong>{' '}
                  <a 
                    href="https://www.harveynashgroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    itemProp="url"
                    aria-label="Visit Harvey Nash Group website (opens in new tab)"
                  >
                    www.harveynashgroup.com
                  </a>
                </p>
                <p className="text-lg">
                  <strong>LinkedIn:</strong>{' '}
                  <a 
                    href="https://www.linkedin.com/company/harvey-nash-group/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    itemProp="sameAs"
                    aria-label="Follow Harvey Nash Group on LinkedIn (opens in new tab)"
                  >
                    https://www.linkedin.com/company/harvey-nash-group/
                  </a>
                </p>
              </div>
            </div>
          </section>
        </main>

        <aside className="py-10 px-4 bg-gray-100" aria-labelledby="related-news">
          <h2 id="related-news" className="text-2xl font-bold text-center mb-8 text-gray-900">
            Related News & Events
          </h2>
          <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2">
            {cards.map((card, index) => {
              const external = isExternal(card.link);
              return (
                <article
                  key={card.id}
                  className="bg-white w-full max-w-xs mx-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500"
                >
                  <div className="relative">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={320}
                      height={200}
                      className="w-full h-36 object-cover rounded-t-lg"
                      quality={85}
                      loading={index < 3 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div className="p-3 flex flex-col justify-between h-40">
                    <h3 className="text-sm font-semibold text-blue-700 mb-2 leading-snug">
                      {external ? (
                        <a 
                          href={card.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                          aria-label={`${card.title} (opens in new tab)`}
                        >
                          {card.title}
                        </a>
                      ) : (
                        <Link 
                          href={card.link}
                          className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                          aria-label={card.title}
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
        </aside>
      </article>
    </>
  );
};

export default Card5;