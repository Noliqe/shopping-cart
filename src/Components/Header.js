import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="header">
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to='/'><li>Home</li></Link>
                <Link to='/products'><li>Products</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </nav>
      </div>
    );
  };
  
  export default Header;