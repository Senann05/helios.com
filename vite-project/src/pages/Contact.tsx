import './Contact.css';
import blackburger from "../assets/pngwing.com (1).png"
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Contact = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div className="contact-container">
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
      <h1>Bizimlə Əlaqə</h1>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Əlaqə Məlumatları</h2>
          <p><strong>Telefon:</strong> +994 50 392 47 62</p>
          <p><strong>Email:</strong> helios.accessories@gmail.com</p>
          <p><strong>Instagram:</strong> <a href="https://www.instagram.com/helios.accessories" target="_blank" rel="noopener noreferrer">@helios.accessories</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/994503924762" target="_blank" rel="noopener noreferrer">Mesaj göndər</a></p>
        </div>

        <form className="contact-form">
          <h2>Təəssuratlarınız bizə maraqlıdır!</h2>
          <label>Adınız:</label>
          <input type="text" name="name" placeholder="Adınızı daxil edin" required />

          <label>Email:</label>
          <input type="email" name="email" placeholder="Email adresiniz" required />

          <label>Mesaj:</label>
          <textarea name="message" rows={5} placeholder="Mesajınızı yazın" required></textarea>

          <button type="submit">Göndər</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;