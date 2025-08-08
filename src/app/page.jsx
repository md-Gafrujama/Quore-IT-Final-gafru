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
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Home, ChevronRight, ArrowRight, Star, Users, Award, Globe } from 'lucide-react';

const services = [
  {
    title: 'Government Services',
    description:
      'Understanding how to efficiently navigate regulated and compliance-driven environments allows us to move as quickly and precisely as the project demands.',
    image: '/images/pics1.png',
    link: '/services/government',
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: 'Information Technology',
    description:
      'There is no room for error in a world of constantly changing technology. Our experts stay on top of the latest developments in their specialties so they know where to focus, and why.',
    image: '/images/pics2.png',
    link: ' Find-tech-jobs/Information-technology',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Engineering',
    description:
      'Deep expertise doesn not mean blinders are on. We onboard team members who have a sense of where they fit in within the larger mission.',
    image: '/images/pics3.png',
    link: '/services/engineering',
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: 'Consulting Services',
    description:
      'Understanding how a skill fits in to a larger mechanism is the mark of a true expert. Our specialists understand the bigger picture, and help our clients do the same.',
    image: '/images/pics4.png',
    link: '/services/consulting',
    icon: <Users className="w-6 h-6" />,
  },
];

const topLogos = [
  'carmax.png',
  'dominion.png',
  'geico.png',
  'honda.png',
  'kemper.png',
  'mercedes.png',
  'motion.png',
  'southern.png',
  'truist.png',
  'sca.png',
  'accenture.png',
];

const bottomLogos = [
  'sca.png',
  'accenture.png',
  'southern.png',
  'truist.png',
  'carmax.png',
  'dominion.png',
  'geico.png',
  'honda.png',
  'kemper.png',
  'mercedes.png',
  'motion.png',
];

const industries = [
  { name: 'AUTOMOTIVE', image: 'automotive.png', color: 'from-blue-500 to-blue-600' },
  { name: 'FINANCIAL', image: 'FinancialServices.png', color: 'from-green-500 to-green-600' },
  { name: 'GOVERNMENT', image: 'Government.png', color: 'from-red-500 to-red-600' },
  { name: 'HEALTHCARE', image: 'Healthcare.png', color: 'from-purple-500 to-purple-600' },
  { name: 'RETAIL', image: 'Retail.png', color: 'from-orange-500 to-orange-600' },
  { name: 'UTILITIES', image: 'Utilities.png', color: 'from-yellow-500 to-yellow-600' },
  { name: 'MANUFACTURING', image: 'Manufacturing.png', color: 'from-indigo-500 to-indigo-600' },
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

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const bounceIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    } 
  },
};

const isExternal = (url) => url.startsWith('http');

