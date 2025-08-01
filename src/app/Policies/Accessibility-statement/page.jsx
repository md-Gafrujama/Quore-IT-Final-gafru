'use client';

import React from 'react';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";                                                                                                                                     import Head from "next/head";
export default function AccessibilityStatementPage() {
  return (
    <> 
    <Navbar/>                                                                               <Head>
        <title>Accessibility Statement | Nash Squared</title>
        <meta
          name="description"
          content="Learn about Nash Squared’s commitment to accessibility and inclusivity across our digital platforms."
        />
        <meta property="og:title" content="Accessibility Statement | Nash Squared" />
        <meta
          property="og:description"
          content="Learn about Nash Squared’s commitment to accessibility and inclusivity across our digital platforms."
        />
        <meta
          property="og:image"
          content="/" 
        />
      </Head>
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 px-6 py-12">
      <section className="max-w-4xl mx-auto text-justify">
        <h1 className="text-3xl font-bold mb-6">Accessibility Statement</h1>

        <p className="mb-4">
          At Nash Squared we are building a business that is proudly sustainable, ethical and inclusive and as part of this we are committed to making our websites and digital products accessible.
        </p>

        <p className="mb-4">
We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
        </p>

        <p className="mb-4">
       All our pages use valid, structured, semantic HTML5. Visual styling is provided by Cascading Style Sheets (CSS), and enhanced user interaction is provided by JavaScript.  
        </p>

     

        

        <h2 className="text-2xl font-bold mt-10 mb-4">Conformance Status</h2>

        <p className="mb-4">
          The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="text-blue-600 underline">
            Web Content Accessibility Guidelines (WCAG) 
          </a>{" "}defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Our website is partially conformant with WCAG 2.1 level AA.
        </p>

        <p className="mb-4">
          Partially conformant means that some parts of the content do not fully conform to the accessibility standard. We are continually working to identify and resolve the parts of our website that are not fully accessible.
        </p>

        <p className="mb-4">
         Many of our webpages use third-party vendor provided components. While we cannot control those components, where possible, we look for vendors that provide content and components that are accessible and user friendly.
        </p>

       <h1 className="text-2xl font-bold mt-10 mb-4">Feedback and contact information</h1>

      <p className="mb-4">
        We welcome your feedback on the accessibility of our website and any suggestions you may have for improvement.
      </p>

      <p className="mb-6">You can contact us via:</p>

      <div className="mb-4">
        <p className="mb-1 font-medium">Phone: <span className="font-normal">+44 20 7333 0033</span></p>
        <p className="font-medium">
          E-mail:{" "}
          <a href="mailto:info@nashsquared.com" className="text-sky-600 hover:underline font-normal">
            info@nashsquared.com
          </a>
        </p>
      </div>

      <p className="mt-6">We try to respond to feedback within 5 business days.</p>
      </section>

     
    </div>
    <Footer/>
    </>
  );
}