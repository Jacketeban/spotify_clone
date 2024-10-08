import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

const SongDetail = ({ song }) => {
  const { favorites, addFavorite } = useContext(FavoritesContext);

  const handleAddFavorite = () => {
    if (!favorites.some((fav) => fav.title === song.title)) {
      addFavorite(song);
      alert('Canción agregada a favoritas!');
    } else {
      alert('La canción ya está en favoritas.');
    }
  };

  return (
    <div className="mt-4 p-4 bg-white rounded shadow">
      <h5 className="text-lg font-bold mb-2">{song.title}</h5>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${song.youtubeId}`}
        title={song.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="mb-2"
      ></iframe>
      <p className="mb-2">{song.description}</p>
      <button
        onClick={handleAddFavorite}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Agregar a Favoritas
      </button>
    </div>
  );
};

export default SongDetail;
