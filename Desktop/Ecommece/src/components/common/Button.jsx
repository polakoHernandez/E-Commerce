import React from "react";
import "../../styles/Button/styles.css";
const Button = ({ onClick }) => {
  return (
    <div className="button-container" onClick={onClick}>
      <span className="message">Let's Start</span>
    </div>
  );
};

export default Button;
