import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onBuy }) {
  const handleBuy = () => {
    if (onBuy) {
      onBuy(product);
    } else {
      console.log(`Buying ${product.name}`);
    }
  };

  return (
    <div className="card product-card">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <strong className="product-price">₱{product.price}</strong>
      <div style={{ marginTop: 10 }}>
        <button className="btn btn-primary" onClick={handleBuy}>Buy</button>
      </div>
    </div>
  );
}

export default ProductCard;