import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside or on a link
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navMenu = document.querySelector(".nav-menu");
      if (
        navMenu &&
        !navMenu.contains(event.target) &&
        !event.target.classList.contains("nav-mob-open")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Prevent scroll when menu is open on mobile
  useEffect(() => {
    console.log({ isMenuOpen });
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <img src={logo} alt="" width="150" height="150" />

      <div className="menu-wrapper">
        <img
          src={menu_open}
          onClick={toggleMenu}
          alt="Open Menu"
          className={`nav-mob-open ${isMenuOpen ? "hidden" : ""}`}
        />
      </div>

      <ul
        className={`nav-menu ${isMenuOpen ? "open" : "close"}`}
        aria-expanded={isMenuOpen}
      >
        <div className="menu-wrapper">
          <img
            src={menu_close}
            onClick={toggleMenu}
            alt="Close Menu"
            className="nav-mob-close"
          />
        </div>

        <div className="nav-menu-items">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About Us" },
            { href: "#services", label: "Services" },
            { href: "#mywork", label: "Portfolio" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <li key={item.href}>
              <a href={item.href} className="no-underline">
                <p>{item.label}</p>
              </a>
            </li>
          ))}

          <div className="nav-connect">Connect With Me</div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
