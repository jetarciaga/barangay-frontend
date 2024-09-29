import React, { useState } from "react";

const Tracker = () => {
  return (
    <section className="tracker-container">
      <h2>Appointment Tracker</h2>
      <form action="">
        <input type="text" placeholder="Type Reference No." />
        <button type="submit">Track</button>
      </form>
    </section>
  );
};

export default Tracker;
