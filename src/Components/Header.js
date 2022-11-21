import { Link } from 'react-router-dom';
import cartIcon from './Icons/cart-48.png'

const Header = (props) => {

  const showCart = () => {
    if (props.num > 0) {
    return (
      <p>{props.num}</p>
    )
    }
  }

    return (
      <div className="header">
        <nav>
        <Link to='/'>
        <h3 className='logo'>Capstore</h3>
        </Link>
            <ul className="nav-links">
                <Link to='/'><li>Home</li></Link>
                <Link to='/products'><li>Products</li></Link>
                <Link to='/about'><li>About</li></Link>
            </ul>
            <div className='cart'>
            <img src={cartIcon} alt='cart' className='img-cart'></img>
            {showCart()}
            </div>
        </nav>
      </div>
    );
  };
  
  export default Header;