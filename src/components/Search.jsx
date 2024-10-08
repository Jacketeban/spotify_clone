// src/components/Search.jsx
import React, { useState } from 'react';
import SongDetail from './SongDetail';

// Reutilizamos el mock de canciones
const allSongs = [
  // Añade todas las canciones aquí o genera dinámicamente
  { title: 'Bohemian Rhapsody', youtubeId: 'fJ9rUzIMcZQ', description: 'Una de las canciones más emblemáticas de Queen.' },
  { title: 'Don\'t Stop Me Now', youtubeId: 'HgzGwKwLmgM', description: 'Un clásico animado para levantar el ánimo.' },
  { title: 'I Want to Break Free', youtubeId: 'f4Mc-NYPHaQ', description: 'Un clásico animado para levantar el ánimo.' },
  { title: 'Smells Like Teen Spirit', youtubeId: 'hTWKbfoikeg', description: 'El himno de la generación grunge.' },
  { title: ' The Man Who Sold The World (MTV Unplugged)', youtubeId: 'fregObNcHC8', description: 'Uno de los Mtv Unplugged mas recordados.' },
  { title: 'Come As You Are', youtubeId: 'sbjQ9tuuTJQ', description: 'Una de las canciones más populares de Nirvana.' },
  { title: 'Through the Fire and Flames', youtubeId: '0jgrCKhxE1s', description: 'El himno de la generación grunge.' },
  { title: 'Heroes Of Our Time', youtubeId: 'JVNJH1ie6yk', description: 'Una de las canciones más populares de Nirvana.' },
  { title: 'Cry Thunder', youtubeId: 'r2ZstuGjF_c', description: 'Una de las canciones más populares de Nirvana.' },
  {title: 'Ghosts n Stuff', youtubeId: 'h7ArUgxtlJs', description: 'la mejor cancion del mundo'},
  {title: 'Strobe', youtubeId: 'tKi9Z-f6qX4', description: 'la mejor cancion del mundo'},
  {title: 'Raise Your Weapon', youtubeId: 'YnwfTHpnGLY', description: 'la mejor cancion del mundo'},
  {title: 'All of It', youtubeId: '0LsyF-4Z7UI', description: 'esta cancion es chevere'},
  {title: 'Keep Up', youtubeId: 'nyboMu2_BZI', description: 'esta cancion es chevere'},
  {title: 'DR34M$', youtubeId: '9TUOHKISN28', description: 'esta cancion es chevere'},
  {title: 'Bangarang', youtubeId: 'YJVmu6yttiw', description: 'esta cancion es chevere'},
  {title: 'Rock n Roll (Will Take You to the Mountain)', youtubeId: 'eOofWzI3flA', description: 'esta cancion es chevere'},
  {title: 'Butterflies', youtubeId: 'zliasEkWx0M', description: 'esta cancion es chevere'}
  // Añade más canciones...
];

const Search = () => {
  const [query, setQuery] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    const results = allSongs.filter((song) =>
      song.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredSongs(results);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Buscar</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Buscar canciones..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <ul>
        {filteredSongs.map((song) => (
          <li
            key={song.title}
            className="cursor-pointer text-blue-500 hover:underline mb-2"
            onClick={() => setSelectedSong(song)}
          >
            {song.title}
          </li>
        ))}
      </ul>

      {selectedSong && <SongDetail song={selectedSong} />}
    </div>
  );
};

export default Search;
