import React from "react";

function TextField({ name, value, onChange, placeholder }) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  );
}

export default TextField;
