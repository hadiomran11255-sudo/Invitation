import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;   // soft volume
      audio.muted = true;   // start muted (autoplay allowed)
      audio.play().catch(() => {
        console.log("Autoplay blocked until user interacts.");
      });
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.muted = false; // unmute when user clicks
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/src/assets/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating button */}
      <button
        className="music-btn"
        onClick={togglePlay}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? "🔊" : "🔇"}
      </button>
    </>
  );
}
