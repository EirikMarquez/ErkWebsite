import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8xypvyc",
      "template_ejphgxz",
      form.current,
      "LThPI1wH7jB_I2Qcy"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>EirikLMarquez@gmail.com</h5>
            <a href="mailto:eiriklmarquez@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <FiTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>EirikLMarquez@gmail.com</h5>
            <a
              href="https://twitter.com/messages/compose?recipient_id=1538579814747095040&text=Hey%20Eirik!"
              target="_blank"
              data-screen-name="@eirikmarquez"
            >
              Message @EirikMarquez
            </a>
          </article>

          <article className="contact__option">
            <FiPhoneCall className="contact__option-icon" />
            <h4>Phone Number</h4>
            <h5>+8304603745</h5>
            <a href="tel:830-460-3745" target="_blank">
              Call or Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" Required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
