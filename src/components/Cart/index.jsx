import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart.list);
  const totalSum = cart.reduce((acc, el) => acc + el.price * el.count, 0);

  return (
    <div>
      {cart.map((el) => (
        <CartItem key={el.id} {...el} />
      ))}

      <h3>{totalSum}</h3>
    </div>
  );
};

export default Cart;
