import React from "react";
import CartItem from "../Components/CartItem";

function Cart({ cart, removeItem }) {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((product) => (
        <CartItem removeItem={removeItem} product={product} />
      ))}
    </div>
  );
}

export default Cart;
