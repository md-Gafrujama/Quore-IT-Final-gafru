 "use client";

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";

const ModernSlaveryStatement = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = useCallback(() => {
    setShowContactForm(true);
    setTimeout(() => {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  const sections = [
    {
      title: "Introduction",
      content: [
        "Nash Squared is committed to preventing modern slavery and human trafficking in all its forms. Our offer means we are in a unique position where we have significant impact on people's lives and careers, and the organisations and communities we work with. It's a responsibility we take very seriously. We believe that everyone has the right to work freely and without coercion, and we are committed to ensuring that our operations and supply chains are free from any form of modern slavery.",
        "Modern slavery is a crime and a violation of fundamental human rights. It takes various forms, such as slavery, servitude, forced and compulsory labour and human trafficking, all of which have in common the deprivation of a person's liberty by another in order to exploit them for personal or commercial gain. We have a zero-tolerance approach to modern slavery, and we are committed to acting ethically and with integrity in all our business dealings and relationships and to implementing and enforcing effective systems and controls to ensure modern slavery is not taking place anywhere in our own business or in any of our supply chains.",
        "This statement relates to actions and activities to 31 January 2025."
      ]
    },
    {
      title: "Organisational Structure",
      content: [
        "Nash Squared is the leading global provider of technology and talent solutions. Our supply chains include a wide range of organisations including technology providers. We understand that modern slavery can occur at any stage of the supply chain. We expect the same high standards from all our contractors, suppliers and other business partners, and as part of our contracting processes, we include specific prohibitions against the use of forced, compulsory or trafficked labour, or anyone held in slavery or servitude, whether adults or children, and we expect that our suppliers will hold their own suppliers to the same high standards."
      ]
    },
    {
      title: "Supply Chain",
      content: [
        "As an organisation we deal with a diverse portfolio of suppliers that support all aspects of the group's operations. We expect our suppliers to adhere to our Supplier Code of Conduct, which always outlines the minimum expectation of suppliers.",
        "Nash Squared takes its responsibilities across Modern Slavery very seriously and will continue to monitor suppliers closely and ensure compliance to the Supplier Code of Conduct within its supply base. Violations of the Supplier Code of Conduct will be pursued and dealt with according to their severity.",
        "We actively pursue ways across our supply chain to identify any possible modern slavery or human trafficking risks."
      ]
    },
    {
      title: "Policies and Procedures",
      content: [
        "Nash Squared has a zero-tolerance approach to modern slavery, and we have developed policies and procedures to ensure compliance with relevant legislation and ethical standards. These include:"
      ],
      items: [
        {
          color: "blue",
          title: "Whistleblowing policy",
          content: "that shares our commitment to maintaining the highest standards of openness, probity and accountability. This connects with our code of conduct and other policies as listed."
        },
        {
          color: "green",
          title: "Code of Conduct",
          content: "that outlines our expectations for ethical behaviour and professional standards."
        },
        {
          color: "purple",
          title: "Supplier Code of Conduct",
          content: "that is integrated with modern slavery, human trafficking to ensure a clean supply chain free of exploited labour."
        },
        {
          color: "orange",
          title: "Due Diligence and Risk Assessment",
          content: "We conduct due diligence and risk assessments to identify and mitigate any potential risks related to modern slavery in our operations and supply chains. This includes:",
          bullets: [
            "Conducting risk assessments of our supply chains to identify high-risk suppliers and contractors.",
            "Regularly reviewing and updating our policies and procedures to ensure they remain effective and up to date.",
            "Engaging with suppliers and contractors to ensure they understand our expectations and requirements regarding modern slavery and ethical conduct."
          ]
        },
        {
          color: "red",
          title: "Training and Awareness",
          content: "We provide training and awareness-raising activities to ensure that all employees, suppliers, and stakeholders understand the risks and impacts of modern slavery and human trafficking. This includes:",
          note: "Raising awareness among our stakeholders and the wider community through public reporting and communication.",
          bullets: [
            "Anti-Bribery and Corruption",
            "HR Policies and Procedures",
            "Safeguarding"
          ]
        }
      ]
    },
    {
      title: "Reporting and Monitoring",
      content: [
        "We monitor and report on our progress in addressing modern slavery in our operations and supply chains. This includes:"
      ],
      bullets: [
        "Conducting regular audits and assessments of our supply chains to ensure compliance with our policies and procedures.",
        "Monitoring and reviewing our performance and progress in addressing modern slavery.",
        "Reporting on our progress in our annual sustainability and corporate responsibility reports."
      ]
    },
    {
      title: "Conclusion",
      content: [
        "Nash Squared is committed to preventing modern slavery and human trafficking in all its forms. We believe that by working together with our employees, suppliers, and stakeholders, we can help create a world where modern slavery no longer exists."
      ],
      boardInfo: {
        title: "Board of Directors:",
        text: "This statement was approved on April 2023 by our board of directors, who review and update it annually.",
        director: "Andrew Neal, Chief People Officer",
        date: "January 2024"
      }
    }
  ];

  const contactInfo = [
    {
      title: "Our Offices",
      content: "We operate from 43 offices covering the USA, Europe and Asia."
    },
    {
      title: "Head Office",
      isAddress: true,
      content: ["LDN:W", "3 Noble Street", "London", "EC2V 7EE"]
    },
    {
      title: "Directions",
      isLink: true,
      content: "Find us on the map"
    },
    {
      title: "Contact",
      items: [
        { type: "email", value: "info@nashsquared.com" },
        { type: "tel", value: "+44 (0)20 7333 0033" }
      ]
    }
  ];

  const borderColors = {
    blue: "border-blue-500",
    green: "border-green-500",
    purple: "border-purple-500",
    orange: "border-orange-500",
    red: "border-red-500"
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="space-y-8">
            
              <h1 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                Modern Slavery Statement for Nash Squared
              </h1>

              <div className="w-full mb-8 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/modern-slave.jpg"
                  alt="Modern slavery awareness"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                {sections.map((section, index) => (
                  <div key={index} className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
                    
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className={`text-lg text-gray-700 leading-relaxed ${pIndex < section.content.length - 1 ? 'mb-4' : ''}`}>
                        {paragraph}
                      </p>
                    ))}

                    {section.items && (
                      <div className="space-y-6 mt-6">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className={`border-l-4 ${borderColors[item.color]} pl-6`}>
                            <p className="text-lg text-gray-700">
                              <span className="font-semibold">{item.title}</span> {item.content}
                            </p>
                            {item.note && <p className="text-gray-700 ml-4 mt-2">{item.note}</p>}
                            {item.bullets && (
                              <ul className="ml-6 mt-2 space-y-2 text-gray-700">
                                {item.bullets.map((bullet, bIndex) => (
                                  <li key={bIndex} className="flex items-start">
                                    <span className="text-blue-600 font-bold mr-2">•</span>
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {section.bullets && (
                      <ul className="space-y-3 text-lg text-gray-700 mt-4">
                        {section.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3 flex-shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.boardInfo && (
                      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mt-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{section.boardInfo.title}</h3>
                        <p className="text-gray-700 mb-4">{section.boardInfo.text}</p>
                        <div className="space-y-2">
                          <p className="font-semibold text-gray-800">Director's name and job title:</p>
                          <p className="text-gray-700">{section.boardInfo.director}</p>
                          <p className="font-semibold text-gray-800 mt-4">Date:</p>
                          <p className="text-gray-700">{section.boardInfo.date}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            
          </div>
        </div>

        <div className="bg-cover bg-center w-full min-h-[60vh] flex flex-col justify-center items-center text-white text-center" style={{ backgroundImage: "url('/images/keyboard.jpg')" }}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            We're ready to help you build a limitless future
          </h1>
          <button 
            onClick={handleContactClick}
            className="bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md"
          >
            CONTACT US
          </button>
        </div>

        {showContactForm && (
          <div id="contact-section" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
                <p className="text-lg text-gray-600">
                  If you'd like extra information about anything that we do, or you'd simply like to contact us, 
                  please feel free to fill out the form below and one of our team will get back to you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Form</h2>
                  <form className="space-y-6">
                    <FormField id="name" label="Name" type="text" required={false} />
                    <FormField id="email" label="Email Address" type="email" required={true} />
                    <FormField id="message" label="Your message" type="textarea" required={true} />
                    
                    <div className="space-y-4">
                      <CheckboxField 
                        id="human" 
                        label="I am human" 
                        description={
                          <>
                            To find out how we use personal data, as well as how to change your preferences, 
                            please read our <Link href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</Link>.
                            <br />
                            Should you ever wish to unsubscribe from Nash Squared marketing communications 
                            please email <a href="mailto:info@nashsquared.com" className="text-blue-600 hover:underline">info@nashsquared.com</a> with 'unsubscribe' in the subject line.
                          </>
                        } 
                      />
                      <CheckboxField id="accept" label="I Accept" required={true} />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">{info.title}</h2>
                      {info.isAddress ? (
                        <address className="not-italic text-gray-600 space-y-2">
                          {info.content.map((line, i) => <p key={i}>{line}</p>)}
                        </address>
                      ) : info.isLink ? (
                        <Link href="#" className="text-blue-600 hover:underline">{info.content}</Link>
                      ) : info.items ? (
                        <div className="space-y-2 text-gray-600">
                          {info.items.map((item, i) => (
                            <p key={i}>
                              <a 
                                href={`${item.type === 'email' ? 'mailto:' : 'tel:'}${item.value}`} 
                                className="text-blue-600 hover:underline"
                              >
                                {item.value}
                              </a>
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

const FormField = ({ id, label, type, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
      {required && <span className="block text-xs text-gray-500 mt-1">Required</span>}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        name={id}
        rows={4}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      />
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      />
    )}
  </div>
);

const CheckboxField = ({ id, label, description, required = false }) => (
  <div className="flex items-start">
    <div className="flex items-center h-5">
      <input
        id={id}
        name={id}
        type="checkbox"
        required={required}
        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
      />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor={id} className="font-medium text-gray-700">{label}</label>
      {description && <div className="text-gray-500 mt-1">{description}</div>}
    </div>
  </div>
);

export default ModernSlaveryStatement;