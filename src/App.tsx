// import Card from "./components/Card"
import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import LoadingScreen from "./components/LoadingScreen"
import PianoCompo from "./components/Piano"
// import Profile from "./components/Profile"
// import Spotify from "./components/Spotify"
import Videos from "./components/Videos"

const MIN_LOADING_MS = 1200

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let minTimeoutDone = false
    let pageLoaded = false

    const tryFinish = () => {
      if (minTimeoutDone && pageLoaded) {
        setIsLoading(false)
      }
    }

    const minTimer = window.setTimeout(() => {
      minTimeoutDone = true
      tryFinish()
    }, MIN_LOADING_MS)

    const onLoad = () => {
      pageLoaded = true
      tryFinish()
    }

    if (document.readyState === "complete") {
      pageLoaded = true
      tryFinish()
    } else {
      window.addEventListener("load", onLoad)
    }

    return () => {
      clearTimeout(minTimer)
      window.removeEventListener("load", onLoad)
    }
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className="min-h-screen bg-white antialiased">
      <Hero />

      {/* About Section */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
            <div className="flex flex-col justify-center text-center lg:text-left lg:max-w-xl xl:max-w-2xl">
              <p className="mb-3 font-Dosis font-bold text-mypink text-base md:text-lg">
                Very proud to introduce
              </p>
              <h1 className="mb-4 font-Lob text-4xl font-extrabold text-black sm:text-5xl md:text-6xl xl:text-7xl leading-tight">
                Hi, my name is <span className="text-mypink">Shraddha,</span>
              </h1>
              <p className="mb-8 font-Dosis text-gray-600 leading-relaxed md:mb-10 md:text-lg">
                I'm a passionate artist and a school student, driven by creativity and music. As the lead of my band, I channel my artistry into performances that connect and inspire.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="https://www.instagram.com/swar__shraddha/"
                  target="_blank"
                  className="inline-flex justify-center rounded-xl bg-mypink px-8 py-3.5 font-semibold text-white shadow-lg shadow-mypink/25 transition hover:bg-pink-600 hover:shadow-mypink/30 active:bg-pink-700"
                >
                  Follow me
                </a>
                <a
                  href="https://www.instagram.com/swar_saathi/"
                  target="_blank"
                  className="inline-flex justify-center rounded-xl border-2 border-gray-200 bg-transparent px-8 py-3.5 font-semibold text-gray-600 transition hover:border-gray-300 hover:bg-gray-50 active:bg-gray-100"
                >
                  My Band
                </a>
              </div>
            </div>
            <div className="relative w-full max-w-lg lg:max-w-none lg:flex-1 xl:max-w-xl">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 shadow-xl ring-1 ring-black/5 md:aspect-square lg:aspect-[4/5]">
                <img
                  src="/dpavtar.jpeg"
                  loading="lazy"
                  alt="Shraddha"
                  className="h-full w-full object-cover object-center transition duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Piano Section */}
      <section
        style={{ backgroundImage: "url('/bg.webp')" }}
        className="relative bg-cover bg-fixed bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-mypink/70" />
        <div className="relative flex flex-col items-center justify-center px-6 py-20 md:py-28">
          <h2 className="font-Lob text-4xl font-bold text-white drop-shadow-sm md:text-5xl mb-8 md:mb-10">
            Just Play!
          </h2>
          <PianoCompo />
        </div>
      </section>

      {/* Videos Section */}
      <section className="bg-gray-50/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <h2 className="mb-10 text-center font-Dosis text-3xl font-extrabold text-black md:text-4xl">
            <span className="text-mypink">My</span> Videos
          </h2>
          <Videos />
        </div>
      </section>

      <Footer />
      </div>
    </>
  )
}

export default App
