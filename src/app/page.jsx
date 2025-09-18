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

      {/* The Quore Advantage Section */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            variants={bounceIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 rounded-full text-gray-600 text-sm font-medium mb-6 border border-gray-200">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
              The Quore
              <span className="block bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] bg-clip-text text-transparent">
                Advantage
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              variants={scaleUp}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c5f82a]/10 to-[#00d9a6]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Understanding Your Needs
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  We begin with listening. By engaging closely with your leadership and HR teams, we identify not just the technical requirements of a role, but also the values, goals, and culture that define your organization.
                </p>
              </div>
            </motion.div>

            {/* Access to Trusted Talent Network */}
            <motion.div 
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              variants={scaleUp}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c5f82a]/10 to-[#00d9a6]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  Access to a Trusted Talent Network
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  With over a decade of experience in staffing and recruitment, our founders have built strong connections with top IT professionals. This network allows us to source candidates who are not only technically proficient but also dependable and adaptable.
                </p>
              </div>
            </motion.div>

            {/* Rigorous Screening & Vetting */}
            <motion.div 
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              variants={scaleUp}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c5f82a]/10 to-[#00d9a6]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  Rigorous Screening & Vetting
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  Every candidate undergoes a thorough evaluation process, from technical assessments to cultural fit checks. This ensures that the professionals we recommend are ready to deliver impact from day one.
                </p>
              </div>
            </motion.div>

            {/* Flexible Staffing Solutions */}
            <motion.div 
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden lg:col-span-1"
              variants={scaleUp}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c5f82a]/10 to-[#00d9a6]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  Flexible Staffing Solutions
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  Whether you're a startup in need of agile, versatile talent or an enterprise requiring specialized skills at scale, we tailor our solutions (contract, permanent, or project-based) to align with your business objectives.
                </p>
              </div>
            </motion.div>

            {/* Partnership Beyond Hiring */}
            <motion.div 
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden md:col-span-2 lg:col-span-2"
              variants={scaleUp}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c5f82a]/10 to-[#00d9a6]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  Partnership Beyond Hiring
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  We view staffing as more than a transaction - it's a partnership. By staying connected beyond placement, we ensure long-term success for both clients and candidates, creating teams that can grow and thrive together.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* First Row - Image and Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
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
                  src="/images/laptop_globe.webp"
                  alt="Laptop with globe overlay"
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
              className="md:order-2"
            >
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#c5f82a]/20 to-[#00d9a6]/20 rounded-full text-gray-600 text-sm font-medium mb-6 border border-gray-200">
                Our Promise
              </span>
              
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                Our
                <span className="block bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] bg-clip-text text-transparent">
                  Commitment
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We are committed to more than just filling roles, we are committed to building lasting partnerships that drive real business impact.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Over Quantity</h3>
                    <p className="text-gray-600">Every candidate we recommend is carefully vetted to ensure the highest standards of technical expertise, reliability, and cultural alignment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Transparency & Trust</h3>
                    <p className="text-gray-600">We believe in open communication and complete honesty throughout the staffing process, so our clients always know what to expect.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Row - Content and Image */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Tailored Solutions</h3>
                    <p className="text-gray-600">No two businesses are the same. Whether you're a fast-growing startup or an established enterprise, we design staffing solutions that match your unique needs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Long-Term Value</h3>
                    <p className="text-gray-600">Our role doesn't end with placement. We stay invested in the success of both our clients and candidates to ensure strong, lasting outcomes.</p>
                  </div>
                </div>
              </div>

              <motion.button
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-black font-semibold px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </motion.div>

            <motion.div
              variants={slideInRight}
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
