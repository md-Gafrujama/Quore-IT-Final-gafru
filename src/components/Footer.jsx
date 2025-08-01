import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo1.jpg"; // Adjust if renamed

export default function Footer() {
  return (
     <footer className="bg-[#001f26] text-white dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-10">
        {/* Logo */}
        {/* <div>
          
             {/* <Image
            src={logo}
            alt="QuoreIt"
            width={80}
            height={80}
            priority
          /> */}
         
        {/* </div> */} 
        <div>
  <h1 className="text-3xl font-bold text-white">QuoreIT</h1>
</div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 dark:text-gray-400">
            {[
              { label: "Find a job", path: "/Find-tech-jobs" },
              { label: "Submit a vacancy", path: "/Find-tech-talent" },
              { label: "What we do", path: "/What-we-do" },
              { label: "News & Events", path: "/News-and-events" },
              { label: "Contact us", path: "/Contact-us" },
            ].map(({ label, path }, idx) => (
              <li key={idx}>
                <Link
                  href={path}
                  className="hover:text-[#00d9a6] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 text-gray-300 dark:text-gray-400">
            {[
              { label: "Privacy Policy", path: "/Policies/Privacy-Policy" },
              { label: "Cookies & Legal", path: "/Policies/Cookies-Legal" },
              { label: "Modern Slavery Statement", path: "/Policies/Modern-Slavery-Statement" },
            ].map(({ label, path }, idx) => (
              <li key={idx}>
                <Link
                  href={path}
                  className="hover:text-[#00d9a6] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow us</h3>
          <div className="flex gap-4 text-gray-300 dark:text-gray-400">
            <Link href="#" aria-label="Facebook" className="hover:text-[#00d9a6]">
              <Facebook />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-[#00d9a6]">
              <Linkedin />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-[#00d9a6]">
              <Twitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#213c42] py-7 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          {/* <Image
            src={logo}
            alt="QuoreIt"
            width={50}
            height={50}
            priority
          /> */}
          <div>
  <h1 className="text-3xl font-bold text-white">QuoreIT</h1>
</div>
          <p className="text-lg text-[#00d9a6] font-medium">
            <Link href="/DigitalLeadershipBanner" className="underline hover:text-white">Powered</Link>{" "}
            <span>by</span>{" "}
            <Link href="#" className="underline hover:text-white">QuoreIT</Link>
          </p>
        </div>
      </div>
    </footer>
   
  );
}