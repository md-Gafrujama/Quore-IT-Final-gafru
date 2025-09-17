import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo1.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#001f26] text-white dark:bg-gray-900 dark:text-gray-100 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001f26] via-[#002a33] to-[#001f26] opacity-50"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Logo Section */}
            <div className="space-y-4">
              <div className="group">
                <h1 className="text-4xl font-bold text-white group-hover:text-[#00d9a6] transition-all duration-300 ease-in-out transform group-hover:scale-105">
                  QuoreIT
                </h1>
                <div className="w-12 h-1 bg-[#00d9a6] rounded-full mt-2 transform group-hover:w-20 transition-all duration-300"></div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                Connecting talent with opportunities in the tech industry. Your trusted partner for career growth.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6 text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#00d9a6] rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Find a job", path: "/Find-tech-jobs" },
                  { label: "Submit a vacancy", path: "/Find-tech-talent" },
                  { label: "What we do", path: "/What-we-do" },
                  { label: "News & Events", path: "https://quore-it-ai-blogs.vercel.app/" },
                  { label: "Contact us", path: "/Contact-us" },
                ].map(({ label, path }, idx) => (
                  <li key={idx} className="transform hover:translate-x-2 transition-all duration-200">
                    <Link
                      href={path}
                      className="text-gray-300 hover:text-[#00d9a6] transition-all duration-200 flex items-center group text-sm font-medium"
                    >
                      <span className="w-0 h-0.5 bg-[#00d9a6] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-200 rounded-full"></span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6 text-white relative">
                Policies
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#00d9a6] rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Privacy Policy", path: "/Policies/Privacy-Policy" },
                  { label: "Cookies & Legal", path: "/Policies/Cookies-Legal" },
                  { label: "Modern Slavery Statement", path: "/Policies/Modern-Slavery-Statement" },
                ].map(({ label, path }, idx) => (
                  <li key={idx} className="transform hover:translate-x-2 transition-all duration-200">
                    <Link
                      href={path}
                      className="text-gray-300 hover:text-[#00d9a6] transition-all duration-200 flex items-center group text-sm font-medium"
                    >
                      <span className="w-0 h-0.5 bg-[#00d9a6] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-200 rounded-full"></span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6 text-white relative">
                Follow Us
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#00d9a6] rounded-full"></div>
              </h3>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, label: "Facebook", href: "#" },
                  { Icon: Linkedin, label: "LinkedIn", href: "#" },
                  { Icon: Twitter, label: "Twitter", href: "#" },
                ].map(({ Icon, label, href }, idx) => (
                  <Link
                    key={idx}
                    href={href}
                    aria-label={label}
                    className="group relative p-3 bg-[#213c42] rounded-full hover:bg-[#00d9a6] transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                  >
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full bg-[#00d9a6] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </Link>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-4">
                Stay connected for the latest updates and opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00d9a6] to-transparent h-px"></div>
          <div className="bg-[#213c42] h-px"></div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#213c42] py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-3">
                <div className="group cursor-pointer">
                  <h1 className="text-2xl font-bold text-white group-hover:text-[#00d9a6] transition-colors duration-300">
                    QuoreIT
                  </h1>
                </div>
                <div className="h-6 w-px bg-gray-500"></div>
                <p className="text-gray-400 text-sm">
                  © 2025 All Rights Reserved
                </p>
              </div>

              {/* Additional Info */}
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span className="hover:text-[#00d9a6] transition-colors duration-200 cursor-pointer">
                  Made with ❤️ for Tech Professionals
                </span>
                <div className="hidden md:flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00d9a6] rounded-full animate-pulse"></div>
                  <span className="text-xs">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}