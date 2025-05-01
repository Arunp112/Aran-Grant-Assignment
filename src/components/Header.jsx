import React, { useState } from 'react';
import { IoCallSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-opacity-50 w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* --- Left section --- */}
        <div className="flex items-center gap-4">
          {/* Hamburger icon for mobile */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiMenu />
          </button>

          {/* Logo */}
          <div className="flex flex-col font-serif text-2xl text-white leading-5 tracking-wider">
            <span>ARAN</span>
            <span>GR<span className="text-orange-400">A</span>NT</span>
          </div>

          {/* Nav links for desktop */}
          <nav className="hidden md:flex gap-8 text-white text-base font-medium ml-12">
            {["Hotels", "Help"].map((item) => (
              <span
                key={item}
                className="cursor-pointer relative group hover:text-orange-400 transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            ))}
          </nav>
        </div>

        {/* --- Right section --- */}
        <div className="flex items-center gap-4 md:gap-10 text-white">
          {/* Mobile call icon */}
          <button className="md:hidden text-2xl">
            <IoCallSharp />
          </button>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center gap-10">
            <button className="border border-white px-4 py-1 rounded-lg hover:bg-white hover:text-black transition font-semibold">
              My Trip
            </button>

            <div className="flex flex-col text-sm font-semibold">
              <span>Phone Only Details</span>
              <div className="flex items-center gap-2">
                <IoCallSharp className="text-lg" />
                <span>Call: 189898988</span>
              </div>
            </div>

            <img
              src="https://arangrant.com/wp-content/uploads/sites/3/2023/01/consultant.png"
              alt="consultant"
              className="w-14"
            />
          </div>
        </div>
      </div>

      {/* --- Mobile sliding menu --- */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <div className="text-xl font-serif tracking-wider">
            <span>ARAN</span><br />
            <span>GR<span className="text-orange-400">A</span>NT</span>
          </div>
          <button
            className="text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <HiX />
          </button>
        </div>
        <div className="flex flex-col gap-6 px-6 py-8 text-lg">
          <span className="hover:text-orange-400 cursor-pointer">Hotels</span>
          <span className="hover:text-orange-400 cursor-pointer">Help</span>
          <button className="border border-white px-4 py-1 rounded-lg hover:bg-white hover:text-black transition font-semibold">
            My Trip
          </button>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <IoCallSharp className="text-lg" />
            <span>Call: 189898988</span>
          </div>
        </div>
      </div>

      {/* Optional: background overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
