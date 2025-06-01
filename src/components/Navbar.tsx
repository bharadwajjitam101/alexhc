'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white w-full">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-2 md:px-8 h-[70px]">
        {/* Logo only */}
        <div className="flex items-center min-w-[260px]">
          <Link href="/" className="flex items-center">
            <Image src="/alex.png" alt="Alex Healthcare System Logo" width={210} height={60} className="w-[210px] h-auto" priority />
          </Link>
        </div>
        {/* Nav links */}
        <div className="flex items-center space-x-12">
          <Link href="/" className="text-[#232323] text-[1.25rem] font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Home</Link>
          <Link href="/services" className="text-[#232323] text-[1.25rem] font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Service</Link>
          <Link href="/projects" className="text-[#232323] text-[1.25rem] font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Project</Link>
          <Link href="/about" className="text-[#232323] text-[1.25rem] font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>About Us</Link>
          <Link href="/contact" className="text-[#232323] text-[1.25rem] font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 