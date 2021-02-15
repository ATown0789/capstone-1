import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CartImage } from "../images/shopping_cart-24px.svg";

function NavBar() {
  return (
    <div>
      <Link to="/shopping-cart">
        <CartImage id="cartImage" fill="currentColor" viewBox="10 0 5 30" />
      </Link>
      <nav>
        <input type="checkbox" id="navCheck" />
        <label id="navBtn" for="navCheck">
          <div className="menuBar"></div>
        </label>
        <ul id="navMenu">
          <li>
            <Link className="menuItem" to="/">
              Welcome
            </Link>
          </li>
          <li>
            <Link className="menuItem" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="menuItem" to="/shop-music">
              Shop Music
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
