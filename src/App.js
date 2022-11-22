import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Product.css';
import './Cart.css'
import Home from "./Components/Home";
import Products from "./Components/Products";
import Header from "./Components/Header";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState('-30vw');
  const [showShadow, setShowShadow] = useState('-70vw')

  const increment = (operator) => {
    if (operator === '-') {
      return setCount(count -1);
    }
    setCount(count + 1)
  }

  const addToCart = (name, url, itemNumber, itemPrice) => {
    let data = {
      number: itemNumber,
      product: name,
      src: url,
      amount: 1,
      price: itemPrice,
      total: itemPrice,
    };
    if (cart.length === 0) {
      return setCart([data]);
    }
    let prevData = cart;
    let check = 0;
    for (let i = 0; i < cart.length; i++) {
      if (prevData[i].number === itemNumber) {
        prevData[i].amount += 1;
        prevData[i].total += itemPrice;
        return setCart(prevData);
      }
    }
    if (check === 0) {
      prevData.push(data);
      return setCart(prevData);
    }
  }

  const displayCart = () => {
    if (showCart === '-30vw') {
      setShowShadow('0vw')
      return setShowCart('0vw');
    }
    setShowShadow('-70vw')
    return setShowCart('-30vw');
  }

  const changeAmount = (operator, itemNumber, itemPrice) => {
    console.log(itemPrice)
    let prevData = cart;
    for (let i = 0; i < cart.length; i++) {
      if (prevData[i].number === itemNumber) {
        if (operator === '+') {
          prevData[i].amount += 1;
          prevData[i].total += itemPrice;
          return setCart(prevData);
        }
        prevData[i].amount -= 1;
        prevData[i].total -= itemPrice;
        return setCart(prevData);
      }
    }
  }

  return (
    <BrowserRouter>
        <Header num={count} display={displayCart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products onClick={increment} count={count} addCart={addToCart}/>} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
      {/* Adding increment to Cart, so it updates changeAmount ! */}
      <Cart cart={cart} left={showShadow} style={showCart} display={displayCart} changeAmount={changeAmount} onClick={increment}/>
    </BrowserRouter>
  );
}

export default App;
