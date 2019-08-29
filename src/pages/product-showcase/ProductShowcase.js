import React, { useState } from 'react';

import like from '../../assets/like.svg';
import './ProductShowcase.css';

export default function ProductShowcase() {

  const [countLikesUser, setCountLikesUser] = useState(0);

  const [productList] = useState([
    { _id: 1, name: "Produto A", description: "Description of product", value: 17.90, imageSrc: "http://lounge.obviousmag.org/trocando_ideias/joias01.jpg", likes: 3 },
    { _id: 2, name: "Produto B", description: "TesteTesteTesteTesteTeste Descption teste a good day using react hooks but idk why is not really doing", value: 30.00, imageSrc: "http://lounge.obviousmag.org/trocando_ideias/joias01.jpg", likes: 1 },
    { _id: 3, name: "Produto C", description: "Description of product", value: 50.50, imageSrc: "http://lounge.obviousmag.org/trocando_ideias/joias01.jpg", likes: 0 },
    { _id: 4, name: "Produto D", description: "Description of product", value: 75.50, imageSrc: "http://lounge.obviousmag.org/trocando_ideias/joias01.jpg", likes: 0 },
    { _id: 5, name: "Produto E", description: "Description of product", value: 25.80, imageSrc: "http://lounge.obviousmag.org/trocando_ideias/joias01.jpg", likes: 0 },
    { _id: 6, name: "Produto F", description: "Description of product", value: 90.70, imageSrc: "http://lounge.obviousmag.org/trocando_ideias/joias01.jpg", likes: 0 },
    { _id: 7, name: "Produto G", description: "Description of product", value: 80.00, imageSrc: "http://lounge.obviousmag.org/trocando_ideias/joias01.jpg", likes: 0 },
  ]);

  function handleAddLike(product) {

    product.likes++;

    let countLikes = countLikesUser + 1;

    setCountLikesUser(countLikes);
  }

  return (
    <div className="main-container">
      <ul>
        {productList.map(product => (
          <li key={product._id} >
            <footer>
              <strong> {product.name}</strong>
            </footer>
            <img src={product.imageSrc} alt="product_name" />
            <footer className="footer">
              <div className='actions'>
                <button type="button" onClick={() => { handleAddLike(product) }}>
                  <img src={like} alt="" />
                </button>
              </div>
              <strong> {product.likes} curtidas</strong>
              <p className="description">
                {product.description}
              </p>
              <p className="value">
                Valor R$: {product.value}
              </p>
            </footer>
          </li>
        ))}
      </ul>
    </div>
  );
}
