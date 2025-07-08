import { products } from '../data/products';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/Логотип уходовая косметика .png';
import background from '../assets/ChatGPT Image 5 Tem 2025 17_50_13.png';

const Home = () => {
  return (
    <div>
      <header>
        {/* Arxa fon şəkli tam header-i örtür */}
        <img src={background} className="background" alt="background" />
        
        {/* Loqo mərkəzləşmiş şəkildə göstərilir */}
        <img src={logo} className="logo" alt="Helios Accessories Logo" />
      </header>

      {/* Naviqasiya paneli loqonun altından başlaya bilər */}
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
        <h2>Xoş alış-verişlər!</h2>
        <p>© 2025 Bütün hüquqlar qorunur.</p>
      </footer>
    </div>
  );
};

export default Home;
