import React from "react";
import data from "@/Data/CardData";
import pennyLogo from "../assets/v3/client/logo-penny.webp";

const Card = () => {
  return (
    <div className="grid-container">
      {data.map((card, index) => (
        <div className="card" key={index}>
          <img
            width={200}
            src="https://geeksinvention.com/assets/v3/client/logo-penny.webp"
            alt=""
          />
          <h2>{card.name}</h2>
          <p>{card.about}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
