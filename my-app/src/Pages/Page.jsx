import React, { useState } from 'react';

export default function Page() {
  const [counters, setCounters] = useState([]);

  const addCounter = () => setCounters([...counters, 0]);
  const updateCounter = (index, delta) => {
    setCounters(counters.map((value, i) => {
      if (i !== index) return value;
      const newValue = value + delta;
      return newValue < 0 ? 0 : newValue;
    }));
  };
  const resetCounter = (index) => setCounters(counters.map((v, i) => (i === index ? 0 : v)));
  const resetAll = () => setCounters([]);

  return (
    <div className="page" style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '960px', display: 'grid', gap: 16 }}>
        <h1 className="title" style={{ marginBottom: 8 }}>Counter Manager</h1>
        <div
          className="card"
          style={{
            display: 'flex',
            gap: 12,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <button className="btn btn-primary" onClick={addCounter} style={{ minWidth: 180 }}>
            Add Counter
          </button>
          <button className="btn" onClick={resetAll} style={{ minWidth: 120 }}>
            Reset All
          </button>
        </div>

        <div style={{ display: 'grid', gap: 12 }}>
          {counters.map((value, index) => (
            <div key={index} className="card" style={{ display: 'grid', gap: 8 }}>
              <h4 style={{ margin: 0 }}>Counter #{index + 1}</h4>
              <p style={{ margin: 0, color: 'var(--muted)' }}>Value: {value}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <button className="btn" onClick={() => updateCounter(index, 1)}>+</button>
                <button className="btn" onClick={() => updateCounter(index, -1)}>-</button>
                <button className="btn" onClick={() => resetCounter(index)}>Reset</button>
              </div>
            </div>
          ))}

          {counters.length === 0 && (
            <div className="card" style={{ textAlign: 'center', color: 'var(--muted)' }}>
              No counters yet. Click “Add Counter” to begin.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



