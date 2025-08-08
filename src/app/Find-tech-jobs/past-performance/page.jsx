'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaRobot, FaNetworkWired, FaHeartbeat, FaShieldAlt } from 'react-icons/fa';
import { ArrowRight, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    icon: <FaCar size={24} />,
    title: 'Up & Running: Providing Crucial ReWork to the Auto Industry',
    description:
      'Several of the world leading car makers had a similar challenge: they needed help across a variety of important rework initiatives. Seneca Mechanical Engineering services answered the call.',
    category: 'Automotive',
    readTime: '5 min read',
    bgGradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: <FaRobot size={24} />,
    title: 'Harnessing AI with Data Science',
    description:
      'A leading health insurance provider wanted to improve the quality and efficiency of their business operations using AI and machine learning. Senecas Data Science experts stepped up.',
    category: 'AI & Data Science',
    readTime: '7 min read',
    bgGradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: <FaNetworkWired size={24} />,
    title: 'ServiceNow Systems Integration',
    description:
      'One of the largest transportation organizations needed Enterprise Architecture and Business Continuity Management software. They turned to Seneca.',
    category: 'System Integration',
    readTime: '6 min read',
    bgGradient: 'from-green-500 to-green-600',
  },
  {
    icon: <FaHeartbeat size={24} />,
    title: 'Program Management for Health Services',
    description:
      'When one of the world largest public health agencies needed help, we answered. Project Management services got unique programmatic needs up and running.',
    category: 'Healthcare',
    readTime: '4 min read',
    bgGradient: 'from-red-500 to-red-600',
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: 'Implementing Program Maturity in the Cybersecurity Space',
    description:
      'A trusted client managing critical IT infrastructure needed help securing their environment. We provided consulting, assessment, and implementation services.',
    category: 'Cybersecurity',
    readTime: '8 min read',
    bgGradient: 'from-orange-500 to-orange-600',
  },
];

const CaseStudies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Animation variants
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

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 px-4 sm:px-8 lg:px-20 mt-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300b4a6' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-300/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500/20 to-teal-600/20 rounded-full text-teal-600 text-sm font-medium mb-6 border border-teal-200"
            variants={fadeInUp}
          >
            Success Stories
          </motion.span>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            variants={fadeInUp}
          >
            Real business challenges.{' '}
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              Real life solutions.
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            With hundreds of clients across multiple industries, Seneca Resources brings deep experience helping businesses do business. Here's how we've helped companies overcome challenges across data, engineering, cybersecurity, and more.
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border border-teal-100/50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              variants={scaleUp}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient Background Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient}`}></div>
              </div>

              <div className="relative p-8">
                {/* Category Badge */}
                <motion.div 
                  className="flex items-center justify-between mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    {study.category}
                  </span>
                  <span className="text-xs text-gray-500">{study.readTime}</span>
                </motion.div>

                {/* Icon */}
                <motion.div 
                  className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${study.bgGradient} text-white rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {React.cloneElement(study.icon, { size: 28 })}
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-teal-700 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                  {study.title}
                </motion.h3>

                <motion.p 
                  className="text-gray-600 leading-relaxed mb-6 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                >
                  {study.description}
                </motion.p>

                {/* CTA Button */}
                <motion.a
                  href="#"
                  className="group/btn inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-all duration-300 hover:gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="relative">
                    Learn More
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover/btn:w-full transition-all duration-300"></div>
                  </span>
                  <motion.div
                    animate={{ 
                      rotate: hoveredCard === index ? 45 : 0,
                      scale: hoveredCard === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.a>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-teal-200/0 group-hover:border-teal-200/50 rounded-3xl transition-all duration-300"></div>
              </div>

              {/* Bottom Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${study.bgGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-16"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center"
            variants={staggerContainer}
          >
            <motion.button 
              className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
              variants={scaleUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Case Studies
              <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>

            <motion.button 
              className="px-8 py-4 border-2 border-teal-200 hover:border-teal-300 text-teal-600 hover:text-teal-700 font-semibold rounded-2xl transition-all duration-300 hover:bg-teal-50"
              variants={scaleUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>

          <motion.p 
            className="mt-6 text-gray-500 text-sm"
            variants={fadeInUp}
          >
            Ready to solve your business challenges? Let's discuss your unique requirements.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
