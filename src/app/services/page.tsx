import Image from "next/image";
import Link from "next/link";
import projectsData from '../../../public/projects.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Services - Hospital Construction & Healthcare Infrastructure",
  description: "Comprehensive hospital consultancy and infrastructure development services. From hospital construction and modular OT setup to medical gas pipeline systems and compliance support across Northeast India.",
  keywords: [
    "hospital consultancy services",
    "hospital construction services",
    "modular OT setup",
    "medical gas pipeline installation",
    "ICU setup services",
    "hospital infrastructure development",
    "healthcare facility planning",
    "hospital licensing support",
    "medical equipment supply",
    "turnkey hospital solutions"
  ],
  openGraph: {
    title: "Our Services - Hospital Construction & Healthcare Infrastructure",
    description: "Comprehensive hospital consultancy and infrastructure development services. From hospital construction and modular OT setup to medical gas pipeline systems and compliance support.",
    url: "https://www.alexhealthcaresystem.com/services",
    siteName: "Alex Healthcare System",
    images: [
      {
        url: "/servicess-carousel.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Healthcare System Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Hospital Construction & Healthcare Infrastructure",
    description: "Comprehensive hospital consultancy and infrastructure development services across Northeast India.",
    images: ["/servicess-carousel.jpg"],
  },
  alternates: {
    canonical: "https://www.alexhealthcaresystem.com/services",
  },
};

export default function Services() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero/Carousel Section */}
      <section className="relative w-full h-[600px] sm:h-[340px] md:h-[420px] flex items-center justify-between">
        <Image
          src="/servicess-carousel.jpg"
          alt="Services Carousel"
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
                Alex Healthcare System - Our Services
              </h1>
            </div>
            <p className="text-white text-sm sm:text-base mb-4" style={{fontFamily: 'Arial, sans-serif'}}>
              At Alex Healthcare System, we specialize in comprehensive Hospital Consultancy and Infrastructure Development. Our service verticals span across every stage of a healthcare facility's lifecycle — from ideation and design to execution and post-construction optimization. Below is a detailed overview of our core services:
            </p>
            <button className="bg-[#3376C8] text-white font-bold px-5 sm:px-7 py-3 rounded shadow hover:bg-[#2256a0] transition-all text-xs tracking-widest uppercase w-max" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>Get a Free Quote</button>
          </div>
          {/* Right: What We Do */}
          <div className="flex flex-col items-start text-left md:ml-8 w-full md:w-auto max-w-md md:max-w-none -mt-8 md:mt-0">
            <div className="text-[#ffffff] text-base sm:text-xl font-bold mb-3 sm:mb-4 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>What We Do</div>
            <div className="flex flex-col gap-y-3 sm:gap-y-4 w-full">
              <div className="flex items-start sm:items-center mb-1 sm:mb-2">
                <Image src="/building-constructionw.svg" alt="Building Construction" width={28} height={28} className="object-contain mt-1 sm:mt-0" />
                <div className="flex flex-col justify-center ml-2 sm:ml-3">
                  <div className="text-white font-bold text-sm sm:text-base" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Turnkey Hospital Infrastructure Solutions</div>
                  <div className="text-gray-200 text-xs sm:text-xs mt-0.5" style={{fontFamily: 'Arial, sans-serif'}}>From architecture to licensing—we build hospitals from the ground up.</div>
                </div>
              </div>
              <div className="flex items-start sm:items-center mb-1 sm:mb-2">
                <Image src="/building-repairsw.svg" alt="Building Repairs" width={28} height={28} className="object-contain mt-1 sm:mt-0" />
                <div className="flex flex-col justify-center ml-2 sm:ml-3">
                  <div className="text-white font-bold text-sm sm:text-base" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Expertise in Medical Gas Pipeline & ICU Systems</div>
                  <div className="text-gray-200 text-xs sm:text-xs mt-0.5" style={{fontFamily: 'Arial, sans-serif'}}>Specialized installation of gas systems, ICU setups, and advanced patient care units.</div>
                </div>
              </div>
              <div className="flex items-start sm:items-center">
                <Image src="/custom-designw.svg" alt="Custom Design" width={28} height={28} className="object-contain mt-1 sm:mt-0" />
                <div className="flex flex-col justify-center ml-2 sm:ml-3">
                  <div className="text-white font-bold text-sm sm:text-base" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Modular OT & Healthcare Equipment Supply</div>
                  <div className="text-gray-200 text-xs sm:text-xs mt-0.5" style={{fontFamily: 'Arial, sans-serif'}}>Delivering customized modular operation theatres and supplying essential medical devices.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get a Quote Bar */}
      <section className="w-full bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07)] border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between py-7 gap-6 md:gap-56">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#232323] whitespace-nowrap mb-4 md:mb-0" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Get a Quote For Your Project
          </h2>
          <button className="border-4 border-black text-[#3376C8] font-bold px-8 sm:px-14 py-3 bg-white text-xs tracking-widest uppercase shadow-[6px_6px_0_0_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-[#f3f7fd] hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.18)] cursor-pointer" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
            <Link href="/contact">Free Quote</Link>
          </button>
        </div>
      </section>

      {/* Hospital Construction */}
      <section className="w-full py-10 flex flex-col md:flex-row justify-center items-stretch md:items-stretch gap-8">
        <div className="w-full md:w-[380px] flex-shrink-0 mb-8 md:mb-0">
          <img src="/hospital-construction-main.jpg" alt="Building Construction Main" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="bg-[#F8F8F8] max-w-3xl w-full px-4 sm:px-10 pt-10 pb-0 shadow-none flex flex-col items-start">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#232323] mb-2 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Hospital Consultancy Services
          </h3>
          <div className="w-12 sm:w-16 h-1 bg-[#3376C8] mb-6 mt-1 rounded" />
          <p className="text-[#232323] text-sm mb-6 max-w-3xl text-left" style={{fontFamily: 'Arial, sans-serif'}}>
            We guide hospitals from concept to commissioning with expert consultancy tailored to individual project needs.<br/><br/>Key Services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-[#232323] text-sm text-left w-full" style={{fontFamily: 'Arial, sans-serif'}}>
          <ul className="list-disc list-inside space-y-1 whitespace-nowrap">
          <li>Initial Planning & Feasibility Studies</li>
          <li>Site Selection & Regulatory Approvals</li>
          <li>Budgeting & Financial Planning</li>
          <li>Needs Assessment (bed capacity, services, etc.)</li>
          <li>Strategic Planning and Market Positioning</li>
          </ul>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-[#232323] w-full h-[56px] sm:h-[72px] flex items-center justify-center mt-0">
              <button className="border-2 border-white text-white font-bold px-8 sm:px-12 py-3 bg-[#232323] hover:bg-black transition-all text-xs tracking-widest uppercase shadow-[4px_4px_0_0_rgba(0,0,0,0.18)]" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                <Link href="/contact">Get a Quote</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Planning & Architecture Section */}
      <section className="w-full py-10 flex flex-col-reverse md:flex-row justify-center items-stretch md:items-stretch gap-8">
        <div className="bg-white max-w-3xl w-full px-4 sm:px-10 pt-10 pb-0 shadow-none flex flex-col items-start">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#232323] mb-2 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Facility Planning & Architecture
          </h3>
          <div className="w-12 sm:w-16 h-1 bg-[#3376C8] mb-6 mt-1 rounded" />
          <p className="text-[#232323] text-sm mb-6 max-w-3xl text-left" style={{fontFamily: 'Arial, sans-serif'}}>
            We provide specialized healthcare architecture and design solutions to ensure seamless functionality and patient comfort.<br/><br/>Key Services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-[#232323] text-sm text-left w-full" style={{fontFamily: 'Arial, sans-serif'}}>
            <ul className="list-disc list-inside space-y-1 whitespace-nowrap">
              <li>Department-wise Layout Design (ICUs, OTs, ERs, etc.)</li>
              <li>Sustainable & Green Hospital Design</li>
              <li>Technology Integration (Smart Hospital Features)</li>
              <li>Aesthetic Enhancements & Patient-Centric Design</li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-[#232323] w-full h-[56px] sm:h-[72px] flex items-center justify-center mt-0">
              <button className="border-2 border-white text-white font-bold px-8 sm:px-12 py-3 bg-[#232323] hover:bg-black transition-all text-xs tracking-widest uppercase shadow-[4px_4px_0_0_rgba(0,0,0,0.18)]" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                <Link href="/contact">Get a Quote</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[380px] flex-shrink-0 mt-8 md:mt-0">
          <img src="/Facility Planning & Architecture.jpg" alt="Facility Planning Main" className="w-full h-full object-cover rounded-lg" />
        </div>
      </section>

      {/* Hospital Construction & Turnkey Execution Section */}
      <section className="w-full py-10 flex flex-col md:flex-row justify-center items-stretch md:items-stretch gap-8">
        <div className="w-full md:w-[380px] flex-shrink-0 mb-8 md:mb-0">
          <img src="/Hospital Construction & Turnkey Execution.jpg" alt="Turnkey Execution Main" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="bg-[#F8F8F8] max-w-3xl w-full px-4 sm:px-10 pt-10 pb-0 shadow-none flex flex-col items-start">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#232323] mb-2 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Hospital Construction & Turnkey Execution
          </h3>
          <div className="w-12 sm:w-16 h-1 bg-[#3376C8] mb-6 mt-1 rounded" />
          <p className="text-[#232323] text-sm mb-6 max-w-3xl text-left" style={{fontFamily: 'Arial, sans-serif'}}>
            From the ground up, we execute full-scale hospital construction projects with precision, ensuring timely delivery and quality.<br/><br/>Key Services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-[#232323] text-sm text-left w-full" style={{fontFamily: 'Arial, sans-serif'}}>
            <ul className="list-disc list-inside space-y-1 whitespace-nowrap">
              <li>Civil and Structural Engineering</li>
              <li>Project Management & Safety Compliance</li>
              <li>Material Sourcing & Technology Deployment</li>
              <li>Timeline Monitoring & Phase Execution</li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-[#232323] w-full h-[56px] sm:h-[72px] flex items-center justify-center mt-0">
              <button className="border-2 border-white text-white font-bold px-8 sm:px-12 py-3 bg-[#232323] hover:bg-black transition-all text-xs tracking-widest uppercase shadow-[4px_4px_0_0_rgba(0,0,0,0.18)]" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                <Link href="/contact">Get a Quote</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering & Infrastructure Systems Section */}
      <section className="w-full py-10 flex flex-col-reverse md:flex-row justify-center items-stretch md:items-stretch gap-8">
        <div className="bg-white max-w-3xl w-full px-4 sm:px-10 pt-10 pb-0 shadow-none flex flex-col items-start">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#232323] mb-2 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Engineering & Infrastructure Systems
          </h3>
          <div className="w-12 sm:w-16 h-1 bg-[#3376C8] mb-6 mt-1 rounded" />
          <p className="text-[#232323] text-sm mb-6 max-w-3xl text-left" style={{fontFamily: 'Arial, sans-serif'}}>
            We handle the complete technical backbone of hospitals, ensuring performance, safety, and compliance.<br/><br/>Key Services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-[#232323] text-sm text-left w-full" style={{fontFamily: 'Arial, sans-serif'}}>
            <ul className="list-disc list-inside space-y-1 whitespace-nowrap">
              <li>HVAC Systems and Air Quality Management</li>
              <li>Electrical and Backup Power Systems</li>
              <li>Plumbing and Medical Gas Pipelines</li>
              <li>IT Infrastructure and Data Systems</li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-[#232323] w-full h-[56px] sm:h-[72px] flex items-center justify-center mt-0">
              <button className="border-2 border-white text-white font-bold px-8 sm:px-12 py-3 bg-[#232323] hover:bg-black transition-all text-xs tracking-widest uppercase shadow-[4px_4px_0_0_rgba(0,0,0,0.18)]" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                <Link href="/contact">Get a Quote</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[380px] flex-shrink-0 mt-8 md:mt-0">
          <img src="/Engineering & Infrastructure Systems.jpg" alt="Engineering Infrastructure Main" className="w-full h-full object-cover rounded-lg" />
        </div>
      </section>

      {/* Operational & Strategic Consulting Section */}
      <section className="w-full py-10 flex flex-col md:flex-row justify-center items-stretch md:items-stretch gap-8">
        <div className="w-full md:w-[380px] flex-shrink-0 mb-8 md:mb-0">
          <img src="/Operational & Strategic Consulting.jpg" alt="Operational Consulting Main" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="bg-[#F8F8F8] max-w-3xl w-full px-4 sm:px-10 pt-10 pb-0 shadow-none flex flex-col items-start">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#232323] mb-2 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Operational & Strategic Consulting
          </h3>
          <div className="w-12 sm:w-16 h-1 bg-[#3376C8] mb-6 mt-1 rounded" />
          <p className="text-[#232323] text-sm mb-6 max-w-3xl text-left" style={{fontFamily: 'Arial, sans-serif'}}>
            We help hospitals run efficiently by optimizing every aspect of operations and planning.<br/><br/>Key Services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-[#232323] text-sm text-left w-full" style={{fontFamily: 'Arial, sans-serif'}}>
            <ul className="list-disc list-inside space-y-1 whitespace-nowrap">
              <li>Operational Efficiency & Workflow Design</li>
              <li>Human Resources Planning & Staff Development</li>
              <li>Financial Management & Revenue Cycle Strategy</li>
              <li>Quality Improvement & Accreditation Support (NABH, etc.)</li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-[#232323] w-full h-[56px] sm:h-[72px] flex items-center justify-center mt-0">
              <button className="border-2 border-white text-white font-bold px-8 sm:px-12 py-3 bg-[#232323] hover:bg-black transition-all text-xs tracking-widest uppercase shadow-[4px_4px_0_0_rgba(0,0,0,0.18)]" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                <Link href="/contact">Get a Quote</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Equipment Planning & Procurement Section */}
      <section className="w-full py-10 flex flex-col-reverse md:flex-row justify-center items-stretch md:items-stretch gap-8">
        <div className="bg-white max-w-3xl w-full px-4 sm:px-10 pt-10 pb-0 shadow-none flex flex-col items-start">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#232323] mb-2 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Medical Equipment Planning & Procurement
          </h3>
          <div className="w-12 sm:w-16 h-1 bg-[#3376C8] mb-6 mt-1 rounded" />
          <p className="text-[#232323] text-sm mb-6 max-w-3xl text-left" style={{fontFamily: 'Arial, sans-serif'}}>
            We offer full support in selecting, sourcing, and integrating hospital equipment tailored to functional requirements.<br/><br/>Key Services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-[#232323] text-sm text-left w-full" style={{fontFamily: 'Arial, sans-serif'}}>
            <ul className="list-disc list-inside space-y-1 whitespace-nowrap">
              <li>ICU & OT Equipment</li>
              <li>Patient Beds, Furniture, and Fixtures</li>
              <li>Surgical Instruments & Monitoring Systems</li>
              <li>Equipment Layout, Installation, and Testing</li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-[#232323] w-full h-[56px] sm:h-[72px] flex items-center justify-center mt-0">
              <button className="border-2 border-white text-white font-bold px-8 sm:px-12 py-3 bg-[#232323] hover:bg-black transition-all text-xs tracking-widest uppercase shadow-[4px_4px_0_0_rgba(0,0,0,0.18)]" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                <Link href="/contact">Get a Quote</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[380px] flex-shrink-0 mt-8 md:mt-0">
          <img src="/Medical Equipment Planning & Procurement.webp" alt="Equipment Planning Main" className="w-full h-full object-cover rounded-lg" />
        </div>
      </section>

      {/* Technology & Digital Transformation Section */}
      <section className="w-full py-10 flex flex-col md:flex-row justify-center items-stretch md:items-stretch gap-8">
        <div className="w-full md:w-[380px] flex-shrink-0 mb-8 md:mb-0">
          <img src="/Technology & Digital Transformation.jpg" alt="Digital Transformation Main" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="bg-[#F8F8F8] max-w-3xl w-full px-4 sm:px-10 pt-10 pb-0 shadow-none flex flex-col items-start">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#232323] mb-2 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Technology & Digital Transformation
          </h3>
          <div className="w-12 sm:w-16 h-1 bg-[#3376C8] mb-6 mt-1 rounded" />
          <p className="text-[#232323] text-sm mb-6 max-w-3xl text-left" style={{fontFamily: 'Arial, sans-serif'}}>
            We guide digital adoption in healthcare facilities to modernize operations and improve patient outcomes.<br/><br/>Key Services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-[#232323] text-sm text-left w-full" style={{fontFamily: 'Arial, sans-serif'}}>
            <ul className="list-disc list-inside space-y-1 whitespace-nowrap">
              <li>Hospital Information System (HIS) Deployment</li>
              <li>Electronic Health Records (EHR) Setup</li>
              <li>Telemedicine and Patient Portals</li>
              <li>Digital Monitoring and Automation Systems</li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-[#232323] w-full h-[56px] sm:h-[72px] flex items-center justify-center mt-0">
              <button className="border-2 border-white text-white font-bold px-8 sm:px-12 py-3 bg-[#232323] hover:bg-black transition-all text-xs tracking-widest uppercase shadow-[4px_4px_0_0_rgba(0,0,0,0.18)]" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                <Link href="/contact">Get a Quote</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing & Patient Engagement Section */}
      <section className="w-full py-10 flex flex-col-reverse md:flex-row justify-center items-stretch md:items-stretch gap-8">
        <div className="bg-white max-w-3xl w-full px-4 sm:px-10 pt-10 pb-0 shadow-none flex flex-col items-start">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#232323] mb-2 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Marketing & Patient Engagement
          </h3>
          <div className="w-12 sm:w-16 h-1 bg-[#3376C8] mb-6 mt-1 rounded" />
          <p className="text-[#232323] text-sm mb-6 max-w-3xl text-left" style={{fontFamily: 'Arial, sans-serif'}}>
            Helping hospitals build trust and attract patients through strategic branding and outreach.<br/><br/>Key Services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-[#232323] text-sm text-left w-full" style={{fontFamily: 'Arial, sans-serif'}}>
            <ul className="list-disc list-inside space-y-1 whitespace-nowrap">
              <li>Marketing Strategy & Branding Support</li>
              <li>Digital Presence and Awareness Campaigns</li>
              <li>Patient Engagement Tools & Feedback Systems</li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-[#232323] w-full h-[56px] sm:h-[72px] flex items-center justify-center mt-0">
              <button className="border-2 border-white text-white font-bold px-8 sm:px-12 py-3 bg-[#232323] hover:bg-black transition-all text-xs tracking-widest uppercase shadow-[4px_4px_0_0_rgba(0,0,0,0.18)]" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                <Link href="/contact">Get a Quote</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[380px] flex-shrink-0 mt-8 md:mt-0">
          <img src="/Marketing & Patient Engagement.jpg" alt="Marketing Engagement Main" className="w-full h-full object-cover rounded-lg" />
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
                  <div className="text-sm sm:text-[0.95rem] text-gray-600 mb-4 sm:mb-6 text-left leading-[1.6]" style={{fontFamily: 'Arial, sans-serif'}}>{proj.description}</div>
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
    </div>
  );
} 