import React from "react";

const Teams = () => {
  return (
    <div className="platform-section">
      <div className="platform__section--text">
        <h1>Only dedicated teams</h1>
        <p>
          Our team is 100% concentrated on your project and you have full
          control over <br /> management of the dedicated team members.
        </p>
      </div>
      <div className="properties">
        <div className="row">
          <div className="property">
            <img
              src="https://geeksinvention.com/assets/dedicated-teams/agile-0aab98f2053db8490987560a2e9f37fe.svg"
              width="150"
              height="150"
              alt=""
            />
            <h5>Agile approach</h5>
          </div>
          <div className="property">
            <img
              src="https://geeksinvention.com/assets/dedicated-teams/deep-tech-7f909bfebb1eebf6eda5832f658cbbaa.svg"
              width="150"
              height="150"
              alt=""
            />
            <h5>Deep tech expertise</h5>
          </div>
          <div className="property">
            <img
              src="https://geeksinvention.com/assets/dedicated-teams/pc-293103263e599a94d7a2d886fab89b42.svg"
              width="150"
              height="150"
              alt=""
            />
            <h5>Personal commitment</h5>
          </div>
        </div>
        <div className="row">
          <div className="property">
            <img
              src="https://geeksinvention.com/assets/dedicated-teams/scale-33474d0929577c56ca4d116820e24ee8.svg"
              width="150"
              height="150"
              alt=""
            />
            <h5>Regular reporting</h5>
          </div>
          <div className="property">
            <img
              src="https://geeksinvention.com/assets/dedicated-teams/reg-rep-732453cad7b07eb4cc4147fa41423c4a.svg"
              width="150"
              height="150"
              alt=""
            />
            <h5>Time tracking</h5>
          </div>
          <div className="property">
            <img
              src="https://geeksinvention.com/assets/dedicated-teams/time-track-d7afee36956a4a6c0bb1e734af7909fc.svg"
              width="150"
              height="150"
              alt=""
            />
            <h5>Scalability</h5>
          </div>
        </div>
      </div>

      <button className="orange-button">See our services</button>
    </div>
  );
};

export default Teams;
