// import { Facebook, Linkedin, Twitter } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "@/assets/logo1.jpg";

// export default function Footer() {
//   return (
//     <footer className="bg-[#001f26] text-white dark:bg-gray-900 dark:text-gray-100 relative overflow-hidden">
//       {/* Decorative gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#001f26] via-[#002a33] to-[#001f26] opacity-50"></div>
      
//       <div className="relative z-10">
//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <div className="grid md:grid-cols-4 gap-10">
//             {/* Logo Section */}
//             <div className="space-y-4">
//               <div className="group">
//                 <h1 className="text-4xl font-bold text-white group-hover:text-[#00d9a6] transition-all duration-300 ease-in-out transform group-hover:scale-105">
//                   QuoreIT
//                 </h1>
//                 <div className="w-12 h-1 bg-[#00d9a6] rounded-full mt-2 transform group-hover:w-20 transition-all duration-300"></div>
//               </div>
//               <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
//                 Connecting talent with opportunities in the tech industry. Your trusted partner for career growth.
//               </p>
//             </div>

//             {/* Quick Links */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold mb-6 text-white relative">
//                 Quick Links
//                 <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#00d9a6] rounded-full"></div>
//               </h3>
//               <ul className="space-y-3">
//                 {[
//                   { label: "Find a job", path: "/Find-tech-jobs" },
//                   { label: "Submit a vacancy", path: "/Find-tech-talent" },
//                   { label: "What we do", path: "/What-we-do" },
//                   { label: "News & Events", path: "https://quore-it-ai-blogs.vercel.app/" },
//                   { label: "Contact us", path: "/Contact-us" },
//                 ].map(({ label, path }, idx) => (
//                   <li key={idx} className="transform hover:translate-x-2 transition-all duration-200">
//                     <Link
//                       href={path}
//                       className="text-gray-300 hover:text-[#00d9a6] transition-all duration-200 flex items-center group text-sm font-medium"
//                     >
//                       <span className="w-0 h-0.5 bg-[#00d9a6] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-200 rounded-full"></span>
//                       {label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Policies */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold mb-6 text-white relative">
//                 Policies
//                 <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#00d9a6] rounded-full"></div>
//               </h3>
//               <ul className="space-y-3">
//                 {[
//                   { label: "Privacy Policy", path: "/Policies/Privacy-Policy" },
//                   { label: "Cookies & Legal", path: "/Policies/Cookies-Legal" },
//                   { label: "Modern Slavery Statement", path: "/Policies/Modern-Slavery-Statement" },
//                 ].map(({ label, path }, idx) => (
//                   <li key={idx} className="transform hover:translate-x-2 transition-all duration-200">
//                     <Link
//                       href={path}
//                       className="text-gray-300 hover:text-[#00d9a6] transition-all duration-200 flex items-center group text-sm font-medium"
//                     >
//                       <span className="w-0 h-0.5 bg-[#00d9a6] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-200 rounded-full"></span>
//                       {label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Social Media */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold mb-6 text-white relative">
//                 Follow Us
//                 <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#00d9a6] rounded-full"></div>
//               </h3>
//               <div className="flex gap-4">
//                 {[
//                   { Icon: Facebook, label: "Facebook", href: "#" },
//                   { Icon: Linkedin, label: "LinkedIn", href: "#" },
//                   { Icon: Twitter, label: "Twitter", href: "#" },
//                 ].map(({ Icon, label, href }, idx) => (
//                   <Link
//                     key={idx}
//                     href={href}
//                     aria-label={label}
//                     className="group relative p-3 bg-[#213c42] rounded-full hover:bg-[#00d9a6] transition-all duration-300 transform hover:scale-110 hover:rotate-3"
//                   >
//                     <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
//                     <div className="absolute inset-0 rounded-full bg-[#00d9a6] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                   </Link>
//                 ))}
//               </div>
//               <p className="text-gray-400 text-xs mt-4">
//                 Stay connected for the latest updates and opportunities
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00d9a6] to-transparent h-px"></div>
//           <div className="bg-[#213c42] h-px"></div>
//         </div>

//         {/* Bottom Section */}
//         <div className="bg-[#213c42] py-8">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//               {/* Copyright */}
//               <div className="flex items-center gap-3">
//                 <div className="group cursor-pointer">
//                   <h1 className="text-2xl font-bold text-white group-hover:text-[#00d9a6] transition-colors duration-300">
//                     QuoreIT
//                   </h1>
//                 </div>
//                 <div className="h-6 w-px bg-gray-500"></div>
//                 <p className="text-gray-400 text-sm">
//                   © 2025 All Rights Reserved
//                 </p>
//               </div>

