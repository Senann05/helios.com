import './About.css';
import blackburger from "../assets/pngwing.com (1).png"
import { Link } from 'react-router-dom';
import { useState } from 'react';

const About = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="aboutus-container">
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
      <p style={{ textAlign: "center", marginTop: 65 }}>*Təəssuratlarınız əlaqə bölməsindəki formu dolduraraq bildirməyiniz bizim üçün çox önəmlidir!</p>
      <nav>
      <h1>Biz Kimik?</h1>

      <div className="aboutus-content">
        <p>
          <strong>Helios Accessories</strong> – 2025-ci ildən bəri müştərilərinə keyfiyyətli və zövqlü aksessuarlar təqdim edən onlayn mağazadır.
          Məqsədimiz hər kəsin öz üslubunu ifadə edə biləcəyi, zərif və unikal məhsullar təqdim etməkdir.
        </p>

        <p>
          Kolleksiyalarımıza qızıl və gümüş tonlarda üzük, boyunbağı, sırğa və qolbaqlar daxildir.
          Bütün məhsullarımız zərgərlik keyfiyyətinə malikdir və sevgi ilə hazırlanır.
        </p>

        <p>
          Müştəri məmnuniyyəti bizim üçün birinci yerdədir. Sizinlə bir klik qədər yaxınıq – istənilən sual və ya sifariş üçün bizimlə əlaqə saxlaya bilərsiniz.
        </p>
      </div>
      </nav>

            <nav>
      <h1>Çatdırılma!</h1>

      <div className="aboutus-content">
        <p>
          İnşaatçılar, Elmlər və 28May metro stansiyalarına <strong>ödənişsiz</strong> çatdırılma edirik. Ünvana çatdırlma xidmətimiz bolt və uber vasitəsi <strong>tətbiqin təyin etdiyi</strong> ödəniş edildikdən sonra həyata keçirilir.Məhsul sayından və dəyərindən asılı olaraq digər stansiyalara da ödənişsiz catdırılma həyata keçirilə bilər.
        </p>

      </div>
      </nav>


      <nav >
        <h2 className='feedbackh2'>Sizin Təəssuratlarınız:</h2>
        <div className='feedbacknav'>
        <div className='badimcan'>
        <h3>a*******v44@gmail.com</h3><p>Sevgilim ucun aldim qewey gorunur.</p>
        </div>
        <div className='badimcan'>
        <h3>m*********d@gmail.com</h3><p>Şəkildə olduğu kimidir. Qiymətinə gorə əladı</p>
        </div>
        <div className='badimcan'>
        <h3>c*********v313@gmail.com</h3><p>eynisini iki gun evvel 18 manata aldim</p>
        </div>
        <div className='badimcan'>
        <h3>a*******d@gmail.com</h3><p>Bəyəndim</p>
        </div>
        <div className='badimcan'>
        <h3>q*******i@gmail.com</h3><p>konfet detayina eridim</p>
        </div>      
        </div>
      </nav>
    </div>
  );
};

export default About;