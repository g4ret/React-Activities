import * as React from 'react';

export default function NameList({ platename, course, year, gender, definition }) {
  return (
    <div className="card" style={{ maxWidth: 420 }}>
      <h3 className="title" style={{ marginBottom: 8 }}>{platename}</h3>
      <div style={{ display: 'grid', gap: 6 }}>
        <div><strong>Course:</strong> {course}</div>
        <div><strong>Year:</strong> {year}</div>
        <div><strong>Gender:</strong> {gender}</div>
        <div><strong>Definition:</strong> {definition}</div>
      </div>
    </div>
  );
}
