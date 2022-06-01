import React from "react";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiCodechef, SiLeetcode } from "react-icons/si";

const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/eshaan-bagga/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={32} />
      </a>
      <a href="https://github.com/eshaan5" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
        <AiFillGithub size={32} />
      </a>
      <a href="https://www.instagram.com/_esh_tastic/" target="_blank" rel="noopener noreferrer" style={{ color: "#bc2a8d" }}>
        <FaInstagramSquare size={32} />
      </a>
      <a href="https://www.codechef.com/users/eshaan5" target="_blank" rel="noopener noreferrer">
        <SiCodechef size={32} />
      </a>
      <a href="https://leetcode.com/eshaanbagga/" target="_blank" rel="noopener noreferrer">
        <SiLeetcode size={32} />
      </a>
    </div>
  );
};

export default Socials;
