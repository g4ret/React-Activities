import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SideNav from './Components/SideNav/SideNav';
import Home from './Pages/Home';
import QuizPage from './Pages/QuizPage';
import Page from './Pages/Page';
import NameplatePage from './Pages/NameplatePage';
import CalculatorPage from './Pages/CalculatorPage';
import ShoppingPage from './Pages/ShoppingPage';
import FruitListPage from './Pages/FruitListPage';

function App() {
  return (
    <div className="app-shell">
      <SideNav />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prelim" element={<Page />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/fruitlist" element={<FruitListPage />} />
          <Route path="/nameplate" element={<NameplatePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
