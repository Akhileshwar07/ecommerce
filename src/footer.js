import React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoYoutube } from 'react-icons/bi';
import './footer.css';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='about'>
            <div className='logo'>
              <img src='./img/logo.svg' alt='logo'></img>
            </div>
            <div className='detail'>
              <div className='paragraph'>
                <p>We are a team of designers and developers passionate about electronics. Our electronic website offers a wide range of high-quality products, including mobile phones, laptops, headphones, cameras, and more. We strive to provide an exceptional shopping experience, ensuring that our customers find the latest technology and the best deals. With secure payment options, prompt delivery, and dedicated customer support, we are committed to delivering excellence in the world of electronics.</p>
                <p>Connect with us on social media for the latest updates and stay tuned for exciting offers and new product launches.</p>
              </div>
              <div className='icon'>
                <li><RiFacebookFill /></li>
                <li><AiOutlineInstagram /></li>
                <li><AiOutlineTwitter /></li>
                <li><BiLogoYoutube /></li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
