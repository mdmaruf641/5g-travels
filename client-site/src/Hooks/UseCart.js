import { useEffect, useState } from "react";
import { getStoredCart } from "../../src/utilities/fakedb";

const UseCart = (packages) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (packages.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedPackage = packages.find((packag) => packag.key === key);

        if (addedPackage) {
          // set quantity
          const quantity = savedCart[key];
          addedPackage.quantity = quantity;
          storedCart.push(addedPackage);
        }
      }
      setCart(storedCart);
    }
  }, [packages]);
  return [cart];
};

export default UseCart;
