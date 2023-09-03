import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header class="header">
      <Navbar />
      <div className="header__heading">
        <h1>EMBRACE THE FUTURE</h1>
        <p>Welcome to the age of action</p>
      </div>
    </header>
  );
};

export default Header;
