import React from "react";

const Navbar = () => {
  return (
    <nav class="head">
      <img
        src={
          "https://geeksinvention.com/assets/v2/content/geeks-logo-white.svg"
        }
        alt="logo"
      />
      <div class="nav__i">
        <ul class="header-nav ">
          <li class="header-menu-item">
            <a href="">HOME</a>
          </li>
          <li class="header-menu-item">
            <a href="">WORKS</a>
          </li>
          <li class="header-menu-item">
            <a href="">TECHNOLOGIES</a>
          </li>
          <li class="header-menu-item">
            <a href="">SERVICES</a>
          </li>
          <li class="header-menu-item">
            <a href="">COMPANY</a>
          </li>
          <li class="header-menu-item">
            <a href="">CONTACTS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
