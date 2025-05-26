'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Search } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';

const products = [
  {
    title: 'Lavender Balm',
    description: 'Moisture plus magic manages dryness...',
    image: '/lavender.png',
    price: 12.0,
    originalPrice: 21.0,
  },
  {
    title: 'Hair Spray',
    description: 'Tame your flyaways, add shine...',
    image: '/spray.png',
    price: 23.0,
  },
  {
    title: 'Oil For Colored Hair',
    description: 'Closely resembles natural sebum...',
    image: '/oil.png',
    price: 45.0,
  },
  {
    title: 'Luxury Hair Butter',
    description: 'Deeply conditioning moisture butter...',
    image: '/butter.png',
    price: 25.0,
  },
  {
    title: 'Luxury Hair Shampoo',
    description: 'Deeply conditioning moisture butter...',
    image: '/shampoo.png',
    price: 15.0,
  },
  {
    title: 'Herbal Essence Oil',
    description: 'Deeply conditioning moisture butter...',
    image: '/herbal.png',
    price: 29.0,
  },
  {
    title: 'Luxury Hair Butter',
    description: 'Deeply conditioning moisture butter...',
    image: '/butter.png',
    price: 25.0,
  },
  {
    title: 'Herbal Essence Oil',
    description: 'Deeply conditioning moisture butter...',
    image: '/herbal.png',
    price: 29.0,
  },
];

export default function Services() {
  const scrollRef = useRef(null); // ✅ FIXED

  const scrollBy = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 4; // width of one card
      const scrollAmount = cardWidth * 4 * direction; // scroll 4 cards
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id='product'>
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-light text-gray-900 leading-snug mb-6">
          Our Featured Products
        </h2>
        <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-4" />
        <p className="text-base text-gray-500 max-w-xl mx-auto">
          Discover premium products designed to nourish and enhance your hair.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden" ref={scrollRef}>
          <div className="flex gap-6 w-max">
            {products.map((item, index) => (
              <div key={index} className="min-w-[25%] shrink-0">
                <div className="bg-white border border-gray-200 shadow rounded-lg p-4 text-center flex flex-col h-full">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative cursor-pointer group mb-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={180}
                          height={180}
                          className="mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                          <Search className="text-white w-8 h-8" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl p-4">
                      <DialogTitle className="text-xl font-medium">
                        {item.title}
                      </DialogTitle>
                      <Image
                        src={item.image}
                        alt={`${item.title} full view`}
                        width={600}
                        height={600}
                        className="w-full h-auto object-contain rounded mt-4"
                      />
                    </DialogContent>
                  </Dialog>

                  <h3 className="text-lg font-light text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{item.description}</p>
                  <div className="text-base font-medium">
                    {item.originalPrice ? (
                      <div className="space-x-2">
                        <span className="line-through text-gray-400">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                        <span className="text-[#006891]">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-[#006891]">
                        ${item.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-10 gap-8">
          <button
            onClick={() => scrollBy(-1)}
            className="text-3xl text-gray-700 hover:text-[#c09873] bg-transparent border-none"
          >
            ←
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="text-3xl text-gray-700 hover:text-[#c09873] bg-transparent border-none"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
