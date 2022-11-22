const CartItems = (props) => {
    return (
      <div className="cart-items">
            <img src={props.src} alt='product'></img>
            <div className="sub-container">
                <p className="cart-product">{props.product}</p>
                    <div className="cart-amount">
                        <button className="btn-minus" onClick={()=>{props.changeAmount('-', props.number, props.price); props.onClick('-')}}>-</button>
                        <p>Amount: {props.amount}</p>
                        <button className="btn-plus" onClick={()=>{props.changeAmount('+', props.number, props.price); props.onClick()}}>+</button>
                    </div>
                    <p>Total: €{props.total.toFixed(2)}</p>
            </div>
      </div>
    );
  };
  
  export default CartItems;