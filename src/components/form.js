import React, { useState } from "react";
import TextField from "./TextField";
import SubmitButton from "./SubmitButton";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName) {
      onSubmit(formData);
      setFormData({ firstName: "", lastName: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <TextField
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
}

export default Form;
