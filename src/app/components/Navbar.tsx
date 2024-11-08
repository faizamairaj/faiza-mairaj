import Image from 'next/image';
import React from 'react';
import logo from '@/app/assets/Logo.png';

const Navbar = () => {
  return (
    <div className="w-full h-full py-4 px-4 md:px-[220px] bg-[#043873] flex justify-between items-center">
      <div className="w-[150px] h-[30px] md:w-[191px] md:h-[34px]">
        <Image src={logo} alt="logo-image" />
      </div>
      
      {/* Toggle button for mobile screens */}
      <div className="md:hidden flex items-center space-x-2 text-white">
        <button className="p-2">
          {/* Simple hamburger icon for toggle */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-10">
        <ul className="flex space-x-10 text-white">
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
        <button className="px-4 py-2 rounded-lg text-[#043873] bg-[#FFE492]">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
