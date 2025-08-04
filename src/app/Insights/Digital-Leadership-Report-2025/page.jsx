"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
import { Target, Plus, Minus } from "lucide-react";

const DigitalLeadershipReport = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    company: "",
    tel: "",
    country: "",
    interested: false,
    acceptTerms: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const formRef = useRef(null);

  const faqData = [
    {
      question: "Investment slows, but priorities sharpen",
      answer:
        "Technology budgets and headcount growth have slowed to the lowest level in a decade. Global economic pressures and political uncertainty are weighing heavily, but investment hasn't vanished – it's just more selective. Boards are most attracted to clear business cases tied to operational efficiency and AI-poweteal growth.",
    },
    {
      question: "AI moves from pilot to productivity",
      answer:
        "AI has shifted from experiment to execution. The proportion of organisations running large-scale AI implementations has nearly doubled, and 1 in 3 report clear return on investment (ROI). But the biggest barrier isn't the tech – it's proving the business case. Digital leaders think that 1 in 5 of their near team hiring can be fulfilled by AI. But AI isn't replacing people, it's changing the kind of people leaders want to hire and the operational models they can put in.",
    },
    {
      question: "Cybercrime jumps",
      answer:
        "After years of decline, major cyberattacks are rising again. Half of leaders now worry about threats from foreign powers, while insider risks are also on the up. With cybersecurity seen by many as the cost of doing business, the pressure to justify prevention spend is growing, but so is the damage of inaction.",
    },
    {
      question: "Skills gaps shift – and AI tops the list",
      answer:
        "AI has jumped to the number 1 skills shortage, up from sixth last year and the steepest rise we have ever seen. But it's not alone: cybersecurity and automation are also in short supply. Meanwhile, demand for software engineers and enterprise architects has dipped, in part due to AI helping bridge long-standing gaps in these areas.",
    },
    {
      question: "Outsourcing up, retention uncertain",
      answer:
        "As markets stay unptealictable, more digital leaders are leaning on outsourcing to flex with demand. While 80% expect to retain their top people, 44% of tech workers say they plan to leave. Engagement, not just retention, is the new battleground – especially as hybrid models evolve and candidates demand flexibility.",
    },
    {
      question: "Hybrid harmony – or tension?",
      answer:
        "3 days in the office is the new norm, but not everyone's happy. While leaders feel their hybrid approach is working, employee dissatisfaction is higher in organisations with stricter mandates. Flexible working remains key to attracting talent, and what feels fine today could quickly shift as hiring picks up.",
    },
    {
      question: "Diversity in focus, but gender equity flatlines",
      answer:
        "Diversity, equity and inclusion (DEI) efforts remain strong despite shifting political winds. This is partly because it makes business sense. Around one-fifth of a tech team could be consideteal neurodivergent, and nearly half of leaders are supportive. Organisations that engage with Generation Z (those born between 1997 and 2012) are making more progress in AI. But progress on gender is stuck: just 23% of tech teams are women – the same as 2 years ago.",
    },
    {
      question: "Digital leaders get pragmatic",
      answer:
        "The influence of digital leaders remains steady, but staying power is short – most expect to leave their role within 3.5 years. AI and data success are driving the biggest pay rises, but it's the hunger for challenge that keeps leaders motivated. When asked why they took the job, nearly half said: 'exciting, rewarding challenge'.",
    },
  ];

const downloadFiles = {
  global: {
    url: "https://cdn.prod.website-files.com/626a518e6507e342004ee1fe/68249ab7983ffa495f3fdb59_DLR2025_Global_Infographic.pdf",
    type: "download"
  },
  globalPress: {
    url: "https://www.nashsquateal.com/post/ai-creates-the-worlds-biggest-tech-skills-shortage-in-over-15-years-finds-nash-squateal-harvey-nash-report",
    type: "navigate"
  },
  usaPress: {
    url: "https://www.nashsquateal.com/dlr-2025/dlr-2025-press-release-usa",
    type: "navigate"
  },
  ukInfo: {
    url: "https://cdn.prod.website-files.com/626a518e6507e342004ee1fe/68493e9432a10aab16054cf6_DLR2025_UK_Infographic.pdf",
    type: "download"
  },
};

