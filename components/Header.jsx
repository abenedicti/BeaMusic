import { useRef, useEffect, useContext } from 'react';
import { AudioContextApp } from '../context/AudioContext';
import muteBtn from '../src/assets/mute-btn.png';
import soundBtn from '../src/assets/sound-btn.png';
import '../components/header.css';

function Header() {
  const videoRef = useRef(null);
  const { headerIsMuted, toggleHeaderMute, playAudio } =
    useContext(AudioContextApp);

  useEffect(() => {
    if (videoRef.current) videoRef.current.volume = 0.2;

    playAudio(videoRef, 'header');
  }, []);

  return (
    <div className="header">
      <h1 className="handwriting">Bea Music</h1>

      <video
        ref={videoRef}
        src="/clip.mp4"
        autoPlay
        loop
        playsInline
        preload="metadata"
        muted={headerIsMuted}
      />

      <button onClick={toggleHeaderMute}>
        <img
          src={headerIsMuted ? muteBtn : soundBtn}
          alt={headerIsMuted ? 'Mute' : 'Play'}
        />
      </button>
    </div>
  );
}

export default Header;
