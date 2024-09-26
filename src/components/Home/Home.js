import React, { useState } from "react";
import Login from "../Login";
import SignUp from "../Signup";
import "./Home.css";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <main className="home-container">
      <section className="form-container">
        {isLogin ? (
          <Login onToggle={toggleForm} />
        ) : (
          <SignUp onToggle={toggleForm} />
        )}
      </section>
    </main>
  );
};

export default Home;
