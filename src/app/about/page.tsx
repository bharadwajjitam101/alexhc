import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero/Carousel Section */}
      <section className="relative w-full h-[600px] sm:h-[340px] md:h-[420px] flex items-center justify-between">
        <Image
          src="/about-carousel.jpg" // Use your actual carousel image path
          alt="About Carousel"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-8 items-center justify-between h-full">
          {/* Left: Heading, subtitle, button */}
          <div className="flex flex-col justify-center max-w-xl w-full mb-8 md:mb-0 mt-16 md:mt-0">
            <div className="flex items-start mb-4">
              <div className="w-2 h-[60px] sm:h-[90px] bg-[#3376C8] mr-4 rounded" />
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.08]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
                About Us<br />Alex Healthcare System
              </h1>
            </div>
            <p className="text-white text-sm sm:text-base mb-4" style={{fontFamily: 'Arial, sans-serif'}}>
              End-to-end healthcare infrastructure solutions—from hospital construction and modular OTs to MGPS and licensing support. Trusted by hospitals across India for quality, reliability, and innovation.
            </p>
            <Link href="/contact">
              <button className="bg-[#3376C8] text-white font-bold px-5 sm:px-7 py-3 rounded shadow hover:bg-[#2256a0] transition-all text-xs tracking-widest uppercase w-max" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>Get a Free Quote</button>
            </Link>
          </div>
          {/* Right: What We Do */}
          <div className="flex flex-col items-start text-left md:ml-8 w-full md:w-auto max-w-md md:max-w-none -mt-8 md:mt-0">
            <div className="text-[#5B9DED] text-base sm:text-xl font-bold mb-3 sm:mb-4 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>What We Do</div>
            <div className="flex flex-col gap-y-3 sm:gap-y-4 w-full">
              <div className="flex items-start sm:items-center mb-1 sm:mb-2">
                <Image src="/building-constructionb.svg" alt="Building Construction" width={28} height={28} className="object-contain mt-1 sm:mt-0" />
                <div className="flex flex-col justify-center ml-2 sm:ml-3">
                  <div className="text-white font-bold text-sm sm:text-base" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Turnkey Hospital Infrastructure Solutions</div>
                  <div className="text-gray-200 text-xs sm:text-xs mt-0.5" style={{fontFamily: 'Arial, sans-serif'}}>From architecture to licensing—we build hospitals from the ground up.</div>
                </div>
              </div>
              <div className="flex items-start sm:items-center mb-1 sm:mb-2">
                <Image src="/building-repairsb.svg" alt="Building Repairs" width={28} height={28} className="object-contain mt-1 sm:mt-0" />
                <div className="flex flex-col justify-center ml-2 sm:ml-3">
                  <div className="text-white font-bold text-sm sm:text-base" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Expertise in Medical Gas Pipeline & ICU Systems</div>
                  <div className="text-gray-200 text-xs sm:text-xs mt-0.5" style={{fontFamily: 'Arial, sans-serif'}}>Specialized installation of gas systems, ICU setups, and advanced patient care units.</div>
                </div>
              </div>
              <div className="flex items-start sm:items-center">
                <Image src="/custom-designb.svg" alt="Custom Design" width={28} height={28} className="object-contain mt-1 sm:mt-0" />
                <div className="flex flex-col justify-center ml-2 sm:ml-3">
                  <div className="text-white font-bold text-sm sm:text-base" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Modular OT & Healthcare Equipment Supply</div>
                  <div className="text-gray-200 text-xs sm:text-xs mt-0.5" style={{fontFamily: 'Arial, sans-serif'}}>Delivering customized modular operation theatres and supplying essential medical devices.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#232323] text-center mb-2" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>About us</h2>
          <div className="w-10 sm:w-14 h-2 bg-[#3376C8] mb-8 sm:mb-10 mt-2 mx-auto rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="text-[#444] text-sm sm:text-base leading-relaxed" style={{fontFamily: 'Arial, sans-serif'}}>
            Alex Healthcare System is a leading provider of hospital infrastructure and medical equipment solutions in Northeast India. With years of industry experience, we have carved a niche as a trusted partner for turnkey hospital projects, offering everything from hospital construction to ICU and OT setups, medical gas pipeline systems, and essential medical devices.
            </div>
            <div className="text-[#444] text-sm sm:text-base leading-relaxed" style={{fontFamily: 'Arial, sans-serif'}}>
            Our commitment lies in delivering safe, sustainable, and efficient healthcare environments tailored to the evolving needs of modern medicine. We support private hospitals, nursing homes, diagnostic centres, and specialty clinics with premium solutions that meet the highest industry standards.
            </div>
          </div>
        </div>
      </section>

      {/* Only the Best Section */}
      <section className="w-full flex flex-col md:flex-row min-h-[600px]">
        {/* Left: White column with points and button */}
        <div className="w-full md:w-[420px] bg-white flex flex-col justify-start px-4 sm:px-12 pt-10 sm:pt-14 pb-16 sm:pb-24 shadow-lg rounded-lg md:rounded-none">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#232323] mb-6 sm:mb-10 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Only the Best
          </h2>
          {[{
            title: 'Complete Turnkey Expertise',
            desc: 'From hospital design and construction to equipment supply and licensing, we handle everything under one roof—saving you time, cost, and hassle.'
          }, {
            title: 'Healthcare-Centric Innovation',
            desc: 'Our solutions are designed specifically for healthcare, ensuring optimal safety, efficiency, and patient care in every project we deliver.'
          }, {
            title: 'Trusted by Hospitals Across Northeast India',
            desc: 'With a proven track record and deep regional expertise, we are the preferred partner for hospitals aiming to upgrade or build from scratch.'
          }].map((item, idx) => (
            <div className="flex items-start mb-6 sm:mb-10 last:mb-0" key={item.title}>
              <span className="mr-4 sm:mr-6 flex-shrink-0 flex items-center h-full">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 24H40M32 16L40 24L32 32" stroke="#3376C8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 16L24 24L16 32" stroke="#3376C8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <div className="text-base sm:text-lg font-bold mb-1 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>{item.title}</div>
                <div className="text-xs sm:text-sm leading-[1.7] text-[#232323]" style={{fontFamily: 'Arial, sans-serif'}}>{item.desc}</div>
              </div>
            </div>
          ))}
          <Link href="/contact">
            <button className="mt-6 sm:mt-8 border-4 border-black text-[#3376C8] font-bold px-8 sm:px-12 py-3 bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.18)] hover:bg-[#f3f7fd] transition-all text-xs sm:text-base tracking-widest uppercase w-max text-left rounded-lg" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>Free Quote</button>
          </Link>
        </div>
        {/* Right: Image and stats bar */}
        <div className="flex-1 flex flex-col justify-end items-stretch p-0">
          <div className="relative w-full h-[320px] sm:h-[520px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/about-bridge.jpg" alt="Bridge" fill className="object-cover object-center" />
            {/* Stats Bar */}
            <div className="absolute bottom-0 left-0 w-full grid grid-cols-2 h-[70px] sm:h-[100px] md:h-[110px] rounded-b-lg overflow-hidden">
              <div className="flex flex-col items-center justify-center bg-[#3376C8] bg-opacity-95">
                <div className="text-2xl sm:text-5xl font-extrabold text-white drop-shadow-lg" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>12</div>
                <div className="text-xs sm:text-sm uppercase tracking-widest text-white mt-1 font-semibold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Years Established</div>
              </div>
              <div className="flex flex-col items-center justify-center bg-[#232323] bg-opacity-95">
                <div className="text-2xl sm:text-5xl font-extrabold text-white drop-shadow-lg" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>250</div>
                <div className="text-xs sm:text-sm uppercase tracking-widest text-white mt-1 font-semibold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Completed Projects</div>
              </div>
            </div>
          </div>
          {/* Bottom stats - perfectly aligned below the stats bar */}
          <div className="w-full grid grid-cols-2 mt-6 sm:mt-8 px-0 md:px-0">
            <div className="flex flex-col items-center">
              <div className="text-lg sm:text-3xl md:text-4xl font-extrabold text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>24</div>
              <div className="text-xs sm:text-sm uppercase tracking-widest text-[#232323] mt-1 font-semibold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Field Workers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-lg sm:text-3xl md:text-4xl font-extrabold text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>18</div>
              <div className="text-xs sm:text-sm uppercase tracking-widest text-[#232323] mt-1 font-semibold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Office Staff</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-2 sm:px-4 text-center">
          <blockquote className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#232323] mb-6 sm:mb-8" style={{fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: 1.3}}>
            "Our Commitment<br/><br/>
We believe that quality healthcare starts with dependable infrastructure. Our team of engineers, planners, and healthcare consultants work closely with clients to ensure their vision becomes reality.<br/><br/>
Alex Healthcare System is your one-stop destination for building and equipping modern healthcare facilities.<br/><br/>
Ready to bring your hospital vision to life?"
          </blockquote>
          <div className="text-xs text-[#888] tracking-widest uppercase font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Contact us today.</div>
        </div>
      </section>
      
    </div>
  );
} 