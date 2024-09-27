import React from "react";

const Purpose = ({ selectedPurpose, onPurposeChange }) => {
  const purpose = [
    {
      purpose: "Barangay Clearance",
      description: "barangay clearance description",
    },
    { purpose: "Barangay ID", description: "barangay id description" },
  ];

  return (
    <fieldset className="form-group">
      <legend>Select Purpose</legend>
      <select
        id=""
        value={selectedPurpose}
        onChange={(e) => onPurposeChange(e.target.value)}
        required
        aria-label="Select purpose"
      >
        <option value="">Select a purpose</option>
        {purpose.map((item, index) => (
          <option key={index} value={item.purpose}>
            {item.purpose}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default Purpose;
