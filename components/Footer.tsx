"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const iconStyle =
    "w-16 h-16 bg-gray-700 text-white rounded-full flex items-center justify-center text-xl transition-transform duration-300 hover:scale-125 cursor-pointer";

  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="bg-gray-200 py-12 px-10 flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Left Info */}
        <div className="space-y-4 text-sm">
          <p>
            <span className="text-blue-700 font-semibold">ADDRESS:</span>{" "}
            <span className="text-gray-900">Grant Road, Mumbai</span>
          </p>
          <p>
            <span className="text-blue-700 font-semibold">PHONE:</span>{" "}
           <span className="text-gray-900">+84 1102 2703</span>
          </p>
          <p>
            <span className="text-blue-700 font-semibold">EMAIL:</span>{" "}
            <span className="text-gray-900">info@assettechnologies.co.in</span>
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-8 md:mt-0 text-center">
          <p className="text-blue-700 font-semibold mb-4">SOCIAL:</p>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            
            <div className={iconStyle}>
              <FaFacebookF />
            </div>

            <div className={iconStyle}>
              <FaLinkedinIn />
            </div>

            <div className={iconStyle}>
              <FaTwitter />
            </div>

            <div className={iconStyle}>
              <FaWhatsapp />
            </div>

            <div className={iconStyle}>
              <FaInstagram />
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-blue-800 text-white text-center py-4 text-lg">
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <span>|</span>
          <a href="#" className="hover:underline">About</a>
          <span>|</span>
          <a href="#" className="hover:underline">Services</a>
          <span>|</span>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </div>
    </footer>
  );
}