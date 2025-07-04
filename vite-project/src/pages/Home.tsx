// home.tsx

import { products } from '../data/products'
import { Link } from 'react-router-dom'
import "./Home.css"
import logo from "../assets/Логотип уходовая косметика .png"

const Home = () => {
  return (
    <div>
      <header>
        <h1>Helios Accessories'e Xoş Gəlmişsiniz!</h1>
        {/* Loqo artıq header-in içindədir */}
        <img src={logo} className="logo" alt="Helios Accessories Logo" />
      </header>
      
      <main>
        {/* ... qalan kod olduğu kimi qalır ... */}
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {products.map(product => (
              <div key={product.id} className="product-card">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.images[0]} alt={product.name} />
                  </Link>
                  <h3>{product.name}</h3>
                  <p>{product.price} AZN</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <footer>
        <h2>xos alisverisler!</h2>
        <h2>xos alisverisler! DFUsdBFUSdhFIDSkopLSpDSAASDASD</h2>
      </footer>
    </div>
  )
}

export default Home;