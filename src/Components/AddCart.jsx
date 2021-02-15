import React from "react";

function AddCart({ album }) {
  return (
    <div className="add-cart-modal">
      <h4>Added "{album.title}" to cart</h4>
    </div>
  );
}

export default AddCart;
