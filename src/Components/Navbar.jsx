import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import GouravLogo from "/GouravLogo.png"; // Adjust the path as necessary

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gray-200 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <img
          src={GouravLogo}
          className="w-[150px] h-[50px] sm:w-[160px] sm:h-[45px] rounded-full object-cover"
          alt="Logo"
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          <li><a href="#certificates" className="hover:text-blue-500" >Certificates</a></li>
        </ul>

        {/* Hamburger Menu Button */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a onClick={toggleMenu} href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a onClick={toggleMenu} href="#about" className="hover:text-blue-500">About</a></li>
            <li><a onClick={toggleMenu} href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a onClick={toggleMenu} href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a onClick={toggleMenu} href="#contact" className="hover:text-blue-500">Contact</a></li>
            <li><a onClick={toggleMenu} href="#certificates" className="hover:text-blue-500">Certificates</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
