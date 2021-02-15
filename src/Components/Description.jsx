import React from "react";

function Description({ album }) {
  return (
    <div className="description">
      <div>This is a description</div>
      <h2>{album.title}</h2>
      <p>{album.artist}</p>
      <p>{album.released}</p>
      <p>{album.price}</p>
      <p>{album.quantity}</p>
      <ul>
        {album.songs.map((song) => (
          <li>{song}</li>
        ))}
      </ul>
    </div>
  );
}

export default Description;
