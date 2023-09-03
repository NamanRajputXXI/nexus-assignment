import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="platform__section--text">
        <h1>Get to know us better!</h1>
        <p>
          It is a pleasure to have you on our website. Let us know if
          there&apos;s an opportunity to <br /> do something together.
        </p>
      </div>

      <button className="message__btn">Drop us a message</button>
      <div className="footer-end">
        <div className="footer-el">
          <div className="address">
            <img
              src={
                "https://geeksinvention.com/assets/v2/content/geeks-logo-white.svg"
              }
              alt="logo"
            />
            <p>
              447 Broadway, 2nd Floor Suite #772,
              <br /> New York 10013, United States <br />
              +1-347-535-0004
            </p>
          </div>
          <div className="footer-nav">
            <div className="nav__i">
              <ul className="header-nav ">
                <li className="footer-menu-item">
                  <a href="">Works</a>
                </li>
                <li className="footer-menu-item">
                  <a href="">Technologies</a>
                </li>
                <li className="footer-menu-item">
                  <a href="">Services</a>
                </li>
                <li className="footer-menu-item">
                  <a href="">Company</a>
                </li>
                <li className="footer-menu-item">
                  <a href="">Contacts</a>
                </li>
                <li className="footer-menu-item">
                  <a href="">Terms and Conditions</a>
                </li>
                <li className="footer-menu-item">
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="caseStudy__button">
            <button>Stay tuned for updates</button>
          </div>
        </div>
        <div className="copyright">
          <p>
            © Copyright 2023 – Mobile App Design and Development Company. All
            Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
