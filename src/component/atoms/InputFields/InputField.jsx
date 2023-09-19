import React from "react";
import './InputField.css'

function InputField({ type, name,label, onChange, value }) {
  return (
    <div className="form-group">
     <label htmlFor="input-field" className="html_label">{label}</label>
      <input
      className="form_control"
       type={type} 
       name={name} 
       onChange={onChange}
       value={value}
       />
    </div>
  );
}

export default InputField;
