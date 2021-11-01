import React from "react";
import "./MyOrders.css";
import ManageOrders from "./../../../Hooks/ManageOrders";

const MyOrders = () => {
  const [packages] = ManageOrders();
  return (
    <div>
      <h2>Hey {packages.length} My Orders</h2>
    </div>
  );
};

export default MyOrders;
