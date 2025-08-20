import React from "react";
import { GrLinkedin, GrYoutube } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="mt-6 font-dmsans">
      {/* Footer main section: Quick Links, Contact, Map */}
      <div className="w-full bg-black text-white px-6 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact (left) */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-center justify-center gap-3">
                <FiMail className="text-yellow-400" size={18} />
                <a href="mailto:info@roboinform.com" className="text-yellow-400  hover:underline">support@roboinform.in</a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <FaMapMarkerAlt className="text-yellow-400" size={18} />
                <div className="text-center">
                  <p>Sudha & Shankar Innovation Hub</p>
                  <p>Indian Institute of Technology Madras</p>
                  <p>Chennai – 60036, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links (center) */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="mt-4 font-semibold text-sm tracking-wider">
              <div className="flex flex-col items-center gap-2">
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
          </div>

          {/* Follow Us (right) */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="mt-4 flex items-center justify-center gap-5">
              <a href="https://www.linkedin.com/company/roboinform/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <GrLinkedin size={25} className="text-yellow-400 hover:text-white transition-colors" />
              </a>
              <a href="https://youtube.com/@roboinform?si=EPLgA9IXUGt2dwZW" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <GrYoutube size={25} className="text-yellow-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

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
