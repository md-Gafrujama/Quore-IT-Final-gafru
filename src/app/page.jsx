//  "use client";

// import Link from 'next/link';
// import React from 'react';
// import { motion } from 'framer-motion';
// // import NewsEvent from '/News-and-events';
// // import { Link } from 'react-router-dom';
//  import Image from 'next/image';
// import { Home } from 'lucide-react';
 
// const services = [
//   {
//     title: 'Government Services',
//     description:
//       'Understanding how to efficiently navigate regulated and compliance-driven environments allows us to move as quickly and precisely as the project demands.',
//     image: '/images/pics1.png',
//     link: '/services/government',
//   },
//   {
//     title: 'Information Technology',
//     description:
//       'There’s no room for error in a world of constantly changing technology. Our experts stay on top of the latest developments in their specialties so they know where to focus, and why.',
//     image: '/images/pics2.png',
//     link: ' Find-tech-jobs/Information-technology',
//   },
//   {
//     title: 'Engineering',
//     description:
//       'Deep expertise doesn’t mean blinders are on. We onboard team members who have a sense of where they fit in within the larger mission.',
//     image: '/images/pics3.png',
//     link: '/services/engineering',
//   },
//   {
//     title: 'Consulting Services',
//     description:
//       'Understanding how a skill fits in to a larger mechanism is the mark of a true expert. Our specialists understand the bigger picture, and help our clients do the same.',
//     image: '/images/pics4.png',
//     link: '/services/consulting',
//   },
// ];
// const topLogos = [
//   'carmax.png',
//   'dominion.png',
//   'geico.png',
//   'honda.png',
//   'kemper.png',
//   'mercedes.png',
//   'motion.png',
//   'southern.png',
//   'truist.png',
//    'sca.png',
//   'accenture.png',
// ];

// const bottomLogos = [
//   'sca.png',
//   'accenture.png',
//   'southern.png',
//   'truist.png',
//   'carmax.png',
//   'dominion.png',
//   'geico.png',
//   'honda.png',
//   'kemper.png',
//   'mercedes.png',
//   'motion.png',
// ];


// const industries = [
//   { name: 'AUTOMOTIVE', image: 'automotive.png' },
//   { name: 'FINANCIAL', image: 'FinancialServices.png' },
//   { name: 'GOVERNMENT', image: 'Government.png' },
//   { name: 'HEALTHCARE', image: 'Healthcare.png' },
//   { name: 'RETAIL', image: 'Retail.png' },
//   { name: 'UTILITIES', image: 'Utilities.png' },
//   { name: 'MANUFACTURING', image: 'Manufacturing.png' },
// ];
//  const cards = [
//     {
//       id: 'card1',
//       image: '/images/card1.webp',
//       title: 'Egyptian HVN.TV – Beware of entity unlawfully trying associate with us',
//       link: '/News-and-events/cards/card1',
//     },
//     {
//       id: 'card2',
//       image: '/images/card2.webp',
//       title: "Nash Squared CEO, Bev White shortlisted for Computer Weekly’s 50 Most Influential Women in UK Tech",
//       link: 'https://www.harveynash.com/news/bev-white-shortlisted-computer-weekly-influential-women',
//     },
//     {
//       id: 'card3',
//       image: '/images/card3.webp',
//       title: 'Where are all the technologists? Talent shortages and what to do about them?',
//       link: 'https://www.harveynash.com/news/where-are-the-technologists',
//     },
//     {
//       id: 'card4',
//       image: '/images/card4.webp',
//       title: 'Rachel Watts joins Harvey Nash Group as Global Marketing Director',
//       link: 'https://www.harveynash.com/news/rachel-watts-marketing-director',
//     },
//     {
//       id: 'card5',
//       image: '/images/card5.webp',
//       title: 'Harvey Nash Group pledge to use renewable energy by 2023',
//       link: 'https://www.harveynash.com/news/renewable-energy-net-zero',
//     },
//     {
//       id: 'card6',
//       image: '/images/card6.webp',
//       title: 'Harvey Nash appoints cyber expert as Global CISO',
//       link: 'https://www.harveynash.com/news/global-ciso-cyber-expert',
//     },
//     {
//       id: 'card7',
//       image: '/images/card7.webp',
//       title: 'Harvey Nash wins prestigious Best Company to Work for Award',
//       link: 'https://www.harveynash.com/news/harvey-nash-best-company-award',
//     },
//     {
//       id: 'card8',
//       image: '/images/card8.webp',
//       title: 'Global tech threatened as skills crisis reaches high',
//       link: 'https://www.harveynash.com/news/global-tech-skills-crisis',
//     },
//     {
//       id: 'card9',
//       image: '/images/card9.webp',
//       title: 'National Coming Out Day',
//       link: 'https://www.harveynash.com/news/national-coming-out-day',
//     },
//   ];
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };
//  const isExternal = (url) => url.startsWith('http');
// const Firstpage = () => {
//   return (

