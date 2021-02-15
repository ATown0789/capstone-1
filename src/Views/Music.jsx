import React, { useState } from "react";
import Product from "../Components/Product";

function Music({ products, addToCart }) {
  const [value, setValue] = useState("");

  let filterProds = products.filter(
    (album) =>
      album.title.toLowerCase().includes(value.toLowerCase()) ||
      album.songs.some((song) =>
        song.toLowerCase().includes(value.toLowerCase())
      )
  );

  return (
    <div id="music">
      <h1>Music</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="search by album or song title"
      />
      {!value
        ? products.map((album) => (
            <Product addToCart={addToCart} album={album} />
          ))
        : filterProds.map((album) => (
            <Product addToCart={addToCart} album={album} />
          ))}
    </div>
  );
}

export default Music;
