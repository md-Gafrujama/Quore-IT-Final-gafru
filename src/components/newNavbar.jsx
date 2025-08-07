'use client';

import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "@/assets/logo.png"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleInsights = () => {
    setIsInsightsOpen(!isInsightsOpen);
  };

  const navItems = [
    { label: 'What we do', href: '/Quick-Links/What-we-do' },
    { label: 'About us', href: '/Quick-Links/About-us' },
    { label: 'Our Brands', href: '/Quick-Links/Our-Brands' },
    { label: 'Work for us', href: '/Quick-Links/Work-for-us' },
    { label: 'Newsroom', href: '/Quick-Links/Newsroom' }
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
             <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src={logo}
                alt="Harvey Nash Logo"
                width={320}
                height={120}
                className="h-16 w-auto md:h-20 hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-black hover:text-[#00d9a6] px-3 py-2 text-lg font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Insights Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleInsights}
                  className="text-black hover:text-[#00d9a6] px-3 py-2 text-lg font-medium flex items-center transition-colors duration-200"
                >
                  Insights
                  <ChevronDown 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isInsightsOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {/* Dropdown Menu */}
                {isInsightsOpen && (
                   <ul className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
  <li>
    <Link href="/Insights/Tech-Talks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Tech Talks
    </Link>
  </li>
  <li>
    <Link href="/Insights/Digital-Leadership-Report-2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Digital Leadership Report 2025
    </Link>
  </li>
  <li>
    <Link href="/Insights/Diversity-Inclusion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Diversity & Inclusion
    </Link>
  </li>
  <li>
    <Link href="/Insights/Women-in-Tech" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Women in Tech
    </Link>
  </li>
  <li>
    <Link href="/Insights/Cybersecurity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Cybersecurity
    </Link>
  </li>
  <li>
    <Link href="/Insights/Comment-Analysis" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Comment & Analysis
    </Link>
  </li>
  <li>
    <Link href="/Insights/Blogs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Blogs
    </Link>
  </li>
  <li>
    <Link href="/Insights/Tech-Flix" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Tech Flix
    </Link>
  </li>
  <li>
    <Link href="/Insights/Parliamentary-Tech-Champions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Parliamentary Tech Champions
    </Link>
  </li>
</ul>

                )}
              </div>
            </div>
          </div>

          {/* Contact Us Button - Desktop */}
          <div className="hidden lg:block">
             <Link href="/Contact-us"  > 
            <button className="bg-[#00d9a6] text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200">
              Contact us
            </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Insights Dropdown */}
              <div className="px-3 py-2">
                <button
                  onClick={toggleInsights}
                  className="text-gray-600 hover:text-gray-900 flex items-center text-base font-medium w-full"
                >
                  Insights
                  <ChevronDown 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isInsightsOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {isInsightsOpen && (
                  <div className="mt-2 pl-4 space-y-1">
                    <Link href="#" className="block py-2 text-sm text-gray-600 hover:text-gray-900">
                      Articles
                    </Link >
                    <Link href="#" className="block py-2 text-sm text-gray-600 hover:text-gray-900">
                      Reports
                    </Link >
                    <Link href="#" className="block py-2 text-sm text-gray-600 hover:text-gray-900">
                      Whitepapers
                    </Link >
                  </div>
                )}
              </div>
              
              {/* Mobile Contact Button */}
              <div className="px-3 py-2">
                <Link href="/Contact-us">
                <button className="bg-[#00d9a6] text-white px-6 py-2 rounded text-sm font-medium w-full transition-colors duration-200">
                  Contact us
                </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;