//               {/* Additional Info */}
//               <div className="flex items-center gap-6 text-sm text-gray-400">
//                 <span className="hover:text-[#00d9a6] transition-colors duration-200 cursor-pointer">
//                   Made with ❤️ for Tech Professionals
//                 </span>
//                 <div className="hidden md:flex items-center gap-2">
//                   <div className="w-2 h-2 bg-[#00d9a6] rounded-full animate-pulse"></div>
//                   <span className="text-xs">Online</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo1.jpg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-600/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-500/5 via-transparent to-transparent"></div>
        
        {/* Decorative Grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(156,163,175,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(156,163,175,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-600/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gray-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Enhanced Logo & Company Info Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="group cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">Q</span>
                  </div>
                  <h1 className="text-3xl font-bold text-white group-hover:text-[#00d9a6] transition-all duration-300">
                    QuoreIT
                  </h1>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full transform group-hover:w-24 transition-all duration-500"></div>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed max-w-sm">
                Connecting exceptional technology talent with innovative organizations worldwide. Your strategic partner for growth and success.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center text-gray-300 hover:text-[#00d9a6] transition-colors duration-300 group">
                  <Mail className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">info@quoreit.com</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-[#00d9a6] transition-colors duration-300 group">
                  <Phone className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-[#00d9a6] transition-colors duration-300 group">
                  <MapPin className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">Global Offices Worldwide</span>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6 text-white relative pb-3">
                Services
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "Find Tech Jobs", path: "/Find-tech-jobs", description: "Discover opportunities" },
                  { label: "Submit Vacancy", path: "/Find-tech-talent", description: "Find talent" },
                  { label: "What We Do", path: "/What-we-do", description: "Our services" },
                  { label: "Workforce Solutions", path: "/workforce-solutions", description: "Strategic consulting" },
                  { label: "Contact Us", path: "/Contact-us", description: "Get in touch" },
                ].map(({ label, path, description }, idx) => (
                  <li key={idx} className="group">
                    <Link
                      href={path}
                      className="block p-3 rounded-lg hover:bg-white/5 transition-all duration-300 transform hover:translate-x-2"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-gray-200 group-hover:text-[#00d9a6] transition-colors duration-300 font-medium flex items-center">
                            <ArrowRight className="w-0 h-4 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            {label}
                          </div>
                          <div className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors duration-300">
                            {description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Resources & Policies */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6 text-white relative pb-3">
                Resources
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "News & Insights", path: "https://quore-it-ai-blogs.vercel.app/", description: "Latest trends", external: true },
                  { label: "Privacy Policy", path: "/Policies/Privacy-Policy", description: "Data protection" },
                  { label: "Terms of Service", path: "/Policies/Terms-of-Service", description: "Usage terms" },
                  { label: "Cookies & Legal", path: "/Policies/Cookies-Legal", description: "Legal information" },
                  { label: "Modern Slavery", path: "/Policies/Modern-Slavery-Statement", description: "Our commitment" },
                ].map(({ label, path, description, external }, idx) => (
                  <li key={idx} className="group">
                    <Link
                      href={path}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="block p-3 rounded-lg hover:bg-white/5 transition-all duration-300 transform hover:translate-x-2"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-gray-200 group-hover:text-[#00d9a6] transition-colors duration-300 font-medium flex items-center">
                            <ArrowRight className="w-0 h-4 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            {label}
                            {external && <span className="ml-1 text-xs">↗</span>}
                          </div>
                          <div className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors duration-300">
                            {description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Social Media & Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6 text-white relative pb-3">
                Stay Connected
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></div>
              </h3>
              
              {/* Social Media Icons */}
              <div className="flex gap-4 mb-8">
                {[
                  { Icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-gray-600" },
                  { Icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-gray-600" },
                  { Icon: Twitter, label: "Twitter", href: "#", color: "hover:bg-gray-600" },
                ].map(({ Icon, label, href, color }, idx) => (
                  <Link
                    key={idx}
                    href={href}
                    aria-label={label}
                    className={`group relative p-4 bg-white/10 backdrop-blur-sm rounded-2xl ${color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-600/20 to-gray-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center text-gray-400 text-sm">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 animate-pulse"></div>
                  <span>Trusted by 500+ companies worldwide</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3 animate-pulse delay-500"></div>
                  <span>25+ years of industry expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="relative mx-6 lg:mx-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/50 to-transparent h-px"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/30 to-transparent h-px transform translate-y-px"></div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Enhanced Copyright */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="group cursor-pointer flex items-center">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">Q</span>
                    </div>
                    <h1 className="text-xl font-bold text-white group-hover:text-[#00d9a6] transition-colors duration-300">
                      QuoreIT
                    </h1>
                  </div>
                  <div className="hidden sm:block h-6 w-px bg-gray-500"></div>
                  <p className="text-gray-400 text-sm">
                    © 2025 QuoreIT. All Rights Reserved
                  </p>
                </div>
              </div>

              {/* Enhanced Additional Info */}
              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-400 hover:text-[#00d9a6] transition-colors duration-300 cursor-pointer">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-400 animate-pulse" fill="currentColor" />
                  <span>for Tech Professionals</span>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-3 h-3 bg-gray-400 rounded-full animate-ping"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-xs">System Online</span>
                  </div>
                  
                  <div className="text-gray-400 text-xs">
                    Last updated: September 2025
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Bottom Info */}
            <div className="mt-6 pt-6 border-t border-gray-600/30">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  <span className="hover:text-[#00d9a6] transition-colors duration-300 cursor-pointer">Accessibility Statement</span>
                  <span className="hover:text-[#00d9a6] transition-colors duration-300 cursor-pointer">Sitemap</span>
                  <span className="hover:text-[#00d9a6] transition-colors duration-300 cursor-pointer">Career Opportunities</span>
                  <span className="hover:text-[#00d9a6] transition-colors duration-300 cursor-pointer">Partner Program</span>
                </div>
                <div className="text-center lg:text-right">
                  <p>ISO 27001 Certified | GDPR Compliant | Equal Opportunity Employer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
     
    </footer>
  );
}