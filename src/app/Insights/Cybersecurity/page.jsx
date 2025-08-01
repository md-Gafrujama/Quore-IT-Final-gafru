import React from "react";
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
const cardPosts = [
  {
    id: "card1",
    image: "/images/cyber1.webp",
    title: "T Levels expand the work-ready tech talent base and now include a specialism in cyber security",
    subtitle: "Comment and Analysis",
    desc: "Our CEO, Bev White, talks about the benefits of T Levels and the launch of the cyber security specialism that students can now choose.",
  },
  {
    id: "card2",
    image: "/images/cyber2.webp",
    title: "Future Cyber Threats: The four 'horsemen of the apocalypse'",
    subtitle: "Comment and Analysis",
    desc: "Our CSO, Jim Tiller, answers a question he is asked often, and looks at the biggest cyber threats of the future.",
  },
  {
    id: "card3",
    image: "/images/cyber3.webp",
    title: "We have lift off... The opportunities and risks of generative AI",
    subtitle: "Comment and Analysis",
    desc: "Melanie Hayes, Chief People Officer, and Bill Boorman, Technology and Talent Advisor, discuss how generative AI theory is now being put into practice.",
  },
  {
    id: "card4",
    image: "/images/cyber4.webp",
    title: "From CDO to CTIO – what tech leader job titles really mean, and who calls the shots",  
    subtitle: "Comment and Analysis",
    desc: "Job titles in technology leadership are evolving. We look at what the different roles really entail.",
  },
  {
    id: "card5",
    image: "/images/cyber5.webp",
    title: "Foreign power activity raises the cyber stakes for digital leaders",
    subtitle: "Comment and Analysis",
    desc: "The increasing threat environment and continuous stakeholder demands for transparency are adding to the challenges.",
  },
  {
    id: "card6",
    image: "/images/cyber6.webp",
    title: "Nash Squared helps skill up young people to take on hackers",
    subtitle: "Group News",
    desc: "Developing the next generation of cybersecurity professionals through education and training programs.",
  },
];

const articles = [
  "T Levels expand the work-ready tech talent base and now include a specialism in cyber security",
  "Future Cyber Threats: The four 'horsemen of the apocalypse'",
  "We have lift off... The opportunities and risks of generative AI",
  "From CDO to CTIO – what tech leader job titles really mean, and who calls the shots",
];

const extras = [
  "Interesting facts around Cyber Security",
  "Our Security Podcast Series",
  "Our CEO Blog",
];

const leftStats = [
  { value: "28%", text: "Experienced major cyber attacks in the last 2 years", icon: "🔒" },
  { value: "40%", text: "Of our respondents are fearing cyber attack from foreign powers", icon: "📝" },
];

const rightStats = [
  { value: "52%", text: "In large organisations (total IT budget > US$25m) report having had a major attack", icon: "⚡" },
  { value: "48%", text: "Of all digital leaders state that digital transformation was accelerated after an attack", icon: "🧑‍🤝‍🧑" },
];

const StatBox = ({ icon, value, text }) => (
  <div className="text-center space-y-2">
    <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-teal-50 text-teal-600 text-lg">
      {icon}
    </div>
    <p className="font-bold text-lg">{value}</p>
    <p className="text-sm text-gray-600 max-w-xs mx-auto">{text}</p>
  </div>
);

