import React from 'react';

interface SpotifyProps {
  className?: string; // Optional className for custom styling
}

const Spotify: React.FC<SpotifyProps> = ({ className = '' }) => {
  return (
   
    <div className=" mx-10 md:mx-24 mb-10">
         <section className="flex flex-col justify-between items-center gap-6 sm:gap-10 md:gap-16 lg:flex-row">

      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <p className="mb-4 font-semibold text-center md:text-start font-Lob text-mypink md:mb-6  md:text-lg xl:text-2xl">Here Is my</p>

        <h1 className="mb-4 text-5xl text-center font-Jost md:text-start font-extrabold text-black manrope sm:text-5xl md:mb-4 md:text-6xl">My Favorite Songs Playlist  </h1>
      </div>
     
      <div className="h-fit overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-fit xl:w-5/12">
      <div className={`w-full h-96 relative ${className}`}>
      {/* Embed the Spotify iframe with Tailwind classes */}
      <iframe
        src="https://open.spotify.com/embed/album/2ODvWsOgouMbaA5xf0RkJe?utm_source=oembed"
        className="w-full h-full absolute top-0 left-0 border-0"
        
        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </div>
      </div>
      
    </section>
    </div>

       

  );
};

export default Spotify;