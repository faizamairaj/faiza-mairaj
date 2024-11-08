import React from 'react';
import Image from 'next/image';
import logo from '@/app/assets/Logo.png';

const Footer = () => {
    return (
      <footer className="bg-[#043873] text-white py-10 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
          {/* Company Description */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Image src={logo} alt="logo-image" />
            </div>
            <p className="text-sm mt-3">
              Whitepace was created for the new ways we live and work. We make better workspaces around the world.
            </p>
          </div>
  
          {/* Product and Resources Sections */}
          <div className="grid grid-cols-2 gap-6 text-center md:text-left">
            <div>
              <h3 className="font-bold mb-3">Product</h3>
              <ul className="text-sm space-y-2">
                <li>Overview</li>
                <li>Pricing</li>
                <li>Customer stories</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Resources</h3>
              <ul className="text-sm space-y-2">
                <li>Blog</li>
                <li>Guides & tutorials</li>
                <li>Help center</li>
              </ul>
            </div>
          </div>
  
          {/* Company Section */}
          <div className="text-center md:text-left">
            <h3 className="font-bold mb-3">Company</h3>
            <ul className="text-sm space-y-2">
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
