import React from "react";
import "./InputWithIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputWithIcon = ({ icon, type, placeholder, onInputChange }) => {
  return (
    <div className="input-icon-wrapper">
      <FontAwesomeIcon icon={icon} className="input-icon" />
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
};

export default InputWithIcon;
