 import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const SenecaServicesPage = () => {
      const services = [
   
    {
      id: 'cloud-consulting',
      title: 'Cloud Consulting',
      description: 'Whether an organization is looking to build, move or store their data, Seneca\'s cloud engineers are well versed in the development of cloud infrastructures and data migrations.',
      image: '/images/it13.png',
      alt: 'Team of professionals collaborating on cloud computing solutions',
      reverse: false
    },
    {
      id: 'data-science',
      title: 'Data Science Consulting',
      description: 'Our teams are fluent in Machine Learning, Artificial Intelligence, and Deep Learning technologies to meet your most pressing analytics needs. We\'ll partner with you to interrogate your data and find crucial business insights.',
      image: '/images/it14.png',
      alt: 'Data science team analyzing information on tablets and devices',
      reverse: true
    },
    {
      id: 'app-mobile',
      title: 'App/Mobile Development',
      description: 'We\'re fluent in the intricacies of all major mobile OS platforms as well as the latest dev tools and APKs. This means you can leverage the unique features of any mobile device or OS to your advantage.',
      image: '/images/it15.png',
      alt: 'Development team working on mobile applications',
      reverse: false
    },
    {
      id: 'agile-training',
      title: 'Agile Training',
      description: 'Our engineers help organizations Design, Develop, Deploy and Operate mission critical IT systems through organizational collaboration and continuous enhancements to IT systems and applications.',
      image: '/images/it16.png',
      alt: 'Team members participating in agile training and collaboration',
      reverse: true
    }
  ];
  return (
    <>
      <Head>
        <title>Seneca Resources - Expert IT Services & Recruitment Solutions</title>
        <meta 
          name="description" 
          content="From small business to Fortune 100. Seneca Resources provides expert IT services, government solutions, engineering, and consulting services. Trusted by winning teams nationwide." 
        />
         <meta
          property="og:image"
          content="/" 
        />
        <meta name="keywords" content="IT services, government services, engineering, consulting, technology solutions, recruitment, DevOps, cybersecurity, cloud solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/services" />
        
        
      </Head>

      <main className="min-h-screen bg-gray-50 ">
        {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] mt-18 to-cyan-500 overflow-hidden">           
  {/* Background Pattern */}           
  <div className="absolute inset-0 opacity-10">             
    <div className="absolute inset-0" style={{               
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,             
    }} />           
  </div>                      

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">             
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">               
      {/* Left Content */}               
      <div className="text-white space-y-6 lg:space-y-8">                 
        <div className="space-y-4">                   
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">                     
            People who know,{' '}                     
            <span className="text-[#00d9a6] block">know Seneca.</span>                   
          </h1>                 
        </div>                                  

        <div className="space-y-4 lg:space-y-6 text-lg sm:text-xl lg:text-2xl">                   
          <p className="font-medium">From small business to Fortune 100.</p>                   
          <p className="font-medium">Public sector to private enterprise.</p>                   
          <p className="leading-relaxed">                     
            When it comes to highly skilled services and best-in-class                      
            solutions, winning teams know they can count on Seneca                      
            Resources.                   
          </p>                   
          <p className="leading-relaxed">                     
            Our clients see results because we seek out exactly the right fit                      
            for every situation. It's precision resourcing, and it can                      
            transform your business.                   
          </p>                 
        </div>               
      </div>                

      {/* Right Image - Enhanced */}               
      <div className="relative group">
        {/* Floating background decorations */}
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-green-400 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full opacity-15 blur-3xl"></div>
        
        {/* Main image container */}
        <div className="relative transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1">
          {/* Glassmorphism backdrop */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl"></div>
          
          {/* Image wrapper with enhanced styling */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 transform transition-all duration-300">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/20 rounded-3xl"></div>
            
            {/* Actual image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image                     
                src="/images/it1.png"                     
                alt="Professional business team handshake in modern office setting"                     
                width={600}                     
                height={400}                     
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"                     
                priority                     
                loading="eager"                   
              />
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-2 right-2 w-4 h-4 bg-green-400 rounded-full opacity-70"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-cyan-400 rounded-full opacity-70"></div>
          </div>
          
          {/* Additional floating elements */}
          <div className="absolute -top-2 left-1/4 w-6 h-6 bg-gradient-to-r from-green-400 to-pink-500 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute -bottom-3 right-1/3 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>             
    </div>           
  </div>         
</section>

      {/* Services Grid Section */}
<section className="py-12 lg:py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {/* Government Services */}
      <article className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
        <div className="text-center space-y-6 flex-grow flex flex-col">
          <div className="w-16 h-16 mx-auto bg-orange-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
            </svg>
          </div>
          
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
            Government Services
          </h2>
          
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base flex-grow">
            Understanding how to efficiently navigate regulated and compliance-driven government 
            environments allows us to move as quickly and precisely and precisely to meet your staffing and 
            recruiting needs as the project demands.
          </p>
          
          <Link 
            href="/services/government-services"
            className="inline-flex items-center px-6 py-3 bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-auto"
            aria-label="Learn more about Government Services"
          >
            LEARN MORE
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>

      {/* Information Technology */}
      <article className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
        <div className="text-center space-y-6 flex-grow flex flex-col">
          <div className="w-16 h-16 mx-auto bg-orange-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1 .9 2 2 2h3l-1 1v1h12v-1l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
            </svg>
          </div>
          
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
            Information Technology
          </h2>
          
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base flex-grow">
            There's no room for error in a world of constantly changing technology. From development to AI, 
            our expert IT recruiters stay on top of the latest developments in their specialties so they know 
            where to focus, and why.
          </p>
          
          <Link 
            href="/services/information-technology"
            className="inline-flex items-center px-6 py-3 bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-auto"
            aria-label="Learn more about Information Technology Services"
          >
            LEARN MORE
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>

      {/* Engineering */}
      <article className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
        <div className="text-center space-y-6 flex-grow flex flex-col">
          <div className="w-16 h-16 mx-auto bg-orange-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
            Engineering
          </h2>
          
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base flex-grow">
            When it comes to recruiting the best engineers, deep expertise doesn't mean blinders are on. We 
            onboard team members who have a sense of where they fit in within the larger mission.
          </p>
          
          <Link 
            href="/services/engineering"
            className="inline-flex items-center px-6 py-3 bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-auto"
            aria-label="Learn more about Engineering Services"
          >
            LEARN MORE
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>

      {/* Consulting Services */}
      <article className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
        <div className="text-center space-y-6 flex-grow flex flex-col">
          <div className="w-16 h-16 mx-auto bg-orange-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1 .9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
          </div>
          
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
            Consulting Services
          </h2>
          
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base flex-grow">
            Understanding how a skill fits in to a larger mechanism is the mark of a true expert. Our 
            specialists understand the bigger picture, and help our clients do the same.
          </p>
          
          <Link 
            href="/services/consulting-services"
            className="inline-flex items-center px-6 py-3 bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-auto"
            aria-label="Learn more about Consulting Services"
          >
            LEARN MORE
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  </div>
</section>

         
      

        {/* Government Services Section */}
      

        {/* Consulting Services Header */}
        <section className="bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8">
              Consulting Services
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Understanding how a skill fits into a larger mechanism is the mark of a true expert. Our 
              recruitment specialists understand the bigger picture, and help our clients do the same. With 
              decades of combined experience across all phases of strategic planning, Seneca Consulting 
              Services can help you see the road ahead.
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Expertise in the key areas driving business today.
            </h2>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {services.map((service, index) => (
                <article 
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${
                    service.reverse ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Image Container */}
                  <div className={`relative ${service.reverse ? 'lg:col-start-2' : ''}`}>
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                        priority={index < 2}
                        quality={85}
                      />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`${service.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="  p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-center">
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                        {service.description}
                      </p>
                      <div className="mt-auto">
                        <Link
                          href={`/services/${service.id}`}
                          className="inline-flex items-center bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500/50"
                          aria-label={`Learn more about ${service.title} services`}
                        >
                          GET STARTED
                          <svg 
                            className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

         {/* Engineering Specialties Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
                We also provide crucial support to leading companies in the following areas:
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {/* Aerospace */}
              <article className="bg-green-900/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 lg:p-8 hover:bg-green-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl lg:text-2xl font-bold text-white-400 mb-4 lg:mb-6">AEROSPACE</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Instrumentation Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Controls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Design Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Fabrication Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Mechanical Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Materials Management</span>
                  </li>
                </ul>
              </article>

              {/* Chemical/Petro */}
              <article className="bg-green-900/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 lg:p-8 hover:bg-green-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl lg:text-2xl font-bold text-white-400 mb-4 lg:mb-6">CHEMICAL/PETRO</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Process/Manufacturing Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Chemists/Lab Technician Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Chemical Engineer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Environmental/Health/Safety Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Nuclear Engineers</span>
                  </li>
                </ul>
              </article>

              {/* Logistics/Automation */}
              <article className="bg-green-900/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 lg:p-8 hover:bg-green-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl md:col-span-2 lg:col-span-1">
                <h3 className="text-xl lg:text-2xl font-bold text-white-400 mb-4 lg:mb-6">LOGISTICS/AUTOMATION</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Field Service Engineers & Technicians</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Controls & Mechanical Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Sales Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>IT Service Managers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Project Managers</span>
                  </li>
                </ul>
              </article>
            </div>

            <div className="text-center">
              <Link 
                href="/services/engineering-specialties"
                className="inline-flex items-center px-10 py-4 bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 text-lg"
                aria-label="Get started with engineering specialty services"
              >
                GET STARTED
                <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SenecaServicesPage;