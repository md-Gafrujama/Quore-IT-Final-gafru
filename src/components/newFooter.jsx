'use client';

import Link from "next/link";

export default function Footer2() {
 
 

  return (<>
  


     <footer className="bg-[#213c42] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo Section */}
        <div>
          <div className="text-white text-2xl font-bold mb-4">
            
            <div className="text-white text-lg">QuoreIT</div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/Quick-Links/What-we-do">What we do</Link></li>
            <li><Link href="/Quick-Links/About-us">About us</Link></li>
            <li><Link href="/Quick-Links/Our-Brands">Our Brands</Link></li>
            <li><Link href="/Quick-Links/Newsroom">Newsroom</Link></li>
            <li><Link href="/Quick-Links/Work-for-us">Work for us</Link></li>
            <li><Link href="/Quick-Links/Contact-us">Contact us</Link></li>
            <li><Link href="/Quick-Links/Wellbeing-Hub">Wellbeing Hub</Link></li>
          </ul>
        </div>

        {/* Insights */}
        <div>
          <h4 className="font-bold mb-3">Insights</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/Insights/Tech-Talks">Tech Talks</Link></li>
            <li><Link href="/Insights/Digital-Leadership-Report-2025">Digital Leadership Report 2025</Link></li>
            <li><Link href="/Insights/Diversity-Inclusion">Diversity & Inclusion</Link></li>
            <li><Link href="/Insights/Women-in-Tech">Women in Tech</Link></li>
            <li><Link href="/Insights/Cybersecurity">Cybersecurity</Link></li>
            <li><Link href="/Insights/Comment-Analysis">Comment & Analysis</Link></li>
            <li><Link href="/Insights/Blogs">Blogs</Link></li>
            <li><Link href="/Insights/Tech-Flix">Tech Flix</Link></li>
            <li><Link href="/Insights/Parliamentary-Tech-Champions">Parliamentary Tech Champions</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-bold mb-3">Follow us</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="https://linkedin.com" target="_blank">LinkedIn</Link></li>
            <li><Link href="https://twitter.com" target="_blank">Twitter</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex gap-6 flex-wrap justify-center">
          <Link href="/Policies/Privacy-Policy">Privacy Policy</Link>
          <Link href="/Policies/Cookies-Legal">Cookies</Link>
          <Link href="/Policies/Accessibility-statement">Accessibility Statement</Link>
          <Link href="/Policies/Modern-Slavery-Statement">Modern Slavery</Link>
        </div>
        <div className="text-white/70 mt-2 md:mt-0">&copy; {new Date().getFullYear()} QuoreIT</div>
      </div>
    </footer></>
  );
}