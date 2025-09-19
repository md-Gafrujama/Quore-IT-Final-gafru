"use client";

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Home, ChevronRight, ArrowRight, Star, Users, Award, Globe, Shield, Target, CheckCircle, Heart } from 'lucide-react';

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

const Firstpage = () => {
  return (
    <> 
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ marginTop: '80px' }}
      >
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
  <Image
    src="/images/hero33.jpg"
    alt="Candidates Hero Background"
    fill
    className="object-cover object-center"
    priority
    quality={90}
  />
</div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
           
            
            {/* <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 leading-tight">
              Technology Recruitment,
              <span className="block bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] bg-clip-text text-transparent mb-[-5]">
                IT Outsourcing
              </span>
              and Leadership Services
            </h1> */}
            
            {/* <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transforming businesses through innovative technology solutions and expert talent acquisition. 
              We connect exceptional professionals with forward-thinking organizations.
            </p>
             */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-black font-bold text-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                GET STARTED TODAY
              </motion.button>
              
              <motion.button
                className="px-10 py-4 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                LEARN MORE
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* The Quore Advantage Section */}
   {/* The Quore Advantage Section */}
<section className="py-24 px-4 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <motion.div 
      className="text-center mb-20"
      variants={bounceIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 border border-gray-200 text-gray-700 text-sm font-semibold mb-8 uppercase tracking-wide ">
        Why Choose Us
      </span>
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
        <span className="block bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] bg-clip-text text-transparent">
          The Quore Advantage
        </span>
      </h2>
      <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-semibold">
        We believe building the right team goes beyond matching skills to job descriptions. Our approach is designed to ensure every hire adds real value to your business while fitting seamlessly into your culture.
      </p>
    </motion.div>

    {/* Advantage Cards */}
    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Understanding Your Needs */}
      <motion.div 
        className="bg-white border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
        variants={scaleUp}
        whileHover={{ y: -10, scale: 1.02 }}
      >
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
          <Users className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
          Understanding Your Needs
        </h3>
        
        <p className="text-gray-600 text-center leading-relaxed">
          We begin with listening. By engaging closely with your leadership and HR teams, we identify not just the technical requirements of a role, but also the values, goals, and culture that define your organization.
        </p>
      </motion.div>

      {/* Access to Trusted Talent Network */}
      <motion.div 
        className="bg-white border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
        variants={scaleUp}
        whileHover={{ y: -10, scale: 1.02 }}
      >
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
          <Globe className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-green-600 transition-colors duration-300">
          Access to a Trusted Talent Network
        </h3>
        
        <p className="text-gray-600 text-center leading-relaxed">
          With over a decade of experience in staffing and recruitment, our founders have built strong connections with top IT professionals. This network allows us to source candidates who are not only technically proficient but also dependable and adaptable.
        </p>
      </motion.div>

      {/* Rigorous Screening & Vetting */}
      <motion.div 
        className="bg-white border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
        variants={scaleUp}
        whileHover={{ y: -10, scale: 1.02 }}
      >
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
          <Shield className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-purple-600 transition-colors duration-300">
          Rigorous Screening & Vetting
        </h3>
        
        <p className="text-gray-600 text-center leading-relaxed">
          Every candidate undergoes a thorough evaluation process, from technical assessments to cultural fit checks. This ensures that the professionals we recommend are ready to deliver impact from day one.
        </p>
      </motion.div>

      {/* Flexible Staffing Solutions */}
      <motion.div 
        className="bg-white border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
        variants={scaleUp}
        whileHover={{ y: -10, scale: 1.02 }}
      >
        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
          <Target className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition-colors duration-300">
          Flexible Staffing Solutions
        </h3>
        
        <p className="text-gray-600 text-center leading-relaxed">
          Whether you're a startup in need of agile, versatile talent or an enterprise requiring specialized skills at scale, we tailor our solutions (contract, permanent, or project-based) to align with your business objectives.
        </p>
      </motion.div>

      {/* Partnership Beyond Hiring - Now Same Size */}
      <motion.div 
        className="bg-white border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
        variants={scaleUp}
        whileHover={{ y: -10, scale: 1.02 }}
      >
        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
          <Heart className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-red-600 transition-colors duration-300">
          Partnership Beyond Hiring
        </h3>
        
        <p className="text-gray-600 text-center leading-relaxed">
          We view staffing as more than a transaction - it's a partnership. By staying connected beyond placement, we ensure long-term success for both clients and candidates, creating teams that can grow and thrive together.
        </p>
      </motion.div>

      {/* Proven Results */}
      <motion.div 
        className="bg-white border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
        variants={scaleUp}
        whileHover={{ y: -10, scale: 1.02 }}
      >
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-indigo-600 transition-colors duration-300">
          Proven Results
        </h3>
        
        <p className="text-gray-600 text-center leading-relaxed">
          Our track record speaks for itself. We consistently deliver high-quality placements that drive business growth and contribute to long-term organizational success across diverse industries.
        </p>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* Our Commitment Section */}
    <section className="py-4 px-4 md:px-12 lg:px-24 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
     
        <span className="block bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] bg-clip-text text-transparent">
             Our Commitment
        </span>
      </h2>
      
      <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto front-semibold">
        We are committed to more than just filling roles, we are committed to building lasting partnerships that drive real business impact.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {/* Quality Over Quantity Card */}
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6 mx-auto">
          <Star className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Quality Over Quantity</h3>
        <p className="text-gray-600 text-center">Every candidate we recommend is carefully vetted to ensure the highest standards of technical expertise, reliability, and cultural alignment.</p>
      </motion.div>

      {/* Transparency & Trust Card */}
      <motion.div
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-6 mx-auto">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Transparency & Trust</h3>
        <p className="text-gray-600 text-center">We believe in open communication and complete honesty throughout the staffing process, so our clients always know what to expect.</p>
      </motion.div>

      {/* Tailored Solutions Card */}
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 mx-auto">
          <Target className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Tailored Solutions</h3>
        <p className="text-gray-600 text-center">No two businesses are the same. Whether you're a fast-growing startup or an established enterprise, we design staffing solutions that match your unique needs.</p>
      </motion.div>

      {/* Long-Term Value Card */}
      <motion.div
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-6 mx-auto">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Long-Term Value</h3>
        <p className="text-gray-600 text-center">Our role doesn't end with placement. We stay invested in the success of both our clients and candidates to ensure strong, lasting outcomes.</p>
      </motion.div>
    </div>

    {/* CTA Button */}
    <div className="text-center">
      <motion.button
        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-black font-bold px-10 py-4 hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        START YOUR JOURNEY
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </motion.button>
    </div>
  </div>
