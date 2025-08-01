import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
const ParliamentaryTechChampions = () => {
  const champions = [
    {
      id: 1,
      name: "Baroness Smith of Llanfaes",
      title: "Women and girls deserve the chance to thrive and become leaders in STEM, it is our responsibility to make sure that they have the tools and support they need to do so",
      image: "/images/par1.jpg",
      link: "/Insights/Parliamentary-Tech-Champions/Baroness-smith-of-llanfaes"
    },
    {
      id: 2,
      name: "Dan Aldridge MP",
      title: "Technology for All: Ensuring the UK's Digital Future Leaves No One Behind",
      image: "/images/par2.webp",
      link: "/Parliamentary-Tech-Champions/dan-aldridge-mp"
    },
    {
      id: 3,
      name: "Steve Race MP",
      title: "From eliminating the need for animal testing, to supercharging our SpaceTech sector, the UK's Regulatory Innovation Office could usher in a revolution in innovation in regulated industries across the economy.",
      image: "/images/par3.webp",
      link: "/Parliamentary-Tech-Champions/steve-race-mp"
    },
    {
      id: 4,
      name: "Alex Brewer MP",
      title: "By modernising the system through the adoption of a much greater level of technological innovation and integration, we can realise a future in which our healthcare system once again meets our needs and expectations.",
      image: "/images/par4.webp",
      link: "/Parliamentary-Tech-Champions/alex-brewer-mp"
    },
    {
      id: 5,
      name: "Gordon McKee MP",
      title: "Sectors like games development, aided by new and emerging technologies and serious investment in skills, are in a prime position to help create sustained growth across the UK",
      image: "/images/par5.webp",
      link: "/Parliamentary-Tech-Champions/gordon-mckee-mp"
    },
    {
      id: 6,
      name: "Lord Clement-Jones CBE",
      title: "The new Government must implement stronger provisions of the Online Safety Act",
      image: "/images/par6.webp",
      link: "/Parliamentary-Tech-Champions/lord-clement-jones-cbe"
    },
    {
      id: 7,
      name: "Baroness Stowell",
      title: "To realise the full potential of UK innovation, we must become more successful at turning startups into scale ups",
      image: "/images/par7.webp",
      link: "/Parliamentary-Tech-Champions/baroness-stowell"
    },
    {
      id: 8,
      name: "Baroness Kidron",
      title: "We will live with and alongside intelligent systems, but now is the time to work out the terms of engagement. Tomorrow is too late.",
      image: "/images/par8.webp",
      link: "/Parliamentary-Tech-Champions/baroness-kidron"
    },
    {
      id: 9,
      name: "Matt Warman MP",
      title: "In 15 years covering technology for the Telegraph, I saw the internet get into everything – from the iPhone and the Kindle to our boilers and cars, it is now everywhere.",
      image: "/images/par9.webp",
      link: "/Parliamentary-Tech-Champions/matt-warman-mp"
    }
  ];

  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen py-8 px-4 mt-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Parliamentary Tech Champions
          </h1>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Each month we invite a leading member of the UK's parliament to share their thoughts on technology 
            and innovation in the UK. This is published as part of our Tech Bytes newsletter which is distributed to 
            all members of the House of Commons and House of Lords.
          </p>
        </div>

        {/* Champions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {champions.map((champion) => (
            <div 
              key={champion.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-80 sm:h-96 lg:h-[28rem] bg-gray-200 overflow-hidden">
                <Image
                  src={champion.image}
                  alt={champion.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Name */}
                <h3 className="text-lg font-semibold text-red-500 mb-4">
                  {champion.name}
                </h3>
                
                {/* Title/Quote - Clickable */}
                <div className="flex-1">
                  <Link href={champion.link}>
                    <p className="text-blue-600 hover:text-blue-800 transition-colors duration-200 cursor-pointer text-base sm:text-lg font-medium leading-relaxed">
                      {champion.title}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ParliamentaryTechChampions;