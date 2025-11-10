import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
        <div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Logo and Description */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About us</li>
            <li className="hover:underline cursor-pointer">Delivery</li>
            <li className="hover:underline cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10">
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-500">
          © 2025 forever.com — All Rights Reserved
        </p>
      </div>
      </div>
   
  );
};

export default Footer;