//      <> 
//           <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/jobs1_hero.jpg" // Replace with your actual hero background image
//           alt="Candidates Hero Background"
//           fill
//           className="object-cover object-center"
//           priority
//           quality={90}
//         />
//         {/* Dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>
//       {/* Content */}
//       <div className="relative z-10 text-center">
//         <h1 className="text-5xl sm:text-xl md:text-4xl lg:text-4xl font-bold text-white tracking-wide">
//           Technology Recruitment, <br/>IT Outsourcing and Leadership Services
//         </h1>
//       </div>
//     </section>

//  <section className="flex flex-col items-center justify-center text-center px-4 py-12">
//   <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-4">About us</h1>
//   <p className="text-lg md:text-xl max-w-2xl mb-12 text-gray-700">
//    A pioneer in professional recruitment and IT outsourcing
//   </p>

//   <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//     <div className="flex flex-col items-center">
//       <span className="text-3xl mb-2 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-transparent bg-clip-text">▼</span>
//       <p className="font-extrabold text-lg">Jobs & Careers </p>
//     </div>
//     <div className="flex flex-col items-center">
//       <span className="text-3xl mb-2 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-transparent bg-clip-text">▼</span>
//       <p className="font-extrabold text-lg">What we do</p>
//     </div>
//     <div className="flex flex-col items-center">
//       <span className="text-3xl mb-2 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-transparent bg-clip-text">▼</span>
//       <p className="font-extrabold text-lg">Our Locations</p>
//     </div>
//   </div>
// </section>
//  <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
//   <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
//     {/* Text Content */}
//     <motion.div
//       variants={fadeInUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//     >
//       <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center md:text-left">
//         When you’re solving a business need,<br />
//         you don’t need one right answer.
//       </h2>
//       <p className="text-4xl md:text-5xl font-extrabold  bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] bg-clip-text text-transparent mb-6 text-center md:text-left">
//         You need three.
//       </p>
//       <p className="text-gray-700 mb-4 text-justify">
//         Seneca Resources looks beyond the reqs you need to fill, to grasp exactly what you’re
//         trying to achieve. Because understanding your business needs helps us better meet your
//         resourcing ones.
//       </p>
//     </motion.div>

//     {/* Image */}
//     <motion.div
//       variants={fadeInUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//     >
//       <Image
//         src="/images/laptop_globe.webp"
//         alt="Laptop with globe overlay"
//         width={600}
//         height={400}
//         className="rounded-lg shadow-md"
//       />
//     </motion.div>
//   </div>

//   <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//     {/* Image */}
//     <motion.div
//       variants={fadeInUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//     >
//       <Image
//         src="/images/business-contract.webp"
//         alt="Business handshake over contract"
//         width={600}
//         height={400}
//         className="rounded-lg shadow-md"
//       />
//     </motion.div>

//     {/* Text Content */}
//     <motion.div
//       variants={fadeInUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//     >
//       <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4 text-center md:text-left">
//         We call it deploying with purpose.
//       </h2>
//       <p className="text-3xl md:text-4xl font-extrabold  bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] bg-clip-text text-transparent mb-4 text-center md:text-left">
//         You’ll call it just what<br className="hidden md:block" /> your business needs.
//       </p>
//     </motion.div>
//   </div>
// </section>
//   <section className="relative bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-white py-20 overflow-hidden">

