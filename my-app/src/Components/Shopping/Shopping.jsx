import React, { useMemo, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Shopping.css';

const PRODUCTS = {
  gadgets: [
    { id: 1, name: "Wireless Mouse", description: "Silent clicks, ergonomic grip", price: 1299, image: "https://m.media-amazon.com/images/I/61Q2EEYBzPL._AC_SL1500_.jpg" },
    { id: 2, name: "Mechanical Keyboard", description: "Hot-swap, RGB, low-profile", price: 3499, image: "https://m.media-amazon.com/images/I/71T4+9Y1p1L._AC_SL1500_.jpg" },
    { id: 3, name: "Noise-Canceling Headphones", description: "40h battery, ANC, BT 5.3", price: 4299, image: "https://m.media-amazon.com/images/I/61N5L07e7tL._AC_SL1500_.jpg" }
  ],
  fashion: [
    { id: 4, name: "Minimalist Sneakers", description: "Breathable knit, all-day comfort", price: 2399, image: "https://m.media-amazon.com/images/I/61o9v8aJXgL._AC_UX679_.jpg" },
    { id: 5, name: "Everyday Backpack", description: "Water-resistant, 16\" laptop pocket", price: 1899, image: "https://m.media-amazon.com/images/I/71Q8bMfVg5L._AC_SL1500_.jpg" },
    { id: 6, name: "Canvas Cap", description: "Adjustable, lightweight, classic fit", price: 499, image: "https://m.media-amazon.com/images/I/71ibLmYAoXL._AC_UX679_.jpg" }
  ],
  home: [
    { id: 7, name: "Smart LED Strip", description: "Music sync, app control, 5m", price: 1099, image: "https://m.media-amazon.com/images/I/71x1V4x7MYL._AC_SL1500_.jpg" },
    { id: 8, name: "Ceramic Mug Set", description: "Set of 4, matte finish, 350ml", price: 799, image: "https://m.media-amazon.com/images/I/61ni1AcIwQL._AC_SL1500_.jpg" },
    { id: 9, name: "Aroma Diffuser", description: "Ultrasonic, 7 colors, timer", price: 999, image: "https://m.media-amazon.com/images/I/61z3NfNLBOL._AC_SL1500_.jpg" }
  ],
  food: [
    { id: 10, name: "Artisan Coffee Beans", description: "Single origin, medium roast, 500g", price: 699, image: "https://m.media-amazon.com/images/I/71uL6jAU5-L._AC_SL1500_.jpg" },
    { id: 11, name: "Matcha Powder", description: "Culinary grade, stone-ground, 100g", price: 549, image: "https://m.media-amazon.com/images/I/61M62SlVLlL._AC_SL1500_.jpg" },
    { id: 12, name: "Dark Chocolate Bark", description: "70% cacao, almond & sea salt", price: 399, image: "https://m.media-amazon.com/images/I/81-w0Q1GNXL._SL1500_.jpg" }
  ]
};

function Shopping() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'gadgets', name: 'Gadgets' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home' },
    { id: 'food', name: 'Food & Drinks' }
  ];

  const handleBuyProduct = (product) => {
    alert(`Purchasing ${product.name} for ₱${product.price}`);
  };

  const visibleProducts = useMemo(() => {
    const data = selectedCategory === 'all'
      ? Object.values(PRODUCTS).flat()
      : PRODUCTS[selectedCategory] || [];
    const filtered = data.filter((p) => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    });
    const sorted = [...filtered];
    if (sortBy === 'priceAsc') sorted.sort((a, b) => a.price - b.price);
    if (sortBy === 'priceDesc') sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }, [selectedCategory, query, sortBy]);

  return (
    <div className="page shopping-page">
      <div className="shopping-hero card">
        <div>
          <p className="eyebrow">Welcome to</p>
          <h1 className="title">LazShoppe</h1>
          <p className="muted" style={{ marginTop: 6 }}>Browse curated collections. Filter, search, and sort in one place.</p>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-value">{visibleProducts.length}</div>
            <div className="stat-label">Items</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{categories.length}</div>
            <div className="stat-label">Categories</div>
          </div>
        </div>
      </div>

      <div className="toolbar card">
        <div className="chip-row">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`chip ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="filters-row">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            className="input"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select"
          >
            <option value="relevance">Sort: Relevance</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="products-grid">
        {visibleProducts.map((item) => (
          <ProductCard key={item.id} product={item} onBuy={handleBuyProduct} />
        ))}
      </div>
    </div>
  );
}

export default Shopping;

