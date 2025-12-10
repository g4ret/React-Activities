import React, { useState } from 'react';
import NameList from '../Components/Nameplate/NameList.jsx';

export default function NameplatePage() {
  const listOfNames = [
    {id:1, studName: 'CLAUDINE MARGARET C. RICABLANCA', studentId: '22-5548-343', course: 'BSIT', gender: 'Female', age: '23'},
    {id:2, studName: 'JOSHUA NOEL D. LO', studentId: '22-5164-874', course: 'BSIT', gender: 'Male', age: '24'},
    {id:3, studName: 'JUSFER JAY A. ORGE', studentId: '20-1214-875', course: 'BSIT', gender: 'Male', age: '22'},
    {id:4, studName: 'JUN PAUL P. ARRADAZA', studentId: '23-4347-110', course: 'BSIT', gender: 'Male', age: '20'},
    {id:5, studName: 'PATRICIA MAE PARBA ROSEL', studentId: '2006-40011', course: 'BSIT', gender: 'Female', age: '24'}
  ];

  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(listOfNames.length - 1, i + 1));

  const p = listOfNames[idx];

  return (
    <div className="page name-page-container">
      {/* The Card Component */}
      <NameList {...p} />

      {/* Navigation Buttons */}
      <div className="controls-area">
        <button 
          className="nav-btn" 
          onClick={prev} 
          disabled={idx === 0}
        >
          Previous
        </button>
        
        <button 
          className="nav-btn primary" 
          onClick={next} 
          disabled={idx === listOfNames.length - 1}
        >
          Next
        </button>
      </div>

      <div className="counter">
        Card {idx + 1} of {listOfNames.length}
      </div>
    </div>
  );
}
