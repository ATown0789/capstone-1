import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Welcome</Link>
      <Link to="/about">About</Link>
      <Link to="/shopping-cart">Shopping Cart</Link>
      <Link to="/buy-music">Buy Music</Link>
    </nav>
  );
}

export default NavBar;
