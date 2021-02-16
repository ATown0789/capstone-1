import React from "react";

function AddCart({ product }) {
  return (
    <div className="add-cart-modal">
      <h3>
        Added <i>"{product.title}"</i> to cart
      </h3>
    </div>
  );
}

export default AddCart;
