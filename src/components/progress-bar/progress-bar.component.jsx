import React from "react";

import loader from "../../assets/progress.svg";
import "./progress-bar.styles.scss";

const ProgressBar = (props) => {
  return (
    <div className="progressbar-container">
      <img className="progress-img" src={loader} alt="loader" />
      <span className="text">Plase wait</span>
    </div>
  );
};

export default ProgressBar;
