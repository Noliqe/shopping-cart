import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Product.css';
import Home from "./Components/Home";
import Products from "./Components/Products";
import Header from "./Components/Header";
import About from "./Components/About";
import GitHubLogo from "./Images/GitHub-Mark-32px.png"
import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const increment = () => {
    setCount(count + 1)
  }

  const addToCart = (name, url, itemNumber) => {
    let data = {
      number: itemNumber,
      product: name,
      src: url,
      amount: 1
    };
    if (cart.length === 0) {
      return setCart([data]);
    }
    let prevData = cart;
    let check = 0;
    for (let i = 0; i < cart.length; i++) {
      console.log(cart.length);
      if (prevData[i].number === itemNumber) {
        prevData[i].amount += 1;
        return setCart(prevData);
      }
    }
    if (check === 0) {
      prevData.push(data);
      return setCart(prevData);
    }
  }

  // useEffect(() => {

  // }, [count]);

  return (
    <BrowserRouter>
        <Header num={count}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products onClick={increment} count={count} addCart={addToCart}/>} />
        <Route path="/About" element={<About />} />
      </Routes>
      <div className="footer">
        <p>Copyright © 2022 Noliqe</p>
        <a href="https://github.com/Noliqe">
        <img src={GitHubLogo} alt="octo"></img>
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
