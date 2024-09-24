import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <section>
      <h2>Dashboard</h2>
      <p>Welcome to Dashboard!</p>
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
};

export default Dashboard;
