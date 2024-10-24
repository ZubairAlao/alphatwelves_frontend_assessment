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
    <Carousel className="w-full lg:w-1/2 mx-auto relative">
      <CarouselContent>
        {newsUpdates.map((news) => (
          <CarouselItem key={news.image}>
            <div className="lg:h-[320px] relative">
              <div className="flex flex-col aspect-square items-center justify-center">
                <img src={news.image} alt={news.title} className="h-full object-cover" />
                <div className="absolute bottom-4  p-2 text-white text-xs">
                  <p className="font-semibold mb-2">{news.title}</p>
                  <p className="font-semibold">{news.text}</p>
                </div>
                <CarouselPrevious className="" />
                <CarouselNext className="" />
                <div className="absolute bottom-2 flex gap-1 justify-center items-center">
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
