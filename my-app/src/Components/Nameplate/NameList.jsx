import * as React from 'react';
// Make sure to import the CSS file!
import './NameList.css'; 

export default function NameList({ studName, studentId, course, gender, age }) {
  return (
    <div className="name-card ornate-card">
      <div className="ornate-overlay" />
      <div className="name-content">
        <div className="name-top">
          <h1 className="name-title">{studName}</h1>
          <div className="pill id-pill">{studentId}</div>
        </div>

        <ul className="info-list">
          <li>
            <span className="bullet" />
            <span className="label">Course</span>
            <span className="value highlight">{course}</span>
          </li>
          <li>
            <span className="bullet" />
            <span className="label">Gender</span>
          <span className="value">{gender}</span>
          </li>
          <li>
            <span className="bullet" />
            <span className="label">Age</span>
            <span className="value">{age}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}