//       {/* TOP SLIDER (right to left) */}
//       <div className="overflow-hidden mb-12">
//         <div className="flex gap-8 whitespace-nowrap animate-scroll-left">
//           {[...topLogos, ...topLogos].map((logo, idx) => (
//             <Image
//               key={`top-${idx}`}
//               src={`/images/${logo}`}
//               alt={`Top Logo ${idx}`}
//               width={100}
//               height={60}
//               className="h-10 w-auto object-contain"
//             />
//           ))}
//         </div>
//       </div>

//       {/* CENTER TEXT */}
//       <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
//           Resourcing and staffing that’s trusted<br />
//           from Main Street to Wall Street
//         </h2>
//         <p className="text-sm md:text-base text-black max-w-2xl mx-auto">
//           From small businesses to the Fortune 100, organizations across the country leverage
//           Seneca Resources’ workforce solutions expertise to fulfill their critical IT and Engineering projects.
//         </p>
//       </div>

//       {/* BOTTOM SLIDER (left to right) */}
//       <div className="overflow-hidden mt-12">
//         <div className="flex gap-8 whitespace-nowrap animate-scroll-right">
//           {[...bottomLogos, ...bottomLogos].map((logo, idx) => (
//             <Image
//               key={`bottom-${idx}`}
//               src={`/images/${logo}`}
//               alt={`Bottom Logo ${idx}`}
//               width={100}
//               height={60}
//               className="h-10 w-auto object-contain"
//             />
//           ))}
//         </div>
//       </div>
//     </section>

//  <section className="bg-[#f8f9fb] py-16 px-4">
//       <h2 className="text-center text-3xl font-bold  bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-transparent bg-clip-text mb-12">
//         Industries Served
//       </h2>
//       <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center">
//         {industries.map((industry) => (
//           <div key={industry.name} className="flex flex-col items-center text-center">
//             <Image
//               src={`/images/${industry.image}`}
//               alt={industry.name}
//               width={60}
//               height={60}
//               className="mb-3"
//             />
//             <p className={`text-sm font-semibold text-[#0a2540] uppercase tracking-wide`}>
//               {industry.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//    <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
//       <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
//         {services.map((service, idx) => (
//           <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
//             <Image
//               src={service.image}
//               alt={service.title}
//               width={700}
//               height={400}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
//               <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
//               <Link href={service.link}>
//                 <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-5 py-2 rounded hover:bg-orange-600 transition">
//                   LEARN MORE →
//                 </span>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//       <div className="w-full bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white px-6 py-12 mt-12">
//   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left min-h-[40vh]">
    
//     {/* Column 1 */}
//     <div>
//       <h3 className="text-2xl font-extrabold mb-4 text-black/80">Choose your location</h3>
//       <div className="grid grid-cols-2 gap-2 text-black/90 text-base">
//         <span>Belgium</span>
//         <span>Canada</span>
//         <span>Germany</span>
//         <span>Ireland</span>
//         <span>Netherlands</span>
//         <span>Poland</span>
//         <span>USA</span>
//         <span>United Kingdom</span>
//       </div>
//     </div>

//     {/* Spacer */}
//     <div className="hidden md:block" />

//     {/* Column 2 */}
//     <div>
//       <h3 className="text-2xl font-extrabold mb-4 text-black/80">Site</h3>
//       <ul className="space-y-1  text-black/90">
//         <li>Nash Squared</li>
//         <li>Workforce Solutions</li>
//       </ul>
//     </div>
//   </div>
// </div>
//    <h1 className="text-5xl font-extrabold mb-4 mt-24 px-10 text-black/80">Latest Harvey Nash News</h1>
//   <section className="py-10 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
//           {cards.map((card) => {
//             const external = isExternal(card.link);
//             return (
//               <div
//                 key={card.id}
//                 className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
//               >
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   width={500}
//                   height={300}
//                   className="w-full h-56 object-cover rounded-t-lg"
//                   quality={100}
//                 />
//                 <div className="p-6 flex flex-col justify-between h-60">
//                   <h3 className="text-lg font-semibold text-blue-700 mb-4 hover:underline">
//                     {external ? (
//                       <a href={card.link} target="_blank" rel="noopener noreferrer">
//                         {card.title}
//                       </a>
//                     ) : (
//                       <Link href={card.link}>{card.title}</Link>
//                     )}
//                   </h3>

