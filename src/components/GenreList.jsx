// src/components/GenreList.jsx
import React, { useState } from 'react';
import ArtistList from './ArtistList';

const genres = ['Rock', 'Techno', 'Trap']; // Puedes ampliar esta lista

const GenreList = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Géneros Musicales</h2>
      <ul className="list-disc list-inside">
        {genres.map((genre) => (
          <li
            key={genre}
            className="cursor-pointer text-blue-500 hover:underline"
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </li>
        ))}
      </ul>

      {selectedGenre && <ArtistList genre={selectedGenre} />}
    </div>
  );
};

export default GenreList;
