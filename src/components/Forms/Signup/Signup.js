import React, { useState } from "react";
import { validateEmail } from "../../../utils/validations";
import "./Signup.css";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

const ConfirmPasswordErrorMessage = () => {
  return <p className="FieldError">Passwords do not match</p>;
};

const EmailErrorMessage = () => {
  return <p className="FieldError">Please enter a valid email address</p>;
};

const SignUp = ({ onToggle }) => {
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });

  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    isTouched: false,
  });

  const getIsFormValid = () => {
    return (
      validateEmail(email.value) &&
      password.value.length >= 8 &&
      password.value === confirmPassword.value
    );
  };

  const clearForm = () => {
    setEmail({
      value: "",
      isTouched: false,
    });
    setPassword({
      value: "",
      isTouched: false,
    });
    setConfirmPassword({
      value: "",
      isTouched: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <section className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="signupEmail">Email</label>
          <input
            type="email"
            id="signupEmail"
            name="email"
            value={email.value}
            onChange={(e) => setEmail({ ...email, value: e.target.value })}
            onBlur={() => setEmail({ ...email, isTouched: true })}
            placeholder="Enter your email"
            required
          />
        </div>
        {email.isTouched && !validateEmail(email.value) ? (
          <EmailErrorMessage />
        ) : null}

        <div className="form-group">
          <label htmlFor="signupPassword">Password</label>
          <input
            type="password"
            id="signupPassword"
            name="password"
            value={password.value}
            onChange={(e) =>
              setPassword({ ...password, value: e.target.value })
            }
            onBlur={() => setPassword({ ...password, isTouched: true })}
            placeholder="Enter your password"
            required
          />
        </div>
        {password.isTouched && password.value.length < 8 ? (
          <PasswordErrorMessage />
        ) : null}

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword.value}
            onChange={(e) =>
              setConfirmPassword({ ...confirmPassword, value: e.target.value })
            }
            onBlur={() => setConfirmPassword({ ...password, isTouched: true })}
            placeholder="Confirm your password"
            required
          />
        </div>
        {confirmPassword.isTouched &&
        confirmPassword.value !== password.value ? (
          <ConfirmPasswordErrorMessage />
        ) : null}

        <button type="submit" disabled={!getIsFormValid()}>
          Create Account
        </button>
      </form>
      <p>Already have an account? </p>
      <button className="link-btn" onClick={onToggle}>
        Back to Login
      </button>
    </section>
  );
};

export default SignUp;
