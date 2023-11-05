import React, { Component } from 'react';
import './style.css';

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          We are here to assist you. If you have any questions, feedback, or
          inquiries, please don't hesitate to get in touch with us.
        </p>

        <h3>Contact Information</h3>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:contact@example.com">contact@example.com</a>
          <br />
          <strong>Phone:</strong> +1 (123) 456-7890
          <br />
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>

        <h3>Support Hours</h3>
        <p>We're available to assist you during the following hours:</p>
        <ul>
          <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 2:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>

        <h3>Contact Form</h3>
        <p>
          If you prefer, you can also use the contact form below to reach out to
          us:
        </p>

        <form>
          <div className='form-control'>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" className='form-control'required />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" className='form-control' required />
          </div>
          <div>
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" className='form-control' required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
