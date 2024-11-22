import { useState, useEffect, useRef } from "react";
import { HiPause, HiPlay } from "react-icons/hi";
import music from "/music1.mp3";

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
        <h2 className="text-mypink text-2xl md:text-3xl myfontD pr-6 text-right">
          Vocalist/Guitarist
        </h2>
        <h1 className="text-white text-7xl manrope font-[800] text-center">
       Swar Shraddhs  
        </h1>
        <h2 className="font-light hidden md:block text-gray-400 manrope my-2 text-center w-[40vw] leading-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          excepturi necessitatibus, veniam?
        </h2>
        <div className="flex justify-center mt-4">
          <button
            className="p-2 flex items-center gap-2 bg-white w-fit text-black font-bold manrope rounded-full px-2 pl-4"
           
          >
            Play my Music{" "}
            {isPlaying ? (
              <span onClick={togglePlay} className="flex rotate-45 items-center gap-2">
                 <HiPause size={50}   className="  rounded-full text-mypink" />
              </span>
            ) : (
              <span onClick={togglePlay} className="flex rotate-45 items-center gap-2">
                <HiPlay size={50}  className=" rounded-full text-mypink" />
              </span>
            )}
          </button>
        </div>
     
      </div>
       
      
       
    </div>
  );
}
