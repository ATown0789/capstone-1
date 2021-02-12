import React from "react";

function Description({ close, show, album }) {
  const handleClick = () => {
    close();
  };
  return !show ? null : (
    <div className="description">
      <div>This is a description</div>
      <h2>{album.title}</h2>
      <p>{album.artist}</p>
      <p>{album.released}</p>
      <p>{album.price}</p>
      <p>{album.quantity}</p>
      <button onClick={handleClick}>Close</button>
    </div>
  );
}

export default Description;
