//! convertir en mp4 si poss => plus fiable
import { useState, useRef, useEffect } from 'react';
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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, [currentIndex]);

  const handlePlayPause = (index) => {
    if (currentIndex === index) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentIndex(null);
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
          onEnded={handleEnded}
        />
      )}
    </div>
  );
}

export default Songs;
