import { useState, useEffect, useRef } from "react";
import { HiPause, HiPlay } from "react-icons/hi";
import music from "/music1.mp3";
import "./button.css";
import a from "@/assets/keysound/a.mp3";
import b from "@/assets/keysound/b.mp3";
import c from "@/assets/keysound/c.mp3";
import d from "@/assets/keysound/d.mp3";
import e from "@/assets/keysound/e.mp3";
import f from "@/assets/keysound/f.mp3";
import g from "@/assets/keysound/g.mp3";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(music));

  // useEffect to clean up the audio when the component unmounts
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio.pause();
      audio.currentTime = 0;
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
    <div className="header h-fit bg-backgroundP bg-opacity-60 bg-myblack flex overflow-clip justify-center">
      <div className="mt-20">
        <h2 className="text-mypink text-2xl md:text-3xl font-Lob pr-6 text-right">
          Vocalist/Guitarist
        </h2>
        <h1 className="text-white text-5xl  mt-4 md:mt-1 md:text-8xl font-Quinn  tracking-wider text-center">
          <span className="text-mypink">Swar</span>Shraddhs
        </h1>
        <h2 className="  hidden md:block text-gray-400 font-semibold manrope italic my-2 text-center w-[40vw] leading-none">
          "Defeat is a detour, not a dead end."
        </h2>



        <div className="flex justify-center  mt-4">
          <button
            className="p-2 flex items-center gap-2 Jost mb-4  bg-white w-fit text-black font-extrabold text-lg rounded-full px-2 pl-4"
          >
            Play my Music{" "}
            {isPlaying ? (
              <span onClick={togglePlay} className="flex  items-center animate-spin gap-2">
                <HiPause size={50} className="  rounded-full text-mypink" />
              </span>
            ) : (
              <span onClick={togglePlay} className="flex rotate-45 items-center  gap-2">
                <HiPlay size={50} className=" rounded-full text-mypink" />
              </span>
            )}
          </button>
        </div>
        <Piano />
      </div>
    </div>
  );
}

interface KeyProps {
  isBlack: boolean;
  sound: string;
  note: string;
  keyLabel: string;
}

const Key = ({ isBlack, sound }: KeyProps) => {
  const keyClass = isBlack ? "black-key" : "white-key";

  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div className={`${keyClass} key`} onClick={playSound}>
      <span className="note-label"></span>
      <span className="key-label "></span>
    </div>
  );
};

const Piano = () => {
  const whiteKeys = [
    { note: "C", keyLabel: "A", sound: c },
    { note: "D", keyLabel: "S", sound: d },
    { note: "E", keyLabel: "D", sound: e },
    { note: "F", keyLabel: "F", sound: f },
    { note: "G", keyLabel: "G", sound: g },
    { note: "A", keyLabel: "H", sound: a },
    // { note: "B", keyLabel: "J", sound: b },
  ];

  const blackKeys = [
    null, // Spacer for missing E#
    { note: "C#", keyLabel: "Q", sound: d },
    { note: "D#", keyLabel: "W", sound: f },
    { note: "F#", keyLabel: "E", sound: b },
    null, // Spacer for missing E#
    { note: "G#", keyLabel: "R", sound: c },
    { note: "A#", keyLabel: "T", sound: a },
  ];

  return (
    <div className="piano-container mt-10">
      <div className="white-keys"> 
        {whiteKeys.map((key, index) => (
          <Key
            key={index}
            note={key.note}
            keyLabel={key.keyLabel}
            isBlack={false}
            sound={key.sound}
          />
        ))}
      </div>
      <div className="black-keys">
        {blackKeys.map((key, index) =>
          key ? (
            <Key
              key={index}
              note={key.note}
              keyLabel={key.keyLabel}
              isBlack={true}
              sound={key.sound}
            />
          ) : (
            <div key={index} className="spacer" />
          )
        )}
      </div>
    </div>
  );
};
