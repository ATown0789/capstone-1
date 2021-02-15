import React from "react";
import CartItem from "../Components/CartItem";

function Cart({ cart, removeItem }) {
  let subtotal = 0;
  let tax = 0;
  let total = 0;

  cart.forEach((album) => (subtotal += album.price * album.quantity));

  tax = subtotal * 0.0825;

  total = tax + subtotal;

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((product) => (
        <CartItem removeItem={removeItem} product={product} />
      ))}
      <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
      <h5>Tax: ${tax.toFixed(2)}</h5>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
