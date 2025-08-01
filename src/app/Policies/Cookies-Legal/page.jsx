'use client';

import React from 'react';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
export default function CookiesPage() {
  return (
    <> 
    <Navbar/>
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 px-6 py-12">
      <section className="max-w-4xl mx-auto text-justify">
        <h1 className="text-3xl font-bold mb-6">Cookies & Legal</h1>

        <p className="mb-4">
          This site and its design, text, graphics, the selection and arrangement thereof and software are copyright
          of Nash Squared. The trade marks depicted on this site are the property of Nash Squared and Nash Squared
          retains all right in such trade marks.
        </p>

        <p className="mb-4">
          All rights are reserved except that permission is granted to download the materials contained on this site
          to a single personal computer and to print a hard copy of such materials solely for personal, non-commercial
          use. Any other use of materials on this site, including reproduction, modification, distribution or
          republication, without the prior written permission of Nash Squared, is strictly prohibited.
        </p>

        <p className="mb-4">
          The information provided on this site is free of charge and for general informational purposes only and the
          transmission, downloading or sending of any information or material through or in connection with this site
          does not create any contractual relationship between you and Nash Squared.
        </p>

        <p className="mb-4">
          This site may contain links to third party sites. Those third party sites are beyond the control of Nash
          Squared and you accept that when you leave this site (whether knowingly or not) Nash Squared can no longer
          be responsible in any way or accept any liability whatsoever for any material that you encounter on those
          sites nor for any transactions between you and those sites.
        </p>

        <p className="mb-4">
          Nash Squared uses reasonable care and skill in providing the content on this site but does not represent or
          warrant the accuracy, timeliness, completeness or suitability of the content, or that the site is free of
          risk of viruses or other damage.
        </p>

        <p className="mb-4">
          Nash Squared will not be liable for any claims, losses, including but not limited to direct, indirect,
          special, economic and consequential loss or damage (including but not limited to loss of profits, loss of
          revenue, loss of goodwill or loss of or corruption to data), whether in contract, tort, negligence,
          misrepresentation, breach of statutory duty or otherwise however arising out of or in connection with the
          use of this site.
        </p>

        <p className="mb-4">
          Nothing in this Disclaimer shall exclude or limit the liability of Nash Squared for death or personal injury.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Cookies</h2>

        <p className="mb-4">
          Technologies such as cookies, beacons, tags and scripts are used by us and our affiliates, or analytics or
          service providers. These technologies are used in analyzing trends, administering the site, tracking users’
          movements around the Site and to gather demographic information about our user base as a whole.
        </p>

        <p className="mb-4">
          We may receive reports based on the use of these technologies by these companies on an individual as well as
          aggregated basis.
        </p>

        <p className="mb-4">
          We use cookies, for example, to remember users’ settings (e.g. language preference) and for authentication.
          Users can control the use of cookies at the individual browser level. If you reject cookies, you may still
          use our Site, but your ability to use some features or areas of our Site may be limited.
        </p>

        <p className="mb-4">
          Please read more about how we use cookies{" "}
          <a href="#" className="text-blue-600 underline">
            here
          </a>.
        </p>
      </section>

     
    </div>
    <Footer/>
    </>
  );
}