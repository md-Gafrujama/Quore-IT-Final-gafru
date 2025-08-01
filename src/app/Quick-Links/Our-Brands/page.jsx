'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
const brands = [
  {
    name: 'Harvey Nash',
    src: '/brands/harveynash.png',
    alt: 'Harvey Nash Logo',
  },
  {
    name: 'Flexhuis',
    src: '/brands/flexhuis.png',
    alt: 'Flexhuis Logo',
  },
  {
    name: 'Spinks',
    src: '/brands/spinks.png',
    alt: 'Spinks Logo',
  },
  {
    name: 'Crimson',
    src: '/brands/crimson.png',
    alt: 'Crimson Logo',
  },
  {
    name: 'Talent',
    src: '/brands/talent.png',
    alt: 'Talent Logo',
  },
]

export default function OurBrands() {
  return (<>
  <Navbar/>
    <section className="py-16 bg-white mt-24 text-center">
      <h2 className="text-4xl font-bold text-black">Our Brands</h2>
      <p className="text-xl font-semibold mt-4 text-black">
        Our Nash Squared Brands
      </p>
      <div className="w-20 h-1 bg-red-600 mx-auto mt-2 mb-10 rounded"></div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={160}
              height={100}
              layout="responsive"
              objectFit="contain"
              priority={index === 0} // priority load for first logo
            />
          </div>
        ))}
      </div>
    </section>
     <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Harvey Nash
          </h2>
          <p className="text-gray-800 mb-6 leading-relaxed">
            We’re Harvey Nash, and we build amazing technology and digital teams. From senior appointments
            through to recruitment and project solutions, we are experts in the tech sector.
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            We’re deeply connected with our clients and the diverse community we serve, and made up of passionate
            people who care about changing lives and helping our clients be successful.
          </p>

          <Link
            href="#"
            className="text-blue-600 hover:text-blue-800 font-medium transition"
          >
            More about Harvey Nash &gt;&gt;
          </Link>
        </div>

        {/* Right Image */}
        <div>
          <Image
            src="/brands/harvey-nash-banner.png"
            alt="Leading Technology Recruitment - Harvey Nash"
            width={800}
            height={500}
            className="w-full rounded-md shadow-md"
            priority
          />
        </div>
      </div>
    </section>
     
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div>
          <Image
            src="/brands/local-market-map.png"
            alt="Europe glowing map"
            width={800}
            height={500}
            className="w-full rounded-md shadow-md"
            priority
          />
        </div>

        {/* Right Text Content */}
        <div>
          <h3 className="text-2xl font-bold text-black mb-6">
            Local Market Brands
          </h3>
          <ul className="space-y-4 text-gray-800 text-lg leading-relaxed">
            <li>
              <Link href="#" className="text-blue-600 hover:underline font-medium">
                Flexhuis
              </Link>{' '}
              is our total talent solutions partner with proven track record in MSP and RPO
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline font-medium">
                Spinks
              </Link>{' '}
              helps startups and scale-ups realise their talent potential
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline font-medium">
                Crimson
              </Link>{' '}
              is a Microsoft Gold development Partner in the UK
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline font-medium">
                Talent-IT Group
              </Link>{' '}
              is a leading talent consultancy in Belgium
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="relative h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <Image
        src="/cta/limitless-bg.png"
        alt="Limitless future background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Content */}
      <div className="relative z-20 px-4">
        <h2 className="text-2xl md:text-4xl font-semibold">
          We&apos;re ready to help <strong className="font-bold">you</strong>{' '}
          <span className="font-light">build a limitless future</span>
        </h2>
        <Link
          href="/contact"
          className="inline-block mt-6 px-6 py-2 border border-white rounded-md text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Contact us
        </Link>
      </div>
    </section>
    <Footer/>
    </>
  )
}
