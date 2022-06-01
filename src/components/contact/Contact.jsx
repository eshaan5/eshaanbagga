import React, { useRef, useState } from "react";
import "./contact.css";
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {

  const [buttonText, setButtonText] = useState('Send')

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_emp6ohs', 'template_ps2fz3o', form.current, 'w-YJQkEbW-mlsuGKo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
      setButtonText('Sent!')
      setTimeout(() => setButtonText('Send'), 3000)
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail size={21} />
            <h4>Email</h4>
            <h5>eshaanbagga11@gmail.com</h5>
            <a href="mailto:eshaanbagga11@gmail.com" target="_blank">Send a Message!</a>
          </article>

          <article className="contact__option">
            <AiOutlineLinkedin size={21} />
            <h4>LinkedIn</h4>
            <h5>Eshaan Bagga</h5>
            <a href="https://www.linkedin.com/in/eshaan-bagga/" target="_blank">Get in Touch!</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Enter your message!" required></textarea>
          <button type="submit" className="btn btn-primary">{buttonText}</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
