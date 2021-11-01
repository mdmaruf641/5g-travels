import React, { useState } from "react";
import AddPackage from "../AddPackage/AddPackage";
import MyOrders from "../MyOrders/MyOrders";
import Profile from "../Profile/Profile";
import "./Dashboard.css";
import AllOrders from "./../AllOrders/AllOrders";

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
      <h2 className="dashboard">Manage Your Dashboard</h2>

      <div className=" my-3 d-flex justify-content-center align-items-center">
        <input
          className="add-btn mx-4"
          onClick={profile}
          type="button"
          value="Profile"
        />
        <input
          className="add-btn mx-4"
          onClick={myOrders}
          type="button"
          value="My Orders"
        />

        <input
          className="add-btn mx-4"
          onClick={allOrders}
          type="button"
          value="All Orders"
        />
        <input
          className="add-btn mx-4"
          onClick={addPackage}
          type="button"
          value="Add Package"
        />
      </div>

      {(values === "Profile" && <Profile></Profile>) ||
        (values === "My Orders" && <MyOrders></MyOrders>) ||
        (values === "All Orders" && <AllOrders></AllOrders>) ||
        (values === "Add Package" && <AddPackage></AddPackage>)}
    </div>
  );
};

export default Dashboard;
