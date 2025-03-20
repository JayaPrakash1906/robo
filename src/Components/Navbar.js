import { useState, useEffect } from "react";
import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import img1 from "../Assets/Logonew.png";

const Navbar = () => {
  const [activePage, setActivePage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
  }, []);

  return (
    <div className="relative top-0 left-0 w-full bg-[#FBFBFB] text-black flex items-center justify-between px-6 md:px-10 py-3 font-dmsans shadow-md">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-700"></div>

      {/* Logo Section */}
      <div>
        <img
          src={img1}
          alt="Logo"
          className="w-36 md:w-48 p-2"
        />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden position-relative">
        {isMenuOpen ? (
          <FiX size={28} onClick={() => setIsMenuOpen(false)} className="cursor-pointer" />
        ) : (
          <FiMenu size={28} onClick={() => setIsMenuOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Navigation Links */}
      <div className={`absolute md:relative top-full left-0 w-full md:w-auto md:flex md:gap-8 font-semibold text-sm tracking-wider bg-[#FBFBFB] md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? "block p-6 shadow-lg" : "hidden md:flex"}`}>
        {[
          { name: "HOME", path: "/" },
          { name: "SERVICE", path: "/services" },
          { name: "ABOUT US", path: "/about_us" },
          { name: "BLOG", path: "/blog" },
          { name: "CONTACT US", path: "/contact_us" }
        ].map((link) => (
          <button
            key={link.path}
            onClick={() => {
              window.location.href = link.path;
              setIsMenuOpen(false);
            }}
            className={`block md:inline-block px-4 py-2 md:py-0 active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out ${
              activePage === link.path ? "border-b-2 border-[#FFD56F] text-[#FFD56F]" : ""
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Client Portal Button */}
      <div className="hidden md:block">
        <button
          className="border px-6 py-2 rounded-md font-semibold transition-all"
          style={{ borderColor: "#FFD56F", color: "#FFD56F" }}
        >
          CLIENT PORTAL
        </button>
      </div>
    </div>
  );
};

export default Navbar;
