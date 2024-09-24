import React, { useState } from "react";
import "./Login.css";
import { useAuth } from "../../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Login = ({ onToggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth.login(email, password)) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
    // add api call
  };

  return (
    <section className="login-form">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="loginEmail">Email</label>
          <input
            type="email"
            id="loginEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <input
            type="password"
            id="loginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? </p>
      <button className="link-btn" onClick={onToggle}>
        Sign Up
      </button>
    </section>
  );
};

export default Login;
