import React from "react";
import Product from "../Components/Product";

function Politics({ products, addCart }) {
  return (
    <div>
      <h1>This is the Music Product Page</h1>
      {products.map((album) => (
        <Product addCart={addCart} album={album} />
      ))}
    </div>
  );
}

export default Politics;
