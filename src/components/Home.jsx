// src/components/Home.jsx
import React from 'react';
import GenreList from './GenreList';

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inicio</h1>
      <GenreList />
    </div>
  );
};

export default Home;
