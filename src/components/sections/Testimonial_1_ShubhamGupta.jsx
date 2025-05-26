import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Example Data
const testimonials = [
  {
    image: "/client1.jpg",
    title: "Healthy anti-age skincare routine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla...",
    date: "MAY 22, 2018",
  },
  {
    image: "/client2.jpg",
    title: "Home hair dyeing 101: 5 steps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla...",
    date: "MAY 22, 2018",
  },
  {
    image: "/client3.jpg",
    title: "Makeup trends of summer 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla...",
    date: "MAY 22, 2018",
  },
  {
    image: "/client4.jpg",
    title: "Essential oils for healthy skin",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla...",
    date: "JUNE 10, 2019",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const current = (index + i) % testimonials.length;
      result.push(testimonials[current]);
    }
    return result;
  };

  return (
    <section className="py-20 bg-white text-center font-light" id="testimonial">
      <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-2">
        What our clients say
      </h2>
      <div className="w-16 h-[1px] bg-gray-500 mx-auto mb-16"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {getVisibleTestimonials().map((item, i) => (
              <div
                key={i}
                className="bg-[#f7f4ef] text-left shadow-sm"
              >
                <img src={item.image} alt={`testimonial-${i}`} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <p className="text-xs text-[#0385b2] font-bold uppercase tracking-wide">{item.date}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center gap-20 mt-14">
          <button
            onClick={prev}
            aria-label="Previous"
            className="text-gray-800 hover:text-[#9c7351] transition"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="text-gray-800 hover:text-[#9c7351] transition"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
