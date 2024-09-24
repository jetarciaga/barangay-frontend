import React from "react";

const Confirmation = ({ name, date, time }) => {
  return (
    <article className="confirmation">
      <h2>Appointment Scheduled!</h2>
      <p>
        Thank you, {name}. Your appointment is scheduled for {date} at {time}.
      </p>
    </article>
  );
};

export default Confirmation;
