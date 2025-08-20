import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { GrLinkedin, GrYoutube } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6"; // FontAwesome 6


const Footer = () => {
  return (
    <div className="mt-6 font-dmsans">
      {/* Top bar - Horizontal Navigation and Newsletter Label */}
      <div className="w-full bg-black text-white px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Navigation Links (horizontal) */}
        <div className="font-semibold text-sm tracking-wider">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {[
              { name: "HOME", path: "#home" },
              { name: "SERVICE", path: "#industries" },
              { name: "ABOUT US", path: "#team" },
              { name: "CONTACT US", path: "#join-us" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.path);
                  if (element) {
                    const navbarHeight = 80; // Approximate navbar height
                    const elementPosition = element.offsetTop - navbarHeight;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="transition-colors duration-300 hover:text-yellow-400 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter label */}
        <div className="mt-6 md:mt-0 text-sm font-semibold tracking-wider text-yellow-400 text-center md:text-left">
          SIGN UP FOR OUR NEWSLETTER
        </div>
      </div>

      {/* Bottom bar - Social + Email signup */}
      <div className="w-full bg-black text-white px-6 md:px-10 py-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <div className="flex items-center gap-5">
          <a href="https://www.linkedin.com/company/roboinform/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <GrLinkedin size={25} className="text-yellow-400 hover:text-white transition-colors" />
          </a>
          <a href="https://youtube.com/@roboinform?si=EPLgA9IXUGt2dwZW" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <GrYoutube size={25} className="text-yellow-400 hover:text-white transition-colors" />
          </a>
         
        </div>

        <div className="flex w-full md:w-auto items-center gap-3">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 h-10 border border-white bg-black rounded-md focus:ring-1 focus:ring-white focus:outline-none w-full md:w-[280px] placeholder-white"
          />
          <button className="group h-10 w-10 flex items-center justify-center border border-white rounded-md bg-black hover:bg-yellow-400 transition duration-300" aria-label="Subscribe">
            <FaChevronRight className="text-white text-base group-hover:text-black" />
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
