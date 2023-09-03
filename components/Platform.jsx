import React from "react";
import web from "../assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg";
import ios from "../assets/software-platforms/ios-00fc94480a85413ba6276b2392cbaa0a.svg";
import android from "../assets/software-platforms/android-163d4b8d487bb2c3ade6e7aad7dda588.svg";
import tv from "../assets/software-platforms/tv-f6c551eb20333d6604e9fff685c392d1.svg";
import hybrid from "../assets/software-platforms/hybrid-b835b200edfc426c9f5a6ef76412aff6.svg";
import wear from "../assets/software-platforms/wear-6f1886d1d03002e8fe1d04e499125d00.svg";
const Platform = () => {
  return (
    <div className="platform-section">
      <div className="platform__section--text">
        <h1>Software for modern platforms</h1>
        <p>We develop applications for mobile, web, wearables, and TV.</p>
      </div>
      <div className="platforms">
        <div className="platform">
          <img
            src="https://geeksinvention.com/assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg"
            width="150"
            height="150"
          />
          <h4>Web</h4>
        </div>
        <div className="platform">
          <img
            src="https://geeksinvention.com/assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg"
            width="150"
            height="150"
            alt=""
          />
          <h4>iOS</h4>
        </div>
        <div className="platform">
          <img
            src="https://geeksinvention.com/assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg"
            width="150"
            height="150"
            alt=""
          />
          <h4>Android</h4>
        </div>
        <div className="platform">
          <img
            src="https://geeksinvention.com/assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg"
            width="150"
            height="150"
            alt=""
          />
          <h4>Hybrid</h4>
        </div>
        <div className="platform">
          <img
            src="https://geeksinvention.com/assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg"
            width="150"
            height="150"
            alt=""
          />
          <h4>Wearables</h4>
        </div>
        <div className="platform">
          <img
            src="https://geeksinvention.com/assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg"
            width="150"
            height="150"
            alt=""
          />
          <h4>TV</h4>
        </div>
      </div>
      <button className="orange-button">See our tech stack</button>
    </div>
  );
};

export default Platform;
