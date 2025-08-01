'use client';

import React from 'react';
import { FaCar, FaRobot, FaNetworkWired, FaHeartbeat, FaShieldAlt } from 'react-icons/fa';

const caseStudies = [
  {
    icon: <FaCar size={24} />,
    title: 'Up & Running: Providing Crucial ReWork to the Auto Industry',
    description:
      'Several of the world’s leading car makers had a similar challenge: they needed help across a variety of important rework initiatives. Seneca’s Mechanical Engineering services answered the call.',
  },
  {
    icon: <FaRobot size={24} />,
    title: 'Harnessing AI with Data Science',
    description:
      'A leading health insurance provider wanted to improve the quality and efficiency of their business operations using AI and machine learning. Seneca’s Data Science experts stepped up.',
  },
  {
    icon: <FaNetworkWired size={24} />,
    title: 'ServiceNow Systems Integration',
    description:
      'One of the largest transportation organizations needed Enterprise Architecture and Business Continuity Management software. They turned to Seneca.',
  },
  {
    icon: <FaHeartbeat size={24} />,
    title: 'Program Management for Health Services',
    description:
      'When one of the world’s largest public health agencies needed help, we answered. Project Management services got unique programmatic needs up and running.',
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: 'Implementing Program Maturity in the Cybersecurity Space',
    description:
      'A trusted client managing critical IT infrastructure needed help securing their environment. We provided consulting, assessment, and implementation services.',
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20 mt-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Real business challenges.{' '}
          <span className="text-teal-600">Real life solutions.</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          With hundreds of clients across multiple industries, Seneca Resources brings deep experience helping businesses do business. Here's how we've helped companies overcome challenges across data, engineering, cybersecurity, and more.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="border border-teal-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-teal-50"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-teal-600 text-white rounded-full mb-4">
              {study.icon}
            </div>
            <h3 className="text-lg font-semibold text-teal-800">{study.title}</h3>
            <p className="text-gray-700 mt-2">{study.description}</p>
            <a
              href="#"
              className="inline-block mt-4 text-teal-600 hover:underline font-semibold"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
