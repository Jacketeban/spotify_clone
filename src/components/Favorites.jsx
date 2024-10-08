// src/components/Favorites.jsx
import React, { useState, useEffect } from 'react';
import SongDetail from './SongDetail';

// Clave para almacenar en localStorage
const FAVORITES_KEY = 'spotify-clone-favorites';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (title) => {
    const updatedFavorites = favorites.filter((song) => song.title !== title);
    setFavorites(updatedFavorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Favoritas</h1>
      {favorites.length === 0 ? (
        <p>No tienes canciones favoritas.</p>
      ) : (
        <ul>
          {favorites.map((song) => (
            <li key={song.title} className="mb-2">
              <span
                className="cursor-pointer text-blue-500 hover:underline"
                onClick={() => setSelectedSong(song)}
              >
                {song.title}
              </span>
              <button
                className="ml-2 text-red-500 hover:underline"
                onClick={() => removeFavorite(song.title)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}

      {selectedSong && <SongDetail song={selectedSong} />}
    </div>
  );
};

export default Favorites;
