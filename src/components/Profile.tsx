
export default function Profile() {
  return (
    <div className=" mx-10 md:mx-24 mb-10">
         <section className="flex flex-col justify-between items-center gap-6 sm:gap-10 md:gap-16 lg:flex-row">

      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <p className="mb-4 font-semibold text-center md:text-start text-mypink md:mb-6  myfontD md:text-lg xl:text-xl">Very proud to introduce</p>

        <h1 className="mb-4 text-5xl text-center md:text-start font-bold text-black manrope sm:text-5xl md:mb-4 md:text-6xl">Hi My Name is Shraddha, </h1>

        <p className="mb-8 leading-relaxed font-semibold text-gray-500 manrope md:mb-12 lg:w-4/5 xl:text-lg">I'm a passionate artist and a school student, driven by creativity and music. As the lead of my band, I channel my artistry into performances that connect and inspire.</p>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <a href="#" className="inline-block manrope rounded-lg bg-mypink  px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-pink-600 focus-visible:ring active:bg-pink-700 md:text-base">Start now</a>

          <a href="#" className="inline-block manrope rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
        </div>
      </div>
     
      <div className="h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-2/4 xl:w-5/12">
        <img src="/dp1.png" loading="lazy" alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center" />
      </div>
      
    </section>
    </div>
  )
}
