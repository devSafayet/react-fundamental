import React from "react";
import "./Banner.css";
import { Col, Container, Row } from "react-bootstrap";
import myImg from "../../images/myImg.jpg";
import Typical from 'react-typical';
// import ParticleComponent from "../../Particle/ParticleComponent";

const Banner = () => {
  return (
    <div className="banner-area">
      {/* <ParticleComponent /> */}
      <Container>
        <Row className="d-flex align-items-center px-3">
          <Col xs={12} md={6} lg={7}>
            <div className="banner-intro">
              <h5>Assalamu Alaikum..!</h5>
              <h1>
                I'm Md. SafayeTul Islam Sayem.
              </h1>
              <h3>
                I am a{' '} <span>
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      'Frontend Developer',
                      1000,
                      'React Developer',
                      1000,
                      'Competitive Programmer',
                      1000
                    ]}
                  />
                </span>
              </h3>
              <p>
                I am working front end design and development with HTML, CSS,
                JavaScript, React. I can make dynamic and responsive website for
                mobile.
              </p>
              <div className="social-link">
                <a href="https://www.facebook.com/safayet003.admin/" target="_blank">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/https://www.linkedin.com/in/safayet003-admin/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/safayet003-admin"
                  target="_blank"
                >
                  <i class="fab fa-github-square"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <div className="banner-img">
              <img src={myImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
