import React from "react";
import "./InputField.css";

function InputField({ type, name, label, onChange, checked, value }) {
  return (
    <div className="form-group">
      <label htmlFor="input-field" className="html_label">
        {label}
      </label>
      <input
        className="form_control"
        value={value}
        type={type}
        checked={checked}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
