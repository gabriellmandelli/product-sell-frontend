import React from 'react';
import { Link } from 'react-router-dom';
import './ProductShowcase.css';

export default function ProductShowcase() {
  return (
    <div className="main-container">
      <Link to="/">
        <img src="" alt="samanta-store" />
      </Link>
      <ul>
        <li>
          <footer>
            <strong> Nome do produto </strong>
          </footer>
          <img src="http://lounge.obviousmag.org/trocando_ideias/joias01.jpg" alt="product_name" />
          <footer>
            <p> Description </p>
            <p> Valor R$: 17.90 </p>
          </footer>
        </li>
      </ul>
    </div>
  );
}