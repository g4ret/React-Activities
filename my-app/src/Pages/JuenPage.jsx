import React, { useState } from 'react';

export default function JuenPage() {
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
    <div className="page" style={{ maxWidth: '720px', margin: '0 auto' }}>
      <h1 className="title">Counter Manager</h1>
      <div style={{ display: 'flex', gap: 8 }}>
        <button className="btn btn-primary" onClick={addCounter}>Add Counter</button>
        <button className="btn" onClick={resetAll}>Reset All</button>
      </div>
      {counters.map((value, index) => (
        <div key={index} className="card" style={{ marginTop: 15 }}>
          <h4>Counter #{index + 1}</h4>
          <p>value: {value}</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn" onClick={() => updateCounter(index, 1)}>+</button>
            <button className="btn" onClick={() => updateCounter(index, -1)}>-</button>
            <button className="btn" onClick={() => resetCounter(index)}>Reset</button>
          </div>
        </div>
      ))}
    </div>
  );
}