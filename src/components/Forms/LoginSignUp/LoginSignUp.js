import React, { useState } from "react";
import SignUp from "../Signup/Signup";
import Login from "../Login";
import "./LoginSignUp.css";

const LoginInSignUpForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="form-container">
      <Login onToggle={toggleForm} />
    </div>
  );
};

export default LoginInSignUpForm;
