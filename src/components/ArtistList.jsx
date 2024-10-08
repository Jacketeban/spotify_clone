// src/components/ArtistList.jsx
import React, { useState } from 'react';
import SongList from './SongList';

// Mock de artistas por género
const artistsByGenre = {
  Rock: ['Queen', 'Nirvana', 'Dragonforce'],
  Techno: ['Deadmau5', 'FunkTribu', 'Skrillex'],
  Trap: ['Kendrick Lamar', 'Travis Scott', 'Eladio Carrión'],
};

const ArtistList = ({ genre }) => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const artists = artistsByGenre[genre] || [];

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Artistas de {genre}</h3>
      <ul className="list-disc list-inside">
        {artists.map((artist) => (
          <li
            key={artist}
            className="cursor-pointer text-blue-500 hover:underline"
            onClick={() => setSelectedArtist(artist)}
          >
            {artist}
          </li>
        ))}
      </ul>

      {selectedArtist && <SongList artist={selectedArtist} />}
    </div>
  );
};

export default ArtistList;