const handleDownload = (fileType) => {
  const file = downloadFiles[fileType];
  
  if (file.type === "download") {
    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.url.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.location.href = file.url;
  }
};

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

 

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your actual Web3Forms access key
          ...formData,
          subject: "Digital Leadership Report Download Request",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          jobTitle: "",
          company: "",
          tel: "",
          country: "",
          interested: false,
          acceptTerms: false,
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center mt-14 justify-center"
        style={{
          backgroundImage: "url(/images/brain.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">
            A MEETING OF MINDS?
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            The Digital Leadership Report 2025
          </p>
          <button
            onClick={scrollToForm}
            className="bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] hover:from-[#c5f82a] hover:to-[#00d9a6] text-white px-8 py-4 text-lg font-semibold rounded transition-colors duration-300"
          >
            Download now
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            26 years of the Digital Leadership Report
          </h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto mb-8"></div>

          <p className="text-lg text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            The 2025 Nash Squateal Digital Leadership Report is the world's
            largest and longest-running survey of senior technology
            decision-makers. Launched in 1998 and previously called the CIO
            Survey, it has been an influential and respected indicator of major
            trends in technology and digital for over two decades.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-6xl font-bold mb-2">2015</div>
              <div className="text-lg">respondents</div>
            </div>
            <div>
              <div className="text-6xl font-bold mb-2">122K</div>
              <div className="text-lg">data points</div>
            </div>
            <div>
              <div className="text-6xl font-bold mb-2">62</div>
              <div className="text-lg">countries</div>
            </div>
            <div>
              <div className="text-6xl font-bold mb-2">26</div>
              <div className="text-lg">years of data</div>
            </div>
          </div>
        </div>
      </div>

      {/* Download CTA Section */}
      <div className=" text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-800 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Download the Report</h3>
            <div className="w-16 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg mb-8">
              Over the last 26 years, the research has taken in the views of
              over 50,000 technology leaders.
              <br />
              Find out what they are saying in 2025.
            </p>
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] hover:from-[#c5f82a] hover:to-[#00d9a6] text-white px-8 py-4 text-lg font-semibold rounded transition-colors duration-300"
            >
              Download now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Introduction from Bev White
            </h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Find out what you'll learn from the 26th edition of our Digital
              Leadership Report.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setVideoModalOpen(true)}
            >
              <div className="relative aspect-video bg-gray-200">
                <Image
                  src="/images/techflix1.webp"
                  alt="Bev White Introduction Video"
                  fill
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center  bg-opacity-20 hover:bg-opacity-30 transition-all duration-300">
                  <div className="relative">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 hover:scale-110 transition-all duration-300 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Watch as our CEO, Bev White, talks about the latest edition of
                  the DLR
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {videoModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setVideoModalOpen(false)}
          >
            <div
              className="relative max-w-4xl w-full aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 text-3xl font-bold w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all duration-200"
              >
                ×
              </button>
              <iframe
                src="https://www.youtube.com/embed/jJaQD4N7JB4?autoplay=1"
                title="Bev White Introduction - Digital Leadership Report 2025"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>

      {/* Making More of the Report Section */}
      <div
        className="py-16 relative"
        style={{
          backgroundImage: "url(/images/techflix.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-4">
            Making more of the report
          </h3>
          <div className="w-16 h-1 bg-teal-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 mb-4 text-teal-600">
                <Target className="w-full h-full" />
              </div>
              <h4
                className="text-xl font-bold text-blue-800 mb-3 cursor-pointer hover:text-blue-600 transition-colors duration-300"
                onClick={() => handleDownload("global")}
              >
                Global Infographic
              </h4>
              <p className="text-gray-600">
                Download the infographic with a view of the Global findings of
                the Digital Leadership Report.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 mb-4 text-teal-600">
                <Target className="w-full h-full" />
              </div>
              <h4
                className="text-xl font-bold text-blue-800 mb-3 cursor-pointer hover:text-blue-600 transition-colors duration-300"
                onClick={() => handleDownload("globalPress")}
              >
                Read the global Press Release
              </h4>
              <p className="text-gray-600">
                'AI creates the world's biggest tech skills shortage in over 15
                years.'
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 mb-4 text-teal-600">
                <Target className="w-full h-full" />
              </div>
              <h4
                className="text-xl font-bold text-blue-800 mb-3 cursor-pointer hover:text-blue-600 transition-colors duration-300"
                onClick={() => handleDownload("usaPress")}
              >
                Read the USA Press Release
              </h4>
              <p className="text-gray-600">
                A look at the Digital Leadership Report data from a US
                perspective.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 mb-4 text-teal-600">
                <Target className="w-full h-full" />
              </div>
              <h4
                className="text-xl font-bold text-blue-800 mb-3 cursor-pointer hover:text-blue-600 transition-colors duration-300"
                onClick={() => handleDownload("ukInfo")}
              >
                UK Infographic
              </h4>
              <p className="text-gray-600">
                Download the UK specific data in this easy to read infographic.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-4">
            What you need to know about the report
          </h3>
          <p className="text-center text-gray-600 mb-12">
            Our report summarised in eight key points
          </p>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-semibold text-lg text-black">
                    {faq.question}
                  </span>
                  <div className="text-gray-400 hover:text-gray-600 transition-colors">
                    {expandedFaq === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-black leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Form Section */}
      <div ref={formRef} className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Header Section */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-r-4 border-teal-600 pr-4">
                    Download the Report
                  </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl">
                  If you would like to receive a copy please fill in the form
                  below.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    Thank you for your submission!
                  </h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-xl mx-auto">
                    <p className="text-gray-700 mb-4">
                      Please download your PDF copy of the{" "}
                      <a
                        href="https://cdn.prod.website-files.com/626a518e6507e342004ee1fe/626a518e6507e362f44ee532_HNGDigitalLeadershipReport.pdf"
                        className="text-blue-600 hover:text-blue-800 font-semibold underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Digital Leadership Report
                      </a>
                      .
                    </p>
                    <p className="text-gray-600">
                      We will also send you a copy by email.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        First Name <span className="text-teal-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        requiteal
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="Requiteal"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        Last Name <span className="text-teal-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        requiteal
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="Requiteal"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-800">
                      Email Address <span className="text-teal-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      requiteal
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="Requiteal"
                    />
                  </div>

                  {/* Job Title & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        Job Title <span className="text-teal-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        requiteal
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="Requiteal"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        Company <span className="text-teal-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        requiteal
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="Requiteal"
                      />
                    </div>
                  </div>

                  {/* Tel & Country */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        Tel
                      </label>
                      <input
                        type="tel"
                        name="tel"
                        value={formData.tel}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="Optional"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        What country are you based in?
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  {/* Interest Checkbox */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Are you interested in finding out more about our Nash
                      Squateal Services?
                    </label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="interested"
                        checked={formData.interested}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                      />
                      <label className="ml-3 text-sm text-gray-700 font-medium">
                        Yes I'm interested
                      </label>
                    </div>
                  </div>

                  {/* Privacy Policy */}
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <div className="text-sm text-gray-700 italic space-y-2">
                      <p>
                        <em>
                          To find out how we use personal data, as well as how
                          to change your preferences, please read our{" "}
                          <Link
                            href="/privacy-policy"
                            className="text-blue-600 hover:text-blue-800 font-medium underline"
                          >
                            privacy policy
                          </Link>
                          .
                        </em>
                      </p>
                      <p>
                        <em>
                          Should you ever wish to unsubscribe from Nash Squateal
                          marketing communications please email{" "}
                          <Link
                            href="mailto:info@nashsquateal.com"
                            className="text-blue-600 hover:text-blue-800 font-medium underline"
                          >
                            info@nashsquateal.com
                          </Link>{" "}
                          with 'unsubscribe' in the subject line.
                        </em>
                      </p>
                    </div>
                  </div>

                  {/* Accept Terms */}
                  <div className="flex items-start space-x-3 p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      requiteal
                      className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500 mt-0.5"
                    />
                    <label className="text-sm text-gray-800 font-medium">
                      I Accept <span className="text-teal-500">*</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] hover:from-[#c5f82a] hover:to-[#00d9a6] disabled:bg-teal-400 disabled:cursor-not-allowed text-white px-12 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
     </>
  );
};

export default DigitalLeadershipReport;
