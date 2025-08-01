 "use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hiddenPaths = [
    "/Policies/Privacy-Policy",
    "/Policies/Cookies-Legal",
    "/Policies/Modern-Slavery-Statement",
    "/Policies/Accessibility-statement",
    "/Quick-Links/What-we-do",
    "/Quick-Links/About-us",
    "/Quick-Links/Our-Brands",
    "/Quick-Links/Newsroom",
    "/Quick-Links/Work-for-us",
    "/Quick-Links/Contact-us",
    "/Quick-Links/Wellbeing-Hub",
    "/Insights/Tech-Talks",
    "/Insights/Digital-Leadership-Report-2025",
    "/Insights/Diversity-Inclusion",
    "/Insights/Women-in-Tech",
    "/Insights/Cybersecurity",
    "/Insights/Comment-Analysis",
    "/Insights/Blogs",
    "/Insights/Tech-Flix",
    "/Insights/Parliamentary-Tech-Champions",
    "/Insights/Parliamentary-Tech-Champions/Baroness-smith-of-llanfaes",
    "/DigitalLeadershipBanner"
  ];

  const hideLayout = hiddenPaths.some((path) => pathname?.startsWith(path));

  return (
    <html lang="en">
      <head>
        {/* ✅ Cookiebot preview script */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/78869508-adbc-4a8b-af19-83bdf0866c05/cd.js"
          data-cbid="78869508-adbc-4a8b-af19-83bdf0866c05"
          data-blockingmode="auto"
          data-culture="EN"
          type="text/javascript"
        ></script>
      </head>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        {!hideLayout && <Navbar />}
        <main className="min-h-screen flex flex-col justify-between">
          <div className="flex-grow">{children}</div>
          {!hideLayout && <Footer />}
        </main>
      </body>
    </html>
  );
}
