import React, { useState } from "react";
import TimePicker from "./TimePicker";
import Purpose from "./Purpose";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import CalendarComponent from "../CalendarComponent/CalendarComponent";
import "./AppointmentForm.css";
import Timeslot from "./Timeslot";

const AppointmentForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date) {
      setIsSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section className="appointment-form">
      <Timeslot />
      <form onSubmit={handleSubmit} aria-labelledby="form-title">
        <CalendarComponent value={date} onChange={setDate} />
        <TimePicker selectedTime={time} onTimeChange={setTime} />
        <Purpose selectedPurpose={purpose} onPurposeChange={setPurpose} />
        <button type="submit">Schedule an Appointment</button>
      </form>
    </section>
  );
};

export default AppointmentForm;
