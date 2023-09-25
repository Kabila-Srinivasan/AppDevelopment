import React, { useState } from "react";
import "./Contactus.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      const isValid = validateEmail(value);
      setErrors({ ...errors, email: isValid ? "" : "Invalid email" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() === "") {
      setErrors({ ...errors, name: "Name is required" });
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, email: "Invalid email" });
      return;
    }
    console.log("Form data:", formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <span className="error">{errors.name}</span>
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="error">{errors.email}</span>
      </div>
      <div className="form-group">
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
