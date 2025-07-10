import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useState } from 'react';

import "./Product.css"
import blackburger from "../assets/pngwing.com (1).png"

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))

  if (!product) return <div className="not-found">Məhsul tapılmadı</div>

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="product-detail">
      <Link to="/" className="back-link">← Geri</Link>
      
        <div className="sidebar-menu"
        style={{
          position: 'absolute',
          left: isMenuOpen ? '0' : '-200px',
          top: '0',
          width: '200px',
          height: '100vh',
          backgroundColor: 'rgba(255, 255, 255, 0.59)',
          transition: 'left 0.3s ease',
          zIndex: 1000
        }}
      >
        <div className="divh3" style={{ padding: '20px', color:'black'}}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <Link to="/"><h3>Məhsullarımız</h3></Link>
            <Link to="/about"><h3>Haqqımızda</h3></Link>
            <Link to="/contact"><h3>Əlaqə</h3></Link>
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div onClick={toggleMenu}/>
      )}     <img src={blackburger} className="blackburger" alt="blackburger" onClick={toggleMenu} style={{ cursor: 'pointer' }}/>
      
      <div className="product-all">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Şəkil ${index + 1}`}
            className="product-image"
          />
        ))}
       <div> 
        <h2 className="product-title">{product.name}</h2>
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
  <p className="product-fake">{product.fake} AZN</p>
  <p className="product-price">{product.price} AZN</p>
 </div> 
<div>
  {product.description.split("/").map((word, index) => (
    <p key={index} style={{ margin: '2px 0' }}>{word}</p>
  ))}
</div>

        <div className="contact-buttons">
        <a href="https://www.instagram.com/helios.accessories" target="_blank" rel="noopener noreferrer">
          <button className="contact-button instagram-button">
            Instagram
          </button>
        </a>
        <a href="https://wa.me/994503924762" target="_blank" rel="noopener noreferrer">
          <button className="contact-button whatsapp-button">
            WhatsApp
          </button>
        </a>
      </div> 
      </div>
      </div>


{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className='other-products'>
  {products.slice(0, 5).map((product) => (
    <div key={product.id} className="other-product">
      <Link to={`/product/${product.id}`}>
      <img className="other-image" src={product.images[0]} alt={product.name} />
      <p className="other-p">{product.name}</p>
      </Link>

      <div style={{ display: 'flex', gap: '1px' }}>
        <p className="other-fake">{product.fake} AZN</p>
        <p className="other-price">{product.price} AZN</p>
      </div>
    </div>
  ))}
</div>

{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
       
    </div>
  )
}
export default ProductDetail