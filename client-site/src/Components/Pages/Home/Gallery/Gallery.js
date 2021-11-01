import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  const arrow = <FontAwesomeIcon icon={faArrowRight} />;
  return (
    <div className="my-5" id="gallery">
      <Container>
        <div className="section-heading my-5">
          <h2>Best Tourist's Shared Photos</h2>
        </div>
        <Row className=" mt-3">
          <div className="col-lg-4 mt-4">
            <div className="row mb-3">
              <img
                src={
                  "http://themesvila.com/html-templates/laveria/assets/img/gallery/1.jpg"
                }
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="row mb-3">
              <img
                src={
                  "http://themesvila.com/html-templates/laveria/assets/img/gallery/2.jpg"
                }
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row mb-3">
              <img
                src={
                  "http://themesvila.com/html-templates/laveria/assets/img/gallery/3.jpg"
                }
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="row mb-3">
              <img
                src={
                  "http://themesvila.com/html-templates/laveria/assets/img/gallery/4.jpg"
                }
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="row mb-3">
              <img
                src={
                  "http://themesvila.com/html-templates/laveria/assets/img/gallery/7.jpg"
                }
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className="row mb-3">
              <img
                src={
                  "http://themesvila.com/html-templates/laveria/assets/img/gallery/5.jpg"
                }
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="row mb-3">
              <img
                src={
                  "http://themesvila.com/html-templates/laveria/assets/img/gallery/6.jpg"
                }
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="row mb-3">
              <img src={""} className="img-fluid" alt="" />
            </div>
          </div>
        </Row>
        <button className="add-btn mt-3">Load moare {arrow}</button>
      </Container>
    </div>
  );
};

export default Gallery;
