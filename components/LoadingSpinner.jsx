import React from "react";

const LoadingSpinner = ({ isLoading }) => {
  return (
    <div className={`loading-spinner ${isLoading ? "loading" : "loaded"}`}>
      <div className="text">
        <span className="letter">G</span>
        <span className="letter">e</span>
        <span className="letter">e</span>
        <span className="letter">k</span>
        <span className="letter">s</span> &nbsp;
        <span className="letter">I</span>
        <span className="letter">n</span>
        <span className="letter">v</span>
        <span className="letter">e</span>
        <span className="letter">n</span>
        <span className="letter">t</span>
        <span className="letter">i</span>
        <span className="letter">o</span>
        <span className="letter">n</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