// Stats data
const stats = [
  { number: "25+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
  { number: "1000+", label: "Successful Projects", icon: <Star className="w-8 h-8" /> },
  { number: "50+", label: "Countries Served", icon: <Globe className="w-8 h-8" /> },
  { number: "10k+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
];

const Firstpage = () => {
  return (
    <> 
      {/* Hero Section with enhanced design */}
      <motion.section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image with Parallax Effect */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/images/jobs1_hero.jpg"
            alt="Candidates Hero Background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
        </motion.div>
        
        {/* Enhanced Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              ✨ Leading Technology Solutions Provider
            </motion.span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide mb-6 leading-tight">
              Technology Recruitment,
              <span className="block bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] bg-clip-text text-transparent">
                IT Outsourcing
              </span>
              and Leadership Services
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transforming businesses through innovative technology solutions and expert talent acquisition
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-black font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-[#c5f82a]/10 to-[#00d9a6]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="relative py-16 bg-white border-b"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={scaleUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                    {React.cloneElement(stat.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Us Section with enhanced design */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div variants={bounceIn} className="mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 rounded-full text-gray-600 text-sm font-medium mb-4">
              About Our Company
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              About us
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
              A pioneer in professional recruitment and IT outsourcing, delivering excellence for over 25 years
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            {[
              { 
                icon: "💼", 
                text: "Jobs & Careers", 
                description: "Discover exciting opportunities in technology",
                gradient: "from-blue-500 to-blue-600"
              },
              { 
                icon: "🚀", 
                text: "What we do", 
                description: "Comprehensive IT solutions and consulting",
                gradient: "from-green-500 to-green-600"
              },
              { 
                icon: "🌍", 
                text: "Our Locations", 
                description: "Global presence, local expertise",
                gradient: "from-purple-500 to-purple-600"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="group cursor-pointer"
                variants={scaleUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {item.text}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Business Solutions Section with improved layout */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* First Row */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 rounded-full text-gray-600 text-sm font-medium mb-6">
                Our Approach
              </span>
              
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                When you're solving a business need,
                <br />
                you don't need one right answer.
              </h2>
              
              <p className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] bg-clip-text text-transparent mb-8 leading-tight">
                You need three.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Seneca Resources looks beyond the reqs you need to fill, to grasp exactly what you're
                trying to achieve. Because understanding your business needs helps us better meet your
                resourcing ones.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Expert Solutions</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <Users className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Dedicated Team</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <Award className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Proven Results</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 md:order-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 rounded-3xl blur-xl"></div>
                <Image
                  src="/images/laptop_globe.webp"
                  alt="Laptop with globe overlay"
                  width={600}
                  height={400}
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 rounded-3xl blur-xl"></div>
                <Image
                  src="/images/business-contract.webp"
                  alt="Business handshake over contract"
                  width={600}
                  height={400}
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 rounded-full text-gray-600 text-sm font-medium mb-6">
                Our Promise
              </span>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
                We call it deploying with purpose.
              </h2>
              
              <p className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] bg-clip-text text-transparent mb-8 leading-tight">
                You'll call it just what
                <br className="hidden md:block" /> your business needs.
              </p>

              <div className="space-y-4">
                {[
                  "Strategic workforce planning",
                  "Scalable technology solutions", 
                  "Expert consultation services"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Slider Section with enhanced design */}
      <motion.section 
        className="relative bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-white py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

        {/* TOP SLIDER */}
        <div className="overflow-hidden mb-16">
          <motion.div 
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...topLogos, ...topLogos, ...topLogos].map((logo, idx) => (
              <motion.div
                key={`top-${idx}`}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={`/images/${logo}`}
                  alt={`Top Logo ${idx}`}
                  width={120}
                  height={80}
                  className="h-12 w-auto object-contain filter brightness-0 invert"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CENTER TEXT */}
        <motion.div 
          className="relative z-10 max-w-6xl mx-auto text-center px-4 mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Resourcing and staffing that's trusted
            <br />
            <span className="text-orange-300">from Main Street to Wall Street</span>
          </h2>
          <p className="text-lg md:text-xl text-black/80 max-w-4xl mx-auto leading-relaxed">
            From small businesses to the Fortune 100, organizations across the country leverage
            Seneca Resources' workforce solutions expertise to fulfill their critical IT and Engineering projects.
          </p>
        </motion.div>

        {/* BOTTOM SLIDER */}
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...bottomLogos, ...bottomLogos, ...bottomLogos].map((logo, idx) => (
              <motion.div
                key={`bottom-${idx}`}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={`/images/${logo}`}
                  alt={`Bottom Logo ${idx}`}
                  width={120}
                  height={80}
                  className="h-12 w-auto object-contain filter brightness-0 invert"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Industries Section with enhanced cards */}
      <motion.section 
        className="bg-gray-50 py-24 px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={bounceIn}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 rounded-full text-gray-600 text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-transparent bg-clip-text mb-6">
              Industries Served
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide specialized solutions across diverse industries with deep domain expertise
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6"
            variants={staggerContainer}
          >
            {industries.map((industry, index) => (
              <motion.div 
                key={industry.name} 
                className="group cursor-pointer"
                variants={scaleUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Image
                      src={`/images/${industry.image}`}
                      alt={industry.name}
                      width={32}
                      height={32}
                      className="filter brightness-0 invert"
                    />
                  </div>
                  <p className="text-sm font-bold text-gray-700 uppercase tracking-wide group-hover:text-green-600 transition-colors duration-300">
                    {industry.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section with enhanced design */}
      <motion.section 
        className="bg-white py-24 px-4 md:px-12 lg:px-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={bounceIn}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 rounded-full text-gray-600 text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your unique business challenges
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                variants={scaleUp}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={700}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-xl">
                      {React.cloneElement(service.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <Link href={service.link}>
                    <motion.div 
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group-hover:gap-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      LEARN MORE 
                      <ArrowRight className="w-5 h-5 transition-transform duration-300" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Location Section with enhanced design */}
      <motion.section 
        className="bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] py-24 px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Global Presence, Local Expertise
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              Find us in major cities worldwide, ready to serve your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8" />
                Choose your location
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Belgium', 'Canada', 'Germany', 'Ireland', 'Netherlands', 'Poland', 'USA', 'United Kingdom'].map((location, index) => (
                  <motion.div 
                    key={location}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 cursor-pointer transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    variants={fadeInUp}
                  >
                    <span className="text-white font-semibold">{location}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-8 h-8" />
                Our Brands
              </h3>
              <div className="space-y-4">
                {['Nash Squared', 'Workforce Solutions'].map((site, index) => (
                  <motion.div 
                    key={site}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 cursor-pointer transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    variants={fadeInUp}
                  >
                    <span className="text-white font-semibold text-lg">{site}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* News Section with enhanced design */}
      <motion.section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 rounded-full text-gray-600 text-sm font-medium mb-4">
              Stay Updated
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Latest Harvey Nash News
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest updates, insights, and industry news
            </p>
          </motion.div>
          
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {cards.map((card, index) => {
              const external = isExternal(card.link);
              return (
                <motion.article
                  key={card.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                  variants={scaleUp}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={500}
                        height={300}
                        className="w-full h-56 object-cover"
                        quality={100}
                      />
                    </motion.div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                        {card.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                        {card.date}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 leading-tight group-hover:text-green-600 transition-colors duration-300 line-clamp-3">
                      {external ? (
                        <a href={card.link} target="_blank" rel="noopener noreferrer">
                          {card.title}
                        </a>
                      ) : (
                        <Link href={card.link}>{card.title}</Link>
                      )}
                    </h3>

                    {external ? (
                      <motion.a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-[#c5f82a] hover:to-[#00d9a6] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group-hover:gap-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        READ MORE
                        <ChevronRight className="w-5 h-5 transition-transform duration-300" />
                      </motion.a>
                    ) : (
                      <Link href={card.link}>
                        <motion.button 
                          className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-[#c5f82a] hover:to-[#00d9a6] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group-hover:gap-4"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          READ MORE
                          <ChevronRight className="w-5 h-5 transition-transform duration-300" />
                        </motion.button>
                      </Link>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section with enhanced CTA */}
      <motion.section
        className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/keyboard.jpg')" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            variants={bounceIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
              Get In Touch
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              How can we help
              <span className="block bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] bg-clip-text text-transparent">
                transform your business?
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ready to take your technology initiatives to the next level? Let's discuss how our expertise can drive your success.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link href="/Contact-us">
              <motion.button 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-black font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                variants={scaleUp}
              >
                GET STARTED TODAY
                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </Link>
            
            <motion.button 
              className="inline-flex items-center gap-3 border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              variants={scaleUp}
            >
              SCHEDULE A CALL
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#c5f82a]/10 to-[#00d9a6]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </motion.section>
    </>
  );
};

export default Firstpage;

