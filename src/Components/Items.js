

const Items = (props) => {
    return (
      <div className="Items">
        <div className="item-container">
        <img src={props.src} alt="props.shirt"></img>
          <div className="item-sub-container">
          <p className="item-title">{props.title}</p>
          <p className="item-discription">{props.discription}</p>
          <p className="item-price">€{props.price}</p>
          <button onClick={()=> {props.onClick(); props.addCart(props.title, props.src, props.num, props.price);}}>Add to cart</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Items;