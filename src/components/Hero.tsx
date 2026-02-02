import { useState, useEffect, useRef } from "react";
import { HiPause, HiPlay } from "react-icons/hi";
import music from "/music1.mp3";
import "./button.css";
import { motion } from "framer-motion";

export default function Hero() {
  // const [show] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLyric, setCurrentLyric] = useState(""); // Current displayed lyric
  const audioRef = useRef(new Audio(music));

  const lyrics = [
    { time: 0, text: " ga ga re ga ga  a gum a garee" },
    { time: 5, text: "Re hees a ree ree sa nee sa nee" },
    { time: 10, text: "G A D DA DA D AD a gum p uh nee" },
    { time: 15, text: "D A NEE D A NA E A GUM A GAREE" },
    { time: 20, text: "A GUM G A D D A D A D a gum a garee" },
    { time: 25, text: "Re hees a ree ree sa nee sa nee" },
    { time: 30, text: "agum p uh nee D A NEE D A NEE" },
    { time: 35, text: "D A P A S A SA NEE" },
    { time: 40, text: "D a gum a garee a gum" },
    { time: 45, text: "Oonshish ii i e Sadi faza, jaise bhajate ho Shehnaiya" },
    { time: 50, text: "Lehraati hai behki hawa, gun gun ati hai tanhaiya" },
    { time: 55, text: "Sab gaate hai sab hi madhosh hai, hum tum kyu khamoshhai" },
    { time: 60, text: "you Sa Zidun. Tiro na. Chukwukwunga O Na." },
    { time: 65, text: "A O Na. A O Na. A O Na." },
  ];

  useEffect(() => {
    const audio = audioRef.current;

    // Sync lyrics with song playback
    const syncLyrics = () => {
      const currentTime = Math.floor(audio.currentTime);
      const matchedLyric = lyrics.find((lyric) => lyric.time === currentTime);
      if (matchedLyric) setCurrentLyric(matchedLyric.text);
    };

    audio.addEventListener("timeupdate", syncLyrics);

    // Clean up the audio when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener("timeupdate", syncLyrics);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <header className="header flex min-h-[85vh] flex-col items-center bg-cover bg-center bg-fixed px-6 pb-16 pt-24 md:min-h-[90vh] md:pt-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-2 font-Lob text-xl text-mypink md:text-2xl">
          Vocalist / Guitarist
        </p>
        <h1 className="font-Lob text-5xl font-bold tracking-wide text-white drop-shadow-md sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="text-mypink">Swar</span> Shraddhs
        </h1>
        <p className="mt-4 max-w-md font-Dosis text-base font-medium italic text-white/95 md:text-lg">
          &ldquo;Defeat is a detour, not a dead end.&rdquo;
        </p>

        <div className=" flex flex-col mt-80 items-center gap-4">
          <button
            onClick={togglePlay}
            type="button"
            className="flex items-center gap-4 rounded-full bg-white px-6 py-4 font-Jost text-base font-bold text-black shadow-xl transition hover:bg-gray-50 active:scale-[0.98]"
          >
            {!isPlaying ? (
              <HiPlay className="h-8 w-8 shrink-0 text-mypink md:h-9 md:w-9" />
            ) : (
              <HiPause className="h-8 w-8 shrink-0 text-mypink md:h-9 md:w-9" />
            )}
            <span>{isPlaying ? "Pause" : "Play music"}</span>
          </button>
          <motion.div
            key={currentLyric}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-[3rem] max-w-sm font-Dosis text-sm font-semibold text-white/90 md:text-base"
          >
            {currentLyric && <p>{currentLyric}</p>}
          </motion.div>
        </div>
      </div>
    </header>
  );
}