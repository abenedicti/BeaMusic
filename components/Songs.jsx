//! convertir en mp4 si poss => plus fiable
import { useState, useRef, useEffect, useContext } from 'react';
import { AudioContextApp } from '../context/AudioContext';
import helpYourself from '../music/help-yourself.mpeg';
import clandestino from '../music/clandestino.mpeg';
import leTempsPasse from '../music/le-temps-passe.mp3';
import medley from '../music/medley.mpeg';
import stayinAlive from '../music/stayin-alive.mpeg';
import playBtn from '../icons/play.png';
import pauseBtn from '../icons/pause-btn.png';
import './playlist.css';

const musiques = [
  { src: helpYourself, name: 'Help Yourself' },
  { src: leTempsPasse, name: 'Le Temps Passe' },
  { src: medley, name: 'Medley' },
  { src: stayinAlive, name: 'Stayin Alive' },
  { src: clandestino, name: 'Clandestino' },
];

function Songs() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { playAudio, pauseAudio } = useContext(AudioContextApp);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, [currentIndex]);

  const handlePlayPause = (index) => {
    if (currentIndex === index) {
      if (isPlaying) {
        pauseAudio(audioRef);
        setIsPlaying(false);
      } else {
        playAudio(audioRef, 'playlist');
        setIsPlaying(true);
      }
      return;
    }

    setCurrentIndex(index);
    setIsPlaying(true);
    playAudio(audioRef, 'playlist');
  };

  return (
    <div className="playlist">
      {musiques.map((music, index) => (
        <div key={index} className="music-item">
          <span className="music-name">{music.name}</span>
          <button
            className={`play-btn ${currentIndex === index && isPlaying ? 'active' : ''}`}
            onClick={() => handlePlayPause(index)}
          >
            <img
              src={currentIndex === index && isPlaying ? pauseBtn : playBtn}
              alt={currentIndex === index && isPlaying ? 'Pause' : 'Play'}
              style={{ width: '20px', height: '20px' }}
            />
          </button>
        </div>
      ))}

      {currentIndex !== null && (
        <audio
          ref={audioRef}
          src={musiques[currentIndex].src}
          autoPlay
          onEnded={setIsPlaying}
        />
      )}
    </div>
  );
}

export default Songs;
