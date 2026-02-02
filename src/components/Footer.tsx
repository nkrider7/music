import { BsInstagram, BsTwitterX, BsGithub } from "react-icons/bs"

export default function Footer() {
  return (
    <footer className="bg-myblack text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-8 border-t border-white/10 pt-8">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-8">
            <a href="https://www.instagram.com/swar__shraddha/" className="font-Dosis text-sm font-medium text-gray-400 transition hover:text-mypink">
              About
            </a>
            <a href="#" className="font-Dosis text-sm font-medium text-gray-400 transition hover:text-mypink">
              My Video
            </a>
            <a href="https://www.instagram.com/swar_saathi/" className="font-Dosis text-sm font-medium text-gray-400 transition hover:text-mypink">
              Band
            </a>
            <a href="#" className="font-Dosis text-sm font-medium text-gray-400 transition hover:text-mypink">
              Blog
            </a>
          </nav>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/swar__shraddha/"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-gray-400 transition hover:text-mypink"
              aria-label="Instagram"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.instagram.com/swar__shraddha/"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-gray-400 transition hover:text-mypink"
              aria-label="X (Twitter)"
            >
              <BsTwitterX />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-gray-400 transition hover:text-mypink"
              aria-label="GitHub"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <p className="mt-8 text-center font-Dosis text-sm text-gray-500">
          © 2024 – Present Swar Shraddhs. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
