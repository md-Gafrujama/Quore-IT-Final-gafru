import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
const ChampionArticlePage = () => {
  const champions = [
    {
      id: 1,
      name: "Lord Anderson of Ipswich",
       title: "We need the technical understanding to create a legal and ethical framework for technological change",
      image: "/images/par25.webp",
      link: "lord-anderson-of-ipswich"
    },
    {
      id: 2,
      name: "Robert Halfon MP",
       title: "T Levels are more than just qualifications; they are the catalysts for bridging the skills gap in our economy",
      image: "/images/par13.webp",
      link: "robert-halfon-mp"
    },
    {
      id: 3,
      name: "Lisa Cameron MP",
       title: "As digital skills become increasingly important, we must ensure that our citizens have the tools to keep up",
      image: "/images/par10.webp",
      link: "lisa-cameron-mp"
    }
  ];

  return (
    <> 
    <Navbar/>
    <div className="bg-gray-50 mt-20 min-h-screen">
      {/* Main Article Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Sidebar - Author Info */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              {/* Author Image */}
              <div className="relative w-32 h-40 mx-auto mb-6 bg-gray-200 rounded overflow-hidden">
                <Image
                  src="/images/par1.jpg"
                  alt="Baroness Smith of Llanfaes"
                  fill
                  className="object-cover object-center"
                  sizes="128px"
                />
              </div>
              
              {/* Author Details */}
              <div className="text-center mb-6">
                <h3 className="text-red-500 font-semibold text-sm mb-2">Author</h3>
                <p className="text-gray-900 font-medium text-base mb-1">Baroness Smith</p>
                <p className="text-gray-900 text-base">of Llanfaes</p>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-red-500 font-semibold text-sm mb-2">Job Title</h3>
                <p className="text-gray-900 text-base leading-relaxed">
                  Plaid Cymru Peer in the House of Lords
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-red-500 font-semibold text-sm mb-2">Article Published on</h3>
                <p className="text-gray-900 text-base">April 25</p>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Header */}
            <div className="mb-8">
              <p className="text-red-500 text-sm font-medium uppercase tracking-wide mb-4">
                PARLIAMENTARY TECH CHAMPION
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Women and girls deserve the chance to thrive and become leaders in STEM, 
                it is our responsibility to make sure that they have the tools and support 
                they need to do so
              </h1>
              <div className="w-16 h-1 bg-red-500 mb-8"></div>
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                This year's International Women's Day was a fantastic opportunity to celebrate the 
                achievements of women, and I was delighted to participate in the House of Lords debate 
                marking the occasion last month. Focusing on steps being taken to promote women's 
                participation and leadership in science and technology, the debate highlighted the vast 
                contributions being made by women and girls in these fields – but also the large amount 
                of work that must still be done to achieve gender parity.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                With the talent held across the globe, the UK must be a leader in accelerating action to 
                achieve women's equality, allowing this talent to truly flourish. At present, this acceleration 
                is simply not happening fast enough, particularly regarding the role that STEM plays in 
                improving women's lives. The Government must take more informed decisions that do not 
                undermine global efforts to promote the technology that empowers women to make 
                informed choices and become leaders in cutting edge fields such as STEM.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                As a Welsh woman, I am extremely proud of the mark that my compatriots have made 
                across the globe. Five years after the First World War, a group of courageous women in 
                Wales embarked on a campaign for peace that would become a symbol of hope and 
                unity. The Welsh women's peace petition, which began its journey in 1923, was the 
                brainchild of a group of determined women. This petition spanned seven miles in length. It 
                was signed by 390,296 Welsh women and carried across the Atlantic to the United States in 
                an oak chest by four remarkable women: Annie Hughes-Griffiths, Mary Ellis, Elined Prys and 
                Gladys Thomas. Among those signatories was my great-great-grandmother, who was 
                from Neath Port Talbot. It is remarkable to think that, in 2023, 100 years after it was first 
                signed, this petition returned to Wales and was digitised for the world to see at the 
                National Library of Wales.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Welsh women hold a long and distinguished record of engaging on important global 
                causes, and the promotion of women's participation and leadership in science and 
                technology is no different. This is a truly global issue, and its importance cannot be 
                downplayed. Amidst the significant recent boost to the defence budget, we learned that 
                the international aid budget is set to be reduced by £6 billion a year. This is a troubling shift 
                –one that disproportionately affects women and girls around the world.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We must carefully consider the impact these cuts will have on some of the most pressing 
                challenges that women face globally, including in sexual and reproductive health and 
                rights. When we discuss the rights of women and girls, particularly their sexual and 
                reproductive health, we cannot ignore the role that STEM has played in improving women's 
                lives. Innovations in these fields have allowed for advances that not only benefit women's 
                health but provide greater autonomy, allowing women to make informed choices about 
                their reproductive health. The development of contraceptive methods, fertility treatments 
                and safe childbirth procedures has given women more control over their reproductive 
                choices and their futures.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Despite these remarkable advancements, significant challenges remain in many low-
                income and rural areas across the globe. Access to sexual and reproductive health services 
                is still limited. Cultural stigmas continue to hinder open discussions, and gender disparities 
                in STEM fields restrict the contributions of women in reproductive health research and 
                innovation. To overcome these barriers, we must invest in STEM education for young girls 
                and women, ensuring that their voices and perspectives are represented in the research 
                and innovations that shape reproductive health policies. STEM has already transformed 
                sexual and reproductive health, making it safer, more effective and more accessible. It has 
                given women greater autonomy and allowed for the development of life-saving 
                medications. We must continue to harness this power of STEM to alleviate poverty and 
                contribute to economic and social development globally.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                As we see the cuts to the UK's overseas development assistance budget, I urge the 
                Government to recognise that investing in sexual and reproductive health and rights is not 
                only morally imperative but highly cost effective. Research in these areas has the potential 
                to yield substantial returns—£100 for every pound invested. The ring-fencing of sexual and 
                reproductive health and rights funding within the aid budget must be seriously considered; 
                women and girls across the globe deserve the chance to thrive and become leaders in 
                STEM, it is our responsibility to make sure that they have the tools and support they need to 
                do so.
              </p>
            </div>
            
            {/* About the Author Section */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About the author</h2>
              <div className="w-16 h-1 bg-red-500 mb-6"></div>
              <p className="text-gray-700 text-lg">
                Baroness Smith of Llanfaes is a Plaid Cymru Peer in the House of Lords.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* More Parliamentary Tech Champions Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              More Parliamentary Tech Champions
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Each month we invite a leading member of the UK's parliament to share their thoughts on technology 
              and innovation in the UK.
            </p>
          </div>
          
          {/* Champions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {champions.map((champion) => (
            <div 
              key={champion.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-80 sm:h-96 lg:h-[28rem] bg-gray-200 overflow-hidden">
                <Image
                  src={champion.image}
                  alt={champion.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Name */}
                <h3 className="text-lg font-semibold text-red-500 mb-4">
                  {champion.name}
                </h3>
                
                {/* Title/Quote - Clickable */}
                <div className="flex-1">
                  <Link href={champion.link}>
                    <p className="text-blue-600 hover:text-blue-800 transition-colors duration-200 cursor-pointer text-base sm:text-lg font-medium leading-relaxed">
                      {champion.title}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      
    
    </div>
    <Footer/>
    </>
  );
};

export default ChampionArticlePage;