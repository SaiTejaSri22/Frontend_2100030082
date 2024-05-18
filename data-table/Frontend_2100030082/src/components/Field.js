import React from 'react';
import './Field.css';

const Field = ({ type, id, handleInputChange, removeField }) => {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    handleInputChange(id, type === 'checkbox' || type === 'radio' ? checked : value);
  };

  return (
    <div className="field-container">
      <label>{`Enter ${type.charAt(0).toUpperCase() + type.slice(1)}`}</label>
      <input type={type} onChange={handleChange} />
      <button type="button" className="remove-btn" onClick={() => removeField(id)}>Remove</button>
    </div>
  );
};

export default Field;
