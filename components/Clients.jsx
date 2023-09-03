import React from "react";
import Card from "./Card";

const Clients = () => {
  return (
    <div className="platform-section">
      <div className="platform__section--text">
        <h1>Recent clients</h1>
        <p>
          We worked with the Fortune 500 companies in the USA, Africa, UK,
          Middle East <br /> World's 4th Strongest Banking Brand, Automobile &
          IoT industry <br />
        </p>
      </div>
      <Card />
    </div>
  );
};

export default Clients;
