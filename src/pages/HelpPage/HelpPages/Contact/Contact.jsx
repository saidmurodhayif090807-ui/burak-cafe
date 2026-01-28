import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add your submission logic here
  };

  return (
    <section className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact Us!</h2>
        <p className="contact-subtitle">Fill out below form to send a message!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ism</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ilkhom"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Elektron Manzil</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Xabar</label>
            <textarea
              id="message"
              name="message"
              placeholder="Xabar"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="button-container">
            <button type="submit" className="send-button">SEND</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;