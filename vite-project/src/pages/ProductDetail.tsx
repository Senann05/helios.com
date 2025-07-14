import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useState, useRef, useEffect } from 'react';
import "./Product.css"
import blackburger from "../assets/pngwing.com (1).png"

////////////////////////////////////////////////////////////////////////////////////////////////////////////
import interstaller1 from "../data assets/interstaller6.png"
import interstaller2 from "../data assets/interstaller5.png"
import interstaller3 from "../data assets/interstaller1.jpg"
import shimmerfly1 from "../data assets/shimmerfly1.png"
import shimmerfly2 from "../data assets/shimmerfly2.jpg"
import independence1 from "../data assets/independence1.png"
import independence2 from "../data assets/independence2.png"
import swanlight1 from "../data assets/swanlight4.png"
import swanlight3 from "../data assets/swanlight0.jpg"
import elegance1 from "../data assets/elegance1.jpg"
import elegance2 from "../data assets/elegance2.jpg"
import elegance3 from "../data assets/elegance4.jpg"
import luck from "../data assets/luck2.png"
import light from "../data assets/light2.png"
import eleganceduo1 from "../data assets/eleganceduo1.png"
import eleganceduo2 from "../data assets/eleganceduo2.jpg"
import wings1 from "../data assets/wings1.jpg"
import wings2 from "../data assets/wings2.png"
import wings3 from "../data assets/wings3.png"
import serenity1 from "../data assets/serenity1.png"
import serenity2 from "../data assets/sereniyt2.jpg"
import serenity3 from "../data assets/serenity3.jpg"
import luckandlight from "../data assets/luckandlight.png"
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const productImages: Record<number, string[]> = {
    1: [interstaller1, interstaller2,interstaller3],
    2: [shimmerfly1, shimmerfly2],
    3: [independence1, independence2],
    4: [swanlight1, swanlight3],
    5: [elegance1, elegance2, elegance3],
    6: [luck],
    7: [light],
    8: [eleganceduo1, eleganceduo2],
    9: [wings1, wings2, wings3],
    10: [serenity1, serenity2, serenity3],
    11: [luckandlight ,luck, light]
  };


  const images = product ? productImages[product.id] || [] : [];

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
                    marginTop: '110px',
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
          <h2 className="product-title">{product?.name}</h2>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <p className="product-fake-pd">{product?.fake} AZN</p>
            <p className="product-price">{product?.price} AZN</p>
          </div> 
          <div>
            {product?.description.split("/").map((word, index) => (
              <p key={index} style={{ margin: '2px 0' }}>{word}</p>
            ))}
          </div>

          <div className="contact-buttons">
            <a href="https://www.instagram.com/helios.accessories" target="_blank" rel="noopener noreferrer">
              <button className="contact-button instagram-button">
                Instagram
              </button>
            </a>
            <a href="https://wa.me/994558555105" target="_blank" rel="noopener noreferrer">
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
              <img className="other-image" src={productImages[product.id][0]} alt={product.name} />
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