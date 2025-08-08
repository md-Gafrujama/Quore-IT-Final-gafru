"use client";
import Head from 'next/head';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Building2,
  Target,
  TrendingUp,
  Heart,
  Users,
  Leaf,
  Scale,
  Diamond,
} from "lucide-react";

const OurCompany = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: "overview", label: "Overview", icon: Building2 },
    { id: "vision", label: "Vision & Values", icon: Target },
    { id: "financial", label: "Financial Results", icon: TrendingUp },
    { id: "csr", label: "Corporate Social Responsibility", icon: Heart },
    { id: "equality", label: "Equality & Diversity", icon: Users },
    { id: "diversity-journey", label: "Our Diversity Journey", icon: Diamond },
    { id: "environment", label: "Environment", icon: Leaf },
    { id: "modern-slavery", label: "Modern Slavery", icon: Scale },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const cardHover = {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sectionVariants}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h1 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Our Company - An Overview
              </h1>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">
                  Established in 1988, Quore IT has supported many of the
                  world's leading organisations to recruit, source and manage
                  the highly skilled talent they need to succeed in an
                  increasingly competitive and technology driven world.
                </p>
                <p className="mb-6">
                  We work with clients, both large and small, to deliver a
                  portfolio of services: technology recruitment, IT outsourcing
                  and leadership services.
                </p>
                <motion.div 
                  whileHover={cardHover}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6"
                >
                  <p className="text-gray-600 mb-4">Find out more about</p>
                  <Link
                    href="/What-we-do"
                    className="inline-flex items-center text-xl font-extrabold bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] bg-clip-text text-transparent group"
                  >
                    What We Do
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <p className="mb-4">
                    We are part of{" "}
                    <Link
                      href="https://www.nashsquared.com/"
                      className="inline-flex items-center text-xl font-extrabold bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] bg-clip-text text-transparent group"
                    >
                      Nash Squared
                      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                    , the leading global provider of talent and technology
                    solutions.
                  </p>
                </div>
                <motion.div 
                  whileHover={cardHover}
                  className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <p className="text-gray-700 leading-relaxed">
                    With over 3,000 employees in 36 locations across the USA,
                    Europe and Asia-Pacific the Company has the reach and
                    resources of a global organisation, whilst fostering a
                    culture of innovation and agility that empowers its people
                    to respond to constantly changing client needs.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        );

      case "vision":
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sectionVariants}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Vision & Values
              </h1>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Entrepreneurial",
                    description: "We are courageous, we challenge ideas, we pursue excellence in all we do. We are ambitious, we are innovators and we are change agents.",
                    icon: Target,
                    gradient: "from-orange-400 to-red-500"
                  },
                  {
                    title: "Open",
                    description: "We are consistently honest, open and straight forward. By doing so we remove barriers and focus on the right outcomes.",
                    icon: Building2,
                    gradient: "from-blue-400 to-indigo-500"
                  },
                  {
                    title: "Human",
                    description: "We trust, respect and care for one another and those around us. It is our ability to connect and to understand the value each person brings that makes us special.",
                    icon: Heart,
                    gradient: "from-green-400 to-emerald-500"
                  },
                  {
                    title: "Hungry",
                    description: "We constantly strive to identify opportunities, deliver outstanding results and inspire others.",
                    icon: TrendingUp,
                    gradient: "from-yellow-400 to-orange-500"
                  },
                  {
                    title: "Collaborative",
                    description: "We believe in the power of working together. We listen and evolve together by utilising our expertise to produce exceptional outcomes.",
                    icon: Users,
                    gradient: "from-purple-400 to-pink-500"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={cardHover}
                      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );

      case "financial":
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sectionVariants}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Financial Results
              </h1>

              <motion.div 
                whileHover={cardHover}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    For financial information on Quore IT, please visit the
                    Investors section of the Nash Squared website:
                  </p>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <Link
                      href="https://www.nashsquared.com/about"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Visit Nash Squared Investors Section
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );

      case "csr":
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sectionVariants}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 border border-rose-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Corporate Social Responsibility
              </h1>

              <div className="space-y-8">
                <motion.div 
                  whileHover={cardHover}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                >
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The Board believes that we have a responsibility to play a
                    constructive part within the community at large, and that
                    social, environmental and ethical matters are part of the
                    investment mix in order to create a long-term sustainable
                    business.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Aware of the importance of Corporate Responsibility to our
                    employees, the Group's key message over the last five years
                    has been that being a member of the Quore IT team also means
                    being a valued contributor to society. Our employees are
                    enthusiastic about people and are always ready to support
                    programmes that benefit the community.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={cardHover}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Environmental Policy
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The Group's operations, being services, are inherently less
                    damaging to the environment than other business sectors.
                    However, the Board recognises that the business must
                    minimise its impact on the environment and utilises
                    recommendations from the Carbon Trust to reduce the carbon
                    footprint of the organisation. The Group's environmental
                    policy statement commits our company to:
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      {
                        title: "Re-cycling",
                        desc: "reducing the overall amount of waste being sent to landfill by separating out materials for recycling",
                      },
                      {
                        title: "Water",
                        desc: "making use of mains water supply for personal consumption through on site water filtration and purification",
                      },
                      {
                        title: "Efficiency",
                        desc: "optimising the operation of building cooling and heating systems",
                      },
                      {
                        title: "Energy",
                        desc: "introducing low energy lighting wherever appropriate and feasible",
                      },
                      {
                        title: "Technology",
                        desc: "software automatically switches off computers to reduce consumption of power",
                      },
                      {
                        title: "Travelling",
                        desc: "promoting the use of public transport and increased use of video teleconferencing and online webinars",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -2 }}
                        className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100"
                      >
                        <h4 className="font-semibold text-green-800 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={cardHover}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Charitable, Political and Community Work
                  </h3>

                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      A number of senior directors in the business are involved
                      with projects and work in the community.
                    </p>

                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                      <h4 className="font-semibold text-blue-800 mb-4">
                        Quore IT employees on not-for-profit advisory boards:
                      </h4>
                      <div className="space-y-3 text-sm text-gray-700">
                        <p>
                          <strong>Magnus Tegborg</strong>, Managing Director of
                          Quore IT's Nordic businesses is chairman of the
                          nomination committees for the City of Stockholm board
                          and for the nomination of Members of Parliament for
                          the Stockholm region.
                        </p>
                        <p>
                          <strong>Rhona Hutchon</strong>, Market Director
                          Edinburgh, is Co-Chair of Byte Night Scotland.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-800">
                        Global Charitable Activities:
                      </h4>

                      {[
                        {
                          title: "United States",
                          desc: "In the US our Chicago office supported i.c.stars, a charity supporting low-income young adults, and Hire for Heroes, an initiative that creates job opportunities for US military, through providing event support and career advice workshops. Our San Francisco office supported Food Bank's Fight Against Hunger campaign by distributing fruit and vegetables to low- income families.",
                          gradient: "from-blue-50 to-indigo-50",
                          border: "border-blue-100",
                          text: "text-blue-800"
                        },
                        {
                          title: "Germany",
                          desc: "In Germany, employees participated in a company run of Nuremberg as well as a 24-hour shared cycle ride on a static bike, both activities contributing to several charitable organisations. There were also activities to support the Olga Hospital which helps sick children and their parents.",
                          gradient: "from-purple-50 to-pink-50",
                          border: "border-purple-100",
                          text: "text-purple-800"
                        },
                        {
                          title: "Sweden",
                          desc: "In Sweden, support was given to the Swedish Childhood Cancer Foundation through a number of activities – including sponsored bike rides. In addition, there was support for Hand in Hand, a charity which aims to eliminate poverty through helping individuals to help themselves. Employees helped a number of charities recruit senior executives on a cost neutral basis.",
                          gradient: "from-yellow-50 to-orange-50",
                          border: "border-yellow-100",
                          text: "text-orange-800"
                        },
                        {
                          title: "Vietnam",
                          desc: "In Vietnam, there was a wide range of activities targeted at supporting children in need and the poor including the Ha Noi Run for children which raised funds and awareness for healthcare issues in Vietnam.",
                          gradient: "from-teal-50 to-cyan-50",
                          border: "border-teal-100",
                          text: "text-teal-800"
                        },
                        {
                          title: "Netherlands",
                          desc: "In the Netherlands, employees participated for the third year in the annual Unicef run of Breukelen, a sponsored run for charity.",
                          gradient: "from-emerald-50 to-green-50",
                          border: "border-emerald-100",
                          text: "text-emerald-800"
                        },
                        {
                          title: "United Kingdom",
                          desc: "In the UK, throughout the country our offices have been actively involved in working with local schools to provide career advice and guidance. In London, various activities including bucket collections, Byte Night and static cycling outside our Heron Tower head office, generated over £15,000 for a variety of charities. Our Mortimer Spinks business made a major contribution to Red Nose Day, involving most staff from all three offices and raising over £1,300. Impact Executives raised £1,000 for The Wopila Foundation helping build schools for children in Africa. In Scotland, we raised £3,000 as part of Byte Night.",
                          gradient: "from-red-50 to-rose-50",
                          border: "border-red-100",
                          text: "text-red-800"
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -2 }}
                          className={`bg-gradient-to-r ${item.gradient} rounded-lg p-6 border ${item.border}`}
                        >
                          <h5 className={`font-semibold ${item.text} mb-3`}>
                            {item.title}
                          </h5>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={cardHover}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Employee Engagement
                  </h3>

                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      Engagement is built partly on respect for the organisation
                      and its leaders; partly on knowing what's going on; partly
                      on the ability to influence and achieve; and partly on
                      opportunities for people to grow and develop. The Group
                      has plans to meet expectations in all these
                      areas(particularly in the areas of Leadership and
                      Development) and progress is measured in an annual
                      Employee Engagement Survey.
                    </p>

                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-100">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The Group's commitment to its employees means that it
                        takes actions to achieve a common awareness of all
                        employees in relation to the financial and economic
                        factors that affect the performance of the company.
                        Employees are also systematically provided with
                        information on matters of concern to them and are
                        consulted on a regular basis to ensure that their views
                        can be taken into account when making decisions that are
                        likely to affect their interests.
                      </p>

                      <p className="text-gray-700 leading-relaxed">
                        The Group is a strong meritocracy, where talent and
                        contribution come first. An attractive culture and
                        strong, commercial corporate values are at the heart of
                        what we do. Integrity, transparency, fairness, passion
                        and excellence in delivery to our clients are just some
                        examples of the professional attributes to which we all
                        aspire. We always aim to work in the longer-term
                        interests of our clients and candidates and we know
                        this, in turn will work in the longer-term interests of
                        our shareholders.
                      </p>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100">
                      <p className="text-gray-700 leading-relaxed">
                        The Group underlines this commitment with our membership
                        of the Recruitment and Employment Confederation which
                        requires the Group to observe the highest principles of
                        ethics, equity, integrity, professional conduct and fair
                        practice.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={cardHover}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Equal Opportunity and Diversity
                  </h3>

                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      The Quore IT Group fully supports the aims of the UK
                      Equalities Act 2010. We believe equality and diversity is
                      necessary for:
                    </p>

                    <div className="grid gap-4 md:grid-cols-3">
                      <motion.div 
                        whileHover={{ y: -2 }}
                        className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100"
                      >
                        <h4 className="font-semibold text-purple-800 mb-3">
                          Individuals
                        </h4>
                        <p className="text-sm text-gray-700">
                          Everyone has the right to be treated fairly and the
                          opportunity to fulfil their potential
                        </p>
                      </motion.div>

                      <motion.div 
                        whileHover={{ y: -2 }}
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100"
                      >
                        <h4 className="font-semibold text-blue-800 mb-3">
                          The Economy
                        </h4>
                        <p className="text-sm text-gray-700">
                          A competitive economy and successful organisations
                          draw on all available talent
                        </p>
                      </motion.div>

                      <motion.div 
                        whileHover={{ y: -2 }}
                        className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border border-green-100"
                      >
                        <h4 className="font-semibold text-teal-800 mb-3">
                          Society
                        </h4>
                        <p className="text-sm text-gray-700">
                          A more equal society offers more stability in the long
                          term which is attractive to business
                        </p>
                      </motion.div>
                    </div>

                    <div className="space-y-6">
                      <motion.div 
                        whileHover={{ y: -2 }}
                        className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-100"
                      >
                        <h4 className="font-semibold text-pink-800 mb-3">
                          Network 4 Net-Worth (USA)
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Network 4 Net-Worth was established in the USA, this
                          is a young professionals networking organisation that
                          aims to build lasting professional and personal
                          relationships through group networking and personal
                          development sessions. The key focus is on Generation Y
                          with an emphasis on the promotion of diverse talent
                          pools.
                        </p>
                      </motion.div>

                      <motion.div 
                        whileHover={{ y: -2 }}
                        className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-100"
                      >
                        <h4 className="font-semibold text-indigo-800 mb-3">
                          Inspire Network
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Inspire is the fastest growing senior professional
                          network within the executive recruitment sector, and
                          was established by senior businesswomen from Harvey
                          Nash's Executive Search division with funding from the
                          Group. Inspire is a unique forum for senior business
                          women to meet and exchange ideas and experiences with
                          their peers with a mission to promote female board and
                          executive participation. Membership has grown to over
                          3,000 board level members in San Francisco, New York,
                          London, Stockholm and Hong Kong. Through events,
                          forums, white papers and influence, Inspire plays a
                          major role in promoting gender balance in the
                          boardroom and within the company. This is achieved
                          through an active extension of the pool of talent in
                          which shortlists are put together.
                        </p>
                      </motion.div>

                      <motion.div 
                        whileHover={{ y: -2 }}
                        className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6 border border-teal-100"
                      >
                        <h4 className="font-semibold text-teal-800 mb-3">
                          Aspire Network
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          In 2012 we launched Aspire – the network for senior
                          level women who wish to progress to board positions.
                          Through the network our aim is to improve the supply
                          of talent at board level.
                        </p>
                      </motion.div>

                      <motion.div 
                        whileHover={{ y: -2 }}
                        className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border border-orange-100"
                      >
                        <h4 className="font-semibold text-orange-800 mb-3">
                          Girl Geek Network
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Quore IT Scotland's participation in the Girl Geek
                          dinner network is also aimed at supporting the
                          community of business women in the technology and
                          creative sectors.
                        </p>
                      </motion.div>

                      <motion.div 
                        whileHover={{ y: -2 }}
                        className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-100"
                      >
                        <h4 className="font-semibold text-emerald-800 mb-3">
                          International Engagement
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Quore IT regularly chairs and hosts trade delegations
                          to Vietnam. The Group also recognises the valuable
                          contribution made by the government of Vietnam in
                          enabling increased investment and trade between Europe
                          and Asia and is actively involved at ministerial
                          level, not only lobbying on behalf of business but
                          also engaging with the Vietnamese leadership on the
                          strategic challenges and opportunities facing South
                          East Asia.
                        </p>
                      </motion.div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Quore IT not only ensures that employment decisions are
                        made consistent with equal opportunities legislation in
                        each country, but the Group actively encourages a
                        diversity consciousness among its management, staff and
                        clients. One of our key principles is that the Group's
                        senior management is made up of nationals in the country
                        in which they operate, who understand the market and are
                        naturally integrated in the local business culture.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Due consideration is also given to the recruitment,
                        promotion, training and working environment of all staff
                        including those with disabilities.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={cardHover}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Health & Safety
                  </h3>

                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      It is the policy of the Group to take all reasonable and
                      practicable steps to safeguard the health, safety and
                      welfare of its employees, visitors and other persons who
                      may be affected by its activities.
                    </p>

                    <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                      <h4 className="font-semibold text-red-800 mb-4">
                        The Group:
                      </h4>
                      <div className="space-y-2 text-gray-700">
                        <p className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          assesses the risk to health and safety; implements
                          safe systems at work;
                        </p>
                        <p className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          provides information, instruction and training;
                        </p>
                        <p className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          and regularly reviews its policies.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={cardHover}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Supplier Payment Policy
                  </h3>

                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      It is the policy of the Group to agree appropriate terms
                      and conditions for transactions with suppliers (from
                      standard terms to individually negotiated contracts) and
                      that payment should be made in accordance with those
                      agreed terms subject to compliance with the agreed
                      contractual supplier service levels.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2">
                      <motion.div 
                        whileHover={{ y: -2 }}
                        className="bg-green-50 rounded-lg p-6 border border-green-100"
                      >
                        <h4 className="font-semibold text-green-800 mb-3">
                          Sub-contractors (Technology Services)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          The Group endeavours to pay sub-contractors providing
                          technology services within 26 days (2012: 25 days) of
                          receipt of their invoice.
                        </p>
                      </motion.div>

                      <motion.div 
                        whileHover={{ y: -2 }}
                        className="bg-orange-50 rounded-lg p-6 border border-orange-100"
                      >
                        <h4 className="font-semibold text-orange-800 mb-3">
                          Trade Debtors
                        </h4>
                        <p className="text-gray-700 text-sm">
                          This contrasts with the Group's trade debtors who
                          settled their invoices within 42.5 days (2012: 45
                          days).
                        </p>
                      </motion.div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Other trade creditor days of the Group for the year
                        ended 31 January 2013 were 55 days (2012: 58 days) based
                        on the ratio of Group trade creditors at the year end to
                        the amounts invoiced during the year by trade creditors.
                        The Company has no trading activity.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        );

      case "equality":
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sectionVariants}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Equality & Diversity
              </h1>

              <div className="space-y-8">
                <motion.div 
                  whileHover={cardHover}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                >
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The Quore IT Group fully supports the aims of the UK
                    Equalities Act 2010. We believe equality and diversity is
                    necessary for:
                  </p>

                  <div className="grid gap-6 md:grid-cols-3">
                    <motion.div 
                      whileHover={{ y: -2 }}
                      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100"
                    >
                      <h3 className="font-bold text-purple-800 mb-3 text-lg">
                        INDIVIDUALS:
                      </h3>
                      <p className="text-gray-700 text-sm">
                        everyone has the right to be treated fairly and the
                        opportunity to fulfill their potential.
                      </p>
                    </motion.div>

                    <motion.div 
                      whileHover={{ y: -2 }}
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100"
                    >
                      <h3 className="font-bold text-blue-800 mb-3 text-lg">
                        THE ECONOMY:
                      </h3>
                      <p className="text-gray-700 text-sm">
                        a competitive economy and successful organisations draw
                        on all the available talents and ability
                      </p>
                    </motion.div>

                    <motion.div 
                      whileHover={{ y: -2 }}
                      className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border border-green-100"
                    >
                      <h3 className="font-bold text-teal-800 mb-3 text-lg">
                        SOCIETY:
                      </h3>
                      <p className="text-gray-700 text-sm">
                        a more equal society offers more stability in the long
                        term which is attractive to business.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={cardHover}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                >
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Quore IT Group have become the first recruitment firm to be
                    certified with EY's{" "}
                    <Link
                      href="#"
                                            className="text-blue-600 hover:underline font-medium"
                    >
                      National Equality Standard (NES)
                    </Link>
                    , the UK's leading assessment for equality, diversity and inclusion in the workplace.
                  </p>

                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100 mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      The NES is a framework designed to help organisations 
                      measure their progress on diversity and inclusion against 
                      a set of agreed standards. It covers leadership, employee 
                      policies, recruitment, customer service and community 
                      engagement.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <motion.div 
                      whileHover={{ y: -2 }}
                      className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm"
                    >
                      <h3 className="font-bold text-gray-900 mb-4 text-xl">
                        Our Commitment
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          We actively promote equality and diversity in all our business activities
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          We monitor and report on our diversity statistics annually
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          We provide unconscious bias training for all hiring managers
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          We have established employee resource groups for underrepresented communities
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      whileHover={{ y: -2 }}
                      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100"
                    >
                      <h3 className="font-bold text-purple-800 mb-4 text-xl">
                        Key Achievements
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-purple-700 mb-1">
                            Gender Balance
                          </h4>
                          <p className="text-sm text-gray-700">
                            45% of our leadership team are women, exceeding the industry average
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-700 mb-1">
                            Ethnic Diversity
                          </h4>
                          <p className="text-sm text-gray-700">
                            28% of our workforce come from ethnic minority backgrounds
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-700 mb-1">
                            Disability Inclusion
                          </h4>
                          <p className="text-sm text-gray-700">
                            Recognized as a Disability Confident Employer
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={cardHover}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Employee Networks
                  </h2>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        title: "Women in Tech",
                        description: "Supporting and advancing women in technology through mentorship, networking and professional development.",
                        icon: Users,
                        color: "bg-pink-100 text-pink-600"
                      },
                      {
                        title: "Pride Network",
                        description: "Creating an inclusive environment for LGBTQ+ employees and allies through education and advocacy.",
                        icon: Heart,
                        color: "bg-rainbow-100 text-rainbow-600"
                      },
                      {
                        title: "Cultural Diversity Network",
                        description: "Celebrating cultural diversity and promoting cross-cultural understanding in the workplace.",
                        icon: Globe,
                        color: "bg-blue-100 text-blue-600"
                      },
                      {
                        title: "Ability Network",
                        description: "Supporting employees with disabilities and promoting accessibility throughout the organization.",
                        icon: Accessibility,
                        color: "bg-green-100 text-green-600"
                      },
                      {
                        title: "Veterans Network",
                        description: "Supporting military veterans in their transition to civilian careers.",
                        icon: Shield,
                        color: "bg-red-100 text-red-600"
                      },
                      {
                        title: "Young Professionals",
                        description: "Providing development opportunities and networking for early-career professionals.",
                        icon: TrendingUp,
                        color: "bg-purple-100 text-purple-600"
                      }
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.03 }}
                          className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm"
                        >
                          <div className={`w-12 h-12 ${item.color} rounded-full mb-4 flex items-center justify-center`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={cardHover}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Diversity Data
                  </h2>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Gender Representation
                      </h3>
                      <div className="h-64">
                        {/* Chart would go here */}
                        <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
                          <p className="text-gray-500">Gender diversity chart</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Ethnic Diversity
                      </h3>
                      <div className="h-64">
                        {/* Chart would go here */}
                        <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
                          <p className="text-gray-500">Ethnic diversity chart</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <p className="text-gray-700 leading-relaxed">
                      We publish our diversity data annually as part of our 
                      commitment to transparency and continuous improvement. 
                      Our most recent report shows progress in all key areas, 
                      but we recognize there is still work to be done.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sectionVariants}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {navigationItems.find(item => item.id === activeSection)?.label}
            </h1>
            <p className="text-gray-600">
              Content for this section is coming soon.
            </p>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Our Company | Quore IT</title>
        <meta
          name="description"
          content="Learn about Quore IT - our vision, values, financial results, and corporate social responsibility initiatives."
        />
      </Head>

      <header className={`sticky top-0 z-10 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/quore-logo.svg"
                alt="Quore IT Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/what-we-do" className="text-gray-700 hover:text-blue-600 font-medium">
                What We Do
              </Link>
              <Link href="/our-company" className="text-blue-600 font-medium">
                Our Company
              </Link>
              <Link href="/careers" className="text-gray-700 hover:text-blue-600 font-medium">
                Careers
              </Link>
              <Link href="/insights" className="text-gray-700 hover:text-blue-600 font-medium">
                Insights
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </nav>
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Our Company</h2>
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors duration-200 ${activeSection === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><Link href="/our-company" className="hover:text-blue-300">Our Company</Link></li>
                <li><Link href="/what-we-do" className="hover:text-blue-300">What We Do</Link></li>
                <li><Link href="/careers" className="hover:text-blue-300">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-blue-300">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/technology-recruitment" className="hover:text-blue-300">Technology Recruitment</Link></li>
                <li><Link href="/services/it-outsourcing" className="hover:text-blue-300">IT Outsourcing</Link></li>
                <li><Link href="/services/leadership-services" className="hover:text-blue-300">Leadership Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/insights" className="hover:text-blue-300">Insights</Link></li>
                <li><Link href="/case-studies" className="hover:text-blue-300">Case Studies</Link></li>
                <li><Link href="/blog" className="hover:text-blue-300">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="hover:text-blue-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-blue-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-blue-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Quore IT. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OurCompany;