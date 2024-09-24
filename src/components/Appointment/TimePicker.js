import React from "react";

const TimePicker = ({ selectedTime, onTimeChange }) => {
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 8; hour < 16; hour++) {
      const formattedHour = hour.toString().padStart(2, "0");
      times.push(`${formattedHour}:00`, `${formattedHour}:30`);
    }
    return times;
  };

  return (
    <fieldset className="form-group">
      <legend>Select Time:</legend>
      <select
        id="appointmentTime"
        value={selectedTime}
        onChange={(e) => onTimeChange(e.target.value)}
        required
        aria-label="Select appointment time"
      >
        <option value="">Select a time</option>
        {generateTimeOptions().map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default TimePicker;
