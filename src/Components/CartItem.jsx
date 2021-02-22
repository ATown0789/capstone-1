import React from "react";

function CartItem({ plus, minus, product, removeItem }) {
  const handleClick = () => {
    removeItem(product);
  };

  const handlePlus = () => {
    plus(product);
  };

  const handleMinus = () => {
    minus(product);
  };

  return (
    <div className="cartItem">
      <img src={product.image} alt={`product art for ${product.title}`} />
      <div className="cartInfo">
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <p>
          Quantity: <span onClick={handleMinus}>-</span>
          {product.quantity}
          {product.quantity + 1 <= product.inStock ? (
            <span onClick={handlePlus}>+</span>
          ) : null}
        </p>
      </div>
      <div id="btnCont" onClick={handleClick}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default CartItem;
