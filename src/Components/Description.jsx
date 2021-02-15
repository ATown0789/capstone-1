import React from "react";

function Description({ album }) {
  return (
    <div className="description">
      <h2>{album.title}</h2>
      <p>Artist: {album.artist}</p>
      <p>Released: {album.released}</p>
      <p>Price: {album.price}</p>
      <p># in stock{album.inStock}</p>
      <h4>Songs</h4>
      <ol>
        {album.songs.map((song) => (
          <li>
            <p>{song}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Description;
