import { useState, useRef } from 'react';
import { AudioContextApp } from './AudioContext';

function AudioProvider({ children }) {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [headerIsMuted, setHeaderIsMuted] = useState(true);
  const audioRef = useRef(null);
  const headerRef = useRef(null);

  const playAudio = (ref, type) => {
    if (type === 'playlist') {
      if (headerRef.current && !headerRef.current.muted) {
        headerRef.current.muted = true;
        setHeaderIsMuted(true);
      }

      if (audioRef.current && audioRef.current !== ref.current) {
        audioRef.current.pause();
      }
      audioRef.current = ref.current;
      setCurrentAudio(type);
      ref.current.play();
    } else if (type === 'header') {
      headerRef.current = ref.current;
      setCurrentAudio('header');
    }
  };

  const pauseAudio = (ref) => {
    if (ref.current) ref.current.pause();
    if (audioRef.current === ref.current) {
      setCurrentAudio(null);
      audioRef.current = null;

      if (headerRef.current) {
        headerRef.current.muted = false;
        setHeaderIsMuted(false);
      }
    }
  };

  const toggleHeaderMute = () => {
    if (!headerRef.current) return;
    headerRef.current.muted = !headerRef.current.muted;
    setHeaderIsMuted(headerRef.current.muted);
  };

  return (
    <AudioContextApp.Provider
      value={{
        currentAudio,
        playAudio,
        pauseAudio,
        headerRef,
        headerIsMuted,
        toggleHeaderMute,
      }}
    >
      {children}
    </AudioContextApp.Provider>
  );
}

export default AudioProvider;
