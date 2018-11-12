import React from "react";

export function GuestSelector({options, title, fieldName, value, disabled, onChange}){
  return(
    <div className="column guess-selector">     
      <label>{title}</label>      
      <select name={fieldName} value={value} disabled={disabled} onChange={onChange}>
        {options && options.map(option => (<option key={option} value={option}>{option}</option>))}
      </select>           
    </div>
  );
}

export default GuestSelector;