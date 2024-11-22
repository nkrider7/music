import { BsInstagram, BsTwitterX, BsGithub } from "react-icons/bs" 
export default function Footer() {
  return (
    <div>
        <div className="bg-myblack pt-4 sm:pt-10 lg:pt-12">
  <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="flex flex-col items-center border-t pt-6">
      <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
        <a href="#" className="text-gray-500 transition duration-100 hover:text-pink-500 active:text-pink-600">About</a>
      
        <a href="#" className="text-gray-500 transition duration-100 hover:text-pink-500 active:text-pink-600">My Video</a>
        <a href="#" className="text-gray-500 transition duration-100 hover:text-pink-500 active:text-pink-600">Band</a>
        <a href="#" className="text-gray-500 transition duration-100 hover:text-pink-500 active:text-pink-600">Blog</a>
      </nav>
    
      <div className="flex gap-4">
        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
         <BsInstagram />
        </a>

        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <BsTwitterX />
        </a>

        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <BsGithub />
        </a>

       
      </div>
    </div>

    <div className="py-8 text-center text-sm text-gray-400">© 2024 - Present @nkriderking. All rights reserved.</div>
  </footer>
</div>
    </div>
  )
}
