import { useState, useEffect, useRef } from "react";
import { HiPause, HiPlay } from "react-icons/hi";
import music from "/music1.mp3";
// import Musicplayer from "./musicplayer";

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
    <div className="header h-fit bg-myblack flex justify-center">
      <div className="my-14">
      {/* <PiShootingStarFill size={40} className="inline-block text-mypink" /> */}
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
            className="p-2 flex items-center gap-2 Jost  bg-white w-fit text-black font-extrabold text-lg rounded-full px-2 pl-4"
           
          >
            Play my Music{" "}
            {isPlaying ? (
              <span onClick={togglePlay} className="flex  items-center animate-spin gap-2">
                 <HiPause size={50}   className="  rounded-full text-mypink" />
              </span>
            ) : (
              <span onClick={togglePlay} className="flex rotate-45 items-center  gap-2">
                <HiPlay size={50}  className=" rounded-full text-mypink" />
              </span>
            )}
          </button>
        </div>
     
      </div>
       
      
       
    </div>
  );
}
