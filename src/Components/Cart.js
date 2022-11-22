import CartItems from "./CartItems";

const Cart = (props) => {
    const handleCartItems = () => {
        let cartArray = [];
        for (let i = 0; i < props.cart.length; i++) {
            cartArray.push(
                <CartItems
                key={i}
                src={props.cart[i].src}
                product={props.cart[i].product}
                amount={props.cart[i].amount}
                number={props.cart[i].number}
                onClick={props.onClick}
                changeAmount={props.changeAmount}
                price={props.cart[i].price}
                total={props.cart[i].total}/>
            )
        }
        return (<div className="cart-content">
            {cartArray}
        </div>
        )
    }

    const handleCartTotal = () => {
        let total = 0;
        for (let i = 0; i < props.cart.length; i++) {
            total += props.cart[i].total
        }
        return total.toFixed(2);
    }

    return (
      <div className="cart">
        <div className="cart-shadow" style={{ 'left': props.left }}></div>
        <div className='cart-container' style={{ 'right': props.style }}>
            <h1>Shopping cart</h1>
            {handleCartItems()}
            <h2>Total: €{handleCartTotal()}</h2>
            <button className="btn-check-out">Check Out</button>
            <button className="btn-close" onClick={props.display}>Close</button>

        </div>
      </div>
    );
  };
  
  export default Cart;