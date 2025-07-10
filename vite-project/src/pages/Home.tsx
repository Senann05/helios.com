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
        <img 
          src={hamburger} 
          className="hamburger" 
          alt="hamburger" 
          onClick={toggleMenu}
          style={{ cursor: 'pointer' }}
        />
        <img src={logo} className="logo" alt="Helios Accessories Logo" />
      </header>

      {/* Sidebar Menu */}
      <div 
        className="sidebar-menu"
        style={{
          position: 'fixed',
          left: isMenuOpen ? '0' : '-100px',
          top: '0',
          width: '100px',
          height: '100vh',
          backgroundColor: '#fff',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          transition: 'left 0.3s ease',
          zIndex: 1000
        }}
      >
        {/* Menu content goes here */}
        <div style={{ padding: '20px' }}>
          <h3>Menu</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 999
          }}
          onClick={toggleMenu}
        />
      )}

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
            {products.map((product) => (
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