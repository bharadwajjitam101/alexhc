'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white w-full shadow-sm">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-2 md:px-8 h-[70px] relative">
          {/* Logo only */}
          <div className="flex items-center min-w-[180px] sm:min-w-[210px]">
            <Link href="/" className="flex items-center">
              <Image src="/alex.png" alt="Alex Healthcare System Logo" width={210} height={60} className="w-[140px] sm:w-[210px] h-auto" priority />
            </Link>
          </div>
          {/* Hamburger Icon (Mobile) */}
          <button
            className="flex flex-col justify-center items-center w-10 h-10 md:hidden z-30"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-1 bg-[#232323] rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-1 bg-[#232323] rounded my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-1 bg-[#232323] rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          {/* Nav links (Desktop) */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-[#232323] text-[1.25rem] font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Home</Link>
            <Link href="/services" className="text-[#232323] text-[1.25rem] font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Service</Link>
            <Link href="/projects" className="text-[#232323] text-[1.25rem] font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Project</Link>
            <Link href="/about" className="text-[#232323] text-[1.25rem] font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>About Us</Link>
            <Link href="/contact" className="text-[#232323] text-[1.25rem] font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Contact Us</Link>
          </div>
        </div>
      </nav>
      {/* Mobile Drawer and Overlay OUTSIDE the main nav container */}
      {mounted && (
        <>
          {/* Drawer only, overlay removed */}
          <div
            className={`fixed top-0 right-0 h-full w-1/2 min-w-[180px] max-w-xs bg-white shadow-lg z-[100] transform transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            {/* Close (cross) button */}
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#232323] hover:text-[#5B9DED] focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div className="flex flex-col items-start pt-24 px-8 space-y-8 h-full">
              <Link href="/" className="text-[#232323] text-lg font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}} onClick={toggleMenu}>Home</Link>
              <Link href="/services" className="text-[#232323] text-lg font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}} onClick={toggleMenu}>Service</Link>
              <Link href="/projects" className="text-[#232323] text-lg font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}} onClick={toggleMenu}>Project</Link>
              <Link href="/about" className="text-[#232323] text-lg font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}} onClick={toggleMenu}>About Us</Link>
              <Link href="/contact" className="text-[#232323] text-lg font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}} onClick={toggleMenu}>Contact Us</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar; 