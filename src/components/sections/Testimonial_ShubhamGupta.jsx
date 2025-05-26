import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "You don’t get many offers while looking for a quick styling and cut. Thanks for the wonderful experience at Nelson Salon.",
    author: "Helen Blackwood",
  },
  {
    quote:
      "I am happy that I have used some of your premium products and feel absolutely great. Your hairdressers are the best. Keep it up.",
    author: "Samantha Edison",
  },
  {
    quote:
      "Everything about this place is simply great! I loved the atmosphere and friendly staff. Incredible job, I wish you luck!",
    author: "Emma Graceland",
  },
  // Add more feedback as needed
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 bg-white text-center font-light">
      <h2 className="text-5xl md:text-6xl mb-2 tracking-wide">What clients say</h2>
      <div className="w-16 h-1 bg-gray-700 mx-auto mb-16"></div>

      <div className="relative max-w-6xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              const { quote, author } = testimonials[index];
              return (
                <div
                  key={`${index}-${offset}`} // ✅ Unique key fix
                  className="text-gray-600 px-4"
                >
                  <div className="text-cyan-600 text-5xl mb-4">“</div>
                  <p className="text-base leading-relaxed mb-6">{quote}</p>
                  <p className="text-sm text-cyan-700 font-bold tracking-wider uppercase">
                    {author}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center gap-20 mt-14">
          <button
            onClick={prev}
            aria-label="Previous"
            className="text-gray-800 hover:text-cyan-600 transition"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="text-gray-800 hover:text-cyan-600 transition"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
