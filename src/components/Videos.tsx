import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// List of video sources
const videoList = ["/music1.mp4", "/music2.mp4", "/music3.mp4", "/music4.mp4", "/music5.mp4", "/music6.mp4"];

export function VideoCarousel() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Play the current video and pause the others
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === currentVideo) {
        video?.play();
      } else {
        video?.pause();
      }
    });
  }, [currentVideo]);

  // Function to handle slide changes
  const handleSlideChange = (index: number) => {
    if (index < 0) {
      setCurrentVideo(videoList.length - 1); // Wrap to the last video
    } else if (index >= videoList.length) {
      setCurrentVideo(0); // Wrap to the first video
    } else {
      setCurrentVideo(index);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto cursor-pointer">
      <Carousel className="w-full">
        <CarouselContent className="flex -ml-1 transition-transform">
          {videoList.map((videoSrc, index) => (
            <CarouselItem
              key={index}
              className={`pl-1 md:basis-1/2 lg:basis-1/4 transition-transform duration-300 ${
                index === currentVideo ? "scale-100 opacity-100" : "scale-90 opacity-70"
              }`}
              onClick={() => handleSlideChange(index)}
            >
              <div className="p-1">
                <Card className="border-none shadow-none">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="rounded-2xl border-4 border-mypink"
                      width="100%"
                      src={videoSrc}
                      muted
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default VideoCarousel;
