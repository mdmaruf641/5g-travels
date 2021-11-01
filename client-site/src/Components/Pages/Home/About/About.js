import React from "react";
import { Container, Row } from "react-bootstrap";
import "./About.css";
import aboutImg from "../../../../images/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faWifi, faGlobe } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const user = <FontAwesomeIcon icon={faUserAlt} />;
  const wifi = <FontAwesomeIcon icon={faWifi} />;
  const globe = <FontAwesomeIcon icon={faGlobe} />;
  return (
    <div className="about" id="about">
      <Container>
        <div className="section-heading">
          <h2 className="fw-bold">Every Time We Provide Best Service</h2>
          <p className="w-75 mx-auto">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>

        <div className="about-items mt-5">
          <Row>
            <div className="col-lg-6">
              <img
                className="w-75 mx-auto rounded about-img"
                src={aboutImg}
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <Row>
                <div className="col-lg-6">
                  <Row className="single-items mt-3">
                    <div className="items-head d-flex justify-content-center align-items-center">
                      <div className="icon-body">
                        <h3 className="icon me-4 fs-4">{user}</h3>
                      </div>
                      <div className="title ">
                        <h5 className="fw-bolder text-start">
                          Best Travel Guide
                        </h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque.
                      </p>
                    </div>
                  </Row>
                  <Row className="single-items mt-3">
                    <div className="items-head d-flex justify-content-center align-items-center">
                      <div className="icon-body">
                        <h3 className="icon me-3 mt-2 fs-4">{globe}</h3>
                      </div>
                      <div className="title">
                        <h5 className="fw-bolder text-start">
                          World Class Service
                        </h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque.
                      </p>
                    </div>
                  </Row>
                </div>
                <div className="col-lg-6">
                  <Row className="single-items mt-3">
                    <div className="items-head d-flex justify-content-center align-items-center">
                      <div className="icon-body">
                        <h3 className="icon fs-4 ms-0 mt-2">{wifi}</h3>
                      </div>
                      <div className="title">
                        <h5 className="fw-bolder text-start">Free Wifi</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque.
                      </p>
                    </div>
                  </Row>
                  <Row className="single-items mt-3">
                    <div className="items-head d-flex justify-content-center align-items-center">
                      <div className="icon-body">
                        <h3 className="icon me-3 fs-4">{user}</h3>
                      </div>
                      <div className="title ">
                        <h5 className="fw-bolder text-start">24/7 Support</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque.
                      </p>
                    </div>
                  </Row>
                </div>
              </Row>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
