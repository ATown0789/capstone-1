import React from "react";

function CartItem({ product, removeItem }) {
  const handleClick = () => {
    removeItem(product);
  };

  return (
    <div className="cartItem">
      <img src={product.image} alt={`product art for ${product.title}`} />
      <div className="cartInfo">
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <p>Quantity: {product.quantity}</p>
      </div>
      <div id="btnCont" onClick={handleClick}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default CartItem;
