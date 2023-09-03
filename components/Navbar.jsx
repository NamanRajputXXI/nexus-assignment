import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="head">
      {/* Logo */}
      <img
        src="https://geeksinvention.com/assets/v2/content/geeks-logo-white.svg"
        alt="logo"
      />

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu">
            <ul className="mobile-menu-list">
              <li className="mobile-menu-item">
                <a href="#home" onClick={closeMobileMenu}>
                  HOME
                </a>
              </li>
              <li className="mobile-menu-item">
                <a href="#works" onClick={closeMobileMenu}>
                  WORKS
                </a>
              </li>
              <li className="mobile-menu-item">
                <a href="#technologies" onClick={closeMobileMenu}>
                  TECHNOLOGIES
                </a>
              </li>
              <li className="mobile-menu-item">
                <a href="#services" onClick={closeMobileMenu}>
                  SERVICES
                </a>
              </li>
              <li className="mobile-menu-item">
                <a href="#company" onClick={closeMobileMenu}>
                  COMPANY
                </a>
              </li>
              <li className="mobile-menu-item">
                <a href="#contacts" onClick={closeMobileMenu}>
                  CONTACTS
                </a>
              </li>
              {/* Add more mobile menu items here */}
            </ul>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="nav__i">
        <ul className="header-nav">
          <li className="header-menu-item">
            <a href="#home">HOME</a>
          </li>
          <li className="header-menu-item">
            <a href="#works">WORKS</a>
          </li>
          <li className="header-menu-item">
            <a href="#technologies">TECHNOLOGIES</a>
          </li>
          <li className="header-menu-item">
            <a href="#services">SERVICES</a>
          </li>
          <li className="header-menu-item">
            <a href="#company">COMPANY</a>
          </li>
          <li className="header-menu-item">
            <a href="#contacts">CONTACTS</a>
          </li>
          {/* Add more desktop menu items here */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
