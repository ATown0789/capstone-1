import React, { useState } from "react";
import Description from "../Components/Description";
import AddCart from "../Components/AddCart";

function Product({ album, addToCart }) {
  const [showDes, setShowDes] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const hanldeClick = () => {
    addToCart(album);
    setShowAdd(true);
    setTimeout(() => {
      setShowAdd(false);
    }, 4000);
  };

  const handleImgClick = () => {
    setShowDes(true);
    document.addEventListener("mousedown", closeDes);
  };

  const closeDes = () => {
    setShowDes(false);
    document.removeEventListener("mousedown", closeDes);
  };

  return (
    <div className="album">
      <h2>{album.title}</h2>
      {showDes ? <Description album={album} /> : null}
      {showAdd ? <AddCart album={album} /> : null}
      <img
        className="albumCover"
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
