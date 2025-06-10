"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import projectsData from '../../public/projects.json';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-center text-white">
        <Image
          src="/hero-bg.jpg" // Placeholder: Replace with actual hero image path
          alt="Alex Healthcare System Hero Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay */}
        <div className="relative z-20 flex flex-col items-center px-2 sm:px-4">
          <div className="w-10 h-1 bg-blue-500 mb-6"></div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Alex Healthcare System</h1>
          <p className="text-base sm:text-lg mb-8 max-w-xl sm:max-w-2xl md:max-w-3xl px-2" style={{fontFamily: 'Arial, sans-serif'}}>Alex Healthcare System is your trusted partner in hospital construction and healthcare infrastructure development. From concept to commissioning, we deliver turnkey solutions tailored for hospitals, clinics, and healthcare facilities across India.</p>
          <button className="bg-[#5B9DED] text-white font-bold px-6 sm:px-10 py-3 rounded shadow hover:bg-[#4a8cdb] transition-all text-xs sm:text-sm tracking-widest uppercase" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
            <Link href="/services">View Our Work</Link>
          </button>
        </div>
      </section>

      {/* Services/Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service Item 1 */}
            <div className="flex items-start space-x-4">
              <Image src="/building-construction.svg" alt="Building Construction Icon" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Hospital Construction</h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>For complete hospital building projects</p>
              </div>
            </div>

            {/* Service Item 2 */}
            <div className="flex items-start space-x-4">
              <Image src="/building-repairs.svg" alt="Building Repairs Icon" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Modular Theatres</h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>For Modular OT setup and surgical spaces</p>
              </div>
            </div>

            {/* Service Item 3 */}
            <div className="flex items-start space-x-4">
              <Image src="/demolition.svg" alt="Demolition Icon" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Gas Systems</h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>For medical gas pipeline installation and plants</p>
              </div>
            </div>

            {/* Service Item 4 */}
            <div className="flex items-start space-x-4">
              <Image src="/foundation.svg" alt="Foundation Icon" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Critical Care</h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>For ICU setup and monitoring infrastructure</p>
              </div>
            </div>

            {/* Service Item 5 */}
            <div className="flex items-start space-x-4">
              <Image src="/painting-exterior.svg" alt="Painting & Exterior Icon" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Medical Equipment</h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>For hospital furniture and surgical goods</p>
              </div>
            </div>

            {/* Service Item 6 */}
            <div className="flex items-start space-x-4">
              <Image src="/site-management.svg" alt="Site Management Icon" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Compliance Support</h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>For hospital licensing and regulatory services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="w-full flex flex-col md:flex-row h-auto md:h-[550px]">
        {/* Left: Blue section with points */}
        <div className="w-full md:w-1/3 bg-[#5B9DED] flex flex-col h-auto md:h-full justify-center py-10 md:py-0">
          <div className="flex flex-col gap-y-8 sm:gap-y-12 w-full max-w-[95%] mx-auto mt-0">
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
              <div className="flex items-start self-start" key={item.title}>
                <span className="mr-4 flex-shrink-0 flex items-center mt-1">
                  <svg width="40" height="40" viewBox="10 10 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 28H46M36 18L46 28L36 38" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 18L30 28L20 38" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="pl-1">
                  <div className="text-base sm:text-[1.1rem] font-bold mb-3 sm:mb-5 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>{item.title}</div>
                  <div className="text-sm sm:text-[0.95rem] leading-[1.5] mr-2 sm:mr-10 text-[#232323]" style={{fontFamily: 'Arial, sans-serif'}}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: White section with title and two columns of text */}
        <div className="w-full md:w-2/3 bg-white flex flex-col justify-start px-4 sm:px-8 md:px-16 h-auto md:h-full pt-10 md:pt-20 pb-10 md:pb-0">
          <div className="text-[#232323] text-xl sm:text-2xl md:text-[1.7rem] font-extrabold mb-2" style={{fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: 1.1}}>No Project Too Big Or Too Small</div>
          <div className="w-12 h-1.5 bg-[#3376C8] mb-4 rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-2">
            <div className="text-[#444] text-sm sm:text-base md:text-[0.98rem] leading-[1.5]" style={{fontFamily: 'Arial, sans-serif'}}>
            At Alex Healthcare System, we take pride in transforming visions into reality by delivering end-to-end healthcare infrastructure solutions. Our diverse portfolio spans across Northeast India, where we've successfully completed projects ranging from modular OTs, ICU setups, and medical gas pipeline systems to full-fledged hospital constructions from the ground up. Every project is a testament to our commitment to quality, precision, and healthcare excellence.
            </div>
            <div className="text-[#444] text-sm sm:text-base md:text-[0.98rem] leading-[1.5]" style={{fontFamily: 'Arial, sans-serif'}}>
            We have partnered with hospitals of all sizes—70 to 100+ bedded capacities—to build patient-centric environments equipped with advanced medical technology and sustainable infrastructure. Whether it's installing critical systems like oxygen and vacuum pipelines or setting up specialized OT components, we bring deep expertise and meticulous execution to every detail. Our projects speak of trust, reliability, and our unwavering mission to elevate healthcare standards.
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Bar */}
      <section className="w-full flex flex-col sm:flex-row h-auto sm:h-[100px]">
        {/* Left: Blue bar */}
        <div className="bg-[#5B9DED] w-full sm:w-1/3 h-[60px] sm:h-full"></div>
        {/* Right: Black bar with text and button */}
        <div className="bg-[#262626] w-full sm:w-2/3 h-[100px] sm:h-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-12 py-2 sm:py-0">
          <span className="text-white text-lg sm:text-[1.7rem] font-extrabold mb-2 sm:mb-0" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Get Free Consultation</span>
          <button className="border-4 border-blue text-[#5B9DED] font-bold px-6 sm:px-10 py-2 sm:py-3 bg-transparent shadow-[0_6px_16px_0_rgba(0,0,0,0.18)] text-xs sm:text-base tracking-widest uppercase cursor-pointer transition-all duration-200 hover:bg-[#5B9DED] hover:text-white hover:border-[#5B9DED] focus:outline-none focus:ring-2 focus:ring-[#5B9DED] focus:ring-offset-2" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
            <Link href="/contact">Online Estimate Form</Link>
          </button>
        </div>
      </section>

      {/* Building Experience Section */}
      <section className="relative w-full h-[350px] sm:h-[500px] md:h-[650px] flex items-center justify-center text-center">
          <Image
          src="/building-bg.jpg" // Replace with your actual image path
          alt="Building Experience Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay */}
        <div className="relative z-20 flex flex-col items-center w-full px-2 sm:px-4">
          <div className="w-14 h-2 bg-[#3376C8] mb-6 sm:mb-8 mt-2 mx-auto rounded"></div>
          <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-8" style={{fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: 1.1}}>
            We've Been Building For<br />Over 20 years
          </h2>
          <p className="text-gray-200 text-base sm:text-2xl mb-6 sm:mb-10 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto" style={{fontFamily: 'Arial, sans-serif'}}>Built on experience and excellence, our projects reflect the reliability that healthcare providers count on year after year..</p>
          <button className="bg-[#5B9DED] text-white font-bold px-6 sm:px-10 py-2 sm:py-3 rounded shadow hover:bg-[#3376C8] transition-all text-xs sm:text-base tracking-widest uppercase" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
            <Link href="/about">About Us</Link>
          </button>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="w-full bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#232323] text-center mb-2" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Latest Projects
          </h2>
          <div className="w-8 sm:w-10 h-1 bg-[#3376C8] mb-8 sm:mb-10 mt-2 mx-auto rounded"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-10 sm:gap-y-14 justify-center mb-8 sm:mb-12">
            {projectsData.slice(0,3).map((proj) => (
              <div key={proj.id} className="bg-white border border-gray-300 flex flex-col w-full max-w-xs mx-auto">
                <div className="w-full h-[120px] sm:h-[140px] relative">
                  <Image src={proj.heroImg} alt={proj.title} fill className="object-cover object-center" />
                </div>
                <div className="flex flex-col px-4 sm:px-6 py-6 flex-1">
                  <div className="text-base sm:text-[1rem] font-bold mb-2 text-[#232323] text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>{proj.title}</div>
                  <div className="text-sm sm:text-[0.95rem] text-gray-600 mb-4 sm:mb-6 text-left leading-[1.6]" style={{fontFamily: 'Arial, sans-serif'}}>{proj.about.desc}</div>
                  <Link href={`/projects/${proj.id}`}>
                    <button className="border border-gray-400 text-[#232323] font-bold px-4 sm:px-5 py-2 bg-white hover:bg-gray-100 transition-all text-xs tracking-widest uppercase mt-auto" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="border-2 border-black text-[#232323] font-bold px-8 sm:px-10 py-2 bg-white text-xs tracking-widest uppercase shadow-[4px_4px_0_0_rgba(0,0,0,0.18)]" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
              <Link href="/projects">View All</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-12 sm:py-20 md:py-24 pb-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#232323] text-center mb-2" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Client Testimonials</h2>
          <div className="w-14 h-2 bg-[#3376C8] mb-8 sm:mb-14 mt-2 mx-auto rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 mb-10 sm:mb-16">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-6 sm:p-8 flex flex-col items-center">
                {/* Stars */}
                <div className="flex mb-4 sm:mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} width="24" height="24" viewBox="0 0 24 24" fill="#3376C8" className="mx-0.5">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[#555] text-sm sm:text-base text-center mb-4 sm:mb-8" style={{fontFamily: 'Arial, sans-serif'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam."</p>
                <div className="w-full text-left font-bold text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>John Smith</div>
              </div>
            ))}
          </div>
          {/* Client Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-y-6 sm:gap-y-10 gap-x-6 sm:gap-x-12 items-center justify-items-center opacity-70 grayscale mt-6 sm:mt-8">
            <Image src="/logos/gabo.png" alt="GABO Logo" width={100} height={40} className="h-8 sm:h-12 w-auto object-contain" />
            <Image src="/logos/crosswill.png" alt="CROSSWILL Logo" width={100} height={40} className="h-8 sm:h-12 w-auto object-contain" />
            <Image src="/logos/itch.png" alt="ITCH Logo" width={100} height={40} className="h-8 sm:h-12 w-auto object-contain" />
            <Image src="/logos/jobline.png" alt="Job Line Logo" width={100} height={40} className="h-8 sm:h-12 w-auto object-contain" />
            <Image src="/logos/loudnick.png" alt="LOUDNICK Logo" width={100} height={40} className="h-8 sm:h-12 w-auto object-contain" />
            <Image src="/logos/realwave.png" alt="Real Wave Logo" width={100} height={40} className="h-8 sm:h-12 w-auto object-contain" />
            <Image src="/logos/inner.png" alt="INNER Logo" width={100} height={40} className="h-8 sm:h-12 w-auto object-contain" />
            <Image src="/logos/wire.png" alt="Wire Logo" width={100} height={40} className="h-8 sm:h-12 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Let's Build Something Together Section (with FAQ) */}
      {(() => {
        const faqs = [
          {
            question: "1. What services does Alex Healthcare System provide?",
            answer:
              "We offer turnkey hospital construction, medical gas pipeline systems, modular OT & ICU setups, hospital furniture, surgical equipment, licensing support, and hospital architectural design.",
          },
          {
            question: "2. Do you provide end-to-end hospital project execution?",
            answer:
              "Yes, we specialize in complete project management—from planning and design to construction, equipment installation, and regulatory compliance.",
          },
          {
            question: "3. Where do you operate?",
            answer:
              "Our primary operations are based in Northeast India, with a growing presence across multiple states.",
          },
          {
            question: "4. Are your products certified and compliant?",
            answer:
              "Yes, all our medical devices and infrastructure solutions comply with industry standards and are sourced from certified manufacturers.",
          },
          {
            question: "5. How do I get started with a project?",
            answer:
              "You can reach us via our contact form, phone, or email. Our team will guide you through a consultation and project evaluation process.",
          }
        ];
        const [openIndex, setOpenIndex] = React.useState(0);
        return (
          <section className="w-full flex flex-col lg:flex-row justify-center items-stretch py-12 sm:py-20 bg-[#FAFAFA]">
            {/* Left: Heading, text, button */}
            <div className="flex flex-col justify-center items-start w-full lg:w-[40%] max-w-xl px-4 sm:px-10 md:px-16 py-8 lg:py-0 mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 text-[#232323] text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: 1.1}}>
                Let's Build<br />the Future of Healthcare<br />Together
              </h2>
              <div className="w-10 h-1 bg-[#E6E6E6] mb-6"></div>
              <p className="text-[#888] text-base sm:text-lg mb-10 max-w-md text-left" style={{fontFamily: 'Arial, sans-serif'}}>
              Whether you're planning a new hospital or upgrading your current facility, we’re here to help.
              </p>
              <button className="bg-white border-2 border-[#BFD8F6] text-[#3376C8] font-bold px-8 py-4 text-base rounded shadow-md hover:bg-[#F3F7FD] transition-all tracking-widest uppercase" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em', boxShadow: '4px 8px 16px 0 rgba(0,0,0,0.08)'}}>
                <Link href="/contact">Get In Touch</Link>
              </button>
            </div>
            {/* Right: FAQ/Accordion */}
            <div className="flex-1 bg-white rounded-lg shadow-lg px-4 sm:px-10 md:px-16 py-8 flex flex-col justify-center max-w-2xl w-full mx-auto lg:mx-0 mt-10 lg:mt-0">
              {faqs.map((faq, idx) => (
                <div key={idx} className={"border-b border-gray-200 " + (idx === 0 ? "pt-0" : "pt-2") + (idx === faqs.length - 1 ? " border-b-0" : "") }>
                  <button
                    className={`w-full text-left font-extrabold text-lg sm:text-xl py-5 text-[#232323] focus:outline-none flex justify-between items-center`}
                    style={{ fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: '1.2' }}
                    onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                    aria-expanded={openIndex === idx}
                  >
                    {faq.question}
                    <span className="ml-2 text-gray-400 text-2xl">{openIndex === idx ? '-' : '+'}</span>
                  </button>
                  {openIndex === idx && (
                    <div className="text-gray-500 text-base sm:text-lg leading-relaxed pb-5 pl-1 pr-2" style={{ fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: '1.6' }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })()}

    </div>
  );
}
