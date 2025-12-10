import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const activities = [
    {
      name: 'Nameplate',
      path: '/nameplate',
      description: 'Browse through student information cards. View details including student ID, course, gender, and age for each student in the list.'
    },
    {
      name: 'Counter',
      path: '/prelim',
      description: 'Create and manage multiple counters. Add new counters, increment or decrement values, and reset individual or all counters.'
    },
    {
      name: 'Midterm Exam',
      path: '/quiz',
      description: 'Create and take quizzes. Build custom quizzes with multiple choice questions, take quizzes, and view your results and scores.'
    },
    {
      name: 'Shopping',
      path: '/shopping',
      description: 'Explore products by category, search, and sort items. Add to cart via quick buy.'
    },
    {
      name: 'Fruit List',
    path: '/fruitlist',
    description: 'Manage a simple fruit list. Add fruits and view the updated collection.'
    },
    {
      name: 'Calculator',
      path: '/calculator',
      description: 'Perform basic arithmetic operations. A functional calculator with addition, subtraction, multiplication, and division capabilities.'
    }
  ];

  return (
    <div className="page">
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="card" style={{ marginBottom: 32 }}>
          <h1 className="title">Welcome</h1>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h2 style={{ 
            fontSize: '28px', 
            fontWeight: 700, 
            color: 'var(--accent)', 
            marginBottom: 24,
            textShadow: '0 0 15px rgba(255, 107, 53, 0.3)'
          }}>
            Activities
          </h2>
        </div>

        <div style={{ display: 'grid', gap: 20 }}>
          {activities.map((activity, index) => (
            <Link 
              key={index}
              to={activity.path}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="card" style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <h3 style={{ 
                    fontSize: '22px', 
                    fontWeight: 700, 
                    color: 'var(--accent)',
                    margin: 0,
                    textShadow: '0 0 10px rgba(255, 107, 53, 0.3)'
                  }}>
                    {activity.name}
                  </h3>
                  <span style={{ 
                    color: 'var(--accent)', 
                    fontSize: '18px',
                    fontWeight: 600
                  }}>
                    →
                  </span>
                </div>
                <p style={{ 
                  color: 'var(--muted)', 
                  lineHeight: '1.6',
                  margin: 0,
                  fontSize: '15px'
                }}>
                  {activity.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}