import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  // State to hold the selected date
  const [date, setDate] = useState(new Date());

  // Function to handle date change
  const handleDateChange = (newDate) => {
    setDate(newDate); // Set the selected date
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Select Date</h2>
      <Calendar
        onChange={handleDateChange} // Handler when a date is selected
        value={date} // The current selected date
      />
      <p>Selected Date: {date.toDateString()}</p>{" "}
      {/* Display the selected date */}
    </div>
  );
};

export default CalendarComponent;
