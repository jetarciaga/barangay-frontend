import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";

const DatePicker = ({ selectedDate, onDateChange }) => {
  return (
    <fieldset classname="form-group">
      <legend>Select Date:</legend>
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date) => onDateChange(date)}
        minDate={new Date()}
        placeholderText="Click to select date"
        dateFormat="MMMM d, yyyy"
        className="form-control"
        aria-label="Select appointment date"
      />
    </fieldset>
  );
};

export default DatePicker;
