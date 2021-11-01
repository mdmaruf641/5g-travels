import React, { useState } from "react";
import AddPackage from "../AddPackage/AddPackage";
import MyOrders from "../MyOrders/MyOrders";
import Profile from "../Profile/Profile";
import "./Dashboard.css";
import AllOrders from "./../AllOrders/AllOrders";
import { Container, Row } from "react-bootstrap";

const Dashboard = () => {
  const [values, setValues] = useState("profile");

  // handle my orders btn
  const profile = (e) => {
    setValues(e.target.value);
  };
  // handle my orders btn
  const myOrders = (e) => {
    setValues(e.target.value);
  };

  // handle all orders btn
  const allOrders = (e) => {
    setValues(e.target.value);
  };
  // handle all orders btn
  const addPackage = (e) => {
    setValues(e.target.value);
  };

  return (
    <div>
      <Container>
        <h2 className="dashboard my-3">Manage Your Dashboard</h2>
        <Row>
          <div className=" col-lg-2">
            <input
              className="add-btn my-2"
              onClick={myOrders}
              type="button"
              value="My Orders"
            />

            <input
              className="add-btn my-2"
              onClick={allOrders}
              type="button"
              value="All Orders"
            />
            <input
              className="add-btn my-2"
              onClick={addPackage}
              type="button"
              value="Add Package"
            />
          </div>
          <div className="col-lg-8">
            {(values === "My Orders" && <MyOrders></MyOrders>) ||
              (values === "All Orders" && <AllOrders></AllOrders>) ||
              (values === "Add Package" && <AddPackage></AddPackage>)}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
