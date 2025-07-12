import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useState, useRef, useEffect } from 'react';
import "./Product.css"
import blackburger from "../assets/pngwing.com (1).png"
import proimg from "../assets/85022_1.jpg"

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!product) return <div className="not-found">Məhsul tapılmadı</div>

  // 3 aynı resim kullanıyoruz
  const images = [proimg, blackburger, proimg];

  const goToPrevious = () => {
    const isFirstShape = currentIndex === 0;
    const newIndex = isFirstShape ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastShape = currentIndex === images.length - 1;
    const newIndex = isLastShape ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const newIndex = Math.round(slider.scrollLeft / slider.offsetWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentIndex * sliderRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="product-detail">
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
      )}
      <img src={blackburger} className="blackburger" alt="blackburger" onClick={toggleMenu} style={{ cursor: 'pointer' }}/>
      
      <div className="product-all">
        {/* Slider kısmı */}
        <div className="slider-container" style={{ position: 'relative', marginBottom: '20px' }}>
          <button 
            className="slider-arrow" 
            onClick={goToPrevious}
            style={{ 
              position: 'absolute', 
              left: '10px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              background: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              fontSize: '18px',
              cursor: 'pointer',
              borderRadius: '50%',
              zIndex: '10'
            }}
          >
            &larr;
          </button>
          
          <div 
            ref={sliderRef}
            className="slider"
            style={{
              display: 'flex',
              overflowX: 'scroll',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {images.map((img, index) => (
              <div 
                key={index} 
                className="slide"
                style={{
                  flex: '0 0 100%',
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <img
                  src={img}
                  alt={`Şəkil ${index + 1}`}
                  style={{
                    width: '100%',
                    maxHeight: '400px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            ))}
          </div>
          
          <button 
            className="slider-arrow" 
            onClick={goToNext}
            style={{ 
              position: 'absolute', 
              right: '10px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              background: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              fontSize: '18px',
              cursor: 'pointer',
              borderRadius: '50%',
              zIndex: '10'
            }}
          >
            &rarr;
          </button>
          
          <div 
            className="slider-indicator"
            style={{
              textAlign: 'center',
              marginTop: '10px',
              fontSize: '18px',
              color: '#333'
            }}
          >
            {currentIndex + 1}/{images.length}
          </div>
        </div>
        
        <div> 
          <h2 className="product-title">{product.name}</h2>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <p className="product-fake-pd">{product.fake} AZN</p>
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

      <h2>Digər Məhsullarımız</h2>
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

      <footer>
        <h1>Xoş alış-verişlər!</h1>
        <h2>© 2025 Bütün hüquqlar qorunur.</h2>
      </footer>
    </div>
  )
}

export default ProductDetail;