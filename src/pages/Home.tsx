import { useState } from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/Логотип уходовая косметика .png';
import background from '../assets/ChatGPT Image 5 Tem 2025 17_50_13.png';
import hamburger from "../assets/hamburger.png";


const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <img src={background} className="background" alt="background" />
        <div className="sidebar-menu"
        style={{
          position: 'fixed',
          left: isMenuOpen ? '0' : '-200px',
          top: '0',
          width: '200px',
          height: '100vh',
          backgroundColor: ' rgba(255, 255, 255, 0.59)',
          transition: 'left 0.3s ease',
          zIndex: 1000
        }}
      >
        <div className="divh3" style={{ padding: '20px', color:'black'}}>
<ul style={{ listStyle: 'none', padding: 0 }}>
  <h3 style={{color: '#506e97ff',}}>Məhsullarımız</h3>
  <Link to="/about"><h3 style={{ color: '#0e4695ff' }}>Haqqımızda</h3></Link>
  <Link to="/contact"><h3 style={{ color: '#0e4695ff' }}>Əlaqə</h3></Link>
</ul>
        </div>
      </div>

      {isMenuOpen && (
        <div onClick={toggleMenu}/>)}     
        <img src={hamburger} className="hamburger" alt="hamburger" onClick={toggleMenu} style={{ cursor: 'pointer' }}/>
        <img src={logo} className="logo" alt="Helios Accessories Logo" />
      </header>


 
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <nav>
        <h1>Məhsullarımız</h1>
      </nav>

      <main>
        <div style={{ padding: '0 20px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'center',
            }}
          >
            {products.filter(product => product.id < 11).map((product) => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`}>
                  <img src={product.images[0]} alt={product.name} />
                  <h3>{product.name}</h3>
                </Link>
                <div style={{ display: 'flex', gap: '1px' }}>
                  <p className="product-fake">{product.fake} AZN</p>
                  <p className="product-price">{product.price} AZN</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <main>
        <nav>
        <h1>Təkliflərimiz</h1>
        </nav>

        <div style={{ padding: '0 20px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'center',
            }}
          >
            {products.filter(product => product.id > 10).map((product) => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`}>
                  <img src={product.images[0]} alt={product.name} />
                  <h3>{product.name}</h3>
                </Link>
                <div style={{ display: 'flex', gap: '1px' }}>
                  <p className="product-fake">{product.fake} AZN</p>
                  <p className="product-price">{product.price} AZN</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer>
        <h1>Xoş alış-verişlər!</h1>
        <h2>© 2025 Bütün hüquqlar qorunur.</h2>
      </footer>
    </div>
  );
};

export default Home;