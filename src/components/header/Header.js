import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import mainpage from '../../assets/mainpage.png';
import pedidos from '../../assets/pedidos.png';

export default function Header() {
  return (
    <header id='main-header'>
      <div className='header-content'>
        <Link to='/'>
          <img src={mainpage}  alt="mainpage"></img>
        </Link>
        <Link to='/product-add'>
          <img src={pedidos} alt="pedidos"></img>
        </Link>
      </div>
    </header>
  );
}
