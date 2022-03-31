import React from 'react';
import { Link } from 'react-router-dom';
import Dogs from '../Assets/dogs.svg';
import './Header.css';

const Header = () => {
  return (
    <header className='header-header'>
      <nav className='header-nav container'>
        <Link className='header-logo' to="/" aria-label="Dogs - Home">
          <img src={Dogs} alt="cachorro" />
        </Link>
        <Link className='header-login'to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;