 'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const card3 = () => {
  const cards = [
    {
      id: 'card1',
      image: '/images/card1.webp',
      title: 'Egyptian HVN.TV – Beware of entity unlawfully trying associate with us',
      link: '/News-and-events/cards/card1',
      alt: 'Egyptian HVN.TV warning announcement from Harvey Nash'
    },
    {
      id: 'card2',
      image: '/images/card2.webp',
      title: "Nash Squared CEO, Bev White shortlisted for Computer Weekly's 50 Most Influential Women in UK Tech",
      link: '/News-and-events/cards/card2',
      alt: 'Bev White Nash Squared CEO recognition award'
    },
    {
      id: 'card3',
      image: '/images/card3.webp',
      title: 'Where are all the technologists? Talent shortages and what to do about them?',
      link: '/News-and-events/cards/card3',
      alt: 'Technology talent shortage solutions and strategies'
    },
    {
      id: 'card4',
      image: '/images/card4.webp',
      title: 'Rachel Watts joins Harvey Nash Group as Global Marketing Director',
      link: '/News-and-events/cards/card4',
      alt: 'Rachel Watts new Global Marketing Director Harvey Nash'
    },
    {
      id: 'card5',
      image: '/images/card5.webp',
      title: 'Harvey Nash Group pledge to use renewable energy by 2023',
      link: '/News-and-events/cards/card5',
      alt: 'Harvey Nash renewable energy sustainability commitment'
    },
    {
      id: 'card6',
      image: '/images/card6.webp',
      title: 'Harvey Nash appoints cyber expert as Global CISO',
      link: '/News-and-events/cards/card6',
      alt: 'Harvey Nash Global CISO cybersecurity appointment'
    },
  ];

  const isExternal = (url) => url.startsWith('http');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Where are all the technologists? Talent shortages and what to do about them?",
    "description": "Strategies to address technology talent shortages including flexibility, upskilling, and hybrid work models. Expert insights from Harvey Nash Benelux Managing Director.",
    "author": {
      "@type": "Person",
      "name": "Ronny Lommelen",
      "jobTitle": "Managing Director",
      "worksFor": {
        "@type": "Organization",
        "name": "Harvey Nash Benelux"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Harvey Nash Group"
    },
    "image": "/images/card3.webp",
    "datePublished": "2023-01-01",
    "dateModified": "2023-01-01"
  };

  return (
    <>
      <Head>
        <title>Technology Talent Shortages: Solutions & Strategies | Harvey Nash</title>
        <meta name="description" content="Discover effective strategies to address tech talent shortages. Learn about flexibility, upskilling, hybrid work models, and retention strategies from Harvey Nash experts." />
        <meta name="keywords" content="technology talent shortage, IT recruitment, upskilling, hybrid work, tech talent retention, software development skills, cybersecurity talent" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Technology Talent Shortages: Solutions & Strategies" />
        <meta property="og:description" content="Expert insights on addressing tech talent shortages through flexibility, training, and modern work models." />
        <meta property="og:image" content="/images/card3.webp" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Technology Talent Shortages: Solutions & Strategies" />
        <meta name="twitter:description" content="Expert insights on addressing tech talent shortages through flexibility, training, and modern work models." />
        <meta name="twitter:image" content="/images/card3.webp" />
        <link rel="canonical" href="/News-and-events/cards/card3" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <article>
        <header className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/news.webp"
              alt="Harvey Nash News and Events hero background"
              fill
              quality={100}
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide">
              News and Events
            </h1>
          </div>
        </header>

        <main className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-red-800">
              Where are all the technologists? Talent shortages and what to do about them?
            </h1>
            
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li><Link href="/" className="hover:text-red-800">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/News-and-events" className="hover:text-red-800">News and Events</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-900">Talent Shortages</li>
              </ol>
            </nav>
          </header>

          <div className="mb-6">
            <Image
              src="/images/card3.webp"
              alt="Red binoculars overlooking a city skyline representing the search for technology talent"
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-full"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-lg leading-relaxed">
              With talent shortages impacting many aspects of business, not least technology, has the war for talent already been won and should we just resign ourselves to the new reality, that our vacancies will go unfilled? Not necessarily so. <strong>Ronny Lommelen, Managing Director of Harvey Nash Benelux</strong> shared his thoughts with{' '}
              <a
                href="https://www.computerweekly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 transition-colors"
                aria-label="Visit Computer Weekly website (opens in new tab)"
              >
                ComputerWeekly.com
              </a>{' '}
              on strategies organisations must consider if they want to attract tech talent in the current market.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                It's harder than ever to recruit good IT specialists, but there are some simple strategies for digital leaders to fill gaps in their teams
              </h2>
              
              <p className="mb-4 text-lg leading-relaxed">
                I have been working in the recruitment business for 25 years – and the talent shortages we are seeing now are the worst I've ever known.
              </p>

              <p className="mb-4 text-lg leading-relaxed">
                Many of the digital leaders I speak to say talent shortages are making it hard for them to keep up with the pace of change, particularly in <strong>cyber security and software development</strong>. This is a common picture across Europe, the US and beyond.
              </p>

              <p className="mb-4 text-lg leading-relaxed">
                It's not just tech, of course. The various and complex effects of the pandemic mean there are shortages across society. For example, in Belgium, if you're looking for a cleaner, you'll be looking for about seven months on average; some of our top restaurants are open only three days a week because of a lack of top chefs; and some students have been given a pass without taking their exams because of a chronic shortage of teachers to teach them.
              </p>

              <p className="mb-6 text-lg leading-relaxed">
                Only about 70% of the working-age population is actually working. And of the other 30%, only 2.9% are actively seeking a job.
              </p>

              <p className="mb-6 text-lg leading-relaxed">
                It's tempting to say that the war for talent is actually over already – talent has won the battle. But in fact, there are a number of strategies that digital leaders can employ to fight back.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                Flexibility first
              </h2>
              
              <p className="mb-4 text-lg leading-relaxed">
                First, <strong>be flexible in your requirements</strong>. I still regularly see companies that are demanding a 100% fit (or even 110%!) against their experience and capability wish list. But they will almost certainly lose out in one of two ways – they either won't find that "perfect candidate," or they will overpay for them.
              </p>

              <p className="mb-4 text-lg leading-relaxed">
                Instead of looking for that complete match, <strong>shift to 80% instead</strong> – the other 20% can almost always be met through training, support and development once in the job.
              </p>

              <p className="mb-6 text-lg leading-relaxed">
                Another flexibility is around age. The most sought-after candidates are in the 35-49 age bracket. But don't rule out the under-35s or the over-50s. There are brilliant people in both groups – one with all the potential for the future, the other with invaluable experience and work knowhow.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                Upskilling and cross-training
              </h2>
              
              <p className="mb-4 text-lg leading-relaxed">
                This brings us to another absolutely key approach: <strong>to invest in training and upskilling</strong>.
              </p>

              <p className="mb-4 text-lg leading-relaxed">
                I have one client who is looking ahead and can see that they will have a significant software development skills requirement in about four years' time. So they are training their existing software engineers now, so they can move into these roles when the time comes.
              </p>

              <p className="mb-4 text-lg leading-relaxed">
                There is a growing emphasis among digital leaders on increasing the amount of <strong>internal cross-training into tech</strong>.
              </p>

              <p className="mb-4 text-lg leading-relaxed">
                This is something that can be applied externally, too.
              </p>

              <p className="mb-4 text-lg leading-relaxed">
                Look outside the business for talent that can be supported into a tech career – people who may be in other fields right now but have the right aptitude, mindset and ambition. Think about <strong>apprenticeship schemes and internships</strong>, too.
              </p>

              <p className="mb-6 text-lg leading-relaxed">
                Such individuals tend to be loyal as well – they appreciate the chance they've been given and are less likely to run off to a better offer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                Making the working model work
              </h2>
              
              <p className="mb-4 text-lg leading-relaxed">
                Another critically important question, of course, is <strong>the working model</strong>.
              </p>

              <p className="mb-4 text-lg leading-relaxed">
                The <strong>remote and hybrid working</strong> that sprang up during Covid has changed the game. It is both an opportunity and a threat. An opportunity because you can widen your net hugely and consider candidates who aren't 10km from the office but 1,000km or more. At the same time, it's a threat because it means competitors based far away could poach your staff, too. Some companies are dealing with 30%-plus attrition rates.
              </p>

              <p className="mb-4 text-lg leading-relaxed">
                Make sure your model is right. <strong>What do your people want? Are you meeting this?</strong> It's complicated because different people want different things. Our research found that a significant block of professionals want to go into the office as much as possible, while another significant block want to go in as little as they can. There weren't very many people in between.
              </p>

              <p className="mb-4 text-lg leading-relaxed">
                It's sensible to set a minimum and make sure staff know they are welcome to come in more often if they want to. Whatever your policy, <strong>make sure it's clear, well-communicated and understood</strong>.
              </p>

              <p className="mb-6 text-lg leading-relaxed">
                Remember also that although remote working has proven surprisingly good for productivity and helps many people achieve a better work/life balance, at the same time it does reduce the engagement a lot of staff feel with the business, can affect inclusivity, and become a strain on mental health. Some struggle with constant video calls and a sense of isolation.
              </p>

              <p className="mb-6 text-lg leading-relaxed">
                That's why it is important to move to <strong>the right hybrid model</strong>, where people are able to meet and connect – and also why you need to increase the level of HR and wellbeing support. We have a mental wellbeing hub at Nash Squared, for example, that anyone can access for tips and resources.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                Know the price of your people
              </h2>
              
              <p className="mb-4 text-lg leading-relaxed">
                Finally, with retention, so much comes down to <strong>good line managers</strong>. Being close to team members, understanding how they are doing, what issues they are facing – these are invaluable. Every manager should know the "price" of their team members. This may be financial, of course, but it could be other things.
              </p>

              <p className="mb-4 text-lg leading-relaxed">
                For some, the commute may be their biggest issue. A bonus won't solve their issue if their "price" is distance from the office. <strong>Understand each person's price and do what you can to meet it</strong>, without changing the DNA of the company culture.
              </p>

              <p className="mb-6 text-lg leading-relaxed">
                It's a complex mix with no easy answers. But businesses that are <strong>more flexible, that understand the price of their talent, and that are open to thinking laterally</strong>, are much more likely to be able to score some significant victories in the ongoing war for tech talent.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                <p className="text-lg font-medium text-blue-900 mb-2">
                  Need expert support with tech talent acquisition?
                </p>
                <p className="text-blue-800">
                  To find out how Harvey Nash can support you in your local geography{' '}
                  <a 
                    href="/" 
                    className="text-blue-600 underline hover:text-blue-800 font-medium"
                    aria-label="Contact Harvey Nash for talent acquisition support"
                  >
                    click here
                  </a>
                </p>
              </div>
            </section>
          </div>
        </main>

        <aside className="py-10 px-4 bg-gray-100" aria-labelledby="related-articles">
          <div className="max-w-4xl mx-auto">
            <h2 id="related-articles" className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Related Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2">
              {cards.map((card) => {
                const external = isExternal(card.link);
                return (
                  <article
                    key={card.id}
                    className="bg-white w-full max-w-xs mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-500"
                  >
                    <div className="relative">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        width={320}
                        height={200}
                        className="w-full h-36 object-cover rounded-t-lg"
                        quality={85}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                      />
                    </div>
                    <div className="p-3 flex flex-col justify-between h-40">
                      <h3 className="text-sm font-semibold text-blue-700 mb-2 leading-snug">
                        {external ? (
                          <a 
                            href={card.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline focus:underline focus:outline-none"
                            aria-label={`${card.title} (opens in new tab)`}
                          >
                            {card.title}
                          </a>
                        ) : (
                          <Link 
                            href={card.link}
                            className="hover:underline focus:underline focus:outline-none"
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
          </div>
        </aside>
      </article>
    </>
  );
};

export default card3;