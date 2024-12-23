import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Profile from "./components/Profile"
import Spotify from "./components/Spotify"
import Videos from "./components/Videos"

function App() {
  return (
   <>
   <div className="">
    <Hero></Hero>
    <h2 className="text-3xl mt-4 manrope font-[800] flex justify-center"><h2 className="text-mypink">My</h2> Videos</h2>
    <Videos/>
    <Spotify />
    <Profile />
    <Footer />
   </div>
   </>
  )
}

export default App
