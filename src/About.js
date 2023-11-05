import React, { Component } from 'react';
import './style.css';

class About extends React.Component {
  render() {
    return (
      <div className='container'>
      <h2>About Us</h2>
      <p>Welcome to our website. We are a passionate team dedicated to making a positive impact in the world.</p>
      
      <h3>Our Mission</h3>
      <p>Our mission is to provide innovative solutions to the challenges of today. We aim to...</p>
      
      <h3>Our Team</h3>
      <p>We are a diverse group of individuals with a wide range of skills and expertise. Our team includes:</p>
      <ul>
        <li>John Doe - Founder and CEO</li>
        <li>Jane Smith - Chief Technology Officer</li>
        <li>Alice Johnson - Lead Designer</li>
        <li>Bob Wilson - Head of Marketing</li>
        {/* Add more team members as needed */}
      </ul>
      
      <h3>Our Values</h3>
      <p>We are guided by a set of core values that define our work and culture. These values include:</p>
      <ul>
        <li>Innovation: We continuously seek new and creative ways to solve problems.</li>
        <li>Integrity: We operate with honesty and transparency in all our interactions.</li>
        <li>Community: We are committed to giving back and supporting our local and global communities.</li>
        {/* Add more values as needed */}
      </ul>
      
      <h3>Contact Us</h3>
      <p>If you have any questions or would like to get in touch with us, please feel free to contact us at <a href="mailto:info@example.com">info@example.com</a>.</p>
    </div>
    );
  }
}

export default About;