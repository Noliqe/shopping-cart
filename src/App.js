import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Products from "./Components/Products";
import Header from "./Components/Header";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="footer">
        <p>Copyright © 2022 Noliqe</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
