import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNav.css';

export default function SideNav() {
  return (
    <aside className="side-nav">
      <div className="brand-row">
        <div className="brand-logo">☄</div>
        <div className="brand-text">
          <div className="brand-name">Activities</div>
          <div className="brand-sub">Dashboard</div>
        </div>
      </div>

      <div className="profile-card">
        <div className="avatar">RC</div>
        <div className="profile-info">
          <div className="profile-name">Ricablanca, Claudine</div>
          <div className="profile-meta">G5 · CSIT 340 · Elective 1</div>
        </div>
      </div>

      <nav className="nav-links">
        <NavLink end to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          <span className="icon">🏠</span>
          <span>Home</span>
        </NavLink>
        <NavLink to="/nameplate" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          <span className="icon">🪪</span>
          <span>Nameplate</span>
        </NavLink>
        <NavLink to="/prelim" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          <span className="icon">⏱</span>
          <span>Counter</span>
        </NavLink>
        <NavLink to="/quiz" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          <span className="icon">📝</span>
          <span>Midterm Exam</span>
        </NavLink>
        <NavLink to="/shopping" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          <span className="icon">🛒</span>
          <span>Shopping</span>
        </NavLink>
        <NavLink to="/fruitlist" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          <span className="icon">🍎</span>
          <span>Fruit List</span>
        </NavLink>
        <NavLink to="/calculator" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          <span className="icon">🔢</span>
          <span>Calculator</span>
        </NavLink>
      </nav>
    </aside>
  );
}