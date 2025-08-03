import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const ITSolutionsHero = () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white flex items-center justify-center p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-blue-600 bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-blue-300 border-opacity-30">
              <span className="text-blue-200 text-sm font-medium tracking-wider">TRUSTED BY FORTUNE 500 COMPANIES</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="block text-blue-300">Seamless Operations,</span>
              <span className="block text-white">Robust Security:</span>
              <span className="block text-blue-200">Meet our cutting edge</span>
              <span className="block text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                IT Solutions.
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-10">
              Transforming businesses with innovative technology solutions designed for performance, security, and scalability.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-300/20">
              <Image 
                src="/images/the-meeting-of-two-business-people.png" 
                alt="Business professionals meeting"
                width={600}
                height={600}
                className="object-cover w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl w-64">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-800 font-bold">24/7 Support</p>
                  <p className="text-gray-600 text-sm">Dedicated team always ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="mb-8">
                <p className="font-bold text-black text-3xl leading-relaxed mb-6">
                  With a rich history of serving numerous clients nationwide across diverse industry verticals,
                </p>
                
                <h2 className="text-3xl font-bold text-[#0066cc] mb-6">
                  Seneca Resources is your trusted partner for comprehensive technology solutions.
                </h2>
                
                <p className="text-black text-lg leading-relaxed mb-6">
                  Our team boasts deep expertise in addressing real-world business challenges. So you can be sure that you've got the resources and support you need to thrive in today's fast-paced technology landscape.
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <p className="text-black text-lg leading-relaxed">
                  At Seneca Resources, we understand that modern businesses rely on systems, applications, and data like never before. Swift access, unwavering availability, and robust security are must have – they're fundamental to keeping your operations running seamlessly. That's why our teams tailor their approach to your project's unique requirements and objectives. We excel in delivering these critical components when and how you need them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-tight">Advanced technologies. Expert Support.</h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Tech Solutions */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-white mb-6">Advanced Tech and Support</h3>
              <ul className="space-y-4">
                {[
                  'Converged Infrastructure',
                  'Micro Data Centers',
                  'Data Analytics/Big Data',
                  'Power & Cooling',
                  'Server, Desktop & Printer Hardware',
                  'SmartBunker*',
                  'Virtualization',
                  'Cloud Infrastructure',
                  'Storage, Back-Up, & Recovery',
                  'Network & Systems Monitoring'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-white mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Project Management */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-white mb-6">Project Management Design/Architecture</h3>
              <ul className="space-y-4">
                {[
                  'Assessments',
                  'Architecture & Design',
                  'Implementation',
                  'Configuration',
                  'Data Migration',
                  'Maintenance',
                  'On-going Support'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-white mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

         {/* Learn More Link */}
        <div className="text-center mt-12">
          <a href="/learn-more" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border-blue-600">
          LEARN MORE
            <svg className="ml-3 -mr-1 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586  11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
         </svg>
        </a>
       </div>
        </div>
      </div>

    <div className="py-12 bg-gray-50">  {/* Changed from bg-white to bg-gray-50 */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Tech Partners
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
        In addition, Seneca Resources is a certified hardware, software, and maintenance Value-Added Reseller (VAR) for leading industry manufacturers. We proudly offer a comprehensive product portfolio designed to establish and maintain high-performance, uninterrupted availability and protection for your systems. Our esteemed technology partners include:
      </p>
    </div>

    <div className="mt-12">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
        {/* AWS */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/aws-logo.png" 
              alt="AWS"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Check Point */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/checkpoint-logo.png" 
              alt="Check Point"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Cisco */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/cisco-logo.png" 
              alt="Cisco"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Commvault */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/commvault-logo.png" 
              alt="Commvault"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Dell Technologies */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/dell-logo.png" 
              alt="Dell Technologies"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* EMC */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/emc-logo.png" 
              alt="EMC"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Hitachi */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/hitachi-logo.png" 
              alt="Hitachi"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* HPE */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/hpe-logo.png" 
              alt="Hewlett Packard Enterprise"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Information Builders */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/ib-logo.png" 
              alt="Information Builders"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Radian */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/radian-logo.png" 
              alt="Radian"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* RSA */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/rsa-logo.png" 
              alt="RSA"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Schneider Electric */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/schneider-logo.png" 
              alt="Schneider Electric"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* ServiceNow */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/servicenow-logo.png" 
              alt="ServiceNow"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Tenable */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/tenable-logo.png" 
              alt="Tenable"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Veracode */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/veracode-logo.png" 
              alt="Veracode"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* VMware */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/vmware-logo.png" 
              alt="VMware"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Xerox */}
        <div className="col-span-1 flex justify-center">
          <div className="flex items-center justify-center h-24 w-full relative">
            <Image 
              src="/xerox-logo.png" 
              alt="Xerox"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="mt-12 text-center">
      <p className="text-xl text-gray-600">
        Backed by our expert team and industry-leading technology partners, we guarantee the efficiency and security of your IT environment. We deploy your technology solutions with purpose and precision, so you can focus on your core business: taking care of your customers.
      </p>
    </div>
  </div>
</div>
   
    <div className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white min-h-[500px]">
  <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Image on the left */}
      <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
        <Image
          src="/images/corporate-meeting.jpg"
          alt="Corporate Meeting"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-90"
        />
      </div>

      {/* Content on the right */}
      <div className="text-center lg:text-left bg-black/10 p-8 rounded-lg backdrop-blur-sm">
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-8">
          To discover how Seneca Resources can<br />
          address your specific IT requirements
        </h2>
        
        <div className="mt-6 text-xl leading-8 space-y-4">
          <p>contact us at <span className="font-semibold">info@senecahq.com</span></p>
          <p>or call</p>
          <p className="text-2xl font-bold">703-390-9099</p>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default ITSolutionsHero;