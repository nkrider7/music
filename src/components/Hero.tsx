import { useState, useEffect, useRef } from "react";
import { HiPause, HiPlay } from "react-icons/hi";
import music from "/music1.mp3";
import "./button.css";
import { motion } from "framer-motion";

export default function Hero() {
  const [show] = useState(true);
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
    <div className="header h-fit bg-cover bg-center pb-10 bg-fixed bg-black bg-opacity-50 flex items-center justify-center">
      <div className="mt-20">
        <h2 className="text-mypink text-2xl md:text-3xl font-Lob pr-6 text-right">
          Vocalist/Guitarist
        </h2>
        <h1 className="text-white text-5xl mt-4 md:mt-1 md:text-8xl font-Quinn tracking-wider text-center">
          <span  className="text-mypink cursor-pointer">
            Swar
          </span>
          Shraddhs
        </h1>
        <h2 className="hidden md:block text-white mb-2 font-semibold manrope italic my-2 text-center w-[40vw] leading-none">
          "Defeat is a detour, not a dead end."
        </h2>

        <div className="flex justify-center flex-col mx-auto mt-4">
          <button
            onClick={togglePlay}
            className="p-2 flex items-center gap-2 Jost mb-4 bg-white w-fit text-black font-extrabold text-lg rounded-full px-2 pl-4"
          >
            {!isPlaying ? "Play music" : "  "} <motion.div
              initial={{ opacity: 0, y: 50 }} // Animation start state
              animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Show/Hide animation
              exit={{ opacity: 0, y: 50 }} // Exit animation
              transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
            >
              {show && (
                <div className="text-center text-black text-lg font-bold p-4">
                  <p>{currentLyric}</p> {/* Display the current lyric */}
                </div>
              )}
            </motion.div>
            {isPlaying ? (
              <span className="flex items-center animate-spin gap-2">
                <HiPause size={50} className="rounded-full text-mypink" />
              </span>
            ) : (
              <span className="flex rotate-45 items-center gap-2">
                <HiPlay size={50} className="rounded-full text-mypink" />
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}