import React from "react";
import { useHistory } from "react-router";
import "./Service.css";

const Service = (props) => {
  const { name, img, description, price, _id } = props.service;

  // handle service details button
  const history = useHistory();
  const handleDetailsBtn = () => {
    history.push(`/serviceDetail/${_id}`);
  };

  return (
    <div className="service mt-3">
      <img className="w-100" src={img} alt="package-img" />
      <h4 className="mt-3">{name}</h4>
      <p>{description}</p>
      <h5>Price: {price}</h5>

      <button onClick={handleDetailsBtn}>Booking Naw</button>
    </div>
  );
};

export default Service;
