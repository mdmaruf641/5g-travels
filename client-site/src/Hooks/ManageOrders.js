import { useEffect, useState } from "react";

const ManageOrders = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://howling-treat-26209.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return [packages];
};

export default ManageOrders;
