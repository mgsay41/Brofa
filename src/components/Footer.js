import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto py-10 px-4 md:flex md:justify-between md:items-start">
        {/* Left Section*/}
        <div className="mb-8 md:mb-0 flex flex-col items-center justify-center pt-14 pr-44">
          <h1 className="text-2xl font-bold text-center">MEJIWOO</h1>
          <p className="text-gray-500 mt-1 text-center">미지우</p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* About Us Section */}
          <div>
            <h2 className="font-semibold mb-2">About Us</h2>
            <ul className="space-y-1 text-gray-700">
              <li>News</li>
              <li>Official Store</li>
              <li>Company</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div>
            <h2 className="font-semibold mb-2">Get Help</h2>
            <ul className="space-y-1 text-gray-700">
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Payment</li>
              <li>Returns</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h2 className="font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4 text-gray-500">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Facebook className="w-5 h-5 text-[#1877F2]" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#E4405F]" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Twitter className="w-5 h-5 text-[#1DA1F2]" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Youtube className="w-5 h-5 text-[#FF0000]" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto flex justify-end px-4"></div>
      </div>

      <div className="max-w-7xl mx-auto flex justify-end px-4">
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-700 hover:text-black">
            Guide
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Terms & Conditions
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black text-white py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center px-4 text-sm">
          <p>© 2023 MEJIWOO. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
