import React from "react";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="flex justify-center space-x-6 text-xl mb-2">
        <a href="https://github.com/Gourav0404" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/gaurav-chauhan-9817b8371" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://leetcode.com/u/gouravchouhan6103/" target="_blank" rel="noopener noreferrer"><TbBrandLeetcode /></a>
        <a href="https://www.instagram.com/gouarvchouchan?igsh=MWdwZWwwMG12azBwOA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <p>&copy; 2025 Gourav Chouhan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;