const podcasts = [
  {
    id: 1,
    title: "All Things Security with Raf Los",
    description: "Join me and the White Rabbit himself, Rafal Los. I've known Raf for well over a decade and we worked together at companies like HP and Optiv. Raf is a genuine person and a cybersecurity guru.",
  },
  {
    id: 2,
    title: "The Sassy Episode",
    description: "Join me and the two leaders of the SSE Forum Jaye Tillson and John Spiegel to discuss the what's, why's, and what if's of Secure Access Service Edge (SASE), Security Service Edge (SSE), and Zero Trust Network Access (ZTNA).",
  },
  {
    id: 3,
    title: "Implementing Zero Trust - Part Four",
    description: "Join me, Dr. Chase Cunningham, Jaye Tillson, and Dustin Owens one more time for the fourth and final episode discussing implementing Zero Trust.",
  },
  {
    id: 4,
    title: "Implementing Zero Trust - Part Three",
    description: "Join me, Dr. Chase Cunningham, Jaye Tillson, and Dustin Owens for the third episode discussing Implementing Zero Trust. In this episode we go through each of the seven principals as defined by the DoD strategy.",
  },
  {
    id: 5,
    title: "Implementing Zero Trust - Part Two",
    description: "Join me, Dr. Chase Cunningham, Jaye Tillson, and Dustin Owens for the second episode discussing Implementing Zero Trust. In this episode we ask what does good look like?",
  },
  {
    id: 6,
    title: "Implementing Zero Trust - Part One",
    description: "We talk a lot about Zero Trust. Is it a product, architecture, a culture? Or all the above? Join me and three top players in cybersecurity. I've brought together Dr. Chase Cunningham, Jaye Tillson, and Dustin Owens for a very interesting conversation about implementing Zero Trust.",
  },
];

const posts = [
  {
    id: 1,
    title: "Cybersecurity as a strategic enabler",
    description: "In today's digital landscape, cybersecurity has evolved from a defensive necessity to a strategic business enabler that drives innovation and competitive advantage.",
    image: "cyber_post1.webp",
    link: "/ceo/cybersecurity-enabler",
  },
  {
    id: 2,
    title: "The future of cyber resilience",
    description: "Building resilient organizations requires more than just technology – it demands a cultural shift towards security-first thinking across all business functions.",
    image: "cyber_post2.webp",
    link: "/ceo/cyber-resilience",
  },
  {
    id: 3,
    title: "Zero Trust: Beyond the buzzword",
    description: "Zero Trust isn't just a security model – it's a fundamental reimagining of how we approach identity, access, and data protection in the modern enterprise.",
    image: "cyber_post3.jpg",
    link: "/ceo/zero-trust",
  },
];

