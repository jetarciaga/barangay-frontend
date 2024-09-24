import React, { useState } from "react";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AppointmentForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date) {
      setIsSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <section className="appointment-form">
        <form onSubmit={handleSubmit} aria-labelledby="form-title">
          <h2 id="form-title">Schedule an Appointment</h2>

          <DatePicker selectedDate={date} onDateChange={setDate} />
          <TimePicker selectedTime={time} onTimeChange={setTime} />

          <button type="submit">Schedule an Appointment</button>
        </form>
      </section>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default AppointmentForm;
