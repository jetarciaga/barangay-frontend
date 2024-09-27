import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <section>
      <h1>Select a Date</h1>
      <Calendar onChange={handleDateChange} value={date} />
      <p>Selected Date: {date.toDateString()}</p>
    </section>
  );
};

export default CalendarComponent;
