
import React, { useState } from "react";
import Footer from "./Footer";

export default function ContactMe() {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data to the console
    console.log(formData);
  };

  return (
    <div>
      <section id="Contact" className="contact--section">
        <div>
          <p className="sub--title">Get In Touch</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
            Please fill out the form below to discuss any work opportunities.
          </p>
        </div>
        <form className="contact--form--container" onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="firstName"
                id="first-name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="lastName"
                id="last-name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">Phone Number</span>
              <input
                type="tel"
                className="contact--input text-md"
                name="phoneNumber"
                id="phone-number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <button className="btn btn-primary contact--form--btn">Submit</button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
}




