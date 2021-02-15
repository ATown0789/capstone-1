import React from "react";

function AddCart({ album }) {
  return (
    <div className="add-cart-modal">
      <h3>
        Added <i>"{album.title}"</i> to cart
      </h3>
    </div>
  );
}

export default AddCart;
