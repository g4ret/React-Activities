import React, { useMemo, useState } from 'react';

export default function FruitListPage() {
  const [fruits, setFruits] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Mango' },
    { id: 5, name: 'Grapes' },
  ]);
  const [newFruit, setNewFruit] = useState('');
  const [filter, setFilter] = useState('');

  const addFruit = () => {
    const value = newFruit.trim();
    if (!value) return;
    const exists = fruits.some((f) => f.name.toLowerCase() === value.toLowerCase());
    if (exists) {
      setNewFruit('');
      return;
    }
    setFruits((prev) => [...prev, { id: Date.now(), name: value }]);
    setNewFruit('');
  };

  const removeFruit = (id) => {
    setFruits((prev) => prev.filter((f) => f.id !== id));
  };

  const clearAll = () => setFruits([]);

  const sortByName = () => {
    setFruits((prev) =>
      [...prev].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
    );
  };

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return fruits;
    return fruits.filter((f) => f.name.toLowerCase().includes(q));
  }, [fruits, filter]);

  return (
    <div className="page" style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 860, display: 'grid', gap: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <h1 className="title" style={{ margin: 0 }}>Fruit List</h1>
          <div className="pill" style={{ fontSize: 12 }}>
            Total: {fruits.length}
          </div>
        </div>

        <div className="card" style={{ display: 'grid', gap: 14 }}>
          <div
            style={{
              display: 'grid',
              gap: 12,
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              alignItems: 'stretch',
            }}
          >
            <div style={{ display: 'grid', gap: 8 }}>
              <label className="label">Add a fruit</label>
              <div
                style={{
                  display: 'grid',
                  gap: 8,
                  gridTemplateColumns: '1fr 120px',
                  alignItems: 'stretch',
                }}
              >
                <input
                  className="input"
                  placeholder="e.g., Strawberry"
                  value={newFruit}
                  onChange={(e) => setNewFruit(e.target.value)}
                  style={{ height: 44 }}
                />
                <button className="btn btn-primary" onClick={addFruit} style={{ height: 44 }}>
                  Add
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gap: 8 }}>
              <label className="label">Filter</label>
              <input
                className="input"
                placeholder="Search fruit"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{ height: 44 }}
              />
            </div>

            <div style={{ display: 'grid', gap: 8 }}>
              <label className="label">Actions</label>
              <div style={{ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}>
                <button className="btn" onClick={sortByName} style={{ height: 44 }}>
                  Sort A → Z
                </button>
                <button className="btn" onClick={clearAll} style={{ height: 44 }}>
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ margin: 0 }}>Fruits</h3>
          {filtered.length === 0 && (
            <p className="muted" style={{ margin: 0 }}>No fruits found.</p>
          )}
          <div style={{ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
            {filtered.map((fruit) => (
              <div
                key={fruit.id}
                style={{
                  padding: '12px 14px',
                  borderRadius: 10,
                  border: '1px solid var(--border)',
                  background: 'var(--surface-elevated)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 10,
                  boxShadow: 'var(--shadow)',
                }}
              >
                <span style={{ fontWeight: 700, color: 'var(--text)' }}>{fruit.name}</span>
                <button className="btn" onClick={() => removeFruit(fruit.id)} style={{ minWidth: 64 }}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

