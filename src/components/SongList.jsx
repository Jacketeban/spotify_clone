// src/components/SongList.jsx
import React, { useState } from 'react';
import SongDetail from './SongDetail';

// Mock de canciones por artista
const songsByArtist = {
  //ROCK
  Queen: [
    { title: 'Bohemian Rhapsody', youtubeId: 'fJ9rUzIMcZQ', description: 'Una de las canciones más emblemáticas de Queen.' },
    { title: 'Don\'t Stop Me Now', youtubeId: 'HgzGwKwLmgM', description: 'Un clásico animado para levantar el ánimo.' },
    { title: 'I Want to Break Free', youtubeId: 'f4Mc-NYPHaQ', description: 'Un clásico animado para levantar el ánimo.' },
  ],

  'Nirvana': [
    { title: 'Smells Like Teen Spirit', youtubeId: 'hTWKbfoikeg', description: 'El himno de la generación grunge.' },
    { title: 'Come As You Are', youtubeId: 'sbjQ9tuuTJQ', description: 'Una de las canciones más populares de Nirvana.' },
    { title: ' The Man Who Sold The World (MTV Unplugged)', youtubeId: 'fregObNcHC8', description: 'Uno de los Mtv Unplugged mas recordados.' },
  ],

  'Dragonforce': [
    { title: 'Through the Fire and Flames', youtubeId: '0jgrCKhxE1s', description: 'El himno de la generación grunge.' },
    { title: 'Heroes Of Our Time', youtubeId: 'JVNJH1ie6yk', description: 'Una de las canciones más populares de Nirvana.' },
    { title: 'Cry Thunder', youtubeId: 'r2ZstuGjF_c', description: 'Una de las canciones más populares de Nirvana.' },
  ],

  // TECHNO
  'Deadmau5': [
    {title: 'Ghosts n Stuff', youtubeId: 'h7ArUgxtlJs', description: 'la mejor cancion del mundo'},
    {title: 'Strobe', youtubeId: 'tKi9Z-f6qX4', description: 'la mejor cancion del mundo'},
    {title: 'Raise Your Weapon', youtubeId: 'YnwfTHpnGLY', description: 'la mejor cancion del mundo'}
  ],

  'FunkTribu': [
    {title: 'All of It', youtubeId: '0LsyF-4Z7UI', description: 'esta cancion es chevere'},
    {title: 'Keep Up', youtubeId: 'nyboMu2_BZI', description: 'esta cancion es chevere'},
    {title: 'DR34M$', youtubeId: '9TUOHKISN28', description: 'esta cancion es chevere'}
  ],

  'Skrillex': [
    {title: 'Bangarang', youtubeId: 'YJVmu6yttiw', description: 'esta cancion es chevere'},
    {title: 'Rock n Roll (Will Take You to the Mountain)', youtubeId: 'eOofWzI3flA', description: 'esta cancion es chevere'},
    {title: 'Butterflies', youtubeId: 'zliasEkWx0M', description: 'esta cancion es chevere'}
  ],

  // TRAP
  'Kendrick Lamar': [
    {title: 'Bangarang', youtubeId: 'YJVmu6yttiw', description: 'esta cancion es chevere'},
    {title: 'Rock n Roll (Will Take You to the Mountain)', youtubeId: 'eOofWzI3flA', description: 'esta cancion es chevere'},
    {title: 'Butterflies', youtubeId: 'zliasEkWx0M', description: 'esta cancion es chevere'}
  ],
  
  'Travis Scott': [
    {title: 'Bangarang', youtubeId: 'YJVmu6yttiw', description: 'esta cancion es chevere'},
    {title: 'Rock n Roll (Will Take You to the Mountain)', youtubeId: 'eOofWzI3flA', description: 'esta cancion es chevere'},
    {title: 'Butterflies', youtubeId: 'zliasEkWx0M', description: 'esta cancion es chevere'}
  ],

  'Eladio Carrión': [
    {title: 'Bangarang', youtubeId: 'YJVmu6yttiw', description: 'esta cancion es chevere'},
    {title: 'Rock n Roll (Will Take You to the Mountain)', youtubeId: 'eOofWzI3flA', description: 'esta cancion es chevere'},
    {title: 'Butterflies', youtubeId: 'zliasEkWx0M', description: 'esta cancion es chevere'}
  ],
};

const SongList = ({ artist }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const songs = songsByArtist[artist] || [];

  return (
    <div className="mt-4">
      <h4 className="text-md font-semibold mb-2">Canciones de {artist}</h4>
      <ul className="list-disc list-inside">
        {songs.map((song) => (
          <li
            key={song.title}
            className="cursor-pointer text-blue-500 hover:underline"
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

export default SongList;
