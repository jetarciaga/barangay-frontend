import React from "react";

const Timeslot = () => {
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 8; hour < 16; hour++) {
      const formattedHour = hour.toString().padStart(2, "0");
      times.push(`${formattedHour}:00`, `${formattedHour}:30`);
    }
    return times;
  };

  return (
    <section className="requirements-container">
      <h2>Appointment Requirements</h2>
      <p>Please prepare the following requirements before your appointment.</p>
      <ul>
        <li>Valid ID</li>
        <li>2x2 Picture</li>
      </ul>
    </section>
  );
};

export default Timeslot;
