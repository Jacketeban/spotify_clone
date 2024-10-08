// src/components/Player.jsx
import React, { useRef, useState } from 'react';
import playIcon from '../assets/icons/play.svg'; // Asegúrate de la ruta correcta
import pauseIcon from '../assets/icons/pause.svg'; // Asegúrate de la ruta correcta

const Player = ({ song }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // 1 = 100%

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value; // Cambia el volumen
  };

  return (
    <div className="player">
      <audio ref={audioRef} src={`https://www.youtube.com/watch?v=${song.youtubeId}`} />
      <button onClick={togglePlayPause}>
        <img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? 'Pause' : 'Play'} />
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
      <label>Volumen: {Math.round(volume * 100)}%</label>
    </div>
  );
};

export default Player;
