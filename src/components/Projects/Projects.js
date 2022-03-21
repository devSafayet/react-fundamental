import React, { useEffect, useState } from 'react';
import './Projects.css';
import { Col, Container, Row } from 'react-bootstrap';
import projectOne from '../../images/projects/car-1.png';
import projectTwo from '../../images/projects/car-1.png';
import projectThree from '../../images/projects/car-1.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div style={{ margin: "100px 0" }} className="px-2">
            <Container>
                <h1 style={{ fontWeight: '700', color: '#2c3e50' }}>My Best Projects that I did!</h1>
                <Row className="mt-2 g-4" xs={1} md={2} lg={3}>
                    {
                        projects?.map(project => <Col>
                            <div className="card-parent">
                                <img src={project.image1} alt="" />
                                <div className="card-overlay">
                                    <div className="card-textt">
                                        <h5>{project.name}</h5>
                                        <p>{project.shortDescription}</p>
                                        <Link to={`/projectDetail/${project.id}`}><button className="projectBtn">More Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Projects;