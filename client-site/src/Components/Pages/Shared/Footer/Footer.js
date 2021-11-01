import React from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  const email = <FontAwesomeIcon icon={faEnvelope} />;
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const location = <FontAwesomeIcon icon={faLocationArrow} />;
  return (
    <div>
      <div className="footer  py-5 mt-4">
        <Container>
          <Row>
            <div className="col-lg-3 col-md-6">
              <div className="footer-heading text-start text-white mb-3">
                <h3>
                  <span>5G.</span>Travels
                </h3>
              </div>
              <div className="footer-info ps-2">
                <div className="d-flex ms-4 align-items-center">
                  <div className=" me-4  fs-3">{email}</div>
                  <div className=" text-start contact-info">
                    <p>maruf.moni.mm@gmail.com</p>
                    <p>maruf.moni.mm@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex ms-4 align-items-center my-3">
                  <div className=" me-4 fs-3">{phone}</div>
                  <div className=" text-start contact-info">
                    <p>+880 1641656113</p>
                    <p>+880 1788368262</p>
                  </div>
                </div>
                <div className="d-flex ms-4 align-items-center">
                  <div className=" me-4 fs-3">{location}</div>
                  <div className=" text-start contact-info">
                    <p>Khulshi, Chittagong,</p>
                    <p>Bangladesh.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 ps-4">
              <div className="footer-heading text-start text-white ps-2 mb-3">
                <h3>Quick Links</h3>
              </div>
              <div className="footer-links ps-2 text-start">
                <ul>
                  <li>About Us</li>
                  <li>Blogs</li>
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>Team</li>
                  <li>Privacy & Policy</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-heading text-start text-white ps-2 mb-3">
                <h3>Our Services</h3>
              </div>
              <div className="footer-links ps-2 text-start">
                <ul>
                  <li>Work Injuries</li>
                  <li>Travel Blog & Tips</li>
                  <li>gallerying With Us</li>
                  <li>Tour Guid</li>
                  <li>Be Our Partner</li>
                  <li>Our Story</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-heading text-start text-white ps-2 mb-3">
                <h3>Support</h3>
              </div>

              <div className="footer-links text-start">
                <ul>
                  <li>Work Injuries</li>
                  <li>Travel Blog & Tips</li>
                  <li>gallerying With Us</li>
                  <li>Tour Guid</li>
                  <li>Be Our Partner</li>
                  <li>Our Story</li>
                </ul>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div className="mini-footer">
        <Container>
          <p className="py-4 m-0">
            Copyright © 2021 | All Rights Reserved by <span>Md. Maruf</span>
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
