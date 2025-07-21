import Image from 'next/image';
import Link from 'next/link';
import projectsData from '../../public/projects.json';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-4 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Logo Block (SVG only, no extra text) */}
        <div className="flex flex-col items-center md:items-start md:w-[280px] min-w-[280px] justify-center pt-2">
          <Image
            src="/alexreal.png"
            alt="Alex Healthcare System Logo"
            width={250}
            height={117}
            className="mb-4 w-[250px] h-auto"
            priority
          />
          {/* Partner Firm Logo */}
          <div className="text-center md:text-left">
            <p className="text-[0.8rem] text-gray-400 mb-2" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Partner Firm</p>
            <Image
              src="/mhslogo.png"
              alt="MHS Partner Firm Logo"
              width={200}
              height={100}
              className="w-[200px] h-auto ml-4"
              priority
            />
          </div>
        </div>

        {/* Solutions, Latest Projects, Quick Links */}
        <div className="flex flex-1 flex-col md:flex-row justify-between items-start gap-12 md:gap-16 mt-0 md:mt-0">
          <div className="w-[140px]">
            <h3 className="text-[0.9rem] mb-4" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Turnkey Hospital Infrastructure</a></li>
              <li><a href="#" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Medical Gas Pipeline & ICU Systems</a></li>
              <li><a href="#" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Healthcare Equipment Supply</a></li>
            </ul>
          </div>
          <div className="w-[140px]">
            <h3 className="text-[0.9rem] mb-4" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Latest Projects</h3>
            <ul className="space-y-2">
              {projectsData.slice(-3).map((proj) => (
                <li key={proj.id}>
                  <Link href={`/projects/${proj.id}`} className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
                    {proj.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[140px]">
            <h3 className="text-[0.9rem] mb-4" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Home</Link></li>
              <li><Link href="/services" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Services</Link></li>
              <li><Link href="/projects" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Projects</Link></li>
              <li><Link href="/about" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>About Us</Link></li>
              <li><Link href="/contact" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif', color: '#fff'}}>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Box + Social Icons */}
        <div className="flex flex-col items-center md:items-end md:w-[280px] min-w-[280px] justify-center mt-0 md:mt-0">
          <div className="bg-[#5B9DED] rounded-[60px_0_60px_0] px-8 py-6 text-center w-full flex flex-col items-center" style={{borderRadius: '60px 0 60px 0'}}>
            <div className="text-black text-[0.9rem] mb-2 font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>+91 7002394679</div>
            <div className="text-[#FFFFFF] text-[0.9rem] mb-2 font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>alexhealthcare10@gmail.com</div>
            <div className="text-black text-[0.85rem] leading-tight font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Alex Healthcare System House No. 06, Jayanagar Road, Six Mile, Guwahati, Assam – 781022</div>
          </div>
          {/* Social Icons below the contact box */}
          <div className="flex items-center justify-center space-x-8 mt-4 w-full">
            <a href="https://www.facebook.com/profile.php?id=61568673122975&mibextid=wwXIfr&mibextid=wwXIfr" 
               aria-label="Facebook" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center justify-center w-8 h-8">
              <FaFacebook className="w-8 h-8 text-white" />
            </a>
            <a href="https://www.instagram.com/alex.healthcaresystem?igsh=ZHl1YXNiZzB5aTRu&utm_source=qr" 
               aria-label="Instagram" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center justify-center w-8 h-8">
              <FaInstagram className="w-8 h-8 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto mt-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full text-gray-300 text-[0.8rem] border-t border-gray-800 pt-4 max-w-[1200px]">
          <div className="mb-2 md:mb-0">©2025, Proudly developed by Clear Solutions Services</div>
          <div className="mb-2 md:mb-0">©2025 ARR, All right reserved by Clear Solutions Services</div>
        </div>
      </div>
    </footer>
  );
} 