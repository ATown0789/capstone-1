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
      <button type="button" onClick={handleClick}>
        Remove Item
      </button>
    </div>
  );
}

export default CartItem;
