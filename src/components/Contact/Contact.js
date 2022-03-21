import React, { useRef } from "react";
import "./Contact.css";
import { Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tavl53z', 'template_n12thwj', form.current, 'user_iv16rQ1tPnRESMdNxg2gu')
      .then((result) => {
          if (result.text) {
            swal("Email Send", "", "success");
          }
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <div style={{margin: '100px 0 15px 0'}}>
      <div>
        <h4 style={{ textAlign: "center", color: "#e74c3c" }}>If You Want~</h4>
        <h2
          style={{ textAlign: "center", color: "#2c3e50", fontWeight: "700" }}
        >
          Contact With Me!
        </h2>
        <Container>
          <div className="form-area px-2">
            <form  ref={form} onSubmit={sendEmail}>
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
              <input
                className="form-control"
                type="email"
                placeholder="Your Email"
                name="email"
                required
              />
              <input
                className="form-control"
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
              <textarea className="form-control" placeholder="Message" name="message" />
              <div className="text-center">
                <button className="mailBtn" type="submit">
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