</section>


      {/* Logo Slider Section - Straight Line Scroll */}
      <motion.section 
        className="relative bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-white py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

        {/* TOP SLIDER - Continuous Right Movement */}
        <div className="overflow-hidden mb-16">
          <motion.div 
            className="flex gap-8 whitespace-nowrap w-max"
            animate={{ 
              x: [0, -2000]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {Array.from({ length: 4 }).map((_, groupIndex) => 
              topLogos.map((logo, idx) => (
                <div
                  key={`top-${groupIndex}-${idx}`}
                  className="flex-shrink-0 bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition-colors duration-300 w-32 h-20 flex items-center justify-center"
                >
                  <Image
                    src={`/images/${logo}`}
                    alt={`Partner Logo`}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain filter brightness-0 invert"
                  />
                </div>
              ))
            )}
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
            <span className="text-black/90">from Main Street to Wall Street</span>
          </h2>
          <p className="text-lg md:text-xl text-black/80 max-w-4xl mx-auto leading-relaxed">
            From small businesses to the Fortune 100, organizations across the country leverage
            Seneca Resources' workforce solutions expertise to fulfill their critical IT and Engineering projects.
          </p>
        </motion.div>

        {/* BOTTOM SLIDER - Continuous Left Movement */}
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-8 whitespace-nowrap w-max"
            animate={{ 
              x: [-2000, 0]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {Array.from({ length: 4 }).map((_, groupIndex) => 
              bottomLogos.map((logo, idx) => (
                <div
                  key={`bottom-${groupIndex}-${idx}`}
                  className="flex-shrink-0 bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition-colors duration-300 w-32 h-20 flex items-center justify-center"
                >
                  <Image
                    src={`/images/${logo}`}
                    alt={`Partner Logo`}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain filter brightness-0 invert"
                  />
                </div>
              ))
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section 
        className="bg-gray-50 py-24 px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-20" variants={bounceIn}>
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 border border-gray-200 text-gray-700 text-sm font-semibold mb-8 uppercase tracking-wide">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-transparent bg-clip-text mb-8">
              Industries Served
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide specialized solutions across diverse industries with deep domain expertise
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6"
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
                <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200 text-center min-h-[140px] flex flex-col items-center justify-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Image
                      src={`/images/${industry.image}`}
                      alt={industry.name}
                      width={32}
                      height={32}
                      className="filter brightness-0 invert"
                    />
                  </div>
                  <p className="text-xs font-bold text-gray-700 uppercase tracking-wide group-hover:text-green-600 transition-colors duration-300 leading-tight">
                    {industry.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}

{/* Ultra-Modern Responsive Services Section - White Background */}
<motion.section 
  className="relative bg-white py-20 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Subtle Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Geometric Pattern */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#c5f82a]/5 to-[#00d9a6]/3 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/3 to-purple-500/5 rounded-full blur-3xl transform -translate-x-48 translate-y-48"></div>
    
    {/* Subtle Grid */}
    <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-r from-gray-900 to-gray-600" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
      backgroundSize: '30px 30px'
    }}></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Premium Header */}
    <motion.div className="text-center mb-16 md:mb-24" variants={bounceIn}>
      <motion.span 
        className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#c5f82a]/10 to-[#00d9a6]/10 border border-gray-200/60 text-gray-700 text-sm md:text-base font-bold mb-6 md:mb-8 uppercase tracking-wider rounded-full shadow-sm backdrop-blur-sm"
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="w-2 h-2 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-full animate-pulse"></div>
        Premium Services
        <div className="w-2 h-2 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] rounded-full animate-pulse"></div>
      </motion.span>
      
      <motion.h2 
        className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 md:mb-8 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5f82a] to-[#00d9a6]">Services</span>
      </motion.h2>
      
      <motion.p 
        className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Comprehensive solutions tailored to meet your unique business challenges 
        and drive exceptional results
      </motion.p>
    </motion.div>

    {/* Responsive Services Grid */}
    <div className="grid gap-6 md:gap-8 lg:gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          className="group relative bg-white border border-gray-200/80 hover:border-gray-300/80 transition-all duration-500 shadow-lg hover:shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden"
          variants={scaleUp}
          whileHover={{ 
            y: -8,
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#c5f82a]/20 via-[#00d9a6]/20 to-orange-500/20 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          
          {/* Premium Image Container */}
          <div className="relative overflow-hidden rounded-t-2xl md:rounded-t-3xl">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={700}
                height={400}
                className="w-full h-48 md:h-56 lg:h-64 object-cover filter brightness-105 contrast-105"
              />
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Floating Icon Badge */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 border border-gray-100"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
              >
                {React.cloneElement(service.icon, { className: "w-6 h-6 md:w-7 md:h-7 text-gray-700" })}
              </motion.div>
            </motion.div>
          </div>
          
          {/* Content Section */}
          <div className="p-6 md:p-8 lg:p-10">
            {/* Service Header */}
            <div className="flex items-start gap-4 md:gap-6 mb-6">
              <motion.div 
                className="flex-shrink-0 p-3 md:p-4 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] rounded-xl md:rounded-2xl shadow-md"
                whileHover={{ 
                  rotate: 5,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
              >
                {React.cloneElement(service.icon, { className: "w-6 h-6 md:w-7 md:h-7 text-white" })}
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <motion.h3 
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#c5f82a] group-hover:to-[#00d9a6] transition-all duration-500 mb-2 md:mb-3 leading-tight"
                  whileHover={{ x: 3 }}
                >
                  {service.title}
                </motion.h3>
                
                {/* Service Category */}
                <div className="inline-flex items-center px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs md:text-sm font-semibold rounded-full transition-colors duration-300">
                  Professional Service
                </div>
              </div>
            </div>
            
            {/* Description */}
            <motion.p 
              className="text-gray-600 group-hover:text-gray-700 leading-relaxed text-base md:text-lg font-light mb-6 md:mb-8 transition-colors duration-500"
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {service.description}
            </motion.p>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-between mb-6 md:mb-8 p-3 md:p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-center flex-1">
                <div className="text-lg md:text-xl font-bold text-[#c5f82a]">99%</div>
                <div className="text-xs text-gray-500">Success Rate</div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="text-center flex-1">
                <div className="text-lg md:text-xl font-bold text-[#00d9a6]">24/7</div>  
                <div className="text-xs text-gray-500">Support</div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="text-center flex-1">
                <div className="text-lg md:text-xl font-bold text-orange-500">Fast</div>
                <div className="text-xs text-gray-500">Delivery</div>
              </div>
            </div>

            {/* Premium CTA Button */}
            <Link href={service.link}>
              <motion.div
                className="group/btn relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white font-bold px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.02,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 text-base md:text-lg tracking-wide">
                  LEARN MORE
                </span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </motion.div>
                
                {/* Button Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover/btn:translate-x-[-200%] transition-transform duration-1000"></div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
    
    {/* Bottom CTA Section */}
    <motion.div 
      className="text-center mt-16 md:mt-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <motion.div
        className="inline-flex items-center gap-4 px-6 md:px-8 py-4 md:py-5 bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-500"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="font-bold text-base md:text-lg">Ready to Get Started?</span>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full"
        />
      </motion.div>
    </motion.div>
  </div>
</motion.section>

      {/* Contact Section */}
      <motion.section
        className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/keyboard.jpg')" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <motion.div
            variants={bounceIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 uppercase tracking-wide">
              Get In Touch
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              How can we help
              <span className="block bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] bg-clip-text text-transparent">
                transform your business?
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200"
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
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-black font-bold py-4 px-10 hover:shadow-2xl transition-all duration-300 group"
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
              className="inline-flex items-center gap-3 border-2 border-white text-white font-bold py-4 px-10 hover:bg-white hover:text-black transition-all duration-300"
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
      </motion.section>
    </>
  );
};

export default Firstpage;