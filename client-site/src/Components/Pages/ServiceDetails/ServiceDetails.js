import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetails.css";
import { Container } from "react-bootstrap";

const ServiceDetails = () => {
  const { _id } = useParams();
  const [serviceData, setServiceData] = useState({});

  useEffect(() => {
    fetch("https://howling-treat-26209.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        const detailsItems = data.find((details) => details._id === _id);
        setServiceData(detailsItems);
      });
  }, [_id]);

  return (
    <div>
      <Container>
        <h1 className="dtls-hdr mt-3">Place Your Order</h1>
        <div className="service-dtls mt-4">
          <img
            className="w-50 h-25 rounded mt-2"
            src={serviceData?.img}
            alt=""
          />
          <div className="dtls-content">
            <h3>Name: {serviceData?.name}</h3>
            <p>Description: {serviceData?.description}</p>
            <h4>Price: ${serviceData?.price}</h4>
            <button className="add-btn">Booking Now</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
