 "use client";
  import Head from 'next/head';
import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

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

  const navigationItems = [
    { id: "overview", label: "Overview", icon: Building2 },
    { id: "vision", label: "Vision & Values", icon: Target },
    { id: "financial", label: "Financial Results", icon: TrendingUp },
    { id: "csr", label: "Corporate Social Responsibility", icon: Heart },
    { id: "equality", label: "Equality & Diversity", icon: Users },
    { id: "diversity-journey", label: " Our Diversity Journey", icon: Diamond },
    { id: "environment", label: "Environment", icon: Leaf },
    { id: "modern-slavery", label: "Modern Slavery", icon: Scale },
  ];
  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h1 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text ">
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
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
                  <p className="text-gray-600 mb-4">Find out more about</p>
                  <Link
                    href="/What-we-do"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 group"
                  >
                    What We Do
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <p className="mb-4">
                    We are part of{" "}
                    <Link
                      href="https://www.nashsquared.com/"
                      className="text-indigo-600 hover:text-indigo-800 font-semibold underline decoration-2 underline-offset-2 transition-colors duration-200"
                    >
                      Nash Squared
                    </Link>
                    , the leading global provider of talent and technology
                    solutions.
                  </p>
                </div>
                <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    With over 3,000 employees in 36 locations across the USA,
                    Europe and Asia-Pacific the Company has the reach and
                    resources of a global organisation, whilst fostering a
                    culture of innovation and agility that empowers its people
                    to respond to constantly changing client needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "vision":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text ">
                Vision & Values
              </h1>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mb-4 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Entrepreneurial
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are courageous, we challenge ideas, we pursue excellence
                    in all we do. We are ambitious, we are innovators and we are
                    change agents.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg mb-4 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Open</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are consistently honest, open and straight forward. By
                    doing so we remove barriers and focus on the right outcomes.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mb-4 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Human
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We trust, respect and care for one another and those around
                    us. It is our ability to connect and to understand the value
                    each person brings that makes us special.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mb-4 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Hungry
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We constantly strive to identify opportunities, deliver
                    outstanding results and inspire others.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Collaborative
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We believe in the power of working together. We listen and
                    evolve together by utilising our expertise to produce
                    exceptional outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "financial":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text ">
                Financial Results
              </h1>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
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
              </div>
            </div>
          </div>
        );

      case "csr":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text ">
                Corporate Social Responsibility
              </h1>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The Board believes that we have a responsibility to play a
                    constructive part within the community at large, and that
                    social, environmental and ethical matters are part of the
                    investment mix in order to create along-term sustainable
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
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Environmental Policy
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The Group's operations, being services, are inherently less
                    damaging to the environment than other business sectors.
                    However, the Board recognises that the business must
                    minimise its impact on the environment and utilises
                    recommendations from the Carbon Trust to reduce the carbon
                    foot print of the organisation. The Group's environmental
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
                      <div
                        key={index}
                        className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100"
                      >
                        <h4 className="font-semibold text-green-800 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
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

                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                        <h5 className="font-semibold text-blue-800 mb-3">
                          United States
                        </h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          In the US our Chicago office supported i.c.stars, a
                          charity supporting low-income young adults, and Hire
                          for Heroes, an initiative that creates job
                          opportunities for US military, through providing event
                          support and career advice workshops. Our San Francisco
                          office supported Food Bank's Fight Against Hunger
                          campaign by distributing fruit and vegetables to low-
                          income families.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100">
                        <h5 className="font-semibold text-purple-800 mb-3">
                          Germany
                        </h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          In Germany, employees participated in a company run of
                          Nuremberg as well as a 24-hour shared cycle ride on a
                          static bike, both activities contributing to several
                          charitable organisations. There were also activities
                          to support the Olga Hospital which helps sick children
                          and their parents.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-100">
                        <h5 className="font-semibold text-orange-800 mb-3">
                          Sweden
                        </h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          In Sweden, support was given to the Swedish Childhood
                          Cancer Foundation through a number of activities –
                          including sponsored bike rides. In addition, there was
                          support for Hand in Hand, a charity which aims to
                          eliminate poverty through helping individuals to help
                          themselves. Employees helped a number of charities
                          recruit senior executives on a cost neutral basis.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6 border border-teal-100">
                        <h5 className="font-semibold text-teal-800 mb-3">
                          Vietnam
                        </h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          In Vietnam, there was a wide range of activities
                          targeted at supporting children in need and the poor
                          including the Ha Noi Run for children which raised
                          funds and awareness for healthcare issues in Vietnam.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-100">
                        <h5 className="font-semibold text-emerald-800 mb-3">
                          Netherlands
                        </h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          In the Netherlands, employees participated for the
                          third year in the annual Unicef run of Breukelen, a
                          sponsored run for charity.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-6 border border-red-100">
                        <h5 className="font-semibold text-red-800 mb-3">
                          United Kingdom
                        </h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          In the UK, throughout the country our offices have
                          been actively involved in working with local schools
                          to provide career advice and guidance. In London,
                          various activities including bucket collections, Byte
                          Night and static cycling outside our Heron Tower head
                          office, generated over £15,000 for a variety of
                          charities. Our Mortimer Spinks business made a major
                          contribution to Red Nose Day, involving most staff
                          from all three offices and raising over £1,300. Impact
                          Executives raised £1,000 for The Wopila Foundation
                          helping build schools for children in Africa. In
                          Scotland, we raised £3,000 as part of Byte Night.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
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
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
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
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100">
                        <h4 className="font-semibold text-purple-800 mb-3">
                          Individuals
                        </h4>
                        <p className="text-sm text-gray-700">
                          Everyone has the right to be treated fairly and the
                          opportunity to fulfil their potential
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                        <h4 className="font-semibold text-blue-800 mb-3">
                          The Economy
                        </h4>
                        <p className="text-sm text-gray-700">
                          A competitive economy and successful organisations
                          draw on all available talent
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border border-green-100">
                        <h4 className="font-semibold text-teal-800 mb-3">
                          Society
                        </h4>
                        <p className="text-sm text-gray-700">
                          A more equal society offers more stability in the long
                          term which is attractive to business
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-100">
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
                      </div>

                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-100">
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
                      </div>

                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6 border border-teal-100">
                        <h4 className="font-semibold text-teal-800 mb-3">
                          Aspire Network
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          In 2012 we launched Aspire – the network for senior
                          level women who wish to progress to board positions.
                          Through the network our aim is to improve the supply
                          of talent at board level.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border border-orange-100">
                        <h4 className="font-semibold text-orange-800 mb-3">
                          Girl Geek Network
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Quore IT Scotland's participation in the Girl Geek
                          dinner network is also aimed at supporting the
                          community of business women in the technology and
                          creative sectors.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-100">
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
                      </div>
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
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
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
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
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
                      <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                        <h4 className="font-semibold text-green-800 mb-3">
                          Sub-contractors (Technology Services)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          The Group endeavours to pay sub-contractors providing
                          technology services within 26 days (2012: 25 days) of
                          receipt of their invoice.
                        </p>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-6 border border-orange-100">
                        <h4 className="font-semibold text-orange-800 mb-3">
                          Trade Debtors
                        </h4>
                        <p className="text-gray-700 text-sm">
                          This contrasts with the Group's trade debtors who
                          settled their invoices within 42.5 days (2012: 45
                          days).
                        </p>
                      </div>
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
                </div>
              </div>
            </div>
          </div>
        );

      case "equality":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text ">
                Equality & Diversity
              </h1>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The Quore IT Group fully supports the aims of the UK
                    Equalities Act 2010. We believe equality and diversity is
                    necessary for:
                  </p>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100">
                      <h3 className="font-bold text-purple-800 mb-3 text-lg">
                        INDIVIDUALS:
                      </h3>
                      <p className="text-gray-700 text-sm">
                        everyone has the right to be treated fairly and the
                        opportunity to fulfill their potential.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                      <h3 className="font-bold text-blue-800 mb-3 text-lg">
                        THE ECONOMY:
                      </h3>
                      <p className="text-gray-700 text-sm">
                        a competitive economy and successful organisations draw
                        on all the available talents and ability
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border border-green-100">
                      <h3 className="font-bold text-teal-800 mb-3 text-lg">
                        SOCIETY:
                      </h3>
                      <p className="text-gray-700 text-sm">
                        a more equal society offers more stability in the long
                        term which is attractive to business.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Quore IT Group have become the first recruitment firm to be
                    certified with EY's{" "}
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2"
                    >
                      National Equality Standard
                    </Link>
                    , one of the UK's most rigorous and prestigious
                    accreditations for diversity and inclusion.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    To be awarded the National Equality Standard (NES) Harvey
                    Nash UK have undertaken a robust assessment against more
                    than forty criteria, over an 18 month period. The assessment
                    was carried out by trained NES assessors who conducted
                    comprehensive interviews and in- depth surveys with over 100
                    staff, as well as reviewed procedures and documentation and
                    legal compliance.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    In the USA we were a founding organization of ARA, which
                    aspires to Attract, Retain, and Advance women in technology
                    by cultivating and nurturing relationships via mentorship
                    and events/programs, thereby building strong female leaders
                    to support and influence the IT community.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    ARA now has chapters in Chicago, New York, Seattle and
                    Houston, and numbers hundreds of mentors and mentees amongst
                    its members. In 2008 Quore IT launched Inspire, a global
                    business forum where senior board-level women, CEOs,
                    non-executive directors and chairs, share and exchange ideas
                    and experiences with their peers.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Founded by Carol Rosati a Director of the Board Practice at
                    Quore IT Executive Search, the network now connects over
                    5000 board-level, like-minded and inspirational individuals,
                    from all areas of industry both in the private and public
                    sector worldwide.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    With its connection to Quore IT the network offers advice
                    and connectivity to the women, helping them advance their
                    business careers.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Following the lead of Inspire, Quore IT launched Aspire in
                    2012, a unique executive business network for C-suite,
                    Director and VP level women aimed at helping them progress
                    to Board level positions both Executive and Non-Executive.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Launched in 2015, Engage is a network connecting senior
                    business leaders from all cultural backgrounds. Its purpose
                    is to act as a platform for discussion, networking and
                    peer-to-peer support for a section of the business community
                    traditionally underrepresented at executive and board level.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Quore IT Scotland's participation in the "Girl Geek" dinner
                    network is also aimed at supporting the community of
                    business women in the technology and creative sectors. Quore
                    IT regularly chairs and hosts trade delegations to Vietnam.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The Group also recognises the valuable contribution made by
                    the government of Vietnam in enabling increased investment
                    and trade between Europe and Asia and is actively involved
                    at ministerial level, not only lobbying on behalf of
                    business but also engaging with the Vietnamese leadership on
                    the strategic challenges and opportunities facing South East
                    Asia.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Quore IT not only ensures that employment decisions are made
                    consistent with equal opportunities legislation in each
                    country, but, the Group actively encourages a diversity
                    consciousness among its management, staff and clients.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    One of our key principles is that the Group's senior
                    management is made up of nationals in the country in which
                    they operate, who understand the market and are naturally
                    integrated in the local business culture.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Due consideration is also given to the recruitment,
                    promotion, training and working environment of all staff
                    including those with disabilities.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <p className="text-gray-700 leading-relaxed">
                    Find out more about Quore IT's{" "}
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection("diversity-journey"); // This matches your state variable
                      }}
                      className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2 cursor-pointer"
                    >
                      diversity initiatives and networks.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "diversity-journey":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text ">
                Our Diversity Journey
              </h1>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center font-medium">
                  For over 10 years now we have championed diversity in
                  leadership and workplace inclusion
                </p>

                <div className="space-y-8">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      2008
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Inspire network in launched in the UK to connect Board
                      level woman and promote female leadership
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      2010
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      By popular demand Inspire establishes chapters in New York
                      and Silicon Valley
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      2011
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The aspire network is launched for the female leaders of
                      tomorrow
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      2012
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We create ARA mentors in the US to Attract, Retain and
                      Advance women in technology
                    </p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      2012
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Inspire holds its first event in Asia in HK where just 9%
                      of board members are women
                    </p>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      2013
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700 leading-relaxed">
                        HN and the University of Hong Kong launch the Womens
                        directorship programme to help women achieve board
                        positions
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Representatives from Inspire address 70 MEP's at a major
                        EU conference on female leadership
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Inspire published the balancing act, a survey of over
                        600 business leaders on workplace barriers for women
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-teal-500 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      2014
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700 leading-relaxed">
                        Inspire launches chapters in Sweden, Finland, Australia
                        and Tokyo
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        HN recognized for Gender Balanced Shortlists, awarded by
                        Lord Davies' committee recognizing efforts to improve
                        female leadership in companies beyond the FTSE 350
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      2015
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700 leading-relaxed">
                        <Link
                          href="#"
                          className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2"
                        >
                          Best Practice Podcasts
                        </Link>
                        , Interview series with business leaders on creating
                        inclusive workplace culture
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Engage network in launched to connect business leaders
                        from all ethnic and cultural backgrounds
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      2016
                    </h3>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Changing the HN Culture
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          - All UK staff complete unconscious bias training
                        </li>
                        <li>- Managers measured on inclusive behaviours</li>
                        <li>- on-going diversity and inclusion workshops</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed">
                        Engage publishes the Ethnicity Gap, a survey of 130
                        minority ethic leaders on experiences of cultural bias
                        and exclusion
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      2017
                    </h3>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Quore IT achieves National Equality Standard
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        First recruitment firm awarded accreditation against 40+
                        diversity and inclusion criteria conducted by EY
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      The Future
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      <Link
                        href="#"
                        className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2"
                      >
                        Inclusion 360
                      </Link>
                      – an on going 360 initiative to embed inclusivity into
                      everything we do for our people, clients, candidates and
                      industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "environment":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text ">
                Environment
              </h1>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The Group's operations, being services, are inherently less
                    damaging to the environment than other business sectors.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    However, the Board recognises that the business must
                    minimise its impact on the environment and utilises
                    recommendations from the Carbon Trust to reduce the carbon
                    footprint of the organisation.
                  </p>

                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Environmental Policy Commitments
                    </h3>
                    <p className="text-gray-700 mb-4">
                      The Group's environmental policy statement commits our
                      company to:
                    </p>

                    <div className="space-y-6">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Re-cycling
                        </h4>
                        <p className="text-gray-700">
                          reducing the overall amount of waste being sent to
                          landfill by separating out materials for recycling,
                        </p>
                      </div>

                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Water
                        </h4>
                        <p className="text-gray-700">
                          making use of mains water supply for personal
                          consumption through on site water filtration and
                          purification
                        </p>
                      </div>

                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Efficiency
                        </h4>
                        <p className="text-gray-700">
                          optimising the operation of building cooling and
                          heating systems,
                        </p>
                      </div>

                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Energy
                        </h4>
                        <p className="text-gray-700">
                          introducing low energy lighting wherever appropriate
                          and feasible,
                        </p>
                      </div>

                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Technology hardware and software
                        </h4>
                        <p className="text-gray-700">
                          software which automatically shuts down computers to
                          reduce power consumption and heat output,
                        </p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          The introduction of 'eco-fonts'
                        </h4>
                        <p className="text-gray-700">
                          these use less ink on printed matter, with only a
                          marginal impact upon quality,
                        </p>
                      </div>

                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Travelling
                        </h4>
                        <p className="text-gray-700">
                          promoting the use of public transport and increased
                          use of video teleconferencing and online webinars to
                          reduce the impact of business travel upon the
                          environment.
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Procurement
                        </h4>
                        <p className="text-gray-700">
                          processes are in place to ensure that the procurement
                          of goods, services and material capital items such as
                          property include a review and rating of the carbon
                          impact of these acquisitions seeking wherever possible
                          to reduce the Group's footprint.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "modern-slavery":
      
        // Redirect to external modern slavery page
       window.location.href = "/Policies/Modern-Slavery-Statement";
        return null;
    }
  };
  return (
    <>
    {/* <Navbar/> */}
    <Head>
  <title>About Our Company | Quore IT - Global Talent & Tech Solutions</title>
  <meta name="description" content="Discover Quore IT – a global leader in technology recruitment, outsourcing, and leadership services. Learn about our mission, values, and social responsibility." />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="About Our Company | Quore IT - Global Talent & Tech Solutions" />
  <meta property="og:description" content="Explore our company overview, values, financials, CSR, diversity efforts, and environmental initiatives as part of Nash Squared." />
  <meta property="og:image" content="/images/overview.jpg" />  {/* Replace with a representative hero image if available */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourdomain.com/Our-company" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Our Company | Quore IT - Global Talent & Tech Solutions" />
  <meta name="twitter:description" content="Get to know Quore IT’s vision, values, and global reach. Learn about our commitment to diversity, sustainability, and ethical practices." />
  <meta name="twitter:image" content="/images/overview.jpg" />  {/* Match the og:image */}
</Head>
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jobs_hero.jpg" // Replace with your actual hero background image
            alt="Candidates Hero Background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide">
            Our Company
          </h1>
        </div>
      </section>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 px-8 sm:px-8  via-blue-50 to-indigo-50">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar - moves to top on mobile */}
          <div className="w-full lg:w-80 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl lg:border-r py-6 border-gray-200/50 h-full mb-6 lg:mb-0">
            <div className="p-4 sm:p-8">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Quore IT
                </h2>
                <p className="text-sm text-gray-500 mt-1">Company Portal</p>
              </div>
              <nav className="space-y-2">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Contents
                </h3>
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center px-3 sm:px-4 py-2 sm:py-3 text-left rounded-xl transition-all duration-200 group ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <IconComponent
                        className={`w-5 h-5 mr-3 ${
                          isActive
                            ? "text-white"
                            : "text-gray-400 group-hover:text-gray-600"
                        }`}
                      />
                      <span className="font-medium text-sm sm:text-base">
                        {item.label}
                      </span>
                      {isActive && (
                        <ChevronRight className="w-4 h-4 ml-auto text-white" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 sm:p-8">
            <div className="max-w-5xl mx-auto">{renderContent()}</div>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center w-full min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-center items-center  text-white text-center px-4"
        style={{ backgroundImage: "url('/images/keyboard.jpg')" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          How can we help?
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-4xl drop-shadow-md">
          If you would like us to contact you with more information on what we
          do and what we can offer, please let us know.
        </p>

        <Link href="/Contact-us">
          <button className="bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded transition-all duration-300 shadow-md text-sm sm:text-base">
            CONTACT US
          </button>
        </Link>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default OurCompany;
