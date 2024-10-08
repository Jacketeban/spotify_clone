// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Home from './components/Home';
import Search from './components/Search';
import Favorites from './components/Favorites';

function App() {
  return (
    <Router>
      <div className="flex">
        <SideMenu />
        <div className="flex-1 bg-gray-100 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
