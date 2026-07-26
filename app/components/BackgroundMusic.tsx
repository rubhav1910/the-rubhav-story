"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Automatically start playing on mount (with browser autoplay policy handling)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5; // Set a comfortable background volume level
    
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay was prevented by browser:", error);
        setIsPlaying(false);
      }
    };

    playAudio();

    // Fallback interaction listener in case browser blocks initial autoplay
    const handleUserInteraction = () => {
      if (audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch((e) => console.log(e));
      }
    };

    window.addEventListener("click", handleUserInteraction, { once: true });
    window.addEventListener("scroll", handleUserInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/Audio/wedding-bgm.mp3"
        loop
        preload="auto"
      />

      {/* Small Floating Music Control Button on Bottom-Left */}
      <button
        onClick={togglePlay}
        aria-label="Toggle Background Music"
        className="
          fixed
          bottom-6
          left-6
          z-[999]
          flex
          items-center
          justify-center
          w-10
          h-10
          rounded-full
          border
          border-[#D4AF37]/50
          bg-[#120A1F]/90
          backdrop-blur-xl
          text-[#F8F4ED]
          shadow-[0_0_15px_rgba(212,175,55,0.3)]
          transition-all
          duration-300
          hover:scale-110
          hover:border-[#D4AF37]
          hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]
        "
      >
        <span className="text-sm text-[#D4AF37]">
          {isPlaying ? "🎵" : "🔇"}
        </span>

        {/* Small Sound Waves Indicator Ring */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-[#D4AF37] animate-ping opacity-30 pointer-events-none" />
        )}
      </button>
    </>
  );
}