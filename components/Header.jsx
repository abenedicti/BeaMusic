import { useRef, useState, useEffect } from 'react';
// import clip from '../public/clip.mp4';
import '../components/header.css';
import muteBtn from '../src/assets/mute-btn.png';
import soundBtn from '../src/assets/sound-btn.png';

function Header() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1;
    }
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
        muted={isMuted}
      />

      <button onClick={toggleSound}>
        <img
          src={isMuted ? muteBtn : soundBtn}
          alt={isMuted ? 'Mute' : 'Play'}
        />
      </button>
    </div>
  );
}

export default Header;
