import React, { useState } from "react";
import "./Contact.css";
import mail from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    data.append("access_key", "11a8e3da-1d7b-4c1e-80e0-f021ccbbde34");

    const object = Object.fromEntries(data);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const responseData = await res.json();

      if (responseData.success) {
        alert(responseData.message);
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Great things happen when we connect.</h1>
          <p>
            Let's create something amazing together. Get in touch with me today!
            Whether you have a big idea or need help bringing your vision to
            life, I'd love to hear from you. Feel free to reach out.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="Email" />
              <p>ritikasuwal1@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Phone" />
              <p>+977 9860413572</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Location" />
              <p>Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message here...."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
