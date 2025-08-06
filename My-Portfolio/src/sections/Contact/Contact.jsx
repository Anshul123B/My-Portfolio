import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [status, setStatus] = useState(''); // Track form status
  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent page reload
    setStatus('Message Sent! ✅'); //Set success message
    // Clear the form
    e.target.reset();
    // Remove message after 3 seconds
    setTimeout(() => {
      setStatus('');
    }, 3000);
  };
  return (
    <section id="contact" className="container">
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <input type="text" name="name" id="name"
            placeholder="Enter your Name..."
            required />
        </div>
        <div className="formGroup">
          <input type="email" name="email" id="email"
            placeholder="Enter your E-mail..."
            required />
        </div>

        <div className="formGroup">
          <textarea name="message" id="Message"
            placeholder="Type your Message here..."
            required />
        </div>
        <input className="hover btn" type="submit" value="Submit" />
        {/* Show confirmation message */}
        {status && <p className="successMessage">{status}</p>}
      </form>
    </section>
  )
}

export default Contact
