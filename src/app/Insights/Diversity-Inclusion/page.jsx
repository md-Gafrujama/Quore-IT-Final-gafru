import React from "react";
import Image from "next/image";
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
import Link from "next/link";

const cardPosts = [
  {
    id: "card1",
    image: "/images/diversity1.webp",
    title: "Nurture your skills and aspirations on International Women's Day",
    subtitle: "Comment and Analysis",
    desc: "Nash Squared CEO, Bev White, looks at the current DEI situation on International Women's Day.",
  },
  {
    id: "card2",
    image: "/images/diversity2.webp",
    title: "Is diversity (even more) under threat in tech?",
    subtitle: "Comment and Analysis",
    desc: "Bev White, Nash Squared CEO, looks at the impact of budget constraints on diversity in the tech sector.",
  },
  {
    id: "card3",
    image: "/images/diversity3.webp",
    title: "Time to step up in supporting neurodiverse talent at work",
    subtitle: "Comment and Analysis",
    desc: "Rhona Carmichael and Adam Harper look at what can be done to support neurodivergent employees in the workplace.",
  },
 
];

const articles = [
  "Nurture your skills and aspirations on International Women's Day",
  "Is diversity (even more) under threat in tech?",
  "Time to step up in supporting neurodiverse talent at work",
  "Leadership accountability is key to diversifying talent",
];

const extras = [
  "Interesting facts around Diversity & Inclusion",
  "Our TechTalks Podcast Series",
  "Our CEO Blog",
];

const leftStats = [
  { value: "23%", text: "Of your Tech Teams are female", icon: "👥" },
  { value: "19%", text: "Of Tech Teams have no representation of ethnic minorities.", icon: "📊" },
];

const rightStats = [
  { value: "28%", text: "Of new hires to Tech Teams are female", icon: "✨" },
  { value: "21%", text: "Is the average proportion of ethnic minorities in a Tech Team globally", icon: "🌍" },
];

