'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
function StatBox({ number, label }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-lg">
      <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
        {number}
      </p>
      <p className="text-lg font-medium text-purple-100 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}

export default function DigitalLeadershipPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    company: '',
    phone: '',
    country: '',
    interested: false,
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToForm = () => {
    const formSection = document.getElementById('download-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.jobTitle) newErrors.jobTitle = 'Job Title is required';
    if (!formData.company) newErrors.company = 'Company is required';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      console.log('Form submitted:', formData);
      setTimeout(() => {
        setIsSubmitting(false);
        alert('Thank you for your submission!');
      }, 1500);
    }
  };

  return (
    

    <div className="bg-white">
        <Navbar />
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-indigo-900">
        <div className="relative w-full max-w-4xl h-96 rounded-2xl overflow-hidden shadow-2xl group">
          <Image
            src="/images/Key-Leadership.jpeg"
            alt="Digital Leadership"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-purple-900/70 to-transparent" />
          <div className="relative h-full flex flex-col items-center justify-end p-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              A MEETING OF MINDS?
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-indigo-100 mb-6">
              The Digital Leadership Report 2025
            </h2>
            <button 
              onClick={scrollToForm}
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-cyan-500/30 transform hover:-translate-y-1"
            >
              Download Now
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
<div className="w-full py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        26 Years of the Digital Leadership Report
      </h2>
      <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
        The 2025 Nash Squared Digital Leadership Report is the world's largest and longest-running survey of senior technology decision-makers.
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-lg">
        <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
          2015
        </p>
        <p className="text-lg font-medium text-purple-100 uppercase tracking-wider">
          respondents
        </p>
      </div>
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-lg">
        <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
          122K
        </p>
        <p className="text-lg font-medium text-purple-100 uppercase tracking-wider">
          data points
        </p>
      </div>
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-lg">
        <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
          62
        </p>
        <p className="text-lg font-medium text-purple-100 uppercase tracking-wider">
          countries
        </p>
      </div>
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-lg">
        <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
          26
        </p>
        <p className="text-lg font-medium text-purple-100 uppercase tracking-wider">
          years of data
        </p>
      </div>
    </div>
  </div>
</div>

     {/* Download Section */}
<div className="w-full py-20 px-4 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      Download the Report
    </h2>
    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
      Over the last 26 years, the research has taken in the views of over 50,000 technology leaders.<br />
      Find out what they are saying in 2025.
    </p>
    <button 
      onClick={scrollToForm}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md shadow-md transition-all duration-300 hover:shadow-lg"
    >
      Download now
    </button>
  </div>
</div>
{/* Introduction Section - Dark Version */}
<section className="w-full py-16 bg-gradient-to-br from-gray-900 to-gray-800">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Introduction from Bev White
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Find out what you'll learn from the 26th edition of our Digital Leadership Report.
      </p>
    </div>
    
    <div className="mt-12 flex justify-center">
      <div className="relative w-500 h-150 overflow-hidden border border-gray-600 shadow-lg rounded-lg">
        <Image
          src="/images/External DLR video screenshot.webp"
          alt="Bev White discussing Digital Leadership Report"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>

    <div className="mt-8 text-center">
      <a 
        href="#watch-video"
        className="text-2xl md:text-3xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200 cursor-pointer"
      >
        Watch as our CEO, Bev White, talks about the latest edition of the DLR
      </a>
    </div>
  </div>
</section>
      {/* Global Content Section */}
      <div className="relative w-full py-16 bg-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/global.webp"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
          <hr className="border-t border-gray-300 my-8" />
          
          <div className="mb-8">
            <h4 
              className="text-lg font-bold text-blue-600 hover:text-blue-800 mb-2 cursor-pointer transition-colors"
              onClick={() => window.location.href = '#'}
            >
              Global Infographic
            </h4>
            <p className="text-gray-700">
              Download the infographic with a view of the Global findings of the Digital Leadership Report.
            </p>
          </div>
          
          <hr className="border-t border-gray-300 my-8" />
          
          <div className="mb-8">
            <h4 
              className="text-lg font-bold text-blue-600 hover:text-blue-800 mb-2 cursor-pointer transition-colors"
              onClick={() => window.location.href = '#'}
            >
              Read the global Press Release
            </h4>
            <p className="text-gray-700 italic">
              'AI creates the world's biggest tech skills shortage in over 15 years.'
            </p>
          </div>
          
          <hr className="border-t border-gray-300 my-8" />
          
          <div className="mb-8">
            <h4 
              className="text-lg font-bold text-blue-600 hover:text-blue-800 mb-2 cursor-pointer transition-colors"
              onClick={() => window.location.href = '#'}
            >
              Read the USA Press Release
            </h4>
            <p className="text-gray-700">
              A look at the Digital Leadership Report data from a US perspective.
            </p>
          </div>
          
          <hr className="border-t border-gray-300 my-8" />
          
          <div className="mb-8">
            <h4 
              className="text-lg font-bold text-blue-600 hover:text-blue-800 mb-2 cursor-pointer transition-colors"
              onClick={() => window.location.href = '#'}
            >
              UK Infographic
            </h4>
            <p className="text-gray-700">
              Download the UK specific data in this easy to read infographic.
            </p>
          </div>
          
          <hr className="border-t border-gray-300 my-8" />  
          <hr className="border-t border-gray-300 my-8" />
        </div>
      </div>

      {/* Key Points Section - Dark Version */}
<div className="max-w-4xl mx-auto px-4 py-16 bg-gray-900">
  <h1 className="text-4xl font-bold text-white mb-8">
    What you need to know about the report
  </h1>
  
  <p className="text-xl text-gray-300 mb-12">
    Our report summarised in eight key points
  </p>
  
  <hr className="border-t border-gray-700 mb-12" />
  
  <div className="space-y-10">
    {[
      "Investment slows, but priorities sharpen",
      "AI moves from pilot to productivity",
      "Cybercrime jumps",
      "Skills gaps shift – and AI tops the list",
      "Outsourcing up, retention uncertain",
      "Hybrid harmony – or tension?",
      "Diversity in focus, but gender equity flatlines",
      "Digital leaders get pragmatic"
    ].map((point, index) => (
      <div key={index}>
        <h2 className="text-2xl font-bold text-white mb-4">
          {point}
        </h2>
        <hr className="border-t border-gray-700 mb-4" />
      </div>
    ))}
  </div>
</div>
      {/* Download Form Section */}
      <motion.div 
        id="download-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg mb-16"
      >
        <motion.h1 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-indigo-800 mb-6 text-center"
        >
          Download the Report
        </motion.h1>
        
        <p className="text-gray-600 mb-8 text-center">
          If you would like to receive a copy please fill in the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-gray-700 font-medium mb-2">
                First Name *
                {errors.firstName && (
                  <span className="text-red-500 text-sm ml-2">{errors.firstName}</span>
                )}
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
              />
            </motion.div>

            {/* Last Name */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-gray-700 font-medium mb-2">
                Last Name *
                {errors.lastName && (
                  <span className="text-red-500 text-sm ml-2">{errors.lastName}</span>
                )}
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
              />
            </motion.div>
          </div>

          {/* Email */}
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-gray-700 font-medium mb-2">
              Email Address *
              {errors.email && (
                <span className="text-red-500 text-sm ml-2">{errors.email}</span>
              )}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
            />
          </motion.div>

          {/* Job Title */}
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-gray-700 font-medium mb-2">
              Job Title *
              {errors.jobTitle && (
                <span className="text-red-500 text-sm ml-2">{errors.jobTitle}</span>
              )}
            </label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.jobTitle ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
            />
          </motion.div>

          {/* Company */}
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <label className="block text-gray-700 font-medium mb-2">
              Company *
              {errors.company && (
                <span className="text-red-500 text-sm ml-2">{errors.company}</span>
              )}
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.company ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
            />
          </motion.div>

          {/* Phone */}
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </motion.div>

          {/* Country */}
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <label className="block text-gray-700 font-medium mb-2">
              What country are you based in?
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="IN">India</option>
              <option value="JP">Japan</option>
              <option value="SG">Singapore</option>
              <option value="Other">Other</option>
            </select>
          </motion.div>

          {/* Services Interest */}
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex items-center"
          >
            <input
              type="checkbox"
              id="interested"
              name="interested"
              checked={formData.interested}
              onChange={handleChange}
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-all"
            />
            <label htmlFor="interested" className="ml-2 text-gray-700">
              Are you interested in finding out more about our Nash Squared Services?
            </label>
          </motion.div>

          {/* Privacy Policy */}
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-sm text-gray-600"
          >
            <p className="mb-4">
              To find out how we use personal data, as well as how to change your preferences, please read our privacy policy.
            </p>
            <p className="mb-4">
              Should you ever wish to unsubscribe from Nash Squared marketing communications please email info@nashsquared.com with 'unsubscribe' in the subject line.
            </p>
          </motion.div>

          {/* Terms Acceptance */}
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-start"
          >
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-all"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="acceptTerms" className="font-medium text-gray-700">
                I Accept
              </label>
              {errors.acceptTerms && (
                <p className="text-red-500 mt-1">{errors.acceptTerms}</p>
              )}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="pt-4"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </motion.div>
        </form>
      </motion.div>
      <Footer />
    </div>
  );
}