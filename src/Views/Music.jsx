import React, { useState } from "react";
import Product from "../Components/Product";

function Music({ products, addCart }) {
  const [value, setValue] = useState("");

  let filterProds = products.filter(
    (album) =>
      album.title.toLowerCase().includes(value.toLowerCase()) ||
      album.songs.some((song) =>
        song.toLowerCase().includes(value.toLowerCase())
      )
  );

  return (
    <div>
      <h1>This is the Music Product Page</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placehodler="search by album title"
      ></input>
      {!value
        ? products.map((album) => <Product addCart={addCart} album={album} />)
        : filterProds.map((album) => (
            <Product addCart={addCart} album={album} />
          ))}
    </div>
  );
}

export default Music;
