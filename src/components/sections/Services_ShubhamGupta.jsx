import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

export default function Services() {
  const services = [
    {
      title: "Makeup",
      description: "For a special occasion our makeup artists make...",
      icon: "/makeup.jpg", // Replace with actual JPG path
    },
    {
      title: "Cosmetology",
      description: "We offer top skin care programs for your...",
      icon: "/cosmetology.jpg",
    },
    {
      title: "Depilation",
      description: "Hair removal at our salon is painless, fast...",
      icon: "/depilation.jpg",
    },
    {
      title: "Manicure",
      description: "Basic manicure and pedicure, gel, or acrylic -...",
      icon: "/manicure.jpg",
    }
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8" id='services'>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-gray-900 mb-6 leading-snug">
            Service beyond <br /> expectation
          </h2>
          <div className="w-16 h-0.5 bg-gray-700 mx-auto mb-6" />
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Our hair salon is the territory created purely for women who appreciate premium quality,
            time and flawless look. At our place, you have a chance to have really good time.
          </p>
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: 'center', loop: true }} className="relative">
          <CarouselContent className="flex justify-center gap-6">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="bg-[#f8f5f0] p-8 text-center rounded-md shadow-sm h-full flex flex-col">
                  <div className="w-16 h-16 mx-auto mb-6 overflow-hidden rounded-full">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl text-gray-900 font-light mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Button
                    variant="link"
                    className="text-[#006891] text-sm font-semibold p-0"
                  >
                    READ MORE <ChevronRight className="inline ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows */}
          <div className="flex justify-center mt-10 gap-8">
            <CarouselPrevious className="static translate-y-0 border-none bg-transparent text-gray-700 hover:text-[#c09873] text-3xl">
              ←
            </CarouselPrevious>
            <CarouselNext className="static translate-y-0 border-none bg-transparent text-gray-700 hover:text-[#c09873] text-3xl">
              →
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
