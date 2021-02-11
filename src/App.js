import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Cart from "./Views/Cart";
import Welcome from "./Views/Welcome";
import Music from "./Views/Music";
import About from "./Views/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div>
          <br />
          <p>Create a David's Site</p>
          <p>Set up a Single Page Application (SPA) with react-router</p>
        </div>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/buy-music">
          <Music />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/shopping-cart">
          <Cart />
        </Route>
      </header>
      <Footer />
    </div>
  );
}

export default App;
