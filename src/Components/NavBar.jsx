import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CartImage } from "../images/shopping_cart-24px.svg";
import NumItems from "./NumItems";

function NavBar({ cartNum }) {
  const navLabel = useRef();

  const handleClick = () => {
    document.addEventListener("mousedown", uncheck);
  };

  const uncheck = () => {
    if (navLabel.current.checked) navLabel.current.checked = false;

    document.removeEventListener("mosedown", uncheck);
  };
  return (
    <div>
      <Link to="/shopping-cart">
        {cartNum ? <NumItems cartNum={cartNum} /> : null}
        <CartImage id="cartImage" fill="currentColor" viewBox="10 0 5 30" />
      </Link>
      <nav>
        <input ref={navLabel} type="checkbox" id="navCheck" />
        <label id="navBtn" for="navCheck" onClick={handleClick}>
          <div className="menuBar"></div>
        </label>
        <ul id="navMenu">
          <li>
            <Link className="menuItem" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="menuItem" to="/buy-music">
              Buy Music
            </Link>
          </li>
          <li>
            <Link className="menuItem" to="/shopping-cart">
              Shopping Cart <span id="inlineNum">{cartNum}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
