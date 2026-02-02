import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const videoList = [
  "/music1.mp4",
  "/music2.mp4",
  "/music3.mp4",
  "/music4.mp4",
  "/music5.mp4",
  "/music6.mp4",
]

export function VideoCarousel() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === currentVideo) {
        video?.play()
      } else {
        video?.pause()
      }
    })
  }, [currentVideo])

  const handleSlideChange = (index: number) => {
    if (index < 0) setCurrentVideo(videoList.length - 1)
    else if (index >= videoList.length) setCurrentVideo(0)
    else setCurrentVideo(index)
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <Carousel className="w-full" opts={{ align: "center", loop: true }}>
        <div className="relative flex items-center justify-center gap-4 md:justify-between">
          <CarouselPrevious className="static shrink-0 md:absolute md:-left-12 md:top-1/2 md:-translate-y-1/2 border-mypink/30 bg-white text-mypink hover:bg-mypink hover:text-white" />
          <CarouselContent className="flex -ml-2 md:-ml-4">
            {videoList.map((videoSrc, index) => (
              <CarouselItem
                key={index}
                className={`pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-300 ${
                  index === currentVideo ? "scale-100 opacity-100" : "scale-[0.95] opacity-80"
                }`}
                onClick={() => handleSlideChange(index)}
              >
                <div className="p-1">
                  <Card className="overflow-hidden border-0 bg-transparent shadow-none">
                    <CardContent className="flex aspect-video items-center justify-center p-2 md:p-3">
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        className="h-64 w-full rounded-xl object-cover ring-2 ring-mypink/40 transition ring-offset-2 hover:ring-mypink"
                        width="100%"
                        src={videoSrc}
                        muted
                        playsInline
                        loop
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="static shrink-0 md:absolute md:-right-12 md:top-1/2 md:-translate-y-1/2 border-mypink/30 bg-white text-mypink hover:bg-mypink hover:text-white" />
        </div>
      </Carousel>
    </div>
  )
}

export default VideoCarousel;
