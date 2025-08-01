 import React from "react";
import Image from "next/image";
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
import Link from "next/link";

const cardPosts = [
  {
    id: "card1",
    image: "/images/women1.webp",
    title: "Nurture your skills and aspirations on International Women’s Day",
    subtitle: "Comment and Analysis",
    desc: "Nash Squared CEO, Bev White, looks at the current DEI situation on International Women’s Day.",
  },
  {
    id: "card2",
    image: "/images/women2.webp",
    title: "Is diversity (even more) under threat in tech?",
    subtitle: "Comment and Analysis",
    desc: "Bev White, Nash Squared CEO, looks at the impact of budget constraints on diversity in the tech sector.",
  },
  {
    id: "card3",
    image: "/images/women3.webp",
    title: "Why I'm optimistic on International Women's Day despite the frustratingly slow pace of change",
    subtitle: "Comment and Analysis",
    desc: "Our CEO, Bev White, shares thoughts on the progress (and lack of it) for women in tech.",
  },
  {
    id: "card4",
    image: "/images/women4.webp",
    title: "Tech trends: what will be hot in 2024?",
    subtitle: "Comment and Analysis",
    desc: "Bev White shares her thoughts on what will trend in technology in 2024.",
  },
  {
    id: "card5",
    image: "/images/women5.webp",
    title: "We mustn't let the return to offices kill the growth of women in technology",
    subtitle: "Comment and Analysis",
    desc: "The 'work from anywhere' trend is receding, threatening growth in women-led tech roles.",
  },
  {
    id: "card6",
    image: "/images/women6.webp",
    title: "Women in Tech: Look how far we've come – look how far there is to go",
    subtitle: "Comment and Analysis",
    desc: "Here's what needs to happen for more progress for women in the tech sector.",
  },
];

const articles = [
  "Nurture your skills and aspirations on International Women's Day",
  "Is diversity (even more) under threat in tech?",
  "Why I'm optimistic on International Women's Day despite the frustratingly slow pace of change",
  "Tech trends: what will be hot in 2024?",
];

const extras = [
  "The facts around Women In Technology",
  "Our Women in Technology Podcast Series",
  "Our CEO Blog",
];

const leftStats = [
  { value: "23%", text: "Across the globe this is the proportion of a tech team that's female", icon: "🔒" },
  { value: "28%", text: "Across the globe this is the proportion of new hires to a tech team that's female", icon: "📝" },
];

const rightStats = [
  { value: "14%", text: "Across the globe this is the proportion of digital leaders that are female", icon: "⚡" },
  { value: "76%", text: "Of respondents said they'd suffered gender bias in the workplace", icon: "🧑‍🤝‍🧑" },
];

const StatBox = ({ icon, value, text }) => (
  <div className="text-center space-y-2">
    <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-pink-50 text-pink-600 text-lg">
      {icon}
    </div>
    <p className="font-bold text-lg">{value}</p>
    <p className="text-sm text-gray-600 max-w-xs mx-auto">{text}</p>
  </div>
);

const podcasts = [
  {
    id: 1,
    title: "This International Women's Day we talk to the co-founders of AWS Cloud Women",
    description: "Today's guests are Laura Caicedo and Chara Gravani, the co-founders of AWS Cloud Women",
  },
  {
    id: 2,
    title: "Ayse talks us through the biggest challenges facing female leaders.",
    description: "Today we are joined by award winning leadership coach and the owner of To Be The One Coaching, Ayse B. Cinar.",
  },
  {
    id: 3,
    title: "It's World Hearing Day, so we discover how data can help us avert a hearing health crisis.",
    description: "Today's guest is Amanda Philpott, CEO and co-founder of Eargym.",
  },
  {
    id: 4,
    title: "Observing Black History Month in the USA (Part 2) with Juliette Powell",
    description: "Today we welcome Juliette Powell, AI expert and academic at NYU.",
  },
  {
    id: 5,
    title: "Observing Black History Month in the USA with Tia Hopkins",
    description: "This week we welcome to the podcast Tia Hopkins, Chief Cyber Resilience Officer and Field CTO at eSentire.",
  },
  {
    id: 6,
    title: "We're kicking off our 'Female Founders' Fortnight' with Teri Yu, Director of Product at Kajabi",
    description: "Today we are joined by Teri Yu.",
  },
];

