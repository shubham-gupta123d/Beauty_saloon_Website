import { useEffect, useState } from "react";

export default function About() {
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000); // slide every 1 second
    return () => clearInterval(interval);
  }, [logos.length]);

  // Get 4 logos starting from current index (with wrap-around)
  const visibleLogos = logos
    .slice(startIndex, startIndex + 4)
    .concat(logos.slice(0, Math.max(0, 4 - (logos.length - startIndex))));

  return (
    <section className="py-12 bg-[#e9f1f1]" id="about">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-700">Our Partners</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          We proudly collaborate with leading brands in wellness and beauty.
        </p>
      </div>

      <div className="flex justify-center items-center gap-12 transition-all duration-500 ease-in-out">
        {visibleLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-20 w-auto grayscale opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
}
