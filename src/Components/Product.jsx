import React, { useState } from "react";
import Description from "../Components/Description";

function Product({ album, addCart, toggleDes }) {
  const [showDes, setShowDes] = useState(false);

  const hanldeClick = () => {
    addCart(album);
    alert(`${album.title} has been added to cart`);
  };

  const handleImgClick = () => {
    setShowDes(true);
  };

  const closeDes = () => {
    setShowDes(false);
  };

  return (
    <div>
      <h2>{album.title}</h2>
      <Description close={closeDes} show={showDes} album={album} />
      <img
        src={album.image}
        onClick={handleImgClick}
        alt={`album art for ${album.title}`}
      />
      <p>${album.price}</p>
      <button type="button" onClick={hanldeClick}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
