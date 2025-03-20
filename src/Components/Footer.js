import React from "react";
import { FaChevronRight,  } from "react-icons/fa";
import { GrInstagram, GrLinkedin, GrYoutube } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6"; // FontAwesome 6


const Footer = () => {
  return (
    <div className="mt-6 font-dmsans">
      <div className="w-full bg-black text-white px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 font-semibold text-sm tracking-wider">
          {[
            { name: "HOME", path: "/" },
            { name: "SERVICE", path: "/services" },
            { name: "ABOUT US", path: "/about_us" },
            { name: "BLOG", path: "/blog" },
            { name: "CONTACT US", path: "/contact_us" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="transition-colors duration-300 hover:text-yellow-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-4 md:mt-0 text-sm font-semibold tracking-wider text-yellow-400 text-center md:text-left">
          SIGN UP FOR OUR NEWSLETTER
        </div>
      </div>

      {/* Social Media & Email Signup */}
      <div className="w-full bg-black text-white px-6 md:px-10 py-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <div className="flex items-center gap-5">
        <a href="https://www.linkedin.com/company/roboinform/" target="_blank" rel="noopener noreferrer"  aria-label="LinkedIn">
          <GrLinkedin size={25} className="text-yellow-400" />
          </a>
          <GrYoutube size={25} className="text-yellow-400" />
          
          < FaXTwitter size={25} className="text-yellow-400" />
          
        </div>

        <div className="flex w-full md:w-auto items-center gap-3">
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 border border-white bg-black rounded-md focus:ring-1 focus:ring-white focus:outline-none h-[45px] w-full md:w-[220px] placeholder-white"
          />
          <button className="border rounded-lg px-3 py-2 bg-black hover:bg-yellow-400 transition duration-300">
            <FaChevronRight className="text-white hover:text-black" />
          </button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full text-white text-center text-sm px-6 py-3" style={{ backgroundColor: "#74512D" }}>
        Privacy Policy | Copyright © 2024 Roboinform. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
