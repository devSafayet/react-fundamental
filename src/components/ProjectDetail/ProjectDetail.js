import React, { useEffect, useState } from "react";
import "./ProjectDetail.css";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Slider from "react-slick";

const ProjectDetail = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { id } = useParams();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  //   console.log(projects);

  let project = projects.find((p) => p.id == id);

  return (
    <div style={{ margin: "100px 0 20px 0" }}>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={5} style={{ padding: "0 40px 30px 40px" }}>
            <h3 style={{ color: "#2c3e50", fontWeight: "bold" }}>
              Screenshots
            </h3>
            <Slider {...settings}>
              <div>
                <img
                  style={{
                    width: "100%",
                    border: "2px solid #e67e22",
                    margin: "15px 0",
                  }}
                  src={project?.image2}
                  alt=""
                />
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    border: "2px solid #e67e22",
                    margin: "15px 0",
                  }}
                  src={project?.image3}
                  alt=""
                />
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    border: "2px solid #e67e22",
                    margin: "15px 0",
                  }}
                  src={project?.image4}
                  alt=""
                />
              </div>
            </Slider>
          </Col>
          <Col xs={12} md={6} lg={7}>
            <div className="project-details">
              <h3 style={{ color: "#2c3e50", fontWeight: "bold" }}>Overview</h3>
              <div style={{ marginBottom: "20px" }}>
                <h3
                  style={{ fontWeight: "700", color: "#e67e22", margin: "0" }}
                >
                  {project?.name}{" "}
                </h3>
                <p
                  style={{
                    fontWeight: "400",
                    color: "#2c3e50",
                    fontSize: "18px",
                    margin: "0",
                  }}
                >
                  ({project?.type})
                </p>
                <span className="fw-bold m-0">{project?.duration}</span>
              </div>
              <div className="details">
                <a target="_blank" href={project?.liveSite}>
                  <button className="desBtn btn me-2 btn-sm">Live site</button>
                </a>
                {project?.serverCode ? (
                  <a target="_blank" href={project?.clientCode}>
                    <button className="desBtn btn me-2 btn-sm">
                      Client code
                    </button>
                  </a>
                ) : (
                  <a target="_blank" href={project?.clientCode}>
                    <button className="desBtn btn me-2 btn-sm">Github</button>
                  </a>
                )}
                {project?.serverCode ? (
                  <a target="_blank" href={project?.serverCode}>
                    <button className="desBtn btn me-2 btn-sm">
                      Server code
                    </button>
                  </a>
                ) : (
                  ""
                )}
                <div className="description mt-4">
                  <h4 style={{ color: "#2c3e50" }}>Description</h4>
                  <p>
                    <i className="fas fa-check"></i> {project?.description1}
                  </p>
                  <p>
                    <i className="fas fa-check"></i> {project?.description2}
                  </p>
                  <p>
                    <i className="fas fa-check"></i> {project?.description3}
                  </p>
                  <p>
                    <i className="fas fa-check"></i> {project?.description4}
                  </p>
                  <p>
                    <i className="fas fa-check"></i> {project?.description5}
                  </p>
                </div>
                <div className="technology">
                  <h4 style={{ color: "#2c3e50", marginBottom: "15px" }}>
                    Technology
                  </h4>
                  {project?.technology1 ? (
                    <button className="techBtn btn">
                      {project?.technology1}
                    </button>
                  ) : (
                    ""
                  )}
                  {project?.technology2 ? (
                    <button className="techBtn btn">
                      {project?.technology2}
                    </button>
                  ) : (
                    ""
                  )}
                  {project?.technology3 ? (
                    <button className="techBtn btn">
                      {project?.technology3}
                    </button>
                  ) : (
                    ""
                  )}
                  {project?.technology4 ? (
                    <button className="techBtn btn">
                      {project?.technology4}
                    </button>
                  ) : (
                    ""
                  )}
                  {project?.technology5 ? (
                    <button className="techBtn btn">
                      {project?.technology5}
                    </button>
                  ) : (
                    ""
                  )}
                  {project?.technology6 ? (
                    <button className="techBtn btn">
                      {project?.technology6}
                    </button>
                  ) : (
                    ""
                  )}
                  {project?.technology7 ? (
                    <button className="techBtn btn">
                      {project?.technology7}
                    </button>
                  ) : (
                    ""
                  )}
                  {project?.technology8 ? (
                    <button className="techBtn btn">
                      {project?.technology8}
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectDetail;
