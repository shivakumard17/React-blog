import React from 'react';
import './styles.css';
import {FaReact,FaInstagram,FaTwitter,FaYoutube,FaGithub} from 'react-icons/fa'

const Header = () => (
  <header className='home-header'>
    
    <div className='log_box'>
      <a href='/'><FaReact/></a>
      <a href='/'><p>"Tech Blog"</p></a>
    </div>
    <ul className='social_links'>

      <li><a href='https://www.instagram.com/accounts/login/' target="_blank" rel="noopener noreferrer"> <FaInstagram className='icons'/>   </a></li>

      <li><a href='https://twitter.com/i/flow/login' target="_blank" rel="noopener noreferrer"> <FaTwitter className='icons' />   </a></li>
      <li><a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer"> <FaYoutube className='icons'/>   </a></li>
      <li><a href='https://github.com/' target="_blank" rel="noopener noreferrer"> <FaGithub className='icons'/>   </a></li>
    </ul>
    
  </header>
);

export default Header;
