import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { url: "https://github.com/fordefam12", icon: <VscGithubAlt /> },
    { url: "https://www.linkedin.com/in/fordefam12/", icon: <AiOutlineLinkedin /> },
    { url: "https://www.instagram.com/fordefam12/", icon: <FaInstagram /> },
  ];

  return (
    <footer className="text-center">
      <h2>Made by Brandon Forde</h2>
      <ul className="social-icons ">
        {socialLinks.map((link, index) => (
          <div key={index} className="logo p-3 m-2 d-inline">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </div>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