export default function CybersecurityPage() {
  return (
    <> 
    <Navbar />
    <div className="min-h-screen bg-white">
      {/* Navigation placeholder */}
      
      
      <main className="px-6 md:px-20 py-12">
        <p className="text-sm font-semibold" style={{ color: "#00d9a6" }}>
          Featured Content
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Cybersecurity</h1>
        <p className="text-gray-600 text-md mb-8">Opinion, research and in-depth interviews</p>

        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          {/* Left Column */}
          <div className="lg:w-1/3">
            <h3 className="text-sm font-semibold mb-3" style={{ color: "#00d9a6" }}>
              Featured Articles
            </h3>
            <ul className="text-blue-800 space-y-4 text-sm font-semibold">
              {articles.map((article, index) => (
                <li key={index} className="hover:underline cursor-pointer">{article}</li>
              ))}
            </ul>
            <p
              className="mt-4 text-sm font-semibold cursor-pointer hover:underline"
              style={{ color: "#00d9a6" }}
            >
              More
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              {extras.map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3">
            <img
              src="/images/cyber-main.webp"
              width="900"
              height="600"
              alt="Cybersecurity"
              className="rounded-lg mb-6 w-full h-auto"
            />
            <p className="text-xs font-semibold mb-2" style={{ color: "#00d9a6" }}>
              Comment and Analysis
            </p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Reported major cyberattacks are falling – but watch out for the massive threats posed by generative AI and quantum
            </h2>
            <p className="text-sm text-gray-600">
              Jim Tiller talks about the surprising cyberattack data in our 2023 Digital Leadership Report, what might be behind it and what to look out for in the future.
            </p>
          </div>
        </div>
         
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-xl font-semibold text-center mb-2" style={{ color: "#00d9a6" }}>
              Latest posts
            </p>
            <h2 className="text-3xl font-bold text-center mb-2">
              More insight around Cybersecurity
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Interviews, tips, guides, industry best practices, and news.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cardPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="relative h-56 w-full">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover rounded-t-lg w-full h-full"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs font-semibold mb-2 text-[#00d9a6]">
                      {post.subtitle}
                    </p>
                    <h3 className="text-lg font-semibold text-blue-900 mb-3 hover:underline">
                      <a href={`/cybersecurity/${post.id}`}>{post.title}</a>
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">{post.desc}</p>
                    <a href={`/cybersecurity/${post.id}`} className="mt-auto">
                      <button className="w-full text-white font-semibold py-2 px-4 rounded bg-[#00d9a6] hover:bg-teal-600 transition duration-300">
                        FIND OUT MORE
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-[#00d9a6] mb-2">Digital Leadership Report</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4">
              Interesting Facts around Cybersecurity
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Managing cybersecurity has never been more challenging. The increasing threat environment, expanding attack surface, and continuous stakeholder demands for transparency are only adding to the challenges. Our Digital Leadership Survey threw up some interesting discussion.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
              {/* Left Stats */}
              <div className="flex flex-col gap-10">
                {leftStats.map((stat, i) => <StatBox key={i} {...stat} />)}
              </div>

              {/* Center Phone Image */}
              <div className="relative w-[300px] md:w-[420px] drop-shadow-xl">
                <img 
                  src="/images/phone.webp" 
                  alt="Phone Report" 
                  className="w-full h-auto" 
                />
              </div>

              {/* Right Stats */}
              <div className="flex flex-col gap-10">
                {rightStats.map((stat, i) => <StatBox key={i} {...stat} />)}
              </div>
            </div>

            {/* Download Button */}
            <a href="/cybersecurity-report.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 bg-[#00d9a6] text-white font-semibold rounded-full hover:bg-[#00b68b] transition">
                Download our Report
              </button>
            </a>
          </div>
        </section>

        <section className="py-16 bg-[#00d9a6] text-white rounded-xl my-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
            <p className="text-lg md:text-xl mb-6">
              We are the leading global provider of technology and talent solutions
            </p>
            <a href="/Contact">
              <button className="bg-white text-[#00d9a6] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Chat to us
              </button>
            </a>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-[#00d9a6] mb-2">Featured Video</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              How can Cybersecurity be a business enabler?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Discover the crucial role of the CSO in risk management and maintaining customer trust, and how they can inform the board about cybersecurity risks without just saying "yes or no".
            </p>
            <div className="relative max-w-2xl mx-auto mb-6">
              <img
                src="/images/cyber-video-thumb.webp"
                width="800"
                height="450"
                alt="Cybersecurity Video"
                className="rounded-lg w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition">
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <a href="/cybersecurity-video" className="text-blue-600 hover:underline font-semibold">
              Watch the video &gt;
            </a>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-2xl text-[#00d9a6] font-bold">In-depth interviews</p>
              <h2 className="text-3xl font-extrabold mb-2">Podcasts</h2>
              <p className="text-gray-600">Hear some amazing stories and insights from our Security Bytes podcast series</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcasts.map((podcast) => (
                <div
                  key={podcast.id}
                  className="bg-gray-50 p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300 h-full"
                >
                  <h3 className="text-lg font-bold text-blue-800 mb-3">{podcast.title}</h3>
                  <p className="text-sm text-gray-700">{podcast.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-[#00d9a6] hover:bg-[#00b68b] text-white font-semibold py-2 px-6 rounded transition-all duration-300">
                More Cybersecurity Podcasts
              </button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-[#00d9a6] mb-2">CEO Blog</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              What our CEO thinks
            </h2>
            <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
              At Nash Squared Board level we are very passionate about the subject of
              Cybersecurity. Bev White, our CEO posts her thoughts on the
              subject.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <a key={post.id} href={post.link}>
                  <div className="bg-white border rounded-lg shadow hover:shadow-lg transition overflow-hidden h-full flex flex-col">
                    <div className="relative h-60 w-full">
                      <img
                        src={`/images/${post.image}`}
                        alt={post.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4 text-left flex flex-col flex-grow">
                      <h3 className="text-base font-bold mb-2" style={{ color: "#00d9a6" }}>
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-800">{post.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10">
              <a href="/ceo">
                <button className="bg-[#00d9a6] hover:bg-[#00c49a] text-white font-semibold px-6 py-2 rounded-md transition">
                  View all posts
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer placeholder */}
      <Footer />
    </div>
    </>
  );
}