const posts = [
  {
    id: 1,
    title: "Diversity is a way of life",
    description: "Diversity is a way of life not an initiative. In the past few weeks I have been seeing just how productive and rich our world is when we live in this way.",
    image: "pic1.jpg",
    link: "/ceo/diversity",
  },
  {
    id: 2,
    title: "In celebration of talented women",
    description: "This week talented women have taken centre stage for me...",
    image: "pic2.webp",
    link: "/ceo/talented-women",
  },
  {
    id: 3,
    title: "International Women's Day – We Must Knock Down a Thousand Tiny Walls",
    description: "International Women's Day – We Must Knock Down a Thousand Tiny Walls",
    image: "pic3.webp",
    link: "/ceo/iwd-walls",
  },
];

export default function WomenInTechPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-20 py-12">
        <p className="text-sm font-semibold" style={{ color: "#00d9a6" }}>
          Featured Content
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Women in Technology</h1>
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
            <Image
              src="/images/women-tech.webp"
              width={900}
              height={600}
              alt="Women in Technology"
              className="rounded-lg mb-6 w-full h-auto"
            />
            <p className="text-xs font-semibold mb-2" style={{ color: "#00d9a6" }}>
              TechFlix
            </p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              How do you invest in the future? Bank on women.
            </h2>
            <p className="text-sm text-gray-600">
              Despite women-owned businesses growing faster, female entrepreneurs receive only a small
              fraction of venture capital funding.
            </p>
          </div>
        </div>
         
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-xl font-semibold text-center mb-2" style={{ color: "#00d9a6" }}>
              Latest posts
            </p>
            <h2 className="text-3xl font-bold text-center mb-2">
              More insight around Women in Technology
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
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-lg"
                      quality={100}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs font-semibold mb-2 text-[#00d9a6]">
                      {post.subtitle}
                    </p>
                    <h3 className="text-lg font-semibold text-blue-900 mb-3 hover:underline">
                      <Link href={`/womenin-tech/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">{post.desc}</p>
                    <Link href={`/womenin-tech/${post.id}`} className="mt-auto">
                      <button className="w-full text-white font-semibold py-2 px-4 rounded bg-[#00d9a6] hover:bg-teal-600 transition duration-300">
                        FIND OUT MORE
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-[#00d9a6] mb-2">2023 Digital Leadership Report</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4">
              The Facts around Women in Technology
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Now in our 24th year, and in collaboration with CIONET, 2023 has brought more change and disruption
              than any of us were expecting, and this year's report has shone a light on it.
              The section 'Managing the Talent Team' may be of particular interest to you.
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
            <Link href="/your-report.pdf" target="_blank">
              <button className="px-6 py-3 bg-[#00d9a6] text-white font-semibold rounded-full hover:bg-[#00b68b] transition">
                Download our Report
              </button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#00d9a6] text-white rounded-xl my-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
            <p className="text-lg md:text-xl mb-6">
              We are the leading global provider of technology and talent solutions
            </p>
            <Link href="/Contact" passHref>
              <button className="bg-white text-[#00d9a6] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Chat to us
              </button>
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-2xl text-[#00d9a6] font-bold">In-depth interviews</p>
              <h2 className="text-3xl font-extrabold mb-2">Podcasts</h2>
              <p className="text-gray-600">Hear some amazing stories and insights from our Tech Talks podcast series</p>
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
                More Tech Talks Podcasts
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
              Women in Technology. Bev White, our CEO posts her thoughts on the
              subject.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={post.link}>
                  <div className="bg-white border rounded-lg shadow hover:shadow-lg transition overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 w-full">
                      <Image
                        src={`/images/${post.image}`}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 text-left flex flex-col flex-grow">
                      <h3 className="text-base font-bold mb-2" style={{ color: "#00d9a6" }}>
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-800">{post.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/ceo">
                <button className="bg-[#00d9a6] hover:bg-[#00c49a] text-white font-semibold px-6 py-2 rounded-md transition">
                  View all posts
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}