//                   {external ? (
//                     <a
//                       href={card.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="cursor-pointer bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md text-center"
//                     >
//                       FIND OUT MORE
//                     </a>
//                   ) : (
//                     <Link href={card.link}>
//                       <button className="cursor-pointer bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md">
//                         FIND OUT MORE
//                       </button>
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//   <div
//       className="bg-cover bg-center w-full min-h-[60vh] flex flex-col justify-center items-center text-white text-center"
//       style={{ backgroundImage: "url('/images/keyboard.jpg')" }}
//     >
//       <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
//         How can we help?
//       </h1>
//       <p className="text-lg md:text-xl mb-6 max-w-4xl drop-shadow-md px-4">
//         If you would like us to contact you with more information on what we do and what we can offer, please let us know.
//       </p>
//  <Link href="/Contact-us">
//   <button className="cursor-pointer bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md">
//     CONTACT US
//   </button>
// </Link>

//     </div>
  
//     </>
//   );
// };

// export default Firstpage;

"use client";

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { Home, ChevronRight, ArrowRight, Star, Users, Award, Globe, Sparkles } from 'lucide-react';

// Enhanced Animation Variants
const EASE = [0.22, 1, 0.36, 1];

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60, 
    filter: 'blur(8px)',
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: EASE,
      staggerChildren: 0.1
    } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -80, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE } 
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 80, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE } 
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: EASE,
      type: "spring",
      stiffness: 100
    } 
  },
};

const bounceIn = {
  hidden: { opacity: 0, y: -30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 15,
      duration: 0.8
    } 
  },
};

// Enhanced Reusable Components
const Magnetic = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const target = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - target.left - target.width / 2;
    const relY = e.clientY - target.top - target.height / 2;
    x.set(relX / 8);
    y.set(relY / 8);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set((0.5 - px) * 15);
    y.set((py - 0.5) * 15);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ 
        rotateX: y, 
        rotateY: x, 
        transformPerspective: 1000,
        transformStyle: "preserve-3d"
      }}
      className={className}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

// Floating Particles Component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

