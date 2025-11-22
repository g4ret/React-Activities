import React from 'react';
import './Categories.css';

function Categories({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Categories</h2>
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`category-button ${selectedCategory === cat.id ? 'active' : ''}`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;