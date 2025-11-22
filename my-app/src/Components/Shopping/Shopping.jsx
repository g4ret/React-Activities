import React, { useState } from 'react';
import Categories from '../Categories/Categories';
import ProductCard from '../ProductCard/ProductCard';
import './Shopping.css';

function Shopping() {
  const [selectedCategory, setSelectedCategory] = useState('pcParts');

  const products = {
    pcParts: [
      { id: 1, name: "Left Handed Mouse", description: "Mouse for Left Handed Users", price: 199.99 },
      { id: 2, name: "Left Handed Keyboard", description: "Keyboard for Left Handed Users", price: 249.99 }
    ],
    shoes: [
      { id: 3, name: "Adidis", description: "Left pair of shoe", price: 199.99 },
      { id: 4, name: "Niek", description: "Left pair of shoe", price: 249.99 }
    ],
    burger: [
      { id: 5, name: "Hamburger", description: "Burger in ham", price: 199.99 },
      { id: 6, name: "Burger Pro Max", description: "2TB, 58mp", price: 249.99 }
    ]
  };

  const categories = [
    { id: 'pcParts', name: 'PC Parts' },
    { id: 'shoes', name: 'Shoes' },
    { id: 'burger', name: 'Burger' }
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleBuyProduct = (product) => {
    alert(`Purchasing ${product.name} for ₱${product.price}`);
    // Add your purchase logic here
  };

  return (
    <div className="shopping-container">
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <div className="main-content">
        <h1 className="main-title">LAZSHOPEE</h1>
        <div className="products-grid">
          {products[selectedCategory].map(item => (
            <ProductCard
              key={item.id}
              product={item}
              onBuy={handleBuyProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shopping;