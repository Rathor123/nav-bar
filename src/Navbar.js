import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkesContainerRef = useRef(null);
  const linkesRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linkesHeight = linkesRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linkesContainerRef.current.style.height = `${linkesHeight}px`;
    } else {
      linkesContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo image" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className="links-container " ref={linkesContainerRef}>
          <ul className="links" ref={linkesRef}>
            {links.map((links) => {
              const { id, url, text } = links;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
