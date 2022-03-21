import React from "react";
import './Navigation.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navigation = () => {

  return (
    <Navbar fixed="top" className="navigation-bar" expand="lg">
      <Container>
        <Navbar.Brand><h3 className="logo"><span>S</span>ayem</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="navigation-menu">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
            {/* <div className="resume-div">
              <a target="_blank" href="https://drive.google.com/file/d/1eXsAZRezeKY_4ZwDEactAZKrZFBDxB12/view?usp=sharing"><i className="fas fa-download"></i> Download Resume</a>
            </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