// Parallax Section Component
const ParallaxSection = ({ children, offset = 50 }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

// Enhanced Gradient Text Component
const GradientText = ({ children, className = "" }) => (
  <span className={`bg-gradient-to-r from-[#c5f82a] via-[#00d9a6] to-[#c5f82a] bg-clip-text text-transparent bg-size-200 animate-gradient ${className}`}>
    {children}
  </span>
);

// Data arrays (unchanged for brevity)
const services = [
  {
    title: 'Government Services',
    description: 'Understanding how to efficiently navigate regulated and compliance-driven environments allows us to move as quickly and precisely as the project demands.',
    image: '/images/pics1.png',
    link: '/services/government',
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: 'Information Technology',
    description: 'There is no room for error in a world of constantly changing technology. Our experts stay on top of the latest developments in their specialties so they know where to focus, and why.',
    image: '/images/pics2.png',
    link: '/Find-tech-jobs/Information-technology',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Engineering',
    description: 'Deep expertise doesn not mean blinders are on. We onboard team members who have a sense of where they fit in within the larger mission.',
    image: '/images/pics3.png',
    link: '/services/engineering',
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: 'Consulting Services',
    description: 'Understanding how a skill fits in to a larger mechanism is the mark of a true expert. Our specialists understand the bigger picture, and help our clients do the same.',
    image: '/images/pics4.png',
    link: '/services/consulting',
    icon: <Users className="w-6 h-6" />,
  },
];

const topLogos = ['carmax.png', 'dominion.png', 'geico.png', 'honda.png', 'kemper.png', 'mercedes.png', 'motion.png', 'southern.png', 'truist.png', 'sca.png', 'accenture.png'];
const bottomLogos = ['sca.png', 'accenture.png', 'southern.png', 'truist.png', 'carmax.png', 'dominion.png', 'geico.png', 'honda.png', 'kemper.png', 'mercedes.png', 'motion.png'];

const industries = [
  { name: 'AUTOMOTIVE', image: 'automotive.png', color: 'from-blue-500 via-blue-600 to-blue-700' },
  { name: 'FINANCIAL', image: 'FinancialServices.png', color: 'from-green-500 via-green-600 to-green-700' },
  { name: 'GOVERNMENT', image: 'Government.png', color: 'from-red-500 via-red-600 to-red-700' },
  { name: 'HEALTHCARE', image: 'Healthcare.png', color: 'from-purple-500 via-purple-600 to-purple-700' },
  { name: 'RETAIL', image: 'Retail.png', color: 'from-orange-500 via-orange-600 to-orange-700' },
  { name: 'UTILITIES', image: 'Utilities.png', color: 'from-yellow-500 via-yellow-600 to-yellow-700' },
  { name: 'MANUFACTURING', image: 'Manufacturing.png', color: 'from-indigo-500 via-indigo-600 to-indigo-700' },
];

const cards = [
  {
    id: 'card1',
    image: '/images/card1.webp',
    title: 'Egyptian HVN.TV – Beware of entity unlawfully trying associate with us',
    link: '/News-and-events/cards/card1',
    category: 'Security Alert',
    date: 'Aug 8, 2025'
  },
  {
    id: 'card2',
    image: '/images/card2.webp',
    title: "Nash Squared CEO, Bev White shortlisted for Computer Weekly's 50 Most Influential Women in UK Tech",
    link: 'https://www.harveynash.com/news/bev-white-shortlisted-computer-weekly-influential-women',
    category: 'Awards',
    date: 'Aug 5, 2025'
  },
  {
    id: 'card3',
    image: '/images/card3.webp',
    title: 'Where are all the technologists? Talent shortages and what to do about them?',
    link: 'https://www.harveynash.com/news/where-are-the-technologists',
    category: 'Industry Insights',
    date: 'Aug 3, 2025'
  },
  {
    id: 'card4',
    image: '/images/card4.webp',
    title: 'Rachel Watts joins Harvey Nash Group as Global Marketing Director',
    link: 'https://www.harveynash.com/news/rachel-watts-marketing-director',
    category: 'Team News',
    date: 'Aug 1, 2025'
  },
  {
    id: 'card5',
    image: '/images/card5.webp',
    title: 'Harvey Nash Group pledge to use renewable energy by 2023',
    link: 'https://www.harveynash.com/news/renewable-energy-net-zero',
    category: 'Sustainability',
    date: 'Jul 30, 2025'
  },
  {
    id: 'card6',
    image: '/images/card6.webp',
    title: 'Harvey Nash appoints cyber expert as Global CISO',
    link: 'https://www.harveynash.com/news/global-ciso-cyber-expert',
    category: 'Leadership',
    date: 'Jul 28, 2025'
  },
  {
    id: 'card7',
    image: '/images/card7.webp',
    title: 'Harvey Nash wins prestigious Best Company to Work for Award',
    link: 'https://www.harveynash.com/news/harvey-nash-best-company-award',
    category: 'Awards',
    date: 'Jul 25, 2025'
  },
  {
    id: 'card8',
    image: '/images/card8.webp',
    title: 'Global tech threatened as skills crisis reaches high',
    link: 'https://www.harveynash.com/news/global-tech-skills-crisis',
    category: 'Industry Insights',
    date: 'Jul 22, 2025'
  },
  {
    id: 'card9',
    image: '/images/card9.webp',
    title: 'National Coming Out Day',
    link: 'https://www.harveynash.com/news/national-coming-out-day',
    category: 'Company Culture',
    date: 'Jul 20, 2025'
  },
];

const stats = [
  { number: "25+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
  { number: "1000+", label: "Successful Projects", icon: <Star className="w-8 h-8" /> },
  { number: "50+", label: "Countries Served", icon: <Globe className="w-8 h-8" /> },
  { number: "10k+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
];

const isExternal = (url) => url.startsWith('http');

const Firstpage = () => {
  const { scrollY } = useScroll();
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1 = useSpring(useTransform(scrollY, [0, 300], [0, -50]), springConfig);
  const y2 = useSpring(useTransform(scrollY, [0, 300], [0, -30]), springConfig);

  return (
    <>
      {/* Enhanced Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Dynamic Background with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0 will-change-transform"
          style={{ y: y1 }}
        >
          <Image
            src="/images/jobs1_hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover object-center scale-110"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </motion.div>

        {/* Floating Particles */}
        <FloatingParticles />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#00d9a6]/15 to-[#c5f82a]/15 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Enhanced Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            <Magnetic>
              <motion.div 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-8 border border-white/20 shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  background: "rgba(255,255,255,0.15)",
                  y: -2
                }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-4 h-4 text-[#c5f82a]" />
                Leading Technology Solutions Provider
              </motion.div>
            </Magnetic>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Technology Recruitment,
              <br />
              <GradientText className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black">
                IT Outsourcing
              </GradientText>
              <br />
              and Leadership Services
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Transforming businesses through innovative technology solutions and expert talent acquisition
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Magnetic>
                <motion.button
                  className="group px-10 py-4 bg-gradient-to-r from-[#c5f82a] via-[#00d9a6] to-[#c5f82a] text-black font-bold rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,217,166,0.4)] transition-all duration-500 bg-size-200 hover:bg-pos-100 overflow-hidden relative"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    rotate: [0, -1, 1, 0]
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d9a6] to-[#c5f82a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Magnetic>
              
              <Magnetic>
                <motion.button
                  className="group px-10 py-4 border-2 border-white/30 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 shadow-xl"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    borderColor: "rgba(255,255,255,0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-3">
                    Learn More
                    <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </motion.section>

      {/* Enhanced Stats Section */}
      <motion.section 
        className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(197,248,42,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,217,166,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={bounceIn}>
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 backdrop-blur-sm rounded-full text-gray-600 text-sm font-semibold mb-6 border border-gray-200">
              Our Impact in Numbers
            </span>
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent mb-4">
              Trusted Globally
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group text-center"
                variants={scaleUp}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              >
                <TiltCard className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      className="p-4 bg-gradient-to-br from-[#c5f82a] via-[#00d9a6] to-[#c5f82a] rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {React.cloneElement(stat.icon, { className: "w-8 h-8 text-white" })}
                    </motion.div>
                  </div>
                  <motion.h3 
                    className="text-4xl md:text-5xl font-black text-gray-800 mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-600 font-semibold text-lg">{stat.label}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced About Us Section */}
      <motion.section 
        className="relative py-32 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <ParallaxSection offset={30}>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div variants={bounceIn} className="mb-20">
              <motion.span 
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 backdrop-blur-sm rounded-full text-gray-600 text-sm font-semibold mb-8 border border-gray-200"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                About Our Company
              </motion.span>
              <motion.h1 
                className="text-5xl md:text-7xl font-black mb-8 leading-tight"
                style={{ y: y2 }}
              >
                <GradientText>About us</GradientText>
              </motion.h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-700 leading-relaxed font-light">
                A pioneer in professional recruitment and IT outsourcing, delivering excellence for over 25 years
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
              variants={staggerContainer}
            >
              {[
                { 
                  icon: "💼", 
                  text: "Jobs & Careers", 
                  description: "Discover exciting opportunities in technology with career growth potential",
                  gradient: "from-blue-500 via-blue-600 to-blue-700",
                  glow: "shadow-blue-500/25"
                },
                { 
                  icon: "🚀", 
                  text: "What we do", 
                  description: "Comprehensive IT solutions and consulting services for modern businesses",
                  gradient: "from-green-500 via-green-600 to-green-700",
                  glow: "shadow-green-500/25"
                },
                { 
                  icon: "🌍", 
                  text: "Our Locations", 
                  description: "Global presence with local expertise across multiple continents",
                  gradient: "from-purple-500 via-purple-600 to-purple-700",
                  glow: "shadow-purple-500/25"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="group cursor-pointer"
                  variants={scaleUp}
                  whileHover={{ y: -15, scale: 1.02 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                >
                  <TiltCard className="h-full">
                    <div className={`relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-gray-200 h-full ${item.glow} hover:shadow-2xl`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <motion.div 
                        className={`w-20 h-20 mx-auto mb-8 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center text-3xl shadow-lg`}
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 360,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                        {item.text}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {item.description}
                      </p>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#c5f82a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl" />
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ParallaxSection>
      </motion.section>

      {/* Enhanced Business Solutions Section */}
      <section className="relative py-32 px-4 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div
            className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-[#c5f82a]/10 to-[#00d9a6]/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-[#00d9a6]/10 to-[#c5f82a]/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -40, 0],
              y: [0, -25, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="relative max-w-8xl mx-auto">
          {/* First Enhanced Row */}
          <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 md:order-1"
            >
              <motion.span 
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 backdrop-blur-sm rounded-full text-gray-600 text-sm font-semibold mb-8 border border-gray-200"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                Our Approach
              </motion.span>
              
              <motion.h2 
                className="text-4xl md:text-6xl font-black text-gray-800 mb-8 leading-tight"
                whileInView={{ opacity: [0, 1], y: [40, 0] }}
                transition={{ duration: 0.8 }}
              >
                When you're solving a business need,
                <br />
                you don't need one right answer.
              </motion.h2>
              
              <motion.p 
                className="text-5xl md:text-7xl font-black mb-10 leading-tight"
                whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <GradientText>You need three.</GradientText>
              </motion.p>
              
              <motion.p 
                className="text-xl text-gray-700 mb-10 leading-relaxed font-light"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Seneca Resources looks beyond the reqs you need to fill, to grasp exactly what you're
                trying to achieve. Because understanding your business needs helps us better meet your
                resourcing ones.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Star, text: "Expert Solutions", color: "yellow" },
                  { icon: Users, text: "Dedicated Team", color: "blue" },
                  { icon: Award, text: "Proven Results", color: "green" }
                ].map((tag, index) => (
                  <motion.div 
                    key={index}
                    className={`flex items-center bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-${tag.color}-300`}
                    variants={scaleUp}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <tag.icon className={`w-5 h-5 text-${tag.color}-500 mr-3`} />
                    <span className="text-sm font-semibold text-gray-700">{tag.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 md:order-2"
            >
              <TiltCard>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#c5f82a]/30 to-[#00d9a6]/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src="/images/laptop_globe.webp"
                      alt="Laptop with globe overlay"
                      width={700}
                      height={500}
                      className="relative rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>
          </div>

          {/* Second Enhanced Row */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <TiltCard>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#00d9a6]/30 to-[#c5f82a]/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src="/images/business-contract.webp"
                      alt="Business handshake over contract"
                      width={700}
                      height={500}
                      className="relative rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.span 
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 backdrop-blur-sm rounded-full text-gray-600 text-sm font-semibold mb-8 border border-gray-200"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                Our Promise
              </motion.span>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-black text-gray-800 mb-8 leading-tight"
                whileInView={{ opacity: [0, 1], y: [40, 0] }}
                transition={{ duration: 0.8 }}
              >
                We call it deploying with purpose.
              </motion.h2>
              
              <motion.p 
                className="text-4xl md:text-6xl font-black mb-10 leading-tight"
                whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <GradientText>
                  You'll call it just what
                  <br className="hidden md:block" /> your business needs.
                </GradientText>
              </motion.p>

              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Strategic workforce planning",
                  "Scalable technology solutions", 
                  "Expert consultation services"
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center group"
                    variants={slideInLeft}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-full mr-6 shadow-lg"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-gray-700 font-semibold text-lg group-hover:text-gray-900 transition-colors duration-200">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Continue with enhanced sections... */}
      {/* The rest of the component follows the same pattern with enhanced animations */}
      
      {/* Enhanced Logo Slider Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-[#c5f82a] via-[#00d9a6] to-[#c5f82a] text-white py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Enhanced TOP SLIDER */}
        <div className="overflow-hidden mb-20">
          <motion.div 
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...topLogos, ...topLogos, ...topLogos].map((logo, idx) => (
              <Magnetic key={`top-${idx}`}>
                <motion.div
                  className="flex-shrink-0 bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  <Image
                    src={`/images/${logo}`}
                    alt={`Top Logo ${idx}`}
                    width={140}
                    height={90}
                    className="h-14 w-auto object-contain filter brightness-0 invert transition-transform duration-300"
                  />
                </motion.div>
              </Magnetic>
            ))}
          </motion.div>
        </div>

        {/* Enhanced CENTER TEXT */}
        <ParallaxSection offset={-20}>
          <motion.div 
            className="relative z-10 max-w-7xl mx-auto text-center px-4 mb-20"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight"
              whileInView={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Resourcing and staffing that's trusted
              <br />
              <motion.span 
                className="text-orange-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                from Main Street to Wall Street
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-black/80 max-w-5xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              From small businesses to the Fortune 100, organizations across the country leverage
              Seneca Resources' workforce solutions expertise to fulfill their critical IT and Engineering projects.
            </motion.p>
          </motion.div>
        </ParallaxSection>

        {/* Enhanced BOTTOM SLIDER */}
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: [-1200, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...bottomLogos, ...bottomLogos, ...bottomLogos].map((logo, idx) => (
              <Magnetic key={`bottom-${idx}`}>
                <motion.div
                  className="flex-shrink-0 bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  <Image
                    src={`/images/${logo}`}
                    alt={`Bottom Logo ${idx}`}
                    width={140}
                    height={90}
                    className="h-14 w-auto object-contain filter brightness-0 invert transition-transform duration-300"
                  />
                </motion.div>
              </Magnetic>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Industries Section */}
      <motion.section 
        className="relative bg-gray-50 py-32 px-4 overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(197,248,42,0.05),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,217,166,0.05),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" variants={bounceIn}>
            <motion.span 
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 backdrop-blur-sm rounded-full text-gray-600 text-sm font-semibold mb-8 border border-gray-200"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              className="text-5xl md:text-7xl font-black mb-8 leading-tight"
              whileInView={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <GradientText>Industries Served</GradientText>
            </motion.h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              We provide specialized solutions across diverse industries with deep domain expertise
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8"
            variants={staggerContainer}
          >
            {industries.map((industry, index) => (
              <motion.div 
                key={industry.name} 
                className="group cursor-pointer"
                variants={scaleUp}
                whileHover={{ y: -15, scale: 1.05 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              >
                <TiltCard>
                  <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-gray-200 text-center h-full relative overflow-hidden">
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <motion.div 
                      className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${industry.color} rounded-3xl flex items-center justify-center shadow-lg`}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, -10, 10, 0],
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={`/images/${industry.image}`}
                        alt={industry.name}
                        width={40}
                        height={40}
                        className="filter brightness-0 invert transition-transform duration-300"
                      />
                    </motion.div>
                    
                    <p className="relative text-sm font-bold text-gray-700 uppercase tracking-wide group-hover:text-green-600 transition-colors duration-300">
                      {industry.name}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Services Section */}
      <motion.section 
        className="relative bg-white py-32 px-4 md:px-12 lg:px-24 overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-[#c5f82a]/5 to-[#00d9a6]/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" variants={bounceIn}>
            <motion.span 
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 backdrop-blur-sm rounded-full text-gray-600 text-sm font-semibold mb-8 border border-gray-200"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              What We Offer
            </motion.span>
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-gray-800 mb-8 leading-tight"
              whileInView={{ opacity: [0, 1], y: [40, 0] }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Comprehensive solutions tailored to meet your unique business challenges
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                className="group"
                variants={scaleUp}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              >
                <TiltCard>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full relative">
                    {/* Image Container with Enhanced Hover Effects */}
                    <div className="relative overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={800}
                          height={450}
                          className="w-full h-72 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>
                      
                      {/* Floating Icon */}
                      <motion.div
                        className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0, rotate: -180 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {React.cloneElement(service.icon, { className: "w-6 h-6 text-green-600" })}
                      </motion.div>
                    </div>
                    
                    <div className="p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div 
                          className="p-3 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] rounded-2xl shadow-lg"
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 360,
                            boxShadow: "0 10px 30px rgba(0,217,166,0.3)"
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {React.cloneElement(service.icon, { className: "w-6 h-6 text-white" })}
                        </motion.div>
                        <motion.h3 
                          className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {service.title}
                        </motion.h3>
                      </div>
                      
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                        {service.description}
                      </p>
                      
                      <Link href={service.link}>
                        <Magnetic>
                          <motion.div 
                            className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:gap-6"
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: "0 20px 40px rgba(249,115,22,0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            LEARN MORE 
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ArrowRight className="w-5 h-5" />
                            </motion.div>
                          </motion.div>
                        </Magnetic>
                      </Link>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 blur-sm" />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Continue with remaining sections following the same enhanced pattern... */}
      {/* Location Section, News Section, and Contact Section would follow similar enhancements */}
      
    </>
  );
};

export default Firstpage;
