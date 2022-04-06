import React from 'react';
import './Input.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="input-input"
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default Input;
