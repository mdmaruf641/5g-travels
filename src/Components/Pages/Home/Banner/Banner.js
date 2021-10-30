import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Banner.css";

const Banner = () => {
  const arrow = <FontAwesomeIcon icon={faArrowRight} />;

  return (
    <div className="banner">
      <Container>
        <div className="bnr-dtls">
          <h1>Welcome To our Hotel and Resort</h1>
          <p>
            5G Travels is a jaw-dropping tour booking website template with a
            very modern and creative design.
          </p>
          <button>Booking Now {arrow}</button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
