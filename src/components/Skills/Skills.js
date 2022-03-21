import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="my-skills">
      <Container>
        <div className="px-2">
          <h1 style={{ fontWeight: "700", color: "#2c3e50" }}>My Skills!</h1>
          <p style={{ color: "#7f8c8d" }}>
            I am expertise on web development in this skills.
          </p>
        </div>
        <Row className="px-2">
          <Col xs={12} md={12} lg={6} className="pe-5 first-col">
            <div className="my-progress">
              <h5 style={{ color: "#2c3e50" }}>Html</h5>
              <ProgressBar animated now={85} label={`${85}%`} />
            </div>
            <div className="my-progress">
              <h5 style={{ color: "#2c3e50" }}>Css</h5>
              <ProgressBar animated now={75} label={`${75}%`} />
            </div>
            <div className="my-progress">
              <h5 style={{ color: "#2c3e50" }}>Bootstrap</h5>
              <ProgressBar animated now={85} label={`${85}%`} />
            </div>
            <div className="my-progress">
              <h5 style={{ color: "#2c3e50" }}>Tailwind CSS</h5>
              <ProgressBar animated now={65} label={`${65}%`} />
            </div>
            <div className="my-progress">
              <h5 style={{ color: "#2c3e50" }}>JavaScript</h5>
              <ProgressBar animated now={60} label={`${60}%`} />
            </div>
            <div className="my-progress">
              <h5 style={{ color: "#2c3e50" }}>React Js...(Learner)</h5>
              <ProgressBar animated now={50} label={`${50}%`} />
            </div>
            <div className="my-progress">
              <h5 style={{ color: "#2c3e50" }}>React-Bootstrap</h5>
              <ProgressBar animated now={70} label={`${70}%`} />
            </div>
            <div className="my-progress">
              <h5 style={{ color: "#2c3e50" }}>Redux...(Learner)</h5>
              <ProgressBar animated now={0} label={`${0}%`} />
            </div>
          </Col>
          <Col xs={12} md={12} lg={6} className="ps-5 second-col">
            <div className="my-progress">
              <h5 style={{ color: "#2c3e50" }}>Firebase...(Learner)</h5>
              <ProgressBar animated now={0} label={`${0}%`} />
            </div>
            <div className="my-progress">
              <h5 style={{ color: "#2c3e50" }}>Node Js...(Learner)</h5>
              <ProgressBar animated now={0} label={`${0}%`} />
            </div>
            <div className="my-progress">
              <h5 style={{ color: "#2c3e50" }}>Express Js...(Learner)</h5>
              <ProgressBar animated now={0} label={`${0}%`} />
            </div>
            <div className="my-progress">
              <h5 style={{ color: "#2c3e50" }}>MongoDB...(Learner)</h5>
              <ProgressBar animated now={0} label={`${0}%`} />
            </div>
            <div className="my-progress">
              <h5 style={{ color: "#2c3e50" }}>Material UI...(Learner)</h5>
              <ProgressBar animated now={0} label={`${0}%`} />
            </div>
            <div className="my-progress">
              <h5 style={{ color: "#2c3e50" }}>TypeScript...(Learner)</h5>
              <ProgressBar animated now={0} label={`${0}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
