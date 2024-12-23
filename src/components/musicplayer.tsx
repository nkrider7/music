
export default function Musicplayer(){
  return (

      <div className="flex flex-col z-20 items-center group/he select-none">
        <div
          className="relative z-20 h-16 -mb-2 transition-all duration-200 "
        >
          <svg
            width="128"
            height="128"
            viewBox="0 0 128 128"
            className="duration-500 border-4 rounded-full shadow-md border-zinc-400 border-spacing-5 transition-all"
          >
            <svg>
              <rect width="128" height="128" fill="black"></rect>
              <circle cx="20" cy="20" r="2" fill="white"></circle>
              <circle cx="40" cy="30" r="2" fill="white"></circle>
              <circle cx="60" cy="10" r="2" fill="white"></circle>
              <circle cx="80" cy="40" r="2" fill="white"></circle>
              <circle cx="100" cy="20" r="2" fill="white"></circle>
              <circle cx="120" cy="50" r="2" fill="white"></circle>
              <circle cx="90" cy="30" r="10" fill="white" fill-opacity="0.5"></circle>
              <circle cx="90" cy="30" r="8" fill="white"></circle>
              <path
                d="M0 128 Q32 64 64 128 T128 128"
                fill="pink"
                stroke="black"
                stroke-width="1"
              ></path>
              <path
                d="M0 128 Q32 48 64 128 T128 128"
                fill="red"
                stroke="black"
                stroke-width="1"
              ></path>
              <path
                d="M0 128 Q32 32 64 128 T128 128"
                fill="rebeccapurple"
                stroke="black"
                stroke-width="1"
              ></path>
              <path
                d="M0 128 Q16 64 32 128 T64 128"
                fill="pink"
                stroke="black"
                stroke-width="1"
              ></path>
              <path
                d="M64 128 Q80 64 96 128 T128 128"
                fill="mediumpurple"
                stroke="black"
                stroke-width="1"
              ></path>
            </svg>
          </svg>
          <div
            className="absolute z-20 w-8 h-8 bg-white border-4 rounded-full shadow-sm border-zinc-400 top-12 left-12"
          ></div>
        </div>
      
      </div>

  )
}
