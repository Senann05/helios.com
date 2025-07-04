import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import "./Product.css"

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))

  if (!product) return <div>Məhsul tapılmadı</div>

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">← Geri</Link>
      <h2>{product.name}</h2>
      <p><strong>Qiymət:</strong> {product.price} AZN</p>
      <p>{product.description}</p>
      <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Şəkil ${index + 1}`}
            style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
          />
        ))}
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="https://www.instagram.com/senin_sayfan" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 20px', background: '#E1306C', color: '#fff', border: 'none', borderRadius: '5px' }}>
            Instagram
          </button>
        </a>
        <a href="https://wa.me/994501234567" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 20px', background: '#25D366', color: '#fff', border: 'none', borderRadius: '5px' }}>
            WhatsApp
          </button>
        </a>
      </div>
    </div>
  )
}

export default ProductDetail
