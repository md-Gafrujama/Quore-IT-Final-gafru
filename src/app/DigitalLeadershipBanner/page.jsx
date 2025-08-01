"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";

const DigitalLeadershipBanner = () => {
  const scrollToForm = () => {
    if (typeof window !== 'undefined') {
      const form = document.getElementById('form-section');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const topics = [
    {
      title: 'Diversity & Inclusion',
      description:
        'Those who that adopt D&I practices see huge gains in the form of business results. Find out more about our D&I insights.',
      link: '/Insights/Diversity-Inclusion',
    },
    {
      title: 'Women in Tech',
      description:
        'Opinion, research, stories and in-depth interviews around the issues facing Women in the Technology Industry.',
      link: '/Insights/Women-in-Tech',
    },
    {
      title: 'Cybersecurity',
      description:
        'Our experts, and invited guests, share their thoughts on the cyber security industry.',
      link: '/Insights/Cybersecurity',
    },
    {
      title: 'Tech Talks',
      description:
        'Over 500 podcast interviews with digital leaders and innovators across the world.',
      link: '/Insights/Tech-Talks',
    },
    {
      title: 'Comment & Analysis',
      description:
        'Strategic insight on issues across the technology sector from some of the experts within our Group.',
      link: '/Insights/Comment-Analysis',
    },
    {
      title: 'Documentaries',
      description:
        'From MedTech to the future of work, our Tech Flix series covers the big topics affecting us all.',
      link: '/Insights/Documentaries',
    },
    {
      title: 'Blogs',
      description:
        'Our experts, and invited guests, share their thinking about the future of technology and work.',
      link: '/Insights/Blogs',
    },
    {
      title: 'Tech Champions',
      description:
        'Leading members of the UK\'s parliament share their thoughts on technology and innovation.',
      link: '/Insights/Tech-champions',
    },
  ];
  
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
    title: 'Nurture your skills and aspirations on International Women\'s Day',
    image: '/images/ai3.jpg',
    link: '/Insights/Parliamentary-Tech-Champions/Baroness-smith-of-llanfaes',
  },
  {
    date: 'December 16, 2024',
    title: 'What makes a great CIO?',
    image: '/images/article4.webp',
    link: '/Insights/Parliamentary-Tech-Champions/Baroness-smith-of-llanfaes',
  },
  {
    date: 'November 7, 2024',
    title: 'AI robots are coming. Are we ready?',
    image: '/images/article5.webp',
    link: '/Insights/Parliamentary-Tech-Champions/Baroness-smith-of-llanfaes',
  },
  {
    date: 'October 17, 2024',
    title: 'Is diversity (even more) under threat in tech?',
    image: '/images/article6.webp',
    link: '/Insights/Parliamentary-Tech-Champions/Baroness-smith-of-llanfaes',
  },
];

const additionalNewsItems = [
  {
    type: "webinar",
    title: "2025 Digital Leadership Report Launch",
    description: "Explore the key findings of the report",
    date: "Tuesday, 10th June",
    times: [
      "UK: 12:09 BST",
      "USA: 15:00 ET"
    ],
    cta: "Sign up today",
    ctaLink: "/login",
    ctaLabel: "Login"
  },
  {
    date: "MAY 19, 2025",
    title: "2025 Digital Leadership Report Launch Webinar – 10th June 2025",
    link: "/news/digital-leadership-webinar"
  },
  {
    date: "MAY 19, 2025",
    title: "AI creates the world's biggest tech skills shortage in over 15 years, finds Nash Squared/Harvey Nash report",
    link: "/news/ai-skills-shortage"
  },
  {
    date: "MAY 6, 2025",
    title: "PAG acquires NashTech, a subsidiary of Nash Squared",
    link: "/news/pag-acquisition"
  }
];
 const brands = [
    { name: 'Harvey Nash', logo: '/images/harvey-nash.jpg' },
    { name: 'FLEXHUS', logo: '/images/flexhus.png' },
    { name: 'spinks', logo: '/images/spinks.png' },
    { name: 'crimson', logo: '/images/crimson.png' },
    { name: 'Talent International', logo: '/images/talent.png' }
  ];
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center mt-14 justify-center bg-cover bg-center" 
           style={{ backgroundImage: "url(/images/brain.jpg)" }}>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">
            Digital Leadership Report 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
           Don't miss out! Make sure to download the full report and find out what's on the minds of Digital Leaders right now.
          </p>
          {/* Button */}
        <Link
          href="/Insights/Digital-Leadership-Report-2025"
          className="inline-block bg-[#00d9a6] hover:bg-[#00c495] text-[#001f26] font-semibold px-8 py-3 rounded-md transition-colors duration-300"
        >
          Find out more here
        </Link>
        </div>
      </div>

    <div className="bg-white py-16 px-4">
      {/* Content Box with Dark Background */}
      <div className="max-w-7xl mx-auto bg-[#001f26] rounded-xl p-12 text-white">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          We are the leading global provider of technology and talent solutions.
        </h2>

        {/* Grid of Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* HOW WE HELP CLIENTS */}
          <Link href="/Quick-Links/What-we-do"className="group">
            <div className="h-full p-6 border border-gray-600 rounded-lg hover:border-[#00d9a6] transition-all duration-300 hover:shadow-lg hover:shadow-[#00d9a6]/20">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00d9a6] transition-colors">
                  HOW WE HELP CLIENTS
                </h3>
                <div className="w-16 h-1 bg-[#00d9a6] mx-auto mt-4 group-hover:w-20 transition-all"></div>
              </div>
            </div>
          </Link>

          {/* OUR INFLUENCE & THINKING */}
          <Link href="/Insights/Comment-Analysis" className="group">
            <div className="h-full p-6 border border-gray-600 rounded-lg hover:border-[#00d9a6] transition-all duration-300 hover:shadow-lg hover:shadow-[#00d9a6]/20">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00d9a6] transition-colors">
                  OUR INFLUENCE & THINKING
                </h3>
                <div className="w-16 h-1 bg-[#00d9a6] mx-auto mt-4 group-hover:w-20 transition-all"></div>
              </div>
            </div>
          </Link>

          {/* JOIN US */}
          <Link href="/join-us" className="group">
            <div className="h-full p-6 border border-gray-600 rounded-lg hover:border-[#00d9a6] transition-all duration-300 hover:shadow-lg hover:shadow-[#00d9a6]/20">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00d9a6] transition-colors">
                  JOIN US
                </h3>
                <div className="w-16 h-1 bg-[#00d9a6] mx-auto mt-4 group-hover:w-20 transition-all"></div>
              </div>
            </div>
          </Link>

          {/* OUR BRANDS */}
          <Link href="/Quick-Links/Our-Brands" className="group">
            <div className="h-full p-6 border border-gray-600 rounded-lg hover:border-[#00d9a6] transition-all duration-300 hover:shadow-lg hover:shadow-[#00d9a6]/20">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00d9a6] transition-colors">
                  OUR BRANDS
                </h3>
                <div className="w-16 h-1 bg-[#00d9a6] mx-auto mt-4 group-hover:w-20 transition-all"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>

    <div className="bg-white py-16 px-4">
      {/* Content Box with Dark Background */}
      <div className="max-w-4xl mx-auto bg-[#001f26] rounded-lg p-12 text-white text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Transforming the Enterprise
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Find out how Nash Squared can help you build your digital capability through technology and talent.
        </p>
        
        {/* Button */}
        <Link
          href="/Quick-Links/What-we-do"
          className="inline-block bg-[#00d9a6] hover:bg-[#00c495] text-[#001f26] font-semibold px-8 py-3 rounded-md transition-colors duration-300"
        >
          Find out more about how we can help
        </Link>
      </div>
    </div>

    <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Replace with your actual robot/AI image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/robot.jpg"
          alt="Robotics and AI background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-white max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Robotics and AI: A Future You're Not Prepared For
        </h1>
        
        <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
          In our third 'Tech Flix' film, David Savage (Nash Squared's Group Technology Evangelist) explores the challenges facing organisations as the adoption of Generative AI picks up pace. Are we prepared, have policies been thought through, and is the regulatory environment going to foster successful implementations of new technology?
        </p>
        
        <Link
          href="/watch-film"
          className="inline-block bg-[#00d9a6] hover:bg-[#00c495] text-[#001f26] font-bold px-8 py-3 rounded-md text-lg transition-colors duration-300"
        >
          Watch the film now
        </Link>
      </div>
    </div>

    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1f3a] mb-3">
          Helping to make you a stronger Digital Leader
        </h2>
        <div className="w-20 h-1 bg-red-600 mb-4" />
        <p className="text-lg text-gray-700 mb-12">
          Strategic insight on issues facing leaders across the technology sector
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {topics.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src="/images/globe-icon-svg.jpg"
                alt="Globe Icon"
                width={50}
                height={50}
              />
              <Link href={item.link} className="text-blue-800 text-lg font-bold mt-4 mb-2 hover:underline">
                {item.title}
              </Link>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

       <div className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
     style={{ 
       backgroundImage: "linear-gradient(rgba(0, 31, 38, 0.8), rgba(0, 31, 38, 0.8)), url(/images/brain.jpg)",
       backgroundPosition: 'center 30%'
     }}>
  <div className="absolute inset-0 bg-gradient-to-b from-[#001f26]/90 to-white/0 z-0"></div>
  
  <div className="relative z-10 text-center text-white px-4 max-w-4xl">
    <div className="mb-6">
      <span className="inline-block bg-[#00d9a6] text-[#001f26] text-sm font-bold px-4 py-1 rounded-full mb-4">
        NEW REPORT
      </span>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-tight">
        Digital Leadership<br /><span className="text-[#00d9a6]">Report 2025</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
        The world's largest and longest-running survey of senior technology decision makers.
      </p>
    </div>
    
   <Link
          href="Insights/Tech-Flix"
          className="inline-block bg-[#00d9a6] hover:bg-[#00c495] text-[#001f26] font-bold px-8 py-3 rounded-md text-lg transition-colors duration-300"
        >
         Download your full report
        </Link>
    
   
  </div>
</div>

{/* White background content section */}
<div className="bg-white py-20 px-4">
  <div className="max-w-7xl mx-auto">
    {/* Your content here */}
  </div>
</div>


    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {newsItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.link}
              className="group block hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-full border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6">
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                    {item.date}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="relative h-48 w-full">
                    <Image
                    src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/insights"
            className="inline-block bg-[#00d9a6] hover:bg-[#00c495] text-[#001f26] font-bold px-8 py-3 rounded-md text-lg transition-colors duration-300"
          >
            More News & Insights
          </Link>
        </div>
      </div>
    </section>
  

    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
              TRANSFORM YOUR CAREER
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              It's time for an adventure and our culture is what sets us apart. Here at Nash Squared we give you the freedom to determine your own direction and deliver in your own style.
            </p>
            <Link
              href="/careers"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
            >
              Visit our dedicated Careers Website
            </Link>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/workus.jpg"
                alt="Nash Squared workplace culture"
                fill
                className="object-cover"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  
<section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We're ready to help you build a limitless future
        </h2>
        <Link 
          href="/Contact-us" 
          className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
        >
          Contact us
        </Link>
      </div>
    </section>


    <div className="bg-white py-8 flex flex-col items-center">
  <div className="w-full max-w-6xl px-4"> {/* Adjust max-w-6xl to control maximum width */}
    <h1 className="text-2xl font-bold mb-4 text-center">Our Nash Squared Brands</h1>
    <div className="border-t border-gray-300 mb-4 w-full"></div>
    
    <div className="grid grid-cols-5 gap-2"> {/* Reduced gap from gap-4 to gap-2 */}
      <div className="flex justify-center">
        <Image 
          src="/images/harsh-nash.jpg" 
          alt="Harvey Nash" 
          width={150} 
          height={50}
          className="object-contain"
        />
      </div>
      
      <div className="flex justify-center">
        <Image 
          src="/images/flex.png" 
          alt="FLEXHUS" 
          width={150} 
          height={50}
          className="object-contain"
        />
      </div>
      
      <div className="flex justify-center">
        <Image 
          src="/images/spinks.jpg" 
          alt="spinks" 
          width={150} 
          height={50}
          className="object-contain"
        />
      </div>
      
      <div className="flex justify-center">
        <Image 
          src="/images/crimson.jpg" 
          alt="crimson" 
          width={150} 
          height={50}
          className="object-contain"
        />
      </div>
      
      <div className="flex justify-center">
        <Image 
          src="/images/talent.jpg" 
          alt="Talent" 
          width={150} 
          height={50}
          className="object-contain"
        />
      </div>
    </div>
  </div>
</div>
 
    <Footer />
    </>
  );
};

export default DigitalLeadershipBanner;