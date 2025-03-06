// import Card from "./components/Card"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import PianoCompo from "./components/Piano"
// import Profile from "./components/Profile"
// import Spotify from "./components/Spotify"
import Videos from "./components/Videos"

function App() {
  return (
    <>
      <div className="">
        <Hero></Hero>

        <div className="h-screen bg-white">
          <div className=" mx-10 md:mx-24 mb-10">
            <section className="flex flex-col justify-between items-center gap-6 sm:gap-10 md:gap-16 lg:flex-row">

              <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                <p className="mb-4 font-bold font-Dosis text-center md:text-start text-mypink md:mb-6  myfontD md:text-lg xl:text-xl">Very proud to introduce</p>

                <h1 className="mb-4 text-5xl text-center md:text-start font-[800] text-black font-Lob sm:text-5xl md:mb-4 md:text-6xl">Hi My Name is <span className="text-mypink text-7xl ">Shraddha,</span> </h1>

                <p className="mb-8 leading-relaxed font-semibold text-gray-500 myfontD md:mb-12 lg:w-4/5 xl:text-lg">I'm a passionate artist and a school student, driven by creativity and music. As the lead of my band, I channel my artistry into performances that connect and inspire.</p>

                <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                  <a href="#" className="inline-block manrope rounded-lg bg-mypink  px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-pink-600 focus-visible:ring active:bg-pink-700 md:text-base">Follow me</a>

                  <a href="#" className="inline-block manrope rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">My Band</a>
                </div>
              </div>

              <div className="h-96 overflow-hidden rounded-lg bg-gray-100  shadow-lg lg:h-[50vh] xl:w-5/12">
                <img src="/dgp.webp" loading="lazy" alt="Photo by Fakurian Design" className="h-full contrast-125  transition delay-75 cursor-pointer  w-full myCur object-cover object-center" />
              </div>

            </section>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url('/bg.webp')",
          }}
          className=" bg-cover bg-fixed bg-center bg-no-repeat"
        >
          <div className="py-20 bg-mypink bg-opacity-65 flex-col  flex justify-center items-center">
            <h1 className="text-5xl text-white font-Lob my-4">Just Play!</h1>
            <PianoCompo />
          </div>
        </div>
        <h2 className="text-3xl mt-4 manrope font-[800] flex justify-center"><h2 className="text-mypink">My</h2> Videos</h2>
        <Videos />

        {/* <Spotify /> */}
        {/* <Profile /> */}
        {/* <Card /> */}
        <Footer />
      </div>
    </>
  )
}

export default App