const StatBox = ({ icon, value, text }) => (
  <div className="text-center space-y-2">
    <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-red-50 text-red-600 text-lg">
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
    description: "Meet Laura Caicedo and Chara Gravani, the co-founders of AWS Cloud Women; a community helping women and inspiring them into careers in cloud computing. The gender gap in technology is bad, it's even worse in cloud despite it being one of the most heavily invested in technologies. David asks them why the community needs to exist, what a role model or a mentor can do for someone's career, and what can others learn from their experiences.",
    image: '/images/girl1.webp',
  },
  {
    id: 2,
    title: "Ayse talks us through the biggest challenges facing female leaders.",
    description: "Ayse B. Cinar is an award winning leadership coach and the owner of To Be The One Coaching. She's working with female leaders juggling demands of professional and personal life, helping them to unlock the freedom needed to deliver the impact they want to. So what is the advice for today's leaders? Also on the show Cat Artier joins David Savage to talk about International Women's Day, and we talk about Newton Foundations, a new free course from Newton Venture Program, who are aiming to broaden access to the world of venture capital.",
    image: '/images/girl2.png',
  },
  {
    id: 3,
    title: "It's World Hearing Day, so we discover how data can help us avert a hearing health crisis.",
    description: "World Hearing Day is the 3rd of March. It's a day we need to pay greater attention to, because we're stumbling towards catastrophe. Listening habits are wrecking our hearing and leading to potentially huge healthy crises, especially as new research points to a correlation between hearing loss and Dementia.",
    image: '/images/girl3.png',
  },
  {
    id: 4,
    title: "Observing Black History Month in the USA (Part 2) with Juliette Powell",
    description: "The second episode is with the author of 'The AI Dilemma: 7 Principles for Responsible Technology' Juliette Powell. Juliette has had an unconventional route into technology and a career in television and eventually teaching at New York University. She is an AI expert and academic, speaking about how organisations can harness it's power. We talk about her own career, and what others can learn from her experience.",
    image: '/images/girl4.webp',
  },
  {
    id: 5,
    title: "Observing Black History Month in the USA with Tia Hopkins",
    description: "February is Black History Month in both the USA and Canada. To mark the month we're publishing two special episodes focused on observing the challenges the community faces in our technology sector. The first is with esentric Chief Cyber Resilience Officer and Field CTO Tia Hopkins. Tia talks about education, ensuring corporate business is pulling it's weight in regards to preparing future professionals, and that we provide opportunities in cyber for black women.",
    image: '/images/girl5.png',
  },
  {
    id: 6,
    title: "Can AI reduce bias in sports talent spotting and give equal opportunity?",
    description: "Today Richard Felton-Thomas joins us to talk about the bias in sport talent spotting. AI Scout is an app that uses data to benchmark talent, giving scouts a tool to augment their activities and give more opportunity to those who might otherwise miss out. On the eve (almost) of the FIFA Women's World Cup, we're celebrating anything that expands inclusion and opportunity. We also chat about Realty+, who have partnered with OT7 Sports to launch 'Own The Zone', a game with technology at it's heart.",
    image: '/images/girl6.jpg',
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

export default function DiversityInclusionPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-20 py-12">
        <p className="text-sm font-semibold text-[#00d9a6]-600">
          Featured Content
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Diversity & Inclusion</h1>
        <p className="text-gray-600 text-md mb-8">Opinion, research and in-depth interviews</p>

        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          {/* Left Column */}
          <div className="lg:w-1/3">
            <h3 className="text-sm font-semibold mb-3 text-[#00d9a6]-600">
              Featured Articles
            </h3>
            <ul className="text-blue-800 space-y-4 text-sm font-semibold">
              {articles.map((article, index) => (
                <li key={index} className="hover:underline cursor-pointer">{article}</li>
              ))}
            </ul>
            <p
              className="mt-4 text-sm font-semibold cursor-pointer hover:underline text-[#00d9a6]-600"
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
              src="/images/diversity-hero.webp"
              width={900}
              height={600}
              alt="Diversity & Inclusion"
              className="rounded-lg mb-6 w-full h-auto"
            />
            <p className="text-xs font-semibold mb-2 text-[#00d9a6]-600">
              Comment and Analysis
            </p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Five mistakes to avoid when creating and implementing a diversity strategy
            </h2>
            <p className="text-sm text-gray-600">
              How can you create an effective diversity strategy? Melanie Hayes looks at what to avoid doing to get the best out of your D&I strategy.
            </p>
          </div>
        </div>
         
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-xl font-semibold text-center mb-2 text-[#00d9a6]-600">
              Latest posts
            </p>
            <h2 className="text-3xl font-bold text-center mb-2">
              More insight around Diversity & Inclusion
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
                    <p className="text-xs font-semibold mb-2 text-[#00d9a6]-600">
                      {post.subtitle}
                    </p>
                    <h3 className="text-lg font-semibold text-blue-900 mb-3 hover:underline">
                      <Link href={`/diversity-inclusion/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">{post.desc}</p>
                    <Link href={`/diversity-inclusion/${post.id}`} className="mt-auto">
                      <button className="w-full text-white font-semibold py-2 px-4 rounded bg-[#00d9a6]   transition duration-300">
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
              Interesting Facts around Diversity & Inclusion
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Only by training and recruiting people from different, underrepresented backgrounds can organisations address inequality, make better products, and tackle the skills-gap crisis.
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
              <button className="px-6 py-3 bg-[#00d9a6] text-black font-semibold rounded-full  00 transition">
                Download our Report
              </button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#00d9a6] text-black rounded-xl my-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
            <p className="text-lg md:text-xl mb-6">
              We are the leading global provider of technology and talent solutions
            </p>
            <Link href="/Contact" passHref>
              <button className="bg-white text- px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get in touch
              </button>
            </Link>
          </div>
        </section>

      <section className="py-16">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <p className="text-2xl text-[#00d9a6] font-bold">In-depth interviews</p>
      <h2 className="text-3xl font-extrabold mb-2">Podcasts</h2>
      <p className="text-gray-600">
        Hear some amazing Diversity & Inclusion stories and insights from our TechTalks podcast series
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {podcasts.map((podcast) => (
        <div
          key={podcast.id}
          className="bg-gray-50 p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300 h-full"
        >
          {/* Image added */}
          <img
            src={podcast.image}
            alt={podcast.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-bold text-blue-800 mb-3">{podcast.title}</h3>
          <p className="text-sm text-gray-700">{podcast.description}</p>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <button className="bg-[#00d9a6] text-white font-semibold py-2 px-6 rounded transition-all duration-300">
        More Diversity & Inclusion Podcasts
      </button>
    </div>
  </div>
</section>


        
      </main>
      
      <Footer />
    </>
  );
}