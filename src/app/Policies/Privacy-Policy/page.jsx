 import Link from "next/link";
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";

export default function PrivacyNotice() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#c5f82a] to-[#00d9a6]">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
                <span className="block">Data Privacy</span>
                <span className="block bg-white bg-clip-text text-transparent">
                  Notice
                </span>
              </h1>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl">
                  <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
                    <p>
                      Nash Squared, including all Nash Squared subsidiary
                      companies together, (which includes Harvey Nash, Flexhuis,
                      Spinks (We Are Spinks), Crimson, Talent-IT, Team4Talent,
                      Talent2Test, Pro-Cured, eMenKa NV), referred to here as
                      'Nash Squared' is a leading global recruitment consultancy
                      and outsourcing company working on an annual basis with
                      thousands of candidates and clients worldwide.
                    </p>

                    <p>
                      This website offers you a platform to upload your CV and
                      other personal data to improve your user experience, and
                      to use functions such as job alerts, CV registration and
                      job applications. You are responsible for the accuracy of
                      the personal data inputted. If you use functions on the
                      website which access data from external sources, such as
                      LinkedIn, please be aware that the website will access
                      your personal data from these sources.
                    </p>

                    <p>
                      Our reputation as a recruiter is reliant on the trust of
                      people we work with, and consequently the effective and
                      professional use of the information you provide us is
                      paramount.
                    </p>

                    <p>
                      Your privacy is important to us, and we are committed to
                      protecting and safeguarding your data privacy rights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
          {/* Overview Section */}
          <div id="overview" className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Overview
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              <p>
                This privacy notice explains what we do with your personal data,
                whether as part of helping you find a job, developing your
                career, providing you with a service that may be of interest, or
                simply as a result of you visiting our website.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium text-blue-800">
                  We respect your right to privacy.
                </p>
              </div>

              <p>
                Our overall aim is to ensure that our collection and use of
                personal information is appropriate to the provision of services
                to you and is in accordance with applicable data protection
                laws.
              </p>
            </div>
          </div>

          {/* Contents Navigation */}
          <div id="contents" className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <Link
                href="#definitions"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  Important definitions in this policy
                </span>
              </Link>
              <Link
                href="#what-we-do"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  What does Nash Squared do?
                </span>
              </Link>
              <Link
                href="#data-sources"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  Where does Nash Squared collect data from?
                </span>
              </Link>
              <Link
                href="#candidate-info"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  What information do we collect on Candidates?
                </span>
              </Link>
              <Link
                href="#client-info"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  What information do we collect on Client contacts?
                </span>
              </Link>
              <Link
                href="#lawful-basis"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  What is our lawful basis for processing your personal data?
                </span>
              </Link>
              <Link
                href="#sharing"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  How do we share your personal information and who do we share
                  it with?
                </span>
              </Link>
              <Link
                href="#international"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  International transfers
                </span>
              </Link>
              <Link
                href="#cookies"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  Personal information, cookies and websites
                </span>
              </Link>
              <Link
                href="#safeguards"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  How we safeguard your personal data
                </span>
              </Link>
              <Link
                href="#retention"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  Data retention
                </span>
              </Link>
              <Link
                href="#rights"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  Your rights, complaints, questions and suggestions
                </span>
              </Link>
              <Link
                href="#marketing"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  Marketing activities
                </span>
              </Link>
              <Link
                href="#profiling"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  Profiling, Anonymous data & Third party sites
                </span>
              </Link>
              <Link
                href="https://www.harveynashusa.com/"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors md:col-span-2"
              >
                <span className="text-gray-700 hover:text-gray-900 font-medium">
                  Harvey Nash Inc.'s CPRA Privacy Policy
                </span>
              </Link>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12 sm:space-y-16">
            {/* Important Definitions Section */}
            <div id="definitions" className="mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Important definitions in this notice
              </h2>
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p>
                    "You" are a candidate, potential candidate, consultant,
                    client contact or contact at any other organisation involved
                    in the introduction and/or supply of a candidate's services,
                    such as a contact at a recruitment process outsourcing
                    company, personal service company or umbrella company.
                  </p>
                </div>

                <p>References in this notice to:</p>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>
                      "hirer" and "client" mean any hiring organisation to which
                      we offer and/or provide temporary and/or permanent
                      recruitment services;
                    </p>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>
                      "client contact" means a responsible owner at a client;
                    </p>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>
                      "candidate" means a potential or actual candidate for a
                      permanent or temporary role;
                    </p>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>
                      "consultant" means a person whose services are supplied
                      via Nash Squared to work on temporary assignments with a
                      hirer;
                    </p>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>
                      "referee and/or emergency contact" means a person whose
                      personal details a candidate provides for the purposes of
                      providing a reference or acting as their emergency
                      contact.
                    </p>
                  </div>
                </div>

                <p>
                  Specifically, this privacy notice provides you with details
                  about the personal information we collect and hold about you,
                  how we use your personal information and your rights regarding
                  your personal information.
                </p>

                <p>
                  It does not cover any use of your personal information by:
                </p>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-3"></div>
                    <p>an actual or potential employer or hirer;</p>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-3"></div>
                    <p>an umbrella company;</p>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-3"></div>
                    <p>
                      or any other organisation involved in the supply of your
                      services via us to a hirer, to whom we may provide your
                      personal information as part of the recruitment process.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-blue-800">
                    That use will be governed by the relevant employer's or
                    hirer's privacy policy.
                  </p>
                </div>
              </div>
            </div>

            {/* What does Nash Squared do Section */}
            <div id="what-we-do" className="mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What does Nash Squared do?
              </h2>
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800">
                    The core of what we do is twofold.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      1. Client Services
                    </h3>
                    <p>
                      Firstly, we work with clients to provide consultancy,
                      outsourcing and recruitment services to help them solve
                      technology, talent, recruitment and other related
                      challenges.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      2. Candidate Services
                    </h3>
                    <p>
                      Secondly, it is to provide services to help candidates
                      develop their careers. We do this through assessing and
                      matching people with potential job opportunities, as well
                      as providing wider services to help them in their careers,
                      such as invitations to networking events and opportunities
                      to take part in research.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Where does Nash Squared collect data from Section */}
            <div id="data-sources" className="mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Where does Nash Squared collect data from?
              </h2>
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>
                  This privacy notice applies to the collection, storage and use
                  of personal information collected by Nash Squared ("we" or
                  "us"):
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>
                      via our website at{" "}
                      <Link
                        href="https://www.nashsquared.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium"
                      >
                        www.nashsquared.com
                      </Link>{" "}
                      or any other website operated by us (the "Site");
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>
                      or as a result of you responding to an advertisement
                      posted by us on a job board, online CV library or via
                      social media;
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>
                      or as a result of us matching your CV, as uploaded by you
                      onto a job board, online CV library or a social media
                      site, to a vacancy we are seeking to fill for one of our
                      clients;
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>
                      or as a result of personal recommendations; or from
                      company websites;
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>or from your business card;</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>
                      or in the course of us providing recruitment, resourcing,
                      outsourcing or consultancy services to you ("Services")
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What information do we collect on Candidates Section */}
            <div id="candidate-info" className="mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What information do we collect on Candidates?
              </h2>
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p>
                    <span className="font-semibold text-gray-800">
                      Candidates:
                    </span>{" "}
                    <em className="text-gray-700">
                      the personal information we collect about you where "you"
                      are a candidate or placed consultant.
                    </em>
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-blue-800">
                    Nash Squared aims to collect the minimum data it needs to
                    perform its role.
                  </p>
                </div>

                <p>
                  Typically, this is name, address, job title and contact
                  details. In addition, if you are a candidate being considered
                  for a role it may also include your CV / resume as well as
                  other details about your skills and experience.
                </p>

                <p>
                  We may also collect other personally identifiable data, for
                  instance we may be engaged in equal opportunity monitoring or
                  need information to complete a contract for you or our client.
                </p>

                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="mb-4">
                    This data can include age, identity card number, passport
                    number, driver license number, address, email address, user
                    ID and passwords, gender, date of birth, marital status,
                    occupation, income range, bank account details, financial
                    information, contact information such as telephone, mobile,
                    nationality, personal website or social media links or other
                    data which may be required by local regulations.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Referees and emergency contacts:
                  </h3>
                  <p className="text-gray-700">
                    we collect basic contact details (such as name, title,
                    address, email and tel) so that we can contact you for a
                    reference or as an emergency contact for one of our
                    candidates/or contractors.
                  </p>
                </div>
              </div>
            </div>

            {/* What information do we collect on Client contacts Section */}
            <div id="client-info" className="mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What information do we collect on Client contacts?
              </h2>
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p>
                    <span className="font-semibold text-gray-800">
                      Client contacts:
                    </span>{" "}
                    <em className="text-gray-700">
                      the personal information we collect about you where "you"
                      are a contact at one of our clients or at an MSP, umbrella
                      company or personal service company involved in the supply
                      of a person's services to a hirer.
                    </em>
                  </p>
                </div>

                <p>
                  We need to collect information about you as an essential part
                  of providing our Services.
                </p>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    We may collect personal information about you when:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                      <p>
                        we contact you with a view to providing Services to you;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                      <p>
                        or you email us expressing an interest in working with
                        us;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                      <p>
                        you provide us with your business card or other
                        information provided to us, given to our employees at
                        sales and marketing events;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                      <p>
                        you post information or advertisements on job boards or
                        social media websites;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                      <p>
                        we provide Services to you as an actual or a potential
                        hirer of your services;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                      <p>
                        or we complete contractual documentation relevant to the
                        Services, we will usually collect the following
                        information from or about you: your name; your postal
                        address; your phone and e-mail details; details of your
                        role, title and responsibilities within your
                        organisation;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                      <p>
                        where "you" are a client: any opinion or feedback you
                        share with us regarding a candidate or consultant;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                      <p>
                        details of any queries you raise with us regarding the
                        Services;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                      <p>
                        details of any recruitment and/or resourcing
                        requirements or plans you share with us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lawful Basis Section */}
            <div id="lawful-basis" className="mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What is our lawful basis for processing your personal data?
              </h2>
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>
                  We use the data we gather to perform a number of tasks,
                  including:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>
                      placement of a candidate into a particular employment role
                      as defined by our clients;
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>
                      or the provision of resourcing, outsourcing or consultancy
                      maintaining our records of our candidates, clients and
                      contacts;
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>
                      conducting marketing, profiling and business development
                      activities as well as market research and statistical
                      analysis regarding our products and/or services;
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                    <p>
                      complying with any legal or regulatory requirements and to
                      make the necessary disclosure under the requirements of
                      any applicable law, regulation, direction, court order,
                      guideline, circular or code which are applicable to us for
                      the prevention of crime.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Reporting requirements to clients where we offer Managed
                    Services (RPO / MSP)
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-blue-700 mb-2">
                        Client contacts:
                      </p>
                      <p>
                        We use the information collected from clients to ensure
                        that we provide business services to you. This will
                        involve identifying candidates that will meet your
                        requirements or providing other business services from
                        our portfolio.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-blue-700 mb-2">
                        Suppliers:
                      </p>
                      <p>
                        we use the data collected to ensure the business
                        arrangements between us run smoothly.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-blue-700 mb-2">
                        Referees and emergency contacts:
                      </p>
                      <p>
                        we use the data collected to contact you for a reference
                        or to contact you as a candidate's emergency contact in
                        the event of an accident or other emergency.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  We consider that it is necessary for our legitimate interests
                  as a recruitment business to process your personal data.
                </p>

                <p>
                  At different stages in the recruitment processes we also have
                  other lawful grounds for processing your data such as
                  compliance with our legal obligations and where it is
                  necessary for the performance of contracts related to the
                  recruitment process.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="mb-4">
                    We think you will have an expectation that if you are
                    looking for employment or have posted your CV or other
                    professional information on a job board or professional
                    networking site, that you are happy for us to collect and
                    use your personal data to provide our recruitment services
                    to you and to share that information with prospective
                    employers.
                  </p>
                </div>

                <p className="mb-4">
                  During the recruitment process the client may want additional
                  information (such as the results from psychometric evaluations
                  or skills tests) or to confirm your references, qualifications
                  and criminal record, where appropriate and in accordance with
                  local laws.
                </p>

                <p className="mb-4">
                  We may also need to use your personal information for internal
                  administrative purposes, such as contract administration,
                  payroll and invoicing.
                </p>

                <p className="mb-4">
                  We also have our own obligations under law, and we may be
                  required to share your data in connection with those legal
                  requirements. Where we are required by law to obtain your
                  consent to the processing of your personal data, we will
                  obtain it.
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Client contacts and other third parties involved in the
                    supply of resourcing services
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    (e.g. umbrella companies and personal service companies)
                  </p>

                  <p className="mb-4">
                    We collect, store and use your name and contact details for
                    our legitimate interests, so that we can: send you the
                    details of candidates and consultants and contact you about
                    our Services; and maintain our business relationship with
                    you.
                  </p>

                  <p className="mb-4">
                    This allows you to be contacted to receive and administer
                    any Services which you or your organisation has requested.
                  </p>

                  <p className="mb-4">
                    The exchange of personal data of our candidates and client
                    contacts is an essential part of what we do as a recruitment
                    business and, as such, it is in our legitimate interests to
                    process your data for such purpose.
                  </p>

                  <p className="mb-4">
                    In the case of contacts at umbrella companies and personal
                    service companies this allows you to be contacted to
                    receive, on behalf of your employer, details of current and
                    future assignments, related timesheet data and payment
                    details. We do not believe that this storage and use of your
                    personal information will unduly prejudice your rights or
                    freedoms.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    All users of the Site and our Services
                  </h3>

                  <p className="mb-4">
                    We collect, store and use your personal information for the
                    following purposes: to make the Site available to you; and
                    to provide any Services that you request.
                  </p>

                  <p className="mb-4">
                    Sometimes, our use of your personal information is for
                    purposes which are ancillary to the provision of the Site
                    and then Services, or which are desirable to make them to
                    operate more effectively.
                  </p>

                  <p className="mb-4">
                    In those circumstances, we believe we have a legitimate
                    interest in handling your personal information, and do not
                    believe that this storage and use of your personal
                    information will unduly prejudice your rights or freedoms.
                  </p>
                </div>
              </div>
            </div>

            {/* Sharing Information Section */}
            <div id="sharing" className="mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                How do we share your personal information and who do we share it
                with?
              </h2>
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>
                  Your personal data provided to us is processed by Nash
                  Squared.
                </p>

                <p>We will ensure that:</p>

                <div className="space-y-4">
                  <p>
                    - access to your personal data is restricted to staff who
                    are required to process such data as part of their job;
                  </p>
                  <p>
                    - only necessary information is released to the relevant
                    employees;
                  </p>
                  <p>
                    - we seek your consent before sharing your details with any
                    prospective employer or user of your services.
                  </p>
                </div>

                <p>
                  <strong>Referees:</strong> unless you specify otherwise, we
                  may share your information with any of our group companies and
                  client(s) in relation to whose vacancy your reference was
                  given.
                </p>

                <p>
                  We will disclose information under the following
                  circumstances:
                </p>

                <p>
                  <strong>Service and Site usage information:</strong> When we
                  share anonymous information generated by our Services with our
                  clients.
                </p>

                <p>
                  <strong>Third-party service providers:</strong> When we share
                  information with third-party service companies for them to
                  facilitate and support us in the provision of the Services.
                </p>

                <p>This includes:</p>

                <div className="space-y-2 ml-4">
                  <p>
                    <strong>- IT support service providers;</strong>
                  </p>
                  <p>
                    - providers of credit reference, vetting and screening
                    services;
                  </p>
                  <p>- payment processors and software providers;</p>
                </div>

                <p>
                  These organisations are appointed by Nash Squared as data
                  processors and authorised to use your personal information
                  only as necessary to provide the relevant services to us.
                  These organisations are required to process such information
                  based on our instructions and in accordance with this privacy
                  notice. They do not have any independent right to share this
                  information.
                </p>

                <p>
                  <strong>Group companies:</strong> We provide your personal
                  information to our subsidiaries or affiliated companies for
                  the purpose of processing personal information on our behalf
                  to provide the Site and the Services. These parties are
                  required to process such information based on our instructions
                  and in accordance with this privacy notice. They do not have
                  any independent right to share this information.
                </p>

                <p>
                  <strong>Compliance with laws and legal proceedings:</strong>{" "}
                  When we respond to court orders, or legal process, or to
                  establish or exercise our legal rights or defend against legal
                  claims. When we believe it is necessary to share information
                  in order to investigate, prevent or take actions against
                  illegal activities, suspected fraud, situations involving
                  potential threats to the physical safety of any person,
                  violations of our terms of use, or as otherwise required by
                  law.
                </p>

                <p>
                  <strong>Merger or acquisition:</strong> When we need to
                  transfer information about you if we are acquired by or merged
                  with another company. If we are involved in a merger,
                  acquisition, or sale of all or a portion of its assets, you
                  will be notified by email and/or a prominent notice on our
                  Site of any change in ownership or uses of your personal
                  information, as well as any choices you may have regarding
                  your personal information.
                </p>

                <p>
                  <strong>Recruitment and resourcing services:</strong> When we
                  are using your personal information in the context of our
                  recruitment and resourcing services, then we may share your
                  personal information with clients where we believe that you
                  may be appropriate for a particular role or vacancy with that
                  client.
                </p>

                <p>
                  <strong>
                    Umbrella companies and personal service companies:
                  </strong>{" "}
                  When you inform us that you are supplying or intend to supply
                  your services via Nash Squared to a client through an umbrella
                  company or personal service company.
                </p>

                <p>
                  <strong>
                    Recruitment Process Outsourcing and Managed Service
                    Providers:
                  </strong>{" "}
                  In certain cases, there may be an organisation such as a
                  managed service provider acting as a gateway for the supply of
                  Services made via Nash Squared to the hirer.
                </p>

                <p>
                  Where this is the case, we will share your information with
                  such organisations to the extent that it is necessary for the
                  purposes of the supply.
                </p>

                <p>
                  Where personal information is shared with clients, hirers,
                  umbrella companies, personal services companies or managed
                  service providers in the circumstances described above, then
                  those organisations will handle your personal information in
                  line with their own privacy policies.
                </p>
              </div>
            </div>

            {/* International Transfers Section */}
            <div id="international" className="mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                International transfers
              </h2>
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>
                  We want to make sure that your data is stored and transferred
                  in a way which is secure. We will only transfer data outside
                  of the UK or European Economic Area where the recipient is
                  compliant with the data protection legislation and the means
                  of transfer provides appropriate safeguards.
                </p>

                <p>
                  These will include UK or EU approved standard contractual
                  clauses according to Article 46(2)(c) GDPR, or where the
                  country concerned has been found adequate by the UK Secretary
                  of State or European Commission (as applicable) in respect to
                  the levels of data protection, according to Article 45 GDPR.
                </p>

                <p>
                  Please note that where a derogation to the above applies under
                  Article 49 GDPR, you will be informed of this prior to the
                  transfer taking place and will have the opportunity to object
                  to that transfer.
                </p>

                <p>
                  Nash Squared is a global company and to effectively provide
                  the best service to our clients we may utilise a business
                  processing outsourcing (BPO) service in both India and Vietnam
                  to help identify candidates for potential roles.
                </p>

                <p>
                  This service helps us to respond more quickly to client
                  services by identifying potential candidates and sending this
                  information back to the responsible consultant. The BPO
                  service we use is provided by Harvey Nash India and Harvey
                  Nash Vietnam, both of which are subsidiaries of the Nash
                  Squared.
                </p>

                <p>
                  A data transfer risk assessment has been carried out, and both
                  data processing agreements and standard contractual clauses
                  are in place to govern the secure processing of UK and EU
                  personal data in these instances.
                </p>

                <p>
                  We may send your information between Nash Squared entities
                  which may exist outside of Europe, to overseas clients or to
                  clients within your country who may in turn transfer your data
                  internationally. Appropriate safeguards and legal requirements
                  will always be in place to govern the secure processing of
                  your personal data.
                </p>

                <p>
                  The data may also be stored on cloud-based storage for parts
                  of our overall business process. Please be aware that
                  countries which are outside the European Economic Area may not
                  offer the same level of legal protection for your personal
                  information as under EU/UK law, although any collection,
                  storage and use
                </p>
              </div>
            </div>

            {/* Cookies and Websites Section */}
            <div id="cookies" className="mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Personal information, cookies and websites
              </h2>
              <div className="space-y-8 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Our website may offer you the opportunity to pass your
                  personal information to us in relation to a particular role
                  which is of interest to you. This information may be routed
                  through one of our 3rd party suppliers before it is delivered
                  electronically to us.
                </p>

                <p>
                  All our 3rd party suppliers have been vetted to ensure that
                  they will meet our own privacy and security standards in the
                  collection and processing of your personal information.
                </p>

                <p>
                  Our website may also link or direct you to other websites or
                  external content which are not within our control. Links to
                  other websites may be provided for your convenience and
                  information.
                </p>

                <p>
                  While we will use our best endeavour to ensure that we link or
                  direct you only to websites that share our privacy and
                  security standards, we are not in the position to guarantee
                  the same and we will not be responsible for the protection and
                  privacy of any personal data which you provide on those
                  websites.
                </p>

                <p>
                  These sites have their own privacy notice in place, and we
                  recommend you review these if you visit any linked website.
                  You should therefore exercise caution including reviewing the
                  privacy policy of those websites before disclosing any
                  personal data.
                </p>

                <p>
                  Technologies such as cookies, beacons, tags and scripts are
                  used by us and our affiliates, or analytics or service
                  providers.
                </p>

                <p>
                  These technologies are used in analysing trends, administering
                  the Site, tracking users' movements around the Site and to
                  gather demographic information about our user base as a whole.
                  We may receive reports based on the use of these technologies
                  by these companies on an individual as well as aggregated
                  basis.
                </p>

                <p>
                  We use cookies, for example, to remember users' settings (e.g.
                  language preference) and for authentication. Users can control
                  the use of cookies at the individual browser level. If you
                  reject cookies, you may still use our Site, but your ability
                  to use some features or areas of our Site may be limited. See
                  Appendix 4 for further information on cookie usage.
                </p>
              </div>
            </div>

            <div id="safeguards" className="mb-12 sm:mb-16 max-w-4xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                How we safeguard your personal data
              </h2>

              <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p className="mb-8">
                  Nash Squared is passionate about protecting your information.
                  To this end we have put in place appropriate measures that are
                  designed to prevent unauthorised access to and misuse of your
                  personal data.
                </p>

                <p className="mb-8">
                  These include measures to deal with any suspected data breach.
                  If you suspect any misuse or loss of or unauthorised access to
                  your personal information, please let us know immediately by
                  emailing{" "}
                  <a
                    href="mailto:DPO@nashsquared.com"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    DPO@nashsquared.com
                  </a>
                  .
                </p>

                <p className="mb-8">
                  Your information is held on servers hosted by us or our
                  Internet Services Provider. The transmission of information
                  via the internet is not completely secure.
                </p>

                <p>
                  Although we will do our best to protect your personal data, we
                  cannot guarantee the security of your data transmitted to our
                  site; any transmission is at your own risk.
                </p>
              </div>
            </div>

            <div id="retention" className="mb-12 sm:mb-16 max-w-4xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Data retention
              </h2>

              <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p className="mb-8">
                  The period for which data is retained in each circumstance is
                  determined by the balanced interests of the company and the
                  data subjects concerned. If personal data needs to be retained
                  to fulfil the documented business interests of the company,
                  and that interest would align with the interests of the data
                  subject, then we will continue to retain for a reasonable
                  period.
                </p>

                <p className="mb-8">
                  However, we do not keep data for any longer than is necessary.
                  For most people where we have limited contact it will be for a
                  maximum of <span className="font-bold">two years</span> from
                  the date of last contact with us. Where we have engaged with
                  you more extensively, for instance we have worked with you as
                  client, or interviewed / placed you as a candidate, we may
                  retain data longer.
                </p>

                <p className="mb-8">
                  We will delete personal data at the end of the legal retention
                  period except where we need to keep any personal information
                  to comply with our contractual (i.e. reporting requirements)
                  or other legal obligations, resolve disputes, or enforce our
                  agreements.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 mt-12">
                  Emails
                </h3>

                <p className="mb-8">
                  We have legal obligations to retain emails as we operate
                  across a number of jurisdictions including the United States.
                </p>

                <p className="mb-8">
                  We use a Mimecast archiving system to archive emails 13 months
                  from the date sent or received, for up to 10 years.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 mt-12">
                  Psychometric Testing Candidates
                </h3>

                <p className="mb-8">
                  If you have signed up to carry out a test as part of a
                  recruitment process, our staff may provide you with additional
                  information where we have clients who require the retention of
                  personal data for longer periods for management intelligence
                  purposes. This period can be up to 15 years, depending on the
                  specific contractual obligations we have. We will ask for your
                  consent to retain this information and you will have the
                  opportunity to withdraw that consent easily at any time. This
                  will be explained in detail to you at the point the data is
                  first obtained.
                </p>

                <p>
                  For more information on our data retention policy please{" "}
                  <a
                    href="mailto:DPO@nashsquared.com"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    contact DPO@nashsquared.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div id="rights" className="mb-12 sm:mb-16 max-w-4xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Your rights, complaints, questions and suggestions
              </h2>

              <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p className="mb-8">
                  You have certain rights in relation to your personal
                  information. If you would like further information in relation
                  to these or would like to exercise any of them, please contact
                  us via email at{" "}
                  <a
                    href="mailto:DPO@nashsquared.com"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    DPO@nashsquared.com
                  </a>{" "}
                  at any time.
                </p>

                <p className="mb-8">See Appendix 5 for further information.</p>

                <p className="mb-8">
                  Nash Squared tries to meet the highest standards when
                  collecting and using personal information. We take any
                  complaints we receive about this very seriously. We encourage
                  people to bring it to our attention if they think that our
                  collection or use of information is unfair, misleading or
                  inappropriate. If you wish to complain about our policies or
                  procedures, please contact our Data Protection Officer via{" "}
                  <a
                    href="mailto:DPO@nashsquared.com"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    DPO@nashsquared.com
                  </a>
                  .
                </p>

                <p className="mb-8">
                  You can also seek a remedy through local courts if you believe
                  your rights have been affected.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 mt-12">
                  EU Supervisory Authorities
                </h3>

                <p className="mb-8">
                  You may make a complaint to any supervisory authority for data
                  protection matters in the EU. Nash Squared is registered as a
                  data controller with the Information Commissioner's Office in
                  the UK, but also operates across the EU where other
                  supervisory authorities operate.In preparation for the UK
                  exiting the EU, we have designated a legal entity as a
                  representative for data protection matters in the EU. This
                  entity is Harvey Nash BV, (Netherlands).
                </p>

                <p>
                  To contact this entity about your rights or any concerns you
                  have about processing being carried out in the EU, please
                  email{" "}
                  <a
                    href="mailto:EU-DPO@harveynash.com"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    EU-DPO@harveynash.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div id="marketing" className="mb-12 sm:mb-16 max-w-4xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Marketing activities
              </h2>

              <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p className="mb-8">
                  Where we have previously engaged with you (for example where
                  you have submitted an application or CV to us) or where you
                  have posted your details on a job board, we may have obtained
                  your email address and retained it according to our legitimate
                  business interests as explained above.
                </p>

                <p className="mb-8">
                  Having obtained your email address during an aforementioned
                  recent course of business, we may periodically send you
                  related information that we think you will find interesting or
                  to ask for your expertise in completing a survey.
                </p>

                <p className="mb-8">
                  We may also send you relevant information to market our full
                  range of services, or send you details of networking and
                  client events and information about the industry sectors we
                  think may be of interest to you.
                </p>

                <p className="mb-8">
                  If you do not wish to receive these communications you can
                  unsubscribe by clicking on the relevant link on marketing
                  emails, or contact{" "}
                  <a
                    href="mailto:dpo@nashsquared.com"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    dpo@nashsquared.com
                  </a>{" "}
                  requesting to be opted-out of receiving marketing
                  communications.
                </p>

                <p>
                  Not withstanding the above, your rights as a data subject
                  under the GDPR provide that you can ask for all your personal
                  data to be removed (as explained above) at any time.
                </p>
              </div>
            </div>

            {/* Profiling, Anonymous data & Third-party sites */}
            <div id="profiling" className="mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Profiling, Anonymous data & Third-party sites
              </h2>
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                {/* Automated Decision-Making */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Automated Decision-Making:
                  </h3>
                  <p>
                    <strong>Nash Squared</strong> does not utilise any form of
                    automated profiling currently. All our recruitment
                    activities involve human decision-making during the process.
                    This may change in the future if we implement automated
                    technologies or machine learning, but we will only do so
                    where appropriate and in accordance with local laws and
                    regulations. Any changes to this notice will be notified as
                    set out below.
                  </p>
                </div>

                {/* Profiling */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Profiling:
                  </h3>
                  <p>
                    <strong>Nash Squared</strong> utilises psychometric testing
                    providers to conduct tests for our clients. Candidates sign
                    into the testing provider and carry out this test.
                    Specialists within Nash Squared will review the results of
                    the tests and conduct what may be described in the GDPR as
                    profiling on the personal data. You have the right to object
                    to profiling and can do this by refusing or withdrawing your
                    consent to processing in the testing process at any time.
                  </p>
                </div>

                {/* Anonymous data */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Anonymous data:
                  </h3>
                  <p>
                    We collect anonymised details about visitors to our website
                    for the purposes of aggregate statistics or reporting
                    purposes. However, no single individual will be identifiable
                    from the anonymised details we collect for these purposes.
                  </p>
                </div>

                {/* Third party sites */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Third party sites:
                  </h3>
                  <p>
                    This website contains links to other websites operated by
                    third parties. Please note that this privacy notice applies
                    only to the personal information that we collect through the
                    Site or the Services, and we cannot be responsible for
                    personal information that third parties may collect, store
                    and use through their website. You should always read the
                    privacy policy of each website you visit carefully.
                  </p>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Changes to this Privacy Notice
                </h2>
                <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-lg font-semibold text-blue-800 mb-4">
                      This privacy notice was updated in January 2020.
                    </p>
                    <p>
                      We will publish changes to this privacy notice from time
                      to time. If significant changes are made to our processing
                      activities, we will take reasonable measures to notify
                      data subjects accordingly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appendix */}
            <div id="appendix" className="mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Appendix
              </h2>
              <div className="space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                {/* Appendix 1 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Appendix 1
                  </h3>
                  <p className="font-semibold mb-6">
                    We may collect personal data when:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        you access and browse the Site (including when you
                        submit personal information to us through data entry
                        fields on the Site);
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        or you respond to an advert posted by us whether via a
                        job board, LinkedIn or other social networking site;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        or we download details uploaded by you onto a job board,
                        LinkedIn or other social networking site in relation to
                        a vacancy we are seeking to fill for one of our clients;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        or we download details uploaded by you onto a job board,
                        LinkedIn or other social networking site in connection
                        with our internal market research;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>or you contact us by phone, email or otherwise;</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        or we provide Services to you or to an actual or a
                        potential hirer of your services;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        or we contact you with a view to providing Services to
                        you;
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-white rounded-lg p-6">
                    <p className="mb-4">
                      or we provide on-boarding services to a hirer of your
                      services, we may collect the following information from or
                      about you:
                    </p>
                    <p className="text-sm leading-relaxed">
                      your name; your postal address; your phone and e-mail
                      details; your bank details a copy of your passport details
                      including your passport photograph; your current and
                      previous employment/work details, including job title and
                      employer; recruitment-specific details such as any
                      professional certifications, education and qualifications,
                      skills, career history, salary range, right to work
                      status, citizenship, referee details and any other
                      information relevant or required by law to enable us to
                      provide the Services;
                    </p>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        any other information which you include in your CV or a
                        completed application form;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        any information which has been published or made
                        available on a social media profile or job board
                        (whether by you or a third party), or in any news media;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        details of your umbrella company or personal service
                        company;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        the contract for services we hold with your umbrella
                        company or personal service company relating to the work
                        you do or will do for our client, including timesheet
                        data and charge rates relating to the work you perform
                        under that contract;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        details of your referees and emergency contacts
                        references from third parties such as previous employers
                        and nominated referees;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        the results of pre-employment screening or vetting
                        checks which we are asked or required to undertake in
                        relation to you (including the results of any Disclosure
                        and Barring checks and any information you provide
                        relating to current and/or spent criminal convictions
                        carried out on behalf of the hirer during the on
                        boarding process);
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        any e mail communications, including attachments, which
                        you send to us the results of right to work checks.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 rounded-lg p-4">
                    <p className="text-base">
                      You can update your CV or personal data at any time by
                      forwarding a copy to{" "}
                      <a
                        href="mailto:info@nashsquared.com"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        info@nashsquared.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Appendix 2 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Appendix 2
                  </h3>
                  <p className="font-semibold mb-6">
                    We collect, store and use information that we obtain in
                    relation to you for our legitimate interests:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        so that we can contact you (via email, SMS or phone)
                        about opportunities and assignments that we believe you
                        may be interested in;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        to help us to provide suitable candidates and
                        consultants for our clients who engage us to assist them
                        fulfil their recruitment and resourcing requirements;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        to provide a channel through which you may submit your
                        CV for general applications, to apply for specific jobs
                        or to subscribe to our job alerts;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        to match your details with vacancies, to assist us in
                        finding a position that is most suitable for you and to
                        send your information to clients for potential jobs.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-white rounded-lg p-6">
                    <p className="font-medium text-blue-800 mb-3">
                      Please note that we will always obtain verbal or written
                      consent before presenting your personal details to a
                      client.
                    </p>

                    <div className="space-y-4 mt-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          to enter into contracts which are necessary for your
                          service to be supplied or made available to a hirer;
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          to provide recruitment-related support; to carry out
                          market research for our internal use;
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          to develop an industry-relevant database of candidates
                          and clients to help meet our clients' resourcing
                          requirements and connect candidates with work
                          opportunities; for internal record keeping purposes;
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          to carry out services that we, you or our client have
                          requested including work-related references,
                          qualifications and criminal references checking
                          services, verification of the details you have
                          provided from third party sources, psychometric
                          evaluations or skills tests.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-gray-50 rounded-lg p-6">
                    <p className="mb-4">
                      This storage and use of your personal information allows
                      you to be contacted about roles which may be of interest
                      to you, now or in the future, and we do not believe that
                      this storage and use will unduly prejudice your rights or
                      freedoms.
                    </p>

                    <p className="mb-4">
                      We will store and use your personal information in order
                      to comply with relevant legal obligations to which Nash
                      Squared is subject, including carrying out:
                    </p>

                    <div className="space-y-3 mt-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          verification of your identity to comply with The
                          Conduct of Employment Agencies and Employment
                          Businesses Regulations 2003;
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          right to work checks to comply with relevant
                          immigration legislation; In other, relatively limited
                          circumstances, we will carry out further relevant
                          background checks as may be requested by our client.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-50 rounded-lg p-6">
                    <p className="mb-4">
                      In these circumstances we will be acting on behalf of our
                      client and the handling of your personal data will be
                      governed by the client's privacy policy.
                    </p>

                    <p className="mb-4">
                      Where you are successful in securing temporary assignment
                      work with one of our clients we will store and use your
                      personal information for the purposes of completing and
                      administering contracts with your chosen personal service
                      company or umbrella company and for processing payment to
                      such company in respect of services you have performed for
                      our client.
                    </p>

                    <p className="mb-4">
                      Such processing will be for our legitimate interests so
                      that we can provide Services to you and our client.
                    </p>

                    <p className="mb-4">
                      We do not believe that this storage and use of your
                      personal information will unduly prejudice your rights or
                      freedoms. Such processing will also be necessary for the
                      performance of a contract to which you are party (i.e.
                      your contract with the umbrella company or your personal
                      service company relating to the supply of assignment
                      services) and/or in order to take steps prior to you
                      entering into such contract.
                    </p>

                    <p>
                      If our client requires us to collect, store and use your
                      health data and/or any Disclosure and Barring Checks we
                      will, on our client's behalf, seek your consent to
                      processing such data.
                    </p>
                  </div>

                  <div className="mt-4 bg-red-50 rounded-lg p-4">
                    <p className="text-red-700">
                      You can withdraw your consent at any stage, but this may
                      prevent us from being able to deliver our recruitment
                      services to you.
                    </p>
                  </div>
                </div>

                {/* Appendix 3 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Appendix 3
                  </h3>
                  <p className="font-semibold mb-4">
                    The relevant circumstances are:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>detecting and preventing fraud;</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        keeping our Site, apps, products and IT systems secure;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        ensuring that our own processes, procedures and systems
                        are as efficient as possible; analysing and enhancing
                        the information that we collect;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        determining the effectiveness of our promotional
                        campaigns and advertising; and contacting you with
                        products and services which we think may interest you.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-white rounded-lg p-6">
                    <p className="mb-4">
                      In some, relatively limited, circumstances we need to
                      handle your personal information in a certain way to be
                      able to comply with our legal obligations.
                    </p>

                    <p className="font-medium mb-4">For example, if we:</p>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        are requested to disclose your personal information to
                        regulatory bodies;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        - need to demonstrate our compliance with applicable
                        law;
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        - are subject to any enquiry from the Employment
                        Agencies Standards Inspectorate or HMRC.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Appendix 4A */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Appendix 4A
                  </h3>

                  <div className="space-y-6">
                    <p>
                      Cookies (small text files that store information on your
                      hard drive) may be used in the processing of your personal
                      data.
                    </p>

                    <p>
                      A copy of this text file is sent to your computer and/or
                      device whenever it communicates with our server. Cookies
                      help us to understand which sections of our websites are
                      frequently visited. With this information we can adapt our
                      website to suit your demands and provide you with a more
                      customised and personalised user experience.
                    </p>

                    <div className="bg-white rounded-lg p-6">
                      <p className="mb-4">
                        We may collect the following information during your
                        visit to our website and/or the fully qualified domain
                        name from which you accessed our site, or alternatively,
                        your IP address:
                      </p>
                      <p>
                        the date and time you access each page of our website
                        the URL of any web page from which you accessed our site
                        (the referrer) the web browser that you are using and
                        the pages you accessed.
                      </p>
                    </div>

                    <p>
                      Some webpages may require you to provide a limited amount
                      of personal information in order to enjoy certain services
                      on a website (system login credentials, email addresses
                      and contact information). This personal information will
                      only be used for its intended purpose, i.e. to respond to
                      your message or deliver the requested services.
                    </p>

                    <p>
                      You may configure your browser to accept all cookies,
                      reject all cookies, or notify you when a cookie is sent.
                    </p>
                  </div>
                </div>

                {/* Appendix 5 */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Appendix 5
                  </h3>

                  <div className="space-y-6">
                    <p className="font-semibold">
                      You have the right to request that we:
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          provide access to any personal information we hold
                          about you;
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          update any of your personal information which is out
                          of date or incorrect; delete any personal information
                          which we are holding about you;
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          restrict the way that we process your personal
                          information;
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          prevent the processing of your personal information
                          for direct-marketing purposes;
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          provide your personal information to a third-party
                          provider of services;
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          provide you with a copy of any personal information
                          which we hold about you;
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          or consider any valid objections which you have to our
                          use of your personal information: and/or Do not
                          conduct profiling on your personal data, if you have
                          consented to undergoing testing with our third-party
                          providers, by refusing or withdrawing your consent at
                          any time.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6">
                      <p className="mb-4">
                        We will consider all such requests and provide our
                        response within a reasonable period (and in any event
                        within any time period required by applicable law).
                      </p>

                      <p className="mb-4">
                        Please note, however, that certain personal information
                        may be exempt from such requests in certain
                        circumstances.
                      </p>

                      <p className="mb-4">
                        If an exception applies, we will tell you this when
                        responding to your request. We may request you provide
                        us with information necessary to confirm your identity
                        before responding to any request you make. If you have
                        made a request for erasure of your personal data
                        records, we will usually retain a copy of your given
                        email address on a 'do not contact' list to comply with
                        our obligations under the GDPR.
                      </p>

                      <p className="mb-4">
                        For more information, please contact the Data Protection
                        Officer.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <p>
                        You may request to unsubscribe from job alerts and
                        marketing material at any time. If you wish to contact
                        us with respect to the above matters, please email us at{" "}
                        <a
                          href="mailto:DPO@nashsquared.com"
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          DPO@nashsquared.com
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
