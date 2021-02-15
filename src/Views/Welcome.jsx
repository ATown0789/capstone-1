import React from "react";
import davidImage from "../images/Facetune_30-08-2020-00-06-35.jpg";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <h1 id="welcome-h1">David Slater</h1>
      <img id="david-image" src={davidImage} alt="David Slater singing face" />
      <Link className="arrow" to="/shop-music"></Link>
    </div>
  );
}

export default Welcome;
