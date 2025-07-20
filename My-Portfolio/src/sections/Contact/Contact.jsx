import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="container">
        <h1 className="sectionTitle">Contact</h1>
        <form action="">
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name="name" id="name" 
                placeholder="Enter your Name..." 
                required 
                />
            </div>
             <div className="formGroup">
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="text" name="email" id="email" 
                placeholder="Enter your E-mail..." 
                required 
                />
            </div>
             <div className="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea name="message" id="Message" 
                placeholder="Message..." 
                required 
                textarea/>
            </div>
            <input className="hoverBtn" type="submit" 
            value="Submit" />
        </form>
    </section>
  )
}

export default Contact
