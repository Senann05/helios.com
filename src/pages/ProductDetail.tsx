import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useState, useRef, useEffect } from 'react';
import "./Product.css"
import blackburger from "../assets/pngwing.com (1).png"

import interstaller1 from "../manual database/id1-2.png"
import interstaller2 from "../manual database/id1.png"

import shimmerfly1 from "../manual database/id2-2.png"
import shimmerfly2 from "../manual database/id2.png"
import shimmerfly3 from "../manual database/id2-3.png"

import independence1 from "../manual database/id3-3.png"
import independence2 from "../manual database/id3-2.png"
import independence3 from "../manual database/id3.jpg"

import swanlight1 from "../manual database/id4-5.png"
import swanlight2 from "../manual database/id4.png"
import swanlight3 from "../manual database/id4-2.png"
import swanlight4 from "../manual database/id4-3.png"
import swanlight5 from "../manual database/id4-4.png"

import elegance1 from "../manual database/id5.png"
import elegance2 from "../manual database/id5-2.png"
import elegance3 from "../manual database/id5-3.png"
import elegance4 from "../manual database/id5-4.png"
import elegance5 from "../manual database/id5-5.png"

import luck1 from "../manual database/id6.png"
import luck2 from "../manual database/id6-2.png"
import luck3 from "../manual database/id6-3.png"

import light from "../manual database/id7.png"

import eleganceduo1 from "../manual database/id8.png"

import wings1 from "../manual database/id9-3.png"
import wings2 from "../manual database/id9.png"
import wings3 from "../manual database/id9-2.png"

import serenity1 from "../manual database/id10.jpg"
import serenity2 from "../manual database/id10-3.png"
import serenity3 from "../manual database/id10-2.jpg"
import serenity4 from "../manual database/id10-4.png"

// import luckandlight from "../manual database/id11.png"

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
    1: [interstaller1, interstaller2],
    2: [shimmerfly1, shimmerfly2,shimmerfly3],
    3: [independence1, independence2,independence3],
    4: [swanlight1,swanlight2,swanlight3,swanlight4,swanlight5],
    5: [elegance1, elegance2, elegance3,elegance4,elegance5],
    6: [luck1,luck2,luck3],
    7: [light],
    8: [eleganceduo1],
    9: [wings1, wings2, wings3],
    10: [serenity1, serenity2, serenity3,serenity4],
    11: [light,luck2]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); 

  const images = product ? productImages[product.id] || [] : [];

  const goToPrevious = () => {
    const isFirstShape = currentIndex === 0;
    const newIndex = isFirstShape ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const goToNext = () => {
    const isLastShape = currentIndex === images.length - 1;
    const newIndex = isLastShape ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.offsetWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    scrollToIndex(index);
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

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - (sliderRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
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
  <Link to="/"><h3 style={{color: '#0e4695ff'}}>Məhsullarımız</h3></Link>
  <Link to="/about"><h3 style={{color: '#0e4695ff'}}>Haqqımızda</h3></Link>
  <Link to="/contact"><h3 style={{ color:  '#0e4695ff'}}>Əlaqə</h3></Link>
</ul>
      </div>
      </div>

      {isMenuOpen && (
        <div onClick={toggleMenu}/>
      )}
      <img src={blackburger} className="blackburger" alt="blackburger" onClick={toggleMenu} style={{ cursor: 'pointer' }}/>
      
      <div className="product-all">
        {/* Slider section */}
        <div className="slider-container" style={{ position: 'relative', marginBottom: '20px' }}>
          {/* Left Arrow */}
          <button 
            className="left-arrow" 
            onClick={goToPrevious}
            style={{ 
              position: 'absolute', 
              left: '20px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.7)',
              color: '#333',
              border: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: '10',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Slider */}
          <div 
            ref={sliderRef}
            className="slider"
            style={{
              display: 'flex',
              overflowX: 'hidden',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
          
          {/* Right Arrow */}
          <button 
            className="right-arrow" 
            onClick={goToNext}
            style={{ 
              position: 'absolute', 
              right: '20px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.7)',
              color: '#333',
              border: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: '10',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Dot Indicators */}
          <div 
            className="slider-dots"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              marginTop: '15px'
            }}
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: index === currentIndex ? '12px' : '8px',
                  height: index === currentIndex ? '12px' : '8px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: index === currentIndex ? '#333' : '#ccc',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div> 
          <h2 className="product-title">{product?.name}</h2>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
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
        {products.slice(0, 10).map((product) => (
          <div key={product.id} className="other-product">
            <Link to={`/product/${product.id}`}>
              <img className="other-image" src={productImages[product.id][0]} alt={product.name} /> 
            </Link>
            <p className="other-p">{product.name}</p>
            <div style={{ display: 'flex', gap: '1px', justifyContent: 'center' }}>
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