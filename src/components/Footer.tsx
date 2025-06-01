import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-4 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Logo Block (SVG only, no extra text) */}
        <div className="flex flex-col items-center md:items-start md:w-[280px] min-w-[280px] justify-center pt-2">
          <Image
            src="/alexBW 1.svg"
            alt="Alex Healthcare System Logo"
            width={250}
            height={117}
            className="mb-0 w-[250px] h-auto"
            priority
          />
        </div>

        {/* Solutions, Latest Projects, Quick Links */}
        <div className="flex flex-1 flex-col md:flex-row justify-between items-start gap-12 md:gap-16 mt-0 md:mt-0">
          <div className="w-[140px]">
            <h3 className="text-[0.9rem] mb-4" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Building Construction</a></li>
              <li><a href="#" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Building Repairs</a></li>
              <li><a href="#" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Foundation</a></li>
              <li><a href="#" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Site Management</a></li>
            </ul>
          </div>
          <div className="w-[140px]">
            <h3 className="text-[0.9rem] mb-4" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Latest Projects</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Example</a></li>
              <li><a href="#" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Example</a></li>
              <li><a href="#" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Example</a></li>
              <li><a href="#" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Example</a></li>
            </ul>
          </div>
          <div className="w-[140px]">
            <h3 className="text-[0.9rem] mb-4" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Home</Link></li>
              <li><Link href="/services" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Services</Link></li>
              <li><Link href="/projects" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Projects</Link></li>
              <li><Link href="/about" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>About US</Link></li>
              <li><Link href="/contact" className="text-[#8CA6D1] hover:underline text-[0.85rem]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Box + Social Icons */}
        <div className="flex flex-col items-center md:items-end md:w-[280px] min-w-[280px] justify-center mt-0 md:mt-0">
          <div className="bg-[#5B9DED] rounded-[60px_0_60px_0] px-8 py-6 text-center w-full flex flex-col items-center" style={{borderRadius: '60px 0 60px 0'}}>
            <div className="text-black text-[0.9rem] mb-2 font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>1-800-660-0464</div>
            <div className="text-[#FF6B57] text-[0.9rem] mb-2 font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>support@rubel.bd</div>
            <div className="text-black text-[0.85rem] leading-tight font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>900-140 10th Avenue Se<br/>Calgary, AB T2G 0R1</div>
          </div>
          {/* Social Icons below the contact box */}
          <div className="flex space-x-8 mt-4 md:justify-end w-full">
            <a href="#" aria-label="Facebook">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C21.45.425 20.277.131 19 .072 17.721.013 17.312 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.574a2.994 2.994 0 00-2.112 2.112C0 8.072 0 12 0 12s0 3.928.502 5.814a2.994 2.994 0 002.112 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 15.928 24 12 24 12s0-3.928-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto mt-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full text-gray-300 text-[0.8rem] border-t border-gray-800 pt-4 max-w-[1200px]">
          <div className="mb-2 md:mb-0">©2025, Proudly developed by Clear Solutions Services</div>
          <div className="mb-2 md:mb-0">©2025 ARR, All right reserved by Clear Solutions Services</div>
          <div className="flex space-x-8">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 