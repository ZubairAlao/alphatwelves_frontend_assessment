import { newsUpdates } from "@/constants"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ImageCarousel() {
  return (
    <Carousel className="w-full max-w-lg mx-auto">
      <CarouselContent>
        {newsUpdates.map((news) => (
          <CarouselItem key={news.image}>
            <div className="">
              <div className="flex flex-col aspect-square items-center justify-center relative">
                <img src={news.image} alt={news.title} className="lg:w-[440px] lg:h-[320px] w-full h-full" />
                <div className="absolute bottom-4 lg:bottom-32 p-2 text-white text-xs lg:w-[440px]">
                  <p className="font-semibold mb-2">{news.title}</p>
                  <p className="font-semibold">{news.text}</p>
                </div>
                <CarouselPrevious className="" />
                <CarouselNext className="" />
                <div className="absolute bottom-2 lg:bottom-28 flex gap-1 justify-center items-center">
                  <div className="h-1 w-4 bg-white rounded-lg"></div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
