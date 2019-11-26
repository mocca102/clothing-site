import React from 'react';

import './FormInput.scss';

const FormInput = ({ label, type, name, value, handleChange }) => (
  <div className="form-input">
    <label htmlFor={name}>
      { label && label.length > 0 ? label : null }
      <input
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        required
      />
    </label>
  </div>
);

export default FormInput;
