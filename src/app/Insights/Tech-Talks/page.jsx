'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";

const TechTalksHero = () => {
  const podcastEpisodes = [
    {
      id: 1,
      title: "7 Passwords are bad news for business, and very bad news for you",
      duration: "35:42",
      link: "#"
    },
    {
      id: 2,
      title: "8 Now you can assess the impact of your business on the environment",
      duration: "26:52",
      link: "#"
    },
    {
      id: 3,
      title: "9 Can AI take search beyond words?",
      duration: "33:42",
      link: "#"
    },
    {
      id: 4,
      title: "10 Tessa Clarke is building a solution to tackle the climate crisis",
      duration: "37:06",
      link: "#"
    },
    {
      id: 5,
      title: "KI N...",
      duration: "27:51",
      link: "#"
    }
  ];

  const focusAreas = [
    {
      title: "Women in Tech",
      description: "Hear some amazing stories and insights from women working at the cutting edge of tech.",
      link: "/women-in-tech"
    },
    {
      title: "Cyber Security",
      description: "We talk to industry experts on cybersecurity; cyber risk management, security technology and leadership.",
      link: "/cyber-security"
    },
    {
      title: "Inclusion in Tech",
      description: "How can we make tech a fairer and more inclusive industry for people to work in.",
      link: "/inclusion-in-tech"
    },
    {
      title: "People & Skills",
      description: "What issues face the tech industry as the demand for talent becomes increasingly difficult to meet.",
      link: "/people-skills"
    }
  ];
  const TestimonialsSection = () => {
    return (
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Don&apos;t just take our word for it</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <p className="text-xl text-gray-600 text-center mb-12">
            Hear from some of the amazing Tech leaders who have featured on Tech Talks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <blockquote className="text-gray-700 italic mb-4">
                &quot;David has a unique ability to keep the conversation fast paced without skipping important details. Context remains even with complex topics.&quot;
              </blockquote>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">Joel Tasche</p>
                <p className="text-gray-600">co-CEO Cleaniub</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <blockquote className="text-gray-700 italic mb-4">
                &quot;On Tech Talks, you dive straight into a great, flowing conversation. His insightful questions about technology and the InvestEngine platform made for an engaging discussion.&quot;
              </blockquote>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">Tom Winterton</p>
                <p className="text-gray-600">Head of Platform InvestEngine</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <blockquote className="text-gray-700 italic mb-4">
                &quot;Joining the Tech Talk podcast with David was an amazing experience; he&apos;s a skilled host who makes the conversation enjoyable and engaging. I would welcome the opportunity to come back for another chat!&quot;
              </blockquote>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">Kathryn Rose</p>
                <p className="text-gray-600">Founder getWise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const GuestInvitation = () => {
    return (
      <div className="bg-gray-60 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">
      Share your expertise with us!
    </h2>
    
    <p className="text-xl text-gray-600 mb-8">
      Suggest yourself or someone you know to be a guest on Tech Talks and join the conversation shaping the future of tech.
    </p>
    
    <Link
      href="/Contact-us" 
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
    >
      Contact us
    </Link>
  </div>
</div>
    );
  };

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
<div className="relative min-h-screen">
  <div className="absolute inset-0">
    <Image
      src="/images/tech-podcast-discussion.jpg"
      alt="Tech podcast discussion background"
      fill
      className="object-cover"
      quality={100}
      priority
    />
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>
  
  <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-xl backdrop-blur-sm text-center">
      <div className="mb-6"> {/* Reduced from mb-8 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 tracking-tight">
          TECH TALKS
        </h1>
      </div>
      
      <div className="space-y-0.5 text-gray-900"> {/* Reduced from space-y-1 */}
        <p className="text-lg sm:text-xl md:text-2xl leading-tight font-medium"> {/* Changed from leading-relaxed to leading-tight */}
          Mixing guests from the forefront of the tech sector,
        </p>
        <p className="text-lg sm:text-xl md:text-2xl leading-tight font-medium"> {/* Changed from leading-relaxed to leading-tight */}
          our podcasts tell the real story of how tech is changing the world around us.
        </p>
      </div>
    </div>
  </div>
</div>

     {/* Featured Podcast Section */}
<div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        FEATURED TECH TALKS PODCAST
      </h2>
      <div className="mt-6">
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Content Section */}
      <div className="lg:w-2/3 bg-white rounded-xl shadow-lg p-8"> {/* Changed to 2/3 width */}
        <h3 className="text-2xl font-bold mb-2 text-gray-900">
          Beyond the Diversity<br />Checklist: Embedding True Inclusion in the Workplace
        </h3>
        
        <div className="space-y-4 mt-6">
          <p className="text-gray-700">
            Too often, companies approach diversity and inclusion as a box to check rather than a core value to embed throughout their organizations. In today&apos;s episode of &apos;Tech Talks&apos; we celebrate and observe Black History Month with a discussion; professionals from tech, law, and business analysis fields share their candid experiences navigating corporate spaces as underrepresented minorities.
          </p>
          <p className="text-gray-700">
            David hands over the hosting duties to Harvey Nash&apos;s Emmanuel Sockey, who leads the conversation as a member of the community. Together he and our guests highlight the pivotal role mentors played in their journeys and the importance of companies promoting diverse talent into true leadership roles.
          </p>
          <p className="text-gray-700">
            They also openly discuss the mental health toll of having to &quot;code-switch&quot; identities and repress authentic selves in professional settings. The conversation provides a reality check that diversity isn&apos;t achieved through superficial initiatives like culture celebrations alone. True inclusion requires examining policies, language, supplier diversity and leadership makeup.
          </p>
        </div>

        <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Listen to Podcast Episode
        </button>

        <div className="mt-8 bg-gray-100 px-6 py-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-4">Featured Guests:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: 'Emmanuel Sockey', role: 'Host, Harvey Nash' },
              { name: 'Tech Professional', role: 'Underrepresented Minority' },
              { name: 'Legal Expert', role: 'Diversity Advocate' },
            ].map((guest, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">{guest.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{guest.name}</p>
                  <p className="text-sm text-gray-500">{guest.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Section - Smaller */}
      <div className="lg:w-1/3 flex items-center"> {/* Changed to 1/3 width */}
        <div className="relative w-full h-64 rounded-xl shadow-lg overflow-hidden"> {/* Fixed height */}
          <Image
            src="/images/featured podcast.webp"
            alt="Beyond the Diversity Checklist Podcast"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Podcast Card Section */}
<div className="max-w-4xl mx-auto bg-[#f4f4f4] p-6 rounded-lg shadow-sm my-8 flex flex-col md:flex-row">
  {/* Left Content Section */}
  <div className="flex-1 pr-0 md:pr-6 mb-4 md:mb-0">
    <h1 className="text-2xl font-bold text-gray-800 leading-tight mb-2">
      Beyond the Diversity Checklist: Embedding True Inclusion in the Workplace
    </h1>
    
    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
      <div className="flex items-center space-x-2">
        <span className="font-medium">aii</span>
        <span>•</span>
        <span>Oct 28 - Tech Talks</span>
      </div>

      <div className="flex items-center space-x-3">
        <span>中</span>
        <a 
          href="https://open.spotify.com/episode/6QV6HLTmbUhpTnuPBkN4A8?si=r6lWH-WBR2qCuOZLtJ6yBA"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors"
        >
          Save on Spotify
        </a>
      </div>
    </div>

    {/* Spotify Play Button */}
    <div className="mt-4">
      <iframe 
        src="https://open.spotify.com/embed/episode/6QV6HLTmbUhpTnuPBkN4A8?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-lg"
      ></iframe>
    </div>
  </div>
  
  {/* Right Image Section */}
  <div className="w-full md:w-1/3 flex-shrink-0">
    <div className="h-48 md:h-full bg-gray-200 rounded-lg overflow-hidden">
      <img 
        src="/images/featured podcast.webp" 
        alt="Podcast cover image"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

      {/* Podcast Listen Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Listen</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Listen and subscribe to our podcast to immerse yourself in the world of tech insights, 
            from AI to CyberSecurity, talent and Quantum
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              href="https://podcasts.apple.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 w-48"
            >
              <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8 17.5c-.2.4-.5.7-.9.9-.4.2-.8.3-1.3.3-.5 0-1-.1-1.5-.4-.5-.3-.9-.6-1.2-1.1-.3-.5-.5-1-.6-1.6-.1-.6-.1-1.2 0-1.8.1-.6.3-1.2.6-1.7.3-.5.7-.9 1.2-1.2.5-.3 1-.4 1.5-.4.4 0 .8.1 1.2.3.4.2.7.5.9.9.2.4.3.8.3 1.3 0 .5-.1 1-.4 1.5zm-5.8-6.4c-.3-.4-.7-.7-1.2-.9-.5-.2-1-.3-1.5-.3-.4 0-.8.1-1.2.3-.4.2-.7.5-.9.9-.2.4-.3.8-.3 1.3 0 .5.1 1 .4 1.5.3.5.6.9 1.1 1.2.5.3 1 .4 1.5.4.5 0 1-.1 1.5-.4.5-.3.9-.7 1.2-1.2.3-.5.5-1.1.6-1.7.1-.6.1-1.2 0-1.8-.1-.6-.3-1.1-.6-1.6-.1-.1-.2-.2-.3-.3zm-5.7-4.3c-.4-.2-.8-.3-1.3-.3-.5 0-1 .1-1.5.4-.5.3-.9.6-1.2 1.1-.3.5-.5 1-.6 1.6-.1.6-.1 1.2 0 1.8.1.6.3 1.2.6 1.7.3.5.7.9 1.2 1.2.5.3 1 .4 1.5.4.4 0 .8-.1 1.2-.3.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.3 0-.5-.1-1-.4-1.5-.3-.5-.6-.9-1.1-1.2z"/>
              </svg>
              <span className="font-medium">Apple Podcasts</span>
            </Link>

            <Link 
              href="https://open.spotify.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors duration-300 w-48"
            >
              <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span className="font-medium">Spotify</span>
            </Link>

            <Link 
              href="https://podcasts.google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-48"
            >
              <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9zm-4.5 5.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm9 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-4.5 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm0 4.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z"/>
              </svg>
              <span className="font-medium">Google Podcasts</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Podcast Playlist Section */}
<div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
  <div className="mb-12">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Podcast Playlist</h1>
    <p className="text-xl text-gray-600">
      Over 500 podcast interviews with digital leaders and innovators across the world
    </p>
  </div>

  <div className="border-t border-gray-200 pt-8">
    {/* Featured Playlist Section */}
    <div className="mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-900">The best of Tech Talks</h2>
        <div className="flex space-x-4">
          <span className="text-gray-600 font-medium">President Nash Squared</span>
          <a 
            href="https://open.spotify.com/playlist/36OVOjFNAkxcqReuhn7hAW?si=MnaKQaLpS8G7uHllchO5lA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Save on Spotify
          </a>
        </div>
      </div>
      
      {/* Spotify Playlist Embed */}
      <div className="mt-6">
        <iframe 
          src="https://open.spotify.com/embed/playlist/36OVOjFNAkxcqReuhn7hAW?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>

    {/* Podcast Episodes List */}
    <div className="mb-12">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Safe Journeys: Navigating the World for LGBTQ Travelers</h3>
      
      <div className="space-y-4">
        {[
          { id: 7, title: "Passwords are bad news for business, and very bad news for you", duration: "35:42" },
          { id: 8, title: "Now you can assess the impact of your business on the environment", duration: "26:52" },
          { id: 9, title: "Can AI take search beyond words?", duration: "33:42" },
          { id: 10, title: "Tessa Clarke is building a solution to tackle the climate crisis", duration: "37:06" },
          { id: 11, title: "KI N...", duration: "27:51" }
        ].map((episode) => (
          <div key={episode.id} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center">
                {episode.id}
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">{episode.title}</p>
                <p className="text-sm text-gray-500">Tech Talks</p>
              </div>
            </div>
            <span className="text-gray-500">{episode.duration}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="text-center">
      <a 
        href="https://open.spotify.com/playlist/36OVOjFNAkxcqReuhn7hAW?si=MnaKQaLpS8G7uHllchO5lA"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
      >
        View All Episodes
      </a>
    </div>
  </div>
</div>
     {/* Tech Talks Hero Section */}
<div className="relative h-screen w-full">
  <div className="absolute inset-0">
    <Image
      src="/images/david-tech-talks.jpg"  /* Added leading slash */
      alt="Tech Talks Studio Background"
      fill
      className="object-cover"
      quality={100}
      priority
    />
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  </div>
  
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-4">
      TECH<br />TALKS
    </h1>
    <p className="text-xl md:text-2xl text-white font-light tracking-wider">
      HOSTED BY DAVID SAVAGE
    </p>
    <div className="w-24 h-1 bg-white mt-8"></div>
  </div>
</div>
      {/* Industry Focus Section */}
<div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Focus</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        In-depth analysis from across Nash Squared that shine a light on the most important issues facing the tech industry
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Women in Tech",
          description: "Hear some amazing stories and insights from women working at the cutting edge of tech.",
          icon: (
            <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        },
        {
          title: "Cyber Security",
          description: "We talk to industry experts on cybersecurity; cyber risk management, security technology and leadership.",
          icon: (
            <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          )
        },
        {
          title: "Inclusion in Tech",
          description: "How can we make tech a fairer and more inclusive industry for people to work in.",
          icon: (
            <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
        {
          title: "People & Skills",
          description: "What issues face the tech industry as the demand for talent becomes increasingly difficult to meet.",
          icon: (
            <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          )
        }
      ].map((area, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
        >
          <div className="p-8 h-full">
            {area.icon}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {area.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {area.description}
            </p>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* David Savage Profile Section */}
<div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/3 lg:w-1/4">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/David-Savage.jpg"
            alt="David Savage, Nash Squared's Group Technology Evangelist"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
      </div>

      <div className="w-full md:w-2/3 lg:w-3/4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Meet David Savage, the driving force behind Nash Squared's Tech Talks
        </h1>

        <div className="text-gray-700 space-y-6 text-lg leading-relaxed">
          <p>
            David is Nash Squared's Group Technology Evangelist. He crafts podcasts, hosts video debates, speaks, moderates conferences, and chairs keynote stages. He's a passionate advocate for technology, dissecting its challenges and opportunities.
          </p>
          <p>
            David has worked at Nash Squared since 2007, where he has developed a deep understanding of the technology and talent markets. Recognised as Computing's Digital Ambassador of the Year (2018), he brings a wealth of experience and knowledge to every conversation.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
   
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Latest Episodes</h1>

        <div className="space-y-8">
          {/* Episode 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-4">DECEMBER 9, 2024</p>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/jim-rudall.webp"
                    alt="Jim Rudall from Intuit Mailchimp"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="md:w-2/3">
                  <Link href="/episode/authenticity-and-ai" className="group">
                    <h2 className="text-xl font-bold mb-2 text-blue-600 group-hover:text-blue-800 group-hover:underline">
                      Authenticity and AI: Navigating the Future of Marketing and Customer Experience
                    </h2>
                  </Link>
                  <p className="text-gray-600">Today we are joined by Jim Rudall from Intuit Mailchimp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Episode 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-4">DECEMBER 6, 2024</p>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Nick-Lynes.jpg"
                    alt="Nick Lynes from Flawless"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="md:w-2/3">
                  <Link href="/episode/code-cameras-action" className="group">
                    <h2 className="text-xl font-bold mb-2 text-blue-600 group-hover:text-blue-800 group-hover:underline">
                      Code, Cameras, Action: How AI is hacking Film Production
                    </h2>
                  </Link>
                  <p className="text-gray-600">Today we are joined by Nick Lynes, CEO of Flawless.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Episode 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-4">DECEMBER 4, 2024</p>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 relative h-65 rounded-lg overflow-hidden">
                  <Image
                    src="/images/anna-korzh.jpg"
                    alt="Anna Korzh from Brain Lab Studios"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="md:w-2/3">
                  <Link href="/episode/thriving-in-crisis" className="group">
                    <h2 className="text-xl font-bold mb-2 text-blue-600 group-hover:text-blue-800 group-hover:underline">
                      Thriving in Crisis: What the Tech World can learn from Ukrainian Women
                    </h2>
                  </Link>
                  <p className="text-gray-600">Today we are joined by Anna Korzh CEO of Brain Lab Studios.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <TestimonialsSection />
      <GuestInvitation />
      <Footer />
      
    </div>
  );
};

export default TechTalksHero;