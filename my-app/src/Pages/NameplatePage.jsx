import React, { useState } from 'react';
import NameList from '../Components/NameList.jsx';

export default function NameplatePage() {
  const people = [
    { platename: 'Gee Caliph A. Juen', course: 'BSIT', year: '3', gender: 'Male', definition: 'Student' },
    { platename: 'Lenon Ambot', course: 'BSIT', year: '3', gender: 'Male', definition: 'Student' },
    { platename: 'Gwapa Ko', course: 'BSIT', year: '4', gender: 'Female', definition: 'Student' },
  ];
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(people.length - 1, i + 1));

  const p = people[idx];

  return (
    <div className="page" style={{ maxWidth: 720, margin: '0 auto' }}>
      <h2 className="title">Name List</h2>
      <NameList {...p} />
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button className="btn" onClick={prev} disabled={idx === 0}>Previous</button>
        <button className="btn btn-primary" onClick={next} disabled={idx === people.length - 1}>Next</button>
      </div>
      <p className="small" style={{ marginTop: 8 }}>Card {idx + 1} of {people.length}</p>
    </div>
  );
}