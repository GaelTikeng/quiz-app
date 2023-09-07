import React from "react";

function InputField({ type, value, name, placeholder, label, onChange }) {
  return (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
      className="form_control"
       type={type} 
       value={value} 
       placeholder={placeholder} 
       name={name} 
       onChange={onChange}/>
    </div>
  );
}

export default InputField;
