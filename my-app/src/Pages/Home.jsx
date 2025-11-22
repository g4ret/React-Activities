import React from 'react';

export default function Home() {
  return (
    <div className="page">
      <div className="card" style={{ maxWidth: 720, margin: '0 auto' }}>
        <h1 className="title">Gee Caliph A. Juen</h1>
        <p className="small">BSIT 3 student</p>
        <div style={{ height: 16 }} />
        <div style={{ display: 'grid', gap: 8 }}>
          <div><strong>Subject code:</strong> CSIT 340</div>
          <div><strong>Course subject:</strong> Elective 1</div>
          <div><strong>Section:</strong> G8</div>
        </div>
      </div>
    </div>
  );
}