import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <div className="about-area my-5 pt-5" id="about-section">
      <Container>
        <Row className="px-3">
          <Col xs={12} md={12} lg={6}>
            <div className="about-img">
              <img src={aboutImg} alt="" />
              <div className="info-detail">
                <span>Name</span>
                <h5>MD. SAFAYETUL ISLAM</h5>
                <p>----------------------------</p>
                <span>Birthday</span>
                <h5>09 Feb 2001</h5>
                <p>----------------------------</p>
                <span>Phone</span>
                <h5>+8801836-539470</h5>
                <p>----------------------------</p>
                <span>Address</span>
                <h5>Nangalkot, Cumilla, Bangladesh</h5>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <h5 style={{ color: "#e74c3c", fontWeight: "bold" }}>About me!</h5>
            <h4 className="title">
              Frontend Developer || React Developer
            </h4>
            <h5 style={{ fontWeight: "500" }}>
              A passionate React Developer and Frontend based
              developer in Bangladesh.
            </h5>
            <p className="para" style={{ color: "#7f8c8d", fontSize: "18px", textAlign: 'left' }}>
              Assalamu Alakimu..! My name is MD Safayetul Islam. I am Frontend Developer, and I'm
              very passionate and dedicated to my work. I have acquired the skills and
              knowledge necessary to make your project a success.
            </p>
            {/* <div className="resume-div pt-2">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1T8jOodj0LTNC0ezcfKJ4XSfDJ-TgHWQ_/view?usp=sharing"
              >
                <i className="fas fa-download"></i> Download Resume
              </a>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
