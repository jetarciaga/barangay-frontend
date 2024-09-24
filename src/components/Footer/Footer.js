import React, { useState } from "react";
import "./Footer.css";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import InputWithIcon from "../InputWithIcon/InputWithIcon";
import { validateEmail } from "../../utils/validations";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <footer>
      <div className="newsletter-section">
        <h3>Join our newsletter to keep up to date with us!</h3>
        <div className="newsletter-input">
          <InputWithIcon icon={faUserAlt} onInputChange={handleInputChange} />
          <button disabled={!validateEmail(email)}>Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="footer-content">
        <div className="footer-logo">
          <img src="#" alt="Barangay Logo" />
        </div>
      </div>
      <hr />
      <div className="terms-policy">
        <p>&copy; 2024 Student Capstone</p>
        <nav>
          <ul>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
