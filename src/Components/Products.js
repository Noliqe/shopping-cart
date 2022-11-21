import Items from "./Items";
import cap1 from "./caps/cap1-unsplash.jpg"
import cap2 from "./caps/cap2-unsplash.jpg"
import cap3 from "./caps/cap3-unsplash.jpg"
import cap4 from "./caps/cap4-unsplash.jpg"
import cap5 from "./caps/cap5-unsplash.jpg"
import cap6 from "./caps/cap6-unsplash.jpg"
import cap7 from "./caps/cap7-unsplash.jpg"
import cap8 from "./caps/cap8-unsplash.jpg"
import cap9 from "./caps/cap9-unsplash.jpg"
import cap10 from "./caps/cap10-unsplash.jpg"
import React, { useState, useEffect } from 'react';

const Products = (props) => {
    return (
      <div className="products">
        <div className="img-header">
        </div>
        <div className="product-container">
        <Items num={0} src={cap1} title={'Cotton twill cap'} discription={'Cotton Twill Baseball Cap True Black'} onClick={props.onClick} count={props.count} addCart={props.addCart}/>
        <Items num={1} src={cap2} title={'White cap'} discription={'White Cap "be your soul"'} onClick={props.onClick} count={props.count} addCart={props.addCart}/>
        <Items num={2} src={cap3} title={'Triangle cap'} discription={'Triangle Baseball Cap True Black'} onClick={props.onClick} count={props.count} addCart={props.addCart}/>
        <Items num={3} src={cap4} title={'Blue cap'} discription={'Classic Baseball Cap Light Blue'} onClick={props.onClick} count={props.count} addCart={props.addCart}/>
        <Items num={4} src={cap5} title={'PATAGONIA cap'} discription={'PATAGONIA Cap Since 1973'} onClick={props.onClick} count={props.count} addCart={props.addCart}/>
        <Items num={5} src={cap6} title={'Respect cap'} discription={'Respect Baseball Cap Beige'} onClick={props.onClick} count={props.count} addCart={props.addCart}/>
        <Items num={6} src={cap7} title={'Nike cap'} discription={'Nike Baseball Cap White'} onClick={props.onClick} count={props.count} addCart={props.addCart}/>
        <Items num={7} src={cap8} title={'Triangle cap'} discription={'"UNDERGROUND SNAX" Cap Black'} onClick={props.onClick} count={props.count} addCart={props.addCart}/>
        <Items num={8} src={cap9} title={'Nike cap'} discription={'Nike Baseball Cap Yellow'} onClick={props.onClick} count={props.count} addCart={props.addCart}/>
        <Items num={9} src={cap10} title={'Just Culture cap'} discription={'"Just Culture" Cap Yellow/Gold'} onClick={props.onClick} count={props.count} addCart={props.addCart}/>
        </div>
      </div>
    );
  };
  
  export default Products;