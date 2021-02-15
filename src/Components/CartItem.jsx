import React from "react";

function CartItem({ product, removeItem }) {
  const handleClick = () => {
    removeItem(product);
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={`product art for ${product.title}`} />
      <p>${product.price}</p>
      <p>Quantity: {product.quantity ? product.quantity : 1}</p>
      <button type="button" onClick={handleClick}>
        Remove Item
      </button>
    </div>
  );
}

export default CartItem;
