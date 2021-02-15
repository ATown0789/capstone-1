import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.scss";
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

  const addCart = (product) => {
    setCart([...cart, product]);
  };

  const removeItem = (product) => {
    setCart(cart.filter((item) => item.title != product.title));
  };

  const search = (currentProds, query) => {
    const newProds = currentProds.filter((prod) => prod.title == query);
  };

  useEffect(() => {
    axios.get("./data.json").then(({ data }) => {
      setProducts([{ loaded: true }, data]);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div>
          <br />
          <p>Create a David's Site</p>
          <p>Set up a Single Page Application (SPA) with react-router</p>
        </div>
        {!products[0].loaded ? (
          <h1> Loading...</h1>
        ) : (
          <>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/buy-music">
              <Music addCart={addCart} products={products[1]} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/shopping-cart">
              <Cart removeItem={removeItem} cart={cart} />
            </Route>
          </>
        )}
      </header>
      <Footer />
    </div>
  );
}

export default App;
