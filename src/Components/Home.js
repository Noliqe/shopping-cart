import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="home">
        <div className="home-container">
        <h1>We ain't capping</h1>
        <h3>The best caps from all around the world</h3>
        <Link to='/products'>
          <button className='home-button'>Shop Now</button>
        </Link>
        </div>
      </div>
    );
  };
  
  export default Home;