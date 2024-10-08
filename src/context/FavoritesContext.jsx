// src/context/FavoritesContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

const FAVORITES_KEY = 'spotify-clone-favorites';

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
    setFavorites(storedFavorites);
  }, []);

  const addFavorite = (song) => {
    if (!favorites.some((fav) => fav.title === song.title)) {
      const updatedFavorites = [...favorites, song];
      setFavorites(updatedFavorites);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    }
  };

  const removeFavorite = (title) => {
    const updatedFavorites = favorites.filter((song) => song.title !== title);
    setFavorites(updatedFavorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
