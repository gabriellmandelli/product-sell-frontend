import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (
    <header id='main-header'>
      <div className='header-content'>
        <Link to='/'>
          <h3>Samanta's Store</h3>
        </Link>
        <Link to='/pedidos'>
          <h3>Pedidos</h3>
        </Link>
      </div>
    </header>
  );
}
