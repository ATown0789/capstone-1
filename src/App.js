import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./Styles/App.scss";
import NavBar from "./Components/NavBar";
import Cart from "./Views/Cart";
import Welcome from "./Views/Welcome";
import Music from "./Views/Music";
import About from "./Views/About";
import Footer from "./Components/Footer";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([{ loaded: false }]);
  const [cart, setCart] = useState([]);
  const [cartNum, setCartNum] = useState(0);

  const { pathname } = useLocation();

  const resetCartNum = () => {
    setCartNum(0);
  };

  const addToCart = (product) => {
    const newCartNum = cartNum + 1;
    setCartNum(newCartNum);

    if (cart.findIndex((item) => item.title === product.title) !== -1) {
      product.quantity += 1;
      const indexNum = cart.findIndex((item) => item.title === product.title);
      const newCart = [...cart];
      newCart.splice(indexNum, 1, product);
      setCart([...newCart]);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  };

  const removeItem = (product) => {
    setCart(cart.filter((item) => item.title !== product.title));

    const newCartNum = cartNum - product.quantity;
    setCartNum(newCartNum);
  };

  const plus = (product) => {
    if (product.quantity + 1 <= product.inStock) {
      product.quantity++;
      const indexNum = cart.findIndex((item) => item.title === product.title);
      const newCart = [...cart];
      newCart.splice(indexNum, 1, product);
      setCart([...newCart]);

      const newCartNum = cartNum + 1;
      setCartNum(newCartNum);
    }
  };

  const minus = (product) => {
    if (product.quantity > 1) {
      product.quantity--;
      const indexNum = cart.findIndex((item) => item.title === product.title);
      const newCart = [...cart];
      newCart.splice(indexNum, 1, product);
      setCart([...newCart]);
      const newCartNum = cartNum - 1;
      setCartNum(newCartNum);
    } else if (product.quantity === 1) {
      removeItem(product);
    }
  };

  useEffect(() => {
    axios.get("./data.json").then(({ data }) => {
      setProducts([{ loaded: true }, data]);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {pathname !== "/" ? <NavBar cartNum={cartNum} /> : null}
      </header>
      {!products[0].loaded ? (
        <h1> Loading...</h1>
      ) : (
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/buy-music">
            <Music addToCart={addToCart} products={products[1]} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shopping-cart">
            <Cart
              resetCartNum={resetCartNum}
              removeItem={removeItem}
              cart={cart}
              plus={plus}
              minus={minus}
            />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
