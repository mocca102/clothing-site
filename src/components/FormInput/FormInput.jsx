import React from 'react';
import FormInputContainer from './FormInput.styles';

const FormInput = ({ label, type, name, value, handleChange }) => (
  <FormInputContainer shrink={value.length}>
    <label htmlFor={name}>
      <input
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        required
      />
      <span>
        { label && label.length > 0 ? label : null }
      </span>
    </label>
  </FormInputContainer>
);

export default FormInput;
