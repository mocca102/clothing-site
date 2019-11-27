import React from 'react';

import './FormInput.scss';

const FormInput = ({ label, type, name, value, handleChange }) => (
  <div className="form-input">
    <label htmlFor={name}>
      <input
        className="form-input__input"
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        required
      />
      <span className={`${value.length ? 'shrink' : ''} form-input__label`}>
        { label && label.length > 0 ? label : null }
      </span>
    </label>
  </div>
);

export default FormInput;
